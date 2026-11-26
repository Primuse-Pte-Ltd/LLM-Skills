"""Offline tests using the real sibling transport with mocked CLI responses."""
import collections
import contextlib
import importlib.util
import io
import os
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('general_council', ROOT/'scripts/native_council.py')
c = importlib.util.module_from_spec(spec)
spec.loader.exec_module(c)

class CouncilTests(unittest.TestCase):
    def setUp(self):
        self.engine = c.load_engine()
        self.calls = []
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
    def fake(self, seat, model, prompt, cwd, timeout, live=False, expected=None):
        self.calls.append((seat, model, prompt, cwd, live, expected))
        return {'seat':seat,'requested_model':model,'status':'ok','response':expected or ('review' if 'ANSWERS (data)' in prompt else 'initial '+seat)}
    def run_council(self, probe=False):
        return c.council(self.engine,self.engine.MODELS,'Approved decision brief',Path(self.tmp.name),30,probe)
    def test_two_rounds_six_lenses(self):
        with patch.object(self.engine,'run_seat',side_effect=self.fake):
            result=self.run_council()
        self.assertEqual(result['status'],'complete')
        self.assertEqual(len(self.calls),12)
        self.assertEqual(len(result['initial']),6)
        self.assertEqual(len(result['peer_reviews']),6)
        self.assertEqual(len(result['anonymous_mapping_for_chairman']),6)
        for wave in (self.calls[:6], self.calls[6:]):
            self.assertEqual(collections.Counter(x[0] for x in wave),{'claude':2,'codex':2,'antigravity':2})
        self.assertTrue(all('ANSWERS (data)' not in x[2] for x in self.calls[:6]))
        self.assertTrue(all('ANSWERS (data)' in x[2] for x in self.calls[6:]))
        self.assertTrue(all(not x[4] for x in self.calls))
        self.assertEqual(len({x[2] for x in self.calls[:6]}),6)
        self.assertEqual(len({x[2] for x in self.calls[6:]}),1)
    def test_partial_initial(self):
        def fail(seat,*args,**kw):
            if seat=='codex': return {'seat':seat,'status':'failed','response':None}
            return self.fake(seat,*args,**kw)
        with patch.object(self.engine,'run_seat',side_effect=fail):
            result=self.run_council()
        self.assertEqual(result['status'],'partial_or_blocked')
        self.assertEqual(len(result['peer_reviews']),4)
    def test_partial_peer(self):
        def fail(seat,model,prompt,*args):
            if seat=='claude' and 'ANSWERS (data)' in prompt: return {'seat':seat,'status':'timeout','response':None}
            return self.fake(seat,model,prompt,*args)
        with patch.object(self.engine,'run_seat',side_effect=fail):
            self.assertEqual(self.run_council()['status'],'partial_or_blocked')
    def test_probe(self):
        with patch.object(self.engine,'run_seat',side_effect=self.fake):
            r=self.run_council(True)
        self.assertEqual(len(self.calls),3)
        self.assertEqual(r['status'],'complete')
        self.assertEqual(r['peer_reviews'],[])
    def assert_cli_error(self,args):
        with contextlib.redirect_stderr(io.StringIO()),self.assertRaises(SystemExit) as exc:
            c.main(args)
        self.assertEqual(exc.exception.code,2)
    def test_requires_approval(self): self.assert_cli_error(['question'])
    def test_recursive_rejected(self):
        with patch.dict(os.environ,{'DIRSAL_COUNCIL_CHILD':'1'}): self.assert_cli_error(['--probe'])
    def test_model_family_rejected(self): self.assert_cli_error(['--probe','--antigravity-model','claude-opus'])
    def test_missing_sibling(self):
        with patch.object(c,'ENGINE',Path(self.tmp.name)/'missing.py'): self.assert_cli_error(['--probe'])
    def test_shared_lock(self):
        with patch.object(c.tempfile,'gettempdir',return_value=self.tmp.name):
            lock=Path(self.tmp.name)/('dirsal-native-council-'+str(os.getuid() if hasattr(os,'getuid') else 'local')+'.lock')
            lock.write_text('existing')
            self.assert_cli_error(['--probe'])
            self.assertEqual(lock.read_text(),'existing')
    def test_no_workspace_mode(self): self.assert_cli_error(['--live-verified','--probe'])

if __name__=='__main__': unittest.main()
