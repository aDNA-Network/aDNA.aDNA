---
type: design_spec
artifact_id: m36_streamline_design_spec
mission: mission_adna_str_p3_m36_airlock_aar_and_streamline
campaign: campaign_adna_serious_tool_readiness
phase: 3
created: 2026-05-25
updated: 2026-05-25
status: draft   # finalize at S2 close if any §5 acceptance criteria need post-ADR-024-ratification updates
last_edited_by: agent_stanley
spec_completeness: draft   # 6 sections authored at S1 (Problem / Primitives / Backward compat / Migration delta / Acceptance / Forward integration with M3.7)
design_spec_structure_instance: "12th canonical instance"   # 6-section structure RATIFIED at M3.1 close; 12th canonical instance at M3.6 (T1 + T2 + T3 + T4 + T6 + T7 + T8 + T9 + T10 + T11 + T12 + M3.6 streamline)
tags: [design_spec, m36, v8, p3, airlock_streamline, 6_section_structure_12th_canonical_instance, 3_clusters, 9_primitives, operator_friction_reduction, reply_memo_discipline, tooling_skeletons, additive_only_invariant, opt_in_spec_version_note, v8_p6_propagation_channel, t8_forward_reference_stub_post_graduation_10th_instance, m3_7_modular_iii_first_consumer, rosetta]
---

# M3.6 — Airlock Streamline Design Spec

> **6-section design-spec structure 12th canonical instance** after T1 + T2 + T3 + T4 + T6 + T7 + T8 + T9 + T10 + T11 + T12 (`skill_design_spec_authoring.md` graduation post-reinforcement at 13 of 3+ if landed; 4.3× margin).

## § 1 — Problem statement

The III.aDNA airlock v0.3.0 surface is sound and federation-friendly (per `aar_airlock_ecosystem_m36.md` §1 What Worked), but **carries 3 friction clusters** that compound activation cost + reply-memo authoring effort across the 5 consumer-wrapper landscape:

### 1.1 Cluster 1: Operator-friction (activation cost compounds per wrapper)

- Advisory-mode promotion timing is "per-wrapper minor-bump decision" without canonical guidance (AAR §2.3); every consumer asks the same question at every minor-bump sweep
- AIRLOCK.md instances lack a quick "live vs. dormant" surface listing; an arriving auditor or agent must read the whole spec to learn which surfaces are active at this consumer
- The v0.3 spec §6 reference example (2026-05-08 VideoForge → CanvasForge memo) was authored at v0.2 baseline; v0.3 federation-aware fields are documented separately rather than in a minimal v0.3-era worked example, which means an adopter has to mentally synthesize "what does a v0.3-aware request look like minimally"

### 1.2 Cluster 2: Reply-memo discipline (author mistakes + ambiguity)

- Reply-comment template spreads 11 separate rejection sub-reason enums across 3 preflight gates (secrets §2.4: 1 reason; idempotency §3.6: 5 reasons; sig-verify §4.6: 5 reasons) without consolidated mapping table — author mistakes happen (wrong enum-from-wrong-preflight)
- Spec §4.3 lists `federation_signature` + `federation_signature_key_version` as optional with no example disambiguating "sig fields absent under v0.2-compatible mode" vs. "sig fields present-but-null under v0.3-aware-advisory mode" — reply-memo authors guess sender intent
- Preflight ordering (secrets → idempotency → sig-verify) is described in prose across §2/§3/§4 rather than as an explicit pipeline contract — implementer reading §2 first may not realize §3 must complete before §4 fires

### 1.3 Cluster 3: Tooling skeleton gaps (re-implementation surface)

- Ledger polling per impl-doc §5.1 60s contract has no reference skeleton; consumers activating ledger observation author from scratch (re-implementation surface compounds across N consumers)
- Canonical-JSON 7-rule algorithm at impl-doc §4.2 specifies the contract but ships no test fixture; "round-trip-test with at least one shared fixture" is reserved at v0.4 — implementation drift becomes a v0.4-rollout discovery risk
- Activation skill 21-item verification checklist (Step 6 of `skill_airlock_activation.md`) has no audit-event emission marking activation completeness; the 5 v0.3.0 wrappers haven't activated their AIRLOCK.md to v0.3.0-reference-instance status pre-MD-A4 partly because the activation friction is non-trivial and the audit-trail benefit isn't visible until after activation

