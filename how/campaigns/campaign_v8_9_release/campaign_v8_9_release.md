---
campaign_id: campaign_v8_9_release
type: campaign
title: "v8.9 governance release (Operation Palimpsest) — ship the Refit-M5 vNext batch to the public template image"
codename: "Operation Palimpsest"
owner: stanley
persona: rosetta
status: completed        # ✅ v8.9 SHIPPED 2026-07-24 — commit c8e5427 + tag v8.9 on aDNA-Network/aDNA (gov 8.8→8.9; standard v2.5; counts 30→31 templates / 32→33 skills). Full arc P0→P1→P2→P3. Campaign CLOSED — do NOT re-open.
phase: P3/3              # ✅ P3 Fire complete — v8.9 SHIPPED 2026-07-24 (c8e5427 + tag v8.9; local .adna synced 0364d85; 6/6 fresh-clone smoke green)
opened_when: "2026-07-24 — operator opened post-Operation-Refit-close; P0 charter session minted CLAUDE + P1 missions + codename Palimpsest"
governance_bump: "8.8 → 8.9"
standard_version: "v2.5 (held — no normative change)"
seeded_by: campaign_refit / M5 vNext triage
source_roadmap: how/campaigns/campaign_refit/artifacts/vnext_roadmap.md
ratified_at: "Refit G2 / DP9 (2026-07-24) — how/campaigns/campaign_refit/artifacts/ratification_record_refit_g2.md"
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [campaign, v8_9, palimpsest, release, template_release, governance, completed, shipped]
---

# Campaign: v8.9 governance release — Operation Palimpsest

