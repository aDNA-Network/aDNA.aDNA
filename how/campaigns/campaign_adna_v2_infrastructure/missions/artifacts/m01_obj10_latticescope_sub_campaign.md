---
type: artifact
artifact_type: sub_campaign_draft
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 10
target_mission: M10  # M10 finalizes this sub-campaign for ratification
target_vault: LatticeScope.aDNA
target_persona: Prometheus
created: 2026-05-08
updated: 2026-05-08
status: draft  # draft until ratified at v2 P3 phase gate (post-flatten + post-M08a/M08b)
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj10, latticescope, prometheus, sub_campaign, planning, observability, federation, anchor_paper, schema_v0_1]
related_artifacts:
  - m01_obj9_token_measurement_protocol.md
  - m01_obj10_latticescope_vault_design.md
  - m01_obj10_prometheus_persona.md
related_decisions:
  - adr_004_campaign_home_stays_in_adna_adna.md
---

# M01 Obj 10 — `campaign_lattice_scope` Sub-Campaign Doc (DRAFT)

> **Deliverable 16 of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 16). This artifact is the **planning-mission deliverable** for the LatticeScope sub-campaign. It is a *draft*; final ratification happens at the v2 P3 phase gate (post-M03 flatten, post-M08a/M08b shipped). At ratification, this doc is forked to its canonical home at `node.aDNA/how/campaigns/campaign_lattice_scope/campaign_lattice_scope.md` (per [[../mission_adna_infra_planning_01.md|mission spec]] line 716 — sub-campaign LIVES at node.aDNA post-M04).
>
> **Pre-flatten draft path** (right now): `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_sub_campaign.md`
> **Post-M04 canonical path**: `node.aDNA/how/campaigns/campaign_lattice_scope/campaign_lattice_scope.md`

---

## §0 Summary

| Aspect | Spec |
|---|---|
| **Campaign name** | `campaign_lattice_scope` |
| **Status at draft** | `planned` (this draft); transitions to `active` at MLS-0 ratification (post-v2 P3 phase gate) |
| **Strategic intent** | Operationalize context-cost observability across the lattice — local-first, then federated, then anchored as community evidence base. Supersede frontier-lab proprietary observability folklore with public empirical methodology. |
| **Persona** | **Prometheus** (per [[m01_obj10_prometheus_persona.md|persona spec]]) |
| **Vault** | `LatticeScope.aDNA/` (per [[m01_obj10_latticescope_vault_design.md|vault design]]) |
| **Code repo** | `~/lattice/latticescope/` (sibling repo; ADR-001 = Python primary) |
| **Phase order** | P0 (local tool) → P1 (federation API) → P2 (benchmark community) → P3 (anchor paper) → P4 (closeout) |
| **Mission count (preliminary)** | **10 missions**: MLS-0 (bootstrap) + MLS-1 / MLS-2 (P0) + MLS-3 / MLS-4 (P1) + MLS-5 / MLS-6 (P2) + MLS-7 / MLS-8 (P3) + MLS-9 (P4 closeout) |
| **Effort estimate (preliminary)** | **30–55 sessions** total; recalibrated mission-by-mission against measurement data once MLS-1 ships the collector |
| **Opens at** | v2 P3 phase gate (post-M03 flatten + post-M08a/M08b) |
| **Predecessor** | This campaign (`campaign_adna_v2_infrastructure`); specifically, [[m01_obj9_token_measurement_protocol.md|Obj 9 protocol]] + [[m01_obj10_latticescope_vault_design.md|Obj 10 vault design]] |
| **Sister relationships** | Hestia/`node.aDNA` (hosts data), Daedalus/`Spacemacs.aDNA` (instruments IDE), Argus/`III.aDNA` (consumes cost data for III ROI), Rosetta/`aDNA.aDNA` (convergence-model verdict) |

---

## §1 Strategic intent

Per [[../mission_adna_infra_planning_01.md|mission spec]] §Obj 10 lines 643–650:

> *"The context/token audit (Obj 9) feeds a larger vision: an open-source observability layer for distributed agentic systems. This objective designs the LatticeScope.aDNA vault and produces the planning mission for the LatticeScope project."*

The campaign's strategic intent has four nested layers:

