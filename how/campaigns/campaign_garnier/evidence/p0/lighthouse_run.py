from pathlib import Path
import subprocess,time,urllib.request,json
root=Path('/Users/stanley/aDNA/aDNA.aDNA');out=root/'how/campaigns/campaign_garnier/evidence/p0/raw/lighthouse';out.mkdir(exist_ok=True)
cli=Path('/Users/stanley/.npm/_npx/0f94ee7615faf582/node_modules/lighthouse/cli/index.js')
log=(out/'preview.log').open('w');server=subprocess.Popen(['node','node_modules/astro/bin/astro.mjs','preview','--host','127.0.0.1','--port','4465'],cwd=root/'site',stdout=log,stderr=subprocess.STDOUT)
try:
 for i in range(30):
  try:
   urllib.request.urlopen('http://127.0.0.1:4465/',timeout=2);break
  except:time.sleep(1)
 else:raise RuntimeError('preview did not serve requested origin')
 summary=[]
 for route in ['/','/get-started','/learn/what-is-adna','/vaults','/vaults/graph']:
  for form in ['mobile','desktop']:
   name=(route.strip('/').replace('/','_') or 'home')+'_'+form;dest=out/(name+'.json');cmd=['node',str(cli),'http://127.0.0.1:4465'+route,'--output=json','--output-path='+str(dest),'--quiet','--chrome-flags=--headless=new --no-sandbox','--only-categories=performance,accessibility,best-practices,seo']
   if form=='desktop':cmd+=['--preset=desktop']
   with (out/(name+'.log')).open('w') as f:
    try:r=subprocess.run(cmd,cwd=root/'site',stdout=f,stderr=subprocess.STDOUT,timeout=180);code=r.returncode
    except subprocess.TimeoutExpired:code=124
   row={'route':route,'form':form,'exit':code}
   if dest.exists():
    d=json.loads(dest.read_text());row.update({'final_url':d.get('finalDisplayedUrl',d.get('finalUrl')),'runtime_error':d.get('runtimeError'),'lighthouse':d.get('lighthouseVersion'),'user_agent':d.get('userAgent'),'config':d.get('configSettings'),'categories':{k:v.get('score') for k,v in d.get('categories',{}).items()},'metrics':{k:d.get('audits',{}).get(k,{}).get('numericValue') for k in ['largest-contentful-paint','cumulative-layout-shift','total-blocking-time']}})
   summary.append(row);(out/'summary.json').write_text(json.dumps(summary,indent=2));print(json.dumps({k:v for k,v in row.items() if k not in ['config','user_agent']}),flush=True)
finally:
 server.terminate();server.wait(timeout=10);log.close()
