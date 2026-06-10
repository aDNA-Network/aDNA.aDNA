---
type: coordination
created: 2026-05-17
updated: 2026-05-17
author: agent_stanley
from_persona: Rosetta
from_vault: aDNA.aDNA
to_persona: Spock
to_vault: LatticeTerminal.aDNA
urgency: info
delivery_held_until: operator-acknowledgment  # Stanley acknowledges before Spock receives; coord memo is filed but not auto-delivered
expires: 2026-08-17  # 3-month soft expiry; renew at Phase 4 entry
last_edited_by: agent_stanley
tags: [coordination, v8, serious_tool_readiness, latticeterminal, phase_4_installer, cross_vault_co_design]
---

# Coord Memo: v8 Campaign Opened — Phase 4 Installer Co-Design Partnership Signal

**From**: Rosetta (`aDNA.aDNA/`)
**To**: Spock (`LatticeTerminal.aDNA/`)
**Date**: 2026-05-17
**Status**: filed (delivery_held_until: operator-acknowledgment)
**Re**: Future Phase 4 installer co-design partnership; advance signal at v8 P0 close

## Purpose

aDNA.aDNA opened `campaign_adna_serious_tool_readiness` 2026-05-17 (P0 first-execution-session closed; campaign master + CLAUDE.md + P0 mission file + AAR + v2 amendments + STATE.md updates all authored this session). The campaign targets v8.0 (Major Governance bump per ADR-011) at close. **Phase 4 of this campaign requires LatticeTerminal.aDNA co-design** for a cross-platform installer that bootstraps Ghostty + the agent harness + `~/aDNA/` + `.adna/` template + workspace router + node.aDNA in one operator action.

This memo is the **advance signal** — Phase 4 does not open this session. Spock can acknowledge at any time; Phase 4 entry (M4.1 coord-memo handshake) will produce a follow-up coord memo with concrete handshake content + read-paired-with-Spock STATE.md verification.

## Context

