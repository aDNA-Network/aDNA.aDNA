---
type: artifact
artifact_class: release_staging_snippet
campaign: campaign_v8_7_release
release: v8.7
rider: item_5_visual_inspection_doctrine
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
status: staged
tags: [staged, v8_7_release, visual_inspection, doctrine, de_linked]
---

# Item 5 (staged) — visual-inspection doctrine for `.adna/` (generic, policy-only, DE-LINKED)

> **Scope**: "option 1" (policy/doctrine only — NO harness code; the dev `scripts/visual_capture.mjs` +
> `viewports.json` are web-vault-specific and stay out). **DE-LINKED**: no `[[…]]` wikilinks, no fleet-vault
> names, no literal `aDNA.aDNA/scripts/…` paths, no incident references — safe for the public image.
> **Placement = DP2** (recommendation below). This is **image-curated** (the dev `CLAUDE.md` is Rosetta-specific
> and diverges from `.adna/CLAUDE.md`) → applied at P3 assembly.

## DP2 recommendation — option (a): a `.adna/CLAUDE.md` subsection

Add the block below as a new `### Visual inspection (headless-first)` subsection at the **end of the
`## Working with Content` section** of `.adna/CLAUDE.md`. Rationale: `.adna/what/doctrine/` does not exist (a
standalone file adds a new directory), the idea explicitly offers "a one-line pointer in the template CLAUDE.md"
as a governance-lean option-1 sub-choice, and a CLAUDE.md subsection is auto-loaded on every fork (guaranteed
inheritance). If the operator prefers **option (b)** at DP2 (a standalone `.adna/what/doctrine/doctrine_visual_inspection.md`),
the same body ships as that file with a `type: doctrine` frontmatter + a one-line CLAUDE.md pointer to it.

---

### Visual inspection (headless-first)

When an agent needs to **render and inspect a visual surface** — screenshot it, check it responsively, measure a11y/perf, read its console, or walk it as a user — reach for **headless, zero-setup tooling first, and never assume a visible or logged-in browser exists.** A visible browser (e.g. a Chrome extension) is absent in headless runs, CI, cron, fresh nodes, and most agent contexts, and needs per-user setup — so a review must never *depend* on it. If a flow can only be done with a visible browser, degrade gracefully to a headless capture or to data-truth (byte-compare + tests); a review that *stalls* because the browser isn't connected is a doctrine violation, not an environment problem.

Reach for the lowest tier that does the job:

| Tier | Tool | Use for |
|------|------|---------|
| **T0 — batch capture (DEFAULT)** | headless Playwright (a small capture script over routes × viewports × themes) | Screenshot every surface, produce a compact report; the standing default for review / inspection / evidence |
| **T1 — interactive headless** | Playwright MCP (`@playwright/mcp`) | Agentic navigate / click / type / resize when you must *interact* — no extension, no login |
| **T2 — visible / authenticated (ESCALATION ONLY)** | a visible-browser MCP (e.g. Chrome) | *Only* when a real visible or logged-in browser is genuinely required — e.g. a live recording to share, an authenticated session |

**Rules:** T0 is the default for any static inspection — it writes evidence to disk and returns a compact report, so the agent views only a curated subset of screenshots (the token-optimized path). Use T1 when you must interact, still headless. **T2 is escalation, never the assumed default** — naming a visible browser as *mandatory* or *primary* in a spec is a doctrine violation; when a task genuinely needs it, state the headless fallback in the same breath and degrade to T0 / data-truth if it is unavailable. Metrics are tool-agnostic: `axe-core` (a11y) and Lighthouse (perf / CWV) wire into T0. Playwright is the recommended engine; Puppeteer is a documented alternative. A web vault typically provides its own small headless-capture harness; this policy governs which tier an agent reaches for first, not a specific script.

---

## DE-LINK verification (v8.5 D-1 discipline)

Stripped from the dev `what/doctrine/doctrine_visual_inspection.md` (56 lines) when genericizing:
- **4 wikilinks** (all Rosetta-vault skills, would dangle): `[[skill_reference_inspection]]` · `[[skill_site_design_pipeline]]` · `[[skill_decadal_aar]]` · `[[skill_iii_cycle]]`.
- **Fleet-vault references**: Astro SO#3, WebForge, RemoteControl M0.1, III.aDNA module, Lab smoke, Operations.aDNA S62.
- **Incident references**: Operation Storyweave Run 1, Operations S62.
- **Literal dev paths**: `aDNA.aDNA/scripts/visual_capture.mjs`, `scripts/viewports.json`, specific viewport pixel table.
- **Sibling-doctrine list** (`doctrine_safe_mutations` etc. — not all in base).

The staged block above contains **zero** `[[…]]`, zero fleet-vault names, zero literal fleet paths — verified.
