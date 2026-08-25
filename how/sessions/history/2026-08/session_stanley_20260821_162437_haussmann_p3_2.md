---
type: session
session_id: session_stanley_20260821_162437_haussmann_p3_2
created: 2026-08-21
updated: 2026-08-21
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p3_2_registry_json
executor_tier: sonnet
token_budget_estimated: "~90–140 kT (mission declared) + O4 additive — versioned public JSON endpoint (2 routes, one producer), Dataset JSON-LD + the 3 zero-JSON-LD pages, schema-dts in the build, gates red-tested, machine_eye 8/9 re-run, AAR. O4 (Berthier ack + doctrine backlog) rides on top by operator ruling."
token_budget_actual: "≈115 kT by content load — inside the mission's ~90–140 kT estimate; O4 rode on top at ~10 kT"
tags: [session, haussmann, p3, registry_json, jsonld, adr_056]
---

# Session — HAUSSMANN P3.2: the registry as data

Opened on *"Please read the CLAUDE.md and let's continue the campaign."*

## Opening state

- **⛩ Decade-2 SITREP gate: SUBMITTED and APPROVED.** `how/gates/haussmann_decade2_sitrep.output.json`
  — all four sections (`delivered` / `inflight` / `remaining` / `owed`) `approve`, composite
  `approve`, confidence **4**, completed `2026-08-21T22:49:44Z`. Decade 2 continues. `[D]`
- **Next mission confirmed from the `status:` field, not the index** (campaign CLAUDE.md §Mission
  index instructs exactly this): `mission_haussmann_p3_2_registry_json.md` is `queued`, and is next
  in convention 11's ruled order (P4.5a ✅ → P3.5 ✅ → P3.1 ✅ → **P3.2**).
- **The campaign's mission-index pointer is stale for the fourth time** — it still reads
  *"Next mission: `P3.1`"*, which P3.1's own close should have advanced. Recorded here as the
  recurrence it is; fixed in this mission's close cascade.

## 📨 Intake — the untracked sweep caught a memo dated today

`git ls-files --others --exclude-standard who/coordination/` at session open returned **one**
untracked memo: `coord_2026_08_21_berthier_to_rosetta_dropbox_doctrine_graduation.md`
(Berthier / aDNALabs HQ, `ack_required: true`, severity low). **Third consecutive session in which
the sweep was load-bearing** — five memos in three days, every one found this way and none by any
other mechanism.

**The ask**: graduate the fleet's coordination drop-box convention (currently living in six-plus
per-vault inbox READMEs and nowhere canonical) into `what/doctrine/doctrine_coordination_dropbox.md`.
Their draft is at `aDNALabs.aDNA/how/campaigns/campaign_deputy_fleet/artifacts/doctrine_coordination_dropbox_draft.md`,
offered to be rewritten entirely. No timeline requested.

## ⛩ Operator rulings (in-chat, at plan approval)

| # | Question | Ruling |
|---|---|---|
| 1 | AC1 says "versioned endpoint"; the P3.5 precedent (`/community/proposals.json`) puts the version in the *body* at an unversioned path, and ADR-056 clause 7 reserves versioned URLs for breaking changes. Which contract ships? | **Both** — `/vaults.json` (canonical, advertised, the path machine_eye actually probed) **and** `/api/registry.v1.json` (pinnable), **byte-identical**, gate-asserted |
| 2 | How far does this session go? | **Build → gates green → HALT for a separate ⛩ prod GO.** No deploy in-session |
| 3 | Berthier's ack-required memo | **Ack now** (adopt-in-principle, no timeline) **+ queue the doctrine** as a backlog idea. Do not fold the authoring into this mission's budget |

## Recon at execution (convention 12 — the genesis evidence ages)

Re-measured `site/src/data/vaults.json`, 74 rows, 2026-08-21 `[D]`:

- **30 distinct fields; 13 populated 0/74** — `current_phase`, `default_partners`, `docs_site_url`,
  `full_name`, `headline_adrs`, `headline_mission`, `headline_mission_state`, `lifecycle_stage`,
  `recent_closed`, `subclass`, `superseded_by`, `supersedes`, `tagline`. This is **P1.3's sanitizer
  working**, not a defect (ADR-052 §tiers.0 measured the same shape on 2026-08-19 and agrees row for
  row: `tagline` 0, `note` 44, `persona` 61, `last_synced` 24).
