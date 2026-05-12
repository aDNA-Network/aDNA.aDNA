---
type: mission
mission_id: mission_adna_infra_p1_04b_workspace_ux_planning
campaign: campaign_adna_v2_infrastructure
campaign_phase: 1
status: completed
mission_class: planning  # M04b is a planning mission whose output IS the side-campaign master+tree (precedent: M01 within v2 for v2 itself); single-session-execution viable per M02 precedent
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_stanley
opened_at: 2026-05-12T20:04:14Z  # M04 closed 2026-05-12T01:33Z+; M04b opened at operator discretion via session_stanley_20260512_200414_adna_v2_m04b_s1 (operator chose "Open M04b now" via plan-mode AskUserQuestion)
opens_session: session_stanley_20260512_200414_adna_v2_m04b_s1  # first execution session ID
closed_at: 2026-05-12T20:27:24Z
closed_session: session_stanley_20260512_200414_adna_v2_m04b_s1  # closed same session — single-session execution
sessions_actual: 1  # single-session execution: D1-D5 defaults accepted in one AskUserQuestion + 5 objectives + 7 deliverables landed sequentially
spec_completeness: complete  # mid at session start, complete at mission close per first-execution-session pattern
estimated_sessions: 1-2  # estimate 1-2; actual 1 (lower bound)
prerequisite_missions:
  - mission_adna_infra_p1_04_node_adna_bootstrap  # M04 produced the node.aDNA/ baseline that M04b reviews + extends
prerequisite_adrs:
  - adr_004_campaign_home_stays_in_adna_adna  # accepted; campaign-home discipline
  - adr_005_three_way_vault_boundary  # accepted; node.aDNA / aDNA.aDNA / lattice-labs scope distinctions
  - adr_006_github_repo_rename_to_adna  # accepted; lowercase URL slug
  - adr_007_outer_adna_claude_md_disposition  # accepted; template_workspace_claude.md disposition
  - adr_008_airlock_template_stub  # accepted; airlock pattern at template level
  - adr_009_aDNA_naming_convention  # accepted; <name>.aDNA convention
ships_to: campaign_lattice_workspace_ux  # M04b's output IS this side-campaign's full mission tree + master file
blocks: [mission_adna_infra_p2_05_publish_skill_rewrite]  # M05 deferred until mini-campaign (campaign_lattice_workspace_ux) closes
side_campaign: campaign_lattice_workspace_ux  # the side-campaign M04b populates
external_dependencies:
  - node.aDNA/ at M04 baseline (audit target — design-only this mission; mini-campaign Mxx will mutate it)
  - ~/lattice/ workspace (design target for Obsidian vault setup; mini-campaign Mxx will create .obsidian/)
  - ~/lattice/.adna/ upstream template (potential upstream-contribution target if D5 resolves "yes" for any artifact; mini-campaign decides per-design)
  - Obsidian (target IDE for the workspace-vault UX; spec references but does not invoke)
  - LP context-graph registry/marketplace (web destination; M04b designs the link target — could be web page or future Obsidian extension)
tags: [mission, planned, adna, infrastructure, p1, m04b, v7_0, workspace_ux, dynamic_bootstrap, obsidian_vault, planning_class, side_campaign_seed, lattice_workspace_ux]
---

# Mission — M04b: Workspace UX Planning (Dynamic node.aDNA Bootstrap + ~/lattice/ Obsidian Vault)

**Phase**: P1 — Ecosystem mapping + upgrade guide + repo flatten + node vault. M04b
follows M04's node.aDNA bootstrap with a planning pass that reviews M04 outputs against
the intended dynamic-interview UX and designs the workspace-level Obsidian vault layer.

**Class**: planning. M04b's output is a side-campaign master + mission tree, not direct
artifact production. Precedent: M01 within v2 (planned v2's mission tree before
execution); M04b plays the same role for `campaign_lattice_workspace_ux`.

