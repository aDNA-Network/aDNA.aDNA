---
type: skill
lattice_type: skill
skill_type: agent
created: 2026-06-20
updated: 2026-06-20
mission_origin: campaign_feedback_loop M2
status: active
category: onboarding
trigger: "A <Software>.aDNA deployment-graph vault is adopting the feedback loop — operator asks to 'add a feedback wrapper', 'opt into deploy feedback', 'set up the feedback/ wrapper', or 'contribute deploy signal back to the graph'"
last_edited_by: agent_stanley
tags: [skill, feedback_loop, telemetry, federation, onboarding, consumer_wrapper, privacy]

federation:
  discoverable: true
  source_instance: aDNA.aDNA
  version_policy: minor
fair:
  keywords: [feedback_loop, telemetry, federation, consumer_wrapper, onboarding, privacy, opt_in]
  license: Apache-2.0
---

# Skill: Telemetry-Feedback Wrapper Integration (Consumer Onboarding)

## Overview

**Plain-language:** This skill adds an opt-in "feedback" channel to a vault that governs a piece of software an
agent installs and runs — so the things that go right and wrong on install can flow back and make the *next*
operator's setup smoother. The channel ships **off**. It only ever carries the *names* of what happened, never a
secret or anything that identifies your machine, and only after you say yes.

**Technical:** Adds a `feedback/` consumer wrapper to a `<Software>.aDNA` deployment-graph vault so it can contribute
sanitized deploy/operate/install signal back to the software's owning graph, per the normative
[[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]]. The wrapper is lightweight: a
single `CLAUDE.md` carrying a `federation_ref` block (consent record + signal-class selection + redaction profile)
plus an empty local capture store. **No transport, no backend, and no signal *value* is ever authored into the
wrapper** — transport is consumed by reference from `Context.aDNA` (Prometheus), and only capability/pattern *names*
ever transit ([[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]]).

This skill is the deployment-graph counterpart of [[../../III.aDNA/how/skills/skill_iii_setup|`skill_iii_setup`]]
(which bootstraps an `iii/` quality wrapper). If you have stood up an `iii/` wrapper, this is the same shape — it
deliberately reuses the proven consumer-federation contract ([[../../III.aDNA/what/decisions/adr_002_consumer_federation_contract|III ADR-002]]).
The skill **instantiates** the spec's `federation_ref` schema; it never restates it — a small live demonstration of
the consume-by-reference discipline the whole pattern rests on.

## When to Use

1. **A `<Software>.aDNA` deployment graph wants to learn from real field use** — operator says "add a feedback
   wrapper" / "opt into deploy feedback" / "let operators contribute their AARs back". First clean consumers:
   Bitwarden.aDNA (Cerberus) + the [[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]] cohort,
   wired natively at genesis.
2. **An existing software vault is formalizing ad-hoc deploy notes** into a consented, sanitized channel.

Do **NOT** use this skill to:
- Add a wrapper to a vault that governs **no installable software surface** (a docs/standard/brand/org vault). It has
  nothing to deploy — there is no signal to capture. (See § Self-Demonstration Exemption for why `aDNA.aDNA` itself
  carries no live wrapper.)
- Ship a wrapper with `consent_state` anything other than `opt_in_default_off`, or with a pre-filled `consent_grant`
  (forbidden — spec §federation_ref Rule 1/2).
- Author any transport, backend, aggregation, or economics into the wrapper (owned by `Context.aDNA`; ADR-036 §3).
- Capture or transmit any **value** — a secret, credential, token, hostname, absolute path, or PII (Standing Rule 6;
  spec §AAR sanitization pass). Names only, always.

## Prerequisites

- The consumer vault exists at `~/aDNA/<Software>.aDNA/` with a root `CLAUDE.md`, and it genuinely governs a software
  surface an agent installs/operates.
- The spec is reachable locally at `~/aDNA/aDNA.aDNA/what/specs/spec_telemetry_feedback_ecosystem.md`.
- The operator can grant (or decline) consent and choose the authorized signal-class scope.
- Familiarity with [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] §4 (privacy spine) — or
  willingness to read it inline.

