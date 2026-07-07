---
type: idea
created: 2026-07-07
updated: 2026-07-07
status: proposed
last_edited_by: agent_rosetta
upstream_target: ".adna template — next release (v8.7)"
tags: [idea, upstream, visual_inspection, doctrine, playwright, v8_7, template_release]
---

# Upstream — visual-inspection doctrine → `.adna` template (v8.7)

**What.** Ship the new **[[doctrine_visual_inspection]]** (headless Playwright = the fleet default; 3-tier ladder T0 harness / T1 `@playwright/mcp` / T2 Chrome-escalation; "never assume Chrome") to the base template `.adna/` so **new vaults inherit the default** at fork time. Today the template (`.adna/CLAUDE.md`) has **zero** browser/visual-tooling references — new vaults inherit no guidance, so a fresh node's first agent defaults to whatever it reaches for (historically Chrome MCP, which needs per-user setup).

**Why.** Authored 2026-07-07 (operator-directed) after Operation Storyweave Run 1 hit a disconnected Chrome MCP and the fleet had already been bitten once (Operations.aDNA S62). The fleet now practices Playwright-first everywhere (Astro SO#3, WebForge gates, III visual modality, RemoteControl M0.1) + this vault's doctrine + harness — but the template doesn't teach it. Codifying it upstream closes the loop for every future vault.

**Scope options (release owner decides at the gate):**
1. **Doctrine only (min):** add a short `.adna/.../doctrine_visual_inspection.md` (or a one-line pointer in the template CLAUDE.md's content/tooling notes) — policy inheritance, no code. Fits the template's "governance-only" character.
2. **Doctrine + harness (fuller):** also ship `scripts/visual_capture.mjs` + `scripts/viewports.json` in the template so web vaults get the T0 harness out of the box. (Note: the template has no `site/`; the harness's portable resolver already degrades gracefully when Playwright is absent.)

**Recommendation:** ship **option 1** as the default (policy is the universal part; the harness is web-vault-specific and can be seeded where a `site/` exists). Reconcile the wording so the template stays governance-lean.

**How.** Folds into the next `skill_template_release` (v8.7 queue) alongside the other deferred v8.7 items (2 Hestia addenda · image `how/templates/AGENTS.md` incompleteness · stale repo-names example in `skill_git_remote_setup`). Governance bump 8.6→8.7; standard version unaffected (docs/tooling only).

**Provenance.** Canonical doctrine + harness landed in `ad78d92` (this vault); fleet cross-links in III/Astro/WebForge/RemoteControl (+ Operations). Related: [[doctrine_visual_inspection]] · `scripts/visual_capture.mjs`.
