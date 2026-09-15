"""Consumer orchestration of existing T0; no copied provider implementation."""
from pathlib import Path
import subprocess,json,concurrent.futures
R=Path(__file__).resolve().parents[5];E=Path(__file__).resolve().parent
plan=json.loads((E/'collection_plan.json').read_text())
def run(job):
 name,origin,routes,vp,theme=job;out=E/'raw/captures'/name/(vp+'_'+theme);out.mkdir(parents=True,exist_ok=True)
 argv=['node','scripts/visual_capture.mjs','--base',origin,'--routes',','.join(routes),'--viewports',vp,'--themes',theme,'--axe','--timeout','20000','--out',str(out)]
 with (out/'capture.log').open('w') as f:
  try:code=subprocess.run(argv,cwd=R,stdout=f,stderr=subprocess.STDOUT,timeout=900).returncode
  except subprocess.TimeoutExpired:code=124
 row={'name':name,'origin':origin,'routes':routes,'viewport':vp,'theme':theme,'exit':code,'argv':argv,'report':str((out/'capture_report.json').relative_to(R))};(out/'invocation.json').write_text(json.dumps(row,indent=2));print(name,vp,theme,code,flush=True);return row
jobs=[]
for name,conf in plan['supplemental_comparators'].items():jobs += [(name,conf['origin'],conf['routes'],vp,t) for vp in plan['canonical_viewports'] for t in plan['themes']]
with concurrent.futures.ThreadPoolExecutor(max_workers=1) as pool:results=list(pool.map(run,jobs))
(E/'cohort_capture_invocations.json').write_text(json.dumps(results,indent=2))
