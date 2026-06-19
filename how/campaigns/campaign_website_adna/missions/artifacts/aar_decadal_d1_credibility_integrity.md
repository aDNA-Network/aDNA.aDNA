---
type: artifact
artifact_class: decadal_aar
campaign_id: campaign_website_adna
mission_id: mission_wadna_p3_iterate
decade: D1
title: "Decadal AAR — D1 Credibility-Integrity (the 4 Criticals + SP-1 canonical source + gates G4–G7)"
created: 2026-06-19
updated: 2026-06-19
status: complete
verdict: GO (pending operator decade-gate)
last_edited_by: agent_rosetta
tags: [artifact, decadal_aar, phase3, decade_1, credibility_integrity, axis_d_e_j, rlp]
---

# Decadal AAR — D1 Credibility-Integrity

> First decade of WEBSITE.aDNA P3 (`mission_wadna_p3_iterate`), opened on operator **Decision 4** (2026-06-19). Credibility-integrity is the program quality bar ([[campaign_operation_adna]] §5; FINDINGS systemic pattern #1: *the gap to frontier-grade is credibility, not aesthetics*). **Commit-only; no deploy.** Spec set: [[IMPROVEMENT-SPECS.aDNA]] · gates [[TOOLING-PROMOTION.aDNA]] · order [[DECADAL-PLAN.aDNA]].

## 1. Verdict — **GO** (pending operator decade-gate)

D1's decade-exit criteria are met: **0 open Criticals**, **all proof-links resolve 200 unauthenticated**, the **canonical source is single-sourced**, and the independent persona panel scores the credibility axes **E·J·D ≥ 4** for the four units. One Medium honesty finding the panel surfaced was fixed in-decade. Holds at the **decade-AAR human gate** — operator GO required before D2 opens.

## 2. Scope — units & changes

**Units:** `/` · `/learn/what-is-adna` · sitewide `<head>` · `/network`.
**Systemic root (SP-1):** new `site/src/data/canonical.ts` — single source for `REPO_HTTPS` (re-exported from `install_truth.json.canonical_repo_https`) + `PUBLISHER` (`"aDNA Network"`, Decision 4). Imported by `seo.ts`, `Header.astro`, `Footer.astro`, `what-is-adna.astro`. The repo URL and publisher entity can no longer be inlined as literals.

## 3. The 4 Criticals — dispositions

| # | Finding | Disposition (shipped) | Verification |
|---|---------|----------------------|--------------|
| **C-1** | Dead `aDNA-Network/aDNA.aDNA` proof-links (404) | **Repoint-to-public-image** (Decision 4). 7 sitewide occurrences → resolving paths in the public `aDNA-Network/aDNA` image (root `CLAUDE.md` + the `.adna/` standard tree/skills/template); prose reconciled so the "real, inspectable" claim stays literally true. | All 5 proof targets **live-verified 200** unauth; old dead repo confirmed 404; built from `REPO_HTTPS` (G5/G6). |
| **C-2** | Fabricated homepage marquee code (`climate-pipeline`, etc.) | Replaced the 3 `home.ts` demos with **real vault content**: the real `aDNA.aDNA/` triad tree, a real `CLAUDE.md` head (verbatim Rosetta identity + real Standing Orders 1–2), and the **live** `mission_wadna_p3_iterate` (this very mission, per-decade status). | Panel cross-checked every demo against the real files on disk; 0 invented tokens remain in `dist/`. |
| **C-3** | JSON-LD publisher drift → `Lattice Protocol` / `github.com/LatticeProtocol` | 3 `seo.ts` builders + footer copyright (M-9) + `branding.json` github → canonical (`PUBLISHER` + `REPO_HTTPS`). | `dist/`: **0** `github.com/LatticeProtocol`; publisher `"aDNA Network"` in 102 pages' JSON-LD (G4/G5). Legitimate "Lattice Protocol" *protocol-substrate* prose preserved (canonical fact #1). |
| **C-4** | NetworkDiagram false "data-driven" claim (hardcoded labels) | `nodes[]` + `<desc>` now resolved from `vaults.json` by `vault_slug`; geometry/motion/no-JS render preserved; **no hand-edited labels** (names = verify-after-pt19). | Standard Archivist proved data-driven by the slug≠label divergence in `dist/` (`Harness.aDNA` → display "RareHarness"); removing a vault drops its slot. |

**Folded mediums:** M-2 (home `WebSite` JSON-LD single-sourced via SP-1), M-9 (footer copyright → `PUBLISHER`).

## 4. Gates wired (regression-proofing — gate-with-fix law)

| Gate (TOOLING ID) | File | Guards |
|---|---|---|
| **G5** single-source lint | `tests/gates/gate-14-single-source.spec.ts` | C-1/C-3 — static `dist/` scan fails on `aDNA-Network/aDNA.aDNA`, `github.com/LatticeProtocol`, `LatticeProtocol/Agentic-DNA`; asserts canonical publisher present. |
| **G4** JSON-LD validity + canonical | `tests/gates/gate-15-credibility.spec.ts` | C-3 — JSON-LD parses + publisher canonical on 5 archetypes. |
| **G6** link-graph / canonical | `tests/gates/gate-15-credibility.spec.ts` | C-1 — credibility-surface GitHub links use the canonical base, no dead patterns. |
| **G7** public-meta sanitizer | `tests/gates/gate-16-public-meta.spec.ts` | no internal codenames (`campaign_`/`mission_`/`pt19`/`Hearthstone`/`decadal`/`Decision N`/`SP-N`/`wadna`) in title/meta/og/JSON-LD across 9 pages. |

Each gate carries a dated allowlist + escape-hatch note. **Gate baseline 140 → 159 (all green).**

## 5. Scorecard (independent panel, rotated — designer did not self-verify)

| Axis | Lead persona | Score | Target | Status |
|------|--------------|-------|--------|--------|
| **A** First-Impression Trust | Skeptical Frontier Engineer | 4 | ≥4 | ✓ |
| **D** Demonstration Density | Skeptical Frontier Engineer | 5 | ≥4 | ✓ |
| **E** Sci/Inst. Credibility | Funder / Program Officer | 4 | ≥4 | ✓ |
| **J** Standard Fidelity & Currency | Standard Archivist | 5 | ≥4 | ✓ |

The D1 decade target is **E·J·D ≥ 4** on the four units (per [[DECADAL-PLAN.aDNA]] decade map). Met. (Axes F/G/H and the full per-unit done-definition are the P3→P4 phase exit, reached after all decades — not this decade's bar.)

## 6. RLP — independent 3-persona panel

Run as 3 independent subagents (separate context; adversarial "find the tell" stance) per the campaign rotation rule. Raw verdicts:

- **Skeptical Frontier Engineer — approve (A4/D5).** "Tried to break the illusion; could not." Verified all 5 proof-links 200; 0 invented tokens in `dist/`; demos match real files. Notably credited the team for holding entity-count at the *released* 14/v2.2 rather than the ratified-but-unshipped 16/v2.3 — "a team that resists inflating its own spec version won't quietly mislead you." Trust verdict: **yes.**
- **Funder / Program Officer — approve-with-changes (E4).** Publisher consistency, MIT honesty, public/private boundary all hold under live checking. Raised the one **Medium**: the `/learn` CLAUDE.md excerpt (private-vault Rosetta) was captioned as browsable-in-the-public-image, but the linked public file differs → "bait-and-switch in a verify-it section." **Fixed in-decade** (caption reframed to "this site's own vault CLAUDE.md"; browsable verification pointed at the public image's CLAUDE.md/skills proof-links).
- **Standard Archivist — approve (J5).** No residual findings. Proved C-4 genuinely data-driven (slug≠display_name divergence). Confirmed site shows released v2.2/14; no 16/v2.3 leak; the only `v2.3` token is a generic versioning *example* on the governance page (correct).

## 7. Metrics

- Build: `npx astro build` → **163 pages, clean** (no `vaults.json`/`install_truth.json` regen — Honor pt19 held).
- Gates: **159/159** (`test:gates`), incl. axe both-modes + responsive + the 4 new credibility gates.
- Live link-check: 5/5 proof targets **200** unauthenticated; control (dead repo) 404.
- Commits (commit-only, no deploy): `045d661` (open P3) · `21789cb` (SP-1 + 4 Criticals) · `6009003` (gates) · `4704af3` (AAR fix).

## 8. Decade-exit criteria ([[DECADAL-PLAN.aDNA]] D1 row)

- [x] 0 open Criticals (C-1–C-4 dispositioned + verified).
- [x] All proof-links 200 unauthenticated.
- [x] Canonical source single-sourced (SP-1; G5 green).
- [x] Ranker ≥ target on E·J·D for the 4 units (E4/J5/D5).
- [ ] **Operator decade-gate GO** → open D2 (nav-serialization). ⏳ pending.

## 9. 5-line AAR

- **Worked:** live-verifying every proof target before declaring C-1 done caught that `install_truth.json.verified_paths` is wrong (skills/templates live under `.adna/`, not root) — 3 of 5 first-draft links were 404; the "no link ships unless 200" rule + an independent panel turned a plausible-looking fix into a correct one.
- **Didn't:** the first C-1 link set trusted `verified_paths` instead of probing the live repo; and the homepage/`/learn` demos shipped as *faithful-value* paraphrases whose framing slightly overclaimed (the panel's Medium).
- **Finding:** credibility integrity is recursive — fixing the dead *links* surfaced a subtler same-class issue in the *prose* (showing private-vault content as publicly browsable). The honest fix is to scope every "verify it yourself" claim to what actually resolves.
- **Change:** for credibility surfaces, **probe the live target, never trust a generated `verified_paths` manifest**; and pair every shown artifact with an accurate browsability claim (shown-here vs. browse-there).
- **Follow-up:** (1) install-truth generator bug — `verified_paths` records root paths for files that live under `.adna/` (benign for the site; flag to the install-truth owner). (2) Public-image `LICENSE` copyright holder is "Lat Labs" while the footer reads "aDNA Network" — cross-vault (Berthier/aDNALabs), not a site edit. (3) C-1 **stage-2** at the keystone: upgrade proofs to Hearthstone's published base. (4) C-4 **verify-after-pt19**: confirm diagram labels = keeper-set names once pt19 lands.

## 10. Open human gate

**Operator GO required before D2 opens** (DECADAL-PLAN; campaign Standing Order #8 — phase/decade gates are human gates). D1 is committed-only; the joined deploy waits for the program keystone (DP2). On GO, D2 = nav-serialization / docs structure (SP-2 → H-1/H-2; the single highest-leverage structural fix), gate G2 → blocking.
