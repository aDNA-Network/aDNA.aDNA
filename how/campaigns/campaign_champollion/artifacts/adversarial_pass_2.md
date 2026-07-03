---
type: artifact
artifact_id: adversarial_pass_2
campaign_id: campaign_champollion
mission_id: mission_champollion_m6_3_adversarial_pass_2
title: "Adversarial pass 2 + security re-verify — three lenses vs the v8.4 RC (fable at-tier)"
status: active
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [artifact, champollion, m6_3, adversarial, security, gitleaks, rc_v8_4]
---

# Adversarial pass 2 — the pre-release skeptics vs the v8.4 RC

> Fable-led at-tier (no builder). Targets: the held RC (`release_candidate_v8_4.patch` + the assembled clone) + the P4/P5 public-facing surfaces. Verification-independence discipline (F-CHM-212) self-applied — every lens used a different method than the artifact it checked (§4). **Outcome: 3 findings FIXED via a recorded M6.1 curation amendment (the RC was re-assembled + re-verified), 1 candidate finding DISSOLVED by semantic census, security 9/9 triaged false-positive. Nothing release-blocking.**

## §1 — Newcomer lens (method: route-walk of the assembled clone vs the M4.1 baseline)

Baseline: M4.1's first-hour walk (`newcomer_stress_test.md`) — 6 legs, **0 blockers · 3 majors · 7 paper-cuts**. Delta after the RC:

