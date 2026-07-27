---
type: doctrine
created: 2026-07-07
updated: 2026-07-27   # + §2 T1 "already configured" claim CORRECTED (was false on this node) + §3.1 authenticated-surface T0 + §5 vault bindings (Hypnos / PercySleep B3 fallout)
status: active
last_edited_by: agent_hypnos
tags: [doctrine, visual_inspection, browser_automation, playwright, headless, screenshots]
---

# Doctrine — Visual Inspection (workspace-canonical)

> **Status:** active · operator-directed 2026-07-07 (Operation Storyweave Run-1 fallout). Sibling to `doctrine_safe_mutations.md` · `doctrine_credential_handling.md` · `doctrine_secret_scanning.md` · `doctrine_key_rotation.md`. **Inherited by reference across all vaults** that render or inspect a visual surface (sites, dashboards, ISS gates, Obsidian/Canvas/ComfyUI outputs). **Motivating cases:** Operation Storyweave Run 1 (Chrome MCP extension not connected → the "mandatory" walkthrough was unblocked only by a headless-Playwright fallback) + Operations.aDNA **S62** (Chrome MCP env-blocked → fell back to byte-identical render + unit tests).

**Scope:** any time an agent needs to *render and inspect* a visual surface — screenshot it, check it responsively, measure a11y/perf, read its console, or walk it as a user. Governs **which tool the agent reaches for first**. It does **not** change ISS-gate *presentation* (opening a decision surface for a human — that stays `osascript` + native browser; see `skill_open_iss`).

## §1 — The principle: headless-first, never assume a browser

**Default to headless, zero-user-setup tooling.** A visible, logged-in browser (the Chrome extension behind `claude-in-chrome`) is **not** guaranteed to exist — it is absent in headless runs, CI, cron, fresh nodes, sandboxes, and most agent contexts, and it requires per-user setup (extension install + claude.ai login). **Never make a review *depend* on it.** If a flow can only be done with a visible browser, it must degrade gracefully to a headless capture or to data-truth (the Operations S62 rule) — a review that *stalls* because Chrome isn't connected is a doctrine violation, not an environment problem.

