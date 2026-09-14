from pathlib import Path
import json,subprocess,concurrent.futures
root=Path('/Users/stanley/aDNA/aDNA.aDNA');out=root/'how/campaigns/campaign_garnier/evidence/genesis/raw/live_captures';out.mkdir(exist_ok=True)
vps=[k for k in json.loads((root/'scripts/viewports.json').read_text()) if not k.startswith('_')]
routes='/,/get-started,/learn/what-is-adna,/about,/community,/commons,/network'
def run(pair):
 vp,theme=pair;p=out/(vp+'_'+theme);p.mkdir(exist_ok=True)
 cmd=['node','scripts/visual_capture.mjs','--base','https://adna.network','--routes',routes,'--viewports',vp,'--themes',theme,'--axe','--out',str(p)]
 with (p/'capture.log').open('w') as f:r=subprocess.run(cmd,cwd=root,stdout=f,stderr=subprocess.STDOUT,timeout=420)
 print(vp,theme,r.returncode,flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:list(pool.map(run,[(v,t) for v in vps for t in ['light','dark']]))