- Populated: `note` 44 · `persona` 61 · `last_synced` 24 (**18 share `2026-05-24`** — a bulk registry
  sync, never renderable as freshness, ADR-052 §tiers.3) · `canonical_governance` 23 ·
  `persona_archetype` 16 · `federation_refs` 6 · `companion_vaults` 3 · `github_url` 1 ·
  `umbrella_pillar` 1.
- Status census: genesis 56 · pending 10 · active 7 · genesis_stub 1. Edges 14.
- **DP4 minimal-card suppression is already in the data** `[D]`: `CakeHealth.aDNA`,
  `PercySleep.aDNA`, `aiLP-Dataroom.aDNA` carry `listing: "minimal"` and expose only
  identity/class/status/persona. Anything reading `../data/vaults` inherits it — a gate still asserts
  it, because inherited-by-construction is a fact that can be refactored away silently.

**Premise correction carried in from ⛩ DP6, re-verified here** `[D]`: the mission's genesis claim
*"no Organization JSON-LD, no sameAs"* is **false**. Both shipped at P1.2 —
`site/src/utils/seo.ts:16-21` defines `PUBLISHER_ORG` with `sameAs: PUBLISHER_SAME_AS` and every
builder embeds it. ⊳ D-I ruled the nested `WebSite.publisher` form satisfies the Organization half.
Verify and record; do not rebuild.

## Objectives

| # | Objective | Status |
|---|---|---|
| O0 | Public-projection schema → ADR-056 clause 3 | ✅ |
| O1 | Endpoint (one producer, two routes) + advertisement | ✅ |
| O2 | Dataset JSON-LD · the 3 bare pages · schema-dts | ✅ |
| O3 | Gates (red-tested) · machine_eye 8/9 re-run · AAR | ✅ |
| O4 | Berthier ack + doctrine backlog idea *(operator-ruled, additive)* | ✅ |

## SITREP

### Completed

- **P3.2 build-side, all four objectives.** `/vaults.json` + `/api/registry.v1.json` serve
  **byte-identical 80,997 B** (74 vaults, 14 edges) from one producer; `Dataset` + `DataDownload` on
  `/vaults`; the 3 bare pages covered (3 → 0); `schema-dts` typing every JSON-LD builder;
  `/reference/registry-api` documents the schema.
- **Suite 541 → 552, zero xfail.** 11 new assertions (G16 ×8, G17 ×3), **12 red-tests** — 11 by
  mutating the built artifact, 1 by mutating the source (`license` → `licence`, caught by schema-dts
  with the fix named). 34/34 green on restore.
- **axe 0** across `/vaults`, `/privacy`, `/security`, `/design-system` × dark + light; **0 console
  errors**. Verified against the report's real key (`axeViolations`) after the first aggregation
  keyed on a field that does not exist and summed a **vacuous zero**.
- **Evidence + records**: `machine_eye_delta_p3_2.md` · claim rows **R-130/131/132** + §13 ·
  ADR-056 clauses 3 + 4 · changelog `2026-08-21.md`.
- **O4**: Berthier acked **adopt** with a stated 2026-09-30 commitment; doctrine filed as
  `idea_upstream_coordination_dropbox_doctrine`.

### ⛩ Owed to the operator

**The prod deploy GO.** Everything above is measured on the **local preview build**. Nothing is live
on `adna.network`. The deploy path is `site/scripts/deploy_adna.sh prod`; the machine-eye delta
packet must be **re-run and re-stamped against the alias** afterwards.

### ⚠ A sixth memo arrived MID-SESSION — and it is the one P0.4 has waited five days for

The close-time sweep returned a memo that **was not there at session open**:
`coord_2026_08_20_aspasia_to_rosetta_reconciliation_truth_note.md` (Aspasia / Fluxer.aDNA, authored
08-20, delivered 08-21, `ack_required: false`). It answers **all ten** of P0.4's §6 questions.

- **PR-3 aliveness CLEARED WITH EVIDENCE** — inside recon 2026-08-20: 4 guilds, 23 users, 49
  channels (+51 private), 264 messages, same-day activity.
- Ask 1 **done** (Fluxer STATE reconciled; *"Nothing is deployed"* removed). Ask 3 **accepted** as
  their own gate line. **D-1 RULED**; **D-3 interim = harvest OFF**; venue ⛩ ruled *"aDNA Community"*.
