---
type: gate
gate_id: champollion_p0_gate
title: "Operation Champollion — P0 ratification gate (G0)"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: pending   # → resolved when the operator's decisions are transcribed to the output block
outer_tier: copy_paste   # ISS web tier unavailable (receiver :8765 down) — skill_create_iss fallback chain honored
persona: rosetta
tags: [gate, champollion, p0, phase_exit, operator_decision, irreversible]
---

# ⛩ G0 — Operation Champollion P0 ratification gate

```yaml
sitrep:
  campaign: "campaign_champollion · Operation Champollion"
  phase: "Phase 0 — ORIENT (complete; awaiting ratification)"
  mission: "M0.1 — orient/verify/charter/gate"
  gate_purpose: "Ratify the Champollion charter and adjudicate the 9 bundled decisions that arm P1."
  importance: "irreversible"
  importance_reason: "carries standard-touch ratifications (ADR-045/003/012/027) + a public-push decision"
  output_destination: "how/gates/champollion_p0_gate.output.md (or reply in-chat; Rosetta transcribes)"
```

**Read first** (all committed at `32f0eb6`): [[../campaigns/campaign_champollion/campaign_champollion|charter]] · [[../campaigns/campaign_champollion/artifacts/order_of_battle|Order of Battle]] · [[../campaigns/campaign_champollion/artifacts/backlog_adjudication_ledger|backlog ledger (91+3 draft dispositions)]] · [[../campaigns/campaign_champollion/artifacts/governance_retro_package|governance retro]] · [[../campaigns/campaign_champollion/artifacts/findings_ledger|findings F-CHM-001..012]] · [[../campaigns/campaign_champollion/artifacts/risk_register|risks R1–R10]].

## Decisions (answer any subset; unanswered = held open, campaign stays `planning`)

### D1 — Ratify the charter? `GO / AMEND / NO-GO` — **rec: GO**
8 phases (P0–P7), 24 missions, two rings (ring cut at G3), model-tiered per the pattern, DoD = directive §8. GO flips `status: planning → active` and materializes P1 mission briefs (fable-tier) as the first post-gate act.

### D2 — Backlog dispositions: `RATIFY AS DRAFTED / AMEND (name items) / DEFER` — **rec: RATIFY**
91 items: **27 already-discharged** (status-flip sweep) · **31 accept→template-fold** (batch to RC) · **14 accept→fix/mission** · **17 defer-with-owner** · **2 decline-stale**. Plus 3 stale ADRs: **ratify adr_003, adr_012; ratify-with-refresh adr_027**. M1.1 executes exactly the ratified set; every disposition is reversible by a later gate except the 2 declines (archived, never deleted — SO-6).

### D3 — ADR-045 (self-ratified, already public): `(a) RETRO-RATIFY AS-IS / (b) AMEND-THEN-RATIFY / (c) RE-GATE` — **rec: (b)**
The decision is sound; the *record* is the defect (marked `accepted` without the operator gate ADR-043/044 got; wrapper count claims ~216 vs STATE ~208, unreconciled). (b) = M1.2 repairs the status block into a proper ratification record (ratifier · gate ref · date · scope), reconciles the count, you sign. (c) destabilizes a shipped, consumed public standard.

### D4 — `98bb488` hold-override exposure: `CONFIRM ACCEPTED / INVESTIGATE FURTHER` — **rec: CONFIRM**
The overridden hold covered the de-identified client proof; Lane 2 judges exposure **low** (content de-identified/aggregated by design; push retroactively blessed ~12 min later by your ship-approval). Systemic fix ships regardless: ratification-record discipline (D3) + agents-set-`proposed`-only + validator check.

### D5 — `campaign_adna_v3_ecosystem_compliance` seed: `(1) SUPERSEDE-AND-ABSORB / (2) FULL ABSORB / (3) KEEP ALIVE` — **rec: (1)**
Its 19-vault fleet audit is v7.0-era-stale and post-launch by nature. (1): Champollion absorbs the this-vault/template-readiness slice; v3-EC → `superseded` with pointer; fleet pass re-seeds post-launch on the v2.5/v8.4 baseline (owner Rosetta+Hestia, trigger: P7 close). (2) blows the launch window (R3/R4).

### D6 — Push the held stack? `PUSH NOW / HOLD` — **rec: PUSH**
Local main is ahead of public `origin/main` by the 3 STR-close commits + the P0 checkpoint (+ this close commit). Contents: campaign records only — exactly this public dev graph's normal record. Pushing closes the revert window and removes the divergence surface that caused both prior incidents (R1). HOLD is fully honored if you want the gate outcome reflected first.

### D7 — Release the staged memos (Noether · Prometheus)? `RELEASE / HOLD` — **rec: RELEASE on D1=GO**
Releases the Carnot-alignment countersign ask + the model-tier pattern/telemetry offer (status `staged → filed`). Both are propose-only; Prometheus's is harmonized with Carnot's own operator gate (D-C7).

### D8 — `SS_VERCEL_TOKEN` posture: `ROTATE NOW (via Hestia broker) / RE-ACCEPT DEPRIORITIZED` — **rec: your standing call (re-accept), re-confirmed here**
You de-prioritized rotation 2026-06-07 (test account). Directive §2.4 asks the question be re-put once. Leak-class mitigation lands regardless: env-var+redact doctrine stays binding; `public_projection_sanitizer` is Ring-1 #1 in the ledger; M6.3 re-verifies. Tree is clean (names-only, gitleaks hook live).

### D9 — Codename: `KEEP "CHAMPOLLION" / RENAME (name it)` — **rec: KEEP**
Champollion made the Rosetta Stone legible — the campaign makes the Rosetta vault legible for launch. Sibling symmetry with Carnot holds.

## On ratification (Rosetta executes, no further ask)
1. Transcribe decisions → `champollion_p0_gate.output.md`; flip this gate `pending → resolved`; clear the `.pending` sentinel.
2. D1=GO: charter `→ active`; materialize P1 briefs (M1.1–M1.5) at fable tier; STATE ⏭ QUEUED banner updated.
3. Execute D6/D7 as decided (push and/or memo release).
4. P1 opens next session per the Next Session Prompt (Ring-1 spine, M1.1 first).
