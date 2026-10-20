---
type: session
created: 2026-10-20
updated: 2026-10-20
last_edited_by: agent_rosetta
tags: [session, arcade, a4_2, v8_13, fire, template_release, deploy_tail, aep, sends, tier2]
session_id: session_stanley_20261020_024816_arcade_a4_2_fire
user: stanley
started: 2026-10-20T02:48:16Z
status: active
intent: "ARCADE A4.2 sitting 3: send the three staged memos; re-measure the v8.13 ledger at the object; assemble + dry-run in a throwaway clone; fire v8.13 under a conditional pre-grant; smoke S1–S9; deploy tail from a clone of main (trust page · changelog · AEP-0003 + AEP-0004); post-fire memos to Noether + Venus; close A4.2 → CURRENT A5.1."
campaign: campaign_arcade
runtime: claude
executor_tier_declared: opus
executor_tier_actual: opus
plan_time_rulings: "R55 — send all three staged memos (Aspasia → Fluxer.aDNA · Panacea → HarnessOld.aDNA · Vauban → Terminal.aDNA). R56 — fire v8.13 under a conditional push pre-grant (v8.12 precedent): gitleaks 0 · (b.1) 0 private paths / bare SHAs / company names (R2) / 10.x literals / Q9-condition hits · adna_validate --governance zero drift both trees · clone porcelain = exactly the enumerated paths · remote main HEAD unchanged at the push; any failure → stop and report. R57 — deploy tail ships with the fire from a standalone clone of main: trust page at source_ref v8.13 · changelog entry · AEP-0003 (aDNA.aDNA ADR-067) + an AEP for aDNA.aDNA ADR-066 (names the profile, not its steward) · gate-49 home re-baseline · deploy_adna.sh prod. R58 — after tag push + smoke, author and send the post-fire memos (Noether · Venus). All four by AskUserQuestion at plan time, 2026-10-20, all as recommended."
machine: Dyrnwyn
tier: 2
scope:
  files:
    - who/coordination/coord_2026_10_20_rosetta_to_{aspasia,panacea,vauban}_*.md (delivery stamps)
    - who/coordination/coord_2026_10_20_rosetta_to_{noether,venus}_*v8_13*.md (new)
    - ~/aDNA/.adna/ (release sync only, rsync; never hand-edited)
    - scratchpad clones of aDNA-Network/aDNA (assembly + smoke) and of this repo's main (deploy tail)
    - site/ — on main only (deploy tail)
    - how/campaigns/campaign_arcade/**
    - MANIFEST.md (M1 :174)
    - STATE.md · CHANGELOG.md
open_reads: "2026-10-20 02:30Z — vitrine/design 0/0 vs origin at 6f17137; nothing in who/coordination, Fluxer or AILedger coordination newer than session_prompts_arcade.md; standard md5 86385da8; ~/aDNA/.adna main @ bf5bdd8 (ahead 15 of the frozen adna-legacy origin, by design)."
conflict_scan: "how/sessions/active/ empty at open"
---

# Session — ARCADE A4.2 sitting 3: the v8.13 fire

## Log

