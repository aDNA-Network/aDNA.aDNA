---
type: tutorial
created: 2026-07-02
updated: 2026-07-02
status: active
level: advanced
prerequisites: [concept_lattice_composition, concept_fair_metadata, tutorial_build_a_lattice, tutorial_federate_a_vault]
estimated_time: "35 minutes"
dual_audience: true
last_edited_by: agent_rosetta
tags: [tutorial, advanced, exchange, lighthouse, adoption, registry, federation, pull, build, memorialize]
---

# Adopt via the Exchange: Pull → Build-to-Spec → Memorialize

## What You'll Do

Walk the full aDNA adoption arc as one honest, end-to-end path: **pull** a shared piece of work, **build it to the standard**, and **memorialize** where it came from so the next person can trust and reuse it. By the end you will have run a real validation against a shipped lattice and read a real machine verdict — that validated lattice plus its readiness result is your concrete outcome.

This is an *honesty-first* tutorial. Some steps run today exactly as written; some describe a capability that is designed and partly built but not yet exercisable from this vault. **Every step is labeled** so you always know which is which:

- **`PASS`** — you can run this right now, in this vault, and get the result shown.
- **`TAUGHT-AS-DESIGN`** — this is how the capability works by design; the boundary that stops it from running *here, today* is named explicitly. Nothing is narrated as if it runs when it doesn't.

> **Why the labels?** aDNA's whole promise is that context you can trust. A tutorial that pretends a horizon feature already ships would betray exactly the trust the standard is built to protect. So we teach the shipped subset for real and name the horizon plainly — the same framing the [educators use-case](../use_cases/use_case_educator.md) settled on: *teach the roadmap as the horizon, never as a shipped feature.*

## Prerequisites

- [[what/concepts/concept_lattice_composition|Lattice Composition]] — nodes, edges, inline vs. external composition, and the readiness idea
- [[what/concepts/concept_fair_metadata|FAIR Metadata]] — the license/keywords/provenance envelope that makes shared work trustworthy
- [[what/tutorials/tutorial_build_a_lattice|Build a Lattice]] — how to author a `.lattice.yaml` from scratch (this tutorial *reuses* one instead)
- [[what/tutorials/tutorial_federate_a_vault|Federate a Vault]] — the export/import mechanics this arc sits on top of

New to aDNA vaults entirely? Start at [[what/tutorials/tutorial_navigate_a_vault|Navigate an aDNA Vault]] first — this is an advanced tutorial and assumes you can already read a vault.

---

## The three beats, in one picture

The Exchange is aDNA's distribution substrate — think of it as an app store for *context and workflows* instead of apps. Adoption through it is a loop:

```
   ┌─────────┐        ┌──────────────┐        ┌───────────────┐
   │  PULL   │  ───▶  │ BUILD-TO-SPEC │  ───▶  │  MEMORIALIZE  │
   │ (get a  │        │ (make it      │        │ (record where │
   │  piece) │        │  conformant)  │        │  it came from)│
   └─────────┘        └──────────────┘        └───────────────┘
        ▲                                              │
        └──────────────────────────────────────────────┘
                  the memorialized result becomes
                  the next person's pull
```

Each beat below is walked at its real maturity.

---

## Beat 1 — Pull

**In plain language:** *pulling* means getting a ready-made piece of work — a lattice (a workflow) or a context graph (a body of knowledge) — that someone else already built and shared, so you don't start from a blank page.

**Why it matters:** the expensive part of agentic work isn't running a workflow, it's *knowing which workflow is any good.* A pull lets you start from something already validated and provenance-stamped by someone who solved the problem before you.

### Step 1.1 — Pull from the Exchange registry · `TAUGHT-AS-DESIGN`

