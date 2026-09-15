// GARNIER consumer experiment v1. No CI integration or provider implementation fork.
// Reusable extraction/coverage contract is staged in artifacts/p0/provider_pattern_proposal.md.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../../../../../..');
const evidence=path.dirname(here);
const {chromium}=await import(pathToFileURL(path.join(root,'site/node_modules/playwright/index.mjs')));
const banned=['seamless','cutting-edge','unlock','empower','revolutionary','leverage','robust','next-generation'];
const escaped=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const matches=text=>banned.flatMap(term=>[...text.matchAll(new RegExp('\\b'+escaped(term)+'\\b','gi'))].map(m=>({term,context:text.slice(Math.max(0,m.index-60),m.index+term.length+60)})));
const coverage=(expected,actual)=>({missing:expected.filter(x=>!actual.includes(x)),extra:actual.filter(x=>!expected.includes(x)),duplicates:actual.filter((x,i)=>actual.indexOf(x)!==i)});
const covered=(a,b)=>Object.values(coverage(a,b)).every(x=>x.length===0);
const matrixVerdict=rows=>rows.every(r=>r.status===r.expectedStatus&&r.requestedTheme===r.observedTheme&&r.png&&r.axeReached);
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({javaScriptEnabled:false});
await context.route('**/*',r=>r.abort());
const page=await context.newPage();
async function extract(html){
 await page.setContent(html,{waitUntil:'domcontentloaded'});
 return page.evaluate(()=>{
  const main=document.querySelector('main');if(!main)return {reached:false};
  const clone=main.cloneNode(true);const exclusions=[];
  for(const el of clone.querySelectorAll('script,style,pre,code,blockquote,q,[hidden],[aria-hidden="true"]')){
   if(!clone.contains(el))continue;exclusions.push({tag:el.tagName,text:el.textContent});el.replaceWith(document.createTextNode(' '));
  }
  // Block boundaries remain boundaries; inline nodes concatenate as their actual text does.
  for(const el of clone.querySelectorAll('p,div,section,h1,h2,h3,h4,h5,h6,li,br'))el.append(document.createTextNode(' '));
  return {reached:true,text:clone.textContent.replace(/\s+/g,' ').trim(),headings:[...clone.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(e=>e.textContent.trim()),exclusions};
 });
}
try{
 const controls=[];const add=(id,actual,expected)=>controls.push({id,actual,expected,pass:JSON.stringify(actual)===JSON.stringify(expected)});
 let good=await extract('<main><h1>Files for your agent</h1><p>Use this folder.</p></main>');add('valid_prose',matches(good.text).length,0);
 let bad=await extract('<main><p>A seamless setup.</p></main>');add('banned_prose',matches(bad.text).map(x=>x.term),['seamless']);
 let split=await extract('<main><h1>next-<em>generation</em> tools</h1></main>');add('split_inline_heading',matches(split.text).map(x=>x.term),['next-generation']);
 let quote=await extract('<main><blockquote>seamless</blockquote><code>unlock()</code><p>Useful files.</p></main>');add('quote_code_exclusions',matches(quote.text).length,0);add('exclusion_receipt',quote.exclusions.length,2);
 let adjacent=await extract('<main><q>seamless</q><p>Unlock results.</p></main>');add('quote_does_not_mask_adjacent_prose',matches(adjacent.text).map(x=>x.term),['unlock']);
 add('missing_main',(await extract('<article>Useful files.</article>')).reached,false);
 const overage=(words,target)=>words>target?'WARN':'PASS';add('word_positive',overage(10,10),'PASS');add('word_negative_is_advisory',overage(11,10),'WARN');
 add('coverage_positive',covered(['x.astro','y.jsx'],['x.astro','y.jsx']),true);add('missing_jsx',covered(['x.astro','y.jsx'],['x.astro']),false);add('missing_route',covered(['/','/about'],['/']),false);add('duplicate_not_coverage',covered(['/','/about'],['/','/']),false);
 let row={status:200,expectedStatus:200,requestedTheme:'dark',observedTheme:'dark',png:true,axeReached:true};add('matrix_positive',matrixVerdict([row]),true);add('wrong_theme',matrixVerdict([{...row,observedTheme:'light'}]),false);add('missing_png',matrixVerdict([{...row,png:false}]),false);add('checkpoint_wrong_surface',matrixVerdict([{...row,status:403}]),false);add('missing_axe',matrixVerdict([{...row,axeReached:false}]),false);
 // Invoke existing provider-consumer census in an isolated fixture tree, never mutate site/src.
 const scratch=path.join(evidence,'raw','token_controls');fs.mkdirSync(path.join(scratch,'src/components'),{recursive:true});fs.mkdirSync(path.join(scratch,'src/layouts'),{recursive:true});fs.mkdirSync(path.join(scratch,'scripts'),{recursive:true});fs.mkdirSync(path.join(scratch,'tests/gates'),{recursive:true});
 fs.copyFileSync(path.join(root,'site/scripts/component_token_census.mjs'),path.join(scratch,'scripts/component_token_census.mjs'));
 fs.copyFileSync(path.join(root,'site/tests/gates/gate-25-token-discipline.spec.ts'),path.join(scratch,'tests/gates/gate-25-token-discipline.spec.ts'));
 const tokenRun=css=>{fs.writeFileSync(path.join(scratch,'src/components/Fixture.astro'),`<style>.x {${css}}</style>`);return JSON.parse(execFileSync('node',['scripts/component_token_census.mjs','--json'],{cwd:scratch,encoding:'utf8'}));};
 const valid=tokenRun('color:var(--color-text); font-size:var(--text-base);');add('token_positive',valid.results[0].findings.length,0);
 const invalid=tokenRun('color:#123456; font-size:19px; border-radius:7px; box-shadow:1px 3px 7px black; font-weight:650; padding:13px;');add('token_bypass_families',[...new Set(invalid.results[0].findings.map(x=>x.family))].sort(),['colour','radius','shadow','spacing','type','weight']);
 fs.writeFileSync(path.join(evidence,'instrument_controls.json'),JSON.stringify({version:'garnier_consumer_v1',controls,token_positive:valid,token_negative:invalid,all_pass:controls.every(x=>x.pass)},null,2)+'\n');
 if(!controls.every(x=>x.pass))throw new Error('Consumer control failed; no census accepted');
 const inventory=JSON.parse(fs.readFileSync(path.join(evidence,'public_inventory.json'),'utf8'));
 const routes=['/','/get-started','/learn/what-is-adna','/community','/about','/commons','/network'];
 const rows=[];
 for(const route of routes){const input=inventory.find(x=>x.url==='https://adna.network'+route);if(!input)throw new Error('Missing route '+route);const extracted=await extract(fs.readFileSync(path.join(root,input.raw),'utf8'));if(!extracted.reached)throw new Error('Missing main '+route);rows.push({route,source_sha256:input.sha256,...extracted,banned_matches:matches(extracted.text),main_dom_words:extracted.text.split(/\s+/).length});}
 fs.writeFileSync(path.join(evidence,'first_contact_dom_census.json'),JSON.stringify({version:'garnier_consumer_v1',banned,coverage:coverage(routes,rows.map(x=>x.route)),rows},null,2)+'\n');
 console.log(JSON.stringify({controls:controls.length,passed:controls.filter(x=>x.pass).length,routes:rows.length,banned:rows.map(x=>({route:x.route,hits:x.banned_matches}))}));
}finally{await browser.close();}
