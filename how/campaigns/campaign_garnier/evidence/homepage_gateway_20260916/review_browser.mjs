// One-sitting browser evidence for the clean GARNIER homepage pass, 2026-09-16.
// Uses shipped UI theme controls; no theme class/localStorage injection.
import {chromium} from '/Users/stanley/.cache/garnier-homepage-20260916/site/node_modules/playwright/index.mjs';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const out='/Users/stanley/aDNA/aDNA.aDNA/how/campaigns/campaign_garnier/evidence/homepage_gateway_20260916';
const vp=JSON.parse(readFileSync('/Users/stanley/.cache/garnier-homepage-20260916/scripts/viewports.json'));
const command=JSON.parse(readFileSync('/Users/stanley/.cache/garnier-homepage-20260916/site/src/data/install_truth.json')).one_liner;
const b=await chromium.launch();
const report={recordedAt:new Date().toISOString(),native:[],shared:[],interaction:{},limits:['Single builder Chromium QA; no human reader observations.','Native light preference retains dark-first default; light states use the shipped toggle.','Local preview lacks Vercel speed-insights adapter script.']};
mkdirSync(out+'/native',{recursive:true});
mkdirSync(out+'/shared',{recursive:true});
async function shotHero(page,path){
 await page.evaluate(()=>scrollTo(0,0));
 await page.evaluate(()=>Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))));
 await page.evaluate(()=>document.fonts.ready);
 const box=await page.locator('.hero').boundingBox();
 return page.screenshot({path,fullPage:true,clip:box});
}
async function open(port,width,theme='dark',extra={}){
 const context=await b.newContext({viewport:width,colorScheme:theme,reducedMotion:'reduce',...extra});
 const page=await context.newPage();
 const errors=[]; page.on('pageerror',e=>errors.push(e.message));
 await page.goto(`http://127.0.0.1:${port}/`);
 const initial=await page.evaluate(()=>document.documentElement.classList.contains('dark')?'dark':'light');
 if(theme==='light' && extra.javaScriptEnabled!==false) await page.getByRole('button',{name:'Toggle dark mode'}).click();
 await page.evaluate(async()=>{await document.fonts.ready;getComputedStyle(document.body).backgroundColor;await Promise.all(document.getAnimations().filter(a=>a.effect?.getTiming().iterations!==Infinity).map(a=>a.finished.catch(()=>{})));});
 return {context,page,initial,errors};
}
// Compare unchanged shared consumers in both themes at three representative widths.
for(const route of ['/network','/commons'])for(const name of ['mobile-lg','laptop-sm','desktop'])for(const theme of ['dark','light']){
 const sides=[];
 for(const port of [4465,4466]){
  const {context,page}=await open(port,vp[name],theme);
  await page.goto(`http://127.0.0.1:${port}${route}`);await page.evaluate(()=>document.fonts.ready);
  const png=await shotHero(page,`${out}/shared/${route.slice(1)}_${name}_${theme}_${port}.png`);
  const text=await page.locator('main').innerText();
  sides.push({port,heroPngSha256:createHash('sha256').update(png).digest('hex'),mainTextSha256:createHash('sha256').update(text).digest('hex')});
  await context.close();
 }
 assert.equal(sides[0].mainTextSha256,sides[1].mainTextSha256);
 report.shared.push({route,name,theme,sides,pixelsIdentical:sides[0].heroPngSha256===sides[1].heroPngSha256,mainTextIdentical:true});
}

// Gateway core paths, keyboard focus and destination health.
const tasks=['/learn/what-is-adna/','/get-started/','/vaults/','/community/'];
for(const javaScriptEnabled of [true,false]){
 const {context,page}=await open(4466,vp.desktop,'dark',{javaScriptEnabled});
 const links=await page.locator('main a').evaluateAll(es=>es.map(e=>({text:e.textContent.trim(),href:e.getAttribute('href')})));
 for(const link of links){const res=await context.request.get('http://127.0.0.1:4466'+link.href);assert.equal(res.status(),200,link.href);}
 const stops=[];await page.keyboard.press('Tab');await page.keyboard.press('Enter');
 for(let i=0;i<9;i++){await page.keyboard.press('Tab');stops.push(await page.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e),r=e.getBoundingClientRect();return{href:e.getAttribute('href'),text:e.textContent.trim(),outline:s.outlineStyle,outlineWidth:s.outlineWidth,visible:r.top>=69&&r.bottom<=innerHeight};}));}
 for(const href of tasks)assert.ok(stops.some(s=>s.href===href&&s.visible&&s.outline!=='none'),href);
 report.interaction[javaScriptEnabled?'keyboard':'no_js']={links,stops};await context.close();
}
for(const theme of ['dark','light']){
 const {context,page}=await open(4466,vp.mobile,theme);
 await page.addStyleTag({content:'*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}'});
 await page.screenshot({path:out+'/spacing_320_'+theme+'.png',fullPage:true});
 const state=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,clipped:[...document.querySelectorAll('.project-tree,dt,dd,.gateway-copy p,.gateway-paths li')].filter(e=>e.scrollWidth>e.clientWidth+1).map(e=>e.textContent)}));
 assert.ok(state.scrollWidth<=state.width);assert.equal(state.clipped.length,0);report.interaction['spacing_'+theme]=state;await context.close();
}
for(const mode of ['reduce','no-preference']){
 const {context,page}=await open(4466,vp.desktop,'dark',{reducedMotion:mode});
 const state=await page.evaluate(()=>({images:document.querySelectorAll('main img,main picture,main canvas').length,animations:document.getAnimations().filter(a=>document.querySelector('main').contains(a.effect?.target)).length,words:document.querySelector('main').innerText.trim().split(/\s+/).length}));
 assert.equal(state.images,0);assert.equal(state.animations,0);report.interaction[mode]=state;await context.close();
}
await b.close();writeFileSync(out+'/browser_review.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({shared:report.shared.length,sharedExact:report.shared.filter(s=>s.pixelsIdentical).length,interaction:'passed'}));