| Probe | Result |
|-------|--------|
| Root `README.md` (Leg 0/1 arrival surface) | **F1 — FOUND + FIXED.** I8/I9's fixes had landed on the INNER `.adna/README.md` only; the root README (N-01's cited surface, `image:README.md:7` — the GitHub landing page) was **not in the patch**: badges still `v7.2/v2.2`, no learn-pointer (N-07's primary surface). → **M6.1 amendment** (§6): root badges → v8.4/v2.5 + one learning-path line (`adna.network/learn` verified 200). The inner-README fixes stand (its badges were independently stale — not wasted work). |
| Inner `.adna/README.md` | Badges v8.4/v2.5 ✅ · 9-anchor ToC ✅ · embed-note intact ✅ · **F2 — FOUND + FIXED**: the Docs badge on the RC-edited line pointed at the pre-cutover `adna-docs.vercel.app`; → amendment: `adna.network` (matches root). |
| Root router `CLAUDE.md` | Counts 28 templates / 27 skills (24+3) narrated = censused ✅ · Standing Rules 5–7 render generic (0 `Rosetta`/`aDNA.aDNA` leakage; Berthier ×4 = the router's documented default-persona posture) ✅. |
| `skill_onboarding.md` (N-08) | Recast correct: "default-when-unresolved is **Berthier** (`{{persona}}` …)" ✅. |
| Stale-org URL sweep (F-CHM-207 class, whole clone) | Live-routing hits: **1** — **F3 — FOUND + FIXED**: the NEW I18 file `skill_lattice_home_install.md:26` carried `LatticeProtocol/Agentic-DNA` (+ an archived-vault example `LatticeAgent.aDNA`) — an RC-introduced regression of the v8.3 currency-sweep class; the copy-adapt genericization missed it. → amendment: `aDNA-Network/aDNA` + example → `Harness.aDNA`. All other hits = the documented historical-KEEP class (CHANGELOG/STATE/upgrade/migration narrate the rename). |
| F-CHM-207 image-half | **N/A-verified**: the defective workshop surface is not shipped in the image (workshops are a vault extension); `side_quest_guide.md` near-identical both sides, no clone-flow content. The M4.3 fix lives where the surface lives. |
| M4.1 majors delta | F-CHM-211 (image currency) → fixed by I8 **+ the F1 amendment** (the root half). F-CHM-210 image-pointer half → learn-pointer now on BOTH READMEs. F-CHM-207 → N/A image-side (above). **0 blockers; first hour strictly improves.** |

## §2 — Hostile-forker lens (method: semantic census + release-notes-vs-diff reconciliation)

| Claim | Census (my exclusion rules, python — never file-count-from-memory) | Verdict |
|-------|----------------------------------------------------------------|---------|
| "28 reusable templates" | 28 `template_*.md` files (+ `template_node_adna_exemplar/` = a bundle DIR, uncounted per the M4.3 "AGENTS.md is not a template" census semantics — noted, defensible) | ✅ |
| "27 skills — 24 agent + 3 process" | 27 `skill_*.md`; `skill_type: process` = exactly 3 | ✅ |
| "15 example lattices" | 15 yaml in `what/lattices/examples/` | ✅ |
| "14 plugins" (I15 docs) | 14 plugin folders; declared == shipped, 0 orphans | ✅ |
| "5 topics, 27 subtopics" (router line, pre-existing) | **27 confirmed** — 13+4+2+1+7 subtopic files across 5 topic dirs (excl. `AGENTS.md`); `context_recipes.md` is a loose INDEX file, not a subtopic. Dispatch B's out-of-scope "actual 28" was a file-count that included the index → **candidate finding DISSOLVED**; the narrated count is right. Method note recorded (the F-CHM-212 lesson cutting the OTHER way: the varied method un-flagged a non-defect). | ✅ no-defect |
| Release notes §4 vs the diff | **The notes claimed "README badges → v8.4/v2.5" while the pre-amendment diff carried only the inner README** — the notes-vs-diff reconciliation is what surfaced F1's scope. Post-amendment: notes and diff agree. Badge target-values (v8.4 hrefs) are inert-until-tag and ship only via step (d) — consistent. DEFER block honest (matches curation §1.3 verbatim). | ✅ post-amendment |

## §3 — Standards-lawyer lens (method: decision-trace, patch ↔ curation ↔ ratified decisions)

- **Patch ↔ curation**: 27 changed files all map to §1.2 rows (B's §2.2 table + my path check; the amendment adds root `README.md` under I8-AMEND). No unclaimed file in the patch.
- **Un-ratified content provably OUT**: patch grep = 0 hits for `GIT_OPTIONAL_LOCKS` (P-7) · `webforge` (P-5) · `source_vault` rule (P-2) · state-prompt-shed · ADR-022/authority-envelope. The §1.4/§1.5 exclusions held through assembly.
- **Traces spot-verified real**: I1→G2-D2/ADR-046 (v2.5 cut) · I3→G0-D3(b)+M1.2 spec-only install · I7→M1.1 D2 ledger (ratified at G0) · V1→G3-D5+G5-D4b · I20→Hearthstone P0 2026-06-18. The amendment itself introduces no new scope — it **completes** N-01/N-07/I18's already-ratified intent on their named surfaces (trace: `idea_image_newcomer_currency_fixes` rows 1+5; I18's genericization discipline).
- **§7.7 self-application**: every RC fold carries a ratification trace in the curation table; the RC record + this artifact form the release's decision-trace record.

## §4 — Methods table (no lens reused its target's method)

| Lens | Target artifact's method | Lens method |
|------|--------------------------|-------------|
| Newcomer | B assembled by fold-spec execution | Route-walk of the assembled clone vs the M4.1 baseline legs |
| Hostile forker | B censused counts at assembly (governance lint) | Independent semantic census with my own exclusion rules + notes-vs-diff reconciliation |
| Standards lawyer | Curation table authored top-down (decision→fold) | Bottom-up trace (patch file→row→decision) + negative probes for excluded content |

## §5 — Security re-verify

| Check | Result |
|-------|--------|
| **gitleaks FULL-history** (563 commits, 37.7 MB, first full-history run — prior gates ran pre-push increments) | **9 findings → 9/9 triaged FALSE-POSITIVE**: all `generic-api-key` hits in ONE vendored file at ONE commit — `.obsidian/plugins/terminal/main.js` @ `be28334` (2026-06-24 Obsidian reseed) — matching `s.FourKeyMap=`/`s.SequencerByKey=` assignments, i.e. **xterm.js keyboard-sequence lookup tables** in the third-party plugin's minified bundle. Vendor code constants, not credentials; file vendored-by-design at HEAD. Triage handled metadata-only (rule/file/commit/line); matched values never echoed. **Not release-blocking.** → G6 hygiene flag: add `.gitleaks.toml` path-allowlist for vendored plugin bundles (`.obsidian/plugins/.*/main\.js$`) with the triage reason, so future full-history scans are clean-by-config. Report: scratchpad `gitleaks_full.json` (session-local). |
| **NAMES-ONLY sweep of the G6 push batch** (`origin/main..HEAD` diff, 238 KB) | **CLEAN** — 0 hits across token-prefix patterns (gh*/PAT/xox/sk-/AKIA/BEGIN-KEY/bearer/vc); zero credential NAMES even mentioned. |
| **Staged-memo public-boundary** | Venus memo (staged, releases at G6 push): informational, no-action, no cross-vault writes, no sensitive content ✅. DP4 dossier: public-safe (paths + public URLs only) ✅. RC patch: image-destined content (public by definition) ✅. Inbound Berthier memos in the batch (`1e3e422` + ADR-022 ask): coordination-class content consistent with this public dev-graph's standing practice ✅. |

## §6 — Findings dispositions + G6 input list

**Fixed via recorded M6.1 curation amendment** (per the M6.3 guardrail "RC changes route back through M6.1's curation, never edited directly here" — the amendment is recorded in the curation table + RC record §2.2/§3, applied to the clone, patch REGENERATED [26→27 files, 767+/47− → 770+/48−], and re-verified [Berthier=0 · embed-note intact · governance lint **Zero drift** · stale-URL sweep 0 live-routing hits]):
- **F1** Root README badges + learn-pointer (N-01/N-07 primary surface) — I8-AMEND.
- **F2** Inner README Docs badge stale pre-cutover URL — I8-AMEND.
- **F3** I18 new-file stale org URL + archived-vault example — I18-AMEND.

**Dissolved**: "28 vs 27 subtopics" — the narrated 27 is semantically correct (§2).

**G6 inputs (none release-blocking)**:
1. **Amendment visibility**: the RC was amended post-dry-run by this pass (3 findings) and fully re-verified — the gate should see this loop (found→routed-through-curation→re-assembled→re-checked), not just the final diff.
2. **Release-noting**: `.gitleaks.toml` vendored-plugin allowlist proposal (§5) — one file, cascade-executable on nod.
3. **Release-noting (carried from B's out-of-scope)**: `aDNA_overview.md` (~47K, pre-v7.0 self-label, stale internal counts) needs an RC-scale decision — refresh / trim / re-stamp-as-archival — for v8.5 or a doc-currency mission; NOT folded here.
4. Method note for the record: full-history gitleaks is now the M6.3-class standard (the increment scans would never have surfaced the vendored-bundle FP class or a real historical leak).
