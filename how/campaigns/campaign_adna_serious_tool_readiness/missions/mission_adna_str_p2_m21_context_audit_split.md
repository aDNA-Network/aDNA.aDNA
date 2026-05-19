---
type: mission
mission_id: mission_adna_str_p2_m21_context_audit_split
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission_number: 2.1
slug: context_audit_split
created: 2026-05-19
updated: 2026-05-19
status: in_progress
opens_at: 2026-05-19T19:33:44Z
opened_session: session_stanley_20260519T193344Z_v8_m21_s1
closed_at: null
closed_session: null
estimated_sessions: 2-3
actual_sessions: null  # populated at S3 close
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: in_progress  # S1 authoring this turn; S2 + S3 execution pending
mission_class: implementation  # canonical 3-session shape per Campaign S.O. #17 (3rd instance after M1.3, M1.4)
token_budget_estimated: "S1 ~60-90 kT (Type C planning; Op 1/2/3 scope pre-specified by M1.3 Obj 7 + M1.4 Obj 7); S2 ~100-180 kT (destructive: STATE.md split + AGENTS.md hint + MEMORY.md line + backlog placeholder); S3 ~60-80 kT (validation + AAR + token_baselines.md addendum)"  # per Campaign S.O. #12; self-measured at session close for calibration
tags: [mission, m2_1, v8, p2, context_audit, state_md_split, agents_md_hint, archive_convention, router_archive_pattern, op1_op2_op3, type_c_implementation]
prerequisite_missions:
  - mission_adna_str_p0_planning                     # P0 — campaign open 2026-05-17
  - mission_adna_str_p1_m13_token_audit              # M1.3 — origin of top-3 M2.1 queue
  - mission_adna_str_p1_m14_latticescope_schema      # M1.4 — confirmation of top-3 queue + API-billing data
prerequisite_artifacts:
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m13_obj7_calibration_output.md  # §6 ADR-016 prep notes; top-3 M2.1 queue
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m13_token_audit.md          # campaign-level signals; M2.1 forward reference
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m14_obj7_validation_output.md   # §6 + §7 API-billing companion data; top-3 queue CONFIRMED
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m14_latticescope_schema.md  # §(d) campaign-level signals; M2.1 entry recommendation
  - aDNA.aDNA/STATE.md                                                                                   # the split target (current state: 347 KB / ~75.8 kT content-load)