### 1.4 Aggregate metrics

| Metric | Today | After streamline (target) |
|--------|-------|---------------------------|
| Per-wrapper advisory-mode promotion-timing decision cost | 1 ad-hoc deliberation per minor-bump per wrapper (5 wrappers × N bumps) | 1 canonical decision-tree consult (single source) |
| Reply-memo rejection sub-reason enum sources | 3 spec sections + 11 enums (no mapping table) | 1 closed enum + 1 mapping table |
| AIRLOCK.md auditor first-glance "what's live" cost | Read whole spec | Read Spec Version Notes section (~30-50 words) |
| Canonical-JSON test fixture availability | None (deferred to v0.4) | 1 worked example + expected byte-identical output |
| Activation skill audit visibility | Manual 21-item checklist; no JSONL emission | `airlock_activation` event-type with `success` / `failed_check_<#>` outcome |

## § 2 — Streamline primitives

9 primitives organized into 3 clusters of 3. Each carries: name + cluster + target artifact + minimal viable patch text (3-15 lines or table) + acceptance test.

### Cluster 1: Operator-friction reduction

#### P1 — Advisory-Mode Lifecycle decision tree

- **Target artifact**: `.adna/how/airlock/AIRLOCK.md` template (template-stub per ADR-008; pinned at v0.2.0 today, candidate v0.3 re-pin at v8 P6)
- **Patch text** (new section):

```markdown
## Advisory-Mode Lifecycle

The airlock `federation_mode` field has 3 outcomes per spec §4.6:

| Co-federation state | Initial mode | Promotion trigger | Promotion target |
|---------------------|--------------|-------------------|-------------------|
| Neither vault in LN | `advisory` | Either vault enrolls in LN | `advisory` (await both) |
| One vault in LN | `advisory` | Other vault enrolls in LN | `enforce` (after MD-A5-style validation) |
| Both vaults in LN | `enforce` post-validation | Spec minor-bump | `enforce` (re-validate against new surface) |
| v0.2-compat consumer | `advisory` (no v0.3 fields) | Wrapper upgrades to v0.3 | `advisory` initially; promote per above |

Promotion is operator-discretionary; default at any minor-bump = advisory until next MD-A5-style documentation-grade validation.
```

- **Acceptance test**: AIRLOCK.md reference instance at `III.aDNA/how/airlock/AIRLOCK.md` carries this section; ADR-008 v0.3 re-pin candidate at v8 P6 propagates the section to `.adna/` template.

#### P7 — Spec Version Notes section

- **Target artifact**: `.adna/how/airlock/AIRLOCK.md` template + each consumer wrapper's AIRLOCK.md activation
- **Patch text** (new optional section):

```markdown
## Spec Version Notes

- **Spec version**: v0.3.0 (pinned at `a309ad4`)
- **Federation mode**: `advisory` (v0.3 §4.6 optional; promote at next MD-A5-style validation)
- **Ledger observation**: `disabled` (v0.3 §5.3 opt-in)
- **Substrate(s)**: tailscale (single substrate today; multi-substrate ready per v0.3 §5)
- **Sig-verify gate**: not active (no co-federated peers yet)
```

- **Acceptance test**: AIRLOCK.md reference instance carries the section; helper text + sample values shipped.

#### P10 — Minimal v0.3-era worked example

- **Target artifact**: `iii_airlock_standard_spec.md` §6 (replace existing 2026-05-08 VideoForge → CanvasForge memo as v0.2-baseline example with new v0.3-aware minimal example as v0.3-baseline)
- **Patch text** (15-20-line frontmatter-only request):

```yaml
---
type: airlock_request
schema_version: "0.3"
from_vault: VideoForge.aDNA
to_vault: CanvasForge.aDNA
request_type: deliverable_handoff
spec_path: how/campaigns/campaign_videoforge_*/missions/artifacts/m*_deliverable.md
output_sink: who/coordination/deliverables_inbox/
secrets_handled: []
idempotency_key: vf_2026_06_01_m1_canvas_handoff
federation_signature: <base64-canonical-json-sig-or-empty-if-not-cofederated>
federation_signature_key_version: <pubkey_sha256_or_null>
---
```

The existing 2026-05-08 memo demotes to "v0.2-baseline example (sig fields absent entirely)".

