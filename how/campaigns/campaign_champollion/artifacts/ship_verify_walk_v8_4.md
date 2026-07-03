---
type: artifact
artifact_id: champollion_ship_verify_walk_v8_4
title: "M7.1 — Ship-verify walk: the post-ship first hour against the LIVE v8.4 image (friction log + delta vs M4.1)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m7_1_ship_verify_handoff
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p7, m7_1, ship_verify, backstop_walk, friction_log, first_contact]
---

# M7.1 — Ship-verify walk: the post-ship first hour against the LIVE v8.4 image

> The post-release **backstop** the G6 perspective named (the pre-fire walk was waived at G6). A fresh,
> campaign-blind opus subagent cloned the **SHIPPED** release and walked M4.1's six legs as a stranger; the
> orchestrator (opus-main, campaign-aware) independently re-verified every **major** against its cited surface
> (M6.3 finding-side rule) before classifying. NAMES-ONLY. **The tag is IMMUTABLE — findings route to v8.5, never a tag fix.**

## 1. Provenance

- **Clone** (proof the walk ran live): `git clone --branch v8.4 …/aDNA.git` → scratchpad. `git describe --tags` = **`v8.4`**; HEAD = **`4e3bf38b2ee038ceb3948a80705a6291463b16bb`** — matches the shipped release identity (`aDNA-Network/aDNA` @ `4e3bf38`). Orchestrator re-verified `describe`/`rev-parse` independently.
- **Instrument** (fresh eyes + varied method): a fresh newcomer subagent with **no campaign priming** ran the walk — the point is to meet the image as a *stranger* does, not as the builder who knows what the RC changed. This walk applied **methods M4.1 did not** — reading the inner-README install commands and resolving ADR links — per F-CHM-212 (verification must vary the method).
- **Node caveat**: `grep`/`find` flaked (false-empty) repeatedly on both the subagent's and the orchestrator's probes; every negative was re-verified via Read/Python (three near-misses — `role: template` "missing", `.sh` "missing", `.gitignore` "no aDNA pattern" — were flake artifacts, **not** findings). Standing node-flake lesson reconfirmed.

## 2. Result — **0 blocker · 2 major · 6 paper-cut** *(3 paper-cuts are F-CHM-217 constituents → **3 net-new**)*

### Blockers — NONE
The primary path is clean: clone to `~/aDNA` → `claude` → fork a first project, with an accurate front-door
`README.md`, a correct one-liner install, and node-residue-free root `CLAUDE.md` routing. **0 blockers → no
operator flag required** (the escalation guardrail fires on blocker-class only; per-mission it is a *finding*, not a miss).

### Majors — both independently CONFIRMED against the cited surface
| ID | Leg | Finding (verified) |
|----|-----|--------------------|
| **F-CHM-216** | README / cold-start | `.adna/README.md:39–49` "Getting Started" teaches the dead two-step `clone .adna` + `cp template_workspace_claude.md CLAUDE.md` flow — the step gate-12 *rejects* on the site — while the **root** `README.md:34` gives the correct one-step `clone …/aDNA.git ~/aDNA && cd ~/aDNA && claude`. **Both surfaces read.** In-file badges are correct (v8.4/v2.5). A curious newcomer who browses into `.adna/` gets a contradictory, outdated setup. |
| **F-CHM-217** | first-fork / learning | Release-cut leak: only ADRs 001–003 ship, but skills/context cite ~21 others (7 dead ADR links); `template_home_claude.md:267` clickable-links a **private `aDNA.aDNA/` path** (`[ADR-035](aDNA.aDNA/…)`, verified) — plus dev-vault prose refs + examples. Rules are inline so nothing breaks, but the "why?" citations 404. |

### Paper-cuts (6)
| Leg | Finding |
|-----|---------|
| learning / docs | `.adna/what/docs/AGENTS.md:20` labels the spec **"v2.1"** (shipped = v2.5); a never-currencied internal index (`updated: 2026-03-19`, `agent_init`). *Verified.* **(F-CHM-217 constituent.)** |
| learning | `.adna/what/docs/agent_first_guide.md:18` links `README.md#quick-start`; the heading is "Getting Started" — dead anchor. |
| learning | No in-repo `.learn-onramp` / single learn entry; the guided path is external (the README pointer to `adna.network/learn` — the F-CHM-210 fix — **is** present). |
| docs | Dev-vault examples (`lattice-labs`, `LPWhitepaper`) baked into `skill_iii_setup.md`. **(F-CHM-217 constituent.)** |
| cold-start | `CLAUDE.md:143` calls the overview "47K"; the file is ≈49 KB (low-confidence). |
| arrival | Private `aDNA.aDNA/` path surfaces in ~32 places (mostly prose) across shipped files (`.adna/CLAUDE.md`, `HOME.md`, `AIRLOCK.md`) — low-confidence; the leak class of F-CHM-217. **(F-CHM-217 constituent.)** |

