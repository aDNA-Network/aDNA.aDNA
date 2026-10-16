---
type: artifact
subtype: corrections_table
campaign_id: campaign_arcade
mission_id: mission_arcade_a1_4_registry_truth
created: 2026-10-16
updated: 2026-10-16
status: active
last_edited_by: agent_rosetta
session: session_stanley_20261016_172213_arcade_a1_4_registry_truth
tags: [arcade, a1_4, registry, hestia, exchange, terminal, pt19]
---

# Registry corrections — `Exchange.aDNA` · `Terminal.aDNA`

> **Every cell is derived, not typed.** `[D]` = read at the object this sitting (2026-10-16, UTC), with the file:line beside it. Nothing here is written anywhere but this file and the memo it feeds: the registry source is Hestia's (pt19; ARCADE rule 1), and the write is asked of her by `coord_2026_10_16_rosetta_to_hestia_two_access_point_rows_say_genesis_for_products_in_service.md`. **Tense labels** (ARCADE rule 4): `PASS` = true today, verified · `TAUGHT-AS-DESIGN` = ratified design, not yet live · `HORIZON` = intended.

## 0. Where each public field comes from (so the ask lands on the right file)

`[D] scripts/build_vaults_data.mjs:203-282` — for an admitted row, the projection reads:

| Public field (`site/src/data/vaults.json`) | Source | Owner |
|---|---|---|
| `status` | `card.status` → fallback `inventory.health` → `'unknown'` (`:254`) | Hestia (card `Home.aDNA/what/vault_cards/the_<V>.aDNA.md`; inventory `Home.aDNA/what/inventory/inventory_vaults.yaml`) |
| `tagline` | `card.tagline` through the R-125 withhold (`:244`) | Hestia (card) |
| `note` | `publicNote(inventory.note)` — first sentence(s) until a `PRIVATE_MARKERS` hit, then the R-125 withhold (`:279`, `:114`, `:162`) | Hestia (inventory) |
| `current_phase` | `card.current_phase` (`:256`) — **0 of 74 rows fill it today** (`python3.13` extract over `vaults.json`: none printed) | Hestia (card) |
| `github_url` | `card.github_url` (`:273`) | Hestia (card) |
| `last_synced` | `card.last_synced` (`:278`) | Hestia (card) |
| `persona` | `card.persona` ?? `inventory.persona` (`:250`) | Hestia |

Both vaults are on `site/src/data/registry_admission.yaml` `admitted:` (`[D] :39` Exchange · `:79` Terminal) — **no admission question arises**; this is a currency correction on two admitted rows. Registry `generated_at: 2026-10-04` (`[D] vaults.json:74`); the two cards were last written at Hestia's B7 backfill, Home commit `9be9794` (`[D] git -C Home.aDNA log -1 -- what/vault_cards/the_{Exchange,Terminal}.aDNA.md`), card `updated: '2026-08-29'` (`:23` both).

Status vocabulary (`[D] what/decisions/adr_052_registry_admission_lifecycle_tiers.md` §tiers.3, aDNA.aDNA ADR-052): three tiers from `status` alone — `active` = *in use* ("The vault is being worked in today. Self-declared.") · `pending` = *chartered* · `genesis`/`genesis_stub` = *planned*. Histogram today (`[D]` derived): genesis 53 · active 10 · pending 10 · genesis_stub 1 = 74.

## 1. `Exchange.aDNA` — section A, projected fields (the ask)

Published row: `[D] site/src/data/vaults.json:1488` (`"vault": "Exchange.aDNA"`). Card: `[D] Home.aDNA/what/vault_cards/the_Exchange.aDNA.md`.

