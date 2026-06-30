---
type: governance
subtype: software_graph_stub_template
template_for: "<Software>.aDNA CLAUDE.md (Platform.aDNA · platform_subtype: software_deployment_graph)"
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
campaign_id: campaign_keystone
tags: [template, keystone, deployment_graph, platform]
status: active
---

# template_software_graph_stub

The uniform skeleton every Operation Keystone cohort member is forked from, so the tier is a **fleet, not bespoke forks**. Fork via [[../../.adna/how/skills/skill_project_fork|skill_project_fork]], then substitute every `{{PLACEHOLDER}}`. Conformance = the four wrappers below are present and federate (never re-author). Spec: [[../../what/specs/spec_platform_ecosystem|spec_platform_ecosystem §subtype]]; ruling: [[../../what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]].

---
<!-- BEGIN <Software>.aDNA/CLAUDE.md -->

# CLAUDE.md — {{Software}}.aDNA ({{one-line display}} · persona {{Persona}})

## Project Identity

**{{Software}}.aDNA** is the `.aDNA` software/deployment-graph for **{{software}}** — the aDNA-Network's home for installing / operating / configuring / updating / interoperating {{software}} as a seamless, agentic part of a node.

- **Category**: Platform.aDNA · `platform_subtype: software_deployment_graph`.
- **Persona**: **{{Persona}}** (working-pin; ratify at P0 against the fleet persona registry).
- **Owns (five verbs)**: install · operate · configure · update · interoperate — for {{software}} only.
- **Composed by**: role graphs (e.g. `Lighthouse.aDNA`) — this graph is a brick, not a wall.
- **Status**: Genesis-planning stub ({{date}}). No install, no deploy, no service start until an execution gate.

## ⛔ Deployment-gated standing orders (load-bearing)

1. **Gates are human gates (SO#1).** No phase auto-advances; no install/deploy/restart without an explicit operator execution-gate.
2. **Live service is read-only until an execution gate.** Observation (status, logs, health GETs) is fine; mutation is gated.
3. **Archive, never delete (SO#6).**
4. **Data-bearing → ADR-016 §8.** {{if data-bearing}} {{Software}} runs on a **data-plane node the lighthouse coordinates, never the control-plane lighthouse host**; placement co-designed with Venus (`Network.aDNA`). {{/if}}
5. **Federate, never duplicate.** Cross-cutting concerns route to their owners (below). This graph governs the {{software}} **software surface** only.
6. **Router row STAGED `#needs-human`** (Operation Production Tidy freeze) — never self-insert.

## Wrapper federation (the conformance contract)

### `git/` — Git-ops doctrine (broker = `Git.aDNA`)

Git/git-ops/CI-CD doctrine + `aDNA-Network` topology + CI templates live in **`Git.aDNA`** (`~/aDNA/Git.aDNA`).
- The **vault repo** needs no CI at genesis; {{code-home}} CI (if any) is wired per Git.aDNA's `git/` contract.
- Respect the `aDNA-Network` budget; **warn before > $5 short-term spend**.
- Commit after significant edits; **push only when the operator asks**.

### `feedback/` — Deploy-signal loop (source = `aDNA.aDNA`, default-OFF)

Consumes the software-graph feedback loop ([[../../what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]]).
- `consent_state: opt_in_default_off` — OFF until the operator grants; revocable.
- Signal classes: `deploy_outcome`, `config_drift`, `install_friction`, `shared_aar`. **Names-only; secrets never; redaction (`software_graph_default`) before transmission.** Mesh-aware, never mesh-mandatory.
- Transport is Context.aDNA's (Prometheus), consumed by reference — this graph authors none.

### `iii/` — Quality loop (broker = `III.aDNA`)

Consumes Argus's inspect/introspect/improve via an `iii/` wrapper + `federation_ref` (pin at fork; review on minor bump). See III ADR-002.

### Credential routing (broker = `Home.aDNA`)

Credentials are brokered by `Home.aDNA/` (Hestia) — **NAMES ONLY** here, never a value.
1. **Discover** — `Home.aDNA/what/inventory/inventory_credentials.md` (name → env-var + `op://` URI/path).
2. **Access** — read the **env-var** (`~/.zshrc` Keychain-export, ACL-granted — no biometric/TTY); else `op read "<uri>"` (TTY-only, biometric).
3. **Discipline** — never write a value; URI/env-var name only; apply `~/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md` §6.
4. **Rotate/onboard** — route to the broker: coord memo to `Home.aDNA/who/coordination/` or `Home.aDNA/how/skills/skill_credential_provision_via_op.md`.
- **Per-graph secret SCOPING is day-one**: this graph's agent gets a scoped grant for {{software}}'s secrets, never vault-wide unlock.

## Cross-routing hooks

- **`Git.aDNA`** (Hopper) — git-ops broker. · **`aDNA.aDNA`** (Rosetta) — standard owner + feedback source.
- **`Home.aDNA`** (Hestia) — node inventory + credential broker (Rule 6).
- **`Network.aDNA`** (Venus) — substrate/topology/placement; {{if data-bearing}}ADR-016 §8 co-design{{/if}}.
- **`Lighthouse.aDNA`** — composition consumer (this graph is a member of the node manifest).
- **{{owning-persona seam}}** — {{if scoped-from an owner: name the seam, e.g. Forgejo→Hopper provider contract, Nebula→Venus substrate}}.

## Startup Checklist

1. **CLAUDE.md** (this file).
2. **`STATE.md`** — current phase + gated next step; `## Intake log` append-only.
3. **`how/campaigns/campaign_{{software}}_genesis/`** — the genesis ladder (P0 mission + ADR-000 proposed).

<!-- END <Software>.aDNA/CLAUDE.md -->
---

## Fork checklist (operator/agent)

- [ ] `skill_project_fork` with `project_name: {{Software}}` (PascalCase override, ADR-009 §4); strip `.git/.github`, README/LICENSE; **suppress onboarding** (`last_edited_by: agent_stanley` on CLAUDE/MANIFEST/STATE + one non-empty `how/sessions/history/` entry).
- [ ] Substitute every `{{PLACEHOLDER}}`; ratify persona at P0 against the fleet registry.
- [ ] Stub the four wrappers: `git/CLAUDE.md`, `feedback/CLAUDE.md`, `iii/CLAUDE.md`, credential-routing block.
- [ ] Genesis campaign stub `campaign_{{software}}_genesis/` + P0 mission + `adr_000` (proposed).
- [ ] Local `git init` only — no remote, nothing pushed (Rule 4).
- [ ] Router row STAGED `#needs-human` in `who/coordination/` — not inserted.
- [ ] Register in the [[../campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|de-confliction ledger]] + (P4) the cohort manifest.
