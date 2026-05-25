---
type: artifact
artifact_class: cross_vault_contract_draft
created: 2026-05-25
updated: 2026-05-25
mission: mission_adna_str_p4_m41_latticeterminal_sync
campaign: campaign_adna_serious_tool_readiness
phase: 4
mission_number: 4.1
session: session_stanley_20260525T173553Z_v8_m41_s1
persona: rosetta
last_edited_by: agent_stanley
status: draft
contract_parties:
  - vault: aDNA.aDNA
    persona: Rosetta
    role: workspace + canonical installer + governance
  - vault: LatticeTerminal.aDNA
    persona: Spock
    role: terminal substrate + launcher binary (build artifact) + M1.1 logic precedent
related_d10_ratification: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md#D10
related_synthesis: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_latticeterminal_state_synthesis.md
related_coord_memo: aDNA.aDNA/who/coordination/coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md
ratification_chain:
  - M4.1 close (this session) — Phase-4 contract draft filed; clauses A locked via D10; clauses B-H drafted
  - M4.2 — ADR-015 installer packaging ratification finalizes clauses A + B + E + F
  - M4.3 — co-design implementation finalizes clauses C + G
  - M4.4 — CI/CD finalizes clauses D + H
tags: [contract_draft, phase_4, m41, v8, p4, latticeterminal, spock, rosetta, installer_unified_at_adna, d10_ratified, adna_hosts_installer, latticeterminal_launcher_as_build_artifact, m1_1_logic_absorbed_at_m4_3, claude_code_v1_default_only_at_v8_0, opencode_deferred_to_v8_x, macos_first_at_v8_0_per_adr_019, linux_windows_dg_c_gated, github_actions_ci_cd, apple_developer_notarization_required]
---

# M4.1 D3 — Phase-4 Contract Draft

> Eight-clause contract specifying the installer + binary distribution co-design surface between `aDNA.aDNA` (Rosetta) and `LatticeTerminal.aDNA` (Spock) for the v8 campaign Phase 4. Clause A locked via D10 ratification at M4.1 S1 G2 2026-05-25T~17:55Z (operator G2 mid-checkpoint AskUserQuestion); clauses B-H drafted with `[STATUS]` flags routing finalization to M4.2 / M4.3 / M4.4. Filed at M4.1 close 2026-05-25.

## Preamble

- **Authorizing event**: P3 → P4 phase-exit gate ratified by operator at M4.1 S1 entry AskUserQuestion 2026-05-25T~17:30Z (path (a) "Authorize P4 open"). M3.7 close 2026-05-25T16:30Z satisfied 4 of 4 P3 phase-exit bricks → gate UNBLOCKED per Campaign SO #19.
- **Cross-vault scope**: aDNA.aDNA (Rosetta) and LatticeTerminal.aDNA (Spock) are the two contracting parties. III.aDNA + node.aDNA + 5 forge-vault wrappers + lattice-labs + LatticeAgent.aDNA are NOT direct parties to this contract (LatticeAgent.aDNA is referenced via HARNESS-CONTRACT + PROVIDER-CONTRACT inheritance but does not sign).
- **Verification surface**: agent (per ADR-014 Clause C); contract is governance + design artifact. M4.3 implementation introduces operator-side runtime verification.
- **Mutability**: clauses are `[STATUS: locked]` post-finalization at named ratification gate. Pre-finalization clauses can be amended at M4.x missions via amendments-table entries in campaign master.

## Clause A — Installer Repo Location

**[STATUS: LOCKED via D10 ratification M4.1 S1 G2 2026-05-25T~17:55Z]**

The canonical installer is hosted at **`aDNA.aDNA/how/skills/install/`** (single source of truth). The unified installer composes:

