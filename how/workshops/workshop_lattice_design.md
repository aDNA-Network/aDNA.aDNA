---
type: workshop
created: 2026-04-16
updated: 2026-04-16
status: active
duration: "120 minutes"
audience: "Developers building composable workflows with aDNA lattices"
difficulty: advanced
prerequisites:
  - Completed workshop_build_your_first_vault or equivalent
  - Python 3.9+ installed (for validation tools)
  - Familiarity with YAML syntax
last_edited_by: agent_stanley
tags: [workshop, advanced, lattice, yaml, composition, fair]
---

# workshop_lattice_design

A 120-minute deep workshop where participants design, validate, and compose lattice YAML files. Lattices are the executable layer of aDNA — directed graphs of nodes and edges that represent workflows, agent reasoning chains, or knowledge structures. Participants leave with a validated lattice ready for their domain.

## Workshop Goals

By the end of this workshop, participants will be able to:

1. Model a real workflow as a lattice (nodes, edges, execution mode)
2. Choose the correct lattice type and execution mode for their use case
3. Add FAIR metadata for findability, accessibility, interoperability, and reuse
4. Validate a lattice against the JSON Schema using `lattice_validate.py`
5. Understand lattice composition (combining two lattices with seam edges)

## Pre-Work

Complete before arriving (30 minutes):

- [[tutorial_build_a_lattice|Build a Lattice]] (30 min) — end-to-end lattice construction tutorial

## Agenda

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Welcome & Orientation | What are lattices? Show `what/lattices/examples/hello_world.lattice.yaml` as the minimal example. |
| 0:10 | Lattice Anatomy | Walk through a real lattice: metadata, nodes, edges, FAIR block. Show each field's purpose. |
| 0:25 | Exercise 1: Sketch | Whiteboard a workflow from your domain. Identify nodes (steps) and edges (data flows). Mark decision points. |
| 0:40 | Types & Modes | 6 lattice types (pipeline, agent, context_graph, workflow, infrastructure, skill) and 3 execution modes (workflow, reasoning, hybrid). When to use each. |
| 0:50 | Exercise 2: Build | Translate your whiteboard sketch into YAML. Choose type and execution mode. Define nodes and edges. |
| 1:10 | FAIR Metadata | Why FAIR matters for lattice sharing. Required fields: license, creators, keywords. Optional: identifier (DOI), provenance. |
| 1:20 | Exercise 3: Validate | Install dependencies (`pip install pyyaml`). Run `lattice_validate.py` on your lattice. Fix any schema errors. |
| 1:35 | Composition | How two lattices combine: external (seam edges between separate graphs) vs inline (merge child into parent). Show `composed_therapeutics.lattice.yaml` as a real example. |
| 1:45 | Exercise 4: Compose | Pair up. Combine your lattice with a partner's using external composition. Define seam edges. Validate the result. |
| 1:55 | Gallery Walk & Wrap-up | Display lattices. Discuss: what patterns emerged? What was hardest? |

## Facilitator Notes

- **Start concrete.** The `hello_world.lattice.yaml` is 30 lines. Show it before explaining any theory. Let participants see the shape before learning the vocabulary.
- **Whiteboard before YAML.** Exercise 1 (sketch) is the most important exercise. If participants skip it, they get lost in YAML syntax instead of thinking about structure. Enforce the sketch step.
- **Type selection anxiety.** Participants agonize over choosing the right lattice type. Reassure them: `pipeline` (deterministic DAG) covers 70% of use cases. Use `agent` only for LLM-driven reasoning, `context_graph` for knowledge structures. If in doubt, `workflow` is the safe default.
- **Validation is the payoff.** When `lattice_validate.py` passes, participants feel their lattice is real. When it fails, the error messages teach schema awareness. Either outcome is a win.
- **Composition is advanced.** If time is tight, make exercise 4 optional. The concept matters more than the hands-on practice — most participants won't need composition in their first lattice.

## Materials / Prerequisites

