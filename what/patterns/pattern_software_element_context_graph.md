---
type: pattern
created: 2026-06-22
updated: 2026-07-03
status: draft
pattern_category: structural
applies_to: [forge, framework, platform]
campaign_id: campaign_keystone
last_edited_by: agent_rosetta
tags: [pattern, software_element_graph, context_graph, federation, forge, framework, platform, deployment_graph, composition, umbrella]
---

# pattern_software_element_context_graph

> **One line, for everyone:** Every piece of software the network *builds with* or *runs* gets its own aDNA context graph — and agents reach that software **through its graph** (a small `<software>/` wrapper + a `federation_ref` pointer), composing several at once. A website is built by pulling the Astro graph and the TypeScript graph; a node is assembled by pulling the Forgejo, Caddy, and Nebula graphs. Same idea, two scales.

## Problem

The network touches a lot of software — frameworks it builds *with* (Astro, TypeScript), engines it generates *with* (ComfyUI, Molecules), and daemons it *runs* (a git forge, a mesh, a proxy, object storage, inference). The knowledge of how to use each piece — the patterns, the config, the runbooks, the gotchas — is scattered: some in a vault's prose, some in an operator's head, much of it re-derived every time an agent meets that software again. There is no **uniform unit** an agent can be handed and told *"here is everything you need to use this software,"* and no **uniform way** to hand it several at once and have them compose.

The aDNA fleet has, in fact, already solved this **three separate times** — Forges, Frameworks, and software-deployment Platforms each give a piece of software a graph and let consumers federate against it via a `<name>/` wrapper + `federation_ref`. What's been missing is the **name for the shared idea**, so the three read as unrelated mechanisms instead of one.

## Solution

Treat **software-as-a-context-graph** as a single first-class idea: any software element the network cares about gets a `<Software>.aDNA` graph that carries its using-context, and **consumers access the software through that graph** — never by re-deriving it locally.

A software-element graph wears one of **three faces** — the same idea, different verbs:

| Face | The verb | A consumer… | Category | Examples |
|------|----------|-------------|----------|----------|
| **Build-with — produce** | *generate artifacts with it* | wraps it to scaffold/compose output | **Forge** | `Astro.aDNA`, `ComfyUI.aDNA`, `Molecules.aDNA`, `Oration.aDNA`, `Videos.aDNA` |
| **Build-with — conform** | *author / validate code with it* | wraps it for patterns, gates, doctrine | **Framework** | `TypeScript.aDNA`, `III.aDNA`, `Git.aDNA` |
| **Deploy-and-run — operate** | *install / run it on a node* | composes it into a node stack | **Platform** (`platform_subtype: software_deployment_graph`) | `Forgejo.aDNA`, `Caddy.aDNA`, `Nebula.aDNA`, `Nextcloud.aDNA`, `Store.aDNA`, … (Operation Keystone) |

**The universal access mechanism is the same for all three** — a consumer adds a wrapper directory + a pinned pointer (canonical schema: [[../artifacts/sf_forge_pattern_spec|sf_forge_pattern_spec]], reference impl in `Astro.aDNA`):

```yaml
# <consumer>.aDNA/how/federation/<software>/CLAUDE.md
federation_ref:
  source_vault: TypeScript.aDNA          # the software-element graph
  source_topic: ts_web_frameworks        # or source_lattice / source_skill / source_pattern
  version: "1.0.0"
  version_policy: minor                   # minor (auto patch/minor) | locked
  description: "TS patterns + validation gate for the Astro build"
```

> **Wrapper location (pinned — [[../decisions/adr_045_wrapper_placement_in_triad|ADR-045]]):** the wrapper directory lives at `<consumer>.aDNA/how/federation/<software>/`, not at graph root — it is an operation the consumer *invokes*, so it belongs under `how/`. ("Federation" here = the `federation_ref` consumer-wrapper layer; distinct from network/node federation, owned by `Network.aDNA` / Venus.)

The agent loads the referenced context **at session-start** — design-time, pull-based composition; no runtime linking, no copied implementation. The consumer supplies only configuration/overrides; the software's context stays canonical in its own graph.

**Composition is the payoff, at two scales:**

