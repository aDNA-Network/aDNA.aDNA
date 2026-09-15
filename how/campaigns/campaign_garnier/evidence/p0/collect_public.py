"""GARNIER P0 consumer collection recipe. GET-only, explicit output; no quality verdict."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.request import Request,urlopen
from urllib.error import HTTPError
from urllib.parse import urljoin,urlsplit
from concurrent.futures import ThreadPoolExecutor
import json,re,hashlib,datetime,csv,sys
ROOT=Path(__file__).resolve().parents[5]; OUT=Path(__file__).resolve().parent
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.skip=0;self.main=0;self.title=False;self.text=[];self.maintext=[];self.t=[];self.links=[];self.canonical=None;self.headings=[];self.h=None
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag in ['script','style']:self.skip+=1
  if tag=='main':self.main+=1
  if tag=='title':self.title=True
  if tag=='a' and a.get('href'):self.links.append(a['href'])
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
  if re.fullmatch('h[1-6]',tag):self.h=[tag,'']
 def handle_endtag(self,tag):
  if tag in ['script','style']:self.skip=max(0,self.skip-1)
  if tag=='main':self.main=max(0,self.main-1)
  if tag=='title':self.title=False
  if self.h and tag==self.h[0]:self.headings.append(self.h);self.h=None
 def handle_data(self,data):
  if self.skip:return
  s=' '.join(data.split())
  if not s:return
  self.text.append(s)
  if self.main:self.maintext.append(s)
  if self.title:self.t.append(s)
  if self.h:self.h[1]+=' '+s

def fetch(args):
 name,url=args; prefix=OUT/'raw/public'/name;prefix.parent.mkdir(parents=True,exist_ok=True); now=datetime.datetime.now(datetime.timezone.utc).isoformat()
 try:
  try:resp=urlopen(Request(url,headers={'User-Agent':'GarnierBaseline/1.0 (public website review)'}),timeout=25)
  except HTTPError as err:resp=err
  data=resp.read();typ=resp.headers.get('Content-Type','');prefix.with_suffix('.body').write_bytes(data)
  row={'name':name,'url':url,'final_url':resp.url,'status':resp.status,'content_type':typ,'observed_at':now,'sha256':hashlib.sha256(data).hexdigest(),'raw':str(prefix.with_suffix('.body').relative_to(ROOT)),'headers':{k:resp.headers[k] for k in ['Last-Modified','Content-Security-Policy','Strict-Transport-Security','Vary','X-Content-Type-Options','Referrer-Policy'] if k in resp.headers}}
  if 'html' in typ:
   p=Page();p.feed(data.decode('utf-8',errors='replace'));row.update(title=' '.join(p.t),canonical=p.canonical,headings=p.headings,links=p.links,main_words=len(' '.join(p.maintext).split()),body_words=len(' '.join(p.text).split()))
   prefix.with_suffix('.txt').write_text('\n'.join(p.maintext or p.text));row['text']=str(prefix.with_suffix('.txt').relative_to(ROOT))
  return row
 except Exception as exc:return {'name':name,'url':url,'error':str(exc),'observed_at':now}

def main():
 plan=json.loads((OUT/'collection_plan.json').read_text()); jobs=[('adna'+(u.replace('/','_') or '_home'),'https://adna.network'+u) for u in plan['built_routes']]
 for name,conf in plan['comparators'].items():
  # First collection is a bounded seed; linked docs/research/governance pages are expanded after inspection.
  jobs += [(name+(u.replace('/','_') or '_home'),conf['origin']+u) for u in conf['routes']]
 jobs += [('machine_'+str(i),'https://adna.network'+u) for i,u in enumerate(['/.well-known/adna-build.json','/llms.txt','/llms-full.txt','/robots.txt','/sitemap-index.xml','/sitemap-0.xml','/rss.xml','/api/registry.v1.json','/get-started.md','/.well-known/mcp.json'])]
 with ThreadPoolExecutor(max_workers=6) as pool:rows=list(pool.map(fetch,jobs))
 (OUT/'public_inventory.json').write_text(json.dumps(rows,indent=2));print(json.dumps({'requests':len(rows),'errors':sum('error' in x for x in rows),'non200':[(x['url'],x.get('status')) for x in rows if x.get('status')!=200]}))
 internal={u:[] for u in plan['built_routes']};inbound={u:0 for u in internal}
 for row in rows:
  u=urlsplit(row['url']).path.rstrip('/') or '/'
  if not row['name'].startswith('adna') or u not in internal:continue
  for href in row.get('links',[]):
   target=urlsplit(urljoin(row['url'],href));dest=target.path.rstrip('/') or '/'
   if target.netloc=='adna.network' and dest in inbound:internal[u].append(dest);inbound[dest]+=1
 depths={'/':0};queue=['/']
 while queue:
  u=queue.pop(0)
  for dest in internal[u]:
   if dest not in depths:depths[dest]=depths[u]+1;queue.append(dest)
 with (OUT/'page_inventory.csv').open('w') as f:
  w=csv.writer(f);w.writerow(['url','status','title','template_or_family','word_count_main','last_modified','inbound_links','outbound_links','depth_from_home','classification'])
  for x in rows:
   if not x['name'].startswith('adna'):continue
   u=urlsplit(x['url']).path.rstrip('/') or '/';w.writerow([x['url'],x.get('status'),x.get('title'),plan['capture_routes'].get(u,u.split('/')[1] if u!='/' else 'home'),x.get('main_words'),x.get('headers',{}).get('Last-Modified','unavailable'),inbound[u],len(x.get('links',[])),depths.get(u,'unreached'),'public production HTML'])
 (OUT/'link_graph.json').write_text(json.dumps(internal,indent=2))
if __name__=='__main__':main()
