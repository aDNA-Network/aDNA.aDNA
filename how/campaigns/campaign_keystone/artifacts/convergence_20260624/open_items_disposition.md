---
type: artifact
artifact_class: open_items_disposition
created: 2026-06-24
operation: "Operation Keystone — Convergence, Close-out & Cohort Genesis"
campaign_id: campaign_keystone
status: complete
posture: staged_no_execution
tags: [keystone, convergence, open_items, disposition, coordination]
---

# Open-Items Disposition (Phase 2)

Every open item the vault flags, verified against disk, disposed by the lowest sufficient instrument. **No architecture freelanced, no gate lifted, no ADR authored.** All cross-graph touches are staged coord memos in the target's `who/coordination/`.

## Summary

| # | Item | State on disk | Action taken | Owner | Gate |
|---|------|---------------|--------------|-------|------|
| 3.1 | SiteForge↔Astro naming | rename executed (pt07 + GitHub Wave-2 + 10-vault name-sweep); dirs still `siteforge/`; pt19 reconciliation queued | **Decision memo staged** → `Home.aDNA/who/coordination/` | Hestia | operator decision (the one live decision) |
| 3.2 | §C wrapper-retrofit wave | Lab M-L13.6 **CLOSED/DEPLOYED**; Lab has 0 of 4 wrappers | **Lab retrofit memo staged** → Galileo; other six prioritized below | Galileo + per-vault personas | Lab gate lifted; others per-gate |
| 3.3 | AWSBootstrap↔Lighthouse↔cohort ADR | **no ADR exists** (verified both trees) | **Scope memo staged** → `AWSBootstrap.aDNA/who/coordination/` | Hestia + Lighthouse-P0 + Rosetta | operator greenlight to author |
| 3.4 | Astro↔TS `astro_web` boundary | TS **P0+P1 ratified**, 34 ctx md; `astro_web/` exists | **ESCALATED** — boundary memo staged → Milner | Milner + Astro + Rosetta | settle before TS P2/M2 |

## 3.1 — Naming (the one live operator decision)

Established from `Home.aDNA/.../disposition_ledger_v2.md`: the rename `SiteForge.aDNA → Astro.aDNA` is **executed and far advanced** — pt07 FS rename (1462 hits, collision-guarded), GitHub native cross-org transfer to `aDNA-Network/Astro.aDNA` (kept **private**, Wave-2), consumer **name-sweep to ref-0 across 10 vaults**. Disk: `Astro.aDNA` is the real dir; `SiteForge.aDNA` is the symlink. What remains is the **carved** wrapper-DIR rename (`siteforge/`→`astro/`, ~79 files, deferred — dirs on disk are still `siteforge/`) + pt19 derived-projection regen + the deep-narration ("SiteForge persona") reconciliation. **pt19 ≠ a reversal** — it is derived-projection + registry tidy. **Disposition: escalate, do not decide.** Full two-option blast radius → `coord_2026_06_24_siteforge_astro_naming_decision.md` (Home.aDNA). **No rename executed.**

## 3.2 — §C wrapper-retrofit wave

**Lab first (gate lifted).** M-L13.6 is CLOSED/DEPLOYED (2026-06-22); Lab carries none of `git/`,`feedback/`,`iii/` (has credential routing). Staged as a Galileo mission → `Lab.aDNA/who/coordination/coord_2026_06_24_keystone_lab_four_wrapper_retrofit.md`. Lab is the reference implementation; prove the pattern there before the rest.

**Other six — prioritized plan (staged refinement of `idea_keystone_existing_graph_retrofit`; no inline retrofit):**

| Order | Vault | Persona | Gate status | Retrofit | Rationale for position |
|:----:|-------|---------|-------------|----------|------------------------|
| 1 | **Lab** | Galileo | **CLEAR (gate lifted)** | +`git/`+`feedback/`+`iii/` | reference impl; proves the pattern |
| 2 | **Terminal** | Berthier | clear (no live gate) | +`feedback/`+`git/`+credential | Berthier-owned; low-friction second proof |
| 3 | **Harness** | Panacea/Stanley | clear | +`feedback/`(clinical AAR fit)+`git/`+credential | real inference stack; high value |
| 4 | **ComfyUI** | Vulcan | **coupled to M03 re-genesis** | inject 4 wrappers *during* M03 | cheaper before it hardens; do it in-flight |
| 5 | **Obsidian** | TBD-at-P0 | **gated on its P0** (persona unratified) | +4 wrappers | needs identity first |
| 6 | **Warp** | Escoffier | **live genesis P3b — sensitive** | +`feedback/`+`iii/`+credential (`git/` N/A) | operator-cleared staged memo only; do not write at the live gate |
| — | **Spacemacs** | Daedalus | **DEFER** (v1.0.0 complete) | light-touch only if it re-opens | not active; no retrofit now |

Each adoption is a staged coord memo to the target persona, structured as a mission in that vault's own campaign (Standing Rule 10) — **never a batch-write across vaults.** Only the Lab memo is staged this session (its gate is the only one lifted); the rest are sequenced here for operator greenlight.

## 3.3 — AWSBootstrap reconciliation ADR

No reconciliation ADR has landed (verified absent both trees). Decision #5 OPEN. Proposed clean three-layer split (cohort=bricks / Lighthouse=composition / AWSBootstrap=substrate-wake-up) staged as a scope memo → `AWSBootstrap.aDNA/who/coordination/coord_2026_06_24_keystone_awsbootstrap_lighthouse_cohort_adr_scope.md`. **ADR not authored** (gated, separate effort). Non-blocking for the current clean wave.

## 3.4 — Astro↔TypeScript boundary (escalated)

§0 expected a forward gate; disk shows population already begun (TS P0+P1 ratified, 34 ctx md, `astro_web/` live), so this flipped to a **live duplication risk**. The PT ledger had independently flagged the name-collision at pt07. Proposed boundary rule (Astro owns Astro-specific build context; TS owns language/cross-framework; the seam is `federation_ref`, not copy — ADR-039) staged → `TypeScript.aDNA/who/coordination/coord_2026_06_24_keystone_astro_ts_web_boundary.md`. **Forcing function:** settle before TS P2/M2 populates `ts_web_frameworks`. **No edit made to either graph's context.**
