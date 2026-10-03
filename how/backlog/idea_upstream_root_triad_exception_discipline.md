---
type: backlog_idea
created: 2026-09-19
filed_by: Sang Nila Utama (UHSingapore.aDNA, campaign_uhs_merlion_forge M0) — operator-directed
status: proposed
disposition: "fold into v8.12 P5 disposition — advisory doc now, ADR at v8.13 — ⛩ ruled 2026-10-03 (Stanley, accept-all on operator_rulings_packet_20261003 B2); status stays proposed until the gate executes it"
related: [adr_045_wrapper_placement_in_triad, pattern_base_extension, skill_project_fork, skill_node_health_check]
---

# Upstream idea — root triad-exception discipline (ADR-045 companion)

**Problem.** ADR-045 fixed wrapper placement ("root = triad + standard files"), but *content* root-siblings keep appearing with no written rule for when they're legitimate: observed drift classes across the fleet include justified-but-undoctrinated exceptions (`UHSingapore.aDNA/my/` — gitignored sovereign mount with written canon; its `teams/` had none until moved to `who/teams/` on 2026-09-19), generated-surface dirs (`WilhelmAI.aDNA/site/`, `siteforge/` + ~15 loose images at root), pure drift (`Operations.aDNA` stray files), and full ontology-bypass (`Regenesis.aDNA` with triad names flattened to root). `skill_node_health_check` S15 counts strays but nothing defines the exception classes or requires documentation.

**Proposal.**
1. **Default stays NO** (ADR-045): a graph root is triad + standard files.
2. **Named exception classes**, each with a required artifact:
   - *Gitignored sovereign mount* (e.g. `my/`, `**/local/`) — allowed at root **only when the gitignore-whole-subtree property is load-bearing**; requires a tracked README stub + a rationale note in `who/coordination/`.
   - *Generated build surface* (e.g. `site/`) — allowed with a ledger entry naming the generator and the fold-in trigger.
   - *Back-compat shim symlink* — already governed (Standing Rule 9, 30-day window).
   - Everything else folds into a triad leg per `pattern_base_extension.md` (question test).
3. **Enforcement:** `skill_project_fork` gains a fork-time root-shape check; `skill_node_health_check` S15 upgraded from "count strays" to "flag strays *without* an exception artifact".
4. **Precedent to cite:** the UHS 2026-09-19 sovereignty sitting executed the model remediation — undocumented root dir (`teams/`) → `git mv` into the correct leg + 30-day symlink + override note; justified exception (`my/`) kept with its written canon.

**Disposition:** for an aDNA.aDNA lane to triage into an ADR-045 amendment or a sibling ADR. Filed cross-vault per house backlog convention; no other aDNA.aDNA files touched.