- **Acceptance test**: spec §6 has 2 examples (v0.3-baseline + v0.2-baseline); both carry the canonical-JSON-serialized form in a §6.x sub-section for reference.

### Cluster 2: Reply-memo discipline

#### P2 — Consolidated Acceptance Checks block in reply-comment template

- **Target artifact**: `iii_airlock_substrate_implementation.md` §6.1 reply-comment template
- **Patch text** (replaces 3 separate subsections with 1 block):

```markdown
## Acceptance Checks (consolidated; all 3 preflight gates)

| event_type | outcome | sub_reason (if rejected) | timestamp |
|-----------|---------|--------------------------|-----------|
| `secrets_preflight` | `success` / `rejected` | `missing_secret: <name>` | <ISO8601> |
| `idempotency_check` | `success` / `bypassed` / `rejected` | see Idempotency enum | <ISO8601> |
| `federation_sigverify` | `success` / `advisory` / `rejected` | see Sigverify enum | <ISO8601> |

Pipeline allocation gated on all 3 = `success` OR `bypassed` OR `advisory` (with operator override on advisory).
```

- **Acceptance test**: reply-comment template at impl-doc §6.1 carries the consolidated block; existing 3-subsection structure demoted to "legacy v0.2-compatible form" (still accepted for backward compatibility per §3 of this design spec).

#### P6 — Request signature field defaults disambiguation in spec §4.3

- **Target artifact**: `iii_airlock_standard_spec.md` §4.3 YAML schema documentation
- **Patch text** (insert table after existing §4.3 field listing):

```markdown
### §4.3.1 — Federation signature field defaults

| Mode | `federation_signature` | `federation_signature_key_version` | Notes |
|------|------------------------|-----------------------------------|-------|
| v0.2-compatible | (absent entirely) | (absent entirely) | No federation-sig intent; receiver MUST treat as v0.2 |
| v0.3-aware advisory | (empty string or null) | (null) | Sender knows about v0.3 but no co-federated peer; receiver SHOULD emit advisory event |
| v0.3-aware enforce | (base64 sig string) | (sha256 hex string) | Sender + receiver co-federated; receiver MUST verify per §4.6 |

Reply-memo authors disambiguate sender intent by checking field presence + value pattern; the enforce path is the only one where verification MUST succeed for acceptance.
```

- **Acceptance test**: spec §4.3.1 has the table; impl-doc §4.6 Ed25519 preflight cross-references the table for mode-determination logic.

#### P8 — Single canonical rejection-reason enum with preflight-source mapping

- **Target artifact**: `iii_airlock_substrate_implementation.md` §1 (new sub-section consolidating §2.4 + §3.6 + §4.6 enum listings)
- **Patch text**:

```markdown
## §1.5 — Canonical rejection-reason enum (consolidated)

| reason_code | preflight_source | description |
|-------------|------------------|-------------|
| `missing_secret` | secrets_preflight | A required secret not present in `secrets_handled` |
| `no_match` | idempotency_check | No prior matching idempotency_key; new request |
| `duplicate_of` | idempotency_check | Idempotency_key matches a prior accepted request; cite original |
| `bypassed_force_new` | idempotency_check | Sender set `force_new: true` to bypass dedup |
| `no_match_force_new_set` | idempotency_check | No prior match AND force_new=true; equivalent to no_match |
| `no_key` | idempotency_check | Sender omitted `idempotency_key`; defaults vary per consumer wrapper |
| `sig_invalid` | federation_sigverify | Ed25519 verification failed per §4.6 |
| `key_unknown` | federation_sigverify | `federation_signature_key_version` not in receiver's resolved pubkey set |
| `key_revoked` | federation_sigverify | Key present but revoked per ADR-013 §c |
| `substrate_mismatch` | federation_sigverify | Inbound transport substrate not in requesting node's `transport.substrates[]` |
| `manifest_unresolved` | federation_sigverify | LN membership manifest could not resolve requesting node |

Reply-memo authors use the `preflight_source` column to ensure they cite the correct reason code per preflight gate.
```

- **Acceptance test**: impl-doc §1.5 has the consolidated enum; §2.4 + §3.6 + §4.6 each cross-reference §1.5 rather than duplicating the enum lists.

### Cluster 3: Tooling skeletons

#### P3 — Ledger polling reference skeleton