- **Required**: Code editor, Python 3.9+, `pyyaml` package, the `what/lattices/` directory from aDNA.aDNA
- **Optional**: Whiteboard or paper for exercise 1, projector for facilitator
- **Reference**: `what/lattices/lattice_yaml_schema.json` (the authoritative schema)
- **Example set**: 15 lattice examples in `what/lattices/examples/` covering pipeline, agent, context_graph, workflow, and infrastructure types

## Exercises

### Exercise 1: Sketch Your Workflow

**Instructions**: On paper or whiteboard, draw a workflow from your domain:

1. List the steps as boxes (these become nodes)
2. Draw arrows showing data flow (these become edges)
3. Mark any decision points where an LLM or human chooses the next step
4. Label each arrow with what data flows along it

**Expected outcome**: A visual graph with 4-8 nodes and clear data flow. Decision points help determine execution mode.

### Exercise 2: Build the YAML

**Instructions**: Create a file named `my_workflow.lattice.yaml`. Translate your sketch:

```yaml
name: my_workflow
version: "0.1.0"
lattice_type: pipeline  # or workflow, agent, context_graph
execution_mode: workflow  # or reasoning, hybrid
description: "One sentence describing your workflow"

nodes:
  - id: step_one
    type: process
    label: "First Step"
    description: "What this step does"

edges:
  - source: step_one
    target: step_two
    label: "data_output"
```

Fill in your nodes and edges from the sketch. Choose your lattice type based on:
- No decision points → `pipeline` + `workflow`
- All LLM decisions → `agent` + `reasoning`
- Mix of fixed steps and LLM decisions → `workflow` + `hybrid`

**Expected outcome**: A syntactically valid YAML file with 4-8 nodes and connecting edges.

### Exercise 3: Validate

**Instructions**: From the `what/lattices/tools/` directory:

```bash
pip install pyyaml
python lattice_validate.py ../my_workflow.lattice.yaml
```

If validation fails, read the error message. Common fixes:
- Missing required field → add it
- Unknown lattice_type → check the 6 valid types
- Edge references non-existent node → fix the node ID

Add a FAIR block:

```yaml
fair:
  license: MIT
  creators: ["Your Name"]
  keywords: ["your-domain", "workflow"]
```

Re-validate.

**Expected outcome**: `VALID` output from the validator with FAIR metadata complete.

### Exercise 4: Compose (Pairs)

**Instructions**: Partner with another participant. Combine your two lattices:

1. Identify a connection point — an output from one lattice that feeds into the other
2. Create seam edges connecting the two graphs
3. Use external composition (keep both lattices separate, linked by seam edges)

Reference: `what/lattices/examples/composed_therapeutics.lattice.yaml` shows a real composition of three sub-lattices.

**Expected outcome**: Understanding that lattices are composable — small graphs combine into larger workflows.

## Assessment / Feedback

**Exit questions**:

1. Could you explain the difference between a pipeline and an agent lattice?
2. Is your lattice valid against the schema?
3. What FAIR metadata did you add and why?

**Success signal**: Every participant leaves with a validated `.lattice.yaml` specific to their domain.

## Self-Reference

The [[concept_lattice_composition|Lattice Composition]] concept and the 15 examples in `what/lattices/examples/` were built during earlier phases of Operation Rosetta. This workshop uses them as exercise materials — participants study `hello_world.lattice.yaml` and `composed_therapeutics.lattice.yaml` to learn the same patterns the vault itself implements. The validation tool (`lattice_validate.py`) that participants run is the same tool this project uses to check its own lattice examples.

## Related

- [[workshop_build_your_first_vault|Build Your First Vault]] — prerequisite workshop
- [[workshop_facilitation_guide|Facilitation Guide]] — meta-guide for running any aDNA workshop
- [[concept_lattice_composition|Lattice Composition]] — the concept this workshop teaches
- [[concept_fair_metadata|FAIR Metadata]] — the metadata standard participants apply
- [[pattern_fair_envelope|FAIR Envelope]] — the pattern for FAIR-annotated objects
