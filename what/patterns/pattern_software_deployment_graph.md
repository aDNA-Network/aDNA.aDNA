---
type: pattern
created: 2026-06-20
updated: 2026-06-20
status: draft
pattern_category: structural
applies_to: [platform]
campaign_id: campaign_keystone
last_edited_by: agent_stanley
tags: [pattern, deployment_graph, platform, federation, keystone, node_stack]
---

# pattern_software_deployment_graph

> **One line, for everyone:** Give every piece of software the network runs its own small aDNA graph — the install steps, the config, the docs, the operating know-how, all in one place — so that adding software to a machine becomes "drop in the graph and let the agent set it up and run it." A node's whole software stack is then just a set of these graphs, composed together.

## Problem

The aDNA fleet runs a lot of software to build and operate the network: a mesh daemon, a git forge, a notebook hub, object storage, a reverse proxy, model-inference runtimes, a secret engine. Today the knowledge of how to install and operate each piece is scattered — some in a node's [[../../Home.aDNA/CLAUDE.md|Home.aDNA]] inventory, some in `Network.aDNA` deployment recipes, some only in an operator's head, much of it nowhere. When a new node needs the stack, a human re-derives it. When something breaks, the operating know-how is not where the agent is looking. There is no **unit** that an agent can be handed and told "make this software a working, operable part of this node."

## Solution

Define a tier of **context-graph-native forked deployment graphs**: one `<Software>.aDNA` graph per piece of software, each a normal aDNA vault (forked via [[../../.adna/how/skills/skill_project_fork|skill_project_fork]]) whose single job is to make *that* software a seamless, agentic part of an aDNA node. Each graph **owns five verbs** for its software:

- **install** — acquire, place, version-pin.
- **operate** — start/stop/observe/recover; the runbooks an agent follows day-to-day.
- **configure** — the documented defaults and the safe knobs.
- **update** — version migration, the upgrade discipline.
- **interoperate** — how it joins the lattice (mesh seam, credential scope, ingress).

Each graph **federates rather than duplicates** the cross-cutting concerns, through four wrappers (the conformance contract — see [[what/specs/spec_platform_ecosystem|the spec subtype]] + [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]]):

| Wrapper | Federates to | For |
|---------|--------------|-----|
| `git/` | [[../../Git.aDNA/CLAUDE.md|Git.aDNA]] (Hopper) | git-ops / forge / CI-CD doctrine |
| `feedback/` | [[what/specs/spec_telemetry_feedback_ecosystem|aDNA.aDNA telemetry-feedback]] (WS-A) | opt-in deploy-signal loop (default-OFF) |
| `iii/` | [[../../III.aDNA/CLAUDE.md|III.aDNA]] (Argus) | inspect/introspect/improve quality loop |
| Home.aDNA credential routing | [[../../Home.aDNA/CLAUDE.md|Home.aDNA]] (Hestia) | secret brokering — names-only (Standing Rule 6) |

And each graph is **composed, not free-standing**: a *role graph* like [[../../Lighthouse.aDNA/CLAUDE.md|Lighthouse.aDNA]] assembles a chosen set of `<Software>.aDNA` graphs into a deployable node. The deployment graph is the brick; the lighthouse is the wall.

**Category**: this is **Platform.aDNA with a software/deployment-graph designation** — not a new aDNA category. Warp, Obsidian, and Lab are already software-surface Platforms; this names the sub-pattern they share.

## When to Use

- The thing is **deployable software with an install + operate surface** an agent can drive (a daemon, a service, a runtime, an app). Mesh daemon, forge, hub, object store, proxy, inference runtime, secret engine — yes.
- You want the operating know-how to **live where the agent is** and to **improve from field use** (via the `feedback/` loop).

Do **not** use it for: an embedded library with no service surface (SQLite, a Python framework consumed as a dependency — rule case-by-case at the graph's P0); a pure SaaS with no self-host install surface (treat as an operate/credential context doc, not a deployment graph); or anything an owning persona already governs (Jupyter → Lab; the git **provider contract** → Git.aDNA; the mesh **substrate** → Network.aDNA) — there you **scope or route**, you do not fork a duplicate.

## Example: This Vault

`aDNA.aDNA` is the standard-bearer, so the paradigm is authored here and demonstrates itself three ways: the **pattern** you are reading, the **category placement** one directory over in [[what/specs/spec_platform_ecosystem|spec_platform_ecosystem]], and the **uniform skeleton** in [[how/templates/template_software_graph_stub|template_software_graph_stub]] — which itself reuses, verbatim-in-shape, the live "Credential routing" + "Git-ops doctrine" blocks from `Lab.aDNA/CLAUDE.md` (a deployment graph that already exists in all but name). The structure is the lesson: a fleet is uniform because every member is forked from one template that federates four shared wrappers.

## Anti-Pattern

- **The bespoke fork.** Each software graph hand-authored differently, re-deriving credential and git-ops doctrine locally. The template + four wrappers exist precisely to prevent this — that is what makes the cohort a *fleet*, not a pile.
- **Duplicating an owner.** A `Nebula.aDNA` that re-specifies the mesh substrate Venus owns, or a `Forgejo.aDNA` that re-writes Hopper's provider contract. Scope to the *software install/config*; route the rest.
- **Parallel truth.** A deployment graph and the `Network.aDNA` recipe library both claiming to be authoritative. Resolved by ADR-037: **recipes = source-quarry, graph = canonical home.**
- **Build-at-genesis.** Treating the graph stub as license to install/deploy. Stubs are planning artifacts; live work is gated per graph.

## Related

- [[what/specs/spec_platform_ecosystem|spec_platform_ecosystem]] — the category + the software/deployment-graph subtype.
- [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] — subtype ruling, four-wrapper conformance, recipe-quarry reconciliation.
- [[how/templates/template_software_graph_stub|template_software_graph_stub]] — the uniform cohort skeleton.
- [[what/patterns/pattern_software_graph_telemetry_feedback|pattern_software_graph_telemetry_feedback]] — the `feedback/` loop each graph carries.
- Upstream standard: `adna_standard.md` (github.com/aDNA-Network/aDNA) — vault fork + consumer-wrapper conventions.