The documented product surface for a pull is the `latlab` registry CLI (see this vault's `CLAUDE.md` §Registry Awareness and [[how/skills/skill_lattice_publish|skill_lattice_publish]], the authoritative recipe):

```bash
# By design: download a published lattice by name from the registry
latlab lattice pull knowledge_base
# ...optionally pinned to a version
latlab lattice pull knowledge_base --version 1.0.0
```

**Why this is `TAUGHT-AS-DESIGN` and not `PASS`:** the aDNA registry is **local-first** (`MarketplaceRegistry`), and *nothing has ever been published from this vault* — that first publish is deliberately deferred as an outward-facing action pending operator ratification. So a `pull` here has nothing real to fetch. And **cross-node** exchange — pulling a lattice a *different* node published — rides the network's opt-in membership substrate, which is still being built. Exchange.aDNA's own state is honest about this: the tier-0 pilot (Agora I) is complete and registry-based composition works within a node; cross-node distribution is the *horizon*, not a shipped feature.

### Step 1.2 — Start from a shipped example (the runnable stand-in) · `PASS`

You don't need a populated registry to learn the arc — this vault *ships* a library of validated lattices you can treat exactly as if you had just pulled them. There are 19 example lattices at `what/lattices/examples/`. Pick the `context_graph` one, since "pulling shared knowledge" is its whole reason for existing:

```bash
# From the vault root — copy the "pulled" lattice into your working area
cp what/lattices/examples/knowledge_base.lattice.yaml /tmp/pulled_lattice.lattice.yaml
```

This is a real file — a five-node retrieval-and-reasoning workflow (`document_corpus → indexer → retriever → reasoner`, plus a `query_input`). Open it and read it; that is your "pulled" artifact for the rest of the walk.

> **Substitution note:** copying a shipped example is a faithful stand-in for a registry pull because the *shape of the artifact is identical* — the same `.lattice.yaml` a real pull would deliver. Only the transport (registry lookup vs. local copy) differs.

---

## Beat 2 — Build-to-Spec

**In plain language:** you rarely use a pulled piece exactly as-is. You adapt it, then you *check it against the standard* so it stays trustworthy and composable. That check is the heart of this tutorial — and it runs for real.

**Why it matters:** "build to spec" is what stops a shared ecosystem from rotting into a pile of half-broken files. A lattice that passes validation and the publish-readiness checks is one anyone else can safely pull next.

### Step 2.1 — Validate the lattice · `PASS` (this is your executable outcome)

The validator ships in this vault as a pure-Python library (no external services, no network). Run it against your pulled lattice:

```bash
cd what/lattices/tools
python3.13 - <<'PY'
from lattice_validate import validate_lattice_file, check_federation_readiness
import yaml
p = "../examples/knowledge_base.lattice.yaml"
r = validate_lattice_file(p)
print(f"validate_lattice_file: valid={r.valid}  errors={len(r.errors)}  warnings={len(r.warnings)}")
for w in r.warnings:
    print("  WARN:", w)
data = yaml.safe_load(open(p))
fr = check_federation_readiness(data)
print(f"check_federation_readiness: ready={fr.valid}  errors={len(fr.errors)}")
PY
```

**Real output (run 2026-07-02, python 3.13.5):**

```
validate_lattice_file: valid=True  errors=0  warnings=2
  WARN: Node 'document_corpus': dataset node without 'ref' field
  WARN: Node 'query_input': dataset node without 'ref' field
check_federation_readiness: ready=True  errors=0
```

Read that carefully — it teaches two things at once:

1. **`valid=True, errors=0`** — the structure conforms to the schema at `what/lattices/lattice_yaml_schema.json` (spec §5.1).
2. **`warnings=2`** — the validator distinguishes *fatal* from *advisory*. These two datasets have no `ref` binding yet (they're placeholders a real deployment would wire to actual data). Warnings don't block you; they're the standard *telling you what's still loose* so you build it to spec deliberately instead of by accident.

### Step 2.2 — Walk the FAIR block · `PASS`

Open the `fair:` block inside your pulled lattice. This is the shipped, verbatim envelope:

```yaml
fair:
  license: "MIT"
  creators:
    - "Lattice Labs"
  keywords:
    - knowledge base
    - context graph
    - retrieval augmented generation
    - RAG
    - reasoning
  provenance: "Reference implementation of a context_graph lattice with reasoning-mode execution for knowledge retrieval"
```

FAIR = **F**indable, **A**ccessible, **I**nteroperable, **R**eusable ([[what/concepts/concept_fair_metadata|full concept]]). `keywords` make it findable; `license` makes it legally reusable; `provenance` says where it came from and why. Building to spec means *never stripping this block* — it travels with the lattice so the next puller inherits the trust.

### Step 2.3 — Check publish-readiness · `PASS`

`check_federation_readiness` (run in Step 2.1) already returned `ready=True, errors=0`. That function implements aDNA's publish-readiness checks — the gate a lattice must pass before it can be shared cross-instance (spec §11). The **authoritative, single-source recipe for these checks is [[how/skills/skill_lattice_publish|skill_lattice_publish]]** — follow it rather than any inline restatement.

> **Honesty note (F-CHM-214):** two teaching surfaces in this vault currently phrase the readiness list slightly differently (`CLAUDE.md` §Registry Awareness vs. [[what/concepts/concept_lattice_composition|concept_lattice_composition]]). This tutorial deliberately does **not** mint a third list — it points you at `skill_lattice_publish` as the one to trust. The wording harmonization is tracked as finding **F-CHM-214**; the *behavior* you just ran (the validator) is unaffected.

Our pulled lattice already satisfies the gate because it carries the required federation block:

```yaml
federation:
  shareable: true
  source_instance: adna
  version_policy: minor
```

`shareable: true` is opt-in consent; `source_instance` is provenance; `version_policy` sets how downstream pullers pin it.

### Step 2.4 — Compose it into something larger · `TAUGHT-AS-DESIGN`

Real adoption usually means *composing* your pulled lattice into a bigger workflow. aDNA offers two patterns ([[what/concepts/concept_lattice_composition|Lattice Composition]], spec §11):

- **External reference** — the child appears as one opaque node via a `lattice://instance/name` URI. Cheapest (+1 node), preserves black-box boundaries. **The default recommendation.**
- **Inline** — the child's nodes merge into the parent with `{child}_{node}` naming. Use only when the parent must inspect child internals.

The documented command:

```bash
# By design: external composition, child stays separate, joined by a seam edge
latlab lattice compose parent.lattice.yaml knowledge_base.lattice.yaml \
  --pattern external \
  --seam-edges '[{"source":"parent_node","target":"kb_entry","data_mapping":[{"from":"query","to":"query_input","type":"string"}]}]'
```

**Why `TAUGHT-AS-DESIGN`:** `compose` is part of the same registry CLI surface as `pull`/`publish`; it isn't exercisable end-to-end from this vault today (the CLI is not operational here and there is no populated registry to compose *against*). The composition *rules* — external vs. inline, the seam-edge requirement, the token-cost trade-off — are fully specified and stable, so you can design against them now. To actually author and validate a composed lattice by hand, follow [[what/tutorials/tutorial_build_a_lattice|Build a Lattice]] and [[what/tutorials/tutorial_federate_a_vault|Federate a Vault]], which walk the file-level mechanics.

---

## Beat 3 — Memorialize

**In plain language:** *memorializing* means permanently recording what you did and where it came from, so the result is auditable — nobody has to take your word for it later.

**Why it matters:** a shared ecosystem only compounds if provenance survives every hop. Memorialization is what turns "I ran a workflow" into "here is a signed, traceable record the next person can build on."

### Step 3.1 — Inspect real extraction provenance · `PASS`

Provenance memorialization already ships in the FAIR + federation envelope. The clearest live example is `docking_assessment.lattice.yaml`, a lattice that was *extracted* from a larger pipeline and carries the receipt:

```yaml
federation:
  shareable: true
  source_instance: adna
  parent_lattice: protein_binder_design
  version_policy: locked
  extracted_nodes:
    - structure_prediction
    - interface_analysis
    - ranking
```

Read that as a memorial record: *this lattice is the `structure_prediction`, `interface_analysis`, and `ranking` nodes lifted out of `protein_binder_design`, version-locked so the extraction stays reproducible.* The validator even enforces the pairing — declare `parent_lattice` without `extracted_nodes` (or vice versa) and it errors. Provenance here isn't a comment; it's a checked field.

### Step 3.2 — The readiness verdict *is* a memorial · `PASS`

The `ready=True` verdict you produced in Step 2.1 is itself a lightweight memorial — a machine-checked statement that *this artifact met the shared bar at this moment*. Capture it (in a session log, a commit message, a walk record) and you've memorialized the build-to-spec step with real evidence, not a claim.

### Step 3.3 — Memorialize to the Protocol ledger · `TAUGHT-AS-DESIGN`

At the full-Exchange horizon, memorialization graduates from *file-local provenance* to a shared, tamper-evident **ledger**: an append-only advisory/provenance record at the Lattice Protocol layer (the draft `lattice-ledger` spec, DLT-backed). A pull, a build, and a publish would each leave an entry no one can silently rewrite.

**Why `TAUGHT-AS-DESIGN`:** the ledger lives in the Lattice Protocol's *draft* spec — it is largely design-taught, and the Protocol repo itself is pre-public-launch. Today's honest, shipped stand-in is exactly what you did in Steps 3.1–3.2: the FAIR `provenance` string plus the checked `federation` block plus your captured readiness verdict. That is real provenance you can trust now; the DLT ledger is the horizon that makes it *federated and tamper-evident* across nodes.

---

## Shipped vs. Horizon — the boundary table

Everything this tutorial touched, sorted by what runs today versus what is taught as design. (Boundaries are pinned to the live states of the relevant vaults as of 2026-07-02.)

| Capability | Status | What's real today | The horizon |
|------------|--------|-------------------|-------------|
| Validate a lattice (`lattice_validate.py`) | **SHIPPED · PASS** | Runs offline in this vault; you ran it | — |
| Publish-readiness check (`check_federation_readiness`) | **SHIPPED · PASS** | Runs offline; `ready=True` verdict | — |
| FAIR + federation provenance blocks | **SHIPPED · PASS** | In every federation-ready example; validator-enforced | — |
| Registry-based composition *within a node* | **SHIPPED (Exchange tier-0 / Agora I)** | Local-first `MarketplaceRegistry`; not exercised from this vault (no first publish yet) | — |
| `latlab lattice pull / publish / compose` from *this* vault | **HORIZON · TAUGHT-AS-DESIGN** | Documented surface; nothing published here (OoB-deferred) | First publish pending operator ratification |
| Cross-node Exchange (pull another node's work) | **HORIZON · TAUGHT-AS-DESIGN** | — | Rides the network's opt-in membership substrate, still being built |
| Adopt via **Lighthouse** (node-scale composition) | **HORIZON · TAUGHT-AS-DESIGN** | Genesis P0 closed 2026-07-01; composition manifest v1 shipped (profiles core/collab/inference/ops) | Deploys gate on Git.aDNA P7 (not yet chartered) — see [[what/use_cases/use_case_exchange_lighthouse_adoption|the Lighthouse adoption use-case]] |
| Protocol **ledger** memorialization (DLT provenance) | **HORIZON · TAUGHT-AS-DESIGN** | FAIR `provenance` + checked `federation` block are today's stand-in | Draft `lattice-ledger` spec; Protocol repo pre-public-launch |

**The takeaway:** the *spine* of the adoption arc — pull-a-real-artifact, validate it, check readiness, inspect provenance — runs end-to-end today. The *network* around it (cross-node pull, node-scale Lighthouse deploys, the DLT ledger) is designed, partly built, and honestly named as the horizon.

## See It In Action (this vault)

The structure you just used *is* the lesson — everything is here, live:

- The 19 lattices you "pulled" from: `what/lattices/examples/` (start with `knowledge_base.lattice.yaml`).
- The validator you ran: `what/lattices/tools/lattice_validate.py` — pure Python, offline, part of this vault.
- The schema it checks against: `what/lattices/lattice_yaml_schema.json` (spec §5.1).
- **The vault itself is a `context_graph` lattice** — the concepts, tutorials, and AGENTS.md routing you're navigating right now are nodes-and-edges, traversed agent-first. You didn't just *read about* a context graph; you pulled a workflow out of one.

## Related

- [[what/tutorials/tutorial_federate_a_vault|Federate a Vault]] — the export/import mechanics underneath a pull, walked at file level
- [[what/tutorials/tutorial_build_a_lattice|Build a Lattice]] — author a `.lattice.yaml` from scratch instead of pulling one
- [[what/concepts/concept_lattice_composition|Lattice Composition]] — inline vs. external composition, seam edges, readiness
- [[what/concepts/concept_context_commons|Context Commons]] — why a populated Exchange matters: shared context as a public good
- [[how/skills/skill_lattice_publish|skill_lattice_publish]] — the authoritative publish/pull/compose recipe (and the readiness checks)
- [[what/use_cases/use_case_exchange_lighthouse_adoption|Adopting via the Lighthouse path]] — the same arc told as a node operator's story
