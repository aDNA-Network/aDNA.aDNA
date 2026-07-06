---
type: template
title: "Ratification Record — Ceremony or Per-ADR Block"
created: 2026-07-06
updated: 2026-07-06
status: active
last_edited_by: agent_rosetta
tags: [template, governance, ratification, decision_record, ceremony, adr]
fold_batch: champollion_m6_1_rc   # upstream-shipped at v8.5; this is the local project-vault mirror
---

# Template — Ratification Record

> **Plain-language version (two sentences):** An agent authors a decision; an operator ratifies it. This record is how that ratification is written down — so it can be audited, cited, and carried forward.

**Purpose.** In the aDNA governance model (§7.7), agents are the authors of decisions, ADRs, and phase-gate recommendations — but only a named human operator can make them binding. A ratification record is the proof artifact: it names the ratifier, points to the discrete event at which they signed, dates the act, and states what it authorizes. Without this record, an `accepted` status on an ADR is just a field value; with it, the status is an attested governance event.

**Two entry points — one schema:**

- **Per-ADR block** (most common): embedded in the ADR's own `## Ratification` section. Use this when a single ADR is ratified at a gate.
- **Ceremony record** (N-at-once variant): a standalone artifact in `how/gates/` or a campaign's `artifacts/`. Use this when a phase gate ratifies several ADRs in one motion.

---

## Entry Point A — Per-ADR Ratification Block

Copy this block into the ADR's own `## Ratification` section. An agent MAY fully pre-fill it (at `status: proposed`); only the named operator may advance the status to `accepted`.

```markdown
## Ratification

| Field | Value |
|-------|-------|
| **Decision** | {what this ADR resolves — one sentence} |
| **Ratified-by** | {Named human operator, e.g. "Stanley, Founding Architect"} — an agent/persona is author/steward, never ratifier |
| **Date** | {YYYY-MM-DD — distinct from the ADR's `created` date} |
| **Status** | proposed → **accepted** |
| **Gate / session reference** | {verifiable pointer: AskUserQuestion lane ID and/or approved-plan file · ratifying `session_id` · ratifying commit SHA} |
| **Scope of authority** | {exactly what this ratification authorizes: this ADR only, or a named downstream program} |
| **Pending co-signs** | {none — OR: seams stay doctrine until co-sign from `<persona>` lands (ADR-043 precedent)} |
```

**Rules (§7.7 + backlog-idea §4.1–4.2):**

- An agent MAY set / keep `proposed` (and `draft`) on its own authority and MAY fully author the ADR body (Context / Decision / Consequences / Alternatives / References all pre-filled).
- An agent MUST NOT unilaterally set `accepted`, `ratified`, or `rejected` — those require the operator gate above.
- **Pending co-signs keep seams non-operative**: when another vault or persona must co-sign, record it in "Pending co-signs." The decision binds at ratification; seams it opens stay doctrine until the co-sign lands (the ADR-043 precedent).
- Lifecycle-neutral back-references (e.g. adding `superseded_by` once the superseding ADR is itself ratified) are exempt from the operator-gate rule.

---

## Entry Point B — Ceremony Record (N-ADRs-at-Once)

Use this as a standalone artifact (`how/gates/<gate>_ratification.md` or `how/campaigns/<campaign>/artifacts/<dp>_ratification.md`) when a phase gate ratifies multiple ADRs in one operator action.

### Frontmatter (ceremony artifact)

```yaml
---
type: ratification_record
title: "Ratification Ceremony — {gate, e.g. P4 → P5}"
status: proposed   # agent sets; operator advances to accepted at the gate
gate: "{P4 → P5}"
ratifier: "{Named human operator — e.g. Stanley, Founding Architect}"
ratified_date: {YYYY-MM-DD}
ratifying_session: session_{username}_...
ratifying_commit: "{SHA}"
created: {YYYY-MM-DD}
updated: {YYYY-MM-DD}
last_edited_by: agent_{username}
tags: [ratification_record, decision, ceremony]
---
```

### 1. Ceremony header

| Field | Value |
|-------|-------|
| **Gate** | {e.g. P4 → P5} |
| **Ratifier** (named operator/authority) | {e.g. Stanley, Founding Architect} — an agent/persona may appear only as **author/steward**, never as ratifier |
| **Gate / reference** | {verifiable pointer: AskUserQuestion lane and/or approved-plan file id · ratifying `session_id` · ratifying commit SHA} |
| **Ratification date** | {YYYY-MM-DD — distinct from authored/created dates} |
| **Scope of authority** | {exactly what this ceremony authorizes: these ADRs only, or a named downstream program} |

### 2. ADR roster (dependency order)

