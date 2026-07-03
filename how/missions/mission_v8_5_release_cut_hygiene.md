---
type: mission
mission_id: mission_v8_5_release_cut_hygiene
title: "v8.5 release-cut hygiene — held release-prep package (F-CHM-216 + F-CHM-217 + doc-currency)"
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
status: active   # PREP COMPLETE + HELD — the release is the operator's gate (Standing Order #1 / skill_template_release)
owner: stanley
persona: rosetta
tags: [mission, v8_5, release_cut_hygiene, skill_template_release, champollion_residual, f_chm_216, f_chm_217]
source_of_truth:
  - how/campaigns/campaign_champollion/artifacts/handoff_packet_v8_4.md   # §3 v8.5 queue
  - how/campaigns/campaign_champollion/artifacts/findings_ledger.md        # F-CHM-216 L53 · F-CHM-217 L54
  - how/campaigns/campaign_champollion/artifacts/ship_verify_walk_v8_4.md  # M7.1 evidence
  - how/skills/skill_template_release.md                                   # the release mechanics
  - how/campaigns/campaign_operation_adna/f1_catchup_release_prep.md       # the prep-package pattern
---

# v8.5 release-cut hygiene — held release-prep package

> **What this is.** A f1_catchup-style **held release-prep package** for the next `skill_template_release`
> (version **v8.5**). It fixes the two Champollion M7.1 post-ship majors that are LIVE on the v8.4 image
> (the surfaces a newcomer touches first) plus the cheap doc-currency paper-cuts. **The v8.4 tag is
> IMMUTABLE — this ships as v8.5, never a retag.** Prep advances nothing outward: the release is the
> operator's gate (Standing Order #1). This file *specifies* the deltas so firing is mechanical.
>
> **One source fix is already applied + committed local** (§8): the single genuinely-broken
> `aDNA.aDNA/`-prefixed link at `how/templates/template_home_claude.md:267`.

## §1 — Scope

**IN (v8.5 release-cut hygiene):** F-CHM-216 (inner-README dead install flow) · F-CHM-217 (release-cut
leak sweep) · doc-currency paper-cuts (AGENTS.md version label, dead anchor, narrated counts,
aDNA_overview restamp decision).

**OUT (separate future missions — do NOT fold in):** the 5 new fork-lifecycle skills (merge / rename /
archive / second-genesis / spring-clean) · the full inner-README redesign (`idea_inner_readme_iii`) ·
the two new standard entity types (network-node-mirror / permission-edge — would reopen the v2.5 cut) ·
the P-2 validator rule / P-5 fork scaffold. Each is its own reviewable deliverable.

## §2 — Delta table (authoritative; apply to the fresh clone at release step (c))

