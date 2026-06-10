---
type: session
session_id: session_stanley_20260610T205755Z_public_face_repo
created: 2026-06-10
updated: 2026-06-10
status: in_progress
tier: 2
agent: agent_stanley
persona: rosetta
mission: none (dispatched infrastructure leg — Berthier/aDNALabs, operator-approved plan 2026-06-10, session_stanley_20260610_public_face_repo)
campaign: none (out-of-campaign; campaign_adna_serious_tool_readiness E5 untouched — paused at c163, c164 prepared-not-built)
tags: [session, public_face_repo, adna_network, release_architecture, install_truth, adr_034, skill_template_release, deploy]
---

# Session — Public face repo + release architecture (Rosetta leg of the 2026-06-10 operator decision)

## Intent

Record + integrate the operator-decided, Berthier-executed public-face migration of the aDNA standard:
`LatticeProtocol/aDNA` → transferred to **`aDNA-Network/adna-legacy`** (deprecation banner `74cb761`,
GitHub-ARCHIVED, old URLs redirect) and **`aDNA-Network/aDNA` stood up LIVE + PUBLIC** as the canonical
face (tag `v7.1`, commit `e0fbb4c`; clone-and-run workspace image: pre-instantiated router + embedded
`.adna/` + 1-command flow). PR #7 merged this morning; PR #8 CLOSED-AS-SUPERSEDED (doc-flip carried by #7;
residual stale-slug fixes folded into this leg's docs pass). Release model: aDNA.aDNA (private) = dev
graph; releases to `aDNA-Network/aDNA` are manual, gate-fired.

**This leg (in-vault only):** ADR-034 · `skill_template_release.md` · install-truth flip (script + fixture
+ gate-12 + `/get-started` + `/network`) · sitewide live canonical-repo reference flip · PR#8-residual
stale-slug fix (`what/docs/projects_folder_pattern.md`) · CLAUDE.md/MANIFEST/README/adna.md/CONTRIBUTING
live-identity refs · STATE.md live-row annotations · CHANGELOG `[Unreleased]` entry · coordination ACK →
Berthier · gates green · commit (path-scoped, R9) · deploy (established Vercel CLI prebuilt flow, `/commons`
holdout per c162 precedent/ADR-010 embargo) · live verification.

## Scope declaration (Tier 2)

- **NEW**: `what/decisions/adr_034_public_face_repo_release_architecture.md` ·
  `how/skills/skill_template_release.md` ·
  `who/coordination/coord_2026_06_10_rosetta_to_berthier_public_face_repo_ack.md` · this session file.
- **Edits (vault)**: `scripts/build_install_truth.mjs` · `site/src/data/install_truth.json` (regen) ·
  `site/tests/gates/gate-12-install-truth.spec.ts` · `site/src/pages/get-started.astro` ·
  `site/src/pages/network.astro` · live canonical-repo slug flips across site chrome/docs (enumerated in
  SITREP) · `what/docs/projects_folder_pattern.md` · `CLAUDE.md` · `MANIFEST.md` · `README.md` · `adna.md` ·
  `CONTRIBUTING.md` · `CHANGELOG.md` ([Unreleased]) · `STATE.md` (live rows only, SO-7) ·
  `how/backlog/idea_upstream_onboarding_workspace_default_adna.md` (disposition close).
- **No edits**: E5/c164 lane artifacts (`m512_*` specs, mission file, design spec) beyond zero — except a
  single canonical-URL swap in `site/src/pages/commons.astro` (embargoed surface; flagged to the lane) ·
  `.adna/` (read-only; already at frozen final `74cb761`) · the foreign session record
  `how/sessions/history/2026-06/session_stanley_20260610T173006Z_v8_m512_e5_c163.md` (found already
  committed at `a0a9970`; untouched).
- **Deploy**: YES — operator-flagged path (Berthier dispatch under operator-approved plan); `/commons`
  holdout maintained (live 404 stays); ships c163's committed non-commons work (C4 closing-CTA partials,
  gates-green) as a transparent side-effect.

## Conflict scan

- `how/sessions/active/` empty at session start. Working tree clean at `c73b2e1` (the dispatch-flagged
  foreign c163 session file was already committed at `a0a9970` — benign delta, reported).
- E5 c164 prepared-not-built (`ready_to_execute` artifact) — no overlap with this leg's files except the
  one commons.astro URL swap (flagged).

## Heartbeat

- 2026-06-10T20:57Z — session open; orientation complete (CLAUDE.md, STATE QUEUED, git logs, .adna at
  `74cb761` frozen final, c162 holdout precedent located); authoring ADR-034.
