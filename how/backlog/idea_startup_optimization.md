---
type: backlog_idea
status: deferred
priority: low
created: 2026-04-04
last_edited_by: agent_rosetta
tags: [backlog, performance, agent-efficiency]
updated: 2026-07-02
deferred_owner: "Rosetta"
deferred_trigger: "post-launch efficiency pass (fold into a broader token pass; STATE.md cold-start cost now acute)"
---

# Idea: Startup Sequence Optimization

## Problem
Agent cold-start loads ~5K tokens across CLAUDE.md + MANIFEST.md + STATE.md with ~30% overlap (base ontology table duplicated, triad description repeated). 9 filesystem operations before any user work begins.

## Proposed Solution
Consolidate CLAUDE.md/MANIFEST.md overlap. Merge first-run detection into CLAUDE.md frontmatter. Cache first-run results. Target: 1 fewer file read, ~400-900 token reduction.

## Origin
campaign_adna_polish pre-merge efficiency audit — startup sequence redundancy analysis.


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: Rosetta. Trigger: post-launch efficiency pass (fold into a broader token pass; STATE.md cold-start cost now acute). Ratified at Champollion G0 (D2).

## Disposition — Refit M5 vNext triage (2026-07-24) · **CONFIRM-DEFERRED**

Reviewed in the light sweep; **stays `deferred`** — session-startup sequence optimization for this vault; trigger: a context-budget pass on the startup ladder. Owner: Rosetta. See [[vnext_roadmap]] §Deferred-with-trigger.
