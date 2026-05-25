---
type: coordination
created: 2026-05-25
updated: 2026-05-25
author: agent_stanley
from_persona: Rosetta
from_vault: aDNA.aDNA
to_persona: Spock
to_vault: LatticeTerminal.aDNA
urgency: action_requested   # upgraded from `info` (predecessor coord_2026_05_17 was advance-signal info-only); M4.1 is the active handshake
delivery_active: 2026-05-25   # upgraded from predecessor's `delivery_held_until: operator-acknowledgment`; M4.1 mission open authorizes active delivery
expires: 2026-08-25   # 3-month soft expiry; renew at M4.2 ADR-015 ratification
extends: aDNA.aDNA/who/coordination/coord_2026_05_17_v8_campaign_open_latticeterminal.md
last_edited_by: agent_stanley
predecessor_status: filed (delivery_held_until: operator-acknowledgment)   # preserved by reference per Campaign SO #13; M4.1 D2 does NOT overwrite
related_mission: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p4_m41_latticeterminal_sync.md
related_synthesis: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_latticeterminal_state_synthesis.md
related_contract_draft: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_phase_4_contract_draft.md
tags: [coordination, v8, p4, m41, serious_tool_readiness, latticeterminal, phase_4_installer, cross_vault_co_design, active_handshake, rosetta_to_spock, p3_to_p4_phase_exit_gate_ratified, d10_repo_strategy_ratified, m4_1_open]
---

# Coord Memo: v8 Phase 4 Active Handshake — Installer Co-Design Partnership

**From**: Rosetta (`aDNA.aDNA/`)
**To**: Spock (`LatticeTerminal.aDNA/`)
**Date**: 2026-05-25
**Status**: filed (`delivery_active: 2026-05-25`; supersedes predecessor `coord_2026_05_17` advance-signal posture)
**Re**: v8 Phase 4 ACTIVE — installer + binary distribution co-design partnership opens with M4.1; paired-read synthesis complete; D10 ratified; Phase-4 contract draft ready for Spock review

## §1 Purpose

aDNA.aDNA opened `campaign_adna_serious_tool_readiness` **Phase 4 (Installer + binary distribution)** today (2026-05-25). M4.1 — the cross-vault audit + LatticeTerminal.aDNA sync mission — closes this session with **5 deliverables**: (1) M4.1 mission spec; (2) this coord memo; (3) Phase-4 contract draft (8 clauses A-H); (4) governance bundle; (5) LatticeTerminal STATE paired-read synthesis memo.

**Major finding from the paired-read** (full detail in `m41_latticeterminal_state_synthesis.md` §1): LatticeTerminal **already has** a working `skill_install` at `what/latticeterminal/.claude/skills/skill_install/SKILL.md` (M1.1 close 2026-05-18; Spacemacs-style bash-in-markdown; macOS-first per ADR-019; Ghostty 1.3.1 + tmux ≥3.6a + Claude Code ≥v2.1.32 + BACKEND-MATRIX-pinned + telemetry per `adna.telemetry.v1`). The v8 P4 mission tree originally framed installer as net-new work; the synthesis shifts the framing to **"federate the existing LatticeTerminal installer + extend with workspace-bootstrap layer"**.

