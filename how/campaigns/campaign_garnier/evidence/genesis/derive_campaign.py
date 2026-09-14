"""Report campaign budgets from mission frontmatter; no mutations."""
from pathlib import Path
import json,yaml
base=Path(__file__).resolve().parents[2]
rows=[yaml.safe_load(p.read_text().split("---",2)[1]) for p in sorted((base/"missions").glob("mission_garnier_*.md"))]
print(json.dumps({"missions":len(rows),"estimated_sessions":sum(x["estimated_sessions"] for x in rows),"calibrated_sessions":sum(x["calibrated_sessions"] for x in rows),"content_load_kT":sum(x["token_budget_estimated"] for x in rows)},indent=2))