| Field | Published today `[D]` | Card today `[D]` | Proposed | Source in the vault `[D]` | Tense |
|---|---|---|---|---|---|
| `status` | `genesis` | `status: genesis` (`:11`) | **`active`** | `Exchange.aDNA/MANIFEST.md:11` `status: adopt` ("Tier-0 complete 2026-07-17; ADOPT posture since 2026-09-17") · `STATE.md:6` `status: adopt`, `:4` `updated: 2026-10-16` · `STATE.md:118` pkg `adna_exchange` `0.0.44` · `STATE.md:123` "Serving, by ROLE: L1 serves `0.0.44` … `.5` (root-of-record) serves `0.0.44`" · `STATE.md` §Current status: watch pickups #1–#162 (2026-07-17 → 2026-10-16) | `PASS` — a runtime in service, the graph worked in today |
| `tagline` | "The aDNA Exchange — registry, commons, and market where nodes discover, publish, and exchange context graphs." | same (`:7`) | **no change** | `MANIFEST.md` §identity (one spectrum, three vocabularies) | `PASS` |
| `note` | `null` | inventory `:1560` begins "The aDNA Exchange — federated distribution substrate … (Operation Agora). Genesis — Tier-0 pilot COMPLETE (W0–W5, 35/35 tests green; Dossier RATIFIED ADR-007)…" *(quoted verbatim; that is Exchange.aDNA's ADR-007)* | **first sentence replaced** (see §3 for the proven text): *"The aDNA Exchange is the federated distribution substrate through which nodes discover, publish, version and exchange context graphs and agentic topologies under configurable sharing conditions; its Tier-0 runtime is in service."* | `MANIFEST.md` §identity + `STATE.md:123` | `PASS` |
| `current_phase` | `null` | absent | **optional**: *"Tier-0 runtime in service; adopt posture."* — or leave `null` (0/74 fill it) | `MANIFEST.md:11` | `PASS` |
| `github_url` | `null` | `github_url: ''` (`:14`) | **stays empty** | `Exchange.aDNA/how/federation/git/CLAUDE.md:26` `visibility: private` ("FOSS-in-dev; flips public at release"); `:61` origin `codeberg.org/aDNA-Network/Exchange.aDNA` (private) | `PASS` (private today) · the public flip = `HORIZON` |
| `last_synced` | `2026-08-29` | `'2026-08-29'` (`:19`) | **the date of Hestia's write** | — | — |
| `persona` | "Triad: mnemosyne (registry) / hermes (transport) / themis (settlement); berthier coord" | `:8` | **no change** | `MANIFEST.md:8-9` `persona: [mnemosyne, hermes, themis]` · `coordinator: berthier` | `PASS` |

### Section B — inventory-only fields (not projected; Hestia's truth, offered not required)

`[D] Home.aDNA/what/inventory/inventory_vaults.yaml` Exchange row (`:1544`):

| Field | Today | The vault says `[D]` | Offered |
|---|---|---|---|
| `health` (`:1555`) | `genesis` | `MANIFEST.md:11` `status: adopt` | `active` — **move with the card's `status`**, else the fallback disagrees with the overlay |
| `campaigns` (`:1551`) | `campaign_operation_agora_ii_hardening` (scalar) | `MANIFEST.md:10` `campaign: campaign_operation_emporion` ("devnet_wave1 also active") · `STATE.md` §Current status: Emporion **active**, `campaign_devnet_wave1` **active**, `campaign_exchange_medical` proposed | `[campaign_operation_emporion, campaign_devnet_wave1]` |
| `status_as_of` (`:1548`) | `2026-07-07` | this sitting's probe: HEAD `a6862b6`, 0 dirty | the date of her probe |
| `last_sync` (`:1559`) | `2026-06-30` | — | the date of her write |
| `note` body (`:1560`) | "Genesis — Tier-0 pilot COMPLETE (W0–W5, 35/35 tests green…)" | `MANIFEST.md:27` "100 tests green (97 + 3 Postgres-gated), pkg `0.0.6`" · `STATE.md:118` pkg `0.0.44` | the first sentence per §3; the rest hers |

*Aside for Berthier (cc), not an ask:* the Exchange MANIFEST's own `:27` still reads pkg `0.0.6` while `STATE.md:118` reads `0.0.44` — their index-vs-artifact row, theirs to true.

## 2. `Terminal.aDNA` — section A, projected fields (the ask)

Published row: `[D] site/src/data/vaults.json:2116` (`"vault": "Terminal.aDNA"`). Card: `[D] Home.aDNA/what/vault_cards/the_Terminal.aDNA.md`.

| Field | Published today `[D]` | Card today `[D]` | Proposed | Source in the vault `[D]` | Tense |
|---|---|---|---|---|---|
| `status` | `genesis` | `status: genesis` (`:11`) | **`active`** | `Terminal.aDNA/MANIFEST.md:3` `role: platform_graph` (flipped 2026-10-06 at z1's close) · `:9` `platform_subtype: platform` (flipped at the Slice-5 cutover) · `STATE.md:4` `updated: 2026-10-15`, "`terminald` **64481** at open and close, never restarted (the live …)" · `STATE.md:7` `campaign_id: campaign_terminal_enceinte` (chartered 2026-10-08) · `:8` `mission: mission_e5_faubourg` active | `PASS` — the console graph worked in today, its daemon live |
| `tagline` | "A chief-of-staff terminal for a node — a soft-fork of cmux that turns the command line into an agent-driven workspace." | same (`:7`) | **replace** (proven §3): *"The operator console for a node — a Python/Textual terminal over a per-node session daemon that hosts agents on A2A and turns the command line into an agent-driven workspace."* | `MANIFEST.md:28` "Architecture in one line": `terminald` (PTYs + libghostty-vt + OSC events + persistence) · a Textual app · one control API · A2A v1.0 agent hosting · hosts: Ghostty (recommended), **cmux (adapter)**, browser, SSH/tmux — cmux is a *host adapter*, not a fork; `MANIFEST.md` §Identity: Go console archived → `Archive.aDNA/TerminalGo.aDNA` 2026-10-06 | `PASS` |
| `note` | `null` | inventory `:592` begins "⛩ ROW RE-SHAPED 2026-09-23 on Vauban's coord_…" (a date → refused whole) | **first sentence prepended** (proven §3): *"The operator console of the aDNA Network: a Python/Textual terminal app over a per-node session daemon, hosting agents over A2A, successor to the archived Go console."* | `MANIFEST.md:28` + §Identity | `PASS` |
| `current_phase` | `null` | absent | **optional**: *"v6 band in build; console in daily use."* — or leave `null` | `STATE.md:7` (Operation Enceinte = the v6 band) | `PASS` (in build) |
| `github_url` | `null` | `github_url: ''` (`:14`) | **stays empty** | `gh repo view aDNA-Network/Terminal.aDNA --json visibility,isPrivate` → `PRIVATE`, `isPrivate: true` (this sitting) · inventory `:596` `visibility: private` (forge-derived 2026-10-06) | `PASS` (private today) |
| `last_synced` | `2026-08-29` | `'2026-08-29'` (`:19`) | **the date of Hestia's write** | — | — |
| `persona` | "Berthier" | `'Berthier'` (`:8`) | **no change** — governance persona Berthier; outward memos signed Vauban | `MANIFEST.md:6-7` `persona: berthier` / `persona_status: inherited` · `CLAUDE.md:22` | `PASS` |

### Section B — inventory-only fields (not projected; offered not required)

`[D] inventory_vaults.yaml` Terminal row (`:573`):

| Field | Today | The vault says `[D]` | Offered |
|---|---|---|---|
| `health` (`:585`) | `genesis` | `MANIFEST.md:3` `role: platform_graph` | `active` — move with the card's `status` |
| `platform_subtype` (`:582`) | `campaign_staging_graph` ("→ platform graph at the Slice-5 cutover") | `MANIFEST.md:9` `platform_subtype: platform` — **the cutover the row anticipated happened 2026-10-06** | `platform` |
| `campaigns` (`:580`) | `[campaign_terminal_bastide]` | `STATE.md:7` Bastide **completed** 2026-10-06 · Casemate completed 2026-10-08 · **Enceinte active** | `[campaign_terminal_enceinte]` |
| `status_as_of` (`:577`) / `last_sync` (`:591`) | `2026-10-06` | this sitting's probe: HEAD `19b8047`, 2 dirty (theirs), no 2026-10-16 lease | the date of her probe / write |
| `note` body (`:592`) | the 09-23 re-shape record (begins with a date) | — | the first sentence per §3 in front; the record after it, untouched |

## 3. Sanitizer proof — derived with the generator's own regex, not asserted

`[D]` run this sitting (`node -e`, `PRIVATE_MARKERS` evaluated from `scripts/build_vaults_data.mjs:114` by `eval` of the matched literal; `R125_EMBARGOED_TERMS` = `[/\bLattice Protocol\b/i]` at `:153`, checked by eye — none of the five carries the term):

```text
PASS    | The aDNA Exchange is the federated distribution substrate through which nodes discover, publish, version and exchange context graphs and agentic topologies under configurable sharing conditions; its Tier-0 runtime is in service.
PASS    | The operator console of the aDNA Network: a Python/Textual terminal app over a per-node session daemon, hosting agents over A2A, successor to the archived Go console.
PASS    | The operator console for a node — a Python/Textual terminal over a per-node session daemon that hosts agents on A2A and turns the command line into an agent-driven workspace.
PASS    | Tier-0 runtime in service; adopt posture.
PASS    | v6 band in build; console in daily use.
REFUSED | Ruled under ADR-052 at genesis.                              ← planted control 1 (ADR-\d, genesis — bare on purpose: it is the control, not a citation)
REFUSED | Chartered 2026-10-15 as Phase 1 of a campaign.               ← planted control 2 (date, Phase \d)
```

Why the Exchange sentence avoids the vault's own opening words: `Exchange.aDNA/MANIFEST.md` §identity says "running the Lattice Protocol federation layer" — the R-125 embargo (`:146-160`) withholds a note **whole** on that term, so the public first sentence must not carry it until D-8 rules. The tagline passes only the R-125 check (not `PRIVATE_MARKERS`), but the Terminal replacement passes both anyway.

## 4. What is not asked, and what follows

- Not asked: any admission change (both admitted) · any `vaults.json` touch from here (pt19) · a deploy.
- Follows, in order, each its own GO: Hestia's write (her ack names the date) → the operator-gated `sync:vaults` (full regeneration from `Home.aDNA`; stderr should still name 32 held rows per Hestia 10-06) → built, not deployed → GARNIER DP3 item **(j)** appended beside (h)/(i) when it runs (the site diverges from stimulus `6487444` again, the (h) class).
