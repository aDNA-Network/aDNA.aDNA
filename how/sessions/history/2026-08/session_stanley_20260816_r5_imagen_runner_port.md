---
type: session
session_id: session_stanley_20260816_r5_imagen_runner_port
created: 2026-08-16
updated: 2026-08-16
status: completed
tier: 2
persona: rosetta
last_edited_by: agent_rosetta
executor_tier: opus
campaign: campaign_rosetta_stone (R5 — imagen-4.0 retirement)
originated: Home.aDNA / Hestia fleet assessment 2026-08-16 (operator-ruled port)
deadline: 2026-08-17        # imagen-4.0-* family shuts down
declared_files:
  - how/campaigns/campaign_adna_serious_tool_readiness/runners/   # 8 files, ONLY
  - this session file
not_declared:
  - how/campaigns/campaign_haussmann/**        # 28 uncommitted HAUSSMANN files — DO NOT TOUCH, DO NOT STAGE
  - who/coordination/**                        # 7 uncommitted coord memos — likewise
tags: [session, rosetta_stone, r5, imagen, runner_port, deadline]
---

# Session — R5 runner port (predict → generate_content)

## Standing hazard for this session

The tree carries **45 uncommitted files** from the HAUSSMANN Gate C work (28 campaign files + coord
memos). **Zero overlap with `runners/`** — verified at dispatch. Every commit here is
**path-scoped to `runners/` only**; `git add -A` is forbidden (R9/SO-13'), and
`git diff --cached --name-only` is checked before each commit.

## Why

`imagen-4.0-*` shuts down **2026-08-17**. A Home.aDNA fleet assessment (2026-08-16) put the live break
surface at **11 sites / 4 vaults**; **8 are here** and are the largest single concentration. Home
(`f9d2efa`) and ContextCommons (`ef39f4c`) are already migrated. This vault was leased when the memo
was written (`Home.aDNA/who/coordination/coord_2026_08_16_hestia_to_rosetta_r5_imagen_runners.md`);
the lease has since cleared, so the work proceeds directly under ordinary lane discipline.

## The finding that shapes the work

**7 of the 8 call the retiring `:predict` API itself**, not merely a retiring model name. Repointing the
model string alone yields code that resolves a valid model and then calls it through a dead endpoint with
the wrong response parser. Each needs a real port.

The 7 are **structurally identical** — one `MODEL =` line, one `generate_images(` call, two
`response.generated_images` references, one `person_generation` param each.

## `person_generation` — RESOLVED, restraint preserved

The param carries the in-code comment *"no human figures per restraint"*. It is a deliberate content
restraint, so dropping it silently was not acceptable. Checked against the real SDK (`google.genai`
**2.5.0**, under `python3.13` — not the ambient `python3`, which lacks it):

```
GenerateImagesConfig.person_generation  : True   (where it is today)
GenerateContentConfig.person_generation : False
ImageConfig.person_generation           : True   <- it moves HERE
PersonGeneration enum                   : DONT_ALLOW | ALLOW_ADULT | ALLOW_ALL
```

Constructed and accepted: `types.ImageConfig(aspect_ratio="16:9", person_generation="dont_allow")`
nested in `GenerateContentConfig(response_modalities=["Image"], image_config=...)`.

**So the restraint carries over exactly, as a config field — no prompt-clause workaround needed.**

## Port pattern (applied 7×)

| From | To |
|---|---|
| `MODEL = "imagen-4.0-ultra-generate-001"` | `MODEL = "gemini-3-pro-image"` + derivation comment |
| `client.models.generate_images(model=…, prompt=…)` | `client.models.generate_content(model=…, contents=…)` |
| `types.GenerateImagesConfig(number_of_images=1, aspect_ratio=ASPECT, person_generation="dont_allow")` | `types.GenerateContentConfig(response_modalities=["Image"], image_config=types.ImageConfig(aspect_ratio=ASPECT, person_generation="dont_allow"))` |
| `if not response.generated_images: raise` | `_first_image_bytes(response) is None: raise` |
| `response.generated_images[0].image.image_bytes` | the same helper's return |

Successor derivation (`Home.aDNA/what/code/googleai/models.py` `SUNSET_SUCCESSORS`, verified by
`resolve()` this sitting): `imagen-4.0-ultra-generate-001` → `image.pro` → **`gemini-3-pro-image`**;
`imagen-4.0-fast-generate-001` → `image.lite` → `gemini-3.1-flash-lite-image`.

**Ids are inlined here rather than imported from Home's registry.** The registry's own rule is "do not
inline the literal at the call site" — right for library code. But these are one-shot campaign runners,
and a runtime dependency from a runner to another vault's package is exactly what broke `m355` when
`latlab` vanished at Galilei. Each inlined id carries its derivation in a comment.

## Log

1. Dispatch probe: lease-free, `runners/` clean, HEAD `28915e0`.
2. Resolved `person_generation` against the real SDK **before** editing anything (above).
3. Ported `e1_hero_helix_gen.py` by hand as the reference case; verified.
4. Wrote an anchored, indentation-preserving transformer for the remaining 6. **Ran it on copies
   first**; inspected output at both indentation extremes; only then applied it to the real files.
   The transformer refuses to write a file whose anchors are missing or whose result fails to
   re-parse.
5. Swept 3 argparse help strings the transformer missed (they said *"if Ultra"*, the rule matched
   *"when Ultra"*) plus one module docstring.
6. Fixed `m355` — see below.
7. Committed `9534691`, path-scoped.

### `m355` was worse than the memo said — and it is a July defect, not an August one

Its `sys.path.insert("~/aDNA/latlab")` + `from latlab.mcp.image.server import …` **cannot work**:
that symlink resolves to `Jupyter.aDNA/what/lab`, which contains **`adna_lab/`**, not `latlab/`.

**Reproduced:** `ModuleNotFoundError: No module named 'latlab.mcp'`.

So this runner has been broken at import **since the Galilei rename on 2026-07-09** — independent of
imagen entirely. The memo to Galileo hedged ("either resolves to an unmigrated copy or fails to
import"); with its own hardcoded path, the answer is definite: **it fails to import.** Repointed to
the real path + `adna_lab`; `adna_lab` now resolves (the remaining `structlog` failure is a runtime
dep absent from this node's interpreter, not a path defect).

Its two hardcoded model labels were **metadata only**. The success path now reports
`result.get("model")`; the **failure path reports the tier requested** rather than inventing a model
id for a call that never resolved one.

## SITREP

**Completed** — all 8 runners migrated (`9534691`). Fleet R5 position: **10 of 11 live sites done**
(Home `f9d2efa`, ContextCommons `ef39f4c`, these 8). **1 remains**: `Terminal.aDNA`'s
`BUDGET_MODEL["high"]`, one dict value, vault still leased, memo staged Home-side.

**Verification** — static only; **these call a paid API and none was executed**. All 8 AST-parse ·
zero live `generate_images`/`generated_images` · zero live `imagen-4.0` · `person_generation` present
in all 7 · `m355`'s import reproduced-broken then fixed and re-resolved.

**Blockers** — none.

**Files touched** — the 8 runners + this session file. **The 45 uncommitted HAUSSMANN files were not
staged and not touched**; verified before and after the commit.

**Next up** — Terminal's one-liner (owner-side) · then Chambellan **M-A3** (gitleaks + hook
conformance), which owns the CRITICAL F-SS-07 census finding.

## AAR (SO-9)

- **Worked** — resolving `person_generation` against the real SDK *before* editing. It had no
  `GenerateContentConfig` equivalent but *does* exist on `ImageConfig`, so a stated content restraint
  carried over exactly instead of being quietly dropped.
- **Didn't** — the transformer's help-string rule matched *"when Ultra"* and three files said
  *"if Ultra"*. Caught by the residual grep, not by the transform. Verify-after-transform earned its
  place.
- **Finding** — `m355` was broken in **July**, not tomorrow. The imagen deadline surfaced a
  five-week-old import defect that nothing else had noticed, because nothing runs these runners
  routinely. A dated migration is a decent excuse to re-read code nobody executes.
- **Change** — dry-run on copies before touching originals, and make the transformer refuse to emit
  anything that does not re-parse. Cheap, and it makes a scripted edit defensible.
- **Next lane must know** — the tier vocabulary (`ultra`/`pro`/`fast`) is unchanged everywhere, but
  `ultra` now resolves to `image.pro`/`gemini-3-pro-image`, and **cost rises 2.2× at that tier**
  ($0.06 → $0.134 per 1K image). Any batch budgeted against imagen-4.0 pricing will overrun.
