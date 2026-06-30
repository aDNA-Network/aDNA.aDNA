---
session_id: session_stanley_20260630T030452Z_template_release_v8_3
type: session
tier: 2
intent: "Execute skill_template_release v8.3 — broader .adna/ org-name currency sweep (deferred from v8.2)"
status: completed
started: 2026-06-29
completed: 2026-06-29
agent: agent_stanley
campaign: operation_drydock_m03_followup (template currency — deferred from v8.2)
related:
  - how/skills/skill_template_release.md
  - how/missions/mission_vault_wide_currency_sweep.md
  - how/missions/mission_currency_followon_closeout.md
  - .adna/how/skills/skill_project_rename.md
tags: [session, release, template, public_face, adna_network, v8_3, currency_sweep, org_name]
created: 2026-06-29
updated: 2026-06-29
last_edited_by: agent_stanley
---

# Session — Template Release v8.3 (org-name currency sweep)

**Intent.** Take on the broader `.adna/` org-name currency sweep flagged + deferred at v8.2. Bring the base template's **live-routing** references current (`LatticeProtocol/{aDNA,adna,Agentic-DNA}` → `aDNA-Network/aDNA`; display name `Agentic-DNA` → `aDNA`) with strict keep/strip discipline, and ship as **v8.3** via `skill_template_release`.

## Scope declaration (Tier 2)

- **Writes (release tree — clone of `aDNA-Network/aDNA`):** 28 `.adna/` files (org-name currency only); governance `.adna/CLAUDE.md` 8.2→8.3 + CHANGELOG v8.3.
- **Outward:** push `main` + tag `v8.3` to `aDNA-Network/aDNA` (operator-confirmed).
- **Local sync (step e):** `rsync` pushed tree → `~/aDNA/.adna` (`ab97ad3`); `install_truth` regenerated (unchanged).
- **Writes (dev graph):** this session file; STATE.md.
- **Out of scope (KEPT):** historical/provenance refs; private-repo refs (lattice-protocol/latlab/III.aDNA); the standard track (v2.4 unchanged).

## Classification (keep/strip — `skill_project_rename` discipline, broadened scope)

