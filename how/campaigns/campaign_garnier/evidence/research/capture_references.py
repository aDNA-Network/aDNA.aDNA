"""Run the unmodified canonical T0 harness against this bounded reference set."""
import concurrent.futures
import json
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parents[5]
evidence = Path(__file__).resolve().parent
sites = json.loads((evidence / 'reference_set.json').read_text())['sites']

def capture(site):
    cmd = ['node', 'scripts/visual_capture.mjs', '--base', site['url'].rstrip('/'),
           '--routes', '/', '--viewports', 'all', '--themes', 'dark,light',
           '--timeout', '15000', '--out', str(evidence / 't0' / site['id'])]
    result = subprocess.run(cmd, cwd=root, capture_output=True, text=True)
    print(json.dumps({'site': site['id'], 'exit': result.returncode,
                      'output': result.stdout[-450:], 'errors': result.stderr[-450:]}), flush=True)
    return result.returncode

with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
    results = list(pool.map(capture, sites))
raise SystemExit(1 if any(results) else 0)
