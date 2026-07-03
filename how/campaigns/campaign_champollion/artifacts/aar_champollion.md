---
type: artifact
artifact_id: champollion_campaign_aar
title: "Operation Champollion — campaign AAR (P0–P7, the pre-launch base-layer review/improve)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m7_2_campaign_close_retro
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, aar, campaign_close, retrospective]
---

# Operation Champollion — Campaign AAR

**Dates**: 2026-07-02 (chartered, P0) → 2026-07-03 (P7 close / G7 render). **Owner**: Rosetta (aDNA.aDNA).
**Sibling**: Operation Carnot (LatticeProtocol.aDNA). **Parent program**: Operation aDNA (feeds DP4).
**Codename**: Champollion — the man who made the Rosetta Stone legible. *North star: "the standard must deserve the copying."*

## 1. What it delivered

The pre-launch comprehensive review/improve of the aDNA **base layer** — standard, dev graph, public image, site, docs, backlog, governance — closed in **8 phases / 24 missions across ~2 days**, and shipped the base layer's terminal deliverable:

- **Standard v2.4 → v2.5 cut** (G2 / ADR-046): new §7.7 Decision-Record Ratification Discipline · §7.2 per-class frontmatter profile · §5.5 conformance-walk scope · §5.3 `federation/` wrapper row · §15.4 version-cut checklist.
- **Public image v8.3 → v8.4 SHIPPED** (G6, operator-fired via `skill_template_release`): `aDNA-Network/aDNA` @ `4e3bf38`, annotated tag `v8.4`, smoke 7/7; local `.adna` synced `9bd4051`.
- **Governance integrity**: 91-item backlog dispositioned to zero un-adjudicated (M1.1); `adr_index` generated (40→41 ADRs, 0 left `proposed`); ratification discipline live (§7.7 + `template_ratification_record`); STATE dieted 554 KB → 47 KB (M1.5).
- **Pattern library**: 14 → 22 patterns (8 harvested P3; 3 graduated `active` incl. `pattern_model_tiered_campaign_execution`); exemplar self-score **46/50 honest** (48/50 under the skills-exempt policy).
- **First-contact**: newcomer first-hour **green** (M4.1 0 blockers; re-confirmed post-ship M7.1 0 blockers); site learn on-ramp + 13 teaching surfaces 0-failing; README first-contact pattern.
- **LP seam**: bilateral conformance (LP vault = genuine Standard-tier; zero spec contradictions; codepin `8cb6e1e`); joint base-layer memo (pending-with-owner countersign); Exchange/Lighthouse adoption story teachable.
- **DP4 dossier** delivered (M6.2; Track D = READY terminal; operator fires).

## 2. AAR (Worked / Didn't / Finding / Change / Follow-up)

- **Worked** — **Model-tiered Mode-B execution**: 24/24 missions ran at their planned tier, **0 tier-changing escalations** all campaign; fable orchestrated, opus built, sonnet swept the two mechanical rows. Gate discipline held: **G0–G6 every one ratified as-recommended** by the operator, no auto-advance. **Verify-don't-inherit** (F-CHM-001, the standing lesson) caught real decay every phase — including the walk's *own* session-file frontmatter slip at M7.1. **Adversarial + fresh-eyes instruments earned their keep**: M6.3 found-and-fixed 3 pre-ship; M7.1's campaign-blind walk surfaced 2 real majors the builder-mind would miss.
- **Didn't** — **Sizing overran the band**: ~957 vs the 700–850 planned kT (~+13% over ceiling), concentrated in an **estimator class** (per-unit costs hidden in mission-shaped estimates: cross-graph reads P5 +52%, N-row batches M6.1 +63%, multi-dispatch verification M7.1 +50%) — not a routing error (routing was 24/24 correct). **Fable rate-limit** hit at P7 → M7.1's review + this closeout ran as operator-authorized opus substitutes.
- **Finding** — The base layer was **healthier than feared but leakier than it looked**: the currency defects were real and fixable (all swept), but the deepest finding is structural — the public image is a **release-snapshot of a larger private dev vault**, and dev-vault artifacts (an old inner-README install flow, unshipped-ADR cross-refs, a private `aDNA.aDNA/` path) **leak through the release cut** (F-CHM-216/217, post-ship). Latent, pre-existing, surfaced only by *varying the method* (F-CHM-212).
- **Change** — Doctrine hardened and folded (not just narrated): the **Mode-B operational discipline** (7 hazards + review-bookend checklist → `pattern_model_tiered_campaign_execution` §2.6); the **estimator-class pricing** rule; **finding-side verification**; **pre-pinning** (adopted standing, G5-D3). The standard itself gained the ratification discipline it now practices on its own ADRs.
- **Follow-up** — **v8.5 queue** (enumerated with triggers in the M7.1 handoff packet: 10 RC DEFERs + P-2/P-5/P-8 + state-prompt-shed + aDNA_overview + validator-docstring + F-CHM-216/217) · **DP4** (operator fires) · **post-launch fleet re-seed** on the v2.5/v8.4 baseline (G0-D5, owner Rosetta+Hestia, trigger = this close) · **M7.2 ran opus-substitute** (fable-limit — future closeouts prefer fable when available).

## 3. Definition-of-Done audit (directive §8)

| # | DoD item | Status |
|---|----------|--------|
| 1 | STR closed · v3-EC absorbed · DP4 dossier delivered | ✅ (DP4 firing = operator's, by design) |
| 2 | Backlog zero un-dispositioned · retro adjudicated · ratification discipline · acks landed/pending-with-owner | ✅ |
| 3 | Version cut ratified · RC shipped only via operator-gated `skill_template_release` · `.adna/` sync verified · validator full pass zero drift | ✅ |
| 4 | Site UX pass · newcomer first-hour green · site backlog dispositioned · live checks green | ✅ (green pre- and post-ship) |
| 5 | Joint memo countersigned-or-pending-with-owner · Exchange story teachable · zero public-boundary violations | ✅ (countersign pending-with-owner, legit) |
| 6 | Pattern library published · self-score exemplary · "build like the base graphs" live | ✅ |
| 7 | Token rotated (operator-confirmed) · leak-class mitigation · secret scan clean | ✅ (`.gitleaks.toml` + pre-push hook; full-history 9/9 FP; SS token = test account, operator-de-prioritized) |
| 8 | STATE dieted + current · CHANGELOG current · AARs complete · close with AAR + splash + handoff packet | ✅ **at this mission** (M7.2 completes the close set) |

**DoD: MET.** The single operator-reserved residual is DP4 firing (always the operator's).

## 4. Metrics

- **Gates**: G0–G6 all ratified as-recommended (0 rejections, 0 auto-advances). G7 = this render.
- **Telemetry**: ~957 / ~897 kT ≈ **+7%** (24/24 at-tier, 0 escalations); full corpus + estimator-class analysis: [[telemetry_corpus_champollion_export]].
- **Findings**: F-CHM-001…217 (all dispositioned; 216/217 → v8.5, none blocker-class).
- **Orchestration retro**: [[ops_retro_champollion]] → folded to `pattern_model_tiered_campaign_execution` §2.6.

## 5. The self-referential proof (Rosetta's law)

Champollion practiced what it hardened: it *cut* the ratification discipline into the standard, then *applied* it to its own ADR-046; it *harvested* the tiering pattern, then *ran* on it; it *diet*ed its own STATE while teaching the heavy-file convention. The base graph now exemplifies what it exports — the answer to *"build like the base graphs"* is live in the tree. **"The standard must deserve the copying"** — audited, and it does, with an honest v8.5 list of where it still leaks.
