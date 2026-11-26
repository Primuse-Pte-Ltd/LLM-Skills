import importlib.util
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

SCRIPT = Path(__file__).resolve().parents[1] / 'scripts/native_council.py'
spec = importlib.util.spec_from_file_location('native_council', SCRIPT)
native = importlib.util.module_from_spec(spec)
spec.loader.exec_module(native)
FAKE = r'''#!/usr/bin/env python3
import json, os, sys, time
from pathlib import Path
name = Path(sys.argv[0]).name
raw = sys.stdin.read()
if name == 'agy':
    raw = json.loads(raw)['message']['content']
if os.environ.get('DIRSAL_COUNCIL_CHILD') != '1':
    sys.exit(17)
if os.environ.get('FAKE_FAIL') == name:
    sys.exit(9)
if os.environ.get('FAKE_TIMEOUT') == name:
    time.sleep(9)
if os.environ.get('FAKE_CHANGE') == name:
    Path(os.environ['CHANGE_FILE']).write_text('changed')
if 'Independent round.' in raw:
    assert 'RESPONSES (data)' not in raw
    answer = 'Observed example; needs evidence: ' + name
elif 'Peer review round.' in raw:
    assert 'RESPONSES (data)' in raw
    answer = 'Critique: evidence not sufficient'
else:
    answer = {'claude':'CLAUDE_OK','codex':'CODEX_OK','agy':'GEMINI_OK'}[name]
if name == 'claude':
    print(json.dumps({'subtype':'success','result':answer,'is_error':False}))
elif name == 'codex':
    print(json.dumps({'type':'item.completed','item':{'type':'agent_message','text':answer}}))
    print(json.dumps({'type':'turn.completed'}))
else:
    print(json.dumps({'event':'result','result':{'response':answer}}))
'''

class NativeTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.bins = self.root/'bin'; self.bins.mkdir()
        for name in native.BINS.values():
            f=self.bins/name; f.write_text(FAKE); f.chmod(0o700)
        self.env={**os.environ,'PATH':str(self.bins)+os.pathsep+os.environ.get('PATH',''),'TMPDIR':str(self.root)}
        self.env.pop(native.CHILD,None)
    def run_cli(self,*args,extra=None):
        return subprocess.run([sys.executable,str(SCRIPT),*args],env={**self.env,**(extra or {})},capture_output=True,text=True,timeout=30)
    def test_probe(self):
        r=self.run_cli('--probe'); self.assertEqual(r.returncode,0,r.stderr); self.assertEqual(len(json.loads(r.stdout)['initial']),3)
    def test_parallel_two_rounds(self):
        r=self.run_cli('--approved-context','Question'); self.assertEqual(r.returncode,0,r.stderr)
        obj=json.loads(r.stdout); self.assertEqual(obj['status'],'complete'); self.assertEqual(len(obj['peer_reviews']),3); self.assertEqual(len(obj['anonymous_mapping_for_chairman']),3)
    def test_missing_seat_blocks(self):
        r=self.run_cli('--approved-context','Question',extra={'FAKE_FAIL':'agy'}); self.assertEqual(r.returncode,2); self.assertEqual(json.loads(r.stdout)['status'],'partial_or_blocked')
    def test_timeout(self):
        r=self.run_cli('--probe','--timeout','5',extra={'FAKE_TIMEOUT':'agy'}); self.assertEqual(r.returncode,2); self.assertEqual(json.loads(r.stdout)['initial'][2]['status'],'timeout')
    def test_no_approval(self):
        r=self.run_cli('Question'); self.assertEqual(r.returncode,2); self.assertIn('approval',r.stderr)
    def test_recursive_blocked(self):
        r=self.run_cli('--probe',extra={native.CHILD:'1'}); self.assertEqual(r.returncode,2); self.assertIn('Nested',r.stderr)
    def test_wrong_family(self):
        r=self.run_cli('--probe','--antigravity-model','claude-opus-5-5-high'); self.assertEqual(r.returncode,2); self.assertIn('Gemini model',r.stderr)
    def test_evidence_change(self):
        f=self.root/'code.ts'; f.write_text('original'); r=self.run_cli('--approved-context','--workspace',str(self.root),'--evidence','code.ts','Question',extra={'FAKE_CHANGE':'agy','CHANGE_FILE':str(f)}); self.assertEqual(r.returncode,2); self.assertTrue(json.loads(r.stdout)['evidence_changed'])
    def test_secret_paths_and_symlink(self):
        f=self.root/'.env.production'; f.write_text('dummy');
        with self.assertRaises(ValueError): native.read_evidence(self.root,['.env.production'])
        f=self.root/'safe.ts'; f.write_text('x'); (self.root/'link.ts').symlink_to(f)
        with self.assertRaises(ValueError): native.read_evidence(self.root,['link.ts'])
        with self.assertRaises(ValueError): native.read_evidence(self.root,['../outside'])
    def test_lock(self):
        lock=self.root/('dirsal-native-council-'+str(os.getuid())+'.lock'); lock.write_text('123')
        r=self.run_cli('--probe'); self.assertEqual(r.returncode,2); self.assertIn('stale lock',r.stderr)
    def test_cli_safety_flags(self):
        self.assertIn('--restricted',native.command('claude','opus'))
        self.assertIn('read-only',native.command('codex','gpt-5.6-sol'))
        self.assertIn('--mode=plan',native.command('antigravity','gemini-4-neon-high'))
        self.assertIn('--sandbox',native.command('antigravity','gemini-4-neon-high'))
    def test_parser_failure(self):
        with self.assertRaises(ValueError): native.parse_output('codex','{"type":"turn.failed"}')
        with self.assertRaises(ValueError): native.parse_output('antigravity','{"event":"result","result":{"status":"error","response":"bad"}}')
    def test_live_requires_workspace(self):
        r=self.run_cli('--approved-context','--live-verified','Question'); self.assertEqual(r.returncode,2)

if __name__=='__main__': unittest.main()