> **`status: active` — OPENED 2026-07-24 (P0 Charter).** Materialized at **Refit G2 / DP9** (signed 2026-07-24)
> from the staged stub `how/campaigns/campaign_refit/artifacts/stub_campaign_v8_9_release.md`, and **opened** the
> same day on the operator's "continue the campaign" election after Operation Refit closed (G3). Codename
> **Operation Palimpsest** (operator-chosen — the STATE-graduation anchor: overwrite the live surface, preserve
> every earlier layer verbatim; renameable at this campaign's own G1). It ships via `skill_template_release`, per
> the v8.6/8.7/8.8 lineage — governance **8.8 → 8.9**, standard **v2.5 held**. Full ship-set + phase shape +
> release mechanics: the roadmap `how/campaigns/campaign_refit/artifacts/vnext_roadmap.md` §v8.9 + the stub.
>
> **Phase pointer:** **P1 Author ✅ + P2 Ratify ✅ — operator ratified the v8.9 batch 2026-07-24 (§7.7).** P1
> delivered items 1–7 dev-side (M1 anchor + M2 convention/machinery), `adna_validate --governance` zero-drift, no
> count bump; the operator signed the P2 gate after a full packet walkthrough
> (`artifacts/p2_ratification_summary.md` — Status: **accepted**). The batch is `accepted`. **⏭ Next = P3 Fire**
> (`skill_template_release`: folds the M1+M2 deltas + both P3 riders into a fresh `aDNA-Network/aDNA` clone;
> governance 8.8→8.9, standard v2.5 held, image skill 32→33) — **gated on a separate operator GO** (ratifying ≠
> firing). **Nothing ships to `.adna/` until that GO.**

## Goal

Ship the **v8.9 governance batch** ratified at Refit G2 to the public clone-and-run image `aDNA-Network/aDNA`:
the STATE.md graduation doctrine (anchor), the STATE-convention family, the path-convention doctrine, the
fork-kit AGENTS enforcement, the codename-collision note, the release-process leak hardening, and the
`compliance_checker.py` hardening. No normative change.

## Ship-set (7 items — from the ratified roadmap)

1. **STATE.md graduation** *(ANCHOR)* — new `skill_state_graduation` (+1 skill) + `STATE_history.md` seed +
   `state_history:` pointer + >100 KB auto-graduate tripwire + frontmatter-as-a-graduation-class. Source:
   `how/backlog/idea_upstream_state_history_graduation.md`.
2. **STATE-convention family** — `mission:` frontmatter key + `P<n>[/<count>]` phase-display grammar +
   `+adna-normalize-phase`. Sources: `idea_upstream_mission_frontmatter_key.md` ·
   `idea_upstream_phase_display_grammar.md`.
3. **Path-convention doctrine** — `~/aDNA/`-in-prose / absolute-in-execution. Source:
   `idea_upstream_path_convention_doctrine.md`.
4. **Fork-kit AGENTS enforcement** — `skill_project_fork` 4-file-kit gate + AGENTS seed + genesis carve-out.
   Source: `idea_upstream_fork_kit_agents_enforcement.md`.
5. **Codename-collision authoring note** — order/campaign templates. Source:
   `idea_upstream_codename_collision_grep_order_templates.md`.
6. **Release-process leak hardening** — into `skill_template_release`. Source:
   `idea_upstream_dev_vault_name_leak_sweep.md`.
7. **`compliance_checker.py` hardening**. Source: `idea_tool_compliance_checker_hardening.md`.

**Count impact:** +1 skill (32 → 33); possibly +1 template (`STATE_history.md` seed) — confirm at P1.
**Explicitly NOT carried:** the v2.6 candidates (`task` entity · `surface_composition_graph` subtype),
node-manifest fork-emission (Home-ADR-gated), and the Storyweave in-person deferred items.

## Phase shape (v8.7/v8.8 lineage — opened at P0, 2026-07-24)

`P0 Charter (✅ done) → P1 Author riders → P2 Ratify (OPERATOR GATE) → P3 Fire (the push IS the release: 5
version surfaces, DE-LINK grep, dry-run-then-pause, tags-only v8.9, fresh-clone smoke).` Mechanics: the stub
§"Release mechanics" + `how/skills/skill_template_release.md`. **Two hard operator gates** — P2 ratification
(§7.7) and the P3 dry-run-then-pause GO. Agents author + stage; the operator rules and signs.

## Missions (P1 — Author riders)

| # | Mission | Ship-set items | Tier · est | Status |
|---|---------|----------------|-----------|--------|
| M1 | [[mission_v8_9_1_anchor_state_graduation]] — **ANCHOR** | 1 (STATE.md graduation: skill + template + tripwire + doctrine) | opus · ~80 kT | ✅ **completed 2026-07-24** (~75 kT) |
| M2 | [[mission_v8_9_2_convention_machinery_batch]] | 2–7 (STATE-convention family · path doctrine · fork-kit · codename note · leak-sweep · compliance_checker) | opus · ~90 kT | ✅ **completed 2026-07-24** |

**M1 delivered (dev-side):** [[skill_state_graduation]] (new base skill, 55→56) · [[template_STATE_history]] (new
base template, 44→45) · the frontmatter-as-graduation-class doctrine + CHANGELOG variant (in the skill) · the
>100 KB tripwire **staged image-side** (`artifacts/image_side_state_graduation_tripwire.md`, folds to `.adna`
`skill_node_health_check` at P3). `adna_validate --governance` zero-drift; anchor idea flipped `resolved`. No
`.adna/` edit; no image count change yet (32→33 lands at P3).

**M2 delivered (dev-side):** items 2–7 authored, **no count bump** (`adna_validate --governance` zero-drift): new
[[doctrine_state_conventions]] (`mission:` key + `P<n>[/<count>]` grammar + `+adna-normalize-phase`) + the
`.adna/STATE.md` mission-key **P3 rider** (`artifacts/image_side_state_mission_key.md`) + the STATE-convention trio
**self-adopted on this vault's STATE.md** (SO-8); path doctrine → `CLAUDE.md`; fork-kit AGENTS gate →
`skill_project_fork` (Step 4.6); codename note → `template_campaign`; release DE-LINK/leak hardening →
`skill_template_release` (Step b.1); `compliance_checker.py` hardening (**3-point acceptance test PASS**). All 7
source ideas flipped `proposed → resolved`. Both P1 missions now closed → **P2 ratification gate (operator)**.

**Sequencing:** M1 anchor first (it is load-bearing + realizes the 32 → 33 skill count); M2's convention touches
co-land, machinery hardening (items 6–7) can trail. M2 may split at the convention/machinery seam. On both
missions' close → **P2 ratification gate** (operator), then **P3 fire**.

## Provenance

Seeded by [[mission_refit_5_vnext_triage]]; ratified at [[ratification_record_refit_g2]] (DP9). **Opened
2026-07-24** (P0 Charter, `session_2026-07-24_palimpsest_p0_charter`) on the operator's post-Refit-close
"continue the campaign" election; codename **Operation Palimpsest** chosen (AskUserQuestion).

## Completion Summary

**Shipped:** the full **v8.9 governance batch** to `aDNA-Network/aDNA` — commit `c8e5427` + annotated tag `v8.9`
(`main a32724b..c8e5427`; remote tag `0fdd4cd`). **Governance 8.8 → 8.9; standard v2.5 held** (no normative change).
Image counts **30 → 31 templates / 32 → 33 skills**. Local `~/aDNA/.adna` synced (`0364d85`); 6/6 fresh-clone smoke green.

### Deliverables (7 ship-set items)
1. **STATE-graduation doctrine** — new `skill_state_graduation` + `template_STATE_history` seed + `>100 KB` STATE/CHANGELOG health-check tripwire + frontmatter-as-graduation-class (the +1 skill / +1 template).
2. **STATE-convention family** — `mission:` frontmatter key + `P<n>[/<count>]` phase-display grammar + `+adna-normalize-phase` (folded as `.adna/CLAUDE.md` § STATE conventions).
3. **Path-convention doctrine** — `~/aDNA/…` in prose, absolute in execution (`.adna/CLAUDE.md` § Path references).
4. **Fork-kit AGENTS enforcement** — `skill_project_fork` 4-file governance-kit completion gate + AGENTS `agent_init` seed + genesis carve-out.
5. **Codename-collision note** — "grep the codename before you set it" in `template_campaign`.
6. **Release-process leak hardening** — DE-LINK + dev-vault-name hard gate (Step (b.1)) in `skill_template_release` (dev-side only; hardened the very tool P3 ran).
7. **`compliance_checker.py` hardening** — scratch-default output · python3.13 runtime guard · `unsupported type — not scored` marker.

### Phase / gate record
P0 Charter (2026-07-24) → P1 Author [M1 anchor `c3b4ec2` + M2 convention/machinery `44ace2a`] → **P2 Ratify** (operator-signed 2026-07-24, `a435093`; record `artifacts/p2_ratification_summary.md`) → **P3 Fire** (`96cd9e9`; AAR `artifacts/aar_v8_9_p3_fire.md`). Two hard operator gates honored (P2 §7.7 ratification + P3 dry-run-then-pause "cut & push v8.9"). Dev record pushed to `origin/aDNA.aDNA` at wind-down.

### Descoped / not carried
The v2.6 candidates (`task` entity · `surface_composition_graph` subtype — need a standard-version move), node-manifest fork-emission (Home-ADR-gated), Storyweave in-person items. Pre-existing dev-name leaks in shipped `.adna/how/docs/upgrade_v6_to_v7.md` + the exemplar bundle left for a future doc-currency pass (the v8.9 leak-sweep hardening governs *future* folds, not a retroactive clean).

### Follow-ups
Site install-truth fixture regen at next deploy · the doc-currency genericization pass above.

## Campaign AAR

- **Worked:** authoring the whole batch **dev-side first**, then folding via `skill_template_release` in a throwaway fresh clone with a full gate stack, kept the public push a mechanical last step after operator GO. The M1-anchor rider pattern (stage image-only edits) transferred cleanly to M2's STATE-seed key.
- **Didn't:** the "no count bump" framing (true for M2 dev-side) obscured that the **combined P3 fire IS a count-change release** (M1's +1/+1 realized at the image) — surfaced at fire-time when the validator regex caught a stale historical header-comment count. A count-change release touches more surfaces than v8.7/v8.8 did.
- **Finding:** **image ≠ dev** in both counts *and* structure — the image's `skill_project_fork` is richer than dev (→ 3-point delta, not a copy) and has no `what/doctrine/` (→ doctrine folds as a CLAUDE.md subsection). The two-agent fold-map recon that caught both paid for itself.
- **Change:** the release skill now carries a codified **DE-LINK hard gate** (Step (b.1), shipped this batch) — the manual line-list that nearly leaked 21 wikilinks at v8.5 is replaced by a whole-tree grep.
- **Follow-up:** dev-graph record pushed (this wind-down); site install-truth regen + the pre-existing-leak doc-currency pass remain optional/non-blocking. **Operation Palimpsest — do NOT re-open.**
