---
mission_id: mission_wadna_p4_signoff
type: mission
title: "P4 — Whole-Site Coherence & Sign-Off + CAMPAIGN-REPORT + Standing Watch"
campaign_id: campaign_website_adna
phase: 4
mission_number: 4
slug: signoff
status: in_progress
created: 2026-06-17
updated: 2026-06-21
last_edited_by: agent_stanley
owner: stanley
persona: rosetta             # resident executor; campaign planned by Berthier
mission_class: planning      # verification + reporting; final improvements only if a coherence defect surfaces
spec_completeness: active    # finalized at P3 close (2026-06-21, Decision 5 GO)
estimated_sessions: "1"
token_budget_estimated: "~100-150 kT; full-site traversal + final sweep + report"
hard_dependency_satisfied: "yes — P3 closed 2026-06-21 (Decision 5 GO; all 4 decades CLOSED GO)"
unblocks_missions: []
deliverables_count: 2
tags: [mission, campaign_website_adna, phase4, signoff, coherence]
---

# P4 — Whole-Site Coherence & Sign-Off

> **Stub spec.** The site is more than its pages. Finalized at the P3 → P4 gate.

## Goal
Confirm the site reads as **one organization with one voice**, not a quilt of separately-fixed pages; run the final cold verdict and the before/after metric sweep; file the campaign report; and wire the standing watch that catches future drift.

## Objectives
1. **Full-site cohesion pass.** A single persona traverses the entire site as one journey. Type, spacing, accent, motion, and voice must be consistent end-to-end. Fix any coherence defect surfaced (the only changes permitted in this phase).
2. **Cold 3-second test.** Run by every persona on the **live improved** site. The **Skeptical Frontier Engineer delivers the final verdict: frontier lab, or template?**
3. **Final metric sweep vs the frozen baseline** — Lighthouse (all categories), axe, CWV, screenshot matrix → the before/after delta.
4. **`CAMPAIGN-REPORT.aDNA.md`** — every unit's before/after scorecard, the metric delta, the residual Medium/Low backlog, and the **standing-watch** recommendation (always-on automated floor — Lighthouse gate + `@audit` regression gate + visual-regression — wired to catch future drift).

## Exit Gate (campaign close) — human
- [ ] One coherent voice end-to-end (type · spacing · accent · motion · voice).
- [ ] Every unit ≥4 on every A–K axis; zero open Critical/High; CWV in the Good band site-wide.
- [ ] Cold 3-second test passed by every persona; **Skeptical Frontier Engineer signs off.**
- [ ] `CAMPAIGN-REPORT.aDNA.md` filed; before/after delta vs frozen baseline.
- [ ] Standing watch wired; residual Medium/Low backlog filed.
- [ ] Campaign AAR appended; `STATE.md` updated; STR realigned/resumed (Decision 6).

## Campaign Context
- **Inputs:** P3 improved units + decadal AARs + metric deltas; P0 frozen baseline + benchmark set.
- **Outputs:** `CAMPAIGN-REPORT.aDNA.md`; standing-watch automation; campaign close → STR realign.

## AAR
*5-line AAR + campaign-level AAR mandatory at close.* — *(pending)*
