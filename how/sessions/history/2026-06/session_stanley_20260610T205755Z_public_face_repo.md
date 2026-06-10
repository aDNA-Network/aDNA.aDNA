---
type: session
session_id: session_stanley_20260610T205755Z_public_face_repo
created: 2026-06-10
updated: 2026-06-10
status: completed
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

## Scope declaration (Tier 2)

- **NEW**: `what/decisions/adr_034_public_face_repo_release_architecture.md` ·
  `how/skills/skill_template_release.md` ·
  `who/coordination/coord_2026_06_10_rosetta_to_berthier_public_face_repo_ack.md` · this session file.
- **Edits (vault)**: `scripts/build_install_truth.mjs` · `site/src/data/install_truth.json` (regen) ·
  `site/tests/gates/gate-12-install-truth.spec.ts` · `site/src/pages/get-started.astro` ·
  `site/src/pages/network.astro` · live canonical-repo slug flips across site chrome/docs (SITREP) ·
  `what/docs/projects_folder_pattern.md` · `CLAUDE.md` · `MANIFEST.md` · `README.md` · `adna.md` ·
  `CONTRIBUTING.md` · `CHANGELOG.md` ([Unreleased]) · `STATE.md` (live rows only, SO-7) ·
  `how/backlog/idea_upstream_onboarding_workspace_default_adna.md` (disposition close).
- **No edits**: E5/c164 lane artifacts (`m512_*` specs, mission file, design spec) — except a single
  canonical-URL swap in `site/src/pages/commons.astro` (embargoed surface; flagged to the lane) ·
  `.adna/` (read-only; already at frozen final `74cb761`) · the foreign session record
  `session_stanley_20260610T173006Z_v8_m512_e5_c163.md` (found already committed at `a0a9970`; untouched).
- **Deploy**: YES — operator-flagged path; `/commons` holdout maintained.

## Conflict scan

- `how/sessions/active/` empty at session start. Working tree clean at `c73b2e1` (the dispatch-flagged
  foreign c163 session file was already committed at `a0a9970` — benign delta, reported).
- E5 c164 prepared-not-built (`ready_to_execute` artifact) — no overlap beyond the flagged commons.astro
  URL swap.

## Heartbeat

- 2026-06-10T20:57Z — session open; orientation complete (CLAUDE.md, STATE QUEUED, git logs, .adna at
  `74cb761` frozen final, c162 holdout precedent located); authoring ADR-034.
- 2026-06-10T21:05Z — ADR-034 + skill_template_release authored; install-truth script/fixture/gate-12
  re-cut; `/get-started` + `/network` rewritten; sitewide slug flip done; root surfaces + STATE live rows
  + CHANGELOG + backlog disposition done.
- 2026-06-10T21:11Z — build 163pp/0err; **gates 121/121** (regen ridealong caught: vaults.json 41→40,
  Home `b356ca59`, RareHarnessOld archived SC-6a — committed consciously per ADR-023). Commit `4b419d3`
  pushed.
- 2026-06-10T21:14Z — vercel pull → build → `/commons` holdout (`rm .vercel/output/static/commons`) →
  deploy --prebuilt --prod (1st attempt transient Vercel API "Internal Server Error"; retry READY).
  Live verified. Session close.

## SITREP

**Completed**
1. **ADR-034** `what/decisions/adr_034_public_face_repo_release_architecture.md` — the image model
   (embedded `.adna/`, pre-instantiated router, 1-command flow, `v7.1` @ `e0fbb4c`), the adna-legacy
   archive + verified repo-id redirect semantics (new same-named repo did NOT capture old-org
   redirects), PR #8 closure rationale, the manual gate-fired dev→release cycle, two-track versioning
   continuity, the embed-note transform as a release-skill step, the `.gitignore` case-sensitivity
   gotcha (`*.aDNA/` case-insensitively matched `.adna/` on macOS → `/?*.aDNA/` + `!/.adna/`).
2. **`how/skills/skill_template_release.md`** — steps (a) preconditions/gate → (b) assemble →
   (c) fresh-clone sync + embed-note transform + root-surfaces-only-when-changed + gitignore caution →
   (d) two-track bump + commit/tag/push → (e) local-node `.adna` rsync maintenance (origin frozen at
   the archive) + fixture regen → (f) 7-row fresh-clone smoke-test checklist (router present ·
   `role: template` · key skills resolve · dummy `*.aDNA` ignored-but-`.adna`-tracked · embed note ·
   old-URL redirect · tag + 1-command flow).
