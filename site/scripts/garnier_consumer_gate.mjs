#!/usr/bin/env node
// GARNIER P1 consumer gate; agent_codex, 2026-09-15. Provider proposal is staged locally.
// Scope: declared capture populations and extracted main DOM prose, not human comprehension.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {chromium} from 'playwright';
const self=fileURLToPath(import.meta.url);
const root=path.resolve(path.dirname(self),'../..');
const banned=['seamless','cutting-edge','unlock','empower','revolutionary','leverage','robust','next-generation'];
const arg=n=>{const i=process.argv.indexOf(n);return i<0?undefined:process.argv[i+1];};
const key=r=>JSON.stringify([r.route,r.viewport,r.theme]);
const fail=m=>{throw new Error(m);};
function checkMatrix(input){
 const {expected,rows}=input;
 if(!Array.isArray(expected)||!expected.length||!Array.isArray(rows)||!rows.length)fail('empty population');
 const ids=expected.map(key), actual=rows.map(key);
 if(new Set(ids).size!==ids.length||new Set(actual).size!==actual.length)fail('duplicate cell');
 if(ids.length!==actual.length||ids.some(k=>!actual.includes(k)))fail('incomplete or unexpected population');
 for(const e of expected)if(!e.route?.startsWith('/')||!e.viewport||!['dark','light'].includes(e.theme))fail('invalid expected cell');
 for(const r of rows){
  if(r.status!==200||r.observedTheme!==r.theme||r.axeReached!==true||!Array.isArray(r.axeViolations)||r.axeViolations.length)fail('wrong surface/theme or axe failure');
  if(typeof r.png!=='string'||!fs.existsSync(r.png))fail('missing PNG');
  if(!fs.readFileSync(r.png).subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))fail('invalid PNG');
 }
 return {expected:ids.length,actual:actual.length};
}
async function prose(files){
 const browser=await chromium.launch({headless:true});
 try{
  const ctx=await browser.newContext({javaScriptEnabled:false});await ctx.route('**/*',r=>r.abort());const page=await ctx.newPage();const results=[];
  for(const file of files){
   await page.setContent(fs.readFileSync(file,'utf8'),{waitUntil:'domcontentloaded'});
   const result=await page.evaluate(()=>{
    const main=document.querySelector('main');if(!main)return null;
    const copy=main.cloneNode(true);const excluded=[];
    for(const e of copy.querySelectorAll('script,style,pre,code,blockquote,q,[hidden],[aria-hidden="true"]')){
     if(!copy.contains(e))continue;excluded.push({tag:e.tagName,text:e.textContent});e.replaceWith(document.createTextNode(' '));
    }
    for(const e of copy.querySelectorAll('p,div,section,h1,h2,h3,h4,h5,h6,li,br'))e.append(document.createTextNode(' '));
    return {text:copy.textContent.replace(/\s+/g,' ').trim(),excluded};
   });
   if(!result?.text)fail('missing or empty main: '+file);
   const hits=banned.filter(w=>new RegExp('\\b'+w+'\\b','i').test(result.text));
   results.push({file,main_dom_words:result.text.split(/\s+/).length,banned_hits:hits,exclusions:result.excluded});
  }
  if(results.some(r=>r.banned_hits.length))fail('blocking vocabulary: '+JSON.stringify(results));
  return results;
 }finally{await browser.close();}
}
async function run(){
 if(process.argv.includes('--selftest')){
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'garnier-controls-'));const png=path.join(dir,'pixel.png');
  fs.writeFileSync(png,Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aX1sAAAAASUVORK5CYII=','base64'));
  const expected=[{route:'/',viewport:'desktop',theme:'light'},{route:'/',viewport:'desktop',theme:'dark'}];
  const good={expected,rows:expected.map(r=>({...r,status:200,observedTheme:r.theme,png,axeReached:true,axeViolations:[]}))};
  const controls=[];
  function invoke(name,args,shouldPass){const p=spawnSync(process.execPath,[self,...args],{encoding:'utf8'});const pass=shouldPass?p.status===0:p.status!==0&&p.status!==null;controls.push({name,expected:shouldPass?0:'nonzero',exit:p.status,pass,output:(p.stdout+p.stderr).trim()});if(!pass)fail('control failed: '+name);}
  const cases=[['complete',x=>x,true],['empty',x=>({...x,rows:[]}),false],['empty_manifest',x=>({expected:[],rows:[]}),false],['missing',x=>({...x,rows:x.rows.slice(1)}),false],['duplicate',x=>({...x,rows:[x.rows[0],x.rows[0]]}),false],['wrong_theme',x=>{x.rows[0].observedTheme='dark';return x;},false],['missing_png',x=>{x.rows[0].png=path.join(dir,'absent.png');return x;},false],['checkpoint',x=>{x.rows[0].status=403;return x;},false],['axe_not_reached',x=>{x.rows[0].axeReached=false;return x;},false],['axe_violation',x=>{x.rows[0].axeViolations=[{id:'fixture'}];return x;},false]];
  for(const [name,change,ok]of cases){const p=path.join(dir,name+'.json');fs.writeFileSync(p,JSON.stringify(change(structuredClone(good))));invoke(name,['--matrix',p],ok);}
  for(const [name,html,ok]of [['clean','<main><h1>Project files</h1><p>Keep useful notes.</p></main>',true],['actual_banned','<main><h1>Unlock results</h1></main>',false],['split_heading','<main><h1>next-<em>generation</em> tools</h1></main>',false],['excluded_code','<main><pre>unlock()</pre><blockquote>seamless</blockquote><p>Useful notes.</p></main>',true],['missing_main','<article>Useful notes.</article>',false],['empty_main','<main></main>',false]]){const p=path.join(dir,name+'.html');fs.writeFileSync(p,html);invoke(name,['--html',p],ok);}
  console.log(JSON.stringify({version:1,scope:'process-level disposable fixtures',controls},null,2));return;
 }
 const result={version:1};let reached=false;
 if(arg('--matrix')){result.matrix=checkMatrix(JSON.parse(fs.readFileSync(arg('--matrix'),'utf8')));reached=true;}
 if(arg('--html')){result.prose=await prose([arg('--html')]);reached=true;}
 if(arg('--dist')){
  const routes=arg('--routes')?.split(',');if(!routes?.length||routes.some(r=>!r.startsWith('/'))||new Set(routes).size!==routes.length)fail('explicit unique routes required');
  result.prose=await prose(routes.map(r=>path.join(arg('--dist'),r.replace(/^\//,''),'index.html')));reached=true;
 }
 if(!reached)fail('no surface requested');console.log(JSON.stringify(result,null,2));
}
run().catch(e=>{console.error(e.message);process.exitCode=1;});