1. **Base layer** (Ghostty + tmux + Claude Code v1-default + telemetry per `adna.telemetry.v1`) — **logic precedent** is `LatticeTerminal.aDNA/what/latticeterminal/.claude/skills/skill_install/SKILL.md` (M1.1 close 2026-05-18; Spacemacs-style bash-in-markdown). M4.3 absorbs the M1.1 logic into the aDNA-side skill (default-recommend = lift verbatim per Q6 in coord memo §6).

2. **Workspace-bootstrap layer** (`~/lattice/` directory creation + `.adna/` template clone + workspace router `~/lattice/CLAUDE.md` + node.aDNA fork via `.adna/how/skills/skill_node_bootstrap_interview.md` + first-run skill triggering) — net-new at M4.3.

3. **Launcher binary** at `LatticeTerminal.aDNA/what/latticeterminal/launcher/` (standalone-deployable per ADR-005) — consumed as a **build artifact** by the unified installer; not re-authored at aDNA side.

**Upstream propagation at v8 P6**: the aDNA installer skill upstream-promotes to `.adna/how/skills/install/` template directory; new vaults forked from `.adna/` inherit the installer skill as part of the standard fork process. v8 P6 propagation queue grows by ~3-4 doctrinal additions (installer skill + workspace-bootstrap helpers + telemetry contract + build-artifact reference protocol).

**Spock review-and-signoff requested at next LatticeTerminal session** before M4.3 opens; operator-discretionary if Spock ack delays beyond M4.2 ratification window.

## Clause B — Agent Harness Ownership

**[STATUS: draft; finalize at M4.2 ADR-015 ratification]**

`LatticeAgent.aDNA` (Stanley persona) owns the **HARNESS-CONTRACT** (provider-side contract for harness composition) + **PROVIDER-CONTRACT** (provider-generic registry of supported harnesses). v8.0 ships with:

- **Claude Code v1-default** as the ONLY supported harness at v8.0 ship (HARNESS-CONTRACT §4 registry STUB for Claude Code per LatticeTerminal M3.16 close)
- **OpenCode co-provider deferred to v8.x successor** (HARNESS-CONTRACT §4 registry STUB for OpenCode; not load-bearing at v8.0)
- **LatticeAgent.aDNA Phase-6 integration deferred** (per LatticeTerminal STATE.md cross-reference)

The unified installer at Clause A invokes Claude Code installation via `npm i -g @anthropic-ai/claude-code` ≥ v2.1.32 (per LatticeTerminal M1.1 O4). PROVIDER-CONTRACT version pinned at M4.2 ADR-015 ratification (default-recommend = current at ratification timestamp; Spock confirms version per Q3 in coord memo §6).

## Clause C — Workspace Router Sync

**[STATUS: draft; finalize at M4.3 co-design]**

The unified installer at Clause A produces:

1. **`~/lattice/CLAUDE.md`** (workspace router) — created from `.adna/CLAUDE.md` template via standard fork process; operator-customizable post-install for site-specific routing (mirrors current `~/lattice/CLAUDE.md` shipping in this workspace as governance authority for routing).

2. **`~/lattice/.adna/`** — `git clone https://github.com/LatticeProtocol/adna ~/lattice/.adna` per existing standalone-clone discipline (post-M03 flatten); operator manual update via `git -C ~/lattice/.adna pull`.

3. **`~/lattice/node.aDNA/`** — fork via `.adna/how/skills/skill_node_bootstrap_interview.md` (19-question interview, ~4-7 min); operator-confirmable.

4. **First-run skill triggering** — workspace fresh-bootstrap path (post-flatten clone of `.adna/` → first `claude` invocation) per `~/lattice/CLAUDE.md` Project Discovery routing.

M4.3 co-design finalizes the orchestration sequence (base layer first → workspace-bootstrap layer second; or interleaved; or operator-choose). Default-recommend = sequential (base layer → workspace bootstrap → first-run triggering) per simplest dependency chain.

## Clause D — CI/CD Platform Strategy

**[STATUS: draft; finalize at M4.4 CI/CD]**