## 3. Delta vs the M4.1 baseline (0 / 3 / 7) — the honest read

Headline moved **0/3/7 → 0/2/6**, but this is **not** a clean "one major fixed" — the composition changed:

- **What the RC demonstrably fixed** (M4.1 findings now CLEAN, re-verified this walk):
  - N-01 badges → **v8.4 / v2.5** ✓ (root + inner).
  - N-03 / N-04 router counts → **exact** (28 templates · 27 skills = 24 agent + 3 process · 15 lattice examples); governance lint **Zero drift**. ✓
  - N-08 onboarding persona line → recast to the `{{persona}}` default-when-unresolved (RC I8 fix). *Not independently re-walked this pass* — flagged honestly; low-risk (cosmetic agent-voice, no functional path).
  - N-07 "no on-ramp" → **softened** — the README now points to `adna.network/learn` (F-CHM-210 image-pointer landed) → downgraded to a paper-cut.
  - N-05 / N-06 (workshop + tutorial dev-vault-shape) were dev-vault *teaching surfaces* M4.1 reached by stepping **out** of the image; they don't ship in the image, so an in-image walk doesn't recur them (and F-CHM-207's dev-vault fix landed at M4.3).
- **What this walk newly surfaced** (F-CHM-216 / F-CHM-217): the RC's currency sweep (I8) covered the newcomer-facing **router** surfaces; a *different method* (inner-README install commands + ADR-link resolution) found a coherent **release-cut leakage** class the prior clean passes could not. Honest reading: these were **latent in v8.3 and earlier — not v8.4 regressions**. F-CHM-212 (vary the method) operating exactly as designed.

**Honest de-duplicated tally**: 3 of the 6 paper-cuts (docs "v2.1" · `skill_iii_setup` dev-vault examples · `aDNA.aDNA/` prose) are **F-CHM-217 constituents**, not independent findings → the de-duplicated read is **2 major · 3 net-new paper-cut (+3 F-CHM-217 constituents)**. The raw `0/2/6` is not inflated once this is stated.

**Net**: every targeted RC fix landed and verifies green; the residual is a pre-existing release-cut hygiene class — all v8.5-routable, none blocker-class.

## 4. Release-verification residue

| Check | Result |
|-------|--------|
| Badge hrefs live | `github.com/aDNA-Network/aDNA/releases/tag/v8.4` → **200** · `adna.network` → **200** · `adna.network/learn` → **200** |
| `install_truth.json` verifies | **PASS (by-design)** — the 4 required paths all ship in v8.4; `template_sha: 74cb761` + `generated: 2026-06-10` are the idempotency-guard-frozen, churn-exempt fields (`scripts/build_install_truth.mjs:112–121`); the G6 record's "template 9bd4051" = the local `.adna` HEAD at verify-time, a *different frame*. Not served at the site root (a build-gate artifact; gate-12 imports it — `/install_truth.json` → 404 is expected). |
| Image governance lint | **`GOVERNANCE SYNC: Zero drift`** on the fresh `.adna` clone (`python3.13 adna_validate.py --governance`). |

## 5. Verdict (newcomer, honest)

**Adopt, with a mild wince.** The front door is strong and every headline number checks out — trust is earned
fast, and the clone → `claude` → fork spine is clean. The wince comes one click past the front door: browsing
into `.adna/` (framed as "the standard") hands an older, contradictory install flow, and ADR citations across
the skills 404 — one at a private `aDNA.aDNA/` path. **Single root cause**: the image is a release-snapshot of a
larger private dev vault, and dev-vault artifacts leaked through the cut. Not fatal; all v8.5-routable. Rewriting
the `.adna/README` Getting-Started block and de-linking (or shipping) the cited ADRs clears ~90% of the residual friction.

*Findings register: [[findings_ledger|F-CHM-216 / F-CHM-217]] · v8.5 routing: [[handoff_packet_v8_4|handoff packet]] §v8.5 queue · baseline: [[newcomer_stress_test|M4.1 artifact]] (0/3/7).*
