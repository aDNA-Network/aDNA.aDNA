---
type: pattern
created: 2026-07-02
updated: 2026-07-02
status: draft
pattern_category: operational
applies_to: [campaigns, missions, coordination, decisions]
campaign_id: campaign_champollion
instances:
  - "order_of_battle.md (Champollion) — aDNA.aDNA (this vault; how/campaigns/campaign_champollion/artifacts/order_of_battle.md — consolidated obligations ledger feeding the charter)"
  - "order_of_battle.md (Carnot) — LatticeProtocol.aDNA (how/campaigns/campaign_carnot/artifacts/order_of_battle.md — the convention this vault mirrored, with ring + codepin frontmatter)"
graduation: "2 instances live (one per sibling campaign) — the third instance graduates this file from draft; template-fold ratification queued at Champollion G3, ships via M6.1 RC (skill_template_release)."
last_edited_by: agent_rosetta
tags: [pattern, order_of_battle, campaign_planning, obligations, disposition_ledger, rings, launch, champollion, carnot]
---

# pattern_order_of_battle

> **Plain-language version first**: before a big campaign starts, dozens of loose ends are floating around — unfinished tasks, open questions, promises made to other teams, half-decided decisions, things "we'll get to later." The danger isn't any single one; it's that some of them **quietly vanish** because nobody wrote them all down in one place. An Order of Battle is that one place: a single table where *every* outstanding thing gets one row, and every row gets exactly one honest answer to "what happens to this?" — either "a specific mission handles it," "we're deliberately carrying it, and here's who owns it and what would make us act," or "we're consciously dropping it, and here's why." The rule is simple and strict: **nothing is silently dropped.** It's a pre-flight checklist for a campaign — you don't take off until every item is either loaded, deliberately left behind with a reason, or assigned to a crew member.

## 1. Problem

A campaign inherits a mess. Open findings from the last campaign, unanswered coordination memos, decisions marked "proposed" and never ratified, backlog items, held-but-not-released instruments, security carries, acks pending with other graphs. Left implicit, this backlog leaks: the classic failure is an obligation that was *real* but got **buried** — never dispositioned, so it neither got done nor got a conscious decision to skip it. The escalation doctrine (a session discovery that affects the campaign must propagate upward, never be buried — Rosetta Standing Orders) needs a *surface* to propagate onto. Without one durable ledger, "did we handle X?" is unanswerable, and the campaign's close can't honestly claim completeness.

## 2. The mechanism

An **Order of Battle (OoB)** is one campaign-scoped artifact — a consolidated obligations ledger — authored at campaign start (after a verification battery / evidence lanes have swept the sources) and carried live to campaign close. Its contract:

1. **Total enumeration.** Every open item from every source is a row. Sources are named explicitly in the artifact so the sweep is auditable (genesis registers, prior-campaign close records, the findings corpus, `who/coordination/`, governance/IP dossiers, held-instrument registers, the backlog).
2. **Exactly one disposition per row.** Each item resolves to precisely one of:
   - **discharged-by-mission** — a specific mission ID owns it (traceable into the charter);
   - **carried** — deliberately held, *with an owner and a trigger* (what would make it actionable);
   - **excluded-with-rationale** — consciously dropped, reason recorded.
3. **The inviolable**: *nothing is silently dropped.* An item with no disposition is a defect the OoB exists to catch.
4. **Sectioned by obligation kind**, so nothing is missed by category: pre-discharged/verified · queued-held (owner-tagged) · governance integrity (`#needs-human`) · pending acks/co-signs (external owners) · security posture · backlog (full adjudication) · counterparty table · program feed.
5. **Feeds the gates.** Rows point at where they land (a mission, a gate item, an owner). At each gate the operator can see the whole obligation surface at once; anything discovered mid-campaign is filed as a finding and lands here at the next gate.

The OoB is the *consolidated* companion to the more granular findings ledger, risk register, and backlog adjudication ledger — it is the one-page "everything outstanding, dispositioned" view a gate reviewer reads.

## 3. Live instances (the structure IS the lesson)

**This vault (self-reference, concrete path):**
- [[../../how/campaigns/campaign_champollion/artifacts/order_of_battle|the Champollion Order of Battle]] (`how/campaigns/campaign_champollion/artifacts/order_of_battle.md`). Eight sections; §1 pre-discharged (STR close, site, validator) · §2 queued/held (DP4 dossier → M6.2, ADR-044 fold → M6.1, 2 graduation seeds → M3.2) · §3 governance integrity as a `#needs-human` G0 package (ADR-045 self-ratification; `98bb488` hold-override; ratification-record discipline) · §4 pending acks (7 external owners) · §5 security · §6 backlog (**91 items + 3 stale ADRs — zero un-dispositioned**, the inviolable in action) · §7 counterparty table · §8 program feed (feeds Operation aDNA DP4). Its own header states the convention: *"One durable ledger of everything outstanding at campaign start, each row dispositioned to a mission, a gate item, or an owner."*

**Sibling campaign (read-only; the source this vault mirrored):**
- `LatticeProtocol.aDNA/how/campaigns/campaign_carnot/artifacts/order_of_battle.md` — Operation Carnot's OoB, the convention Champollion adopted. Its own header quotes the Carnot directive: *"nothing is silently dropped."* Same six-disposition discipline, same "sources swept" audit line, same "anything discovered mid-campaign is filed F-CAR-* and lands here at the next gate."

