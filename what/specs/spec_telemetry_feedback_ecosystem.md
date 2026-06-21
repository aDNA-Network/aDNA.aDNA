---
type: spec
kind: ecosystem_spec
name: telemetry_feedback_ecosystem
created: 2026-06-20
updated: 2026-06-20
version: "0.1.0"
version_policy: minor
status: active
campaign_id: campaign_feedback_loop
co_signed_adr: aDNA.aDNA/what/decisions/adr_036_software_graph_feedback_boundary.md
consent_state: opt_in_default_off
last_edited_by: agent_stanley
tags: [spec, ecosystem, feedback_loop, telemetry, federation, privacy]
---

# Telemetry-Feedback Ecosystem

Authoritative reference for the **software-graph feedback loop** — the opt-in channel by which an operator of a `<Software>.aDNA` deployment graph contributes sanitized deploy/operate/install signal back to the graph. Pattern: [[what/patterns/pattern_software_graph_telemetry_feedback|pattern_software_graph_telemetry_feedback]]. Boundary + privacy decision: [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]]. Modeled on the III consumer contract ([[../../III.aDNA/what/decisions/adr_002_consumer_federation_contract|ADR-002]]).

> **NORMATIVE.** Keywords MUST / MUST NOT / SHOULD / MAY carry their usual force. A consumer wrapper that violates a MUST is non-conformant and MUST be treated as if the channel were OFF.

## Definition

A **feedback consumer** is any vault that governs a software surface and opts to contribute deployment experience back to that software's owning graph. Consumers create a lightweight `feedback/` wrapper directory carrying a `federation_ref` block (below). The ecosystem produces **no transport and no backend**: transport + economics are owned by `Context.aDNA` (Prometheus) and consumed by reference (ADR-036 §3). This spec owns **signal semantics, consent, privacy, and the AAR-contribution mapping**.

The channel is **default-OFF**. Absent an explicit, recorded, revocable operator grant, a conformant consumer captures nothing for submission.

## Consumer Integration Pattern

A consumer vault creates:

```
consumer_vault.aDNA/
└── feedback/
    ├── CLAUDE.md                                  # Required: federation_ref + consent record
    └── what/
        ├── capture/                               # Local-only signal capture (never auto-submitted)
        │   └── <software>_feedback_capture.jsonl
        └── profiles/
            └── <software>_redaction_overrides.yaml  # Optional: consumer-side redaction tightening only
```

### `federation_ref` schema

Required in the consumer's `feedback/CLAUDE.md`:

```yaml
federation_ref:
  source_vault: aDNA.aDNA
  source_spec:  what/specs/spec_telemetry_feedback_ecosystem.md
  source_skill: how/skills/skill_telemetry_wrapper_integration.md
  version: "0.1.0"
  version_policy: minor              # "minor" (review on bump) | "locked" (manual only)
  consent_state: opt_in_default_off  # MUST be opt_in_default_off at wrapper creation
  consent_grant:                     # null until the operator grants; revocable
    granted_by: null                 # operator handle, set on grant
    granted_on: null                 # YYYY-MM-DD
    scope: []                        # subset of signal_classes the grant authorizes
    revoked_on: null
  signal_classes: [deploy_outcome, config_drift, install_friction, shared_aar]
  redaction_profile: software_graph_default
  transport_ref:                     # consume-by-reference; NOT implemented here
    owner_vault: Context.aDNA
    binding: by_reference
  local_extensions: []               # consumer-side redaction tightening only; see §Local extensions
```

Rules:
1. `consent_state` MUST be `opt_in_default_off` at creation. A wrapper MUST NOT ship a pre-granted consent.
2. `consent_grant` MUST be operator-set and MUST be revocable; on revoke, capture-for-submission stops immediately and `revoked_on` is recorded.
3. `signal_classes` is the *eligible* set; `consent_grant.scope` is the *authorized* subset. Only the intersection may ever be submitted.
4. `local_extensions` MAY only **tighten** redaction (add fields to strip) — never loosen it.

### The four signal classes

| Class | Carries | MUST NOT carry |
|-------|---------|----------------|
| `deploy_outcome` | success/failure of a named install/operate step; version names; duration buckets | logs containing values, hostnames, IPs |
| `config_drift` | the *name* of a config key whose value diverged from the documented default; a drift category | the divergent **value** |
| `install_friction` | the named step where an operator hit friction; a friction category; a sanitized one-line note | paths, machine identity, copied error text with secrets |
| `shared_aar` | a sanitized scorecard AAR (see §AAR-Contribution Sub-Pattern) | node identity, absolute paths, secret-shaped tokens |

### Version policy

- **minor**: consumer reviews when this spec bumps minor version (reads the CHANGELOG diff; decides whether to advance the pin). Default.
- **locked**: consumer updates only by explicit operator decision.
- **patch**: transparent; applies on next session.