3. **Install truth + site**: `build_install_truth.mjs` → fixture **schema 0.2** (commands
   `clone`/`enter`/`launch`; one-liner `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA &&
   cd ~/aDNA && claude`; `legacy_repo_https`; `clone_target ~/aDNA`; `embedded_standard .adna`;
   `template_sha 74cb761`). Gate-12 → **7 tests** (+old-slug `/LatticeProtocol\/adna/i` +
   cp-router-step rejection on both surfaces; legacy-archive reachability). `/get-started` rewritten
   (2 steps + one-command callout + **existing-installs (pre-June-2026) note** linking adna-legacy);
   `/network` Band-4 → 3-line command block. **PR#8 residual fixed**:
   `what/docs/projects_folder_pattern.md` (its "two-command onboarding" pattern is now literally what
   v7.1 implements). **Sitewide live canonical-slug flip** (18 site files: Header/Footer/SocialLinks/
   HomeHero chrome; index/commons/community/startup-first-hour/what-is-adna pages; open-standard,
   context-commons, community-×3, build-your-first-vault, social-sharing, agent-first-guide,
   migration-guide docs) + root surfaces (CLAUDE.md §Cite-the-spec + SO-9, MANIFEST public-face
   identity, README Quick Start → 1-command flow + legacy note, CONTRIBUTING issue/clone links,
   adna.md). Historical narrative verbatim (SO-7).
4. **Gate-12 + full gates GREEN: 121/121** (120 + 1 new legacy-reachability test); build 163pp/0err.
   Regen ridealong committed consciously: `vaults.json`/`vaults_graph.mmd` 41→40 vaults (Home source
   `b356ca59` — RareHarnessOld archived to `Archive.aDNA` at Spring Clean SC-6a today; its detail page
   correctly left the build).
5. **DEPLOYED LIVE** (established prebuilt flow; clean-tree discipline — all site inputs committed at
   `4b419d3` pre-build): `vercel pull` → `vercel build --prod` → **`/commons` holdout**
   (`rm -rf .vercel/output/static/commons`, c162 precedent, ADR-010 embargo) → `vercel deploy
   --prebuilt --prod` (deployment `dpl_DdKqD8cXFQm2YAZSQ95QWR9AaTDz`, aliased **https://adna.network**;
   1st attempt transient API 500, retry READY). **Live verification**: `/get-started/` renders the
   1-command flow + one-liner, **zero** `LatticeProtocol` hits, adna-legacy note present; `/network/`
   renders the new clone command; `/commons/` → **404** (embargo intact);
   `github.com/LatticeProtocol/aDNA` → **301 → `aDNA-Network/adna-legacy`**; new face 200. Side-effect
   shipped (flagged): c163's committed non-commons C4 closing-CTA partials.
6. **Governance**: STATE live rows (PR#8 pending-action ✅RESOLVED · E6/M5.13 O4 external resolved ·
   social-preview targets retargeted · c164 live-prompt externals + gates-121 annotations · new Current
   Phase bullet + Last Session block); CHANGELOG `[Unreleased]` (Added ×2 / Changed ×2); backlog idea →
   `resolved` with same-day addendum; coordination ACK → Berthier
   (`coord_2026_06_10_rosetta_to_berthier_public_face_repo_ack.md`, incl. workspace-level flags:
   Standing-Rule-1 "update via git -C .adna pull" now a permanent no-op; vault-repo deep-link
   visibility question).

**In progress** — none; leg complete.

**Next up** — E5 c164 execution (the live campaign prompt; its PR external is RESOLVED, Hestia ack
still pending; expect gates 121/121). E6/M5.13 opens at E5 close with O4 rescoped onto the release
channel.

**Blockers** — none. (Anomalies, reported not blocking: the dispatch-flagged "uncommitted foreign
session file" was already committed at `a0a9970` before session open; the first `vercel deploy` attempt
returned a transient API "Internal Server Error", retry succeeded; prebuild regen drift 41→40 vaults
from same-day SC-6a, committed consciously.)

**Files touched** — 37 in commit `4b419d3` (3 new: ADR-034, skill_template_release, this session file;
34 modified) + commit 2 (memo NEW, STATE close, session→history). Both pushed to
`aDNA-Network/aDNA.aDNA` main.

> **Next Session Prompt** — This infrastructure leg is complete and self-contained; nothing carries.
> A fresh session resumes the campaign per STATE.md's live **E5 c164 execution prompt** (build spec
> `m512_e5_c164_first_social_surface_build_spec.md`, `ready_to_execute`): note its §1 externals are
> now PR-RESOLVED (PR #7 merged / PR #8 closed-as-superseded; fixture already at the
> `aDNA-Network/aDNA` image flow, sha `74cb761` — ADR-034), only the Hestia vault-card ack remains
> live, and the gate expectation is **121/121** (gate-12 gained a 7th test). For any future standard
> change: the upstream channel is no longer PRs to the (archived) template repo — it is the gate-fired
> release skill `how/skills/skill_template_release.md`.
