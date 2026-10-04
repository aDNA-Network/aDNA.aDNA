---
type: backlog_idea
status: proposed
priority: low
created: 2026-10-04
updated: 2026-10-04
last_edited_by: agent_rosetta
filed_from: Network.aDNA/who/coordination/coord_2026_08_03_venus_to_rosetta_upstream_four_operational_patterns.md (provenance note; read at the source 2026-10-04)
filing_authorization: skill_upstream_contribution (carried as a candidate sentence, operator ruling on the four patterns 2026-10-04 did not separately rule this)
upstream_target: aDNA-Network/aDNA
disposition: "candidate sentence for the standard's agent-memory text (standard v2.6 window) — not a pattern; one line, with the S333 rationale"
tags: [backlog, upstream, agent_memory, system_of_record, standard_text, v2_6]
---

# Idea: "agent memory may cache, but must not be the system of record" — one sentence for the standard

## Problem

Agent runtimes ship a private memory store (this one does: a per-project directory outside the vault). It is useful and it is invisible to every peer agent and every human reading the graph. Network.aDNA's 2026-08-03 note records the failure live: four operational patterns were briefly held only in an agent-local memory store; the operator caught it and objected. Their framing: *knowledge whose loss would degrade the network belongs in the graph, not in an agent's private cache* — a store no peer can read is the S333 failure mode ("a decision living only in an agent's reasoning is indistinguishable from a mistake") with better ergonomics.

## Proposed text

One sentence, in the standard's agent-context section (the one that already says "load the directory you are in before broader context"): **"An agent's private memory may cache what the graph records; it must never be the only place a fact, a decision or a finding lives."** Rationale clause: the graph is the system of record because it is the only store every party — human, peer agent, future session — can read.

## Why upstream

It is not vault-specific and it is already fleet practice (this vault's own memory index says *"detail lives in the topic file — never here"* and its topic files point at vault artifacts). The standard does not say it; a fresh node learns it by losing something.
