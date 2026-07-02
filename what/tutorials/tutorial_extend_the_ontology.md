---
type: tutorial
created: 2026-04-14
updated: 2026-07-02
status: active
level: intermediate
prerequisites: [concept_ontology, concept_triad, pattern_base_extension, pattern_question_test]
estimated_time: "25 minutes"
dual_audience: true
last_edited_by: agent_rosetta
tags: [tutorial, intermediate, ontology, extension, entity_type]
---

# Extend the Ontology

## What You'll Build

A new entity type for your project — complete with a directory, AGENTS.md, template, and your first instance file. By the end, your vault speaks your domain's language.

## Prerequisites

- [[what/concepts/concept_ontology|Ontology]] — understand base vs. extension types
- [[what/concepts/concept_triad|The Triad]] — know which leg your entity goes under
- [[what/patterns/pattern_base_extension|Base/Extension]] — the rules for extending without breaking core
- [[what/patterns/pattern_question_test|Question Test]] — how to place the new type

## Steps

### Step 1: Identify the Need

You need a new entity type when existing types can't represent your domain knowledge. Ask: "Does one of the 16 base types — `context`, `decisions`, `modules`, `lattices`, `inventory`, `campaigns`, `missions`, `sessions`, `templates`, `skills`, `pipelines`, `backlog`, `governance`, `team`, `coordination`, or `identity` — cover what I need to represent?"

If no — you need an extension.

**Example**: A biotech lab needs to track experimental protocols. Protocols aren't context (they're not curated knowledge for agents), they're not templates (they're not reusable boilerplate), and they're not skills (they're not agent recipes). They're a domain-specific entity type: `protocol`.

### Step 2: Apply the Question Test

Ask: "Is a protocol about WHAT we know, HOW we work, or WHO is involved?"

A protocol documents knowledge about how to run an experiment. But its *primary purpose* is to capture knowledge — the procedure exists as reference material. That puts it under `what/`.

(If the protocol were an executable workflow an agent runs, it would be `how/`. The question test resolves ambiguity by focusing on primary purpose.)

### Step 3: Create the Directory

```bash
mkdir -p what/protocols
```

Extension types always live as a subdirectory under their triad leg. Never create a new top-level directory — the triad has exactly three legs.

### Step 4: Write the AGENTS.md

Every directory needs an AGENTS.md. Create `what/protocols/AGENTS.md`:

```markdown
---
type: directory_index
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [directory_index, protocol]
---

# what/protocols/ — Agent Guide

## What's Here

Experimental protocols for the lab. Each file documents one protocol
with steps, reagents, safety notes, and expected outcomes.

## Working Rules

- **Naming**: `protocol_{name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: protocol`, `created`, `updated`,
  `status`, `last_edited_by`, `tags`

## Load/Skip Decision

**Load when**: Running or reviewing experiments, creating new protocols.
**Skip when**: Operational work, context engineering, non-lab tasks.

**Token cost**: ~200 tokens (this AGENTS.md).
```

The load/skip decision is critical — it tells agents when this directory is relevant.

### Step 5: Create the Template

Add `how/templates/template_protocol.md`:

```markdown
---
type: protocol
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: draft
last_edited_by: agent_{username}
tags: [protocol]
---

# protocol_{name}

## Purpose

{What does this protocol accomplish?}

## Steps

1. {Step one}
2. {Step two}

## Expected Outcome

{What should the result look like?}
```

Templates enforce consistency. Every protocol file will have the same structure.

### Step 6: Create Your First Instance

Create `what/protocols/protocol_dna_extraction.md` using your template. Fill in real content. Set `status: active` when it's ready for use.

### Step 7: Validate

Check your extension against the [[what/patterns/pattern_base_extension|base/extension]] rules:

| Check | Pass? |
|-------|-------|
| New type is under a triad leg, not at root | |
| Directory has AGENTS.md with load/skip decision | |
| Template exists in `how/templates/` | |
| Frontmatter follows vault conventions (type, created, updated, status) | |
| Base types are unmodified | |

## What You Learned

- Extensions add alongside base types — never modify the core 16
- The [[what/patterns/pattern_question_test|question test]] determines which triad leg gets the extension
- Three artifacts per extension: directory, AGENTS.md, template
- The pattern is the same for any domain: biotech protocols, legal documents, customer personas

## Next Steps

- [[what/tutorials/tutorial_write_a_context_file|Write a Context File]] — create curated knowledge for your context library
- [[what/concepts/concept_context_optimization|Context Optimization]] — make your context files token-efficient