Every decision this ceremony ratifies, listed in dependency order. Each row's status advances `proposed → accepted` only here, at the gate.

| # | ADR | Prior status | Ratified status | Signed by | Notes / pending co-signs |
|---|-----|--------------|-----------------|-----------|--------------------------|
| 1 | `adr_NNN_short_title` | proposed | accepted | {operator} | {none · or: seams stay doctrine until co-sign from `<persona>` lands} |
| 2 | `adr_NNN_short_title` | proposed | accepted | {operator} | |

> **Pending co-signs keep seams non-operative** (ADR-043 precedent): the decision binds at ratification, but any seam it opens stays *doctrine* until the named co-signs land. Record every such pending co-sign in the Notes column so the seam's operative status is auditable.

### 3. No-contradiction invariants discovered

Cross-phase invariants that surfaced *at* ratification — decisions that only became visible once several ADRs were read together.

- {invariant} — spans ADR-NNN + ADR-NNN.

### 4. Constitutional carry-forward

Explicit language for how the ratified set propagates into subsequent phases / campaigns — what downstream work MUST now assume, and what remains open.

- {carry-forward clause}

### 5. Persona ratification status

Confirms the campaign's persona survived all falsification tests through ratification (or records the correction if it did not).

- {persona} — {survives / adjusted at gate: …}

---

## Usage notes

**When to file a ratification record:**

| Trigger | Entry point | Where it lives |
|---------|-------------|----------------|
| Single ADR advances to `accepted` | Entry Point A (per-ADR block) | Embedded in `what/decisions/<adr_file>.md` `## Ratification` section |
| Phase gate or DP ruling ratifies ≥1 ADR | Entry Point B (ceremony record) | `how/gates/<gate>_ratification.md` or `how/campaigns/<campaign>/artifacts/<dp>_ratification.md` |
| Campaign close / program DP ruling | Entry Point B (ceremony record) | Campaign `artifacts/` directory; pointer in `STATE.md` |
| Co-sign from an external vault | Entry Point A embedded in the ADR + a coord memo to the co-signing persona | ADR in `what/decisions/`; memo in `who/coordination/` |

**What you never do:** mark an ADR `accepted` in a commit whose message and record carry no gate reference. That is the ADR-045 self-ratification failure mode — an agent authored and self-advanced in one motion with no operator gate. The corrected ratification block in `what/decisions/adr_045_wrapper_placement_in_triad.md` is the §4.1 reference instance.

---

## Self-referential example

**Operation Concord DP3 + ADR-047 — ratified 2026-07-06** (Entry Point A, per-ADR):

```markdown
## Ratification

| Field | Value |
|-------|-------|
| **Decision** | Governance-doctrine adoption is checklist-only; vaults adopt the items (§7.7 ratification · credential routing · AskUserQuestion · single-writer lease · executor_tier), not a version number (ADR-047). |
| **Ratified-by** | Stanley, Founding Architect |
| **Date** | 2026-07-06 |
| **Status** | proposed → **accepted** |
| **Gate / session reference** | Operation Concord DP3 — AskUserQuestion "Ratify ADR-047"; paired with DP2 (Tier-A rollout complete). |
| **Scope of authority** | ADR-047 only; establishes the items-not-numbers ruling for all current and future Concord-adjacent fleet adoptions. |
| **Pending co-signs** | none |
```

This is the same block that lives in `what/decisions/adr_047_governance_doctrine_checklist_ruling.md` — visible in the decision file itself, auditable without opening a separate artifact. The parallel DP2 gate is recorded at `how/campaigns/campaign_w4_governance_doctrine/artifacts/dp2_tier_a_rollout_complete.md` (Entry Point B for the fleet-rollout ruling).

---

## Self-reference (Standing Order #8)

This template is itself the discipline it enforces: the standard teaches that decisions are operator-ratified governance events (§7.7), and the record that proves a ratification happened is this instrument. An agent authors the draft; the operator's signature at the gate is what makes it binding. The template's own frontmatter carries `last_edited_by: agent_rosetta` (agent-authored) with `status: active` — because *this file* is a template, not a decision, so `active` is the correct lifecycle status rather than `proposed → accepted`.

---

*Local mirror of the upstream instrument (`.adna/how/templates/template_ratification_record.md`); adapted 2026-07-06 to add: dual-audience plain-language explainer, per-ADR Entry Point A / ceremony Entry Point B split, usage-notes table, self-referential example, and Standing Order #8 note. Upstream fold-batch `champollion_m6_1_rc` (v8.5 release). Originated: backlog idea `idea_upstream_template_ratification_record.md` (Champollion G0 D2, `status: accepted`).*