**GitHub Actions** is the canonical CI/CD platform (matches both vault patterns; LatticeTerminal already uses GitHub Actions for tests; aDNA already uses GitHub Pages for site deployment).

**Release artifact distribution**:
- **Primary**: GitHub Releases at `github.com/LatticeProtocol/aDNA.aDNA/releases` (aDNA repo; matches D10 outcome) — hosts the unified installer skill + launcher binary build artifacts + workspace-bootstrap helpers
- **Build artifact cross-reference**: GitHub Releases at `github.com/LatticeProtocol/LatticeTerminal.aDNA/releases` (LatticeTerminal repo) — hosts the launcher binary; aDNA installer fetches at install-time via signed URL or HTTPS-pinned hash
- **Build artifact integrity**: SHA-256 hash pinning per release; matches LatticeTerminal BACKEND-MATRIX integrity discipline (ADR-016)

**Versioning**: aDNA installer skill versioned per v8.0 (and v8.x successor cadence); LatticeTerminal launcher binary versioned per LatticeTerminal's own cadence (decoupled).

M4.4 finalizes the GitHub Actions workflow YAML + release-trigger discipline.

## Clause E — Binary Distribution Channels

**[STATUS: draft; finalize at M4.2 ADR-015 ratification]**

**v8.0 ship channels** (macOS-first per LatticeTerminal ADR-019):

1. **`curl install.lattice.dev | sh`** — primary entrypoint at v8.0 ship (macOS Intel + Apple Silicon); script downloads the unified installer skill markdown + executes Claude-Code-skill-style or bash-direct execution; defaults to interactive operator confirmation per each install step.

2. **DNS + hosting**: `install.lattice.dev` (subdomain of `lattice.dev` or alternate; M4.4 finalizes hosting platform — candidates: GitHub Pages with custom domain + Cloudflare CDN; alternate: dedicated S3+CloudFront; alternate: Vercel).

**v8.x successor channels** (DG-C-gated per LatticeTerminal ADR-019):

3. **`.ps1` Windows entrypoint** — `iwr install.lattice.dev/ps1 | iex` (PowerShell 5.1+); requires LatticeTerminal cross-OS DG-C close
4. **Homebrew tap** — `brew install lattice-protocol/lattice` candidate (operator-side ergonomic; not required at v8.0)
5. **Linux package candidates** — `.deb` / `.rpm` / Arch package via AUR; DG-C-gated; v8.x successor scope

## Clause F — Cross-Platform Support Matrix

**[STATUS: draft; finalize at M4.2 ADR-015 ratification]**

**Inherits from LatticeTerminal ADR-016 BACKEND-MATRIX**:

| Platform | Status at v8.0 ship | Source |
|---|---|---|
| macOS Intel | SHIP | LatticeTerminal BACKEND-MATRIX macOS SHIP cell + ADR-016 |
| macOS Apple Silicon | SHIP | LatticeTerminal BACKEND-MATRIX macOS SHIP cell + ADR-016 |
| Linux Ubuntu | DG-C-gated | LatticeTerminal ADR-019 §Cross-OS deferred workstream |
| Linux Fedora | DG-C-gated | LatticeTerminal ADR-019 |
| Linux Arch | DG-C-gated | LatticeTerminal ADR-019 |
| Windows (winghostty) | DG-C-gated | LatticeTerminal ADR-017 + ADR-019 |
| Windows (liamsmith86 fallback) | DG-C-gated | LatticeTerminal ADR-017 + ADR-019 |
| WSL2 | DG-C-gated | LatticeTerminal ADR-019 |

v8.0 ships **macOS-only**. Linux/Windows tracked in v8.x successor + ADR-019 DG-C-chartered deferred workstream.

## Clause G — LatticeTerminal Signoff Gate

**[STATUS: draft; finalize at M4.3 co-design close]**

**Spock signoff via coord memo** required at:

