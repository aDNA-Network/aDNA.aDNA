---
type: session
session_id: "stanley_20260714T144733Z_next_model_recommendation_doctrine"
created: 2026-07-14
status: completed
tier: 2
mission: standalone (operator-requested doctrine amendment)
campaign: none
intent: "Author a proposed §2.7 'Next-mission handoff recommendation' into pattern_model_tiered_campaign_execution.md; refresh one stale §2.1 binding (Sonnet 4.6→5)"
executor_tier: opus   # class = judgment/authoring (planned tier fable); running at operator-set /model opus — recorded honestly per §2.6 rung 7 / §2.4
token_budget_estimated: 20
last_edited_by: agent_rosetta
tags: [session, model_tiering, executor_tier, doctrine_amendment, proposed]
---

# Session: Next-mission handoff recommendation (proposed doctrine amendment)

## Intent

Operator (2026-07-14) asked that at every mission close we tell them which model to run the next
mission on. Approved plan: `~/.claude/plans/please-read-the-claude-md-mutable-manatee.md` (scope =
memory + proposed doctrine). This session executes **Deliverable 2** only: author a `proposed` §2.7 into
the canonical `what/patterns/pattern_model_tiered_campaign_execution.md` (Deliverable 1, the feedback
memory, was done outside this vault under `~/.claude/.../memory/`).

## Scope declaration

Writes in this vault (single-writer; no active peer session at open):
- `what/patterns/pattern_model_tiered_campaign_execution.md` — add §2.7 (proposed + 4-field ratification
  block per §7.7); refresh §2.1 "Sonnet 4.6"→"Sonnet 5"; bump `updated`.
- this session file.

NOT touched: the ~50 untracked parallel-session artifacts (storyweave/visual_capture — other sessions'
work) and the local-unpushed v8.7/v8.8 gate commits. **No git pull** (repo carries local-unpushed commits
+ parallel untracked work; operator present and manages the v8.8 gate; my change is local-commit-only).
**No push** — outward action, operator-gated (repo is GitHub-public).

## Running log

- Session opened; `how/sessions/active/` empty at open (no lease conflict); target file clean at HEAD.
- **DONE** `f096f04` — §2.7 authored `proposed` + §2.1 binding refreshed + frontmatter `updated`/comment-trail; diff reviewed; frontmatter parses; ratification block present. Explicit-path commit, **not pushed**.
- Deliverable 1 (feedback memory `feedback_next_model_recommendation.md` + MEMORY.md index) landed outside this vault, before this session.

## AAR

- **Worked**: mapped the operator's ask onto the *existing* graduated model-tiering doctrine — one isolated `proposed` subsection, zero new machinery.
- **Didn't**: repo carries local-unpushed v8.7/v8.8 gate commits + ~50 untracked parallel-session artifacts → skipped the session-start `git pull` (merge risk); noted, not resolved here.
- **Finding**: §2.4 recorded tier *backward* (plan + actual) but had no *forward* handoff surface; that gap is exactly what the operator named.
- **Change**: adopt the `▶ Next mission → /model <tier>` close-out line fleet-wide (now doctrine-proposed + a feedback memory guaranteeing the habit).
- **Follow-up**: operator ratifies §2.7 (drop the `proposed` marker on sign-off); optional echo of the one-liner into Home.aDNA + aDNA.aDNA CLAUDE.md "Model-Tiered Execution" sections.

## Next-mission handoff (dogfooding §2.7)

No next mission is carded yet — the operator opened this as "get ready for a work session," so the recommendation is conditional on what they direct next:

▶ **Next → depends on the work you name:**
- scoping / planning / reviewing / ratifying §2.7 → `executor_tier: fable` → **`/model fable`** (strategy/judgment)
- a build / implementation / integration mission → `executor_tier: opus` → **`/model opus`** (builder — where this session already is)
- a provably-mechanical sweep (counts, format fixes) → `executor_tier: sonnet` → **`/model sonnet`** (explicit opt-down)

*(fable is operator-summon only — recommended, never auto-spawned.)*

