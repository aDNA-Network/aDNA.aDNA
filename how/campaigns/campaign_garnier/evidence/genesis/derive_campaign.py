"""Report actual mission frontmatter; unknown calibration stays unknown. No mutations."""
from pathlib import Path
import json,re,yaml
base=Path(__file__).resolve().parents[2]
rows=[yaml.safe_load(re.split(r'^---\s*$',p.read_text(),maxsplit=2,flags=re.M)[1]) for p in sorted((base/"missions").glob("mission_garnier_*.md"))]
known=[x for x in rows if x.get("calibrated_sessions") is not None]
print(json.dumps({"missions":len(rows),"estimated_sessions":sum(x["estimated_sessions"] for x in rows),"calibrated_sessions":sum(x["calibrated_sessions"] for x in known) if len(known)==len(rows) else None,"calibrated_missions":len(known),"uncalibrated_missions":len(rows)-len(known),"content_load_kT":sum(x["token_budget_estimated"] for x in rows),"committed_content_load_kT":sum(x["token_budget_estimated"] for x in rows if x.get("budget_status")=="committed_DP1"),"phase_estimates":[{"phase":p,"missions":sum(x['campaign_phase']==p for x in rows),"sessions":sum(x['estimated_sessions'] for x in rows if x['campaign_phase']==p),"content_load_kT":sum(x['token_budget_estimated'] for x in rows if x['campaign_phase']==p)} for p in sorted(set(x['campaign_phase'] for x in rows))]},indent=2))
