---
type: skill
skill_type: agent
created: 2026-04-13
updated: 2026-04-13
status: active
category: quality
trigger: "Before marking any content file objective as complete in Campaign Rosetta"
last_edited_by: agent_stanley
tags: [skill, quality, self-reference, rosetta]

requirements:
  tools: []
  context: ["Target content file"]
  permissions: ["read files"]
---

# Skill: Self-Reference Check

## Overview

Verifies that a content file cites at least one concrete example from the aDNA.aDNA vault itself, demonstrating the concept, pattern, or tutorial in action. The vault is self-referential by design — every explanation should point to the vault as a working example.

## Trigger

Run before marking any content file objective as complete in Campaign Rosetta. Can also be invoked manually on any content file.

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `file_path` | Yes | Path to the content file to check |

## Implementation

### Step 1: Read the File

Load the target file. Identify the file type from frontmatter.

### Step 2: Find Self-References

Scan for references to the aDNA.aDNA vault structure. Valid self-references include:

- **Directory references**: "Look at `what/concepts/` to see..." or "This vault's `CLAUDE.md` demonstrates..."
- **File references**: Wikilinks to governance files, AGENTS.md files, or other content files within this vault
- **Structural references**: "Notice how this file's own frontmatter includes..." or "The directory you're navigating right now is..."
- **Meta-references**: "This vault is itself an aDNA project, so..."

### Step 3: Evaluate Quality

A self-reference passes if:

- [ ] **Concrete**: Points to a specific file, directory, or structure (not vague "this vault")
- [ ] **Demonstrative**: Shows the concept in action, not just mentions the vault exists
- [ ] **Verifiable**: The reader could navigate to the referenced location and see the concept working

### Step 4: Report

```
## Self-Reference Check: {filename}

**Self-references found**: {count}
- {reference 1}: {what it demonstrates}
- {reference 2}: {what it demonstrates}

**Verdict**: PASS / NEEDS SELF-REFERENCE
```

If NEEDS SELF-REFERENCE, suggest where in the file a self-reference could naturally fit, and which vault structure would best demonstrate the concept.

## Exemptions

- **Comparison files** (`what/comparisons/`): Self-reference is encouraged but not mandatory — these files focus on external systems
- **Glossary entries** (`what/glossary/`): Self-reference is optional for entries under 300 tokens — link to concept files instead