- **Target artifact**: `iii_airlock_substrate_implementation.md` § new appendix
- **Patch text** (non-executable per Campaign C R3; documentation-grade pseudocode + bash stub):

```markdown
## Appendix A — Ledger Polling Reference Skeleton (non-executable)

Per §5.1 60s polling contract. Adapt per consumer wrapper runtime.

### Pseudocode

```
loop forever:
    events = ledger.fetch(since=last_seen_event_id, types=[MEMBERSHIP_*, CONNECTION_*])
    for event in events:
        if event.type == MEMBERSHIP_JOIN:
            update_pubkey_cache(event.node_id, event.signing_pubkeys)
        elif event.type == MEMBERSHIP_KEY_ROTATE:
            update_pubkey_cache(event.node_id, event.signing_pubkeys)
        elif event.type == MEMBERSHIP_REVOKE:
            invalidate_pubkey_cache(event.node_id)
        elif event.type == CONNECTION_*:
            update_substrate_topology(event)
        last_seen_event_id = event.id
    sleep(60)  # spec §5.1 default polling interval
```

### Bash stub (illustrative; not executable)

```bash
#!/usr/bin/env bash
# Ledger polling skeleton per impl-doc §5.1
set -euo pipefail
LAST_SEEN=$(cat .audit/ledger_cursor 2>/dev/null || echo "0")
while true; do
    EVENTS=$(ledger-client fetch --since "$LAST_SEEN" --types 'MEMBERSHIP_*,CONNECTION_*')
    echo "$EVENTS" | jq -c '.[]' | while read -r event; do
        # Dispatch by event.type — adapt per runtime
        echo "$event" >> .audit/ledger_observed.jsonl
        LAST_SEEN=$(echo "$event" | jq -r '.id')
    done
    echo "$LAST_SEEN" > .audit/ledger_cursor
    sleep 60
done
```
```

- **Acceptance test**: impl-doc Appendix A carries the skeleton; consumers activating ledger observation cite this skeleton as starting point.

#### P4 — Canonical-JSON test fixture

- **Target artifact**: `iii_airlock_substrate_implementation.md` § new appendix
- **Patch text** (1 worked example + expected byte-identical output):

```markdown
## Appendix B — Canonical-JSON Test Fixture (v0.3 reference)

Input (YAML frontmatter from a minimal v0.3-era request):

```yaml
type: airlock_request
schema_version: "0.3"
from_vault: VideoForge.aDNA
to_vault: CanvasForge.aDNA
request_type: deliverable_handoff
idempotency_key: vf_2026_06_01_m1_canvas_handoff
secrets_handled: []
```

Expected canonical-JSON output (sorted keys + NFC normalization + minimal separators + ASCII-disabled escaping; byte-identical):

```json
{"from_vault":"VideoForge.aDNA","idempotency_key":"vf_2026_06_01_m1_canvas_handoff","request_type":"deliverable_handoff","schema_version":"0.3","secrets_handled":[],"to_vault":"CanvasForge.aDNA","type":"airlock_request"}
```

Implementers validate their canonical-JSON serialization against this fixture: byte-identical output → algorithm conforms to §4.2 7-rule contract. Round-trip-test landing v0.4.
```

- **Acceptance test**: impl-doc Appendix B carries the fixture; SHA-256 of expected output documented; future v0.4 round-trip-test treats this as foundational fixture.

#### P9 — `airlock_activation` audit event-type

- **Target artifact**: `iii_airlock_substrate_implementation.md` § new event-type definition + `skill_airlock_activation.md` Step 6 update
- **Patch text** (impl-doc):

```markdown
## §6.4 — `airlock_activation` audit event-type

| Field | Type | Description |
|-------|------|-------------|
| `event_type` | string | Always `"airlock_activation"` |
| `vault_id` | string | Activating vault (e.g., `wga.aDNA`) |
| `target_spec_version` | string | Target activation version (e.g., `"0.3.0"`) |
| `outcome` | enum | `success` / `failed_check_<#>` (where #=1..21 corresponds to Step 6 checklist item) |
| `checklist_completed` | int | 0..21 (how many items completed before outcome) |
| `timestamp` | ISO8601 | Activation completion timestamp |
| `operator` | string | Operator agent ID (e.g., `agent_stanley`) |

