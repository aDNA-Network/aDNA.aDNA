---
mission_id: mission_wadna_p2_design
type: mission
title: "P2 — Improvement Design: Specs + Systemic-Fix Package + Decadal Plan + Done-Definition"
campaign_id: campaign_website_adna
phase: 2
mission_number: 2
slug: design
status: completed
created: 2026-06-17
updated: 2026-06-19
completed: 2026-06-19
last_edited_by: agent_rosetta
owner: stanley
persona: rosetta             # resident executor; campaign planned by Berthier
mission_class: planning      # plan only; ZERO site changes
spec_completeness: final     # authored 2026-06-19 (P2 working arc)
estimated_sessions: "1"
token_budget_estimated: "~120 kT content-load (50–80+ class — planning/spec authoring: FINDINGS + P2 spec + live-verify ~8 site sources + author 3 artifacts + close HS P1)"
hard_dependency_satisfied: "yes — P1 closed 2026-06-18 (FINDINGS + systemic-pattern list filed); Decision 3 approved with the credibility-first direction below"
unblocks_missions: [mission_wadna_p3_iterate]
deliverables_count: 4
tags: [mission, campaign_website_adna, phase2, planning, design]
---

# P2 — Improvement Design

> **Working spec (finalized 2026-06-19).** P2 opened as a working arc at the Operation aDNA next-arc gate (operator chose WEBSITE P2 over Hearthstone P2, 2026-06-19). Deliverables authored + verified (Completion Summary below). **CLOSED 2026-06-19 — operator Decision 4 approved** (open P3, D1 credibility first; C-1 = repoint-to-public-image): all 5 Decision-4 flags resolved (below); `mission_wadna_p3_iterate` opened. No site changes (planning-class).

## Approved direction (Decision 3, 2026-06-18)

The operator approved the `FINDINGS.aDNA.md` prioritization + the new personas with this **P2 sequencing direction**:

