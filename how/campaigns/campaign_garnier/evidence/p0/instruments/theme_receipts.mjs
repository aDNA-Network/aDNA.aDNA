// Read-only consumer receipt; observed theme supplements, never rewrites, frozen P0.1 evidence.
import fs from 'node:fs';import path from 'node:path';import{fileURLToPath,pathToFileURL}from'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(here,'../../../../../..'),out=path.dirname(here);
const{chromium}=await import(pathToFileURL(path.join(root,'site/node_modules/playwright/index.mjs')));
const vps=JSON.parse(fs.readFileSync(path.join(root,'scripts/viewports.json')));delete vps._comment;vps.fresh390={width:390,height:844};
const routes=['/','/get-started','/learn/what-is-adna','/community','/about','/commons','/network','/learn/concepts/triad'];
const browser=await chromium.launch({headless:true});const rows=[];
try{for(const theme of['light','dark']){
 const ctx=await browser.newContext({colorScheme:theme,reducedMotion:'reduce'});await ctx.addInitScript(t=>localStorage.setItem('theme',t),theme);
 for(const route of routes){const page=await ctx.newPage();await page.setViewportSize(vps.fresh390);const resp=await page.goto('https://adna.network'+route,{waitUntil:'networkidle',timeout:45000});
  for(const[viewport,dimensions]of[['fresh390',vps.fresh390],...Object.entries(vps).filter(([k])=>k!=='fresh390')]){
   await page.setViewportSize(dimensions);const observed=await page.evaluate(()=>({darkClass:document.documentElement.classList.contains('dark'),preferredDark:matchMedia('(prefers-color-scheme:dark)').matches,background:getComputedStyle(document.body).backgroundColor,main:!!document.querySelector('main'),url:location.href}));rows.push({route,viewport,dimensions,requestedTheme:theme,observedTheme:observed.darkClass?'dark':'light',status:resp.status(),...observed});
  }await page.close();
 }await ctx.close();
}}finally{await browser.close();}
const result={version:'garnier_consumer_v1',observed_at:new Date().toISOString(),rows,wrong_theme:rows.filter(x=>x.requestedTheme!==x.observedTheme),wrong_surface:rows.filter(x=>x.status!==200||!x.main),limits:'DOM theme receipt only; not a screenshot or computed-style audit of all components. Eight routes, fresh390 followed by six resizes.'};
fs.writeFileSync(path.join(out,'theme_receipts.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({rows:rows.length,wrong_theme:result.wrong_theme.length,wrong_surface:result.wrong_surface.length}));
