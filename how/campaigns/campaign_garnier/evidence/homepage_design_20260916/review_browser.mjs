// One-sitting browser evidence for the bounded GARNIER homepage pass, 2026-09-16.
// Uses shipped UI theme controls; no theme class/localStorage injection.
import {chromium} from '/Users/stanley/.cache/garnier-homepage-20260916/site/node_modules/playwright/index.mjs';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const out='/Users/stanley/aDNA/aDNA.aDNA/how/campaigns/campaign_garnier/evidence/homepage_design_20260916';
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
 await page.evaluate(()=>document.fonts.ready);
 return {context,page,initial,errors};
}
for(const [name,size] of Object.entries(vp).filter(([k])=>!k.startsWith('_'))){
 for(const theme of ['dark','light']){
  const {context,page,initial,errors}=await open(4466,size,theme);
  const state=await page.evaluate(()=>({theme:document.documentElement.classList.contains('dark')?'dark':'light',width:innerWidth,scrollWidth:document.documentElement.scrollWidth,heroTheme:document.querySelector('.hero').classList.contains('dark')?'dark':'light',command:document.querySelector('.hero-install-cmd').textContent,columns:getComputedStyle(document.querySelector('.hero-grid')).gridTemplateColumns,titleAlign:getComputedStyle(document.querySelector('h1')).textAlign}));
  assert.equal(state.theme,theme);assert.equal(state.command,command);assert.ok(state.scrollWidth<=state.width);assert.equal(state.titleAlign,'left');assert.equal(errors.length,0);
  await shotHero(page,`${out}/native/${name}_${theme}_hero.png`);
  await page.screenshot({path:`${out}/native/${name}_${theme}_viewport.png`});
  report.native.push({name,size,osPreference:theme,initial,lightOptIn:theme==='light',...state,errors});
  await context.close();
 }
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
// Actual clipboard write and controlled rejection; rejection is an injected fault, not a server failure.
{
 const {context,page}=await open(4466,vp.desktop,'dark',{permissions:['clipboard-read','clipboard-write']});
 await page.getByRole('button',{name:'Copy install command'}).click();
 await page.waitForFunction(()=>document.querySelector('.hero-copy-status').textContent==='Command copied.');
 const copied=await page.evaluate(()=>navigator.clipboard.readText());assert.equal(copied,command);
 await page.locator('.hero-install-block').screenshot({path:out+'/copy_success.png'});
 await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw new DOMException('Blocked for review','NotAllowedError')}}}));
 await page.getByRole('button',{name:'Copy install command'}).click();
 await page.waitForFunction(()=>document.querySelector('.hero-copy-status').textContent.startsWith('Copy unavailable.'));
 await page.locator('.hero-install-block').screenshot({path:out+'/copy_failure.png'});
 report.interaction.copy={exactCommandCopied:copied===command,failure:await page.locator('.hero-copy-status').innerText(),liveRegion:await page.locator('.hero-copy-status').getAttribute('role'),buttonStillEnabled:await page.locator('.hero-install-copy').isEnabled()};
 // Keyboard traversal from main skip-link includes the actions, control, both code regions and source.
 await page.reload();await page.keyboard.press('Tab');await page.keyboard.press('Enter');
 const stops=[];
 for(let i=0;i<10;i++){
  await page.keyboard.press('Tab');
  stops.push(await page.evaluate(()=>{const e=document.activeElement,r=e.getBoundingClientRect(),s=getComputedStyle(e);return {tag:e.tagName,text:(e.textContent||'').trim().slice(0,80),class:e.className,outline:s.outlineStyle,outlineWidth:s.outlineWidth,rect:{x:r.x,y:r.y,width:r.width,height:r.height},visible:r.bottom>69&&r.top<innerHeight}}));
 }
 report.interaction.keyboard=stops;
 for(const token of ['btn-primary','btn-secondary','hero-install-copy','project-tree','governance-example','example-source']) assert.ok(stops.some(s=>s.class.includes(token)&&s.visible&&s.outline!=='none'),token);
 await page.locator('.example-source').focus();await page.locator('.example-source').screenshot({path:out+'/source_focus.png'});
 await context.close();
}
// Narrow viewport code scrolling, text spacing, no-JS and art unavailable.
{
 const {context,page}=await open(4466,vp.mobile);
 await page.locator('.project-tree').focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(250);
 const scroll=await page.locator('.project-tree').evaluate(e=>({scrollLeft:e.scrollLeft,clientWidth:e.clientWidth,scrollWidth:e.scrollWidth}));
 assert.ok(scroll.scrollWidth>scroll.clientWidth && scroll.scrollLeft>0);report.interaction.keyboardCodeScroll=scroll;
 await page.addStyleTag({content:'*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important} p{margin-bottom:2em!important}'});
 await shotHero(page,out+'/spacing_320.png');
 const spaced=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,actions:[...document.querySelectorAll('.hero-actions a,.hero-install-copy,.example-source')].map(e=>({text:e.textContent.trim(),width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}))}));
 assert.ok(spaced.scrollWidth<=spaced.width);report.interaction.textSpacing=spaced;
 await context.close();
}
for(const kind of ['no_js','art_disabled','normal_motion']){
 const extra=kind==='no_js'?{javaScriptEnabled:false}:kind==='normal_motion'?{reducedMotion:'no-preference'}:{};
 const {context,page}=await open(4466,kind==='normal_motion'?vp.desktop:vp['mobile-lg'],'dark',extra);
 if(kind==='art_disabled'){
  await page.route('**/*',route=>route.request().resourceType()==='image'?route.abort():route.continue());await page.reload();await page.evaluate(()=>document.fonts.ready);
 }
 await shotHero(page,`${out}/${kind}.png`);
 const state={kind,title:await page.locator('h1').innerText(),command:await page.locator('.hero-install-cmd').textContent(),copyVisible:await page.locator('.hero-install-copy').isVisible(),text:await page.locator('.hero').innerText()};
 assert.equal(state.command,command);if(kind==='no_js')assert.equal(state.copyVisible,false);
 report.interaction[kind]=state;await context.close();
}
// Fresh frozen mobile baseline for side-by-side review.
{
 const {context,page}=await open(4465,vp['mobile-lg']);await shotHero(page,out+'/before_mobile_hero.png');await context.close();
}
await b.close();writeFileSync(out+'/native_review.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({native:report.native.length,shared:report.shared.length,interaction:'passed'}));