> **Spec stub authored** at Campaign Amendment Session 2026-05-12
> (`session_stanley_20260512_185037_adna_v2_m04b_amendment`). Frontmatter
> `spec_completeness: stub`; `status: planned`. Full Read/Produce blocks + Deliverables
> table + Acceptance criteria boxes authored at mission open per the M02 first-execution
> -session pattern. Opens at operator discretion (M04 close has cleared the prerequisite).

---

## Strategic Intent

M04's node.aDNA bootstrap landed at 42/50 PASS (exact match to prediction) but was
**agent-assisted-but-mostly-static**: operator decisions B/A/A/A/A were applied at S2
entry per the M01 Obj 3 design; `skill_inventory_refresh.md` auto-detected the 8 tool
versions + 21 vault + 11 named-project inventory; the rest of the vault contents
(governance files, FAIR block, federation block, persona spec) was authored verbatim
from the M01 Obj 3 design source. The intended UX — what M04 was supposed to feel like
when a real operator triggers Step 0.3 of the workspace router — is a **dynamic
interview-driven bootstrap**: agent asks the operator about purpose, user-info, stack,
hardware, and desired lattice connections, then populates the new vault from a hybrid
of auto-detection + interview answers.

Separately, `~/lattice/` itself is not currently an Obsidian vault (verified absent
`.obsidian/` at `/Users/stanley/lattice/`). The operator wants minimal Obsidian
configuration at the workspace root so they can open `~/lattice/` as a vault and use
the UI + integrated terminal to manage the full context lattice — including a home page
gallery of context graphs (reading from `node.aDNA/what/inventory/inventory_vaults.yaml`
as the source of truth) + a link to the LP registry/marketplace (web page or eventual
Obsidian extension). Vault-in-vault handling is non-trivial: each `.aDNA/` already has
its own `.obsidian/`; the outer vault must exclude them via `.obsidianignore` so the
indexer doesn't conflict.

M04b plans both threads in one side-campaign because they share consumer-of-M04-output
DNA: the dynamic bootstrap writes the data; the Obsidian vault reads + visualizes it.
Designing them together preserves the data-shape coherence that an isolated
design pass would risk fragmenting.

**Why now (between M04 and M05)**: M04 closed at 2026-05-12; M05 (publish-skill family
rewrite) is implementation-class and operator-gated. The workspace UX threads are
**M04 follow-ups**, not new scope — the audit's "items deferred" already flagged the
M01 Obj 3 §8 D7 federation-block 5-key-vs-8-key drift, the `inventory_memberships` rich
content, and the M04 AAR's surprise that the bootstrap-without-interview felt
incomplete. Catching these before M05 ships the publish skills means the publish
family can reference a mature workspace-UX baseline (e.g., `skill_vault_publish.md`
can assume `~/lattice/` is an Obsidian vault if D2-D4 resolve that way).

---

## Hard constraints

- **Design-only, no destructive ops**. M04b does not mutate `node.aDNA/`, does not
  create `~/lattice/.obsidian/`, does not commit to `LatticeProtocol/adna` upstream
  template. All implementation happens in the mini-campaign's execution missions
  (`campaign_lattice_workspace_ux/missions/M-LWX-*`).
- **M04 outputs preserved**. The audit target stays at the M04-bootstrapped baseline
  (`node.aDNA/` git HEAD `411660e`; v0.1 initial bootstrap commit). No mutations to
  the mission file, AAR, audit artifact, or 22 S2 deliverables.
- **No upstream-repo commits this mission**. Upstream changes (e.g., adding
  `skill_node_bootstrap_interview.md` to `.adna/how/skills/`) are mini-campaign Mxx
  scope; D5 resolves at M04b S1 whether specific artifacts should be upstreamed.
- **No partner-vault touches** (`*.aDNA/` partner vaults untouched; verified via
  `git status --short` post-edit).
- **No M08a output mutation** (mission file + AAR + 4 S2 artifacts + 17 coord memos +
  finalized upgrade guide untouched).
