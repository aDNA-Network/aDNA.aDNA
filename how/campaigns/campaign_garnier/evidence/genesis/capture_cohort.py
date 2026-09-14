from pathlib import Path
import subprocess,json,concurrent.futures,datetime
root=Path('/Users/stanley/aDNA/aDNA.aDNA'); out=root/'how/campaigns/campaign_garnier/evidence/genesis/raw/reference_captures'
cohort=[('nous','https://nousresearch.com','/','both'),('mastra','https://mastra.ai','/','vitruvius'),('mcp','https://modelcontextprotocol.io','/','both'),('e2b','https://e2b.dev','/','vitruvius'),('letta','https://letta.com','/','vitruvius'),('openhands','https://all-hands.dev','/','vitruvius'),('goose','https://block.github.io','/goose/','vitruvius'),('pydantic_ai','https://ai.pydantic.dev','/','both'),('browser_use','https://browser-use.com','/','vitruvius'),('openclaw','https://openclaw.ai','/','vitruvius'),('openai_research','https://openai.com','/research/','craft'),('anthropic','https://www.anthropic.com','/','craft'),('hugging_face','https://huggingface.co','/','craft'),('stripe_docs','https://docs.stripe.com','/','craft'),('linear','https://linear.app','/','craft'),('vercel','https://vercel.com','/','craft'),('astro','https://astro.build','/','craft'),('mozilla','https://www.mozilla.org','/en-US/','craft'),('our_world_in_data','https://ourworldindata.org','/','craft')]
out.mkdir(parents=True,exist_ok=True)
(out/'cohort.json').write_text(json.dumps(cohort,indent=2))
def capture(row):
 name,base,route,group=row;dest=out/name;dest.mkdir(exist_ok=True)
 cmd=['node','scripts/visual_capture.mjs','--base',base,'--routes',route,'--viewports','all','--themes','light,dark','--timeout','20000','--out',str(dest)]
 with (dest/'capture.log').open('w') as f:
  try:r=subprocess.run(cmd,cwd=root,stdout=f,stderr=subprocess.STDOUT,timeout=160);code=r.returncode
  except subprocess.TimeoutExpired:code=124
 result={'name':name,'url':base+route,'cohort':group,'exit_code':code,'png_count':len(list(dest.glob('*.png'))),'captured_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'theme_interpretation':'requested system preference and class; native support requires visual adjudication; no theme-conformance claim'}
 (dest/'run.json').write_text(json.dumps(result,indent=2));print(json.dumps(result),flush=True);return result
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool: results=list(pool.map(capture,cohort))
(out/'run_summary.json').write_text(json.dumps(results,indent=2))
