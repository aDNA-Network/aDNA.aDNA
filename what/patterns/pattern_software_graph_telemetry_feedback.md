---
type: pattern
created: 2026-06-20
updated: 2026-06-20
status: draft
pattern_category: federation
applies_to: [platform_software_deployment_graph, framework]
campaign_id: campaign_feedback_loop
last_edited_by: agent_stanley
tags: [pattern, feedback_loop, telemetry, federation, privacy, deployment_graph]
---

# pattern_software_graph_telemetry_feedback

> **One line, for everyone:** When you let an agent install and run a piece of software for you, the things that go right and wrong are *signal*. This pattern is the opt-in, privacy-preserving way that signal flows back to the software's graph — so the next person's install is smoother. It is **off until you turn it on**, and it never carries a secret or anything that identifies your machine.

## Problem

A `<Software>.aDNA` deployment graph (see [[what/specs/spec_platform_ecosystem|the deployment-graph subtype]]) is supposed to get *better at deploying its software over time*. But the experience that would make it better — the install step that failed, the config that drifted from the documented default, the workaround an operator discovered, the After-Action Review they wrote when they were done — is trapped on the operator's node. Standing Order #5 already makes every operator capture that experience **locally** as a mission AAR. Nothing carries it **outward** to improve the graph's defaults for the next operator.

Naively, you reach for "telemetry." But aDNA's strategic compass ([[who/governance/VISION.md|VISION]]) forbids exactly that: *"no telemetry... it never takes custody."* So the real problem is sharper: **how do you close a deployment-improvement feedback loop without taking custody of anyone's data, without ever moving a secret, and without making collection ambient?**

## Solution

Federate an **opt-in, default-OFF, local-first feedback channel** as a consumer wrapper — `feedback/` — modeled structurally on the proven `iii/` quality wrapper ([[../../III.aDNA/what/decisions/adr_002_consumer_federation_contract|III ADR-002]]). The shape is deliberately the same as the compass's *existing* opt-in sensing-network (VISION §"The Standard Evolves From the Field") — this pattern just points that loop at **deployment** experience instead of **standard** friction.

Four moving parts:

1. **Local capture.** As an operator's agent installs/operates the software, it records signal in four classes — `deploy_outcome`, `config_drift`, `install_friction`, `shared_aar` — into the consumer vault's own `feedback/` directory. Nothing leaves the node at this step.
2. **Operator review.** The operator sees exactly what was captured. Capture is not submission.
3. **Opt-in submission.** *Only if* the operator grants consent (default-OFF, revocable), the signal is run through the `software_graph_default` **redaction profile** — stripping node identity, absolute paths, hostnames, and any secret-shaped token — and then contributed. Mesh-aware, never mesh-mandatory: the loop works fully on an air-gapped node.
4. **The growth loop.** Contributed, sanitized signal becomes **candidate pattern-updates** in the *owning* `<Software>.aDNA` graph — better default config, a documented install gotcha, a sharper operate runbook. The next operator inherits better defaults. The graph improved because a real deployment happened, not because a committee guessed.

The transport that carries sanitized signal between nodes is **not** built here. `Context.aDNA` (Prometheus) owns telemetry transport + economics; this pattern **consumes it by reference** and owns only the *meaning* of deploy/operate/install signal ([[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] §3). Normative contract: [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]].

## When to Use

- A vault governs a **software surface** an agent installs/operates/configures (any `<Software>.aDNA` deployment-graph Platform — Bitwarden, the Keystone cohort, Lab, ComfyUI, Warp, Terminal, Obsidian).
- You want install/operate/config **defaults to improve from real field use**, not just author intuition.
- You can guarantee the channel is default-OFF, names-only, and secrets-never. **If you cannot guarantee that, do not use this pattern** — use local AARs only.

Do **not** use it for: a Forge's artifact-quality loop (that is `iii/`), a credential value channel (there is no such thing — Standing Rule 6), or any always-on collection.

## Example: This Vault

`aDNA.aDNA` is itself the worked example, twice over:

- **The compass it must obey is in this vault.** [[who/governance/VISION.md|`who/governance/VISION.md`]] is the file that says "no telemetry." This pattern's default-OFF + names-only + redaction spine is the literal reconciliation, recorded one directory over in [[what/decisions/adr_036_software_graph_feedback_boundary|`what/decisions/adr_036`]]. You can read the constraint and the resolution as two files in the same triad leg — the structure *is* the argument.
- **The wrapper it federates is the `iii/` wrapper this vault already documents.** The `feedback/` contract is a near-twin of [[../../III.aDNA/what/decisions/adr_002_consumer_federation_contract|III's ADR-002 consumer contract]]; if you have seen an `iii/CLAUDE.md`, you have already seen the shape of a `feedback/CLAUDE.md`.

## Anti-Pattern

- **Ambient telemetry.** Collection baked into the base `.adna/` template so it runs everywhere by default. This is the compass violation the whole pattern exists to avoid — which is why ADR-036 §6 chooses wrapper-federation over base-template baking.
- **Custody creep.** A central vault that *stores* other operators' raw signal. The loop contributes *candidate pattern-updates*, not a data lake.
- **Value leakage.** A signal example that shows a real token, hostname, or absolute path. If a secret could be reconstructed from the channel, the redaction profile failed and the channel must be treated as breached (Standing Rule 6).
- **Silent submission.** Capturing and submitting in one step, with no operator review gate. Capture is local; submission is consented.

## Related

- [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]] — the normative contract + `federation_ref` schema + AAR sub-pattern.
- [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] — boundary, privacy spine, wrapper-name + wrapper-federation choice.
- [[what/patterns/pattern_federation_readiness|pattern_federation_readiness]] — the general federation-wrapper readiness pattern this specializes.
- [[who/governance/VISION|VISION]] — the strategic compass this pattern operationalizes (and must not contradict).
- Upstream standard: `adna_standard.md` (github.com/aDNA-Network/aDNA) — consumer-wrapper + `federation_ref` conventions.