Emit to `.audit/airlock_activation.jsonl` (or consumer-wrapper-equivalent path) on every activation attempt.
```

- **Patch text** (`skill_airlock_activation.md` Step 6 addition):

```markdown
### Step 6.5 — Emit activation audit event

After completing Step 6 checklist (or failing at item N), emit a JSONL record to `.audit/airlock_activation.jsonl` per impl-doc §6.4. Single line; one record per activation attempt.

Example (success):
```json
{"event_type":"airlock_activation","vault_id":"wga.aDNA","target_spec_version":"0.3.0","outcome":"success","checklist_completed":21,"timestamp":"2026-06-01T12:00:00Z","operator":"agent_stanley"}
```

Example (failed at item 14):
```json
{"event_type":"airlock_activation","vault_id":"wga.aDNA","target_spec_version":"0.3.0","outcome":"failed_check_14","checklist_completed":13,"timestamp":"2026-06-01T12:00:00Z","operator":"agent_stanley"}
```
```

- **Acceptance test**: impl-doc §6.4 has the field table; skill Step 6.5 has the emission instruction; first consumer wrapper activation post-streamline writes a record to `.audit/airlock_activation.jsonl`.

## § 3 — Backward compatibility with airlock v0.3.0

**Zero-break invariant**: every primitive in §2 is additive (not breaking). Existing v0.3.0 consumers continue to work without changes.

| Primitive | v0.3 baseline behavior | v0.3-streamlined opt-in | Migration cost |
|-----------|------------------------|------------------------|----------------|
| P1 Advisory-Mode Lifecycle | No section; per-wrapper decision | New section in AIRLOCK.md template | Zero (template-only; opt-in per wrapper at next activation refresh) |
| P2 Acceptance Checks block | 3 separate subsections in reply-comment template | New consolidated block (legacy 3-section form still accepted) | Zero (templates coexist; new reply-memos pick) |
| P3 Ledger polling skeleton | No reference skeleton | New impl-doc Appendix A | Zero (additive documentation) |
| P4 Canonical-JSON fixture | No test fixture | New impl-doc Appendix B | Zero (additive documentation; v0.4 round-trip-test consumer) |
| P6 Sig field defaults table | Implicit | New spec §4.3.1 table | Zero (clarification; no behavior change) |
| P7 Spec Version Notes | No section | New optional AIRLOCK.md section | Zero (optional; consumer chooses to add) |
| P8 Canonical rejection enum | 3 enum listings scattered | New impl-doc §1.5 consolidated + 3 cross-refs | Zero (consolidation; existing enum listings cross-ref §1.5) |
| P9 `airlock_activation` event | No event-type | New impl-doc §6.4 event-type + skill Step 6.5 | Zero for non-activating wrappers; ~5 lines per wrapper that activates |
| P10 Minimal v0.3-era example | Spec §6 has 2026-05-08 memo | Spec §6 has new v0.3-baseline + demoted 2026-05-08 as v0.2-baseline | Zero (additive example) |

**Opt-in via spec version note** (P7-compatible): consumers indicate adoption via "Spec Version Notes: v0.3-streamlined" vs. "v0.3-baseline" in their AIRLOCK.md. Rolling adoption pathway — no forced cutover.

## § 4 — Consumer-wrapper migration delta

Migration delta for the 5 live v0.3.0 consumer wrappers (forge-vault-side; backlog placeholders for v8 P6 propagation single-commit-per-patch cycle).

### 4.1 Migration matrix (5 wrappers × 9 primitives = 45 cells)

| Wrapper | P1 Advisory Lifecycle | P2 Acceptance block | P3 Polling skeleton | P4 JSON fixture | P6 Sig defaults table | P7 Version Notes | P8 Rejection enum | P9 Activation event | P10 Minimal example |
|---------|----------------------|---------------------|---------------------|-----------------|----------------------|------------------|-------------------|---------------------|---------------------|
| `SiteForge.aDNA` | opt-in additive | opt-in additive | no-migration-needed (not activated) | no-migration-needed (consumer-doc only) | no-migration-needed (consumer-doc only) | opt-in additive | opt-in additive | opt-in additive (if activates) | no-migration-needed (consumer-doc only) |
| `VideoForge.aDNA` | opt-in additive | opt-in additive | no-migration-needed (not activated) | no-migration-needed (consumer-doc only) | no-migration-needed (consumer-doc only) | opt-in additive | opt-in additive | opt-in additive (if activates) | no-migration-needed (consumer-doc only) |
| `CanvasForge.aDNA` | opt-in additive | opt-in additive | no-migration-needed (not activated) | no-migration-needed (consumer-doc only) | no-migration-needed (consumer-doc only) | opt-in additive | opt-in additive | opt-in additive (if activates) | no-migration-needed (consumer-doc only) |
| `wga.aDNA` | opt-in additive (Day-1 federation pilot — strong candidate) | opt-in additive | opt-in additive (Day-1 federation; likely first ledger-observation consumer) | no-migration-needed (consumer-doc only) | no-migration-needed (consumer-doc only) | opt-in additive (Day-1 federation; strong candidate) | opt-in additive | opt-in additive (Day-1 federation; strong candidate) | no-migration-needed (consumer-doc only) |
| `LPWhitepaper.aDNA` | opt-in additive | opt-in additive | no-migration-needed (not activated) | no-migration-needed (consumer-doc only) | no-migration-needed (consumer-doc only) | opt-in additive | opt-in additive | opt-in additive (if activates) | no-migration-needed (consumer-doc only) |

**Cell legend**:
- `opt-in additive` — wrapper opts into the streamlined primitive at v8 P6 propagation single-commit-per-patch (or operator-discretionary earlier)
- `no-migration-needed (not activated)` — wrapper's AIRLOCK.md remains inactive at v0.1 stub; primitive available when activation triggers
- `no-migration-needed (consumer-doc only)` — primitive lives in III canonical spec/impl-doc; consumer reads but doesn't author the patch

### 4.2 Backlog placeholders for v8 P6 propagation

1 placeholder per primitive per wrapper that needs opt-in (9 primitives × 5 wrappers = 45 cells; ~30-35 are opt-in candidates per matrix above). At v8 P6 cycle open, the placeholder list becomes the single-commit-per-patch worklist per consumer wrapper.

Backlog placeholder file path: `how/backlog/idea_v8_p6_propagation_airlock_streamlined.md` — author at M3.6 S2 close as composite placeholder. v8 P6 propagation cycle reads this composite to drive per-wrapper sweeps.

### 4.3 ADR-008 template-stub v0.3 re-pin candidate

ADR-008 currently pins `.adna/how/airlock/AIRLOCK.md` at v0.2.0. M3.6 streamline primitives P1 + P7 land at template-level (the `.adna/` stub itself). Re-pin candidate at v8 P6 propagation cycle:
- Update ADR-008 frontmatter `superseded_by: <future-amendment-ADR>` (or amendment-in-place per ADR-008 amendment discipline)
- Bump `.adna/how/airlock/AIRLOCK.md` to v0.3.0 with P1 + P7 sections included
- Document v0.2 → v0.3 template-stub migration path

Out of scope for M3.6 per hard constraint #1 (zero `.adna/` touches at v8 P2-P5); proposal lives here for v8 P6 consumption.

## § 5 — Acceptance criteria

Testable acceptance bar for M3.6 close + downstream propagation:

| # | Criterion | Verification | Phase |
|---|-----------|--------------|-------|
| 1 | Each of 9 primitives in §2 has minimal viable patch text complete (3-15 lines or table) | manual review against §2 | M3.6 S1 |
| 2 | Each of 9 primitives has acceptance test (testable against current 5 consumer wrappers) | per-primitive acceptance test in §2 | M3.6 S1 |
| 3 | Backward compatibility validated against all 5 consumer wrappers (parse-check; no execution) | manual review of §3 zero-break invariant table | M3.6 S1 |
| 4 | ADR-024 ratifies before close (if path A) — `status: draft → accepted` per Campaign SO #14 in-phase exception clause | `grep ^status adr_024_*.md` | M3.6 S2 |
| 5 | M3.6 close cascade matches M3.4 + M3.5 shape (AAR finalized + mission spec close + campaign master close + STATE Op 3 + session moves + push) | manual review per close cascade checklist | M3.6 S2 |
| 6 | v8 P6 backlog placeholders queued (1 composite placeholder file `idea_v8_p6_propagation_airlock_streamlined.md` covering all 45 migration-matrix cells) | `ls how/backlog/idea_v8_p6_propagation_airlock_streamlined.md` exists | M3.6 S2 |
| 7 | M3.7 first-consumer hook satisfied (§6 forward-integration stub names M3.7 consumer surfaces; T8 forward-reference-stub discipline post-graduation 10th instance) | manual review of §6 below | M3.6 S1 |
| 8 | Zero III.aDNA touches end-to-end per hard constraint #11 | `git -C ../III.aDNA status` returns clean | M3.6 S2 |
| 9 | Zero forge-vault wrapper touches per hard constraint #12 | spot-check via `grep` for airlock spec version in each consumer wrapper | M3.6 S2 |
| 10 | Zero lattice-labs touches per hard constraint #13 | `git -C ../lattice-labs status` returns clean | M3.6 S2 |
| 11 | Spec version note adoption pathway documented (P7 + §3 opt-in mechanism) | manual review | M3.6 S1 |
| 12 | ADR-008 v0.3 re-pin proposal documented in §4.3 for v8 P6 consumption | manual review | M3.6 S1 |

## § 6 — Forward integration with M3.7 (modular III for Obsidian)

T8 forward-reference-stub discipline post-graduation 10th instance (GRADUATED at M3.4 close at 3/3 use instances; M3.5 reinforced 4-9 across T9+T10+T11+T12 design specs + 2 skills; M3.6 reinforces 10 via this section).

### 6.1 M3.7 as first consumer of streamlined airlock surface

M3.7 (Modular III for Obsidian — concern #6 capstone per Phase 3 table line 175) operationalizes the M3.5 T9+T10+T11+T12 forward-reference stubs (registry surface + Bases-driven HOME + vault_cards + III-target schema). The M3.6 streamlined airlock surface becomes M3.7's federation transport for cross-vault III-decadal coordination + cross-vault critic federation primitive consumption.

### 6.2 Specific M3.7 consumer surfaces

- **P9 `airlock_activation` audit event-type**: M3.7's modular III can auto-detect activation completeness across the lattice by reading `.audit/airlock_activation.jsonl` from each consumer wrapper; lets III-decadal dashboards surface "which wrappers are at v0.3-baseline vs. v0.3-streamlined vs. inactive" without per-wrapper manual audit. Forward-pointer to M3.7: III-decadal target schema (T12 forward-stub) should include a "wrapper-airlock-activation-completeness" dimension.
- **P1 + P7 Advisory-Mode Lifecycle + Spec Version Notes**: M3.7's modular III can populate per-wrapper info pages (M3.5 T10 vault_cards) with airlock activation state (live vs. dormant + spec version + federation mode) by reading the AIRLOCK.md Spec Version Notes section. Forward-pointer to M3.7: vault_card schema v0.3 candidate adds `airlock_activation_state:` field projection.
- **P3 ledger polling skeleton**: M3.7's modular III can consume the same ledger observation primitive that consumer wrappers use; lets III aggregate cross-vault membership + connection events for III-decadal "lattice health" cycle. Forward-pointer to M3.7: III run-time architecture should provision ledger-observation-as-shared-primitive (deferred to M3.7 design phase).
- **P8 canonical rejection enum + P2 Acceptance Checks block**: M3.7's modular III consumes uniform reply-memo structure across wrappers; auto-graders for "wrapper airlock health" can parse rejection-reason distributions without per-wrapper format adapters. Forward-pointer to M3.7: III parser library should target the consolidated enum + Acceptance Checks block format.

### 6.3 Deferred to M3.7 consumer per discipline

WHEN: M3.7 opens (post-M3.6 close + operator G4 authorization). HOW: M3.7 design phase reads this §6 + M3.5 T9-T12 forward-stubs + decides the integration shape. WHY: M3.6 designs the streamlined airlock surface; M3.7 designs the modular III consumer of that surface — separation of concerns aligns with design-at-P3-propagation-at-P6 doctrine extended to "consumer-design-at-next-mission-class" sub-pattern.

### 6.4 Cross-mission graduation tracker for M3.7

If M3.7 designs land cleanly + cite this §6 as substrate, the T8 forward-reference-stub discipline reaches:
- **Post-graduation reinforcement at 11th instance** (M3.4 graduation 3/3; M3.5 4-9; M3.6 reinforces 10; M3.7 reinforces 11) — pattern remains canonical
- New graduation candidate `skill_airlock_streamline_to_modular_iii_handoff.md` potentially seeds at 1 of 3 instances (cross-mission handoff via §6 stub)
