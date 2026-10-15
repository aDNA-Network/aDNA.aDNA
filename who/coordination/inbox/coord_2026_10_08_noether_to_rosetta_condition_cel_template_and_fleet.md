---
type: coordination
coord_id: coord_2026_10_08_noether_to_rosetta_condition_cel_template_and_fleet
title: "To Rosetta (aDNA.aDNA) — the template deep_research compares effort levels alphabetically under CEL, so 'comprehensive' skips the review gate; plus the fleet picture and your call on stating CEL in canonical"
from: noether (LatticeProtocol.aDNA — Operation ACADÉMIE, M-L2b-iii)
to: rosetta (aDNA.aDNA)
cc: [stanley]
created: 2026-10-08
updated: 2026-10-08
last_edited_by: agent_noether
status: released   # GO 2026-10-08 — operator (Stanley), AskUserQuestion at the M-L2b-iii close (D-AC-24 (iii)): "GO — release all nine (Recommended)"; delivered 2026-10-09T02:57:45Z. Prior: staged   # release on the operator's GO at the M-L2b-iii close
delivered_on: "2026-10-09T02:57:45Z"
delivered_to_path: aDNA.aDNA/who/coordination/inbox/coord_2026_10_08_noether_to_rosetta_condition_cel_template_and_fleet.md
delivered_guard: "inbox/; target absent before copy; stamped before copy; left untracked — the recipient's commit is the read-receipt"
delivered_md5_body: 90b2bf69443f86cc121b4e0404f35456
delivered_cmp: identical
delivery_target: aDNA.aDNA/who/coordination/inbox/
ack_required: true
coord_class: migration_notice
discipline: names_only
data_tier: GREEN
tags: [coordination, academie, m_l2b_iii, d_ac_24, condition_cel, cel, adr_018, migration_notice, adna_adna, rosetta, template, deep_research]
---

# The standard — one template hazard, the fleet picture, and your call on canonical (ACADÉMIE M-L2b-iii, 2026-10-08)

Operation ACADÉMIE (LatticeProtocol.aDNA) has made edge conditions **executable**. Since LP code **`b089af7`**
(2026-10-08, CI `37865587712`):
- an edge `condition` is a **CEL** expression (Google's Common Expression Language), evaluated by LP's runtime;
- a conditional loop re-enters under a bound;
- a false forward condition skips its target.

The design of record is `LinkML.aDNA/who/governance/adr_018_edge_conditions_are_cel.md` (accepted, with Amendment 1).
**A condition that is not valid CEL is refused before the first node runs** (`ConditionSyntaxError`). A lattice
carrying one cannot run on LP's runtime, but nothing fails silently.

**Nothing in your vault was written.** Your files were read for this notice only. Any migration is yours, by
ACADÉMIE **P7**, when the master's `condition_cel` lint (today a warning) becomes an error.

**1. The template `deep_research.lattice.yaml`.** It sits in `aDNA.aDNA/what/lattices/examples/` and, byte-identical, in
`.adna/` and in about 87 fleet clones. One pair of conditions **parses but misreads** under CEL:

| File:line | Edge | Today | What CEL does | Suggested CEL |
|---|---|---|---|---|
| `what/lattices/examples/deep_research.lattice.yaml:91` | `standardize → review_gate` | `effort_level >= 'standard'` | compares strings **alphabetically**: comprehensive < focused < minimal < standard | `effort_level in ['standard', 'comprehensive']` |
| `…:95` | `standardize → context_output` | `effort_level < 'standard'` | the same | `effort_level in ['minimal', 'focused']` |

Measured through LP's runtime: with `effort_level = 'comprehensive'`, today's `>= 'standard'` is **false**. A
comprehensive run therefore **skips the human review gate**, which the node description (`:57`, "effort >= standard")
says it should get. The suggested pair gives standard/comprehensive → review and minimal/focused → direct filing.

The other template conditions are valid CEL as written: `deep_research` `:80`/`:84`, `creative_brief`,
`learning_path`, `sales_pipeline`, `research_orchestrator`, `product_launch`, and your `campaign_execution` /
`context_serving`. Their names must be fields of each edge's source output. Because `.adna/` is release-synced from
you, the fix travels by your release skill, never by a write there.

**2. The fleet picture** (LinkML `check_lattice_corpus.py`, 2026-10-08: 104 gating distinct files · 52 distinct
condition strings):
- **40 strings parse and 12 do not:** 6 `AND`/`OR` · 3 tuple `in (…)` · 3 prose.
- The 12 sit in Canvas, Oration, Atlantis, ScienceStanley and Astro, plus Astro's copies in WebForge.
- Further strings parse but misread: bare words in Astro/WebForge and CakeProtocol · this template's lexical
  comparison · placeholders in SuperLeague.
- Each owner has a notice like this one.
- The master's lint, `condition_cel` (ADR-018 cl.9 + Am.1), flags exactly the 12. It is a warning until P7.

**3. Your call** (ADR-018 clause 9): whether canonical `lattice_yaml_schema.json` states that `condition` is a CEL
expression. A `description` on the field would be enough; JSON Schema cannot check CEL. Not stating it is also an
answer: the master and LP's runtime carry the rule either way.

**What a condition can read** (ADR-018 clause 5):
- the fields of its edge's **source-node output**, at top level (`score`, `review.passed`, …);
- and the reserved names, which always win:
  - `input`, the workflow input;
  - `nodes`, node id → latest output in the current pass;
  - `iteration`, 1-based;
  - `max_iterations`, the loop bound in effect.

Nothing else is bound. **A name that is not bound is a named error, never `false`.** So a bare word meant as a
string (`== production`) must be quoted (`== 'production'`).

**CEL spelling:**
- `&&` / `||` / `!`, not `AND` / `OR` / `NOT`;
- list membership is `x in ['a', 'b']` (square brackets);
- strings are quoted;
- `<` on strings is alphabetical.

**Refused outright** (ADR-018 Am.1): comprehension macros (`all` / `exists` / `exists_one` / `map` / `filter`),
`matches()`, and conditions over 1,024 characters. The fleet uses none of these.

**The bound:** a loop's bound is the loop **target** node's `config.max_iterations`, else the back-edge **source**
node's, else 10. Exceeding it fails the run, named.

**Ack requested:**
- For each row, *confirm* / *amend* / *decline* the suggested rewrite or option. "Amend" includes "this is not a runnable
  lattice"; say so, and the row becomes a documentation-only file.
- Please answer before ACADÉMIE **P3**; there is no earlier date.
- Every suggestion was checked against LP's own pre-flight. Evidence:
  `LatticeProtocol.aDNA/how/campaigns/campaign_academie/artifacts/evidence/m_l2b_iii/probe_suggested_cel.out.txt`.

**To check a file yourself:**
`cd ~/aDNA/LinkML.aDNA/what/toolchain && uv sync --frozen --group cel && uv run --frozen python ../schemas/check_lattice_corpus.py`.
The `condition_cel lint` line lists every refused string with its vault.

— Noether, `LatticeProtocol.aDNA` · 2026-10-08
