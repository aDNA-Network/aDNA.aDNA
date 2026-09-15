"""Read-only amendment integrity checks. These do not verify future site behavior."""
from pathlib import Path
import argparse
import copy
import hashlib
import json
import re
import tarfile
import yaml

BASE = Path(__file__).resolve().parents[2]

def frontmatter(path):
    return yaml.safe_load(re.split(r'^---\s*$', path.read_text(), maxsplit=2, flags=re.M)[1])

def check_model(model):
    errors = []
    rows = model['missions']
    by_id = {r['plan_id']: r for r in rows}
    if len(by_id) != len(rows): errors.append('duplicate mission')
    for row in rows:
        key = row['plan_id']
        methods = row.get('verification_method', [])
        if len(methods) != len(row.get('acceptance_criteria', [])):
            errors.append(key + ': criteria/method count')
        for method in methods:
            for field in ('id', 'surface', 'method', 'command', 'red_test'):
                if not method.get(field): errors.append(key + ': missing ' + field)
        if row.get('calibration_status') == 'uncalibrated' and row.get('calibrated_sessions') is not None:
            errors.append(key + ': fabricated calibration')
        if row.get('token_budget_estimated') != sum(row.get('budget_breakdown_kT', {}).values()):
            errors.append(key + ': budget arithmetic')
        for dep in row.get('depends_on', []):
            if dep == 'DP1': continue
            if dep not in by_id: errors.append(key + ': missing dependency')
            elif key not in by_id[dep].get('blocks', []): errors.append(key + ': reciprocal dependency')
    visited, visiting = set(), set()
    def visit(key):
        if key in visiting:
            errors.append('dependency cycle'); return
        if key in visited: return
        visiting.add(key)
        for dep in by_id[key].get('depends_on', []):
            if dep in by_id: visit(dep)
        visiting.remove(key); visited.add(key)
    for key in by_id: visit(key)
    if model['current_count'] != 1: errors.append('CURRENT count')
    if model['charter']['mission_count'] != len(rows): errors.append('charter count')
    if model['charter']['token_budget_estimated'] != sum(r['token_budget_estimated'] for r in rows):
        errors.append('charter budget')
    assignments = model['assignments']
    if len({r['route'] for r in assignments}) != len(assignments): errors.append('duplicate route')
    for row in assignments:
        if row.get('mission') not in by_id: errors.append('unassigned route')
    if model['receipt']['status'] != 'accepted': errors.append('unratified')
    if set(model['receipt']['decisions']) != {f'D-{i}' for i in range(1, 11)}: errors.append('missing decision')
    if model['pending']: errors.append('stale pending gate')
    return errors

def selftest():
    r = {'plan_id':'m', 'acceptance_criteria':['C1'], 'verification_method':[dict(id='V1', surface='fixture', method='read', command='manual: read fixture', red_test='remove required row')], 'calibration_status':'uncalibrated', 'calibrated_sessions':None, 'token_budget_estimated':30, 'budget_breakdown_kT':{'transition':23,'work':7}, 'depends_on':['DP1'], 'blocks':[]}
    good = dict(missions=[r], current_count=1, charter=dict(mission_count=1,token_budget_estimated=30), assignments=[dict(route='/',mission='m')], receipt=dict(status='accepted',decisions={f'D-{i}':'accepted' for i in range(1,11)}), pending=False)
    assert not check_model(good)
    mutations = [
        lambda m:m.update(current_count=2),
        lambda m:m['missions'][0]['verification_method'][0].update(surface=''),
        lambda m:m['missions'][0]['verification_method'][0].update(red_test=''),
        lambda m:m['missions'][0].update(calibrated_sessions=1),
        lambda m:m['missions'][0].update(token_budget_estimated=31),
        lambda m:m['missions'][0].update(depends_on=['absent']),
        lambda m:m['missions'][0].update(depends_on=['m']),
        lambda m:m['assignments'].append(dict(route='/',mission='m')),
        lambda m:m['assignments'][0].update(mission='absent'),
        lambda m:m['receipt'].update(status='proposed'),
        lambda m:m['receipt']['decisions'].pop('D-10'),
        lambda m:m.update(pending=True),
    ]
    for mutate in mutations:
        bad=copy.deepcopy(good); mutate(bad)
        assert check_model(bad), 'negative fixture was accepted'
    return {'positive_controls':1,'negative_controls':len(mutations)}

def verify():
    paths=sorted((BASE/'missions').glob('mission_garnier_*.md'))
    rows=[frontmatter(p) for p in paths]
    model=dict(missions=rows, current_count=(BASE/'missions/session_prompts_garnier.md').read_text().count('⬅ CURRENT'), charter=frontmatter(BASE/'campaign_garnier.md'), assignments=json.loads((BASE/'evidence/amendments/docs_population.json').read_text())['rows'], receipt=json.loads((BASE/'artifacts/amendments/charter_ratification_20260915.json').read_text()), pending=(BASE/'artifacts/genesis/charter_gate.pending').exists())
    errors=check_model(model)
    archive=BASE/'artifacts/amendments/proposal_20260914.tar.gz'
    hashes=json.loads((BASE/'evidence/amendments/proposal_archive_manifest.json').read_text())
    with tarfile.open(archive) as tar:
        for name,digest in hashes.items():
            if hashlib.sha256(tar.extractfile(name).read()).hexdigest()!=digest: errors.append('archive mismatch: '+name)
        old=tar.extractfile('CLAUDE.md').read().decode()
        new=(BASE/'CLAUDE.md').read_text()
        start='## Standing conventions (every session, every mission)'
        end='## What this campaign protects'
        # Exact inherited section, including historical examples, is immutable in this amendment.
        if old.split(start,1)[1].split(end,1)[0] != new.split(start,1)[1].split(end,1)[0]: errors.append('inherited section changed')
    for p in paths:
        text=p.read_text()
        if 'Checked pairs: V1×C1 yes, all named outputs;' in text: errors.append('old generic audit: '+p.name)
        for v in range(1,4):
            for c in range(1,4):
                if f'V{v}×C{c}' not in text: errors.append('missing pair: '+p.name)
    return dict(scope='active campaign documents and original proposal archive; not site behavior',missions=len(rows),errors=errors,selftest=selftest())

if __name__ == '__main__':
    parser=argparse.ArgumentParser(); parser.add_argument('--selftest',action='store_true'); args=parser.parse_args()
    result=selftest() if args.selftest else verify()
    print(json.dumps(result,indent=2))
    raise SystemExit(bool(result.get('errors')))