## Inputs / Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `consumer_vault_path` | yes | Absolute path to the `<Software>.aDNA` vault root (e.g., `~/aDNA/Bitwarden.aDNA/`). |
| `spec_version` | yes | Spec version to pin (`0.1.0` as of 2026-06-20). |
| `signal_scope` | yes | The subset of the four signal classes the operator authorizes (default: `[]` until granted). |
| `consent` | yes | `granted_by` handle + `granted_on` date, **or** explicit decline (wrapper still installs, OFF). |
| `redaction_overrides` | optional | Consumer-side **tighten-only** additions to the `software_graph_default` profile. |
| `mission_origin` | optional | Genesis campaign/mission that invoked this skill, for wrapper provenance. |

## Procedure

### Step 1 — Confirm the vault governs a software surface + pin the spec version

1. Confirm the consumer vault has a root `CLAUDE.md` **and** governs an installable/operable software surface. If it
   does not, **stop** — record the exemption (§ Self-Demonstration Exemption) rather than installing a dead channel.
2. Pin the spec version: `0.1.0`, `version_policy: minor` (the consumer reviews on a minor bump; patch bumps apply
   transparently). The spec's pinning model is **version-based** (not commit-based) — see § Notes if you want to
   harden to a commit pin.

### Step 2 — Author `<consumer>/feedback/CLAUDE.md` (federation_ref, verbatim from the spec)

Create the wrapper directory and `CLAUDE.md`. Copy the `federation_ref` block **from the spec's §Consumer Integration
Pattern** — do not invent fields:

```yaml
federation_ref:
  source_vault: aDNA.aDNA
  source_spec:  what/specs/spec_telemetry_feedback_ecosystem.md
  source_skill: how/skills/skill_telemetry_wrapper_integration.md
  version: "0.1.0"
  version_policy: minor              # "minor" (review on bump) | "locked" (manual only)
  consent_state: opt_in_default_off  # MUST be opt_in_default_off at wrapper creation
  consent_grant:                     # null until the operator grants; revocable
    granted_by: null
    granted_on: null
    scope: []                        # subset of signal_classes the grant authorizes
    revoked_on: null
  signal_classes: [deploy_outcome, config_drift, install_friction, shared_aar]
  redaction_profile: software_graph_default
  transport_ref:
    owner_vault: Context.aDNA
    binding: by_reference
  local_extensions: []               # consumer-side redaction tightening only
```

### Step 3 — Set the consent record (default-OFF)

- Leave `consent_state: opt_in_default_off` and `consent_grant` null **unless** the operator explicitly grants in this
  session. If granted: set `granted_by` (operator handle) + `granted_on` (YYYY-MM-DD) + `scope` (the authorized
  signal-class subset). Record that the grant is **revocable** — on revoke, set `revoked_on` and capture-for-submission
  stops immediately.
- Only the **intersection** of `signal_classes` (eligible) and `consent_grant.scope` (authorized) may ever be submitted.

### Step 4 — Lay down the local capture store + optional redaction tightening

```
<consumer>.aDNA/feedback/
├── CLAUDE.md                                   # Step 2
└── what/
    ├── capture/
    │   └── <software>_feedback_capture.jsonl   # seed EMPTY — local-only, never auto-submitted
    └── profiles/
        └── <software>_redaction_overrides.yaml # optional; MAY only ADD fields to strip (tighten)
```

Capture is local: the agent writes signal here as it installs/operates; **nothing leaves the node at this step**.
The `profiles/` override file may only **tighten** redaction — never loosen it (spec §Local extensions).

### Step 5 — Add a Standing Order to the consumer's root `CLAUDE.md`

Append a routing rule, e.g.:

> **Standing Order N** — Deploy/operate feedback routes through the `feedback/` wrapper at `<vault>/feedback/CLAUDE.md`,
> pinning `aDNA.aDNA` spec `spec_telemetry_feedback_ecosystem` v`0.1.0`. Channel is **opt-in / default-OFF**; capture
> is local; submission requires the recorded operator grant. Names only; secrets/values never transit (Standing Rule 6).