- **Still 1 of 3 prerequisites green.** Their words: *"HAUSSMANN's honest no-link state remains
  correct until the ladder completes — we will signal when the three prerequisites are green rather
  than ask you to poll."*

**Recorded into P0.4, deliberately NOT closed** — closing takes an AAR (SO#5) and P3.2 was not that
session. The finding worth keeping: the trigger model for P3.4 has moved from **poll** to **push**,
and the push transport is a directory nobody watches. **Six memos in three days, every one found
only by the sweep, three of them arriving mid-session.** That is the concrete case behind the
discovery clause in `idea_upstream_coordination_dropbox_doctrine`.

### Blockers

None for P3.2. **P0.4 is now unblocked and awaits its own close session.**

### Findings routed

- **F-i → P4.4** — gate-27 scans `.html`/`.md` only; the 81 KB of new `.json` public surface is
  unlinted. The same hole P3.1 found with twins, one mission later in a new extension.
- **F-j → P4.4** — `astro check` carries a **26-error pre-existing baseline** (7 files, none mine),
  so schema-dts safety is authoring-time only and `npm run check` must not be cited as passing.
- **Item 9's open half** — 74 vault entity pages still type as generic `WebPage`. Not fixed on
  purpose: the plausible labels are wrong, so it is a ruling about what a vault *is*.

### Files touched

**Created** — `site/src/utils/registryJson.ts` · `site/src/pages/vaults.json.ts` ·
`site/src/pages/api/registry.v1.json.ts` · `site/src/content/reference/registry-api.mdx` ·
`site/src/content/changelog/2026-08-21.md` ·
`how/campaigns/campaign_haussmann/evidence/machine_eye/machine_eye_delta_p3_2.md` ·
`how/backlog/idea_upstream_coordination_dropbox_doctrine.md` ·
`who/coordination/coord_2026_08_21_rosetta_to_berthier_dropbox_doctrine_ack.md` · this file.

**Modified** — `site/src/utils/seo.ts` (schema-dts + `buildDatasetJsonLD`) ·
`site/src/utils/vaultLabels.ts` (`MINIMAL_CARD_NOTE`) · `site/src/pages/vaults/index.astro` ·
`site/src/pages/vaults/[slug].astro` · `site/src/pages/llms.txt.ts` ·
`site/src/pages/{design-system,privacy/index,security/index}.astro` ·
`site/tests/gates/gate-17-agentic.spec.ts` · `site/package.json` (schema-dts devDep) ·
`what/decisions/adr_056_agentic_surface_contract.md` · the claim register · P3.2 + P4.4 mission
files · campaign `CLAUDE.md` · `session_prompts_haussmann.md`.

**Committed but not authored here** — the inbound Berthier memo, which had been sitting untracked.

## Next Session Prompt

> You are Rosetta in `~/aDNA/aDNA.aDNA`. **P3.2 is `completed` but UNDEPLOYED** — it halted at green
> gates (552/552, zero xfail) for a separate ⛩ prod GO. **First, ask the operator whether to fire
> that GO.** If yes: `site/scripts/deploy_adna.sh prod` (token by env-var only, never `--token`),
> record the deploy ID in the session log and STATE, then **re-run and re-stamp
> `evidence/machine_eye/machine_eye_delta_p3_2.md` against the alias** — it is currently measured on
> the local build only and says so on its face. If the operator defers the deploy, the next mission
> is **`P3.3`** (`mission_haussmann_p3_3_mcp_server.md`, `queued`) per convention 11's ruled order,
> **not** phase numbering — note its `human_gate: true` (npm publish is an operator act) and that it
> declares `needs P3.1+P3.2`, both of which are now closed build-side. **Sweep
> `git ls-files --others --exclude-standard who/coordination/` at open** — five inbound memos in
> three days have arrived that way and by no other means.

## Progress log

- **16:24** — session opened; startup checklist run; gate output + inbound memo read; plan ratified.
- **16:28** — O1 endpoint live in the build; both routes byte-identical, no route collision.
- **16:33** — O2 schema-dts red-tested; census re-run `@graph`-aware after my first parser was wrong.
- **16:40** — O3 gates: 11 assertions, 12 red-tests all red, 34/34 green on restore.
- **16:46** — full suite 552/552 zero xfail; axe 0 ×2 themes.
- **16:55** — close cascade: ADR, delta packet, claim register, changelog, pointers, P4.4 routing, O4.