### 3.1 Honest divergences between the two instances

The two OoBs are the *same pattern* but not identical artifacts — and recording that faithfully is itself a rule of this pattern (instance evidence over invention):

- **Ring vocabulary.** Carnot's OoB carries an explicit **Ring column (R1 launch-critical / R2 compressible-at-the-cut)** on every row; Champollion tracks rings at the charter/backlog level and its OoB surfaces them in the backlog section rather than as a per-row column. Same two-ring concept, different placement.
- **Codepin in frontmatter.** Carnot's OoB frontmatter carries `codepin: 47935b6` (it verifies its rows against a pinned code state — see [[pattern_cross_graph_codepin]]); Champollion's OoB has no codepin field (its obligations are documentation/governance, not code-version-bound).
- **Section shape.** Carnot organizes by *provenance* (Lodestar cards · carry-forwards · open findings · held instruments · coordination · genesis-instruments); Champollion organizes by *obligation kind* (pre-discharged · queued · governance · acks · security · backlog · counterparty · program feed). Both achieve total enumeration; the axis differs because their inherited messes differ (Carnot inherits a genesis + a review campaign; Champollion inherits a program umbrella + a fleet of memos).
- **Live re-tiering.** Carnot's OoB was re-swept mid-campaign (the D-C8 two-tier re-plan re-tiered future-mission rows to opus); Champollion's is at campaign start. Same artifact, caught at different lifecycle points.

None of these is a contradiction of the pattern — they are the pattern adapting its *shape* to its campaign while holding its *contract* (total enumeration, one disposition per row, nothing silently dropped).

## 4. Adoption (copy, don't re-derive)

1. **At campaign start, run the sweep first.** A verification battery + evidence lanes across every obligation source; name the swept sources in the artifact (that list *is* the audit).
2. **One artifact, `artifact_id: <campaign>_order_of_battle`**, at `how/campaigns/campaign_<name>/artifacts/order_of_battle.md`.
3. **Section by the obligation kinds your campaign actually inherits** (start from the eight above; keep what applies).
4. **Every row gets one disposition** — discharged-by-mission (with a mission ID) · carried (owner + trigger) · excluded (rationale). A row without one blocks the campaign's P0 gate.
5. **Point rows at where they land** (mission / gate / owner) so a gate reviewer reads the whole surface at once.
6. **Carry it live**: mid-campaign discoveries file as findings and land here at the next gate; the OoB is a close-readiness instrument, not a one-shot doc.

## 5. When NOT to use / anti-pattern

- **Small, single-mission efforts** don't need an OoB — the mission spec's own scope is the whole surface. The OoB earns its keep when a campaign inherits obligations from *multiple* prior sources that would otherwise leak.
- **Anti-pattern — the aspirational list.** An OoB that lists what the campaign *will build* is a plan, not an obligations ledger. The OoB's job is the *inherited backlog* — what's already outstanding — dispositioned. Mixing the two hides leaks.
- **Anti-pattern — silent drop by omission.** Leaving a known-open item off the ledger entirely (rather than giving it an *excluded-with-rationale* row) is the exact failure the pattern exists to prevent. If you decided not to do something, that decision is a row.
- **Anti-pattern — disposition theater.** Marking everything "carried" with no owner or trigger. A carry without an owner + a trigger is a silent drop wearing a costume.

## Forward integration (fold stub)

**`fold_batch: champollion_m6_1_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at Champollion **G3**, shipped via **M6.1**'s release candidate through `skill_template_release`; WHAT: a `template_order_of_battle.md` artifact template (the eight-section skeleton + the one-disposition-per-row rule + the "sources swept" audit-line convention) folded into the template set's campaign-artifact family, and a one-line "OoB required for multi-source campaigns" note in the campaign-planning guidance — so a fleet vault opening a campaign adopts the ledger by copy instead of reconstructing it from two sibling instances. WHEN/HOW defer to M6.1's RC. Do NOT touch any template file or `.adna/` here.

## Provenance & graduation

Convention originated in Operation Carnot (2026-07-01, Noether/LatticeProtocol.aDNA — the Carnot directive §4.4 required it) and first mirrored by Operation Champollion (2026-07-02, Rosetta/this vault), which named its OoB header *"Convention mirrors Carnot's."* **Instances: 2** (one per sibling campaign) — this file stays `status: draft` until a third campaign adopts the OoB, per the graduation discipline; the associated template fold is queued at Champollion **G3** and ships via **M6.1**'s RC. Related patterns: [[pattern_cross_graph_codepin]] (an OoB row often *carries* or *verifies against* a codepin — Carnot's frontmatter does), [[pattern_state_queued_banner]] (the OoB feeds the gates; the QUEUED banner routes the cold-start session *to* the current gate and its obligation surface), [[pattern_mission_decomposition]] (each "discharged-by-mission" row resolves into a mission this pattern's sibling governs), [[pattern_model_tiered_campaign_execution]] (OoB rows carry `executor_tier` — Carnot re-tiered its rows at the D-C8 re-plan).
