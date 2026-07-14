---
type: documentation
created: 2026-07-13
updated: 2026-07-13
status: active
last_edited_by: agent_rosetta
tags: [doctrine, visual_inspection, headless, playwright, accessibility]
---

# Doctrine — Visual Inspection (headless-first)

> Reference companion to `CLAUDE.md` → Working with Content. The one-line rule stays inline in `CLAUDE.md`; the full
> tier ladder + rules live here (extracted v8.8).

When an agent needs to **render and inspect a visual surface** — screenshot it, check it responsively, measure
a11y/perf, read its console, or walk it as a user — reach for **headless, zero-setup tooling first, and never assume a
visible or logged-in browser exists.** A visible browser (e.g. a Chrome extension) is absent in headless runs, CI,
cron, fresh nodes, and most agent contexts, and needs per-user setup — so a review must never *depend* on it. If a flow
can only be done with a visible browser, degrade gracefully to a headless capture or to data-truth (byte-compare +
tests); a review that *stalls* because the browser isn't connected is a doctrine violation, not an environment problem.

Reach for the lowest tier that does the job:

| Tier | Tool | Use for |
|------|------|---------|
| **T0 — batch capture (DEFAULT)** | headless Playwright (a small capture script over routes × viewports × themes) | Screenshot every surface, produce a compact report; the standing default for review / inspection / evidence |
| **T1 — interactive headless** | Playwright MCP (`@playwright/mcp`) | Agentic navigate / click / type / resize when you must *interact* — no extension, no login |
| **T2 — visible / authenticated (ESCALATION ONLY)** | a visible-browser MCP (e.g. Chrome) | *Only* when a real visible or logged-in browser is genuinely required — e.g. a live recording to share, an authenticated session |

**Rules:** T0 is the default for any static inspection — it writes evidence to disk and returns a compact report, so
the agent views only a curated subset of screenshots (the token-optimized path). Use T1 when you must interact, still
headless. **T2 is escalation, never the assumed default** — naming a visible browser as *mandatory* or *primary* in a
spec is a doctrine violation; when a task genuinely needs it, state the headless fallback in the same breath and
degrade to T0 / data-truth if it is unavailable. Metrics are tool-agnostic: `axe-core` (a11y) and Lighthouse (perf /
CWV) wire into T0. Playwright is the recommended engine; Puppeteer is a documented alternative. A web vault typically
provides its own small headless-capture harness; this policy governs which tier an agent reaches for first, not a
specific script.
