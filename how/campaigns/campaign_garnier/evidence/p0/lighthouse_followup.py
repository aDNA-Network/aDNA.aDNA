"""Post-initial-run variance/control pass; original results remain the baseline, not replaced."""
from pathlib import Path
import subprocess,json,time,urllib.request
R=Path.cwd();E=R/'how/campaigns/campaign_garnier/evidence/p0';O=E/'raw/lighthouse_followup';O.mkdir(exist_ok=True);cli=Path('/Users/stanley/.npm/_npx/0f94ee7615faf582/node_modules/lighthouse/cli/index.js')
log=(O/'preview.log').open('w');server=subprocess.Popen(['node','node_modules/astro/bin/astro.mjs','preview','--host','127.0.0.1','--port','4465'],cwd=R/'site',stdout=log,stderr=subprocess.STDOUT);rows=[]
try:
 for _ in range(30):
  try:urllib.request.urlopen('http://127.0.0.1:4465/',timeout=2);break
  except:time.sleep(1)
 jobs=[('home_repeat_'+str(i),'http://127.0.0.1:4465/','mobile') for i in range(3)]+[('unreachable_control','http://127.0.0.1:4466/','mobile')]+[(name+'_'+form,url,form) for name,url in [('nous_hermes','https://hermes-agent.nousresearch.com/'),('mastra','https://mastra.ai/')] for form in ['mobile','desktop']]
 for name,url,form in jobs:
  dest=O/(name+'.json');argv=['node',str(cli),url,'--output=json','--output-path='+str(dest),'--quiet','--chrome-flags=--headless=new --no-sandbox','--only-categories=performance,accessibility,best-practices,seo']
  if form=='desktop':argv+=['--preset=desktop']
  with (O/(name+'.log')).open('w') as f:
   try:code=subprocess.run(argv,cwd=R/'site',stdout=f,stderr=subprocess.STDOUT,timeout=180).returncode
   except subprocess.TimeoutExpired:code=124
  d=json.loads(dest.read_text()) if dest.exists() else {};row={'name':name,'url':url,'form':form,'exit':code,'argv':argv,'runtime_error':d.get('runtimeError'),'final_url':d.get('finalDisplayedUrl'),'categories':{k:v.get('score') for k,v in d.get('categories',{}).items()},'metrics':{k:d.get('audits',{}).get(k,{}).get('numericValue') for k in ['largest-contentful-paint','cumulative-layout-shift','total-blocking-time']},'raw':str(dest.relative_to(R))};rows.append(row);(E/'lighthouse_followup.json').write_text(json.dumps(rows,indent=2));print(name,code,row['categories'],row['runtime_error'],flush=True)
finally:server.terminate();server.wait(timeout=10);log.close()
