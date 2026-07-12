---
type: design_guidance
created: 2026-07-11
updated: 2026-07-11
status: candidate          # candidate input to the P5 re-plan — NOT ratified doctrine
last_edited_by: agent_rosetta
campaign: campaign_storyweave
mission: tbd_p5_replan
tags: [design-guidance, onboarding, install, demo-as-proof, storyweave, p5, candidate]
---

# Onboarding / install-UX — candidate design guidance for P5

Synthesized from [[_reference_set]] (Hermes lead exemplar, headless-captured 2026-07-11) +
[[front_page_doctrine]]'s unbuilt "one demo" pattern, against the measured adna.network gap. **These
are candidate rules for the Storyweave P5 re-plan to weigh + ratify — not ratified doctrine.** Every
rule carries provenance + the guardrails it must respect. Priority order reflects what the operator
surfaced (R1 + R2 lead).

### R1 — Demo-as-proof: a real screencast of the agent working *(priority)*
- **Provenance:** Hermes leads with a large "HERMES DESKTOP — BETA PREVIEW" panel showing the agent
  actually drafting release notes → committing → opening a PR (the operator's "video of usage";
  headless capture `hermes_capture/home__desktop__dark.png`). [[front_page_doctrine]] "one demo."
- **Gap:** adna.network has **zero** video/GIF — only static ASCII terminal mocks (`home.ts`).
- **Build:** a **~30–60s screencast/GIF** — *clone → `claude` → the agent orients itself in a vault
  and does one real task* (e.g. answers "what's the state of this project?" from `STATE.md`). Home +
  `/get-started`.
- **Guardrails (non-negotiable):** hold the **CWV budget** (`/` is Perf 1.00 / LCP 489ms — lazy-load,
  `poster`, **no autoplay-with-sound**, prefer an optimized GIF/`<video muted playsinline>` or an
  `asciinema`-style lightweight cast); **no-JS + a11y baseline** (captions/controls; the existing
  ASCII mock is the honest `poster`/fallback); **radical-honesty register** — a **real recording**,
  never a staged mock (the Movement-Skeptic gates this).

### R2 — Hero-level install prominence *(priority)*
- **Provenance:** Hermes puts "Install via terminal" `curl … | bash` + a copy field **in the hero**,
  not buried.
- **Gap:** adna's one-liner lives **only in `/get-started`**; the home hero has no install path.
- **Build:** surface the **single-sourced** `install_truth.json` one-liner
  (`git clone …/aDNA.git ~/aDNA && cd ~/aDNA && claude`) with a **copy-button** in/near the home hero
  — reuse the `TryInClaudeCode.astro` copy pattern. **Never hardcode** the command (gate-12 install-
  truth); keep the existing `Get Started` secondary CTA as the fuller path.

### R3 — License-forward trust in the hero
- **Provenance:** Hermes hero eyebrow "OPEN SOURCE • MIT LICENSE" earns trust in the first second.
- **Gap:** adna's MIT is footer-only; the hero doesn't claim openness up front.
- **Build:** an **"Open standard · MIT"** eyebrow/badge in the home hero, **single-sourced** from
  `standard.ts` `STANDARD_LICENSE` (drift-proof, like the `Standard v2.5` stamp shipped in M4.2).

### R4 — Feature-imagery pairing where it scans faster than prose/ASCII
- **Provenance:** Hermes's 6 numbered features each pair a distinctive duotone image + a 2–3 line
  descriptor — fast to scan.
- **Gap/nuance:** adna's "How it Works" uses ASCII mocks. **Keep ASCII where a terminal IS the honest
  surface** (don't over-image); pair a **real mark/screenshot** (per `visual-identity-v2`) only where
  a visual genuinely out-scans the text.

### R5 — "Pick your path" clarity (adapted, low priority)
- **Provenance:** Hermes's Mac/Windows/Linux download cards.
- **Adaptation:** aDNA is **clone-and-run**, not a desktop app → **no download cards**. The honest
  analog is a one-line prereq note ("works on macOS/Linux/Windows with git + Claude Code"), not a
  platform grid.

---

## What this means for the P5 build
- **R1 + R2 are the operator-surfaced priorities** — they most likely lead a P5 onboarding mission
  (a "demo-as-proof + hero install" increment), with **R3–R4 as cheap adjacents** and **R5 a footnote.**
- **All of it is gated** by the CWV budget (P5's M5.2 already makes the Lighthouse budget a hard gate),
  the no-JS/a11y baseline, and the honesty register — a demo video is the *highest-risk* item for the
  perf budget, so it needs a real measure, not an assumption.
- **These are candidates, not commitments.** The **P5 re-plan** (the charter's measure-before-re-plan
  gate) measures adna.network live, folds this in, and decides the mission breakdown + whether to
  complete a ≥6-exemplar set for durable doctrine.
