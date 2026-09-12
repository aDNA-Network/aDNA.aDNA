---
type: session
created: 2026-09-12
updated: 2026-09-12
last_edited_by: agent_rosetta
tags: [session, haussmann, claim_register, docs_corpus, sweep, wilhelm_embargo]
session_id: session_stanley_20260912_050048_haussmann_docs_sweep
user: stanley
started: 2026-09-12T05:00:48Z
status: active
tier: 2
intent: "Run the docs-corpus claim sweep §26.4 named as a successor item (229 built pages never read against the register), repair in BOTH trees, register at §27; build the Wilhelm attribution clearance predicate default-inert; refresh the operator queue for two rows that went stale within hours of being written."
executor_tier: opus
campaign: campaign_haussmann
mission: none — operator-ruled increment (course_deploy / R-97 precedent)
token_budget_estimated: "~180–280 kT"
token_budget_actual: ""
---

# Session — the docs corpus, read against the register for the first time

## Derived at the open (never carried)

| Fact | Value | How |
|---|---|---|
| `main` CI (convention 19) | ✅ **success** at HEAD | `gh run list --workflow=gates.yml --branch main -L 5` → run **`34638817591`**, 7m24s, on `d6ae1b6` |
| HEAD | `d6ae1b6` | `git log --oneline -1` |
| Unpushed | **0** | `git log origin/main..HEAD` empty |
| Prod serving | `eda4cbf` | STATE deploy_record 2026-09-11T19:23:02Z — ⚠ **to be re-probed at `/.well-known/adna-build.json` before any claim about live** |
| `evidence/p5_1/` | **ABSENT** | `ls` → no such directory ⇒ **deploy hold NOT engaged**; supersession condition: the moment any artifact exists there, this is void |
| Docs source files | **72** | `find site/src/content/docs -type f \( -name "*.md" -o -name "*.mdx" \)` |
| Twins in `dist/` | **226** | `find site/dist -name "*.md"` — ⚠ not the same predicate as the build's page count; both recorded rather than reconciled by assumption |
| ADR queue | **53 accepted · 1 amended · 0 proposed** | every `status:` line in `what/decisions/adr_*.md` (54 files; `adr_index.md` excluded) |

⚠ **THE CLOCK, and it is the GR-4 finding in the other direction.** `date` returns **2026-09-11 22:00 PDT**;
UTC is **2026-09-12T05:00:48Z**. Every session file in `history/` is UTC-stamped and the harness reports the
*local* date. A local stamp would have filed this session as `20260911`, **sorting it among five sessions that
already happened today** and dating it a day before its own commits. GR-4's open caught the same seam with the
polarity reversed (local *ahead* of the file convention). ⇒ *a timestamp is a measurement and it has a zone the
way a count has a command.*

## Scope declaration (Tier-2)

**Files this session declares.** `evidence/claims/claim_register.md` · `site/src/content/docs/**` ·
`how/publishing/*.md` · `site/src/data/subnetworks.json` · `site/src/pages/commons.astro` ·
`site/src/pages/about.astro` · `artifacts/operator_queue_reconciled_20260911.md` ·
new `artifacts/docs_sweep/`.

**Conflict scan.** `how/sessions/active/` held **one tracked file besides `.gitkeep`** at the open —
`session_stanley_20260911_110421_haussmann_queue_reconcile.md`, `status: active`, **and it is on
`origin/main`**. Re-probed: it is **not a live peer**; the completed copy sits in `history/2026-09/` and the
close cascade simply never staged the deletion of the active one. Rider C repairs it.
⇒ ***a lease nobody is holding, published to the remote*** — GR-4 O1's finding one altitude up, where any
checkout that pulls materialises it.

## Log

- **05:00Z** — session file written **at the open** (the deviation Increment 2 recorded: *a lease that is not
  written down is not a lease*). Convention 19 run. Scope derived.