**Playwright is the fleet standard** (already de-facto: Astro SO#3, WebForge's quality gates, RemoteControl M0.1 [Playwright #1 of 11], Lab smoke; `@playwright/test` + `@axe-core/playwright` installed, chromium cached). **Puppeteer** is a documented alternative where Playwright is unavailable — not currently used in the fleet.

## §2 — The tier ladder (reach for the lowest tier that does the job)

| Tier | Tool | Use for | Setup |
|------|------|---------|-------|
| **T0 — batch capture (DEFAULT)** | `scripts/visual_capture.mjs` (headless Playwright) | Screenshot every surface × viewport × theme; produce a compact report; the standing default for review/inspection/evidence | none (node + Playwright, already present) |
| **T1 — interactive headless** | `@playwright/mcp` | Agentic navigate / click / type / resize / screenshot when you must *interact* or explore | **verify it is enabled** — see the T1 note below; **no extension, no login** |
| **T2 — visible/authenticated (ESCALATION ONLY)** | `claude-in-chrome` (Chrome MCP) | *Only* when a real visible or logged-in browser is genuinely required — a live GIF of real interaction to share with the operator, an authenticated session | extension + claude.ai login (per-user) |

**Rules:**
1. **T0 is the default.** Reach for it first for any static inspection. It writes evidence to disk and returns a compact JSON report so the agent **views only a curated subset** of screenshots — this is the token-optimized path (batch capture beats interactive click-per-screenshot).
2. **T1 for interaction, still headless.** If you need to click through a flow, use the Playwright MCP — it needs no extension and no login. Prefer it over T2 for every interactive need except the two below.
3. **T2 is escalation, never the assumed default.** Naming Chrome MCP as *mandatory* or *primary* in a spec is a doctrine violation. When a task genuinely needs it, **state the headless fallback in the same breath** and degrade to T0/data-truth if it's unavailable.
4. **Metrics are tool-agnostic.** `axe-core` (a11y) and Lighthouse (perf/BP/SEO/CWV) wire into T0.

> **T1 note — verify, don't assume (corrected 2026-07-27).** This table previously read *"already
> configured / MCP server pre-configured"*. That was **false on at least one node** and is a trap: a
> reader who believes T1 is live, finds it isn't, and has no T0 for their surface will fall through to
> T2 — and stall when T2 is also unavailable. That is precisely the failure this doctrine exists to
> prevent, and it happened again on 2026-07-27 (PercySleep B3).
> **Check before relying on it:** the `mcp__playwright__*` tools must resolve. If they don't, add to
> `mcpServers` in `~/.claude.json`:
> `"playwright": {"command": "npx", "args": ["-y", "@playwright/mcp@0.0.78"]}` — pin the version so the
> inspection tier can't shift underfoot. **MCP servers connect at session start, so a newly-added
> server is not live until the session restarts.** If you added it mid-session, say so plainly rather
> than reporting the tier as available.

## §3 — The canonical harness + viewports

- **`aDNA.aDNA/scripts/visual_capture.mjs`** — the reusable T0 harness. Args: `--base <url>` · `--routes </a,/b>` · `--viewports <names>` · `--themes dark,light` · `--out <dir>` · `--axe` · `--report <path>`. Resolves Playwright portably (checks `site/node_modules`) so any web vault runs it without a copy-into-`site/` hack. Output: full-page PNGs (`<surface>__<viewport>__<theme>.png`) + `capture_report.json` (title/desc/h1/h2count/bodyLen/height/console-errors/loadMs).
- **Canonical viewports** (`aDNA.aDNA/scripts/viewports.json`): mobile **320** / mobile-lg **375** / tablet **768** / laptop **900**(h) / desktop **1024** / wide **1440**. Themes set via `localStorage.theme` + `colorScheme`.
- **Target live or local:** point `--base` at the deployed URL (when live == committed) or a local `astro preview`. Both render identically for a static site.

### §3.1 — Authenticated surfaces need a vault-local T0 *(added 2026-07-27)*

`visual_capture.mjs` is deliberately login-free (*"Zero Chrome extension, zero login"* — its own header).
It therefore **cannot reach a cookie-authenticated surface**: a clinician dashboard, an admin console, a
running twin. Discovering that mid-review is how an agent ends up reaching for T2 and stalling.

**Rule:** a vault owning an authenticated surface **ships its own T0 harness** that establishes a
session first, then captures and asserts. It stays a T0 (headless, zero-setup, evidence-to-disk); only
the auth step is vault-specific. Requirements:

- Credentials from the vault's gitignored `.env` or env vars, **never** committed
  (`doctrine_credential_handling.md`); a seeded dev-throwaway fallback is acceptable **only** where that
  same pair is already committed in the vault's own bring-up scripts.
- Emit the T0 output contract — `<surface>__<viewport>__<theme>.png` + `capture_report.json` — so
  evidence reads uniformly across vaults.
- **Read-only on the surface**: navigate, click, screenshot. Never mutate under inspection.
- **Prove it can fail.** Ship a deliberate red path (e.g. `--expect-fail-demo`) and confirm it exits
  non-zero. A green that cannot go red is not evidence.

**Reference implementations:** `PercySleep.aDNA/what/percysleep_ops/local/inspect_twin.py` (authenticated
SPA + assertions + red-check) · `Spacemacs.aDNA/how/standard/runbooks/visual_inspection.md` (vault-local
localization of this doctrine).

## §4 — Relationship to III + RemoteControl

- **III.aDNA** owns the *"visual" Inspect modality* (`module_iii_inspect_visual.md`) and stays **framework-agnostic**; this doctrine is the **recommended default tool** that modality points to, not a framework requirement.
- **RemoteControl.aDNA** is the eventual home of the interactive/screen-vision tier; its M0.1 research already ranks Playwright #1 with the Computer-Use SDK as a vision-grounded escape hatch — the T1/T2 rungs here.

## §5 — Consumers (cite, don't re-specify)

Design/review skills and mission specs **cite this doctrine** rather than hard-coding a tool: `skill_reference_inspection` · `skill_site_design_pipeline` · `skill_decadal_aar` · `skill_iii_cycle` · any `mission_*` doing a visual review. A future tool swap updates this one file + the harness, not every consumer.

**Vault bindings** (a doctrine nobody inherits does not bind): `PercySleep.aDNA` SO#13 + its
`### Visual inspection` block + campaign SO#11 (bound 2026-07-27) · `Astro.aDNA` SO#3 ·
`Spacemacs.aDNA` runbook + `adr_075`. **If your vault renders or inspects a visual surface and its
`CLAUDE.md` does not cite this file, that is the gap** — PercySleep's B3 session stalled on an
unavailable Chrome extension precisely because the vault had never inherited this doctrine.

## Related
- `scripts/visual_capture.mjs` · `scripts/viewports.json` — the T0 harness
- [[skill_reference_inspection]] · [[skill_site_design_pipeline]] · [[skill_decadal_aar]] · [[skill_iii_cycle]] — consumers
- `III.aDNA/what/modules/module_iii_inspect_visual.md` — the visual Inspect modality (framework-agnostic)
- `Astro.aDNA` SO#3 (Playwright-first) · `WebForge.aDNA/how/skills/skill_quality_validation.md` — reference harnesses
- `RemoteControl.aDNA` — eventual interactive/screen-vision home
