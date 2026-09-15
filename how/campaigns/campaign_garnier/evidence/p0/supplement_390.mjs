// Supplemental VITRUVIUS width unsupported by canonical T0's fixed JSON; read-only browser collection.
import {createRequire} from 'node:module';import fs from 'node:fs';import path from 'node:path';
const root=process.cwd(),out=path.join(root,'how/campaigns/campaign_garnier/evidence/p0'), require=createRequire(path.join(root,'site/package.json'));
const {chromium}=require('@playwright/test'),{default:AxeBuilder}=require('@axe-core/playwright');
const plan=JSON.parse(fs.readFileSync(path.join(out,'collection_plan.json'))),browser=await chromium.launch();const rows=[];
const linked=process.argv.includes('--cohort-linked');
const targets=linked?plan.supplemental_comparators:{adna:{origin:'https://adna.network',routes:Object.keys(plan.capture_routes)},...plan.comparators};
for(const [name,conf] of Object.entries(targets)){
 for(const theme of plan.themes){
  const ctx=await browser.newContext({viewport:plan.supplemental_viewport.instrument_390,colorScheme:theme,reducedMotion:'reduce'});await ctx.addInitScript(t=>localStorage.setItem('theme',t),theme);
  for(const route of conf.routes){const page=await ctx.newPage(),row={name,route,theme,width:390};
   try{const resp=await page.goto(conf.origin+route,{waitUntil:'domcontentloaded',timeout:25000});row.status=resp.status();await page.waitForTimeout(1000);
    if(name==='adna')await page.evaluate(t=>document.documentElement.classList.toggle('dark',t==='dark'),theme);
    row.observed=await page.evaluate(()=>({url:location.href,title:document.title,themeClass:document.documentElement.className,colorScheme:getComputedStyle(document.documentElement).colorScheme,background:getComputedStyle(document.body).backgroundColor,width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
    const dir=path.join(out,'raw/captures',name,'instrument_390_'+theme);fs.mkdirSync(dir,{recursive:true});const slug=route.replaceAll('/','_')||'home';row.capture=path.relative(root,path.join(dir,slug+'.png'));await page.screenshot({path:row.capture,fullPage:true});
    const axe=await new AxeBuilder({page}).analyze();row.violations=axe.violations;row.incomplete=axe.incomplete;
   }catch(e){row.error=e.message;}finally{await page.close();rows.push(row);fs.writeFileSync(path.join(out,linked?'supplement_linked_390.json':'supplement_390.json'),JSON.stringify(rows,null,2));}
  } await ctx.close();console.log(name,theme,'complete');
 }
}await browser.close();