- **Build a thing** — a consumer pulls *several* software graphs to assemble a capability. A website consumer federates `Astro.aDNA` (build framework) **+** `TypeScript.aDNA` (language) **+** `III.aDNA` (quality) **+** `Git.aDNA` (CI). Precedent is already live: `wga.aDNA` wraps Astro + III + ISS; `Astro.aDNA` itself wraps III + Git + Canvas + ComfyUI.
- **Assemble a node** — a *role graph* composes deployment-face graphs into a stack. `Lighthouse.aDNA` selects from the Keystone roster (`Forgejo` + `Caddy` + `Nebula` + …) to compose a deployable node. The deployment graph is the brick; the role graph is the wall (see [[what/patterns/pattern_software_deployment_graph|pattern_software_deployment_graph]]).
- **Build-scale role-graphs** — just as a *node* role-graph (`Lighthouse.aDNA`) composes deployment-face graphs into a stack, a **build role-graph** composes build-face graphs into a built artifact. `WebForge.aDNA` (was `Websites.aDNA`, renamed 2026-07-02) composes `Astro.aDNA` (framework) + `TypeScript.aDNA` (language) + `Tailwind.aDNA` (styling) + `III.aDNA` (quality), plus deploy orchestration, into a website / dashboard / ops-center. The framework graph is the brick; the **build role-graph is the wall** — the build-scale twin of the node-scale role-graph. Both are the same mechanism ([[what/decisions/adr_039_software_element_context_graph_umbrella|ADR-039]]); only the composer differs (see [[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]]).

**This is a cross-category lens, NOT a new aDNA category.** Each graph keeps its category — Astro is a Forge, TypeScript a Framework, Forgejo a Platform-subtype. This pattern names what all three *share*: a software element, exposed as a context graph, reached via wrapper + `federation_ref`, composed by pulling many. ([[what/decisions/adr_039_software_element_context_graph_umbrella|ADR-039]] records the lens; [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] settles the deploy-face subtype.)

## Naming & Composition Rulings (adjudicated at Champollion G6, 2026-07-03)

Five clauses ruled into this pattern from the Corps/Slipway proposal batch (Berthier memos, `who/coordination/coord_2026_07_01_outbound_to_rosetta_layer_ruling_validator_proposals.md` + `coord_2026_07_02_berthier_to_rosetta_p4_provider_forge_webforge_rename.md` + `coord_2026_07_02_outbound_to_rosetta_slipway_proposals_p5_p6_p7.md`; HQ-side law since ADR-014 §4/§7 + Amendment A1 — this fold makes them the pattern's law):

1. **Layer ruling (P-1)** — *Layers are composition profiles, not graphs.* Deployment layers (L1/L2/L3) and stack profiles (core/collab/inference/ops) live **inside a role graph's composition manifest** as named profiles. A layer graduates to its own graph only when it becomes a distinct deployable **role** — its own lifecycle, its own operator base, its own composition of bricks (precedent: Lighthouse-for-L1). Corollary: a surface role with layer variants (e.g. Lab's L1/L2/L3) stays **one unified graph** with layer profiles.

2. **Two-tier naming rule (P-3)** — what to name a new graph, all three cases: **software-named brick** (one software IS the identity: Forgejo · Caddy · Nebula) · **role-named brick with swappable backend + pinned fleet-default** (Container[Podman] · Inference[multi] · Store · Groupware) · **role-named composer** (Lighthouse · Lab · Terminal). **Standing split-out triggers**: the embedded software splits out software-named only when an independent consumer needs it without the role (named: Jupyter-out-of-Lab · Cmux-out-of-Terminal; neither fired).

3. **Provider-forge suffix (P-4)** — the **`-Forge.aDNA` maker-suffix marks provider/producer graphs** whose identity is *producing artifacts on demand for other graphs* (the `spec_forge_ecosystem` category), **including a Tier-2 composer that is itself an on-demand producer** (reference instance: WebForge). Reference graphs (Frameworks) keep plain-noun names. The clause adds a name-class only — it renames nothing; the 2026-06 moves AWAY from `-Forge` (Oration · Molecules · ComfyUI · Videos · Astro) stand: those identities are their role/software, not their producer-ness.

