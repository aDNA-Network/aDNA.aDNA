// Reproduce the read-only receipt check from the vault root; no site source changes.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const require=createRequire(path.resolve('site/package.json'));
const {chromium}=require('@playwright/test');
const {default:AxeBuilder}=require('@axe-core/playwright');
const base=path.resolve('how/campaigns/campaign_garnier');
const out=path.join(base,'evidence/amendments');
const browser=await chromium.launch({headless:true});
const results=[];
try {
 for(const width of [375,1440]) {
  const context=await browser.newContext({viewport:{width,height:1000}});
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.join(base,'artifacts/genesis/charter_gate.html')).href);
  await page.screenshot({path:path.join(out,`ratification_${width}.png`),fullPage:true});
  const axe=await new AxeBuilder({page}).analyze();
  results.push({width,title:await page.title(),decisions:await page.locator('section[aria-labelledby]').count(),forms:await page.locator('form,input,button').count(),overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),errors,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))});
  await context.close();
 }
} finally {await browser.close();}
fs.writeFileSync(path.join(out,'ratification_render_check.json'),JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify(results,null,2));
process.exitCode=results.some(r=>r.decisions!==10||r.forms!==0||r.overflow||r.errors.length||r.violations.length)?1:0;