1. **Credibility-integrity FIRST** (systemic pattern #1): the link/citation/JSON-LD gates (Objective 3a–c) + the 4 Criticals (C-1 dead `aDNA-Network/aDNA.aDNA` proof-links · C-2 fabricated homepage code · C-3 `seo.ts` JSON-LD publisher · C-4 false "data-driven" diagram). **Credibility before craft.**
2. **Then the single nav-serialization DOM fix** (H-1/H-2: `<article>` before `<aside>` + non-heading group labels) — one structural change clears the class **and** the `@audit` 375px failure **and** the heading-hierarchy issue. Highest leverage on the board.
3. **Then** the rest (visual craft, agentic gaps `llms.txt`/graph-JSON-LD, the systemic-fix package).
4. **C-1/C-2 are two-stage** (the program-thesis payoff): **now** — fix with **real artifacts from this vault** (aDNA.aDNA is itself a real, inspectable vault; don't wait on Hearthstone); **at the keystone launch** — upgrade the "clone and inspect" demonstration to point at **Hearthstone's polished base** ([[campaign_operation_adna]] Track B). Credibility goes *fixed → exemplary*.
5. **`pt19`-owned** findings (H-10 stale vault names/count) = spec as **verify-after-pt19** (no hand-fix, no `sync:vaults`). **Deploy-gap** items (`/commons` 404, live BP 92) = coordinate at the **keystone**.

## Goal
Convert `FINDINGS.aDNA.md` into an executable plan: an improvement spec for every Critical/High finding, the systemic-fix package that lifts every page at once, and the dependency-ordered decadal session plan with a crisp per-unit done-definition.

## Objectives
1. **Improvement specs (Critical/High).** For each: the specific change, the axis it moves, the target score, and the verification that proves it. Decisive stroke, not decorative flourish.
2. **Systemic-fix package.** Resolve systemic findings first as single coordinated changes — design-token / spacing-scale / accent / typography corrections, the banned-vocabulary pass, the stale-terminology sweep (from `RECONCILIATION.aDNA.md`). These lift every page at once.
3. **Tooling-promotion spec (additive).** Lighthouse archive → automated budget/gate (LCP/INP/CLS thresholds + Agentic Browsing); `@audit` sweep → regression gate in `test:gates`; semantic visual-regression baseline per page per viewport. **Plus five build gates (per `RESEARCH-IMPROVEMENT-PLAN.aDNA.md` §4.4):** (a) **single-source lint** — fail the build on a hardcoded count/version/repo-URL outside its canonical constant (`standard.ts`, `vaults.json`, a `REPO` const); (b) **public-meta sanitizer** — fail on internal codenames/phase jargon in any public `<meta>`/og/JSON-LD (§9.1 `publicNote()`); (c) **link-graph + host/canonical check** — 404/301 on credibility surfaces + served-host == declared-canonical; (d) **no-JS reachability** — flagship content (esp. `/vaults/graph` topology) renders without JS; (e) **`llms.txt` presence + freshness**.
4. **Sequence + done-definition.** Dependency-ordered decadal plan (systemic before local; content-truth before visual craft; highest severity × reach first). Define **per-unit done**: ≥4 on every A–K axis · zero open Critical/High · CWV in the Good band · axe clean both modes · manual a11y pass clean · Standard Fidelity verified.

## Exit Gate (P2 → P3) — human
- [x] Improvement spec for every Critical/High finding. — [[IMPROVEMENT-SPECS.aDNA]] Part 2 (C-1–C-4, H-1–H-11) + coverage matrix (15/15).
- [x] Systemic-fix package designed as coordinated changes. — [[IMPROVEMENT-SPECS.aDNA]] Part 1 (SP-1…SP-10).
- [x] Tooling-promotion spec (Lighthouse gate · `@audit` regression gate · visual-regression · single-source lint · public-meta sanitizer · link-graph/canonical · no-JS reachability · `llms.txt`). — [[TOOLING-PROMOTION.aDNA]] (8/8 required: G1/G2/G3/G5/G6/G7/G10/G11; + G4/G8/G9 additional).
- [x] Dependency-ordered decadal session plan; per-unit done-definition fixed. — [[DECADAL-PLAN.aDNA]] (4 decades + verify-after-pt19 + keystone; done-definition fixed).
- [x] Operator approves specs + plan + done-definition + deploy posture (**Decision 4**). ✅ approved 2026-06-19 — open P3 (D1 credibility first); C-1 = repoint-to-public-image. Flag resolutions below.

## Campaign Context
- **Inputs:** P1 `FINDINGS.aDNA.md` + systemic-pattern list; P0 baseline + benchmark set.
- **Outputs → P3 (filed 2026-06-19):** [[IMPROVEMENT-SPECS.aDNA]] · [[TOOLING-PROMOTION.aDNA]] · [[DECADAL-PLAN.aDNA]]. P3 (`mission_wadna_p3_iterate`) expands the 4 decades into sub-arcs (D1 credibility first), on Decision 4.

## Completion Summary
*Deliverables complete + verified 2026-06-19; flip `status: completed` + open P3 on operator Decision 4.*

### Deliverables
- **[[IMPROVEMENT-SPECS.aDNA]]** — systemic-fix package (SP-1…SP-10) + per-finding specs for all **15 Critical/High** (C-1–C-4, H-1–H-11), credibility-first; each spec = change · axis · baseline→target · verification · owner · files; Medium folded into parent patterns; coverage matrix (15/15).
- **[[TOOLING-PROMOTION.aDNA]]** — **11 gates** (G1–G11): the 8 exit-gate-required (3 promoted + 5 new) + 3 additional (G4 JSON-LD, G8 contrast, G9 color-count); each = checks · location · pass/fail · finding-class guarded; wired per-decade.
- **[[DECADAL-PLAN.aDNA]]** — 4-decade dependency-ordered P3 sequence (D1 credibility → D2 nav → D3 agentic/community → D4 craft) + verify-after-pt19 + keystone deploy; per-unit done-definition fixed (≥4 all A–K · 0 Crit/High · CWV Good · axe both modes · manual a11y · Standard Fidelity).
- **Bookkeeping:** this mission (status/spec_completeness/exit-gate); session; STATE; campaign-master P2 row; Hearthstone P1 closed (same session, operator gate).

### Decision-4 flags — RESOLVED (operator, 2026-06-19)
> **Resolutions:** (1) C-1 → **repoint-to-public-image** (point proofs at resolving `aDNA-Network/aDNA` paths via `install_truth.json.verified_paths`; do **not** publish `aDNA.aDNA` — no exposure of internal state; stage-2 = Hearthstone base at keystone). Coordination-ledger C-1 seam updated to this disposition. (2) Publisher entity → **"aDNA Network"** (matches the `aDNA-Network` repo org + brand pivot). (3) Deploy posture → **commit-only through P3**; joined deploy at the keystone (DP2). (4) pt19 → **verify-after** (no hand-fix, no `sync:vaults`; C-4 *code* ships in D1, name correctness waits for pt19). (5) G5 single-source lint = load-bearing — wired in D1.

#### Original flags (for the record)

1. **C-1 is deeper than a repoint (verified live 2026-06-19).** No public URL currently inspects the aDNA.aDNA vault: `github.com/aDNA-Network/aDNA.aDNA` → **404**; the public image `aDNA-Network/aDNA` → 200 but gitignores `*.aDNA/` (subtree → **404**). Closing C-1 "now" needs a **publish/visibility decision** (make `aDNA-Network/aDNA.aDNA` public + push, or point proofs at resolving `.adna/` paths); stage-2 points at Hearthstone's base at the keystone. **Candidate new cross-vault seam** (operator/Berthier·aDNALabs).
2. **Brand/publisher entity (C-3/M-9; RECONCILIATION W4/W5):** confirm the JSON-LD/footer publisher name ("aDNA" / "aDNA Network") or **drop** the publisher org.
3. **Deploy posture:** commit-only through P3; the joined deploy is the program keystone (DP2). Confirm.
4. **pt19 items (H-10; C-4 names):** spec'd **verify-after-pt19** (no hand-fix, no `sync:vaults`). Confirm.
5. **Repo-URL drift is broader than C-3 recorded** — `branding.json:26` (`LatticeProtocol/Agentic-DNA`) + 3 `seo.ts` JSON-LD builders + 7 sitewide `aDNA.aDNA` 404 links; the single-source lint (G5) is the load-bearing fix that keeps SP-1 from re-rotting.

## AAR
*5-line AAR (`template_aar_lightweight.md`).*

- **Worked:** FINDINGS' owner-class tags + the Decision-3 sequencing made the spec ordering fall out cleanly; **live-verifying the cited sources before locking specs** caught C-1's real root cause (no public inspect home — a string-only repoint would have shipped another 404) and the broader repo-URL drift.
- **Didn't:** gate IDs drifted while writing the per-finding specs *before* the tooling artifact existed — had to reconcile G1–G11 after the fact.
- **Finding:** the credibility-integrity headline is **structural, not cosmetic** — C-1 needs a publish decision and the drift spans `branding.json` + 3 JSON-LD builders, which is exactly why the single-source lint (G5) is load-bearing.
- **Change:** for spec missions that reference gates, **author the gate inventory first**, then reference its IDs from the per-finding specs.
- **Follow-up:** operator **Decision 4** → open P3 (D1 first); resolve the C-1 publish/visibility decision early; confirm brand entity + deploy posture; pt19 stays verify-after.