### Step 6 — Verify the privacy spine before any capture is enabled

Walk ADR-036 §4 as a checklist: `consent_state == opt_in_default_off` ✓; `consent_grant` null-or-operator-set ✓;
`redaction_profile == software_graph_default` ✓; no transport authored locally ✓; the loop is functional on an
air-gapped node (local capture + manual review) ✓. A wrapper that fails any MUST is non-conformant and is treated as
if the channel were OFF (spec §NORMATIVE).

### Step 7 — Verify downstream-safety

If other vaults reference this consumer, confirm the wrapper add is **additive** (new `feedback/` dir only) and moves
no existing paths. The `feedback/` directory name is the fleet convention (ratified at the P0→P1 gate, 2026-06-20),
alongside `iii/`, `git/`, `iss/`, `taskforge/`.

### Step 8 — Register the consumer

Add a row to the spec's **§Active Consumers** table (`spec_telemetry_feedback_ecosystem.md`): consumer name, wrapper
status (`installed-OFF` / `granted:<scope>`), genesis mission. This keeps the ecosystem's consumer list truthful.

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| `<consumer>/feedback/CLAUDE.md` | file | The wrapper: `federation_ref` + consent record. |
| `<consumer>/feedback/what/capture/<software>_feedback_capture.jsonl` | file | Empty local capture store. |
| Root `CLAUDE.md` Standing Order | edit | Routes feedback work through the wrapper. |
| Spec §Active Consumers row | edit | Registers the new consumer. |

## Error Handling / Privacy Anti-Patterns

| Symptom | Cause | Resolution |
|---------|-------|------------|
| Wrapper ships with `consent_grant` filled | Pre-granted consent | Reset to null; consent is operator-set only (spec Rule 2). |
| A captured record contains a token/path/hostname | Redaction not applied before write-for-submission | Block the submission (not best-effort-clean); the channel is treated as breached (Standing Rule 6). |
| Wrapper references a transport endpoint | Boundary creep into Context.aDNA | Remove; transport is consume-by-reference only (ADR-036 §3). |
| Installed on a docs/standard vault | Misapplied — no software surface | Remove; record the exemption (below). |

## Self-Demonstration Exemption (`aDNA.aDNA`)

Standing Order #8 (self-reference) asks every artifact to demonstrate its concept against this vault. For an *install*
skill, the honest demonstration is an **exemption, recorded**: `aDNA.aDNA` (Rosetta) is a documentation/standard vault
that governs **no installable software surface**, so it is not a `<Software>.aDNA` consumer and carries **no live
`feedback/` wrapper** — installing one would create exactly the dead, ambient channel the pattern's Anti-Pattern warns
against. The self-reference requirement is instead satisfied **upstream**: the
[[what/patterns/pattern_software_graph_telemetry_feedback|pattern]] uses this very vault as its worked example twice
over (the VISION compass it must obey, and the `iii/` wrapper it mirrors, both live here). First **live** consumers are
Bitwarden.aDNA + the Keystone cohort at genesis (campaign P3).

## Notes

- **Commit-pin hardening (optional).** The spec pins by `version` + `version_policy`. A consumer that wants III-style
  commit pinning MAY add `pinned_at_commit` + `pinned_at`; promoting those to the canonical schema is a
  `spec`-amendment item (ADR-036), not a per-wrapper improvisation.

## Related

- [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]] — the normative contract this skill instantiates.
- [[what/patterns/pattern_software_graph_telemetry_feedback|pattern_software_graph_telemetry_feedback]] — the pattern.
- [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] — boundary + privacy spine + wrapper-name choice.
- [[../../III.aDNA/how/skills/skill_iii_setup|III skill_iii_setup]] — the `iii/` wrapper this is modeled on.
- **Skills Protocol**: `how/skills/AGENTS.md`