1. **Empirical replacement of doctrine.** [[../../../../CLAUDE.md|Standing Order #3]] — *"Context budget is doctrine."* The doctrine has never been measured. This campaign replaces folklore with data.

2. **Operator empowerment via local-first observability.** Operators see their own session costs without depending on cloud telemetry. The collector hook + SQLite store + report templates run entirely on the operator's node. **No cloud. No registration. No fee.**

3. **Community evidence base via federated benchmarks.** Opt-in anonymized aggregation produces a public benchmark dataset of agentic context patterns. Operators contribute; community gains shared evidence; everyone benefits from the dataset's growth. The federation is the public good.

4. **Anchored research contribution.** A peer-reviewed (or workshop-track) paper "Context observability in distributed agentic collaboration networks" makes the campaign's methodology citable. The paper is paired with a Zenodo-DOI dataset. This is what "open from day one" looks like at the maturity end.

Each layer is a phase: local-first = P0, federation = P1+P2, anchor paper = P3.

### What success looks like at each layer

| Layer | Success criterion |
|---|---|
| L1 — Empirical replacement | First Type C planning session produces a token-cost report; operator reads "this session ran 124 kT" and the doctrine *"plans take 5–6 sessions"* now has a concrete kT number. |
| L2 — Local-first | 19 ecosystem vaults each have a baseline run; the per-vault Type A startup-overhead distribution is published. |
| L3 — Community evidence | At least 5 external operators (post-v2-public-launch) contribute baselines; community benchmark library has ≥ 50 entries spanning ≥ 10 distinct workloads. |
| L4 — Anchored research | Anchor paper accepted at a workshop track; Zenodo dataset has DOI; ≥ 3 external citations within 12 months of publication. |

---

## §2 Phase structure

Four phases (P0 → P3) plus a P4 closeout. Each phase has explicit entry/exit gates that operate as user-approved phase transitions per [[../../../../CLAUDE.md|aDNA.aDNA Standing Order #1]].

### P0 — Local tool (MLS-0 + MLS-1 + MLS-2)

**Strategic question**: *Can an operator measure their own session costs reliably on their own node?*

**Phase gate (P0 → P1)**: Three-vault demonstration — `aDNA.aDNA`, `Spacemacs.aDNA`, and `node.aDNA` each have a Type A baseline + at least one Type C session measured + a report generated. Operator confirms the local tool is "useful as-is" before federation work begins.

**Sub-objectives**:
1. MLS-0 — Vault bootstrap + ADRs 000–003 ratified; sibling code repo created; workspace router updated.
2. MLS-1 — Collector hook + SQLite schema v0.1 + self-test mode shipped; first baseline run on this node.
3. MLS-2 — Report templates (session / mission / campaign / per-AGENTS-md / cross-vault / recipe-diff); convergence-model validation script.

**Exit deliverables**: working `latticescope` CLI; first-week token data; convergence-model verdict (validated / refuted / mid-magnitude per [[m01_obj9_token_measurement_protocol.md|protocol §3]]).

### P1 — Federation API (MLS-3 + MLS-4)

**Strategic question**: *Can multiple operators contribute anonymized data to a shared benchmark without leaking sensitive metadata?*

**Phase gate (P1 → P2)**: Federation API live; anonymizer audited (red-team review); at least 2 partner operators (Lattice Labs internal + 1 external) have submitted a baseline; dataset hosted at `latticescope-benchmark.<domain>` (or a Zenodo equivalent).

**Sub-objectives**:
1. MLS-3 — Federation protocol design + ADR-004 (federation contract) + ADR-005 (privacy framework). Define what is anonymized, how aggregation works, how a node opts in/out.
2. MLS-4 — Federation API implementation (FastAPI server) + anonymizer + submit-from-node CLI command + OAuth2 device-flow auth.

**Exit deliverables**: federation API live; first 2 anonymized baselines published; privacy framework audit log.

### P2 — Benchmark community (MLS-5 + MLS-6)

**Strategic question**: *Does the federated benchmark grow into a useful evidence base?*

**Phase gate (P2 → P3)**: ≥ 5 external operators have contributed; ≥ 50 community-submitted profiles indexed; comparator (`latticescope compare`) produces actionable recommendations against community baselines.

**Sub-objectives**:
1. MLS-5 — First multi-operator pilot (Lattice Labs core + 2–3 friendly external contributors); refine federation protocol based on real submissions; pre-paper data audit.
2. MLS-6 — Community benchmark library + comparator + (optional) web dashboard. Dashboard is Astro/TS per [[m01_obj10_latticescope_vault_design.md|vault design §7]] hybrid stance.

**Exit deliverables**: community benchmark library; comparator CLI; (optional) web dashboard at `latticescope.<domain>`.

### P3 — Anchor paper (MLS-7 + MLS-8)

**Strategic question**: *Can the methodology be ratified as a peer-reviewable contribution?*

**Phase gate (P3 → P4)**: Anchor paper draft complete; Zenodo dataset DOI assigned; submission to workshop venue (NeurIPS or ICML workshop track); pre-print on arXiv; ADR-006 (publication channel) ratified.

**Sub-objectives**:
1. MLS-7 — Anchor paper draft + Zenodo dataset assembly + pre-print to arXiv; CC-BY-4.0 license applied.
2. MLS-8 — Workshop submission + community launch announcement + (post-acceptance) camera-ready + presentation.

**Exit deliverables**: paper accepted (or rejected with feedback for resubmit); Zenodo DOI; community launch artifacts.

### P4 — Closeout (MLS-9)

**Strategic question**: *Did this campaign produce the empirical replacement of doctrine that motivated it?*

**Phase gate (P4 → done)**: Campaign retrospective complete; AAR aggregated across MLS-0 through MLS-8; successor campaigns seeded (if any).

**Sub-objectives**:
1. MLS-9 — Retrospective; AAR aggregation; convergence-model verdict published; ecosystem propagation receipts (which of the 19 vaults adopted the collector); successor campaign(s) seeded if applicable.

**Exit deliverables**: campaign AAR; convergence-model verdict (final); ecosystem-adoption metrics.

---

## §3 Mission tree (preliminary)

| ID | Phase | Subject | Effort (sessions) | Deliverables |
|---|---|---|---|---|
| **MLS-0** | bootstrap | Vault bootstrap + ADRs 000–003 + sibling code repo + workspace router update | 1–2 | `LatticeScope.aDNA/` materialized; `~/lattice/latticescope/` initialized; ADRs ratified |
| **MLS-1** | P0 | Collector hook + SQLite schema v0.1 + self-test mode + first baseline | 3–5 | `collector/hook.sh` + `store/schema.py` + `tests/`; first kT data |
| **MLS-2** | P0 | Report templates (session / mission / campaign / heat-map / traversal / recipe-diff) + convergence validation | 3–5 | `reports/*.py`; convergence verdict v0 |
| **MLS-3** | P1 | Federation protocol design + ADR-004 + ADR-005 (privacy framework) | 2–4 | `federation_protocol.md` + ADRs |
| **MLS-4** | P1 | Federation API implementation + anonymizer + submit-from-node | 5–8 | `federation/` package; first 2 cross-operator submissions |
| **MLS-5** | P2 | Multi-operator pilot + protocol refinement + pre-paper data audit | 4–6 | pilot report; protocol v0.2 if needed |
| **MLS-6** | P2 | Community benchmark library + comparator + (optional) dashboard | 5–10 | `benchmarks/` + `latticescope compare` + dashboard (optional) |
| **MLS-7** | P3 | Anchor paper draft + Zenodo dataset + pre-print | 4–7 | paper draft + DOI + arXiv submission |
| **MLS-8** | P3 | Workshop submission + community launch + (post-accept) camera-ready | 2–4 | submission; (conditional) acceptance + presentation |
| **MLS-9** | P4 | Retrospective + AAR aggregation + ecosystem-adoption receipts + successor seed | 1–2 | campaign AAR; verdict published; successor stub |

**Total preliminary effort**: 30–55 sessions.

**Recalibration cadence**: at every phase gate, the mission-tree downstream-of-current-phase is re-estimated against actual data from the just-closed phase. The estimates above are pre-execution; expect ±30% variance.

**Mission-spec extension** (this campaign uses the same mission template `template_mission.md` as v2): each MLS-N file has objectives + deliverables + effort estimate + reference table.

---

## §4 ADR roadmap

ADRs are sequenced to land at well-defined gates so that downstream missions inherit ratified decisions, not pending ones.

| ADR | Title | Drafted | Ratified | Drives |
|---|---|---|---|---|
| **ADR-000** | Project identity — Platform.aDNA second-instance, Prometheus persona | M01 Obj 10 (this campaign) | MLS-0 | All subsequent missions |
| **ADR-001** | Language choice — Python primary | M01 Obj 10 | MLS-0 | MLS-1 implementation |
| **ADR-002** | Schema design v0.1 — encodes Obj 9 → Obj 10 gate | M01 Obj 10 | MLS-0 | MLS-1 collector + MLS-2 reports |
| **ADR-003** | License policy — Apache-2.0 + CC-BY-4.0 | M01 Obj 10 | MLS-0 | MLS-7 anchor paper licensing |
| **ADR-004** | Federation protocol v0.1 | MLS-3 | MLS-3 close | MLS-4 implementation |
| **ADR-005** | Privacy framework | MLS-3 | MLS-3 close | MLS-4 anonymizer |
| **ADR-006** | Anchor paper publication channel | MLS-7 | MLS-7 mid | MLS-7 + MLS-8 submission process |
| **ADR-007** | Schema bump policy (v0.1 → v0.2 procedure) | MLS-2 (after first real data) | MLS-2 close | All future schema work |
| **ADR-008** | Community-benchmark contribution standard | MLS-5 | MLS-5 close | MLS-6 library curation |

ADR amendments use the standard ADR amendment process at `LatticeScope.aDNA/what/decisions/` per [[../../../../how/templates/template_adr.md|template_adr.md]].

---

## §5 Privacy framework (preview — final spec at MLS-3 ADR-005)

**What is collected** (always):
- Tool calls (Read / Bash / Edit / Write / AskUserQuestion / Glob / Grep) with token counts (input / output / cache_creation / cache_read).
- File metadata (path, LOC, offset/limit, file_category — from gate row 2).
- Re-read flag (from protocol §2 pattern β).
- Cross-vault traversal (from gate row 7 — `context_traversal` table).
- Recipe attribution (from gate row 8 — `recipe_id` column).
- Session metadata (vault, campaign, mission, session_type).

**What is collected if explicitly authorized** (opt-in per submission):
- Session intent text (from session frontmatter `intent` field) — useful for federation cluster analysis but reveals operator's project scope.
- Anchored timestamps — useful for trend analysis but creates correlation risk if combined with public commit logs.

**What is never collected**:
- File body content.
- Any text from prompts (operator messages, agent responses).
- Tool call arguments beyond paths + offsets (e.g., Bash command strings, AskUserQuestion content).
- Cross-process telemetry (CPU, memory, etc.).
- Network requests outside the federation API.

**Anonymization at federation submission**:
- `session_id` stripped → replaced with random opaque token.
- `vault`, `campaign`, `mission` stripped → replaced with `session_type` only (or operator-chosen pseudonym).
- File paths optionally hashed (operator chooses: clear / hashed / dropped).
- Only operator-approved payloads leave the node.

**Audit trail**:
- Federation submissions logged locally in `~/.adna/measurement/federation_log.sqlite` — operator can audit what they sent.
- Public federation server publishes aggregate query logs (which queries ran against the public dataset, no operator linkage).

The framework is conservative-by-construction. Final ratification at MLS-3 ADR-005 may tighten further based on red-team review.

---

## §6 First-contributor guide (stub)

A community contributor wanting to add a benchmark or extend the schema follows this path. Final guide ships at MLS-6.

```
1. Install LatticeScope on your node:
   uv tool install latticescope
   latticescope hook install     # writes PostToolUse hook into ~/.claude/settings.json

2. Run a baseline:
   latticescope baseline --type C --campaign <your_campaign>
   latticescope report --session <session_id> > my_report.md

3. (Optional) Submit anonymized baseline to community:
   latticescope federation submit --baseline-only --pseudonym <handle>
   # Operator reviews payload; explicit yes/no before send

4. Contribute a benchmark profile:
   latticescope benchmark draft --based-on <session_id> > benchmark_<name>.md
   # Edit; adds context (workload description, methodology notes)
   # Submit PR to github.com/LatticeProtocol/latticescope-benchmarks

5. Propose a schema extension (rare):
   - Open an issue on github.com/LatticeProtocol/latticescope
   - Draft an ADR amendment per the schema bump policy (ADR-007)
   - Coordinate with maintainer for migration script
```

The stub is intentionally minimal. The full guide adds: code-of-conduct link, security/disclosure policy, review SLA, attribution requirements (CC-BY-4.0 implications).

---

## §7 Cross-vault dependencies

The sub-campaign is downstream of two predecessor campaigns and pairs with several sibling vaults.

### Predecessors (must close before MLS-0 opens)

| Predecessor | Why MLS-0 needs it |
|---|---|
| **`campaign_adna_v2_infrastructure`** (this campaign — close at v2 P3 phase gate) | Provides the [[m01_obj9_token_measurement_protocol.md|protocol]] + this design + post-flatten template. MLS-0 cannot bootstrap without the v7.0 template. |
| **`node.aDNA/` bootstrap (M04 of v2)** | Sub-campaign LIVES at `node.aDNA/how/campaigns/campaign_lattice_scope/` post-flatten. Requires node.aDNA to exist as a workspace project. |

### Sibling pairings (active during sub-campaign)

| Sibling | Role |
|---|---|
| **Hestia / `node.aDNA`** | Hosts the SQLite store at `~/.adna/measurement/`; tracks LatticeScope deployment health on the node; first-class operational pair. |
| **Daedalus / `Spacemacs.aDNA`** | IDE config carrier; PostToolUse hook may be configured via Spacemacs-managed `~/.claude/settings.json`. Coordinated airlock memo at MLS-1. |
| **Argus Panoptes / `III.aDNA`** | Consumes Prometheus's cost data to compute III cycle ROI ("did this III cycle improve the artifact more than its kT cost?"). Coordinated at MLS-2 once reports ship. |
| **Rosetta / `aDNA.aDNA`** | Convergence-model verdict (validated / refuted / mid-magnitude) is a Rosetta-question. Coordinated at MLS-2 — the verdict is published into `aDNA.aDNA/STATE.md`. |
| **Asclepius / `RareHarness.aDNA`** | Perimeter-only measurement (PHI boundary). Coordinated at MLS-3 — privacy framework explicitly carves out clinical interior. |

### Successors (seeded by MLS-9 if applicable)

- **`campaign_lattice_scope_v0_2`** — schema bump campaign (if v0.1 baseline reveals fundamental gaps not addressable via additive ADR amendments).
- **`campaign_observability_dashboard`** — if MLS-6 dashboard pilots well and operators want a richer UI.
- **`campaign_anchor_paper_extension`** — follow-up paper(s) once the first lands and the dataset matures.

---

## §8 Effort estimate calibration

The 30–55 session range is a pre-measurement estimate. Once MLS-1 ships the collector and the first kT data lands, this estimate is recalibrated against the new effort-formula from [[m01_obj9_token_measurement_protocol.md|protocol §5.a]]:

```
revised_estimate(MLS-N) = sessions × per-session-mean-kT-for-mission-type / per-node-budget-kT
```

The recalibration runs at every phase gate. The campaign master file (`campaign_lattice_scope.md` once forked to node.aDNA) carries a recalibration log analogous to this campaign's `m01_amendment_log.md`.

**Mission-type provisional assignments** (subject to actual measurement):
- Bootstrap missions (MLS-0, MLS-3, MLS-7) — Type C planning sessions; ~40–60 kT each.
- Implementation missions (MLS-1, MLS-2, MLS-4, MLS-6) — Type D execution sessions (NEW type added at protocol §5.a); ~80–150 kT each.
- Pilot/community missions (MLS-5, MLS-8) — mixed Type C + cross-operator coord; ~60–100 kT each.
- Closeout missions (MLS-9) — Type E AAR sessions; ~30–50 kT each.

**Convergence-model recalibration**: if the model is *refuted* at MLS-2, the mission tree may flatten (merge MLS-3 + MLS-4 if cross-mission overhead is high). If *validated*, the tree may decompose further (split MLS-6 into 2–3 narrower missions).

---

## §9 Self-reference + dual-audience (Standing Orders #7 + #8)

**Self-reference**: This sub-campaign exists to measure the campaign that created it. Specifically: this very campaign (`campaign_adna_v2_infrastructure`) is one of the first datasets the LatticeScope collector should be run against retrospectively (where measurement infrastructure permits) — the sessions of this campaign produced the protocol that LatticeScope operationalizes; the LatticeScope dataset's first community benchmark could be the v2-infrastructure-campaign-itself profile.

The recursion: the protocol was authored in a session whose cost is unmeasured (because the protocol didn't exist yet); LatticeScope ratifies the protocol; once ratified, future sessions can measure their cost; the empirical-replacement-of-doctrine claim becomes self-validating only when it has been operating long enough to measure an *unobserved* doctrine and produce data that disagrees with it. The campaign builds the apparatus that proves its own thesis.

**Dual-audience**:

- **Developer reads**: §3 mission tree (project plan), §4 ADR roadmap (decision schedule), §5 privacy framework (engineering contract), §6 first-contributor guide stub (CLI sequence). Direct, executable.
- **Newcomer reads**: §0 summary (one-screen orientation), §1 strategic intent (why this campaign exists), §2 phase structure (what success looks like at each layer), §9 self-reference (the recursive claim). Plain language; the *why* before the *how*.

The dual-audience disclosure here is more philosophical than at the artifact level — sub-campaigns are inherently strategic-frame-setting, and the strategy is the message.

---

## §10 Cross-references

| Reference | Direction | Used by |
|---|---|---|
| [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01.md]] §Obj 10 (lines 715–722) | upstream | This artifact materializes the planning-mission deliverable |
| [[m01_obj9_token_measurement_protocol.md|token-measurement protocol]] | upstream | The protocol this campaign operationalizes |
| [[m01_obj10_latticescope_vault_design.md|vault design]] | sibling | This campaign bootstraps the vault designed there |
| [[m01_obj10_prometheus_persona.md|Prometheus persona]] | sibling | The persona installed at MLS-0 |
| [[m01_obj3_node_adna_design.md|Hestia / node.aDNA design]] | sibling | The pairing partner that hosts the SQLite store |
| [[m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §4 | sibling | Pre-announces LatticeScope; this campaign delivers what was announced |
| [[../../../../../RareHarness.aDNA/what/decisions/adr_000_project_identity.md|RareHarness ADR 000]] | upstream | Platform.aDNA pattern source |
| [[../../campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|v3 successor]] | sibling / downstream | M03-EC may invoke `skill_collector_install` per-vault — propagates LatticeScope adoption |
| [[../../../../STATE.md|aDNA.aDNA STATE.md]] | downstream | Campaign open-state will appear in STATE.md once ratified at MLS-0 |
| `node.aDNA/how/campaigns/campaign_lattice_scope/campaign_lattice_scope.md` | future canonical | This artifact's post-fork home |

---

## §11 Status

**DRAFT.** This is a *planning-mission deliverable* — the sub-campaign is *planned*, not *active*.

Lifecycle:
1. **Now (S2 S6 close)**: artifact lands at `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_sub_campaign.md` with `status: draft`.
2. **At v2 P3 phase gate** (post-M03 + post-M08a/M08b): operator ratifies the v2 phase transition; this draft is forked to `node.aDNA/how/campaigns/campaign_lattice_scope/campaign_lattice_scope.md`; status flips to `planned` (campaign-master canonical).
3. **At MLS-0 open**: status flips to `active`; ADRs 000–003 ratified; sibling code repo created.
4. **Through MLS-9**: phase gates fire as P0 → P1 → P2 → P3 → P4.
5. **At MLS-9 close**: campaign retrospective; status `completed`; AAR landed.

**Open items at draft close** (carried to ratification):

- Mission-tree effort estimates are pre-measurement; recalibrate at MLS-1 close.
- Anchor paper venue (NeurIPS workshop vs ICML workshop vs alternative) deferred to MLS-7.
- Web dashboard (P2) is optional; commit decision deferred to MLS-5 pilot results.
- Successor campaigns (`v0_2`, `dashboard`, `anchor_paper_extension`) deferred to MLS-9 retrospective.

**Locked at draft close**:

- Phase order (P0 → P1 → P2 → P3 → P4).
- ADR roadmap structure (ADRs 000–008 sequencing).
- Privacy framework conservative-by-construction stance (final spec at MLS-3 may tighten, never loosen).
- License bundle (Apache-2.0 + CC-BY-4.0 per [[m01_obj10_latticescope_vault_design.md|vault design §9]]).
- Persona (Prometheus, locked).
- v0.1 schema (locked at [[m01_obj10_latticescope_vault_design.md|vault design §6]]; ADR-007 governs future bumps).

**This artifact is the planning-mission deliverable. It is not yet a campaign.**
