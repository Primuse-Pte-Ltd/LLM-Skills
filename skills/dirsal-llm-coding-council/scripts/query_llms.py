#!/usr/bin/env python3
"""Compatibility entrypoint for the former two-model consult.
Native Codex + Antigravity by default; direct HTTP only with --api.
"""
import argparse
import json
import os
from pathlib import Path
import subprocess
import sys
import urllib.request


def http_query(seat, model, key, prompt):
    if seat == 'chatgpt':
        url = 'https://api.openai.com/v1/chat/completions'
        headers = {'Authorization': 'Bearer '+key, 'Content-Type': 'application/json'}
        body = {'model':model, 'messages':[{'role':'user','content':prompt}]}
    else:
        from urllib.parse import quote
        url = 'https://generativelanguage.googleapis.com/v1beta/models/'+quote(model,safe='')+':generateContent'
        headers = {'x-goog-api-key':key,'Content-Type':'application/json'}
        body = {'contents':[{'parts':[{'text':prompt}]}]}
    try:
        req = urllib.request.Request(url, data=json.dumps(body).encode(), headers=headers)
        with urllib.request.urlopen(req, timeout=60) as f:
            obj = json.load(f)
        text = obj['choices'][0]['message']['content'] if seat=='chatgpt' else ''.join(p.get('text','') for p in obj['candidates'][0]['content']['parts'])
        if not text:
            raise ValueError('Empty answer')
        return {'model':model,'source':'explicit-api','response':text,'status':'ok'}
    except Exception as e:
        return {'model':model,'source':'explicit-api','response':None,'status':'failed','error':type(e).__name__}


def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('prompt')
    p.add_argument('--approved-context',action='store_true')
    p.add_argument('--api',action='store_true',help='Explicitly authorize direct billed APIs; uses exported keys and model IDs only')
    args=p.parse_args()
    if os.environ.get('DIRSAL_COUNCIL_CHILD'):
        p.error('Nested council invocation is prohibited')
    if not args.approved_context:
        p.error('Operator approval of shared context required')
    if args.api:
        required=('OPENAI_API_KEY','GEMINI_API_KEY','OPENAI_MODEL','GEMINI_MODEL')
        if any(not os.environ.get(k) for k in required):
            p.error('Export all four variables: '+', '.join(required)+'; .env files are not read')
        result={'chatgpt':http_query('chatgpt',os.environ['OPENAI_MODEL'],os.environ['OPENAI_API_KEY'],args.prompt),
                'gemini':http_query('gemini',os.environ['GEMINI_MODEL'],os.environ['GEMINI_API_KEY'],args.prompt)}
    else:
        proc=subprocess.run([sys.executable,str(Path(__file__).with_name('native_council.py')),
                             '--approved-context','--rounds','1','--seats','codex','antigravity','--',args.prompt],capture_output=True,text=True)
        try:
            report=json.loads(proc.stdout)
            entries={r['seat']:r for r in report['initial']}
            result={k:{'model':entries[s]['requested_model'],'source':s+'-cli','response':entries[s]['response'],
                       'status':entries[s]['status'],**({'error':entries[s]['error']} if 'error' in entries[s] else {})}
                    for k,s in [('chatgpt','codex'),('gemini','antigravity')]}
        except (ValueError,KeyError):
            print(json.dumps({'error':'Native runner failed; run native_council.py directly for details'}))
            return 2
    print(json.dumps(result,indent=2,ensure_ascii=False))
    return 0 if all(r['status']=='ok' for r in result.values()) else 2

if __name__=='__main__':
    raise SystemExit(main())