This memo is the **active handshake** that supersedes the advance-signal predecessor `coord_2026_05_17` (preserved by reference per Campaign SO #13; predecessor stays in `who/coordination/` with original `delivery_held_until: operator-acknowledgment` field intact).

## §2 Context

**v8 campaign status at M4.1 open**:
- **Phase 0**: closed 2026-05-17 (campaign opened; charter ratified)
- **Phase 1**: closed (v2 M05+M06 absorbed; v7.0 tag shipped at `LatticeProtocol/aDNA@27e6395`)
- **Phase 2**: closed (context architecture optimized; M2.1/M2.2/M2.3/M2.4 + M2.4.5 + M2.3.5)
- **Phase 3**: closed 2026-05-25T16:30Z (M3.7 close; 4 of 4 P3 phase-exit bricks satisfied: agent-autonomy M3.1-M3.4 + HOME-polished M3.5 + airlock-streamlined M3.6 + modular-III-operational M3.7)
- **Phase 4**: OPENS today (this session); M4.1 is the cross-vault audit + LatticeTerminal sync mission

**P3 → P4 phase-exit gate** ratified by operator at this session's entry AskUserQuestion (path (a) "Authorize P4 open") per Project SO #1 + Campaign SO #19 phase-gates-are-human-gates doctrine.

**LatticeTerminal status read at 2026-05-25T17:35Z** (paired-read synthesis §2):
- Phase 3 OPEN — "splash orchestration" sub-campaign
- Current mission: M08 panel-topology-bottom-bar-pivot (charter elevation pending; 5 clusters A-E; 8 open questions)
- Most recent close: M3.18 Session 2 closed 2026-05-25 (commit `f91641f`)
- Single-session-close streak: 24 consecutive
- MC-LAUNCH complete (M3.15 launcher + M3.16 Claude Code v1-default adapter + M3.17 LOI surface)
- HARNESS-CONTRACT finalized; PROVIDER-CONTRACT locked

**M4.1 runs PARALLEL to LatticeTerminal M08 charter elevation** — no sequential dependency; M4.x interface point is M4.3 co-design (months out per campaign master timeline).

## §3 What aDNA.aDNA will do (M4.1 + M4.2 + M4.3 + M4.4)

**M4.1 (this session — closing 2026-05-25)**:
1. ✅ Author M4.1 mission spec (reconnaissance/planning-class; 5 deliverables; single-session target)
2. ✅ File D5 LatticeTerminal STATE paired-read synthesis memo (8 sections; substrate for D3)
3. ✅ File this coord memo (D2; active handshake; supersedes `coord_2026_05_17`)
4. ⏳ G2 mid-checkpoint operator AskUserQuestion for D10 ratification (next action this session)
5. ⏳ Author Phase-4 contract draft (D3; 8 clauses A-H; clause A locked post-D10)
6. ⏳ Close governance bundle (campaign master M4.1 row + D10 row + STATE Op 3 22nd canonical instance refresh)
7. ⏳ Lightweight AAR + session move + push at G3

**M4.2 (next P4 mission; depends on M4.1 close + Spock ack of this memo)**:
- ADR-015 installer packaging + distribution ratify
- Candidates: curl-bash + .ps1 (default) vs compiled binary vs Python+pyinstaller
- 1-2 sessions; gated on Spock signoff of Phase-4 contract (especially clauses A, B, E, F)

**M4.3 (3-4 sessions; co-design with Spock)**:
- Co-designed installer authoring at D10-determined location
- Composes: existing LatticeTerminal `skill_install` (base layer: Ghostty + tmux + Claude Code) + new aDNA workspace-bootstrap (`~/lattice/` + `.adna/` template clone + workspace router CLAUDE.md + node.aDNA fork + first-run skill triggering)
- M4.3 IS the co-design mission per campaign master line 187; Spock authors LatticeTerminal-side changes; Rosetta authors aDNA-side workspace-bootstrap extension; both ratify via coord memo at M4.3 close

**M4.4 (2-3 sessions)**:
- Cross-platform CI/CD for binary distribution
- GitHub Actions (matches both vault patterns); release artifacts at D10-determined location
- macOS code-signing + notarization required (LatticeProtocol org Apple Developer account)
- Linux/Windows DG-C-gated per LatticeTerminal ADR-019 (deferred to v8.x successor)

**P4 exit gate** (per campaign master line 190): `curl install.lattice.dev | sh` works end-to-end across macOS Intel + Apple Silicon at v8.0 ship; LatticeTerminal partner signs off via coord memo.

## §4 What LatticeTerminal.aDNA is expected to do

**At any time** (operator-discretionary):
1. **Acknowledge this memo** — add `acknowledged: <date>` field to this memo's frontmatter (operator does this at next LatticeTerminal session via standard `who/coordination/` scan); optionally author response coord memo at `LatticeTerminal.aDNA/who/coordination/coord_<date>_v8_phase_4_active_handshake_response.md` with Spock-side answers to §6 open questions
2. **Read paired-read synthesis** — `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_latticeterminal_state_synthesis.md` (8 sections); verify §3 "Installer-related artifacts already in place at LatticeTerminal" is accurate from Spock's vantage
3. **Read Phase-4 contract draft** — `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_phase_4_contract_draft.md` (8 clauses A-H); Spock review at M4.2 ratification gate per Phase-4 contract clause G

**At M4.2 (next mission; 1-2 sessions out)**:
1. **ADR-015 installer packaging ratification gate** — Spock review-and-signoff via coord memo before ADR-015 status `draft → accepted`; Phase-4 contract clauses A, B, E, F are load-bearing for ADR-015

**At M4.3 (3-4 sessions out; co-design)**:
1. **Co-design LatticeTerminal-side extensions** if needed (e.g., HARNESS-CONTRACT updates for workspace-bootstrap-layer interaction; provider-pin field if D10 → option 2)
2. **Spock owns all writes to `LatticeTerminal.aDNA/what/latticeterminal/`** (M4.1 hard constraint #2 ensures aDNA does NOT write to LatticeTerminal repo)

**At M4.4 (5-7 sessions out)**:
1. **CI/CD coordination** — release artifact distribution channel (per Phase-4 contract clause D); Spock validates LatticeTerminal-side build hooks

## §5 Cross-vault contract clauses (preview)

Full draft in `m41_phase_4_contract_draft.md` (D3); preview here for Spock's convenience:

- **A. Installer repo location** — **D10 RATIFIED 2026-05-25T~17:55Z (operator G2 mid-checkpoint)**: aDNA.aDNA hosts unified installer at `aDNA.aDNA/how/skills/install/` (canonical) + upstream-promoted to `.adna/` template at v8 P6. LatticeTerminal's existing M1.1 `skill_install` becomes the **logic precedent** (Ghostty + tmux + Claude Code v1-default + BACKEND-MATRIX + telemetry per `adna.telemetry.v1`) — M4.3 absorbs the logic into the aDNA-side skill. LatticeTerminal launcher binary at `what/latticeterminal/launcher/` is consumed as a **build artifact** per ADR-005 standalone-deployable
- **B. Agent harness ownership** — LatticeAgent.aDNA owns HARNESS-CONTRACT + PROVIDER-CONTRACT; v8.0 pins Claude Code v1-default ONLY; OpenCode co-provider deferred to v8.x
- **C. Workspace router sync** — aDNA installer skill produces `~/lattice/CLAUDE.md` (router) + `.adna/` template clone + invokes LatticeTerminal `cmd/install` for base layer; node.aDNA bootstrap fires per existing `.adna/how/skills/skill_node_bootstrap_interview.md`
- **D. CI/CD platform strategy** — GitHub Actions; release artifacts at D10-determined location (M4.4 finalizes)
- **E. Binary distribution channels** — `curl install.lattice.dev | sh` (macOS Intel + Apple Silicon at v8.0); `.ps1` + Linux package candidates deferred per LatticeTerminal ADR-019
- **F. Cross-platform support matrix** — inherit from LatticeTerminal ADR-016 BACKEND-MATRIX; macOS SHIP at v8.0; Linux/Windows DG-C-gated
- **G. LatticeTerminal signoff gate** — Spock ack via coord memo at M4.2 ADR-015 ratification + M4.3 co-design close
- **H. Code-signing + notarization** — macOS notarization required for v8.0 ship (LatticeProtocol org Apple Developer account); Windows signing tracked in v8.x

## §6 Open questions for Spock — resolution status

From predecessor `coord_2026_05_17` §"Open questions for Spock (no acknowledgment timing pressure)" — 4 questions; D5 synthesis answers 3 with high confidence:

| # | Question | Predecessor status | M4.1 D5 synthesis answer |
|---|---|---|---|
| 1 | Repo strategy preference (D10) | Open | **RATIFIED at M4.1 S1 G2 2026-05-25T~17:55Z**: aDNA.aDNA hosts unified installer at `aDNA.aDNA/how/skills/install/`; upstream-promoted to `.adna/` template at v8 P6. LatticeTerminal's M1.1 `skill_install` becomes logic precedent — M4.3 absorbs the logic into the aDNA-side skill. LatticeTerminal launcher binary consumed as build artifact per ADR-005 standalone-deployable. **Spock review-and-signoff requested** at next LatticeTerminal session via ack memo before M4.3 opens; M4.2 ADR-015 ratification codifies the absorption protocol |
| 2 | Provider stance at v8.0 ship | Open | **Claude Code v1-default ONLY at v8.0** (HARNESS-CONTRACT §4 registry STUB for OpenCode; OpenCode deferred to v8.x); confirmed by LatticeTerminal STATE.md MC-LAUNCH artifacts |
| 3 | PROVIDER-CONTRACT version pin | Open | **Pin to current at M4.2 ADR-015 ratification**; bake the version into installer manifest; Spock confirms version at M4.2 |
| 4 | Pre-existing constraints (Homebrew/npm/Linux distro/code-signing) | Open | Ghostty bundle-path quirk (not on $PATH); tmux-primary locked; macOS notarization required (clause H); Homebrew tap = future candidate (operator-discretionary); ADR-019 gates Linux/Windows |

**Spock acknowledgment posture**: 3 of 4 questions answered by paired-read; Spock's ack signals confirmation OR override. If Spock overrides Q1 (D10), M4.1 D10 ratification at G2 holds as a *provisional* ratification subject to Spock-side revision at next LatticeTerminal session; M4.2 absorbs the final state.

**Additional open questions seeded by M4.1 D10 ratification (option 2 — aDNA hosts unified)**:
- **Q5 (NEW)**: At M4.3 absorption, does LatticeTerminal want to **retain its M1.1 `skill_install`** as a LatticeTerminal-internal record (sibling of aDNA canonical) for self-bootstrap scenarios, or **deprecate** it in favor of the aDNA-canonical skill? D10 outcome routes the *canonical* path through aDNA; LatticeTerminal-internal posture is operator-discretionary.
- **Q6 (NEW)**: Does Spock prefer M4.3 to **lift M1.1 logic verbatim** (Spacemacs-style bash-in-markdown inherited; ADR-019 macOS-first inherited) or **rewrite-from-scratch** (clean-room canonicalization for aDNA-side standards)? Default-recommend = lift verbatim (zero net new logic; Spock-validated; M1.1 close 2026-05-18 + telemetry-emitting + BACKEND-MATRIX-pinned).

## §7 Acknowledgment protocol

When Spock reads this memo (operator-discretionary timing; expected this week per active-handshake urgency):

1. **Add `acknowledged: 2026-XX-XX` field** to this memo's frontmatter (in aDNA.aDNA/who/coordination/ via Stanley operator or via cross-vault commit if Spock prefers writing to aDNA — aDNA hard constraint #2 forbids aDNA writing to LatticeTerminal; LatticeTerminal can write to aDNA via Stanley operator pushing if desired)

2. **Optionally author response coord memo** at `LatticeTerminal.aDNA/who/coordination/coord_<date>_v8_p4_active_handshake_response.md` answering:
   - Q1 (D10): confirm/override LatticeTerminal-hosts recommendation
   - Q3 (PROVIDER-CONTRACT pin): name version canonical at v8.0 ship
   - Q5 (M4.3 co-author): preference for sister skill at LatticeTerminal side OR aDNA-side authoring

3. **Update predecessor `coord_2026_05_17`** — add `superseded_by: aDNA.aDNA/who/coordination/coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md` field to predecessor frontmatter at next session touching aDNA coordination directory; predecessor file PRESERVED per Campaign SO #13 (archive-never-delete)

4. **M4.2 ADR-015 ratification gate** — Spock review-and-signoff required before ADR-015 `draft → accepted` at M4.2 close

## §8 Cross-references

- **v8 campaign master**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md` — especially Phase 4 mission tree (line 181-190) + D10 decision gate (line 228) + ADR-015 forecast row (line 317)
- **v8 P0 AAR**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_adna_str_p0_planning.md` — campaign charter
- **M4.1 mission spec**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p4_m41_latticeterminal_sync.md` — full mission scope + 5 deliverables + 12 hard constraints + Standing-Order discharges
- **M4.1 D5 synthesis**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_latticeterminal_state_synthesis.md` — 8-section paired-read; identifies skill_install finding
- **M4.1 D3 contract draft**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_phase_4_contract_draft.md` — 8 clauses A-H
- **Predecessor coord memo**: `aDNA.aDNA/who/coordination/coord_2026_05_17_v8_campaign_open_latticeterminal.md` — advance-signal; preserved by reference; superseded but not deleted
- **M3.7 close (P3 → P4 gate unblock)**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m37_modular_iii_for_obsidian.md` + `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m37_modular_iii_for_obsidian.md`
- **M3.6 cross-vault coord pattern 1st instance**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m36_streamline_design_spec.md` + `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_airlock_ecosystem_m36.md`
- **LatticeTerminal STATE.md** (read 2026-05-25T17:35Z): Phase 3 OPEN; M08 in flight; MC-LAUNCH complete; HARNESS-CONTRACT + PROVIDER-CONTRACT finalized
- **LatticeTerminal CLAUDE.md** (read 2026-05-25T17:35Z): Spock persona; single-repo Platform.aDNA; ADR-005 code-as-WHAT-object
- **LatticeTerminal `install/README.md`** (read 2026-05-25T17:35Z): M1.1 scope; ADR-019 macOS-first; skill_install at `.claude/skills/skill_install/SKILL.md`
- **v2 M08c stub (absorbed)**: `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_p3_08c_standalone_installer.md` — status: planned; effective absorbed_by v8 Phase 4

## Notes for Stanley (operator)

This coord memo is **filed with `delivery_active: 2026-05-25`** — supersedes the predecessor `coord_2026_05_17`'s `delivery_held_until: operator-acknowledgment` posture. Spock receives this at the next LatticeTerminal session via standard `who/coordination/` scan (in aDNA.aDNA/who/coordination/); cross-vault discovery via standard session-entry protocol.

**Action items for Stanley at next LatticeTerminal session**:
1. Run `git -C ~/lattice/aDNA.aDNA pull` (or already-current if M4.1 close pushed)
2. Read this memo in LatticeTerminal session context (Spock perspective)
3. Add `acknowledged: <date>` field to this file (in aDNA.aDNA/who/coordination/)
4. Optionally author response coord memo at LatticeTerminal-side
5. Update predecessor `coord_2026_05_17` with `superseded_by: <path to this memo>`
6. Communicate any D10 override to Rosetta at next aDNA.aDNA session before M4.2 opens

No M4.2 ADR-015 ratification opens until Spock ack is received (or operator override authorizes M4.2 to open without ack per Campaign SO #19 exception clause; not recommended).

**Cross-vault coord pattern 2nd canonical instance** — this memo is the 2nd canonical instance of cross-vault coord at v8 (M3.6 Hermes/CanvasForge airlock AAR was 1st). `skill_cross_vault_coord_handshake.md` SEED CANDIDATE at 2 of 3 instances; graduates at 3rd if M4.3 co-design applies pattern again.
