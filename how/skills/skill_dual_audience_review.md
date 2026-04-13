---
type: skill
skill_type: agent
created: 2026-04-13
updated: 2026-04-13
status: active
category: quality
trigger: "Before marking any content file objective as complete in Campaign Rosetta"
last_edited_by: agent_stanley
tags: [skill, quality, dual-audience, rosetta]

requirements:
  tools: []
  context: ["Target content file"]
  permissions: ["read files"]
---

# Skill: Dual Audience Review

## Overview

Reviews a content file against the dual-audience test: is it legible to both a developer seeking technical integration guidance AND a non-developer seeking to understand what aDNA is? Files that fail either audience are not complete.

## Trigger

Run before marking any content file objective as complete in Campaign Rosetta. Can also be invoked manually on any content file.

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `file_path` | Yes | Path to the content file to review |

## Implementation

### Step 1: Read the File

Load the target file completely. Identify the file type from frontmatter (`type` field).

### Step 2: Developer Audience Check

Evaluate whether a developer building with aDNA would find this file useful:

- [ ] **Technical precision**: Are claims spec-accurate? Are section references provided for normative assertions?
- [ ] **Actionable**: Could a developer use this information to make a technical decision or implement something?
- [ ] **Structured for scanning**: Can a developer find the technical detail quickly without reading the full file?
- [ ] **Correct terminology**: Are aDNA terms used consistently with the spec?

### Step 3: Non-Developer Audience Check

Evaluate whether a non-developer exploring aDNA would understand this file:

- [ ] **Plain-language opening**: Do the first 1-3 sentences avoid jargon? Could a 14-year-old follow them?
- [ ] **Mental model provided**: Is there a metaphor, analogy, or spatial model that makes the concept intuitive?
- [ ] **No jargon without explanation**: Is every technical term either explained inline or linked to a glossary entry?
- [ ] **Progressive disclosure**: Does the file offer a simple understanding first, with depth available on demand?

### Step 4: Report

Report results as PASS or FAIL for each audience, with specific issues:

```
## Dual Audience Review: {filename}

**Developer audience**: PASS / FAIL
- {specific issues or strengths}

**Non-developer audience**: PASS / FAIL
- {specific issues or strengths}

**Verdict**: PASS / NEEDS REVISION
```

If NEEDS REVISION, list specific changes required. Do not rewrite the file — report findings for the author to address.

## Error Handling

| Error | Resolution |
|-------|------------|
| File has no frontmatter | Flag as structural issue — file may not be a content file |
| File is a template | Skip — templates are not content files |
| File is too short (<100 words) | Flag as potentially incomplete |
