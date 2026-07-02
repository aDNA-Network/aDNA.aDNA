---
plan_id: mission_champollion_m1_2_adr045_record_repair
type: plan
title: "M1.2 — ADR-045 amend-then-ratify + ratification-record discipline + stale-ADR adjudication"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 1
campaign_mission_number: 2
mission_class: implementation
executor_tier: fable
token_budget_estimated: "35 kT"
token_budget_actual: "~32 kT (fable executor; + opus orchestration)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p1, adr_045, ratification_record, governance, m1_2]
---

# Mission M1.2 — Governance record repair (D3/D4 execution)

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: fable** (governance judgment — this mission does NOT downtier).

## Objective

Execute G0 decisions D3 + D4 and land the systemic fix: repair ADR-045's ratification record (amend-then-ratify), adjudicate the 3 stale `proposed` ADRs per the ratified ledger, and install the ratification-record discipline so self-ratification cannot recur silently. Full evidence: [[../artifacts/governance_retro_package|governance retro package]] (ratified header) + gate record `how/gates/champollion_p0_gate.output.md`.

## Work

1. **ADR-045 repair**: rewrite its status/ratification section into a proper record — ratifier = operator (Stanley) · gate ref = `champollion_p0_gate` + output record · date = 2026-07-02 · scope = wrapper placement + the migrations executed on it · **provenance note** preserving the honest history (originally self-marked `accepted` 2026-06-30 without a discrete gate; repaired per D3(b)). **Reconcile the wrapper count**: investigate ~216 (ADR text) vs ~208 (STATE) — source both claims (retro package §1 has the trail); if unresolvable from this vault, record both with attribution and mark `count: reported-range 208–216, per-vault verification at fleet re-seed`.
2. **Stale ADRs** (ratified dispositions, ledger §stale-ADRs): `adr_003` → `accepted` (+ratification block citing G0/D2; implemented ~15 mo) · `adr_012` → `accepted` (+block; 3 co-signers already) · `adr_027` → `accepted` + refresh note (cites archived vaults; bundle pointer → the `terminal_harness_contract_reanchor` backlog item, Ring-1 #6).
3. **Ratification-record discipline**: update `how/backlog/idea_upstream_template_ratification_record.md` with the normative text from retro §4 (every `accepted` ADR carries ratifier/gate-ref/date/scope; **agents may set `proposed` only**) + `fold_batch: champollion_m6_1_rc`. Draft the `adna_validate` check **as a spec** in the idea (implementation rides M2.2/M6.1 — do not modify `adna_validate.py` in this mission).
4. **D4 closure**: annotate retro §2 (incident B) `CONFIRMED-ACCEPTED (low) at G0`; strike the `#needs-human` markers for both incidents wherever they appear live (STATE QUEUED banner already clean; check `rg -n 'needs-human' STATE.md | head` for stale hits — annotate, don't delete history).

## Acceptance criteria

- [ ] `adr_045` status block = full ratification record + provenance note; wrapper count reconciled-or-attributed.
- [ ] adr_003/012/027 all `accepted` with ratification blocks citing the G0 record; zero ADRs left at `proposed` (new ADRs henceforth start `proposed` per the discipline).
- [ ] Discipline idea updated + fold-marked; validator-check spec inside it.
- [ ] `adna_validate` FULL PASS + `--governance` zero drift; single explicit-path commit.

## Guardrails

Never soften the provenance note — the honest history IS the exemplar (SO-8) · no `.adna/` or `adna_validate.py` changes · no push · no re-opening of D3 (option (b) is decided) · public-boundary holds (the repair text is public).

## Verification surface

`rg -c '^status: proposed' what/decisions/adr_*.md` == 0 · `rg -l 'ratifier' what/decisions/adr_045*.md what/decisions/adr_003*.md what/decisions/adr_012*.md what/decisions/adr_027*.md | wc -l` == 4 · validator both modes.

## Escalation triggers

- Wrapper-count investigation surfaces evidence the *decision itself* (not just the record) is defective → halt, render a new gate (do not repair-and-sign a broken decision).
- Any ADR edit would contradict a ratified decision elsewhere → halt that ADR, log F-CHM.
- Budget > 55 kT → checkpoint + hand off.

## AAR

**Session**: `session_stanley_20260702T053035Z_champollion_m1_2` · **Commit**: `23fd294` (work; unpushed, P1 commit-only) · **Executor: fable** (governance-judgment edits via fable subagent, orchestrated + verified by opus). AAR artifact: [[../../../missions/artifacts/campaign_champollion_mission_m1_2_aar|campaign_champollion_mission_m1_2_aar]].

- **Worked**: the fable subagent — tier-matched to the "does-NOT-downtier" brief — authored all four judgment edits in one pass: the unsoftened ADR-045 provenance note (SO-8), full 4-field ratification blocks on all four ADRs (`Ratifier` present ×4), and the wrapper count attributed to a reported range ~208–216. Opus verified independently (rg proposed==0 · Ratifier==4 · `adna_validate` full + `--governance` zero drift) before the single explicit-path commit. All four acceptance criteria met.
- **Didn't**: nothing failed, no escalation triggered. The one judgment ambiguity — "strike" vs "annotate" the two STATE `#needs-human` incident flags — was resolved by annotate-in-place (append "→ RESOLVED at G0"), preserving history and consistent with STATE's other historical `needs-human` strings; the QUEUED banner (the live open-items oracle) was already clean.
- **Finding**: a fable-marked "does-not-downtier" mission runs cleanly as a fable *subagent under opus orchestration* — the judgment stays at tier (`model_actual = fable` matches `tier_planned`) while opus handles scaffolding/verify/commit, and the opus verify pass is a genuine independent second read on governance text. New execution shape vs M1.1's direct-opus run.
- **Change**: for orchestrated-tier missions, record the tier-matched executor spend separately from orchestration overhead so the Prometheus corpus reads the judgment-work budget cleanly (`token_budget_actual` notes both).
- **Follow-up**: NEXT = M1.3 (sonnet, adr_index — now reflects the repaired statuses) + M1.4 pairable; M1.5 (STATE diet) LAST. The `adna_validate` ratification-block check + `template_adr` fold ride M2.2/M6.1 (spec-only landed here). ~32 kT fable executor vs 35 kT est (−9%, within ADR-016).
