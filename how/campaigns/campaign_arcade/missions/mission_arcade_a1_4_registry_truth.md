---
plan_id: mission_arcade_a1_4_registry_truth
type: plan
title: "Registry truth for Exchange and Terminal: memo to Hestia, gated sync"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 1
campaign_mission_number: 5
mission_class: integration
created: '2026-10-15'
updated: 2026-10-16
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: sonnet
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 25
token_budget_actual: 35       # rough; ≈1.4× — under the ADR-016 2× retrospective trigger; executed fable on a declared-sonnet card (operator-summoned), as A1.1/A1.2 on their declared-opus cards
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a1_3_vauban_rulings_packet
blocks:
- mission_arcade_a2_1_adr_065_estate_position
gate: "G1 — memo GO; the sync is its own operator GO."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Registry truth for Exchange and Terminal: memo to Hestia, gated sync

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P1 — Access points
**Mission**: 5 of 15

## Goal

The adna.network registry rows for Exchange.aDNA and Terminal.aDNA read status: genesis, last_synced 2026-08-29, and Terminal's still describes a soft-fork of cmux. The inventory is Hestia's; the regeneration is pt19-gated. Draft the per-row corrections from each vault's own STATE/MANIFEST, send them to Hestia as names-only data, and queue the sync:vaults GO as a DP3-class disposition item (the site diverges from the stimulus again).

## Exit Gate

G1 — memo GO; the sync is its own operator GO.

## Objectives

### 1. Corrections table
- **Status**: completed
- **Session**: session_stanley_20261016_172213_arcade_a1_4_registry_truth
- **Description**: Two rows × (status · phase · persona · purpose line · github_url) derived from the vaults, not typed.
- **Files**: artifacts/p1/registry_corrections_exchange_terminal.md
- **Depends on**: none

### 2. Memo to Hestia
- **Status**: completed
- **Session**: session_stanley_20261016_172213_arcade_a1_4_registry_truth
- **Description**: outbound_ready; cites ADR-052 §admission; asks the inventory write only.
- **Files**: who/coordination/coord_2026_10_16_rosetta_to_hestia_two_access_point_rows_say_genesis_for_products_in_service.md (`outbound_ready`; send GO owed)
- **Depends on**: 1

### 3. sync:vaults GO queued
- **Status**: completed
- **Session**: session_stanley_20261016_172213_arcade_a1_4_registry_truth
- **Description**: STATE §Pending Manual Actions row; GARNIER DP3 item appended when it runs. *(The row is queued; item (j) is written at the sync sitting, by the card's own wording — not this one.)*
- **Files**: STATE.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a1_3_vauban_rulings_packet]].

### Next Mission Inputs
- Feeds [[mission_arcade_a2_1_adr_065_estate_position]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- `artifacts/p1/registry_corrections_exchange_terminal.md` — two rows × (status · tagline · note first-sentence · current_phase (optional) · github_url · last_synced · persona) in section A (the ask) + section B (inventory-only, offered), every cell with its `[D]` file:line; §0 maps each public field to its owning file; §3 is the sanitizer proof (5 PASS · 2 planted controls REFUSED, the generator's own regex evaluated from the file).
- `who/coordination/coord_2026_10_16_rosetta_to_hestia_two_access_point_rows_say_genesis_for_products_in_service.md` — `outbound_ready`, `ack_required: true`, cc Vauban + Berthier (plan-time; strikeable at the send GO); cites aDNA.aDNA ADR-052 §admission (not triggered — both admitted) + §tiers.3 (`active` = in use, self-declared); asks the two cards + two inventory rows only; names what is not asked (no admission change, no `vaults.json` touch, no deploy).
- `STATE.md` §Pending Manual Actions — the 2026-10-16 A1.4 row: send GO → Hestia's write → `sync:vaults` GO → built-not-deployed → DP3 item (j).

### Descoped
- No delivery, no `sync:vaults`, no deploy, no DP3 item (j) — each is its own GO; (j) is appended at the sync sitting by this card's own wording.
- No write under `Home.aDNA/`, `Exchange.aDNA/`, `Terminal.aDNA/` (foreign-tree `git status --short` identical at open and seal) — pt19 / ARCADE rule 1.

### Key Findings
- [D] **The rows are stale at the card, not the inventory.** `scripts/build_vaults_data.mjs:203-282` reads `status · tagline · last_synced · github_url · current_phase` from Hestia's `what/vault_cards/the_<V>.aDNA.md` (both last written at the B7 backfill `9be9794`, 2026-08-29) and only `note` (sanitized) from `inventory_vaults.yaml`; `status` falls back to `health`. The card's "inventory write only" was the right owner but the wrong file — both files are Hestia's, so the ask lands in one memo.
- [D] Both `note` fields project `null` for a mechanical reason, not a data gap: Exchange's sentence runs into "Operation Agora", Terminal's row opens with a date — `PRIVATE_MARKERS` (`:114`) refuses whole-sentence. Every proposed replacement was proven against the live regex before being asked for; the Exchange sentence is worded around the R-125 term that the vault's own MANIFEST opening carries.
- [D] `current_phase` is filled by **0 of 74** rows today — offered as optional, never as a precedent.
- [D] Both repos are private today (Terminal `gh repo view` PRIVATE; Exchange Codeberg private per its git wrapper), so `github_url` stays empty on a `PASS` label, with Exchange's public flip as `HORIZON`.
- [D] Exchange's own `MANIFEST.md:27` (pkg `0.0.6`) disagrees with its `STATE.md:118` (`0.0.44`) — an index-vs-artifact row in their tree, noted as an aside to Berthier, not asked.

### Scope Changes
- The memo carries two cc (Vauban, Berthier) that the card did not name — a plan-time ruling (their rows are described; the 08-21 forgejo precedent cc'd the vault owner); strikeable at the send GO.
- Executed on fable against a declared `sonnet` tier (operator-summoned), recorded in the session and the budget line.

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: reading the generator before reading the data — the field→file map (§0 of the artifact) turned "fix two rows" into "ask for two cards + two first sentences", and the sanitizer proof turned a hope into a derived PASS/REFUSED line before Hestia is asked to type anything.
- **Didn't**: nothing failed; the card's `verification_method` wants counts derived, and the one count that mattered (`current_phase` 0/74) came from an extract whose empty output had to be read as the number — an absent list is a count too, and it is easy to read as "no output".
- **Finding**: a public row can be false by *staleness of the overlay* while the inventory beneath it is current — the card is a second source of truth with its own clock (`updated: 2026-08-29`), and the registry shows the older of the two clocks without saying which it read.
- **Change**: a registry-truth ask names the owning **file** per field, not the owning persona — same owner, different file, different write.
- **Follow-up**: send GO (cc strikeable) → Hestia's write + date → `sync:vaults` GO (expect the 32 held on stderr) → DP3 item (j) · G1's four signatures are unchanged by this sitting · the `current_phase` field's first use, if Hestia takes it, is a registry-surface question for Vitruvius (0/74 → 2/74 renders where?).
