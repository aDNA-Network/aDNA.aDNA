---
type: mission
mission_id: mission_adna_infra_p3_08c_standalone_installer
campaign: campaign_adna_v2_infrastructure
campaign_phase: 3
status: planned
mission_class: implementation  # M08c produces a working cross-platform installer + tests + docs; first implementation-class mission in this campaign (M01 was planning, M02 was verification, M08a was authoring, M03-M07/M08b are governance/structure/propagation)
created: 2026-05-11
updated: 2026-05-11
last_edited_by: agent_stanley
opened_at: M08b_close_handoff  # opens after post-flatten propagation receipts confirm ecosystem stability
opens_session: TBD  # first execution session ID; will be populated at mission open
spec_completeness: stub  # bare-bones authored at Campaign Amendment Session 2026-05-11; full Read/Produce blocks + Deliverables table + Acceptance criteria boxes authored at mission open per M02 first-execution-session pattern
estimated_sessions: 2-4  # research/design + macOS+Linux impl + Windows impl + cross-platform validation; recalibrated at mission open against actual M03/M04/M05/M06/M07/M08b outputs
prerequisite_missions:
  - mission_adna_infra_p1_03_repo_flatten  # M03 establishes post-flatten target structure the installer creates
  - mission_adna_infra_p1_04_node_adna_bootstrap  # M04 defines the opt-in node.aDNA path the installer surfaces
  - mission_adna_infra_p2_05_publish_skill_rewrite  # M05 defines the per-vault publish-skill setup the installer points operators at
  - mission_adna_infra_p2_06_github_minimalism_v7_tag  # M06 ships the v7.0 tag the installer pins to
  - mission_adna_infra_p3_07_repo_review_simplify  # M07 finalizes naming + workspace router + template prose
  - mission_adna_infra_p3_08b_post_flatten_propagation_receipts  # M08b confirms ecosystem stability before installer ships
prerequisite_adrs:
  - adr_006_github_repo_rename_to_adna  # accepted; installer clones LatticeProtocol/adna at v7.0 tag
  - adr_007_outer_adna_claude_md_disposition  # accepted; installer copies template_workspace_claude.md → ~/aDNA/CLAUDE.md (no symlink)
  - adr_008_airlock_template_stub  # drafted at M03; installer ensures airlock dir present at .adna/how/airlock/
  - adr_009_aDNA_naming_convention  # accepted; installer names directories per convention; template repo grandfathered exception honored
  - adr_011_semver_discipline_forecast  # forecast at M06 (Governance v7.0 tag); installer respects two-track Major.Minor policy
  - adr_012_installer_packaging_distribution_forecast  # drafted by M08c Obj 1; chooses packaging approach + distribution mechanism
ships_to: mission_adna_infra_p4_09_token_audit  # M09 (token audit) follows M08c but does NOT block on it (M09 is independent of installer)
external_dependencies:
  - LatticeProtocol/adna GitHub repo (clones at v7.0 tag per ADR-006)
  - GitHub release asset hosting (or adna-docs.vercel.app/install for curl-bash UX — ADR-012 forecast)
  - cross-platform package distribution channels (TBD per ADR-012)
tags: [mission, planned, adna, infrastructure, p3, m08c, v7_0, installer, greenfield_bootstrap, cross_platform, implementation_class]
---

# Mission — M08c: Standalone Installer (Greenfield Workspace Bootstrap)

**Phase**: P3 — General repo review + simplify + ecosystem propagation receipts.
**Class**: implementation. M08c delivers a working cross-platform executable (macOS +
Windows + Linux) that automates the canonical post-v7.0 workspace bootstrap. It is the
first implementation-class mission in this campaign — M01 (planning), M02 (verification),
M08a (authoring), and M03–M07/M08b (governance/structure/propagation) all produced
specifications, audits, or governance artifacts; M08c produces a running program.

> **Spec stub authored** at Campaign Amendment Session 2026-05-11
> (`session_stanley_20260511_064447_adna_v2_m08c_amendment`). Frontmatter
> `spec_completeness: stub`; `status: planned`. Full Read/Produce blocks + Deliverables
> table + Acceptance criteria boxes authored at mission open per the M02 first-execution
> -session pattern. Opens at M08b close handoff after post-flatten propagation receipts
> confirm ecosystem stability.

