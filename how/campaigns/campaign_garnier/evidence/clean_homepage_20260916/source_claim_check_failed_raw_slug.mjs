import {chromium} from '/Users/stanley/.cache/garnier-homepage-20260916/site/node_modules/playwright/index.mjs';
import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const root='/Users/stanley/aDNA/aDNA.aDNA';
const candidate='/Users/stanley/.cache/garnier-homepage-20260916';
const out=root+'/how/campaigns/campaign_garnier/evidence/clean_homepage_20260916';
const command=JSON.parse(readFileSync(candidate+'/site/src/data/install_truth.json')).one_liner;
const twin=readFileSync(candidate+'/site/dist/index.md','utf8');
const rule=readFileSync(root+'/CLAUDE.md','utf8').split('\n').find(l=>l.startsWith('1. **Phase gates')).replace(/^1\. /,'').replaceAll('**','');
const registry=JSON.parse(readFileSync(candidate+'/site/src/data/vaults.json'));
const browser=await chromium.launch(); const page=await browser.newPage();
try {
  await page.goto('http://127.0.0.1:4465/');
  const original=await page.locator('.reg-card').evaluateAll(els=>els.map(e=>(e.matches('a')?e:e.querySelector('a')).getAttribute('href')).sort());
  await page.goto('http://127.0.0.1:4466/');
  const current=await page.locator('.reg-name a').evaluateAll(els=>els.map(e=>e.getAttribute('href')).sort());
  assert.deepEqual(current,original); assert.equal(current.length,8);
  assert.equal((await page.locator('.hero-install-cmd').textContent()).trim(),command);
  assert.equal((await page.locator('.governance-example').textContent()).trim(),rule);
  assert(twin.includes(rule)); assert(twin.includes(command));
  const groups=await page.locator('.registry-group').evaluateAll(els=>els.map(e=>({label:e.querySelector('h3').textContent.trim(),slugs:[...e.querySelectorAll('.reg-name a')].map(a=>a.getAttribute('href').split('/')[2])})));
  for(const g of groups) for(const slug of g.slugs) {
    const status=registry.vaults.find(v=>v.vault_slug===slug).status;
    assert.equal(g.label,status==='active'?'in use':status==='pending'?'chartered':'planned');
  }
  const text=await page.locator('main').innerText();
  for(const phrase of ['single computer, ours','AI persona','Your AI tool has its own data handling','The structure does not enforce an agent’s behavior','Purpose: Genomics education & research','Purpose: Rare-disease diagnosis acceleration','Workspace v8.11','workspace v8.10','Specification v2.5']) {
    assert(text.includes(phrase),phrase+' missing HTML'); assert(twin.includes(phrase),phrase+' missing twin');
  }
  assert(!text.includes('Being worked in today'));
  assert.equal(await page.locator('.hero img, .hero picture, #hero-graph-svg').count(),0);
  const record={recordedAt:new Date().toISOString(),command,rule,registryDestinations:current,groups,sourceHtmlTwinChecks:'passed',illustrationCount:0,limitation:'Builder source/DOM review; no participant-comprehension or formal score claim.'};
  writeFileSync(out+'/source_claim_review.json',JSON.stringify(record,null,2)+'\n');
  console.log('Source/HTML/twin checks passed; same eight destinations; group counts '+groups.map(g=>g.slugs.length).join('/'));
} finally {await browser.close();}
