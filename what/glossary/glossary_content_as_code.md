---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Content-as-Code"
spec_section: "§14.1"
see_also: [session, template, skill]
last_edited_by: agent_stanley
tags: [glossary, operations, pipelines]
---

# Content-as-Code

## Plain-Language Definition

Content-as-code is a workflow pattern where a file's *location* tells you its *status*. Moving a file from an `inbox/` folder to a `processing/` folder means someone picked it up. Moving it to `done/` means it's finished. No status field to update — the folder *is* the state.

## Technical Definition

A universal paradigm for folder-based workflows where a file's directory location represents its processing state. Moving a file between stage directories advances it through the workflow. Each stage directory contains an [[what/glossary/glossary_agents_md|AGENTS.md]] defining acceptance criteria and processing instructions. Pipelines live in `how/pipelines/{pipeline_name}/`. (aDNA Standard §14.1)

## Usage Examples

- This vault's `how/pipelines/prd_rfc/` directory uses content-as-code: research notes flow from `inbox/` through `processing/` to `review/`, with each folder's AGENTS.md defining what happens at that stage.
- The session lifecycle is itself a content-as-code pattern: session files move from `how/sessions/active/` to `how/sessions/history/YYYY-MM/` on completion.

## See Also

- [[what/patterns/pattern_content_as_code|Content-as-Code (pattern)]]
- [[what/glossary/glossary_session|Session]]
- [[what/glossary/glossary_agents_md|AGENTS.md]]