> Mechanism legend — **SRC**: fixable in the dev-graph source (ships via the release assembly).
> **SHIP-DELTA**: `.adna/`-side release delta (release-tree artifact or dev/ship-diverged file — apply
> directly to the fresh clone's `.adna/…`). **DECISION**: gated on D-1 below.

| # | Finding | Shipped surface | Before → After | Class | Mechanism |
|---|---------|-----------------|----------------|-------|-----------|
| 1 | **F-CHM-216** | `.adna/README.md:39–49` (Getting Started) | dead two-step (`clone … .adna` + `cp template_workspace_claude.md CLAUDE.md` + `claude`) → **one-step** `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude` (matches root `README.md:34` + gate-12) | major | SHIP-DELTA (README = release-tree artifact) |
| 1b | **F-CHM-216 (cont.)** | `.adna/README.md:53,55` | `--depth 1` example → the one-step form; the "v7.0 flatten note" clause *"router bootstrapped from the template via the `cp` step above"* → *"the workspace router (`~/aDNA/CLAUDE.md`) ships pre-instantiated at the image root — no manual bootstrap"* (smoke check #1) | major | SHIP-DELTA |
| 2 | **F-CHM-217(a)** | `template_home_claude.md:267` | `…per [ADR-035](aDNA.aDNA/what/decisions/adr_035_…)` → `…per ADR-035` (de-link; the `aDNA.aDNA/`-prefixed path is broken in **every** context) | major | **SRC — ✅ APPLIED §8** |
| 3 | **F-CHM-217(b)** | 6 links: `skill_project_fork.md:65` · `skill_workspace_upgrade.md:115,133` · `skill_workspace_init.md:33` · `context_adna_core_entity_definitions.md:24,210` (→ adr_005/007/009/035) | resolve in-dev, **404 on ship** (only adr_001–003 ship) | major | **DECISION D-1** |
| 4 | **F-CHM-217(c)** | `.adna/what/docs/AGENTS.md:20` (`v2.1`) + dev `what/docs/AGENTS.md:20` (`v2.3`) | both → **`v2.5`** + refresh `updated:`/`last_edited_by` on the shipped index | paper-cut | SRC (dev) + SHIP-DELTA (diverged copy) |
| 5 | **F-CHM-217(d)** | `.adna/what/docs/agent_first_guide.md:18` (+ dev copy) | `[Quick Start](../../README.md#quick-start)` → `[Getting Started](../../README.md#getting-started)` (README heading is "Getting Started") | paper-cut | SRC + SHIP-DELTA |
| 6 | **F-CHM-217(e)** | `.adna/how/skills/skill_iii_setup.md:165,211,256,268,375` | dev-vault examples (`lattice-labs`, `LPWhitepaper`, KINN) → generic placeholders (e.g. `<consumer-vault>`, `<brand-voice pack>`) | paper-cut | SHIP-DELTA (`.adna/`-only file, no dev source) |
| 7 | **doc-currency** | `.adna/what/docs/aDNA_overview.md` (~47 KB, self-labels pre-v7.0; "22 templates / 15 examples") | RC-scale decision: **refresh** vs **trim** vs **re-stamp as archival**. Recommend **re-stamp archival** for v8.5 (cheapest, honest); full refresh = its own mission | low | DECISION (deferred; see §3 note) |
| 8 | **doc-currency** | "27 subtopics" narrated (dev `CLAUDE.md:53`, `AGENTS.md:35`, `MANIFEST.md:34,163`) | **VERIFY census first**, then update all 4 sites to the true count | paper-cut | SRC (verify-then-fix) |

## §3 — Decision D-1 (the ship-cut ADR links) — **operator resolves at fire**

The 6 links in row 3 point at ADRs **005 · 007 · 009 · 035**. They render correctly inside the dev graph
(the ADRs exist there) but 404 in the public image, which ships only ADRs 001–003. Two ways to fix:

- **Option A (recommended) — ship the 4 cited ADRs.** Add adr_005 (three-way vault boundary) · adr_007
  (outer-CLAUDE disposition) · adr_009 (naming convention) · adr_035 (inventory/identity base types) to
  `.adna/what/decisions/`. Keeps every link live in **both** dev and image, gives the newcomer the
  actual "why," and all four are foundational **standard-architecture** ADRs already cited on shipped
  surfaces (nothing sensitive). Cost: shipped ADR set 3→7; **must check those 4 ADRs for onward links to
  other unshipped ADRs** (cascade) and de-link/ship as needed.
- **Option B — de-link on ship.** A release-time transform strips the `[…]()` on shipped copies only,
  leaving the dev-graph links intact. No new public ADRs, but a new release mechanic and the newcomer
  loses the "why" citation.

> This **revises** the approved-plan default ("de-link, defer publishing ADRs"): recon showed de-linking
> in the dev graph would degrade its *correct* navigation, so a plain de-link is worse than it looked.
> A is cleaner **iff** the cascade check is clean. Operator picks at fire.

## §4 — `skill_template_release` parameters (ready to fire)

| Parameter | Value |
|---|---|
| `version` | **`v8.5`** (governance track 8.4→8.5; **standard stays v2.5** — these are currency/hygiene, no normative change) |
| `release_notes` | *(draft, operator-ratifiable)* "v8.5 — release-cut hygiene: correct the embedded README to the one-step install; sweep the release-cut leak (de-link/ship cited ADRs, strip a private dev-vault path, currency internal doc version indexes to v2.5, fix a dead anchor); doc-currency paper-cuts. No normative standard change (v2.5). v8.4 tag untouched." |
| `root_surfaces_changed` | **`false`** — F-CHM-216 fixes `.adna/README.md` (inside `.adna/`), not the image ROOT `README.md`/`CLAUDE.md`/`.gitignore`/`LICENSE`. The root README's one-step is already correct. |
| `dry_run` | `true` for the first pass (assemble + diff, confirm the delta table, then re-run live) |

## §5 — Files-touched checklist (expected mutations at release)

- `.adna/README.md` (rows 1, 1b) · `.adna/how/templates/template_home_claude.md` (row 2) ·
  `.adna/what/docs/AGENTS.md` (row 4) · `.adna/what/docs/agent_first_guide.md` (row 5) ·
  `.adna/how/skills/skill_iii_setup.md` (row 6) · `.adna/what/docs/aDNA_overview.md` (row 7, if decided)
- **D-1 Option A** adds: `.adna/what/decisions/adr_005…` · `adr_007…` · `adr_009…` · `adr_035…`
  (+ their de-linked/cascade-fixed skill/context references stay as-is once targets ship)
- Version bump sites (two-track): image `CLAUDE.md` frontmatter governance version → 8.5; CHANGELOG entry.
- Dev-graph source edits (ship via assembly): `how/templates/template_home_claude.md` (✅ §8),
  `what/docs/AGENTS.md` (v2.3→v2.5), `what/docs/agent_first_guide.md` (anchor), + the "27 subtopics"
  sites once the census is verified.

## §6 — Smoke checklist (release step (f) + this-patch-specific rows)

Run against a throwaway clone of the pushed v8.5 tag (the 7 standard rows from `skill_template_release`
§(f)) **plus**:

| # | Check | Pass condition |
|---|-------|----------------|
| H1 | F-CHM-216 cleared | `.adna/README.md` Getting Started shows **only** the one-step `clone … ~/aDNA && cd ~/aDNA && claude`; no `cp template_workspace_claude.md` anywhere |
| H2 | Private path gone | `grep -rn '](.*aDNA\.aDNA/' .adna/` → **zero** clickable `aDNA.aDNA/` links |
| H3 | ADR links resolve (D-1=A) | every `](…/decisions/adr_0…)` in shipped skills/context resolves to a file that ships (or is de-linked, D-1=B) |
| H4 | Version index current | `.adna/what/docs/AGENTS.md` says the spec is **v2.5**; no `v2.1`/`v2.3` version labels survive in shipped internal indexes |
| H5 | Anchor live | `.adna/what/docs/agent_first_guide.md` links `#getting-started` (matches the README heading) |
| H6 | Newcomer re-walk | re-run the M4.1 six-leg campaign-blind walk (per `ship_verify_walk_v8_4.md`) — F-CHM-216/217 both **cleared** |

## §7 — Rollback

The release is a single commit + annotated tag on `aDNA-Network/aDNA`. A red smoke row **reverts the
release decision to the operator** (never auto-remediate a pushed tag — a fix is a new gate, per
`skill_template_release` §(f)). Pre-push (`dry_run` / before step (d)), rollback = discard the throwaway
clone; nothing is staged in this vault beyond the §8 source de-link (itself independently correct).

## §8 — Applied at source now (committed local, no push)

- `how/templates/template_home_claude.md:267` — **de-linked** the broken `aDNA.aDNA/`-prefixed ADR-035
  link → plain "per ADR-035". Genuine dev-graph source defect (broken in every context, incl. inside a
  forked `Home.aDNA/`); fixing at source is correct independent of the release. It also becomes row 2's
  ship-side delta once the assembly carries it.

## §9 — Hold status

**PREP COMPLETE — HELD for the operator to fire `skill_template_release` (version v8.5).** No push, no
release. Resolve **D-1** at fire. The package has no decay — every delta is pinned to a specific
surface + line, re-verifiable with the §6 greps. Owner: Rosetta (v8.5 queue, standing).