target_adr: none (no new ADRs at M2.1 per Campaign Standing Order #14; ADR-016 ratifies at M2.2 separately)
fires_v8_checkpoint: P1 → P2 transition at this M2.1 opening  # phase exit = human gate per Campaign S.O. #19; approved at plan ratification
unblocks_missions:
  - mission_adna_str_p2_m22_per_mission_budget       # M2.2 ADR-016 (post-M2.1 not strictly required but doctrinally tidy to land split first)
  - mission_adna_str_p2_m23_convergence_validation   # M2.3 (independent track; can run parallel)
  - mission_adna_str_p2_m24_agents_md_heatmap        # M2.4 (independent track; can run parallel)
deliverables_count: 7
hard_dependency_satisfied: "M1.4 closed 2026-05-19T19:00Z; P1 → P2 phase exit gate approved at plan ratification per Campaign Standing Order #19 + project Standing Order #1"
---

# M2.1 — Context File Audit + STATE.md Split

> **Mission executes** the **top-3 optimization queue** from [[../missions/artifacts/m13_obj7_calibration_output.md|M1.3 Obj 7]] §6, **CONFIRMED unchanged** at [[../missions/artifacts/m14_obj7_validation_output.md|M1.4 Obj 7]] §7. The three Ops:
>
> - **Op 1**: Split `aDNA.aDNA/STATE.md` (347 KB / ~75.8 kT content-load) into router + archive — load-bearing for every future agent session that loads STATE.md at startup.
> - **Op 2**: Default `offset+limit` Read convention on heavy files (STATE.md + any file ≥ 50 kT) via root `AGENTS.md` hint — generalizes beyond STATE.md.
> - **Op 3**: Auto-archive convention for completed-campaign master content at close — applies retroactively to v2 + LWX masters in a later mission (M3.x).
>
> **Self-reference (Standing Order #8)**: M2.1 splits the very STATE.md that every cold-start agent (including this Rosetta) loads first. The protocol that designs the split also pays the splitting tax. M1.3 + M1.4 measured the cost; M2.1 reduces it.
>
> **North-star alignment** (per `aDNA.aDNA/MEMORY.md`): *"easy and fluid way to build/operate/utilize context graphs"* — splitting the heaviest live navigational artifact in the vault is the highest-leverage move on this north-star. Every future agent session pays the STATE.md tax on entry; M2.1 cuts it by ≥ 4× (target ≤ 20 kT content-load on the router post-split).

## Mission scope

Execute the M1.3 + M1.4 top-3 M2.1 optimization queue: split `aDNA.aDNA/STATE.md` into a live router + an audit archive; install a `AGENTS.md` default-offset-and-limit convention for heavy files; document the auto-archive convention as a forward-applicable doctrine (skill candidate; retroactive scope deferred to M3.x).

Implementation-class; canonical 3-session shape (S1 non-destructive design / S2 destructive split + AGENTS.md edit / S3 validation + AAR + node.aDNA addendum + mission close).

**3 canonical outputs** (mapped to top-3 queue):

1. **Op 1 live** — STATE.md router (≤ 20 kT content-load) + `STATE_archive.md` (the 42 DEPRECATED-marker sections verbatim). Forward references preserved; rollback path defined.
2. **Op 2 live** — root `aDNA.aDNA/AGENTS.md` carries the offset+limit hint for heavy files; upstream propagation seeded as a backlog idea (waits for v8 P6).
3. **Op 3 documented** — `auto-archive on campaign close` convention specified as design memo; retroactive application of the same shape to other vaults' heavy files (lattice-labs/STATE.md, etc.) flagged as future scope; skill graduation candidate.

## Objectives

### 1. Author this mission spec (S1)

- **Status**: in_progress (S1; this file)
- **Session**: S1
- **Read**: [[../missions/artifacts/m13_obj7_calibration_output.md|M1.3 Obj 7]] §6 (top-3 queue); [[../missions/artifacts/m14_obj7_validation_output.md|M1.4 Obj 7]] §7 (queue confirmation); [[../missions/artifacts/aar_m14_latticescope_schema.md|M1.4 AAR]] §(d) campaign-level signals; [[mission_adna_str_p1_m14_latticescope_schema.md|M1.4 mission spec]] (structural template); current `aDNA.aDNA/STATE.md` (split target).
- **Produce**: this file.
- **Depends on**: M1.4 close (done); P1 → P2 phase exit gate (approved at plan ratification per Campaign S.O. #19 + project S.O. #1).

### 2. Op 1 — STATE.md split design spec (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: current `aDNA.aDNA/STATE.md` (specifically its section headings + DEPRECATED-marker structure); M1.4 mission spec for the cut-point convention.
- **Produce**: `missions/artifacts/m21_obj2_state_split_design.md` — (a) router shape (which sections stay, target ≤ 20 kT); (b) archive shape (the 42 DEPRECATED-marker sections, frontmatter, anchor preservation); (c) cut-point enumeration (exact line ranges by section header); (d) forward-reference preservation strategy (anchor IDs survive; wikilinks resolve to either router or archive); (e) rollback plan (`git reset --hard` to recover pre-split state); (f) verification targets (post-S2 byte count, token count, Read tool succeeds without offset/limit, 5-wikilink resolution test).
- **Depends on**: 1
- **Migration-safety gate**: Spec includes a dry-run pre-check at S2 entry (archive-first commit, then router-rewrite; if router-rewrite fails verification, archive stays, router can be regenerated).

### 3. Op 2 — AGENTS.md hint design spec (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: current `aDNA.aDNA/AGENTS.md` (root); `aDNA.aDNA/MEMORY.md` (companion target); M1.4 cross-vault traversal observability finding.
- **Produce**: `missions/artifacts/m21_obj3_agents_md_hint_design.md` — (a) hint location (root `aDNA.aDNA/AGENTS.md` "Agent Startup" or "Safety Rules" section); (b) hint text (≤ 3 lines; tells agents to default to `offset+limit` Reads on `STATE.md` + any file ≥ ~50 kT; cites M1.3 + M1.4 token-baselines.md); (c) companion `MEMORY.md` line (opt-in, ≤ 150 char, persists across cold-starts); (d) upstream-contribution backlog placeholder at `how/backlog/idea_upstream_state_md_read_hint.md` for v8 P6 propagation to `.adna/AGENTS.md`; (e) cross-vault scope note (only `aDNA.aDNA/AGENTS.md` lands at M2.1 S2; ecosystem-wide propagation waits for v8 P6 per Campaign S.O. #14 + ADR-005 rule 3).
- **Depends on**: 1, 2 (split design informs router-vs-archive guidance in the hint)
- **Cross-vault constraint gate**: Spec explicitly bans any `.adna/` upstream edits at S2 (v7.0 frozen); upstream propagation lives in the backlog placeholder.

### 4. Op 3 — Auto-archive convention design spec (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: existing campaign masters at `how/campaigns/campaign_*/` to confirm the convention generalizes; `how/skills/` to assess skill-graduation candidate.
- **Produce**: `missions/artifacts/m21_obj4_archive_convention_design.md` — (a) trigger definition (at campaign close, rotate verbose mission-by-mission `Amendments` content into a sibling `<campaign>_archive.md` file); (b) STATE.md as the first canonical instance (mission-state archive at the vault level, not just campaign-level); (c) shape extends to other vaults' heavy files (lattice-labs/STATE.md, LatticeNetwork.aDNA/STATE.md as it grows, etc.); (d) skill candidate `skill_campaign_close_archive.md` — design sketch (NOT authored at M2.1; queued for M2.2 or M3.x); (e) retroactive scope decision per D4 default A — defer retroactive `campaign_adna_v2_infrastructure_archive.md` + `campaign_lattice_workspace_ux_archive.md` to M3.x (keeps M2.1 sized at 2-3 sessions); (f) decision rubric for when to graduate to a skill (≥ 3 campaigns close into the same shape).
- **Depends on**: 1
- **Doctrine gate**: Spec is convention-as-doctrine; no executable code at M2.1; skill graduation deferred to M3.x at earliest.

### 5. Op 1 destructive execution — split STATE.md (S2)

- **Status**: pending S2
- **Session**: S2
- **Requires**: explicit operator approval per Standing Order #1 (destructive: large structural rewrite of `aDNA.aDNA/STATE.md`)
- **Read**: Obj 2 design spec (verbatim); pre-split `STATE.md`.
- **Produce**: (a) `aDNA.aDNA/STATE_archive.md` (the 42 DEPRECATED-marker sections verbatim; frontmatter `type: state_archive`); (b) rewritten `aDNA.aDNA/STATE.md` (router; ≤ 20 kT; forward-link to archive at top); (c) `git commit` archive-first, then router-rewrite (two commits; rollback-safe).
- **Depends on**: 4 (S1 closure); operator approval
- **Rollback path**: `git reset --hard <pre-split-sha>` recovers pre-split STATE.md; archive file deletion via `rm` + commit if rollback retained.

### 6. Op 2 destructive execution — AGENTS.md hint + MEMORY.md line + backlog placeholder (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: Obj 3 design spec; current `AGENTS.md` + `MEMORY.md` content.
- **Produce**: (a) `aDNA.aDNA/AGENTS.md` updated with the offset+limit hint (≤ 3 lines added to "Agent Startup" or "Safety Rules"); (b) `aDNA.aDNA/MEMORY.md` companion line (≤ 150 char); (c) `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md` (backlog placeholder for v8 P6 upstream propagation; follows `idea_upstream_*.md` precedent).
- **Depends on**: 5 (the hint references the post-split router shape)
- **Idempotency gate**: hint text is idempotent — if added a second time by a future skill or agent, it can be de-duped without breaking; no executable code at this step.

### 7. Validation output + AAR + node.aDNA addendum + mission close (S3)

- **Status**: pending S3
- **Session**: S3
- **Read**: all S1 + S2 outputs; `node.aDNA/what/context/token_baselines.md` v0.1.1 (M1.4 S3 output).
- **Produce**:
  - `missions/artifacts/m21_obj7_validation_output.md` — pre/post split content-load delta (target ≤ 20 kT post-split; ≥ 4× reduction); API-billing forecast for typical session (cache_creation tax at session entry should drop proportionally; full delta measurable at M2.3); 5-wikilink resolution sample (5 specific wikilinks pointing INTO STATE.md from mission AARs / campaign masters; all 5 must resolve to either router or archive); Read tool full-file Read on STATE.md succeeds (under 256KB); top-3 queue Op 1 status `completed`, Op 2 `completed-local`, Op 3 `documented`; ADR-016 prep notes addendum (note for M2.2: when the split happened, what changed).
  - `missions/artifacts/aar_m21_context_audit_split.md` — lightweight 5-line + 4-category extended findings (methodological corrections + conceptual contributions + doctrine seeds + campaign-level signals); 11+ acceptance-criteria scorecard; Standing-Order discharge table; token-budget estimate-vs-actual.
  - `node.aDNA/what/context/token_baselines.md` light addendum (a §"Split-as-pattern" note; v0.1.1 → v0.1.2 or v0.1.1-addendum; companion YAML version field bump); `node.aDNA/what/inventory/inventory_vaults.yaml` content_entities token_baselines row version bump.
  - Campaign master M2.1 row `in_progress → completed`; M2.2/M2.3/M2.4 rows stay `next` (operator-discretionary parallel entry); new amendments entry appended.
  - STATE.md (router) "Current Phase" block updated (M2.1 closed; M2.2/M2.3/M2.4 cohort entry posture).
- **Depends on**: 5 + 6

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M2.1 mission spec | S1 | **landed at S1** (this file; `mission_adna_str_p2_m21_context_audit_split.md`) |
| 2 | Op 1 STATE.md split design spec | S1 | **landed at S1** (`artifacts/m21_obj2_state_split_design.md`) |
| 3 | Op 2 AGENTS.md hint design spec | S1 | **landed at S1** (`artifacts/m21_obj3_agents_md_hint_design.md`) |
| 4 | Op 3 auto-archive convention design spec | S1 | **landed at S1** (`artifacts/m21_obj4_archive_convention_design.md`) |
| 5 | Op 1 destructive execution — STATE.md split | S2 | **landed at S2** (Phase A `STATE_archive.md` create SHA `95332df` + Phase B `STATE.md` router rewrite SHA `7a87022` + Phase C no-op cross-link audit 5/5 wikilink PASS + Phase D verification snapshot 841% router reduction factor) |
| 6 | Op 2 destructive execution — AGENTS.md hint + MEMORY.md line + backlog placeholder | S2 | **landed at S2** (SHA `235c3fd`; 4 file writes: `AGENTS.md` Heavy-File Read Convention + auto-memory `MEMORY.md` index + auto-memory `feedback_heavy_file_read.md` + `how/backlog/idea_upstream_state_md_read_hint.md`) |
| 7 | Validation output + AAR + node.aDNA addendum + mission close | S3 | pending S3 |

## Acceptance criteria

- [ ] All 7 deliverables landed (S1: 1-4; S2: 5-6; S3: 7)
- [ ] Post-split `aDNA.aDNA/STATE.md` is ≤ 80,000 bytes (≤ 20 kT content-load); ≥ 4× reduction from pre-split 347 KB
- [ ] Read tool succeeds on STATE.md router with NO offset/limit (full file under 256KB)
- [ ] `aDNA.aDNA/STATE_archive.md` exists with frontmatter `type: state_archive` and contains all 42 DEPRECATED-marker sections verbatim
- [ ] 5-wikilink sample test passes (5 wikilinks pointing INTO STATE.md from mission AARs / campaign masters all resolve to either router or archive)
- [ ] `aDNA.aDNA/AGENTS.md` carries the offset+limit hint (≤ 3 lines added)
- [ ] `aDNA.aDNA/MEMORY.md` companion line landed (≤ 150 char)
- [ ] `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md` backlog placeholder exists
- [ ] Op 3 convention documented in `m21_obj4_archive_convention_design.md`; skill graduation decision deferred to M3.x at earliest
- [ ] Zero `.adna/` upstream touches end-to-end (v7.0 frozen verified)
- [ ] `node.aDNA/what/context/token_baselines.md` light addendum landed (split-as-pattern note + version bump)
- [ ] M2.1 AAR lightweight 5-line + 4-category extended findings landed
- [ ] Campaign master M2.1 row `completed`; STATE.md (router) updated

## Operator decision gates (D1-D5 — Rosetta defaults A resolved at plan approval 2026-05-19)

| # | Question | Rosetta default | Resolved at |
|---|---|---|---|
| D1 | Archive destination shape — single top-level `STATE_archive.md` OR rotated quarterly `how/state_archive/state_archive_2026_q2.md`? | **A: Single top-level `STATE_archive.md`** (simpler; rotation can land at M3.x if needed; the archive is mostly cold storage; single-file is easier to grep + reference) | plan approval |
| D2 | Phase 7 Progress block disposition — keep in router OR move to archive? | **A: Keep in router** (Rosetta Phase 7 status remains live signal until v8 P5 absorbs the remaining cycles; moving to archive prematurely loses the live posture) | plan approval |
| D3 | `Last Session` retention in router — 1 most-recent block (M1.3 S3 close) OR 2 most-recent (M1.3 S3 + M1.4 S3)? | **A: 1 most-recent block** (M1.3 S3 close; the campaign master + M1.4 mission file already hold M1.4 detail; router only needs the most recent because deeper history routes through archive) | plan approval |
| D4 | Op 3 retroactive scope at M2.1 vs M3.x — include retroactive `campaign_*_archive.md` for v2 + LWX at M2.1 OR defer to M3.x? | **A: Defer to M3.x** (keeps M2.1 sized at 2-3 sessions; retroactive work has zero blocking-impact on M2.x cohort or P2 exit) | plan approval |
| D5 | Canonical session shape — 3-session (S1 spec, S2 destructive, S3 close) OR S3-absorb-into-S2 compression per M06 precedent? | **A: Canonical 3-session** (M2.1 has 2 destructive paths — STATE.md split + AGENTS.md/MEMORY.md edits + backlog placeholder; S3 buffer is honest scope; S3 also produces node.aDNA `token_baselines.md` light addendum which needs post-split data settled) | plan approval |

All defaults resolved at plan ratification 2026-05-19. S2 entry stays operator-gated per Standing Order #1.

## Hard constraints

- **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; Op 2 upstream propagation deferred to v8 P6 per Campaign Standing Order #14 + ADR-005 rule 3. The backlog placeholder is the only Op-2-upstream artifact authored at M2.1 (and it lives in `aDNA.aDNA/how/backlog/`, not in `.adna/`).
- **Zero partner-vault contact** — 4 embargo memos preserved (2 Wilhelm ADR-010 + 1 SuperLeague + 1 SIP; per v2 M06 D5 passive).
- **Zero `~/.claude/settings.json` modifications** — M1.3 S2's `.claude/settings.local.json` project-local hook config preserved as-is; the offset+limit hint is a guidance note, not a settings change.
- **No ADR drafts at M2.1** — ADR-016 (per-mission context budget) ratifies at M2.2 per Campaign Standing Order #14; M2.1 produces NO ADR text. The auto-archive convention design (Obj 4) is doctrine-as-design-memo, not ADR.
- **`node.aDNA/` stays local-only** — Standing Rule #4 (workspace router); S3 refreshes `token_baselines.md` v0.1.1 in place with a light addendum; companion `token_baselines.yaml` `federation_visibility` stays `opt_in_anonymized`.
- **No retroactive `campaign_*_archive.md` at M2.1** — per D4 default A; retroactive split of v2 + LWX masters waits for M3.x. M2.1 documents the convention only.
- **S1 is non-destructive** — mission spec + 3 design artifacts only; no STATE.md structural changes; no AGENTS.md/MEMORY.md edits; no backlog placeholder yet.
- **S2 destructive entry requires explicit operator approval** per Standing Order #1 — phase gate is a human gate.
- **No M1.5 work at M2.1** — M1.5 coord-network discharge stays in its own operator-discretionary parallel track; M2.1 does not touch coord memos, LIP-0006 ratification, or entity-type parallel-discharge.

## Standing Order discharges

| # | Order | M2.1 discharge |
|---|---|---|
| Project SO #1 | Phase gates are human gates | P1 → P2 transition approved at plan ratification 2026-05-19; S2 destructive entry (STATE.md split + AGENTS.md edits) requires explicit operator approval; M2.1 → M2.2/M2.3/M2.4 cohort entry at S3 close stays operator-gated per Campaign S.O. #19 |
| Project SO #3 | Context budget is doctrine | M2.1 is the canonical implementation of the doctrine — Op 1 cuts the heaviest live navigational file by ≥ 4× content-load; Op 2 propagates the offset+limit convention; Op 3 documents the close-time auto-archive trigger |
| Project SO #5 | Every mission gets an AAR | S3 produces `aar_m21_context_audit_split.md` (lightweight 5-line + 4-category extended findings) |
| Project SO #6 | Archive never delete | The 42 DEPRECATED-marker sections preserved verbatim in `STATE_archive.md`; pre-split `STATE.md` recoverable via `git reset --hard` |
| Project SO #7 | Dual-audience test | Spec authored for developer (DDL of cut points + AGENTS.md hint text + idempotent commits) + newcomer (why the STATE.md tax matters; what the offset+limit convention buys; how the archive preserves history without bloat) |
| Project SO #8 | Self-reference mandatory | M2.1 splits the very STATE.md that every cold-start Rosetta loads first; the protocol that designs the split pays the splitting tax (cache_creation cost on this S1 session reads pre-split STATE.md); M1.3 + M1.4 measured the cost, M2.1 reduces it |
| Project SO #10 | Cross-link aggressively | This spec wikilinks: M1.3 mission spec + M1.3 Obj 7 + M1.3 AAR + M1.4 mission spec + M1.4 Obj 7 + M1.4 AAR + campaign master + campaign CLAUDE.md + project CLAUDE.md + node.aDNA token_baselines (10+ wikilinks) |
| Campaign SO #11 | Per-phase decadal AAR | M2.1 = mission #1 in P2; decadal AAR triggers at P2 exit gate (separate session post-P2 close) per Campaign Standing Order #11 |
| Campaign SO #12 | Per-mission context budget | Frontmatter declares `token_budget_estimated: "S1 60-90 kT / S2 100-180 kT / S3 60-80 kT"`; M2.1 self-measures and reports estimate-vs-actual in S3 AAR |
| Campaign SO #14 | ADR ratification gated at phase entries | Honored — no new ADRs drafted at M2.1; ADR-016 properly ratifies at M2.2; the auto-archive convention (Obj 4) is doctrine-as-design-memo, NOT an ADR text |
| Campaign SO #16 | v7.0 tag dependency | Satisfied at v2 M06 S2 close 2026-05-18T19:10Z+; M2.1 runs after v7.0 tag |
| Campaign SO #17 | Mission_class discipline | Frontmatter declares `mission_class: implementation`; canonical 3-session shape (3rd instance after M1.3, M1.4) |
| Campaign SO #19 | Phase exit = human gate | Applied at P1 → P2 (approved at plan ratification 2026-05-19); applies again at P2 → P3 (M2.1 close does NOT auto-open M3.x cohort) |

## Cross-vault impact

- **`node.aDNA/`** — receives `what/context/token_baselines.md` v0.1.1 light addendum at S3 (split-as-pattern note; not a full v0.1.2 bump unless the addendum is substantive); `what/inventory/inventory_vaults.yaml` content_entities row may bump version field. Local-only by default per workspace router Standing Rule 4.
- **`LatticeScope.aDNA/`** — no contact at M2.1; vault stays not-bootstrapped per M1.4 D2 default B; MLS-0 still at v8 P6.
- **`III.aDNA/`** — no contact at M2.1; Phase 5 partner.
- **`LatticeTerminal.aDNA/`** — no contact at M2.1; Phase 4 partner.
- **`lattice-labs/`** — Berthier monitors via existing dispatch channel; no new coord memo for M2.1; the auto-archive convention (Obj 4) eventually applies to `lattice-labs/STATE.md` (heavy too) but retroactive work is M3.x scope.
- **17 partner-vault v7.0 migrations** — already unfrozen at M1.2; M2.1 does not own these.
- **`LatticeNetwork.aDNA/` + `LatticeLabs.aDNA/`** — no contact at M2.1; M1.5 coord-network handles network-architecture coord; M2.1 is intra-vault context-architecture work.

## Self-reference + dual-audience

**Self-reference** (Standing Order #8): M2.1 splits the very `aDNA.aDNA/STATE.md` that every cold-start Rosetta session loads at startup (per project CLAUDE.md §Agent Protocol step 3). This Rosetta paid the full ~75.8 kT content-load tax at session start to load STATE.md — and then exceeded the 256KB Read-tool limit attempting a no-offset Read. The protocol that designs the split pays the tax that the split eliminates. M1.3 + M1.4 measured the tax (CP-0 5.85 kT vs CP-1 22.99 kT vs CP-2 of a long session in tens-of-MT). M2.1 cuts the recurring cost.

**Dual-audience** (Standing Order #7):

- **Developer reads**: Obj 2 cut-point enumeration + line-range table + git-commit sequencing; Obj 3 AGENTS.md hint text + companion MEMORY.md line; Obj 5/6 destructive-execution acceptance (byte count, Read-tool no-offset succeeds, 5-wikilink resolution test).
- **Newcomer reads**: Mission scope opening paragraph (LOAD-BEARING for the north-star UX goal; why every future agent benefits); §Self-reference (the recursive measurement-and-correction story across M1.3 → M1.4 → M2.1); AAR §load-bearing finding at S3 close (post-split convergence-model verdict update).

Both audiences land at the same conclusion: **the heaviest file in the vault was 95% audit history; routing the live signal through a smaller surface lets every future session move faster without losing the historical record.**

## Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Wikilink resolution breaks for downstream files that link INTO STATE.md by anchor | Medium | Obj 2 spec preserves all section anchors (they survive in either router or archive); S3 verification samples 5 specific incoming wikilinks (mission AARs, campaign masters, coord memos) and confirms all 5 resolve |
| Archive file size approaches Read-tool 256KB limit eventually as future DEPRECATED-marker sections accumulate | Low (medium-term) | Obj 4 archive convention establishes the rotation pattern; quarterly rotation kicks in if `STATE_archive.md` ever > 200KB; rotation deferred to M3.x or operator-discretionary |
| Op 2 hint conflicts with Anthropic Claude Code default Read behavior or future tool changes | Low | Hint is advisory not configuration; if Claude Code changes Read defaults, hint becomes redundant (no regression); upstream propagation backlog placeholder waits for v8 P6 to assess upstream desirability |
| Router rewrite loses a live operational signal that was lurking in a DEPRECATED-marker section | Low-Medium | Obj 2 cut-point spec enumerates exact sections moving to archive; only `DEPRECATED-marker` sections (42 of them) move; live sections (`Current Phase`, `Active Campaigns`, `Phase 7 Progress`, `What's Working`, `Active Blockers`, `Next Steps`, `Pending Manual Actions`, most-recent `Last Session`, `Next Session Prompt`) stay in router |
| AGENTS.md hint propagates inconsistently if other forks of `aDNA.aDNA` (e.g., template overlays) diverge | Low | Upstream-contribution backlog placeholder seeds the v8 P6 propagation; until then, the hint lives in `aDNA.aDNA/AGENTS.md` only; Obj 3 spec documents this single-vault scope |
| S2 destructive execution corrupts `aDNA.aDNA/STATE.md` mid-operation (e.g., agent error mid-Write) | Low | Two-commit S2 strategy: archive commit first (full content preserved), router-rewrite commit second; if router-rewrite fails, archive stays and router can be regenerated from archive + design spec; `git reset --hard` recovers in <1 min |
| `node.aDNA/what/context/token_baselines.md` addendum drifts from v0.1.1 canonical without proper version handling | Low | S3 spec includes companion YAML version-field handling; addendum either stays at v0.1.1 with §-only addition OR bumps v0.1.2 if substantive; M2.4 heat-map work later may consolidate v0.1.x → v0.2.0 with a proper bump |

## Status

**S1 OPENED 2026-05-19T19:33:44Z** (`session_stanley_20260519T193344Z_v8_m21_s1`). Mission spec + 3 design artifacts authoring in progress per plan `/Users/stanley/.claude/plans/please-read-the-claude-md-fluffy-stream.md`.

P1 → P2 phase exit gate approved at plan ratification 2026-05-19 per Campaign Standing Order #19 (phase exit = human gate) + project Standing Order #1 (phase gates are human gates).

**Forward-references**: M2.2 (ADR-016 per-mission context budget) ratifies the calibration formula prep'd at M1.3 §6 + addendum-noted at M1.4 §6; M2.3 (cross-campaign retrospective) uses `ingest_transcript.py` to validate the API-billing companion formula across the corpus; M2.4 (AGENTS.md heat map) accumulates ≥ 10-session data — likely runs late P2. M1.5 coord-network discharge stays operator-discretionary parallel; M2.1 explicitly does not touch it.

## Cross-references

- [[mission_adna_str_p1_m13_token_audit.md|mission_adna_str_p1_m13_token_audit.md]] — predecessor (token audit origin of top-3 queue)
- [[mission_adna_str_p1_m14_latticescope_schema.md|mission_adna_str_p1_m14_latticescope_schema.md]] — immediate predecessor (queue confirmation + structural template)
- [[artifacts/m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §6 — top-3 M2.1 queue origin
- [[artifacts/aar_m13_token_audit.md|aar_m13_token_audit.md]] — M1.3 AAR
- [[artifacts/m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §7 — queue confirmation under API-billing data
- [[artifacts/aar_m14_latticescope_schema.md|aar_m14_latticescope_schema.md]] §(d) — M2.1 entry recommendation
- [[../campaign_adna_serious_tool_readiness.md|campaign_adna_serious_tool_readiness.md]] — campaign master §Phase 2 row M2.1
- [[../CLAUDE.md|campaign CLAUDE.md]] — Standing Orders 11-19
- [[../../../CLAUDE.md|project CLAUDE.md]] — Standing Orders 1-10
- `aDNA.aDNA/STATE.md` — pre-split state (split target; current 347 KB / ~75.8 kT)
- `aDNA.aDNA/AGENTS.md` — Op 2 hint target (root)
- `aDNA.aDNA/MEMORY.md` — Op 2 companion line target
- `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md` — Op 2 upstream propagation placeholder (NEW at S2)
- `node.aDNA/what/context/token_baselines.md` v0.1.1 — canonical baseline (S3 addendum target)

## Completion summary

(populated at S3 close)

## AAR

(populated at S3 close — `artifacts/aar_m21_context_audit_split.md`)
