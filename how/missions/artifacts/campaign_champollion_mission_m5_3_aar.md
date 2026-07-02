---
type: aar
artifact_id: campaign_champollion_mission_m5_3_aar
title: "AAR — Champollion M5.3 (Exchange/Lighthouse adoption story, walked honest)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m5_3_exchange_lighthouse_story
executor_tier: opus
token_budget_estimated: "~46 kT (40 charter + Mode-B allowance)"
token_budget_actual: "~42 kT (opus builder ~36 self-reported + fable bookends ~6) — −9%"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p5, m5_3, exchange, lighthouse, adoption_story, mode_b, ring_2]
---

# AAR — Mission M5.3: Exchange/Lighthouse adoption story

**Session**: `session_stanley_20260702T224717Z_champollion_p5_sweep` · **Executor: opus subagent** at-tier, **fable-orchestrated** (Mode B) · implementation-class · Ring 2.

## Five lines

- **Worked**: the **pre-pinned-boundary-facts dispatch** — the countermeasure to M5.1/M5.2's foreign-corpus overruns landed the mission at **−9%** (first P5 under-run) with zero honesty cost: the builder cited the pins instead of re-deriving them, kept its corpus in-vault, and produced the campaign's second clean-first-review output (6 PASS / 3 TAUGHT-AS-DESIGN, a real validator verdict as the executable outcome, the fable re-run matching it byte-for-byte).
- **Didn't**: the site mirror — investigated and correctly refused (the site's collections need `.mdx` + `seoSchema` + `section` + wikilink→route conversion; genuinely not a straight add) → M6.1 site-currency rider now carries the tutorial mirror alongside its other four items; and `latlab` CLI is **non-operational on this node** (`ModuleNotFoundError: No module named 'cli'`), discovered incidentally.
- **Finding**: **the honest-walk discipline scales from checking content to authoring it** — M4.1/M4.3 used PASS/FIXED labels to audit existing teaching; M5.3 used PASS/TAUGHT-AS-DESIGN labels to *write new* teaching, and the boundary table became the load-bearing artifact both deliverables share. Roadmap-honesty is cheapest when it is a structural requirement of the format, not a review filter afterward.
- **Change**: F-CHM-214 gained its **third divergent source** (the code docstring citing `lattice_federation.md §4.1`) — the harmonization now reconciles three surfaces against `skill_lattice_publish`; the M5.1 joint memo's last pointer stub (§3) back-filled — the memo now releases complete.
- **Follow-up**: latlab CLI health → G5-D5 (OoB row next to the registry-exercise defer — same post-launch window, and the first publish will need a working CLI); plan-mode-propagation-to-subagents observed a second time (builder paused writes correctly) → joins the M7.x ops-retro bundle; the site tutorial-mirror rides M6.1.

## Estimate vs actual

~46 → ~42 (−9%). P5 closes: M5.1 +77% · M5.2 +93% · M5.3 **−9%** — the phase's overrun is fully attributable to cross-graph evidence reads on the two seam missions, and the one mission dispatched WITH the read-surface pre-resolved came in under. That contrast is the calibration datapoint (→ G5-D3).

## Evidence chain

[[../../campaigns/campaign_champollion/artifacts/adoption_story_record|adoption_story_record]] (walk log · boundary table · verbatim validate run · cross-link census · F-CHM-214 §6 · out-of-scope) · `what/tutorials/tutorial_exchange_adoption_path.md` · `what/use_cases/use_case_exchange_lighthouse_adoption.md` · fable re-run of the validate step (output matched) · [[../../campaigns/campaign_champollion/artifacts/findings_ledger|findings_ledger]] F-CHM-214 addendum.