- **No coord memo delivery** (4 partner memos × `delivery_held_until` stays; 3
  public-announcement drafts × `delivery_held_until: M06-tag-ship` stays).
- **No v7.0 tag execution** (M06's responsibility).
- **No M08c stub modification** (stays `status: planned`, `spec_completeness: stub`).
- **No ADR mutations** (ADRs 004/005/006/007/008/009 stay `accepted`; ADR-010 stays
  not-drafted; new ADR-013 forecast slot may be opened in M04b S1 for the
  mini-campaign's design decisions, but ratification happens at the mini-campaign's
  relevant mission phase gate, not M04b).
- **M05 stays blocked-by-mini-campaign-close**. Signaled via M04b `blocks:` field +
  campaign master mission tree row update at this amendment session. The block is
  a *soft* gate — operator can still authorize M05 directly if they choose to
  defer the workspace-UX work; the gate is the operator's choice, not a hard rule.
- **Self-reference (Standing Order #2)**: M04b's design proposals must be
  exemplifiable in this vault (`aDNA.aDNA/`) — if the dynamic-bootstrap interview
  asks "what connections do you want to make?", the design must show how that
  question would have been answered for this vault's own bootstrap.
- **Dual-audience (Standing Order #7)**: the design artifacts produced by the
  mini-campaign must be legible to (a) a developer wanting to extend the bootstrap
  interview and (b) a non-developer operating their first `~/lattice/`.

---

## Objectives (skeleton — full Read/Produce blocks authored at mission open)

### Obj 1 — Gap analysis: M04 outputs vs. intended dynamic-UX

Audit M04's bootstrap outputs against the intended dynamic-interview UX. For each
of the 22 S2 deliverables and the workspace router 4 additions, classify:

- **Auto-detected** (e.g., 8 tool versions in `inventory_system.yaml` from
  `skill_inventory_refresh.md`)
- **Hardcoded from design** (e.g., FAIR block license:private; Hestia persona spec
  inline from M01 Obj 3 §3 verbatim)
- **Operator-decision-driven** (e.g., D3 default A — Workspace Layout ordering;
  D4 default A — NAMES-ONLY credentials redaction)
- **Should-be-interview-driven but-was-defaulted** (the gap — e.g., MANIFEST.md's
  `purpose:` field defaulted to the M01 Obj 3 design's example value rather than
  being elicited from the operator)

Output: `m04b_obj1_dynamic_ux_gap_analysis.md` (per-deliverable table; per-row
classification + interview-question candidate where applicable). 22+ rows.

### Obj 2 — Design `skill_node_bootstrap_interview.md`

Author the interview-driven bootstrap skill spec. The skill composes with existing
`skill_project_fork.md` (which produces the empty vault from the template) and
`skill_inventory_refresh.md` (which auto-detects machine state + vault inventory).
The interview skill fills the gaps surfaced by Obj 1.

Interview script topics:
- **Purpose** — what is this node for? what work does the operator do here? (free-text;
  fed into MANIFEST.md `purpose:` + CLAUDE.md persona context)
- **User-info** — operator name (already known from `identity_node.yaml`), role,
  contact, default git author identity, persona preferences (e.g., Hestia tone)
- **Stack** — programming languages used, frameworks, services connected (extends
  auto-detected `inventory_system.yaml` with operator-stated preferences)
- **Hardware** — confirms auto-detected machine class; asks about GPU, peripherals,
  external storage, multi-monitor setup
- **Connections** — what lattices does the operator want to subscribe to? what nodes
  to federate with? what marketplace categories of interest? (feeds
  `inventory_memberships.yaml` federation block + `identity_lattice_protocol.yaml`)

Spec includes: interview question table (~15-25 questions), follow-up logic
(branching on operator answers), validation rules, defaults table (Rosetta
recommendations for each question), output target paths (which file gets which answer
written into).

Output: `m04b_obj2_skill_node_bootstrap_interview_spec.md` (full skill spec; M-LWX-01
implements it as `.adna/how/skills/skill_node_bootstrap_interview.md` if D5 resolves
"upstream").

### Obj 3 — Design `~/lattice/` as Obsidian vault

Design the workspace-level Obsidian vault setup. Topics:

- **`.obsidian/` minimal config**: which files (`app.json`, `workspace.json`,
  `appearance.json`, `core-plugins.json`) at what content; theme/appearance defaults;
  startup file (which note Obsidian opens on launch)
- **Home page (`HOME.md` or `/lattice/README.md`)**: gallery of context graphs reading
  from `node.aDNA/what/inventory/inventory_vaults.yaml`; format options — markdown
  table / Canvas board / Bases (Obsidian built-in DB) view; Rosetta recommendation
  defaults to Bases per D2
- **LP registry/marketplace link**: web link to `lattice-protocol.com/marketplace`
  (placeholder URL; M-LWX-02 confirms actual destination) OR placeholder for future
  Obsidian extension. D4 resolves the choice.
- **Vault-in-vault handling**: outer `~/lattice/.obsidian/` must not conflict with
  inner `~/lattice/<name>.aDNA/.obsidian/`. Mechanism: `~/lattice/.obsidianignore`
  excluding all `*.aDNA/` subfolders so the outer vault's indexer doesn't traverse
  inner vaults. Precedent: `node.aDNA/.obsidianignore` excludes `.git/` + build
  artifacts + system files; outer ignore-list adds `*.aDNA/` pattern.
- **Integrated terminal usage**: Obsidian's terminal plugin (if used) opens at
  `~/lattice/` working directory; agent can be invoked from here; operator can run
  `claude` from the Obsidian terminal pane.
- **Sub-vault opening pattern**: instructions for operator on how to open a specific
  `.aDNA/` as its own vault (separate Obsidian window) while keeping the outer
  `~/lattice/` vault as the "control plane"

Output: `m04b_obj3_lattice_obsidian_vault_spec.md` (full setup spec; M-LWX-02
implements it as `~/lattice/.obsidian/` + `~/lattice/HOME.md` (or `README.md` if
home-page convention selected) + `~/lattice/.obsidianignore`).

### Obj 4 — Author `campaign_lattice_workspace_ux/` mini-campaign master + mission tree

Populate the side-campaign's master file (currently a stub seeded at the amendment
session) with the full mission tree. Likely 3-5 missions:

- **M-LWX-01 (Dynamic node.aDNA bootstrap interview implementation)**: implements
  `skill_node_bootstrap_interview.md` per Obj 2 design; updates workspace router
  Step 0.3 to invoke it; may upstream to `.adna/` template per D5 resolution.
  Estimated 2-3 sessions (spec adoption + implementation + integration test).
- **M-LWX-02 (`~/lattice/` Obsidian vault setup)**: creates `.obsidian/` config +
  home page + `.obsidianignore` per Obj 3 design; integration with
  `inventory_vaults.yaml` for the gallery. Estimated 2 sessions (config authoring +
  home-page authoring).
- **M-LWX-03 (Integration test + AAR + cross-graph findings)**: re-run the bootstrap
  + Obsidian-vault setup on a clean slate (snapshot/restore OR test machine) to
  validate the end-to-end UX; capture findings; AAR; integrate any upstream
  contributions back to v2 main campaign as amendment entries +
  `.adna/` template commits. Estimated 1-2 sessions.

Output: edits to `how/campaigns/campaign_lattice_workspace_ux/campaign_lattice_workspace_ux.md`
(Scope table + Phase structure + Mission tree TBD-replaced with above 3-5 missions);
new mission stub files at `campaign_lattice_workspace_ux/missions/mission_lwx_*.md`
(M-LWX-01/02/03 stubs per M08c-stub pattern).

### Obj 5 — AAR + mission close + handoff to mini-campaign opening

Lightweight AAR (5-line) + 4-category extended findings if M04b spans 2 sessions.
Mission file `status: in_progress → completed`; campaign master M04b row flipped;
STATE.md rewritten for mini-campaign opening (M-LWX-01 next). Handoff: operator
authorizes opening of `campaign_lattice_workspace_ux/` M-LWX-01 at their discretion
per Standing Order #1.

---

## Operator decisions surfaced at S1 entry (Rosetta recommendations)

| # | Decision | Options | Rosetta recommendation | Rationale |
|---|---|---|---|---|
| **D1** | Dynamic bootstrap depth | (a) auto-detect-only / (b) **hybrid** / (c) full-interview | **(b) hybrid** | Preserves M04's auto-detect strengths (8 tool versions, vault inventory) while adding interview for inherently operator-specific fields (purpose, connections). Avoids re-asking what's already detected. |
| **D2** | Obsidian vault depth for `~/lattice/` | (a) markdown+canvas only / (b) **+Bases** / (c) +curated community plugins | **(b) +Bases** | Bases is built into modern Obsidian (no plugin install); renders `inventory_vaults.yaml` as a queryable table without external dependencies; zero-additional-tooling for the operator. Curated plugins are operator-installable later; M-LWX-02 doesn't preload them. |
| **D3** | Vault-in-vault handling | (a) **exclude `.aDNA/` via `.obsidianignore`** / (b) nest as Obsidian sub-vaults / (c) something else | **(a) exclude via .obsidianignore** | Zero-conflict path. Each `.aDNA/` is opened as its own vault separately when the operator wants to work inside it. Outer vault stays focused on "control plane" usage. Precedent: `node.aDNA/.obsidianignore` excludes `.git/` + build artifacts. |
| **D4** | Marketplace integration | (a) **web link only** / (b) Obsidian extension / (c) both | **(a) web link only** | Zero-effort. Obsidian extension is future work (potentially v8.0+ or a separate LP project). M-LWX-02 ships a markdown link to `lattice-protocol.com/marketplace` (URL placeholder; actual URL resolved at M-LWX-02 entry). |
| **D5** | Upstream template changes (which artifacts ship to `.adna/`) | (a) **decide per-design** / (b) yes-write-everything-upstream / (c) no-local-only | **(a) decide per-design** | Per-design means M04b's Objectives 2 + 3 explicitly call out which artifacts should be upstreamed. Likely: `skill_node_bootstrap_interview.md` lives in `.adna/how/skills/` (upstream — future forks inherit); `~/lattice/.obsidian/` config stays local-only (workspace-scope not template-scope). |

Defaults are applied at S1 entry if operator does not surface them.

> **Resolved at S1 entry 2026-05-12T20:04Z** (operator accepted all 5 defaults via plan-mode AskUserQuestion at session_stanley_20260512_200414_adna_v2_m04b_s1; no overrides): **D1=b** (hybrid bootstrap) · **D2=b** (Obsidian +Bases) · **D3=a** (exclude `*.aDNA/` via `.obsidianignore`) · **D4=a** (marketplace web link only) · **D5=a** (decide per-design at Obj 2 + Obj 3). These resolutions are operative for Obj 1-5 of this mission.

---

## Inputs forecast (will be tightened at mission open)

| Input | Source | Use |
|---|---|---|
| M04 mission spec | `missions/mission_adna_infra_p1_04_node_adna_bootstrap.md` | Obj 1 — baseline of what M04 was supposed to produce vs. what landed |
| M01 Obj 3 node.aDNA design | `missions/artifacts/m01_obj3_node_adna_design.md` | Obj 1, Obj 2 — authoritative design source M04 implemented from; gaps are deviations from this |
| M04 AAR | `missions/artifacts/aar_m04_node_adna_bootstrap.md` | Obj 1 — items deferred + surprises + conceptual contributions inform gap analysis |
| 10-dim audit artifact | `missions/artifacts/m04_obj7_ten_dim_audit.md` | Obj 1 — per-dimension score evidence + deltas |
| Bootstrapped `node.aDNA/` | `/Users/stanley/lattice/node.aDNA/` (read-only) | Obj 1 — ground truth of what landed |
| Workspace router 4 additions | `/Users/stanley/lattice/CLAUDE.md` (read-only) | Obj 1, Obj 2 — Step 0.3 is the entry point M04b extends |
| `skill_project_fork.md` | `.adna/how/skills/skill_project_fork.md` | Obj 2 — composes with the new interview skill |
| `skill_inventory_refresh.md` | `node.aDNA/how/skills/skill_inventory_refresh.md` | Obj 2 — auto-detect component that interview skill complements |
| `skill_upstream_contribution.md` | `.adna/how/skills/skill_upstream_contribution.md` | Obj 4, Obj 5 — discipline for cross-graph findings → v2 main campaign |
| Obsidian app.json / workspace.json schemas | Obsidian docs (public) | Obj 3 — minimal config field reference |
| `node.aDNA/.obsidianignore` | `/Users/stanley/lattice/node.aDNA/.obsidianignore` | Obj 3 — vault-in-vault exclusion pattern precedent |
| `node.aDNA/what/inventory/inventory_vaults.yaml` | `/Users/stanley/lattice/node.aDNA/what/inventory/inventory_vaults.yaml` | Obj 3 — data source for the home-page gallery |
| ADRs 004-009 | `what/decisions/adr_00{4..9}_*.md` | Obj 2, Obj 3 — naming convention + repo flatten + airlock + template stub all constrain the design space |
| M02 baseline | `missions/artifacts/m02_obj5_ecosystem_baseline_locked.md` | Obj 3 — vault catalog the home-page gallery enumerates |

---

## Deliverables (stub — populated at mission open)

| # | Deliverable | Obj | Artifact path (forecast) |
|---|---|---|---|
| 1 | Gap analysis report | 1 | `missions/artifacts/m04b_obj1_dynamic_ux_gap_analysis.md` |
| 2 | Dynamic bootstrap interview skill spec | 2 | `missions/artifacts/m04b_obj2_skill_node_bootstrap_interview_spec.md` |
| 3 | Lattice Obsidian vault setup spec | 3 | `missions/artifacts/m04b_obj3_lattice_obsidian_vault_spec.md` |
| 4 | Side-campaign master populated | 4 | `how/campaigns/campaign_lattice_workspace_ux/campaign_lattice_workspace_ux.md` (in-place edits to TBD fields) |
| 5 | Side-campaign mission stubs | 4 | `campaign_lattice_workspace_ux/missions/mission_lwx_*.md` (3-5 stubs) |
| 6 | Mission AAR | 5 | `missions/artifacts/aar_m04b_workspace_ux_planning.md` |
| 7 | STATE.md flip for mini-campaign opening | 5 | `STATE.md` (in-place edits) |

**Total: ~7 deliverables forecast.** Estimated 1-2 sessions: Session 1 (Obj 1 gap
analysis + Obj 2 interview spec + Obj 3 Obsidian spec); Session 2 (Obj 4 mini-campaign
master + mission stubs + Obj 5 mission close). Single-session execution possible if
operator-decision defaults D1-D5 applied at S1 entry per M02 precedent.

---

## Acceptance criteria (stub — populated at mission open)

Forecast checklist (~10-12 boxes at mission open):

- [ ] 5 operator decisions D1-D5 surfaced at S1 entry (defaults applied if operator does not specify)
- [ ] Obj 1 gap analysis enumerates all 22 M04 S2 deliverables + 4 workspace router additions with classification
- [ ] Obj 2 interview skill spec lists ≥15 interview questions across 5 topics (purpose / user-info / stack / hardware / connections); each question has Rosetta-recommended default + output target path
- [ ] Obj 3 Obsidian vault spec covers `.obsidian/` minimal config (≥4 config files) + home page format (markdown / Canvas / Bases per D2) + LP marketplace link target + `.obsidianignore` pattern + sub-vault opening pattern
- [ ] Obj 4 side-campaign master populated with full Strategic Intent + Scope table + Phase structure + Mission tree (3-5 missions)
- [ ] Obj 4 ≥3 mission stub files authored in `campaign_lattice_workspace_ux/missions/` (M-LWX-01/02/03 minimum)
- [ ] D5 resolution explicit per artifact: each design artifact in Obj 2 + Obj 3 marked upstream (`.adna/`) or local (`~/lattice/`)
- [ ] Mission AAR landed (lightweight 5-line; 4-category extended findings if M04b spans 2 sessions)
- [ ] Mission file frontmatter `status: planned → in_progress → completed`
- [ ] Campaign master M04b row flipped `next/planned → in_progress → completed`; mini-campaign first mission noted as `next`
- [ ] STATE.md Last Session block + Next Session Prompt updated for mini-campaign opening
- [ ] No mutation of M04 outputs (mission file, AAR, audit, 22 S2 deliverables); no mutation of `node.aDNA/`; no upstream-repo commits; no partner-vault mutation; ADRs 004-009 stay accepted

---

## Cross-references

- [[../campaign_adna_v2_infrastructure.md|Campaign master]] — mission tree; M04b row (added by Campaign Amendment Session 2026-05-12)
- [[mission_adna_infra_p1_04_node_adna_bootstrap.md|M04 mission spec]] — prerequisite; M04b's primary input
- [[artifacts/aar_m04_node_adna_bootstrap.md|M04 AAR]] — items deferred + surprises + conceptual contributions inform M04b Obj 1
- [[artifacts/m04_obj7_ten_dim_audit.md|M04 10-dim audit]] — per-dimension evidence M04b Obj 1 builds on
- [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3 node.aDNA design]] — authoritative design source M04 implemented from
- [[../../campaign_lattice_workspace_ux/campaign_lattice_workspace_ux.md|Side-campaign master]] — M04b's output destination
- [[../../campaign_lattice_workspace_ux/CLAUDE.md|Side-campaign CLAUDE.md]] — governance for the mini-campaign
- [[artifacts/m01_amendment_log.md|M01 amendment log]] — Campaign Amendment Session precedent (Stage 2 Session 2.5)
- [[mission_adna_infra_p3_08c_standalone_installer.md|M08c mission stub]] — stub mission format precedent
- [[../../../what/decisions/adr_004_campaign_home_stays_in_adna_adna.md|ADR-004]] — campaign-home discipline
- [[../../../what/decisions/adr_005_three_way_vault_boundary.md|ADR-005]] — node.aDNA / aDNA.aDNA / lattice-labs scope distinctions
- [[../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] — lowercase URL slug; relevant if D5 upstream commits
- [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] — template_workspace_claude.md disposition; informs workspace-router treatment
- [[../../../what/decisions/adr_008_airlock_template_stub.md|ADR-008]] — airlock template stub
- [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] — naming convention (relevant if interview skill names new vaults)
- [[../../../what/decisions/AGENTS.md|what/decisions/AGENTS.md]] — ADR numbering policy (potential new ADR-013 slot for mini-campaign design decisions)
- [[../../../STATE.md|STATE.md]] — operational snapshot
- [[../../../how/templates/template_aar_lightweight.md|template_aar_lightweight.md]] — Obj 5 AAR format

---

## Status

**Mission complete** at Session 1 close 2026-05-12T20:27:24Z+ (`session_stanley_20260512_200414_adna_v2_m04b_s1`). Mission frontmatter `status: in_progress → completed`; `closed_at` + `closed_session` + `sessions_actual: 1` populated; `spec_completeness: complete`. **Single-session execution** per M02 precedent — operator accepted all 5 Rosetta defaults (b/b/a/a/a) at S1 entry via plan-mode AskUserQuestion; 5 objectives + 7 deliverables landed sequentially without operator re-engagement.

**Outputs landed**:
1. [[artifacts/m04b_obj1_dynamic_ux_gap_analysis.md|`m04b_obj1_dynamic_ux_gap_analysis.md`]] — Obj 1 gap analysis (40 items classified across 8 categories; 7 strict gaps + 2 overlay gaps mapped to 5 interview topics)
2. [[artifacts/m04b_obj2_skill_node_bootstrap_interview_spec.md|`m04b_obj2_skill_node_bootstrap_interview_spec.md`]] — Obj 2 interview skill spec (19 questions × 5 topics; **D5 = upstream** ships to `.adna/how/skills/`)
3. [[artifacts/m04b_obj3_lattice_obsidian_vault_spec.md|`m04b_obj3_lattice_obsidian_vault_spec.md`]] — Obj 3 Obsidian vault spec (5 `.obsidian/` config files + HOME.md + .obsidianignore + Step 0.5; **D5 = local** ships to `~/lattice/`)
4. Side-campaign master `campaign_lattice_workspace_ux/campaign_lattice_workspace_ux.md` flipped from "preliminary" to "finalized 2026-05-12 by v2 M04b S1"
5. 3 mission stub files at `campaign_lattice_workspace_ux/missions/`:
   - `mission_lwx_01_dynamic_bootstrap_interview.md` (upstream)
   - `mission_lwx_02_lattice_obsidian_vault.md` (local; parallel-eligible with LWX-01)
   - `mission_lwx_03_integration_test_and_closeout.md` (mixed)
6. [[artifacts/aar_m04b_workspace_ux_planning.md|M04b AAR]] — lightweight 5-line per single-session-execution path
7. STATE.md flip — Last Session block replaced with M04b S1 close; Next Session Prompt rewritten for mini-campaign M-LWX-01 opening

**Decisions resolved**: D1-D5 operator decisions all accepted at Rosetta defaults (b/b/a/a/a) at S1 entry; per-artifact D5 disposition explicit (Obj 2 upstream, Obj 3 local, mini-campaign M-LWX-03 mixed).

**Hard constraints honored**: zero M04 / `node.aDNA/` / `~/lattice/.obsidian/` / upstream-repo / partner-vault / M08a / coord-memo / v7.0-tag mutations; ADRs 004-009 all stay accepted; ADR-010 stays not-drafted.

Hands off to **mini-campaign `campaign_lattice_workspace_ux/`** at operator discretion per Standing Order #1. M-LWX-01 (upstream interview skill) + M-LWX-02 (local Obsidian vault) are parallel-eligible. M-LWX-03 (integration + AAR + cross-graph findings) opens after both close. After M-LWX-03 close, v2 resumes at M05 (publish-skill rewrite; soft-gate released).

**Self-reference (Standing Order #2)**: M04b demonstrated the M01 Obj 3 design by *enacting* the hybrid-bootstrap principle in the design artifacts it produced — the gap analysis (Obj 1) classifies each M04 output by which path produced it; the interview spec (Obj 2) closes only the gaps surfaced by Obj 1; the Obsidian vault spec (Obj 3) reads the same inventory data the bootstrap writes. The campaign documents the framework by *applying* the framework to its own outputs. M-LWX-03 will re-run the bootstrap as the canonical reference on Stanley's L1 (this Mac), validating the framework end-to-end.

**Cross-references** (sources for the workspace UX gaps this mission addresses):
- M04 S2 session file Activity Log §"Conceptual contribution (candidate AAR
  load-bearing finding)": notes that node.aDNA is the first end-to-end production
  test of v7.0 fork-and-customize. M04b extends that test by adding the
  interview layer.
- M04 AAR §Items deferred items 1-4 (registry_stub.md, rebuild_procedure.md, D7
  prose tightening, README frontmatter convention) — M04b Obj 1 evaluates which
  are addressable in the mini-campaign vs. carried forward to M07 / v3-EC.
- Workspace router Step 0.3 (line 22-32 of `/Users/stanley/lattice/CLAUDE.md`) —
  the entry point M-LWX-01 extends to invoke the new interview skill.
