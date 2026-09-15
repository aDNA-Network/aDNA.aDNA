// Native companion to T0: no class or localStorage mutation; public pages only.
import { chromium } from '../../../../../site/node_modules/playwright/index.mjs';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, '../../../../../');
const sites = JSON.parse(readFileSync(path.join(dir,'reference_set.json'))).sites;
const vps = JSON.parse(readFileSync(path.join(root,'scripts/viewports.json')));
mkdirSync(path.join(dir,'native'),{recursive:true});
const browser = await chromium.launch();
for (const site of sites) {
  const rows=[];
  for (const vpName of ['desktop','mobile-lg']) {
    const ctx=await browser.newContext({viewport:vps[vpName],colorScheme:'light',reducedMotion:'reduce'});
    const page=await ctx.newPage();
    let status=null, error=null;
    try { const r=await page.goto(site.url,{waitUntil:'domcontentloaded',timeout:25000});status=r?.status(); }
    catch(e){error=e.message.split('\n')[0];}
    await page.waitForTimeout(1500);
    await page.evaluate(()=>document.fonts.ready);
    const data=await page.evaluate(()=>{
      const visible=e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width>0&&r.height>0&&s.visibility!=='hidden'&&s.display!=='none';};
      const box=e=>{const r=e.getBoundingClientRect();return {x:Math.round(r.x),y:Math.round(r.y+scrollY),w:Math.round(r.width),h:Math.round(r.height)};};
      const get=sel=>[...document.querySelectorAll(sel)].filter(visible).map(e=>({tag:e.tagName,text:e.innerText?.trim().replace(/\s+/g,' ').slice(0,300)||e.getAttribute('aria-label')||'',href:e.getAttribute('href'),...box(e)}));
      const main=document.querySelector('main')||document.body;
      const h=document.querySelector('h1');const hs=h?getComputedStyle(h):null;
      return {url:location.href,title:document.title,viewport:{width:innerWidth,height:innerHeight},documentWidth:document.documentElement.scrollWidth,fullHeight:document.documentElement.scrollHeight,
        h1:get('h1'),headings:get('h2,h3').filter(e=>e.text),
        headerControls:get('header a,header button,nav a,nav button').filter(e=>e.y<150&&e.y>=0&&e.text),
        foldControls:get('a,button').filter(e=>e.y<innerHeight&&e.y>=0&&e.text),
        paragraphs:[...main.querySelectorAll('p')].filter(visible).slice(0,8).map(e=>({text:e.innerText.slice(0,600),...box(e)})),
        fonts:{body:getComputedStyle(document.body).fontFamily,headline:hs?.fontFamily,headlinePx:hs?.fontSize},
        bodyBackground:getComputedStyle(document.body).backgroundColor};
    });
    const stem=`${site.id}__${vpName}`;
    await page.screenshot({path:path.join(dir,'native',stem+'__fold.png')});
    await page.evaluate(()=>scrollTo(0,innerHeight));
    await page.waitForTimeout(400);
    await page.screenshot({path:path.join(dir,'native',stem+'__next.png')});
    rows.push({id:site.id,capturedAt:new Date().toISOString(),requestedURL:site.url,status,error,colorScheme:'light',reducedMotion:'reduce',domMutation:false,...data});
    await ctx.close();
  }
  writeFileSync(path.join(dir,'native',site.id+'.json'),JSON.stringify(rows,null,2)+'\n');
  console.log(JSON.stringify({id:site.id,cells:rows.map(x=>({width:x.viewport.width,status:x.status,error:x.error,h1:x.h1.map(x=>x.text)}))}));
}
await browser.close();