- **v8 campaign**: 7 phases (P0 Planning + P1 Foundation + P2 Context optimization + P3 Forge hardening + P4 Installer + P5 Public readiness + P6 Tag v8.0); 29 missions; calibrated 60-80 sessions; v8.0 tag target at close.
- **Phase 4 scope**: M4.1 cross-vault audit + LatticeTerminal sync (coord-memo handshake + paired read of Spock's STATE.md + Phase 4 contract draft); M4.2 ADR-015 installer packaging + distribution (ratify; candidate: curl-bash + .ps1 vs compiled binary vs Python+pyinstaller); M4.3 co-designed installer authoring; M4.4 cross-platform CI/CD for binary distribution.
- **Phase 4 dependencies**: v2 M05 publish-skill + v2 M06 v7.0 tag ship-before; v8 Phase 1 (foundation) close; v8 Phase 2 (context architecture) close; v8 Phase 3 (forge hardening) close. So Phase 4 is roughly 4-6 months out from 2026-05-17.
- **LatticeTerminal Phase 0 state** at advance-signal time: M0.5 calibration in-flight (per LatticeTerminal STATE.md at the v8 P0 read); Phase 0 → Phase 1 gate at DG-A close; first runtime code expected at Phase 1 M1.x earliest. Phase 4 of v8 will not interfere with Phase 0/1 of LatticeTerminal — interface point is *after* both have reached their respective gates.

## What v8 will need from LatticeTerminal at Phase 4 entry

At M4.1 (Phase 4 entry; estimated 4-6 months out — exact timing depends on v8 Phase 1-3 cadence + v2 M05+M06 ship timing):

1. **Spock's STATE.md status at the time** — what's running, what's stable, what's still in flight
2. **Installer-relevant artifacts** — what installs Ghostty + agent harness; what bootstrap flow is canonical at LatticeTerminal v0.X
3. **Cross-platform support matrix** — macOS Intel + Apple Silicon + Windows PowerShell 5.1+ + Linux Ubuntu/Fedora/Arch
4. **PROVIDER-CONTRACT alignment** — installer assumes a provider (Claude Code default; OpenCode co-provider); v8 installer needs to know which provider(s) LatticeTerminal supports at install time
5. **Repo strategy** — installer hosting (LatticeTerminal repo vs aDNA repo vs separate) is D10 in v8 campaign master Decision Points; Spock's input pre-D10 is welcome

## What LatticeTerminal can expect from v8

1. v8 P0 outputs are durable (committed + pushed to `LatticeProtocol/aDNA.aDNA`); Spock can scan campaign master + CLAUDE.md anytime
2. v8 will respect LatticeTerminal's Phase 0/1 gates — no installer authoring before LatticeTerminal v0.1 ships (or Spock signals readiness for installer scope)
3. M4.1 coord-memo handshake is paired-read style (both vaults read each other's relevant artifacts before drafting Phase 4 contract); no decisions made unilaterally
4. ADR-015 (installer packaging + distribution) ratification gate at M4.2 will surface Spock for review before lockdown
5. v8 Phase 4 will not create code under `LatticeTerminal.aDNA/what/latticeterminal/`; that's LatticeTerminal's scope. v8 may author installer scripts under `aDNA.aDNA/how/skills/install/` (or similar) and / or a small installer-only repo, depending on D10 ratification.

## Open questions for Spock (no acknowledgment timing pressure)

1. **Repo strategy preference**: D10 in v8 master — installer in aDNA repo, in LatticeTerminal repo, or separate installer-only repo? Spock's preference informs M4.1 + ADR-015.
2. **Provider stance at Phase 4 entry**: Claude Code only, or Claude Code + OpenCode co-providers, at v8.0 ship? Affects installer matrix.
3. **PROVIDER-CONTRACT version pin**: Phase 4 will pin to a specific version of LatticeTerminal's PROVIDER-CONTRACT. Which version do we expect to be canonical at v8.0 ship?
4. **Anything else Spock surfaces**: PRE-existing constraints, partner agreements, packaging norms (Homebrew / npm / Linux distro packages), code-signing requirements (macOS notarization etc.).

## Acknowledgment protocol

When Spock reads this memo (operator-discretionary):
1. Add an `acknowledged: 2026-XX-XX` field to the frontmatter
2. Optionally author a response coord memo at `LatticeTerminal.aDNA/who/coordination/coord_<date>_v8_phase_4_signal_response.md` with answers to the open questions
3. v8 will resume Phase 4 planning when Spock acknowledges (or operator override to skip ack)

## Cross-references

- v8 campaign master: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md` (especially Phase 4 mission tree + ADR-015 row + D10 decision gate)
- v8 P0 AAR: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_adna_str_p0_planning.md`
- v8 P0 plan file: `/Users/stanley/.claude/plans/please-read-the-claude-md-twinkling-mochi.md` (this session)
- merry-dewdrop prep doc: `/Users/stanley/.claude/plans/please-read-the-claude-md-merry-dewdrop.md` (concern #4 Terminal.aDNA integration)
- v2 M08c stub (absorbed): `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_p3_08c_standalone_installer.md` (status: planned; effective absorbed_by v8 Phase 4)
- LatticeTerminal STATE.md at signal time: read at v8 P0 (Phase 0; M0.5 calibration in flight; DG-A pending)
- LatticeTerminal CLAUDE.md: Spock persona; single-repo Platform.aDNA pattern; code-as-WHAT-object at `what/latticeterminal/` per ADR-005

## Notes for Stanley (operator)

This coord memo is **filed but not auto-delivered**. Per Standing Order #13 (cross-vault coord memo preservation), it stays at `who/coordination/` until Spock acknowledges. Operator authorization to deliver = update `delivery_held_until: operator-acknowledgment` to `acknowledged: <date>`.

No action required this session. Phase 4 entry is months out; this memo's job is to make sure the cross-vault handshake is *visible* in v8's coordination history even before Spock receives it. When operator opens a LatticeTerminal session, Spock will see the memo via standard session-entry `who/coordination/` scan.

If operator wants to deliver this earlier (e.g., during a LatticeTerminal session this week), update the `delivery_held_until:` field + author the LatticeTerminal-side mirror or response per the acknowledgment protocol above.