- **UPDATE (live-routing, ~31 refs / 28 files):** standard-repo URLs → `github.com/aDNA-Network/aDNA` (CONTRIBUTING, README, adna.md, 3 workflow caller-comments, current docs/quests/skills/templates, example READMEs); display name `Agentic-DNA` → `aDNA` (AGENTS, MANIFEST, headings, identity prose, deploy_manifest comment); base-template tree depiction → `.adna/`.
- **KEEP — historical:** CHANGELOG, the v6→v7 + v5.2→v6.0 upgrade/migration guides, STATE snapshots, the §3.5 errata (archive-don't-delete, §15). Verified untouched (git diff --stat empty for these).
- **KEEP — other repos (not the public standard):** `LatticeProtocol/lattice-protocol` + `/latlab` (private code/SDK), `LatticeProtocol/III.aDNA` (vault remote, unconfirmed-migrated). Confirmed `lattice-protocol` exists in both orgs (private) — local code-as-WHAT names the LatticeProtocol remote `legacy`; defaulted KEEP (CI-risk + out of public-standard scope).

## SITREP

**Completed.**
- Cut + shipped **v8.3** to `aDNA-Network/aDNA` (tag `v8.3`, commit `e4372a6`; `main` pushed). 7-row smoke + Class-1 regression all GREEN; governance lint zero-drift.
- Org-name currency sweep: 28 files, all `.adna/`; root surfaces untouched (router stays Berthier); image root had no stale standard-repo refs.
- Final currency gate clean — only remaining `Agentic-DNA` is the v8.3 CLAUDE.md `<!-- -->` comment *describing* the sweep (self-documenting narrative, KEEP — like the CHANGELOG).
- Local `~/aDNA/.adna` synced (`ab97ad3`); `install_truth.json` unchanged (4 paths verified). Tags-only image (no GitHub Release).

**In progress.** None.

**Next up (deferred / flagged).**
- `LatticeProtocol/III.aDNA` remote — if III.aDNA's repo migrated to aDNA-Network, update `skill_iii_setup` in a future pass (operator declined for now — KEPT).
- `lattice-protocol` + `latlab` private repos — migrate references if/when those repos move org (separate, out of public-standard scope).
- README "Built by Lattice Protocol" display text — URL updated to aDNA-Network; the brand display kept (operator declined to change).
- The earlier Drydock M03 retro arms B/C + Oration harness strips (unchanged from v8.2 handoff).

**Blockers.** None.

**Files touched.**
- Pushed to `aDNA-Network/aDNA` (v8.3, 28 files): `.adna/{CONTRIBUTING.md, README.md, adna.md, AGENTS.md, MANIFEST.md, CLAUDE.md, CHANGELOG.md, .github/workflows/*.yml, .github/deploy_manifest.yaml, how/Home.md, how/quests/*, how/templates/template_side_quest.md, how/skills/{skill_upstream_contribution,skill_workspace_upgrade,skill_git_remote_setup}.md, what/docs/*, what/context/prompt_engineering/*, what/docs/examples/*}`.
- Local: `~/aDNA/.adna` synced (`ab97ad3`).
- Dev graph: this session file; STATE.md.

**Next Session Prompt.** The deferred v8.2 template org-name currency sweep is DONE — **v8.3 LIVE** on `aDNA-Network/aDNA` (tag `v8.3`/`e4372a6`; live-routing `LatticeProtocol/{aDNA,adna,Agentic-DNA}`→`aDNA-Network/aDNA` + display `Agentic-DNA`→`aDNA` across 28 `.adna/` files; historical + private-repo refs KEPT; local `.adna` synced `ab97ad3`; smoke + Class-1 regression GREEN). No in-gate work remains. Operator-gated follow-ups: (1) `LatticeProtocol/III.aDNA` + `lattice-protocol`/`latlab` private-repo refs — migrate if/when those repos move org (verify per-repo first; CI-risk); (2) the earlier Drydock M03 retro arms B (45-vault campaign strip) + C (rename-residue sweep) in `idea_fleet_defects_retro_cleanup`; (3) Oration's 2 harness strips via its own subagent. Push dev-graph records first (`git fetch` + ff-verify + `gitleaks`).

## AAR

- **Worked:** the §6.5 / `skill_project_rename` keep/strip discipline scaled cleanly to an org-name sweep — exhaustive `rg` dump → per-line classify → hybrid patch (URL substring-replace-all for pure-update files + assert-exactly-once anchored edits for display-names/bare-org/mixed files). The "remaining-refs grep gate" caught exactly the legitimate KEEPs (historical + private-repo), proving the classification rather than asserting it.
- **Didn't:** raw grep over-counted ~3× (the high-density `upgrade_v6_to_v7.md` was almost entirely historical-KEEP, not the "top UPDATE file" an early sub-agent scan suggested) — the real defect set was the current user-facing files. The currency gate also fired a false-positive on the v8.3 self-describing comment (the sweep narrating itself), a reminder that release-description text legitimately contains the old names.
- **Finding:** an org-name currency sweep has MORE keep/strip nuance than a vault-rename: beyond historical-vs-live, there's the "other-repo" axis (private `lattice-protocol`/`latlab`, unmigrated vault `III.aDNA`) where the safe default is KEEP — blind-swapping a private/unmigrated remote breaks CI/clones. Verify-per-repo, default-KEEP.
- **Change:** for currency gates, exclude the release's OWN changelog/comment text from the "stale-ref" grep (it describes the rename) — or read each hit before calling it a regression.
- **Follow-up:** the per-repo migration of `III.aDNA`/`lattice-protocol`/`latlab` references is the next currency layer (gated on confirming those repos actually moved org).

**Token budget (SO11):** estimated ~80 kT (50-200 tier). Actual ≈ within ~1.3× — the exhaustive classification (two full grep passes + per-line review of ~100 refs) + the tree-label judgment + the false-positive diagnosis. Within the 2× retrospective trigger; no retrospective.
