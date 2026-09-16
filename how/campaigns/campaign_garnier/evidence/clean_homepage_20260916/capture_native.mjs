// One-sitting evidence, not a reusable provider instrument. Native UI themes, immutable rounds.
import {chromium} from '/Users/stanley/.cache/garnier-homepage-20260916/site/node_modules/playwright/index.mjs';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
const root='/Users/stanley/.cache/garnier-homepage-20260916';
const round=process.argv[2];if(!/^round\d+$/.test(round))throw new Error('name an immutable round');
const out=`/Users/stanley/aDNA/aDNA.aDNA/how/campaigns/campaign_garnier/evidence/clean_homepage_20260916/${round}/native`;
mkdirSync(out,{recursive:true});
const vp=JSON.parse(readFileSync(root+'/scripts/viewports.json'));
const b=await chromium.launch();const rows=[];
for(const [name,size] of Object.entries(vp).filter(([k])=>!k.startsWith('_')))for(const theme of ['dark','light']){
 const context=await b.newContext({viewport:size,colorScheme:theme,reducedMotion:'reduce'});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const response=await page.goto('http://127.0.0.1:4466/');if(theme==='light')await page.getByRole('button',{name:'Toggle dark mode'}).click();
 await page.evaluate(()=>Promise.all([document.fonts.ready,...[...document.images].map(i=>i.decode().catch(()=>{}))]));
 await page.evaluate(async()=>{getComputedStyle(document.body).backgroundColor;await Promise.all(document.getAnimations().filter(a=>a.effect?.getTiming().iterations!==Infinity).map(a=>a.finished.catch(()=>{})));});
 const state=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,theme:document.documentElement.classList.contains('dark')?'dark':'light',heroBackground:getComputedStyle(document.querySelector('.hero')).backgroundColor,bodyBackground:getComputedStyle(document.body).backgroundColor,treeClipped:[...document.querySelectorAll('.project-tree,.project-file,dt,dd')].filter(el=>el.scrollWidth>el.clientWidth+1).map(el=>el.textContent)}));
 const files=[];for(const [suffix,options] of [['first',{}],['full',{fullPage:true}],['hero',{fullPage:true,clip:await page.locator('.hero').boundingBox()}]]){
  const file=`${name}_${theme}_${suffix}.png`;await page.screenshot({path:`${out}/${file}`,...options});files.push({file,sha256:createHash('sha256').update(readFileSync(`${out}/${file}`)).digest('hex')});
 }
 rows.push({name,...size,...state,status:response.status(),errors,files});await context.close();
}
const sources={};for(const path of ['site/src/pages/index.astro','site/src/components/sections/HomeHero.astro','site/src/components/sections/RegistryCard.astro','site/src/data/home.ts'])sources[path]=createHash('sha256').update(readFileSync(root+'/'+path)).digest('hex');
writeFileSync(out+'/manifest.json',JSON.stringify({recordedAt:new Date().toISOString(),origin:'http://127.0.0.1:4466',baseCommit:'afa3f2a',sources,rows},null,2)+'\n');await b.close();
if(rows.some(r=>r.scrollWidth>r.width||r.treeClipped.length||r.errors.length||r.status!==200||r.heroBackground!==r.bodyBackground))throw new Error('Native check failed; read manifest');
console.log('Captured',rows.length,'native theme/viewport cells');
