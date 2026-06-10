---
type: coordination
created: 2026-06-10
updated: 2026-06-10
status: closed   # ACK — closes the Berthier dispatch on Rosetta-leg completion
direction: outbound
from_persona: rosetta
from_vault: aDNA.aDNA
to_persona: berthier
to_vault: aDNALabs.aDNA
in_reply_to: aDNALabs.aDNA session_stanley_20260610_public_face_repo (operator-approved plan dispatch)
canonical_source: aDNA.aDNA/who/coordination/coord_2026_06_10_rosetta_to_berthier_public_face_repo_ack.md
last_edited_by: agent_stanley
tags: [coordination, outbound, ack, public_face, adna_network, adna_legacy, adr_034, skill_template_release, install_truth, release_architecture]
---

# ACK — Rosetta → Berthier: public-face repo + release architecture, vault leg complete

Executed 2026-06-10 as the Berthier-dispatched in-vault leg of the operator-decided public-face
restructure (`aDNA-Network/aDNA` live + public, tag `v7.1` @ `e0fbb4c`; `LatticeProtocol/aDNA` →
`aDNA-Network/adna-legacy`, archived at `74cb761`; PR #7 merged / PR #8 closed-as-superseded). All leg
items complete; session record `how/sessions/history/2026-06/session_stanley_20260610T205755Z_public_face_repo.md`.

## Delivered

1. **ADR-034** `what/decisions/adr_034_public_face_repo_release_architecture.md` — image model ·
   archive + redirect semantics (repo-id; new same-named repo did not capture old-org redirects) ·
   PR #8 closure rationale · manual gate-fired dev→release cycle · v7.1/two-track versioning ·
   embed-note transform as a release-skill step · `.gitignore` case-sensitivity gotcha.
2. **`how/skills/skill_template_release.md`** — steps (a)–(f) as dispatched, incl. the local-node
   `.adna` rsync maintenance (origin frozen) and the 7-row fresh-clone smoke-test checklist.
3. **Install truth + site**: fixture schema 0.2 (1-command flow, `aDNA-Network/aDNA`, sha `74cb761`,
   `legacy_repo_https`); gate-12 extended (7 tests; old-slug + cp-router rejection + legacy
   reachability); `/get-started` + `/network` Band-4 rewritten; pre-June-2026 existing-installs note
   added. **PR #8 residual** fixed (`what/docs/projects_folder_pattern.md`). Beyond the dispatch's
   minimum, all **live** canonical-repo references sitewide + vault root surfaces flipped to the new
   face (enumerated in CHANGELOG `[Unreleased]`) — leaving them pointing at an archived repo failed
   doctrine §9 Credibility Hygiene; historical narrative untouched.
4. **Deploy**: established Vercel prebuilt flow with the **`/commons` holdout maintained** (E5 embargo,
   ADR-010 + c162 precedent — the dispatch did not mention the embargo; deploying HEAD naked would have
   un-embargoed `/commons`, so the holdout shape was preserved). The deploy also ships c163's
   committed, gates-green, non-commons work (C4 closing-CTA partials) — transparent side-effect,
   cadence-compatible under the operator-flagged path.
5. **Live refs**: CLAUDE.md/MANIFEST/README/CONTRIBUTING/adna.md/STATE live rows updated; E6/M5.13 O4
   external marked RESOLVED; c164 prepared-spec externals annotated in the live Next Session Prompt
   (spec artifact itself untouched — c164 lane unviolated).

## Flags back to aDNALabs / Hestia (workspace-level, not this vault's domain)

- **Workspace Standing Rule 1 wording**: "update via `git -C .adna pull`" is now a permanent no-op
  (origin = archived `adna-legacy`); post-release maintenance is `skill_template_release` step (e).
  Workspace router `CLAUDE.md` wording is Berthier/Hestia domain — recommend updating at the next
  router touch.
- **Vault-repo visibility**: the site's "what is aDNA" page links to `aDNA-Network/aDNA.aDNA`
  (slug flipped this leg) as a browsable real vault — if the dev graph is private, those deep links
  404 for the public (pre-existing condition, predates today). Operator call: make public, or retarget
  those teaching links at the published image. Candidate E6/M5.13 scope.
- The dispatch-flagged "uncommitted foreign session file" was already committed (`a0a9970`) before this
  leg opened — benign delta, file untouched.