---

## Strategic Intent

The current install flow for new operators is `git clone github.com/LatticeProtocol/Agentic-DNA ~/aDNA && cd ~/aDNA && claude` (per the `adna/README.md` Getting Started section). This works for v6.0 because the workspace structure is a simple two-level nest (`~/aDNA/adna/.adna -> .adna` symlink). Post-v7.0, the install flow becomes multi-step: clone `LatticeProtocol/adna` at the v7.0 tag into `~/aDNA/.adna/` (flat, no symlink); copy `template_workspace_claude.md` to `~/aDNA/CLAUDE.md` with variable substitution (`{{created_date}}`, `{{compute_tier}}`, `{{adna_folder}}`); optionally run `setup.sh` for Obsidian plugin installation; optionally run `prepare_for_onboarding.sh` for L1 pre-flight checks. The README's git-clone-and-claude pattern no longer covers it.

M08c closes that gap by shipping a **standalone cross-platform installer** — a single command (or `.dmg`/`.msi`/`.deb` package, ADR-012 decides) that takes a new operator from "I have nothing" to "I have a working `~/aDNA/` workspace with valid `.adna/` template, valid `CLAUDE.md` router, and a clear next-step prompt to launch Claude Code." Three platforms: **macOS** (Intel + Apple Silicon), **Windows** (PowerShell 5.1+), **Linux** (bash 4+; Ubuntu/Fedora/Arch as primary targets). The installer is greenfield-only — existing operators migrating from v6.0 use `skill_workspace_upgrade` (M03) + M08a per-vault coord memos, not this installer.

M08c is the **canonical greenfield path validation** for v7.0. By the time M08c executes (after M03/M04/M05/M06/M07/M08b), every template/process change made during the campaign has landed and been validated in the wild via M08b propagation receipts. The installer captures every change. If the installer works end-to-end on 3 platforms × 2 install modes (fresh + idempotent re-run abort), the campaign has empirically demonstrated that v7.0 works for cold-start operators — which is the closing-evidence M11 (final review) needs to synthesize against.

---

## Hard constraints

- **Cross-platform three targets**: macOS (Intel + Apple Silicon), Windows (PowerShell 5.1+ or compiled binary), Linux (bash 4+; Ubuntu 22.04 LTS + Fedora 39 + Arch as primary validation targets). Functional parity across all three.
- **No package-manager dependency for installer execution**: operator may have git + curl/wget pre-installed (these are standard); installer does not assume Homebrew, apt-get, yum, dnf, pacman, chocolatey, or scoop. ADR-012 decides whether installer execution requires any runtime (e.g., compiled binary = none; bash + PowerShell pair = native shell only; Python+pyinstaller = bundled Python).
- **Honors ADR-006** (clones `LatticeProtocol/adna` lowercase URL slug at the v7.0 tag, not `main`; pins exactly).
- **Honors ADR-007** (copies `template_workspace_claude.md` to `~/aDNA/CLAUDE.md` with variable substitution; no symlink; workspace CLAUDE.md is operator-customizable after install).
- **Honors ADR-008** (verifies `.adna/how/airlock/AIRLOCK.md` stub is present post-clone; surfaces operator guidance for opt-in airlock adoption).
- **Honors ADR-009** (naming convention: snake_case workspace directories; template repo is the grandfathered exception per ADR-009 §5; installer does not enforce conventions on operator-supplied paths but defaults to `~/aDNA/`).
- **Honors ADR-011 forecast** (semver discipline; installer prints the Governance v7.0 + Standard v2.2 version pair at install completion; respects two-track policy).
- **Idempotency**: re-running installer on an existing `~/aDNA/` aborts cleanly with operator guidance — recommends `skill_workspace_upgrade` for v6.0→v7.0 migration; does NOT overwrite or merge. Default behavior on existing-non-empty `~/aDNA/`: print operator guidance + exit 0. Operator opt-in flag (`--force-greenfield`) reserved for future use; not in M08c scope.
- **No telemetry**; no analytics; no network calls beyond the git clone (`github.com/LatticeProtocol/adna.git` at v7.0 tag) + GitHub release asset fetch (if ADR-012 chooses that distribution).
- **Greenfield-only scope**: not a substitute for `skill_workspace_upgrade` (existing-operator migration). Installer messaging makes the boundary explicit.
- **Operator choice respected**: installer's optional steps (Obsidian setup, L1 pre-flight) default OFF and are operator-opt-in via flags (e.g., `--with-obsidian-setup`, `--with-l1-preflight`). Default install is minimal (just `.adna/` clone + workspace `CLAUDE.md`).
- **No mutation of partner-affiliated material**. Installer is workspace-bootstrap only; it does not touch any partner vault, partner coord memo, or partner-related infrastructure.

