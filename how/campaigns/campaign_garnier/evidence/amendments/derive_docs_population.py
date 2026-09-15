"""Derive review tranches to stdout from current sources/build; never overwrite frozen evidence."""
from pathlib import Path
import yaml,json,hashlib,math,re
from datetime import datetime,timezone
R=Path.cwd();B=R/'how/campaigns/campaign_garnier'
sections={'concepts':'/learn/concepts','comparisons':'/learn/comparisons','glossary':'/glossary','patterns':'/patterns','use-cases':'/use-cases','community':'/community','publishing':'/how/publishing','workshops':'/how/workshops','lattice-examples':'/how/lattice-examples'}
rows=[];excluded=[]
for coll,prefix in [('docs',None),('guides','/learn/tutorials'),('reference','/reference'),('spec','/reference/specification'),('proposals','/community/proposals'),('course','/learn/course')]:
 for p in sorted((R/'site/src/content'/coll).rglob('*')):
  if p.suffix not in ('.mdx','.md'):continue
  raw=p.read_bytes();d=yaml.safe_load(re.split(r'^---\s*$',raw.decode(),maxsplit=2,flags=re.M)[1]);slug=p.stem
  if d.get('draft'):excluded.append({'source':str(p.relative_to(R)),'reason':'draft true; not a published route'});continue
  pre=sections[d['section']] if coll=='docs' else prefix
  if coll=='spec':slug=d['slug_id']
  if coll=='proposals':slug='aep-'+str(d['number'])
  route=pre+'/'+slug
  html=R/'site/dist'/route.lstrip('/')/'index.html';twin=R/'site/dist'/(route.lstrip('/')+'.md')
  rows.append(dict(route=route,source=str(p.relative_to(R)),source_sha256=hashlib.sha256(raw).hexdigest(),source_bytes=len(raw),html=str(html.relative_to(R)),twin=str(twin.relative_to(R)),html_present=html.exists(),twin_present=twin.exists(),family=coll,review_status='queued',risk='instructions_or_normative' if coll in ['guides','spec','proposals','course'] or route.startswith('/how/') else 'claims_and_terms'))
logs=sorted((R/'site/src/content/changelog').glob('*.md'))
raw=b''.join(p.read_bytes() for p in logs)
rows.append(dict(route='/changelog',source='site/src/content/changelog',sources=[str(p.relative_to(R)) for p in logs],source_sha256=hashlib.sha256(raw).hexdigest(),source_bytes=len(raw),html='site/dist/changelog/index.html',twin='site/dist/changelog.md',html_present=(R/'site/dist/changelog/index.html').exists(),twin_present=(R/'site/dist/changelog.md').exists(),family='changelog',review_status='queued',risk='claims_and_terms'))
rows.sort(key=lambda r:(0 if r['risk']=='instructions_or_normative' else 1,r['family'],r['route']))
groups=[];group=[];size=0
for row in rows:
 if group and (len(group)>=15 or size+row['source_bytes']>80000):groups.append(group);group=[];size=0
 group.append(row);size+=row['source_bytes']
if group:groups.append(group)
for n,g in enumerate(groups,1):
 for r in g:r.update(tranche=f'T{n:02}',mission=f'mission_garnier_p2_3_t{n:02}_docs_review')
report={'provenance':f'[D] Source files and existing local build paths inspected {datetime.now(timezone.utc).date()}; no new build, content review, or live validation. Route rules read from [...path].md.ts, learn/course/[...slug].astro and content.config.ts; changelog is an aggregate. Refresh after P2.2 before authorizing P2 tranche budgets.','rule':'Instructions/normative first, then family/route lexical order; at most 15 routes and 80000 source bytes per tranche. These are content-load planning limits, not WebForge quality bars.','rows':rows,'excluded_sources':excluded,'tranches':[{'id':f'T{i:02}','mission':g[0]['mission'],'routes':len(g),'source_bytes':sum(r['source_bytes'] for r in g),'source_read_kT':math.ceil(sum(r['source_bytes'] for r in g)/4000),'review_work_kT':len(g),'verification_kT':8,'transition_kT':23} for i,g in enumerate(groups,1)]}
all_routes=sorted('/'+str(p.relative_to(R/'site/dist')).removesuffix('index.html').rstrip('/') if p.name=='index.html' else '/'+str(p.relative_to(R/'site/dist')) for p in (R/'site/dist').rglob('*.html') if p.name!='404.html')
covered={r['route'] for r in rows}
report['other_routes']=[dict(route=r,mission=('mission_garnier_p1_1_homepage_voice' if r=='/' else 'mission_garnier_p1_2_quickstart_voice' if r.startswith('/get-started') else 'mission_garnier_p1_3_mission_voice' if r in ['/about','/community','/commons','/network','/learn/what-is-adna'] else 'mission_garnier_p3_3_diagram_code' if r.startswith('/vaults') else 'mission_garnier_p3_1_design_system' if r=='/design-system' else 'mission_garnier_p2_4_trust_surfaces' if r in ['/state-of-the-network','/canonical-properties','/provenance-audit','/privacy','/security','/accessibility'] else 'mission_garnier_p4_3_regression'),reason='Bespoke, index, generated registry or infrastructure surface; assigned to its existing mission, not counted as a documentation tranche review.') for r in all_routes if r not in covered]
report['built_html_routes']=all_routes
print(json.dumps(report,indent=2))