1. **M4.2 ADR-015 ratification gate** — Spock review-and-signoff before ADR-015 status `draft → accepted`; Phase-4 contract clauses A, B, E, F are load-bearing for ADR-015
2. **M4.3 co-design close** — Spock review-and-signoff of co-designed installer scripts (especially the M1.1 logic absorption verbatim/rewrite decision per Q6 in coord memo §6); Phase-4 contract clauses C + G load-bearing
3. **M4.4 CI/CD close** — Spock review-and-signoff of GitHub Actions workflow + release-trigger discipline (especially clauses D + H load-bearing for build-artifact integrity + code-signing)

**Spock ack protocol** (per coord memo §7): add `acknowledged: <date>` field to relevant coord memo at next LatticeTerminal session; optionally author response coord memo at LatticeTerminal-side; explicit operator-discretionary timing.

**Operator override per Campaign SO #19**: if Spock ack delays beyond M4.x ratification window, operator can authorize M4.x to advance without ack; not recommended; documented in campaign master amendments-table.

## Clause H — Code-Signing + Notarization

**[STATUS: draft; finalize at M4.4 CI/CD + ADR-015]**

**v8.0 ship requirements**:

1. **macOS code-signing** — required for v8.0 ship; signed by **LatticeProtocol org Apple Developer account** (M4.4 confirms account holder + signing identity); installer + launcher binary both signed
2. **macOS notarization** — required for v8.0 ship; notarized via Apple Notary Service; M4.4 GitHub Actions workflow handles via `notarytool` (or successor)
3. **Hash integrity** — SHA-256 hashes pinned per Clause D; verified by the curl-bash entrypoint at Clause E before execution

**v8.x successor requirements**:

4. **Windows signing** — required at Linux/Windows DG-C close; tracked in v8.x successor; OV or EV code-signing certificate (LatticeProtocol org) — operator-discretionary at DG-C
5. **Linux signing** — package-manager-specific (GPG-signed `.deb`/`.rpm` repository; AUR PGP-signed) — DG-C-gated

M4.4 GitHub Actions workflow YAML specifies signing + notarization automation; ADR-015 (M4.2) specifies high-level signing strategy.

## Notes

- **D10 outcome** (option 2 — aDNA hosts unified) is the **operator-ratified path**, NOT the D5 synthesis default-recommend (option 2 LatticeTerminal hosts was the synthesis recommendation; operator chose option 2 as named in the AskUserQuestion which was aDNA hosts unified — naming collision in this contract is resolved by D10 ratified outcome being authoritative; D5 synthesis recommendation is now historical reference).
- **M1.1 logic absorption at M4.3** — default-recommend = lift verbatim (per Q6 in coord memo §6); operator/Spock can override at M4.3 if clean-room rewrite is preferred
- **Workspace-bootstrap layer at M4.3** — net-new aDNA-side authoring; references existing `.adna/how/skills/skill_node_bootstrap_interview.md` (operator-side); composes `.adna/CLAUDE.md` template-fork discipline
- **v8 P6 propagation queue grows by ~3-4 doctrinal additions at M4.1 close**: installer skill + workspace-bootstrap helpers + telemetry contract reference + build-artifact protocol; v8 P6 owns upstream cycle
- **ADR-015 (M4.2)** ratifies the installer packaging architecture detail; this contract specifies the cross-vault surface; ADR-015 specifies the implementation contract
- **No additional ADRs at M4.1** per Campaign SO #14 default (in-phase exception not triggered; Phase-4 contract is design-spec-equivalent governance artifact)
- **Cross-vault coord pattern 2nd canonical instance** — M3.6 was 1st (Hermes/CanvasForge); M4.1 is 2nd (Spock/LatticeTerminal); `skill_cross_vault_coord_handshake.md` SEED CANDIDATE at 2 of 3 instances

---

**Contract draft status**: filed at M4.1 close 2026-05-25; clause A LOCKED; clauses B-H DRAFT; finalization routed via ratification_chain frontmatter field to M4.2 / M4.3 / M4.4.