---

## Objectives (skeleton — full Read/Produce blocks authored at mission open)

### Obj 1 — Installer design + packaging-and-distribution ADR (ADR-012)

Design the installer end-to-end. Choose:
- **Packaging approach**: curl-bash + PowerShell paired-script (simplest UX, no compilation, requires shell runtime) vs. compiled single binary (Go / Rust — no shell dependency, harder to update) vs. Python+pyinstaller (bundled Python, larger artifact). Trade-off analysis.
- **Distribution mechanism**: GitHub release assets (curl from `github.com/LatticeProtocol/adna/releases/v7.0/...`) vs. curl-bash from `adna-docs.vercel.app/install` (operator runs `curl -sSL https://adna-docs.vercel.app/install | sh`) vs. npm `create-adna-workspace` (Node-dependent) vs. Homebrew tap `brew install latticeprotocol/tap/adna`.
- **Update mechanism**: how does v7.1+ installer ship? In-place self-update vs. operator re-runs installer.
- **Idempotency check mechanism**: how does the installer detect an existing `~/aDNA/`? (Default: check for `~/aDNA/.adna/` directory presence + read `.adna/MANIFEST.md` version field.)

Output: **ADR-012 draft** at `what/decisions/adr_012_installer_packaging_distribution.md` (status: proposed; ratified at M08c phase gate alongside Obj 4 validation matrix). 9 sections per ADR template + decision matrix + cross-platform feasibility analysis.

### Obj 2 — macOS + Linux installer implementation

Build the installer for POSIX platforms (macOS Intel + Apple Silicon; Linux Ubuntu/Fedora/Arch). Likely shared bash code path OR shared compiled binary depending on ADR-012's choice. Functional scope:
- Clone `github.com/LatticeProtocol/adna.git` at v7.0 tag → `~/aDNA/.adna/`
- Copy `~/aDNA/.adna/how/templates/template_workspace_claude.md` → `~/aDNA/CLAUDE.md` with variable substitution ({{created_date}} = today; {{compute_tier}} = L0 default; {{adna_folder}} = `.adna`)
- Verify ADR-008 airlock dir present
- Verify ADR-009 naming on installer-created paths
- Idempotency check + clean abort with operator guidance for existing `~/aDNA/`
- Optional `--with-obsidian-setup` flag: runs `.adna/setup.sh` (existing macOS-centric script — extended in Obj 2 to support Linux if needed)
- Optional `--with-l1-preflight` flag: runs `.adna/prepare_for_onboarding.sh` (existing macOS-centric script — extended to support Linux if needed)
- Post-install summary: prints workspace path, next-step command (`cd ~/aDNA && claude`), version pair (Governance v7.0 + Standard v2.2), optional-features status.

### Obj 3 — Windows installer implementation

