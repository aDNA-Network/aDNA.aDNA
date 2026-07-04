---
type: backlog
created: 2026-07-03
updated: 2026-07-03
status: proposed
last_edited_by: agent_rosetta
priority: low
origin: discovered at the v8.5 release-cut fire (mission_v8_5_release_cut_hygiene §11)
tags: [backlog, upstream, v8_5_queue, release_cut_leak, f_chm_217, skill_iii_setup, doc_currency]
---

# idea_upstream — dev-vault-name leak sweep across shipped image surfaces

## What
The v8.5 release-cut leak sweep (F-CHM-217) genericized the `skill_iii_setup.md` example lines the
mission enumerated, but an empirical grep at fire showed the leak is broader than the mission's
line-list. Two follow-ups were **deferred** (routed here) rather than expand a paper-cut mid-release:

1. **`skill_iii_setup.md` — full, consistent genericization.** The mission named 5 lines
   (165/211/256/268/375), but the file carries ~15 dev-vault-name mentions (`lattice-labs`, `SiteForge`,
   `VideoForge`, `CanvasForge`, `wga`, `LPWhitepaper`, `KINN`, `WilhelmAI`) **plus a "5 live wrappers"
   census table** (lines ~372–377) with real mission IDs + commit SHAs. A partial pass ships an
   inconsistent file; a full pass needs a decision on the census table (genericize row-by-row loses all
   value → likely **delete or replace with a generic note**). At v8.5 fire this was reverted to keep only
   the dangling-link fix (line 30 III-ADR disambiguation). Do the whole-file pass here.

2. **Broader dev-vault-name sweep across other shipped surfaces.** The same names appear in other shipped
   `.adna/` files: `how/skills/skill_git_remote_setup.md`, `how/docs/upgrade_v6_to_v7.md`,
   `how/templates/examples/example_session_customer_research.md`. Each needs a keep-vs-genericize call
   (some are legitimate historical precedent; **historical CHANGELOG.md / STATE.md stay as-is** per the
   mission's RC §5 "keep historical" rule).

## Why
Shipping real internal vault names / mission IDs / commit SHAs into the public workspace image is the
same **release-cut leak class** as F-CHM-217. It's cosmetic (nothing breaks), hence low priority — but a
public template should read as generic, not as a snapshot of one operator's private graph.

## How to apply
A future `skill_template_release` cycle (SHIP-DELTA class; `.adna/`-side). Bundle with the next
doc-currency slice. Related: [[mission_v8_5_release_cut_hygiene]] §11 · the v8.5 queue in
`how/campaigns/campaign_champollion/artifacts/handoff_packet_v8_4.md` §3.

## Not in scope
The census table's *existence* in a template skill is itself questionable (dev-internal reporting in a
shipped how-to) — whether `skill_iii_setup.md` should ship at all, or ship trimmed, is a separate
question for the III-framework wrapper doctrine.
