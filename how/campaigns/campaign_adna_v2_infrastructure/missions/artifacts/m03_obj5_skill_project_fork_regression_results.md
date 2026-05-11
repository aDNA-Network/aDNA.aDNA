---
type: artifact
artifact_type: regression_test_results
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_03_repo_flatten
objective: 5
session: session_stanley_20260511_<ts>_adna_v2_m03_s2
created: 2026-05-11
updated: 2026-05-11
status: complete
last_edited_by: agent_stanley
verdict: PASS  # 11 of 11 R-checks pass (R1 implicit from sandbox prep; R2-R11 explicit)
related_artifacts:
  - m01_obj2_migration_runbook.md  # §6 source
  - m03_obj5_verification_harness_results.md  # paired sibling (V-checks)
sandbox_location: /tmp/sandbox_v7/  # default path; cleaned up post-test
tags: [artifact, mission_deliverable, m03, obj5, regression_test, r1_r11, skill_project_fork, harness_pass]
---

# M03 Obj 5 — `skill_project_fork.md` Regression Test Results (R1-R11)

> **M03 Session 2 close gate**: R1-R11 from runbook §6 ran in `/tmp/sandbox_v7/`
> 2026-05-11T<ts>+ via a fresh sandbox + the post-v7.0 skill_project_fork.md
> procedure. All 11 checks pass; mission close gate satisfied; Session 3 unblocked.

## Verdict

**11 of 11 R-checks PASS** (R1 implicit from sandbox prep + R2-R11 explicit). No
failures; no rollback invoked.

## Sandbox setup

```sh
rm -rf /tmp/sandbox_v7 ~/sandbox_v7   # ensure clean start
mkdir -p /tmp/sandbox_v7 && cd /tmp/sandbox_v7
git clone --depth 1 https://github.com/LatticeProtocol/adna.git .adna   # v7.0 template
SAFE_NAME=v7_fork_test
cp -r .adna/ "${SAFE_NAME}.aDNA/"
cd "${SAFE_NAME}.aDNA/"

# Post-v7.0 exclusion list (per skill_project_fork.md C1 update; M03 B C1 commit):
rm -rf .git .github
rm -f README.md LICENSE setup.sh prepare_for_onboarding.sh   # R6 no-op (file moved B2)
rm -rf .obsidian/plugins/ .obsidian/themes/
rm -f .obsidian/workspace.json .obsidian/graph.json
git init -q

# Strip role: template (skill_project_fork Step 4)
sed -i.bak 's/^role: template$//' MANIFEST.md && rm MANIFEST.md.bak
```

## Results

| # | Check | Command | Verdict | Notes |
|---|---|---|---|---|
| R1 | No residual git history from template | `test ! -d .git/refs/heads/main` | **PASS** | The `rm -rf .git` step in skill_project_fork.md C1 update (B-commit C1) removed the template's git history before `git init` |
| R2 | No `.github/` leak | `test ! -d .github` | **PASS** | The `rm -rf .github` exclusion handled this |
| R3 | No `README.md` leak | `test ! -f README.md` | **PASS** | The `rm -f README.md` exclusion handled this |
| R4 | No `LICENSE` leak | `test ! -f LICENSE` | **PASS** | The `rm -f LICENSE` exclusion handled this |
| R5 | No `setup.sh` leak | `test ! -f setup.sh` | **PASS** | The `rm -f setup.sh` exclusion handled this |
| R6 | No `prepare_for_onboarding.sh` leak at root | `test ! -f prepare_for_onboarding.sh` | **PASS** | No-op exclusion (file was moved to `how/skills/l1_upgrade/` in M03 B2 per Operator Decision 1 Option A); script lives at the L1-skill home in fork, not at fork root |
| R7 | No `deploy_manifest.yaml` leak at root | `test ! -f deploy_manifest.yaml` | **PASS** | No-op at root (file was moved to `.github/` in M03 B3 per Obj 5 D-1); covered transitively by R2 (`rm -rf .github`) |
| R8 | Triad (what/how/who) present | `test -d what -a -d how -a -d who` | **PASS** | All three directories present in fork |
| R9 | Governance files (CLAUDE.md, MANIFEST.md, STATE.md) present | `test -f CLAUDE.md -a -f MANIFEST.md -a -f STATE.md` | **PASS** | All three present |
| R10 | `role: template` stripped from MANIFEST.md | `! grep -q '^role: template$' MANIFEST.md` | **PASS** | The `sed -i.bak` step removed the role line |
| R11 | `how/templates/template_workspace_claude.md` present | `test -f how/templates/template_workspace_claude.md` | **PASS** | The workspace template was carried through the fork (per M03 B1 outer-wrapper conversion); fork inherits the ability to bootstrap workspace router |

## Conclusion

Mission close gate (R1-R11) **satisfied — Session 2 close unblocked**. The
companion `m03_obj5_verification_harness_results.md` artifact (V1-V13) similarly
passes. Sandbox cleaned up post-test (`rm -rf /tmp/sandbox_v7`).

The post-v7.0 `skill_project_fork.md` (per M03 B C1 update) cleanly produces a
fresh forkable project with no template-repo pollution + role-template stripped +
triad + governance + workspace template intact. M04 (the next mission consuming
this skill — `node.aDNA/` bootstrap) can proceed at operator discretion.