4. **Context-dir convention (W-2)** — `what/context/<dir>/` in software-element graphs is **topic-named** (`container_runtime/` · `secret_store/` · `overlay_mesh/`), not software-named: it is the found convention across the Keystone cohort, and topic names survive graph renames (the pt-series lesson) — the context tree should not couple to the brand name the two-tier rule lets vary.

5. **Web-surface plane (P-6)** — the reference ruling for how a software-element graph grows web surfaces (third default browse surface; hub-as-tenant/provider; seams S1–S3; shapes 0–3) is HQ's **ADR-015** (`aDNALabs.aDNA/who/governance/adr_015_web_surface_plane_law.md`, ratified ⛩C2 2026-07-02). Consult it before adding a `webforge/` wrapper or graph-card surface.

## When to Use

- The thing is **software the network builds with or runs**, and the using-context (patterns / config / runbooks / interop) is worth capturing once and reaching many times.
- You want a consumer (a vault **or** an agent) to **access the software through a pinned context** that improves over time, not re-derive it per session.
- You're composing a capability or a node from **more than one** piece of software.

Do **not** use it for: a one-off script with no reusable using-context; a piece of software an owning persona already governs (route/scope, don't fork a duplicate — Jupyter→`Lab.aDNA`, the git *provider contract*→`Git.aDNA`, the mesh *substrate*→`Network.aDNA`); or a graph that would **copy** another's implementation instead of `federation_ref`-ing it.

## Example: build-then-run, one mechanism

- **Build** — `ScienceStanley.aDNA` builds its site by pulling `Astro.aDNA` (scaffold + content lattices) **and** `TypeScript.aDNA` (`ts_web_frameworks` patterns + validation gate): two software-element graphs, two `federation_ref` blocks in two wrapper dirs, composed at agent-session-start. Neither framework's context is copied; both are pinned.
- **Run** — `Lighthouse.aDNA` stands up a node by composing `Forgejo.aDNA` + `Caddy.aDNA` + `Nebula.aDNA` + `Store.aDNA`: deployment-face graphs, each federating the same four cross-cutting wrappers (`how/federation/git/` + `how/federation/feedback/` + `how/federation/iii/` + Home credential-routing), composed into a stack profile.

Both are the *same* pattern — a consumer reaching software through its context graph and pulling several together.

## Anti-Pattern

- **The nameless mechanism.** Three teams reinventing "wrap a software graph" because no one wrote down that Forge, Framework, and deployment-Platform are one idea. (This pattern is the fix.)
- **Copy instead of federate.** A consumer that pastes Astro's lattices or TypeScript's patterns into itself instead of a pinned `federation_ref` — now it drifts and never gets upstream improvements.
- **Duplicating an owner.** A software graph that re-specifies a substrate/contract another persona owns (`Nebula.aDNA` re-writing Venus's mesh substrate; a build graph re-writing Hopper's git provider contract). Scope to the software's own using-context; route the rest.
- **Parallel truth.** Two homes both claiming canonical for one software's context (a graph *and* a recipe library). Resolve as ADR-037 §3 did: one canonical home, the other a source-quarry/pointer.

## Related

- [[what/patterns/pattern_software_deployment_graph|pattern_software_deployment_graph]] — the **deploy-and-run face** in full (install/operate/configure/update/interoperate; Lighthouse composition).
- [[what/specs/spec_forge_ecosystem|spec_forge_ecosystem]] · [[what/specs/spec_framework_ecosystem|spec_framework_ecosystem]] · [[what/specs/spec_platform_ecosystem|spec_platform_ecosystem]] — the three category specs whose consumer-integration sections all instantiate this lens.
- [[../artifacts/sf_forge_pattern_spec|sf_forge_pattern_spec]] (in `Astro.aDNA`) — the canonical `federation_ref` + wrapper schema reused by all faces.
- [[what/decisions/adr_039_software_element_context_graph_umbrella|ADR-039]] (this lens) · [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] (deploy-scale role-graph subtype) · [[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]] (build-scale role-graph subtype).
- Upstream standard: `adna_standard.md` (github.com/aDNA-Network/aDNA) — vault fork + consumer-wrapper conventions.