Build the installer for Windows (PowerShell 5.1+ or compiled binary path depending on ADR-012). Functional parity with Obj 2. Windows-specific considerations:
- Windows path separators (`\` vs `/`)
- PowerShell execution policy (RemoteSigned bypass via signed script + Set-ExecutionPolicy guidance)
- Windows-friendly default install location (`%USERPROFILE%\lattice\` instead of `~/aDNA/`)
- Windows line-ending handling (`.gitattributes` respect; CRLF vs LF on workspace `CLAUDE.md`)
- Obsidian setup on Windows (Obsidian plugin paths differ)
- L1 pre-flight on Windows (out of scope — L1 stays macOS/Linux-only per current `prepare_for_onboarding.sh` scope; M08c Obj 3 may revisit)

### Obj 4 — Cross-platform validation matrix

End-to-end validation: **3 platforms × 2 install modes (fresh + idempotent re-run abort)** = 6 baseline test cases. Plus acceptance tests:
- ADR-006 conformance: installer clones lowercase `adna` URL slug + pins v7.0 tag
- ADR-007 conformance: workspace `CLAUDE.md` is a copy with substituted variables, not a symlink
- ADR-008 conformance: airlock dir present at `.adna/how/airlock/AIRLOCK.md`
- ADR-009 conformance: directory naming (`~/aDNA/` matches convention; `.adna/` is grandfathered)
- Workspace `CLAUDE.md` variable resolution: zero residual `{{` matches
- `.adna/` post-flatten structure check: all expected directories present (`what/`, `how/`, `who/`, `airlock/`, etc.)
- Operator next-step prompt clarity: post-install message is unambiguous

Output: `m08c_validation_matrix.md` (per-test-case pass/fail + screenshots/logs). 12+ acceptance criteria boxes.

### Obj 5 — Distribution + documentation

Ship the installer:
- Stable distribution URL per ADR-012 (GitHub release asset OR `adna-docs.vercel.app/install` OR Homebrew tap)
- Update `adna/README.md` v7.0+ "Getting Started" section to invoke the new installer instead of the bare git-clone pattern. Include fallback for offline/air-gapped operators (the manual install path still works; installer is convenience).
- Docs-site page at `adna-docs.vercel.app/install` (Operation Rosetta Phase 8 collaboration; M08c authors prose draft for Op Rosetta Phase 8 MDX rendering)
- CHANGELOG entry for installer landing (Governance v7.0.1 or v7.1 depending on ADR-011 ratification)
- M08b receipt of M08c readiness (cross-link in M08b mission file if M08b is still open; otherwise standalone note)
- Cross-link in finalized M01 Obj 8 upgrade guide §10 channels-table (new row for installer URL)

### Obj 6 — Mission close + AAR + handoff to M09

Per Standing Order #5: lightweight AAR + mission status flip + campaign master row flip + STATE.md update. Mission AAR captures:
- Cross-platform implementation lessons (which approach worked; what required platform-specific code paths)
- ADR-012 ratification outcome
- Validation matrix verdict
- Operator-readiness signal: installer ready for general public adoption
- Handoff: M09 (token audit) opens; M08c does not block M09 (independent).

---

## Inputs forecast (will be tightened at mission open)

| Input | Source mission/artifact | Use |
|---|---|---|
| Post-v7.0 `.adna/` target structure | M03 outputs (`mission_adna_infra_p1_03_repo_flatten`) | Obj 2/3 — installer creates this structure |
| Workspace CLAUDE.md template | M03 / ADR-007 (`.adna/how/templates/template_workspace_claude.md`) | Obj 2/3 — installer copies + substitutes 3 variables |
| Optional `node.aDNA/` opt-in path | M04 outputs (`mission_adna_infra_p1_04_node_adna_bootstrap`) | Obj 2/3 — installer offers as opt-in; default skip |
| Per-vault publish guidance | M05 outputs (`mission_adna_infra_p2_05_publish_skill_rewrite`) | Obj 5 — post-install operator points at `skill_git_remote_setup` |
| v7.0 tag URL | M06 outputs (`mission_adna_infra_p2_06_github_minimalism_v7_tag`) | Obj 2/3 — installer pins clone to v7.0 not main |
| Finalized naming + workspace router | M07 outputs (`mission_adna_infra_p3_07_repo_review_simplify`) | Obj 2/3 — installer copies canonical form |
| Propagation confirmation | M08b outputs (`mission_adna_infra_p3_08b_post_flatten_propagation_receipts`) | Obj 5 — operator confidence signal that installer can ship |
| `template_workspace_claude.md` template | M03 / ADR-007 | Obj 2/3 — variable substitution source |
| `setup.sh` (Obsidian plugins) | `adna/.adna/setup.sh` (existing) | Obj 2/3 — optional `--with-obsidian-setup` flag wraps it |
| `prepare_for_onboarding.sh` (L1 pre-flight) | `adna/.adna/prepare_for_onboarding.sh` (existing) | Obj 2/3 — optional `--with-l1-preflight` flag wraps it (macOS/Linux only initially) |
| Finalized M01 Obj 8 upgrade guide | M08a outputs (`m01_obj8_upgrade_guide_v6_to_v7.md`) | Obj 5 — cross-link installer URL in §10 channels table |
| ADRs 006/007/008/009/011 | various | Obj 1/2/3/4 — conformance constraints |

---

## Deliverables (stub — populated at mission open)

| # | Deliverable | Obj | Artifact path (forecast) |
|---|---|---|---|
| 1 | ADR-012 (installer packaging + distribution) | 1 | `what/decisions/adr_012_installer_packaging_distribution.md` |
| 2 | macOS + Linux installer (script or binary) | 2 | path determined by ADR-012 (e.g., `adna/install.sh` or `adna/install` binary) |
| 3 | Windows installer (script or binary) | 3 | path determined by ADR-012 (e.g., `adna/install.ps1` or `adna/install.exe`) |
| 4 | Cross-platform validation matrix | 4 | `missions/artifacts/m08c_validation_matrix.md` |
| 5 | Updated `adna/README.md` Getting Started section | 5 | `adna/README.md` (in-place edit) |
| 6 | Docs-site `install` page (prose draft) | 5 | `missions/artifacts/m08c_docs_site_install_page_draft.md` (Op Rosetta Phase 8 renders MDX) |
| 7 | CHANGELOG entry | 5 | `adna/CHANGELOG.md` (in-place edit) |
| 8 | Mission AAR | 6 | `missions/artifacts/aar_m08c_standalone_installer.md` |

**Total: ~8 deliverables forecast.** Estimated 2-4 sessions: Session 1 (Obj 1 design + ADR-012); Session 2 (Obj 2 macOS+Linux impl); Session 3 (Obj 3 Windows impl + Obj 4 validation matrix start); Session 4 (Obj 4 validation matrix close + Obj 5 distribution+docs + Obj 6 mission close + AAR). Recalibrated at mission open against M01 Obj 9 token-measurement protocol findings (M09 may run before M08c if operator chooses).

---

## Acceptance criteria (stub — populated at mission open)

Forecast checklist (~12-15 boxes at mission open):

- [ ] ADR-012 drafted (status: proposed) and ratified at M08c phase gate
- [ ] macOS installer runs cleanly on Intel + Apple Silicon; creates valid `~/aDNA/` workspace
- [ ] Linux installer runs cleanly on Ubuntu 22.04 + Fedora 39 + Arch; creates valid `~/aDNA/` workspace
- [ ] Windows installer runs cleanly on Windows 10/11 with PowerShell 5.1+; creates valid `%USERPROFILE%\lattice\` workspace
- [ ] Workspace `CLAUDE.md` variable substitution: zero residual `{{` matches on any platform
- [ ] `.adna/` clone pinned to v7.0 tag (not main/master); ADR-006 conformance verified
- [ ] `.adna/how/airlock/AIRLOCK.md` present post-clone; ADR-008 conformance verified
- [ ] Idempotent re-run on existing `~/aDNA/` aborts cleanly with operator guidance on all 3 platforms
- [ ] Optional `--with-obsidian-setup` flag works on macOS + Linux (Obj 3 may extend Windows)
- [ ] Optional `--with-l1-preflight` flag works on macOS + Linux (Windows out of scope for M08c L1 path)
- [ ] No telemetry; no analytics; no network calls beyond git clone + (optional) GitHub release asset fetch
- [ ] `adna/README.md` Getting Started section updated to invoke installer; manual install path documented as fallback
- [ ] Docs-site `install` page authored (prose draft); Op Rosetta Phase 8 MDX handoff cross-linked
- [ ] CHANGELOG entry landed for installer
- [ ] M08b cross-referenced (or standalone note if M08b already closed)
- [ ] Mission AAR landed in lightweight format (Standing Order #5)
- [ ] Mission file frontmatter `status: planned → in_progress → completed`
- [ ] Campaign master M08c row flipped `next → completed`; M09 row noted as next
- [ ] STATE.md Last Session block + Next Session Prompt updated for M09 opening
- [ ] No mutation of M08a outputs (mission file, AAR, coord memos, finalized upgrade guide, public-announcement drafts); no partner-vault mutation

---

## Cross-references

- [[../campaign_adna_v2_infrastructure.md|Campaign master]] — mission tree; M08c row (added by Campaign Amendment Session 2026-05-11)
- [[mission_adna_infra_p1_02_ecosystem_matrix.md|M02 mission spec]] — stub-pattern precedent (M02 was stub at P0→P1 gate; expanded at first execution session)
- [[mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos.md|M08a mission spec]] — predecessor (M08a authored the upgrade guide installer documents; finalized guide is M08c input)
- [[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|M01 Obj 8 finalized upgrade guide]] — Obj 5 input (cross-link installer URL in §10)
- [[artifacts/aar_m01_planning.md|M01 AAR]] — extended-findings style precedent (M08c AAR will inherit this pattern since cross-platform implementation likely warrants extended findings)
- [[artifacts/m01_amendment_log.md|M01 amendment log]] — Campaign Amendment Session precedent
- [[../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] — installer clones lowercase `adna` slug at v7.0 tag
- [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] — installer copies template_workspace_claude.md to ~/aDNA/CLAUDE.md (no symlink)
- ADR-008 (drafted at M03) — installer verifies airlock template stub present
- [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] — installer honors naming convention; template repo grandfathered exception
- ADR-011 (forecast at M06) — installer respects semver two-track Major.Minor policy
- ADR-012 (drafted by M08c Obj 1) — installer packaging + distribution choice
- `adna/README.md` — Getting Started section updated by Obj 5
- `adna/.adna/setup.sh` — Obsidian plugin installer wrapped by `--with-obsidian-setup` flag
- `adna/.adna/prepare_for_onboarding.sh` — L1 pre-flight wrapped by `--with-l1-preflight` flag
- [[../../../STATE.md|STATE.md]] — operational snapshot (sequencing marker includes M08c at end of P3)
- [[../../../how/templates/template_aar_lightweight.md|template_aar_lightweight.md]] — Obj 6 AAR format
- `campaign_adna_v3_ecosystem_compliance/missions/m05_ec_*.md` (not yet opened) — v3-EC `M05-EC` (ecosystem-wide airlock adoption) may reference M08c installer in operator-facing communication; v3-EC does NOT own or modify the installer

---

## Status

**Mission planned.** Stub authored at Campaign Amendment Session 2026-05-11
(`session_stanley_20260511_064447_adna_v2_m08c_amendment`). Frontmatter
`spec_completeness: stub`; `status: planned`. Full Read/Produce blocks + Deliverables
table + Acceptance criteria boxes authored at mission open per the M02 first-execution
-session pattern.

Opens at **M08b close handoff** — after post-flatten propagation receipts confirm
ecosystem stability across the ~17 active vaults. M03 (repo flatten) → M04 (`node.aDNA/`
bootstrap) → M05 (publish-skill rewrite) → M06 (GitHub minimalism + Governance v7.0 tag)
→ M07 (general review + simplify) → M08b (post-flatten propagation receipts) → **M08c
(this mission)** → M09 (token audit) → M10 (LatticeScope planning) → M11 (final review).

**Self-reference (Standing Order #2)**: M08c is the campaign's empirical closing-evidence
that v7.0 works for cold-start operators. M01 (planning) + M02 (verification) + M08a
(authoring) + M03–M07/M08b (governance/structure/propagation) together produce the v7.0
template; M08c demonstrates the template's greenfield-bootstrap path is reproducible
across 3 platforms × 2 install modes. The mission's success criterion (validation matrix
all-PASS) is the campaign's success criterion writ small — the standard works, and
operators can adopt it without prior aDNA expertise.

**Cross-references** (sources for the v6.0 install pattern this mission supersedes):
- `adna/README.md` lines 28-40: current `git clone + cd + claude` pattern (works for v6.0; insufficient for v7.0)
- `adna/.adna/what/docs/templates/workspace_claude_md.template`: pre-authored template with 3 variables (post-M03/ADR-007 → `template_workspace_claude.md` at `.adna/how/templates/`)
- M01 Obj 2 migration runbook §3: fresh-bootstrap path (the manual procedure M08c automates)
- M01 Obj 8 finalized upgrade guide §2: repo flatten breaking change (existing operators use `skill_workspace_upgrade`, not M08c installer)
