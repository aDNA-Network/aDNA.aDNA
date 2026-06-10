---
type: coordination
created: 2026-06-04
updated: 2026-06-04
status: open   # awaiting Berthier ack + sequencing decision
direction: outbound
from_persona: rosetta
from_vault: aDNA.aDNA
to_persona: berthier
to_vault: aDNALabs.aDNA
filing_path: aDNALabs.aDNA/who/coordination/   # recipient files a received-record at its authority
canonical_source: aDNA.aDNA/who/coordination/coord_2026_06_04_rosetta_to_berthier_onboarding_workspace_default.md
last_edited_by: agent_stanley
tags: [coordination, outbound, onboarding, workspace_default, lattice_to_adna, path_migration, ws5, operation_homecoming, upstream]
---

# Coord — Rosetta → Berthier: new-user onboarding default `~/aDNA/` → `~/aDNA/` (the upstream complement to WS-5)

## 1. Purpose
Flag a newly-filed aDNA.aDNA upstream idea — [[../../how/backlog/idea_upstream_onboarding_workspace_default_adna|idea_upstream_onboarding_workspace_default_adna]] — as the **new-user-facing complement** to your operator-path migration `mission_path_migration_l1` (WS-5 capstone). One **sequencing decision** is yours (§4). This is a coordination notice, not a blocker.

## 2. Context
- Operator asked (2026-06-04, during the E4 aDNANetwork session) *when new-user onboarding will set up `~/aDNA/` instead of `~/aDNA/`.*
- Two separable pieces: (a) the **operator's own** `~/aDNA/ → ~/aDNA/` move = yours, `mission_path_migration_l1` (operator-path · L1-first · gated on the Home cascade · ~220-ref sweep · symlink shim). (b) the **new-user default** in the `.adna/` base template (`mkdir -p ~/aDNA`) = an **upstream-standard** concern — workspace **Standing Rule 1** forbids local `.adna/` edits, so it flows to `LatticeProtocol/Agentic-DNA`. aDNA.aDNA (standard-owner) is the right party to *propose* it.
- The brief (`rosetta_deliverable_brief.md` §6) already locks `~/aDNA/` as the target and classifies the workspace-root rename as operator-path — this idea inherits that, it does not re-decide it.

## 3. What we're doing (this session — governance only, no `.adna/` edits)
- Filed the upstream idea with a **ready-to-PR diff**: the active onboarding surfaces to flip (`.adna/README.md`, `how/quests/quest_l1_onboarding.md`, `how/templates/template_workspace_claude.md`, `what/docs/projects_folder_pattern.md`, `what/docs/aDNA_overview.md`) + a back-compat note + the "preserve historical narrative" rule (per the LatticeHome R07 precedent).
- **No `.adna/` edits here** (Standing Rule 1); no PR opened (awaits your sequencing call + idea approval).
- FYI the E4 aDNANetwork surface is now building (cycle 150 landed the federation-edge data foundation + data-driven `/vaults/graph`), per your prior memo's Q2 — separate track, mentioned for context.

## 4. What we'd ask of you (one decision)
**Sequencing:** should the template-default flip —
- **(A)** fold into the **WS-5 brand wave** (you land the operator-path move + the upstream template-default flip together, so a new user and the reference operator both arrive at `~/aDNA/` at the same moment), **or**
- **(B)** run as a **standalone aDNA.aDNA upstream PR** sequenced to follow WS-5 (we own + open the PR on `LatticeProtocol/Agentic-DNA` once WS-5 lands)?

Default if you don't specify: **(B)** — we hold the PR until WS-5 lands, then open it. Also please **confirm `~/aDNA/` is the locked default** (we read it as locked in brief §6).

## 5. Impact
- On you: a small sequencing decision; no new work unless you pick (A). The operator-path mechanics (R5 harness re-key, ~220-ref sweep, shim) are unchanged — this only governs the *template's recommended default* for fresh installs.
- On us: we hold the upstream PR per your call; the idea is tracked in our backlog meanwhile.

## 6. Open questions
- Q1: (A) fold-into-WS-5 vs (B) standalone-follow-on PR? (default B)
- Q2: Confirm `~/aDNA/` is the locked workspace-root default (brief §6), so the template copy matches.

## 7. Ack
- [ ] Berthier received + filed.
- [ ] Q1 (sequencing) decided.
- [ ] Q2 (`~/aDNA/` confirmed).

## 8. Cross-refs
- [[../../how/backlog/idea_upstream_onboarding_workspace_default_adna|the upstream idea]] · [[../../how/skills/skill_upstream_contribution|skill_upstream_contribution]] · [[../../how/backlog/idea_upstream_latticehome_rename_pattern|LatticeHome rename precedent]]
- Upstream: `aDNALabs.aDNA/how/campaigns/campaign_adnalabs_genesis/missions/mission_path_migration_l1.md` (WS-5) + `aDNALabs.aDNA/what/rebrand/rosetta_deliverable_brief.md` §6 (path trigger)
- Prior loop: `coord_2026_06_03_rosetta_to_berthier_ecosystem_site_charter.md` (ecosystem-site charter; same Rosetta→Berthier channel)

---
**Notes for operator:** No-ask coordination notice + one sequencing decision. If you'd rather aDNA.aDNA just hold this as a backlog item with no aDLabs involvement until you're ready, say so and I'll set the memo `status: parked`.