## §AAR-Contribution Sub-Pattern (first-class)

The richest signal in the ecosystem is an operator returning their **scorecard AAR**. A deployment-graph operator already produces, per Standing Order #5, a 5-step scorecard AAR at `how/missions/artifacts/{campaign}_{mission}_aar.md` (`template_aar.md` shape). This sub-pattern specifies how that local artifact becomes a contributed, sanitized improvement signal.

### Contributable fields

From the scorecard AAR, **only** these MAY be contributed (everything else stays local):

| AAR field | Contributable form | Sanitization |
|-----------|-------------------|--------------|
| Worked | one-line, software-scoped | strip node identity, paths |
| Didn't | one-line, software-scoped | strip paths, error values, hostnames |
| Finding | one-line insight | strip any value/secret-shaped token |
| Change | proposed default/runbook change | must be value-free (a *what to change*, not a *with-what-value*) |
| Follow-up | a backlog-shaped pointer | strip absolute paths; relative/abstract only |
| Scorecard delta | validated/total counts; estimate-vs-actual token delta (units only) | numbers only |

The AAR's **node-local sections** (session IDs, file paths touched, machine fingerprints) MUST NOT be contributed.

### Sanitization pass (`software_graph_default` redaction profile)

Before any `shared_aar` (or any class) is submitted, the redaction profile MUST strip, in order:

1. **Node identity** — operator handle (unless the operator opts to attribute), hostname, mesh node-id, certificate fingerprints.
2. **Paths** — absolute paths → abstract tokens (`<vault_root>/...`); home dirs → `~`; drop path entirely where the relative form still identifies.
3. **Secret-shaped tokens** — anything matching high-entropy / known credential-shapes (API keys, JWTs, `*_TOKEN`, private-key blocks) → dropped, never masked-in-place (a masked secret still leaks length/shape).
4. **Network locators** — IPs, internal DNS, subnet CIDRs.

A submission that does not pass the profile MUST be blocked, not best-effort-cleaned-then-sent.

### Structured submission schema

```yaml
contributed_aar:
  software_graph: <Software>.aDNA       # the owning graph this signal returns to
  spec_version: "0.1.0"
  redaction_profile: software_graph_default
  redaction_passed: true                # MUST be true to submit
  class: shared_aar
  fields:
    worked: <string>
    didnt: <string>
    finding: <string>
    change: <string>                    # value-free proposed change
    follow_up: <string>
    scorecard: { validated: <int>, total: <int>, token_delta_units: <number> }
  # NO node identity, NO paths, NO values — enforced by redaction_passed gate
```

### Contributed-AAR → candidate-pattern-update mapping

A received `contributed_aar` becomes a **candidate update** in the owning `<Software>.aDNA` graph — never an auto-merge:

| Contributed field | Candidate update in the owning graph |
|-------------------|--------------------------------------|
| `change` (value-free) | a proposed edit to the graph's install/operate default or runbook, filed for owner review |
| recurring `didnt` / `install_friction` (≥3 across operators) | a documented install gotcha in the graph's deploy doc |
| recurring `config_drift` key | a candidate default-config change (key only; the owner picks the value) |
| `finding` | a backlog idea in the owning graph |

Promotion of a candidate to an actual default change requires the owning graph's persona to accept it (mirrors III's graduation ceremony, [[../../III.aDNA/what/decisions/adr_002_consumer_federation_contract|ADR-002]] §5).

## Local extensions

`local_extensions` entries MAY only **add** fields to the redaction profile (tighten), declare a stricter `consent_grant.scope`, or add consumer-specific capture categories that map into an existing signal class. They MUST NOT loosen redaction, pre-grant consent, or introduce a transport. New structural extension shapes require an amendment to ADR-036 before shipping.

## Active Consumers

| Consumer | Wrapper | Status |
|----------|---------|--------|
| *(none yet)* | — | Genesis — first consumers are Bitwarden.aDNA + the Operation Keystone cohort, wired natively at their genesis (campaign P3). |

## Provenance

Authored at `campaign_feedback_loop` M1 (2026-06-20), Operation Feedback Loop WS-A. Co-signed: [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]]. Mirrors the ecosystem-spec shape of [[what/specs/spec_framework_ecosystem|spec_framework_ecosystem]] and the consumer contract of III [[../../III.aDNA/what/decisions/adr_002_consumer_federation_contract|ADR-002]]. Normative conventions cite the upstream `adna_standard.md` (github.com/aDNA-Network/aDNA). **Ratified** at the campaign P0→P1 operator gate (2026-06-20): wrapper name `feedback/`, the four signal classes, and the Context.aDNA consume-by-reference boundary — status `active`.
