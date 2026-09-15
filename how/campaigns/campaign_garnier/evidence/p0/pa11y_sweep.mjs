// Supplemental HTML_CodeSniffer collection at 1280x800, browser-default theme (unrecorded); not WCAG 2.2 conformance.
import {createRequire} from 'node:module';import fs from 'node:fs';import path from 'node:path';
const root=process.cwd(),e=path.join(root,'how/campaigns/campaign_garnier/evidence/p0'),req=createRequire(path.join(e,'raw/tools/package.json')),pa11y=req('pa11y'),siteReq=createRequire(path.join(root,'site/package.json')), {chromium}=siteReq('@playwright/test');
const plan=JSON.parse(fs.readFileSync(path.join(e,'collection_plan.json')));const rows=[];
for(const route of Object.keys(plan.capture_routes)){
 try {const r=await pa11y('https://adna.network'+route,{chromeLaunchConfig:{executablePath:chromium.executablePath(),headless:true},standard:'WCAG2AA',runners:['htmlcs'],timeout:40000,wait:500,viewport:{width:1280,height:800},includeWarnings:true,includeNotices:true});rows.push({route,result:r});}
 catch(e){rows.push({route,error:e.message});}
 fs.writeFileSync(path.join(e,'pa11y_results.json'),JSON.stringify(rows,null,2));console.log(route,rows.at(-1).error||rows.at(-1).result.issues.length);
}
