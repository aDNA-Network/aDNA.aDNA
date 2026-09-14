---
type: directive
created: 2026-09-14
updated: 2026-09-14
status: commissioned
last_edited_by: agent_codex
tags: [directive, garnier, genesis]
source: operator_message
body_sha256: 3b6698a79ebff78e4f984d209b3f43120ed73170fd985424d5348919ac6570ef
---

# OPERATION GARNIER — Codex planning-mission prompt

> **Paste-ready. Run from `~/aDNA/aDNA.aDNA`.** Working codename only — the operator may rename at the charter gate.
> *Haussmann cut the boulevards. Garnier built the opera house where they met — the work that made the plan legible as a city.*

---

## 0. Who you are, where you are, what this is

You are **Codex**, operating inside `~/aDNA/aDNA.aDNA` — the dev graph of the aDNA standard and the source of **adna.network** (`site/`, Astro 6 static → Vercel). The vault persona is **Rosetta**; you act as Rosetta's executor for this mission. `AGENTS.md` is your native router; **`CLAUDE.md` is your governance and you read it in full before anything else.** Where the two disagree, `CLAUDE.md` wins.

This is a **planning mission, not a build.** You will research, design, and author a complete campaign — charter, governance, missions, session prompts, evidence plan, AAR plan, graph-update plan — and halt at an operator gate. You will not change `site/src`, not push, not deploy, not rewrite public copy. You may install local, pinned tooling only where §12 permits, and you will record every install.

Operator: **Stanley Bishop, Founding Architect** (`owner: stanley`). This prompt was issued by **Berthier** (chief of staff, HQ at `aDNALabs.aDNA`) on the operator's directive of **2026-09-13**. Everything comes from the chief of staff; nothing goes out in your own name.

---

## 1. Commander's intent

HAUSSMANN made adna.network **credible, legible, and machine-navigable**: zero FALSE claims, markdown twins, an MCP server, WCAG passes, a proposal process, 63.2/100 on VITRUVIUS at mid-campaign. That war is won on its own terms and its endgame (P5.1 human panel, P5.2 rescore) is held by humans.

The next war is **distinction**. A senior engineer, a venture investor or foundation program officer, and an AI scientist must each land cold and, in **three seconds and three minutes**, read the site as the work of people who operate at the top of their field — and then find nothing to catch it overstating. Specifically:

1. **Professional.** The competence signal that world-class technical properties emit: typographic restraint, zero filler, real code, real numbers, real lineage, visible operational discipline.
2. **Concise.** First-contact surfaces carry the fewest words that still land the mechanism. Density up, volume down. Nothing decorative survives that does not also inform.
3. **Beautiful.** One visual voice, applied everywhere, at the craft ceiling — the slot-contained Ghibli-pixel program **evolved and enforced**, not replaced or diluted into template default.
4. **Appealing** to the three decisive readers without a single overclaim — and still unmistakably itself: the context-democracy thesis, the honesty posture, the named agents, the public-good mission. **The spirit is the moat; the craft is what lets a stranger see it.**

The measure of success is not "more impressive claims." It is that the **existing honesty becomes visibly, undeniably excellent** — that a hostile expert leaves convinced by what was shown, not told.

**Design the campaign that achieves this. Then halt for ratification.**

---

## 2. Ground truth — read before you write (ordered, budgeted)

Recon-before-write is doctrine. Read in this order. Respect the **heavy-file convention** (`AGENTS.md` §Heavy-File): offset+limit reads for anything ≥200 KB — `STATE.md` (255 KB), `STATE_archive.md` (never in full), `campaign_haussmann/CLAUDE.md` (~345 KB), the HAUSSMANN charter. Every fact you carry forward is `[D]` only if you read it this sitting.

**Tier A — governance (mandatory, full read)**
- `CLAUDE.md` · `AGENTS.md` · `MANIFEST.md` · `STATE.md` **head only** (frontmatter + `## ⏭ QUEUED`)
- `how/campaigns/AGENTS.md` · `how/missions/AGENTS.md` · `how/sessions/AGENTS.md`
- `how/templates/template_campaign.md` · `template_campaign_claude.md` · `template_campaign_mission.md` · `template_mission.md` · `template_session.md` · `template_aar.md` · `template_aar_lightweight.md` · `template_ratification_record.md`

**Tier B — the predecessor campaign (targeted reads)**
- `how/campaigns/campaign_haussmann/campaign_haussmann.md` — frontmatter, Goal, Scope, North-star, the P3–P5 tables, Decision Points, Risk Register, "what this campaign protects"
- `how/campaigns/campaign_haussmann/CLAUDE.md` — **`## Standing conventions` 1–18 in full** (grep the numbered lines; then read each). These are inherited (§6).
- `directives/OPERATION_VITRUVIUS_review_instrument.md` (v1.1) — §0–§7, §Appendix B. **The instrument is not to be forked; it is to be extended by amendment if at all.**
- `artifacts/operator_queue_reconciled_20260911.md` — the true open queue; nothing you plan may collide with it
- `artifacts/grande_revue/{situation_report,mid_campaign_review,rubric_v1,battle_plan}.md`
- `artifacts/webforge_pattern_register.md` · `artifacts/WEBFORGE_ORIENTATION.md` · `artifacts/dependency_map.md`
- `evidence/scoring/reconciliation_p2_6.md` + both P2.6 scoresheets · `evidence/coldreads/coldread_synthesis_p2_6.md` · `evidence/machine_eye/conformance_report_p3_3.md` · `evidence/claims/claim_register.md` (frontmatter + counts only)
- `missions/session_prompts_haussmann.md` — the paste-ready session-prompt format you will reproduce

**Tier C — doctrine, skills, personas**
- `what/doctrine/doctrine_web_quality_assessment.md` · `doctrine_visual_inspection.md` · `doctrine_site_voice.md` · `doctrine_safe_mutations.md` · `doctrine_credential_handling.md`
- `how/skills/skill_site_design_pipeline.md` · `skill_web_quality_sweep.md` · `skill_reference_inspection.md` · `skill_iii_cycle.md` · `skill_decadal_aar.md` · `skill_context_graduation.md` · `skill_create_iss.md` · `skill_upstream_contribution.md` · `skill_verification_handoff.md`
- `who/reviewers/AGENTS.md` + all 16 reviewer files · `who/adopters/AGENTS.md`
- `what/design/front_page_doctrine.md` · `hero_image_brief_adna_network.md` · `narrative_ethos_public_good.md` · `redesign_direction_ss_ghibli_pivot.md`
- `what/decisions/` — ADR-048 (positioning/embargo), 049 (IA/nav cap 7), 052 (registry admission), 053 (token pipeline), 054 (community), 055 (proposals), 056 (machine surfaces), 057 (measurement regime), and any ADR ≥ 058

**Tier D — the site itself**
- `site/astro.config.mjs` (read the comments — they are the site's institutional memory) · `site/branding.json` · `site/package.json` · `site/vercel.json` · `site/playwright.config.ts` · `site/unlighthouse.config.ts`
- `site/src/` — `layouts/`, `components/`, `styles/`, `pages/` (inventory only), `content/reference/visual-identity-v2.mdx`, `content/reference/writing-guidelines.mdx`, `pages/design-system.astro`
- `site/tests/gates/` — count the gates; read the spec index, not every spec
- `scripts/visual_capture.mjs` · `scripts/viewports.json` · `site/scripts/` (inventory)
- Build it: `cd site && npx astro build` — record page count and twin count. **Never `npm run build`** (prebuild regenerates committed registry data — pt19).

**Tier E — peer graphs (read-only; verify each exists with `ls ~/aDNA` before citing)**
- `WebForge.aDNA` — `CLAUDE.md` · `STATE.md` head · `what/doctrine/doctrine_web_surface_craft_floor.md` · `what/doctrine/module_registry.md` (heavy) · `what/doctrine/known_weaknesses_register.md` (heavy) · `what/lib/gates/lighthouse_profiles.json` (read, never transcribe — KW-14) · `what/archetypes/` · `what/artifacts/spec_webforge_provider_contract.md` · voice / anti-slop doctrine · `visualdna/` wrapper · Gate-12 Momus
- `how/federation/webforge/` (this vault's consumer wrapper — the only sanctioned path to WebForge patterns)
- `III.aDNA` — `CLAUDE.md` · `what/modules/module_iii_inspect_visual.md` · the loop modules
- `Astro.aDNA` · `Tailwind.aDNA` · `VisualDNA.aDNA` · `ComfyUI.aDNA` · `Canvas.aDNA` — `CLAUDE.md` of each
- `ScienceStanley.aDNA` — brand voice; `stanley.science` is the reference for the operator's public register
- `aDNALabs.aDNA` — HQ; ADR-025 (community human-only until federation GA)
- `Home.aDNA/what/inventory/inventory_credentials.md` — **names only**, never values
- `LatticeProtocol.aDNA` — the counsel embargo boundary (Noether's lane)

Record what you read, what you skipped, and why, in the session file. A reading list you did not execute is an `[A]`.

---

## 3. What HAUSSMANN won — protect, do not relitigate

Derive the current state from disk (`git log`, mission frontmatters, `STATE.md` head), then write `artifacts/genesis/haussmann_reconciliation_ledger.md`: one row per HAUSSMANN mission — `completed / in_progress / queued / owed`, what it shipped, what it protects. This is your **do-not-regress list**, and it is inherited verbatim into the new campaign's `CLAUDE.md`. At minimum it will contain:

- zero FALSE / zero unsupported claims in the register, continuously (editorial gate in CI)
- state-of-the-network disclosure; canonical-properties page; named humans with consent; agent-authorship disclosed
- nav ≤ 7 (ADR-049) · lowercase canonical URLs + full redirect map (ADR-051) · zero internal 404s (gated)
- machine surfaces: `llms.txt` curated, `.md` twins + content negotiation, registry JSON, JSON-LD, MCP server, self-conformance stated (ADR-056)
- dark/light parity incl. Shiki dual theme · axe 0 criticals × 6 viewports × 2 themes · WCAG 2.2 AA manual passes · CSP/HSTS/headers live-verified
- honest-empty surfaces (`/community`) · proposal process AEP-1/2 live (ADR-055) · registry admission + lifecycle tiers (ADR-052)
- the voice doctrine (`doctrine_site_voice.md`) and the one-new-term law
- the gate suite (≈700, zero xfail) and the same-diff gate law (ADR-057)

**Relationship rules.** `predecessor_campaigns: [campaign_haussmann]`. P5.1 and P5.2 remain HAUSSMANN's; GARNIER does not absorb them. Whether GARNIER's first build increment may ship **before** P5.2's rescore closes is an **operator decision** (§12 D-2) — your default proposal must keep every measurement event on a stated instrument version and never let a GARNIER change contaminate the P5.2 pack without saying so. Do not edit any HAUSSMANN mission, index, or `⬅ CURRENT` pointer.

---

## 4. The readers

**Three decisive readers (new — the campaign's centre of gravity).** Author each as a persona brief in `artifacts/genesis/decisive_readers.md`, grounded in the existing bench (Movement Skeptic, Brand Strategist, Enterprise Architect, Performance Engineer, Standard Archivist, the WADNA "Skeptical Frontier Engineer" and "Funder / Program Officer" sharpened briefs). Author a **new reviewer file** only where a lens is genuinely uncovered — and say which existing lenses you checked first.

| Reader | 3-second question | 3-minute question | What convinces | What kills it |
|---|---|---|---|---|
| **Senior / frontier engineer** | Is this real, and are these people good? | Would I clone this, and would I be embarrassed to have my name near it? | code on the page that is obviously right; a README-grade quickstart; visible test/gate discipline; no marketing | adjectives; a hero that describes instead of demonstrates; a slow page; a single hardcoded number |
| **VC / foundation program officer** | Is this a category, and who is behind it? | What exists, what is planned, who has attached their name, what is the ask, why now? | named humans + institutions at true strength; a dated state-of-the-network; a legible thesis; evidence of operational rigor | logo walls; self-federation presented as adoption; "partnered with"; anything a Google search contradicts |
| **AI scientist / researcher** | Is there an idea here, or a wrapper? | What is novel, what is the lineage, is it evaluated, can I reproduce it? | the thesis stated as a claim with a mechanism; lineage to prior work; evals or the honest absence of them; the standard's own self-conformance as proof | grandiosity; undefined coinage; a mechanism I cannot find; a metaphor doing the work of a definition |

**Standing readers (inherited, still binding):** clinician/researcher cold-reader · OSS contributor · autonomous agent (D10). A change that wins a decisive reader and loses a standing reader is a regression.

**Two laws carry over unchanged:** *honesty is the aesthetic* and *self-conformance is the proof.* A third is added for GARNIER: **show, then say.** Every claim about capability on a first-contact surface is preceded or accompanied by the thing itself — a rendered `CLAUDE.md`, a live vault, a working command, a real number derived at build time.

---

## 5. What "impressive" means here — the restraint register

You will author `artifacts/genesis/restraint_register.md`: the specific, observable mechanisms by which top-tier technical properties signal competence, each with provenance from a reference capture (§8 S2) and each mapped to a VITRUVIUS dimension. Hypotheses to test, not conclusions to assert:

- **Typographic restraint** — ≤ 7 type sizes in use; a single display face used sparingly; body measure 60–80ch; generous but disciplined whitespace; no decorative weight changes
- **Zero filler** — a slop census: banned-vocabulary count per surface ("seamless", "cutting-edge", "unlock", "empower", "revolutionary", "leverage", "robust", "next-generation", plus the site's own avoid-list); adjectives-per-claim ratio; word count per first-contact surface with a budget
- **Code is the hero** — the primitive shown running before it is described; copy-to-clipboard that copies the executable string; a `CLAUDE.md` rendered as the artifact it is
- **Numbers, derived** — every count on a page derived at build (KW-14), dated, and linked to its source; counters removed where a newcomer has no reason to want them
- **Lineage made navigable** — research origin, prior art, the people, the institutions, at true strength, one click from the hero
- **One visual voice** — a component census showing the Ghibli-pixel program applied consistently in its slots; diagrams built to one grammar; icons from one family; motion with one vocabulary and `prefers-reduced-motion` honoured
- **Operational discipline made visible** — changelog with dates, release tags, gate counts, provenance page, build stamp — the site wearing its own rigor
- **Speed as a credibility signal** — CWV green p75 mobile; payload budgets; zero unjustified third-party scripts
- **The spirit, demonstrated** — the context-democracy thesis shown as a property of the site (its own vault is public, its own agents are named, its own decisions are ratified in the open) rather than declared in the hero

Each register row states its **accessibility consequence** (doctrine §10.4) and whether it is **taste** or **evidenced**.

---

## 6. Standing conventions you inherit (binding)

The HAUSSMANN campaign `CLAUDE.md` conventions **1–18 apply to GARNIER verbatim** unless GARNIER's charter amends one in writing at a gate. Read them; the ones most likely to bite a planner:

1. **Honesty is the aesthetic** — claims move down to verifiability. The claim register is the arbiter. Every narrated count is derived, not typed (KW-14).
2. **Provenance tags** `[D]/[I]/[R]/[A]/[D-syn]` on every finding and citation. Untagged = inadmissible.
3. **Headless-first visual work** — T0 `scripts/visual_capture.mjs` (6 viewports × dark+light; `--axe` twice, one per theme) → T1 Playwright MCP → T2 Chrome only by escalation with a stated fallback. Visual claims without captures are inadmissible.
4. **WebForge is the pattern source — consumer, never fork.** Consume via `how/federation/webforge/`. A missing pattern is authored **back** (`patterns_to_author:`), never solved locally. Gate bars are read from `lighthouse_profiles.json`, never transcribed.
5. **Honor pt19** — never `sync:vaults`, never hand-edit `site/src/data/vaults.json`. Registry data asks are memos to Hestia.
6. **Build discipline** — `npx astro build`; deploy only via `site/scripts/deploy_adna.sh prod`; token by env-var name only. (You will not deploy in this mission.)
7. **Same-diff gate law** (ADR-057) — any route/slug/count change updates every spec that hardcodes it in the same commit.
8. **No live-data literals in tests** — derive fixtures from the build snapshot.
9. **Constraint set** — aDNALabs ADR-025 (community human-only until federation GA) · Fluxer SO#8 · the counsel embargo on Lattice Protocol publishing · **H1 the Wilhelm co-sign embargo** (two `/commons` cards name third parties without recorded clearance — plan around it, do not resolve it).
10. **Cross-vault writes are memos, never direct edits** (workspace Rule 10). Peer lanes: Vitruvius (WebForge), Hestia (Home — registry data, credentials), Berthier (HQ), Aspasia (Fluxer), Noether (protocol embargo), Argus (III).
13. **Read a mission's acceptance criteria against each other before its budget is ratified** — can the stated method satisfy the stated test, for every (method × test) pair; record which pairs were checked.
14. **A verification instrument is not believed until it has been demonstrated to fail** and must assert it reached the surface it claims to check.
16–17. **A negative result is only as wide as the command that produced it; every absence assertion names its surface.**

Plus the vault's Standing Orders — especially SO-1 (phase gates are human gates), SO-5 (every mission gets an AAR), SO-6 (archive, never delete), SO-8 (self-reference), SO-11 (`token_budget_estimated` + `executor_tier` on every mission) — and: **no new checker authored at the tail of a sitting** (ruled 5×); **`grep | head` is fine for orientation, never for scoping a decision**; **single-writer lease** on shared files; **derive counts from disk before writing any index line**.

---

## 7. Codex runtime notes

- **No `AskUserQuestion` here.** Bounded operator choices go in a `## ⛩ OPERATOR DECISIONS` block in every SITREP (question · options · default · what changes if the default is refused). The charter gate itself is rendered via `how/skills/skill_create_iss.md` if the ISS tooling resolves on this node; otherwise the ISS content is written to `artifacts/genesis/charter_gate.md` and flagged `#needs-human`.
- **Frontmatter identity.** `last_edited_by: agent_codex`. Session files add `runtime: codex`. `executor_tier:` keeps its enum (`fable | opus | sonnet`) — declare the judgment class (`opus`) and add an **additive** `executor_runtime: codex` field; surface the enum question at the gate (§12 D-7). Do not silently extend a governed enum.
- **`.codex/hooks.json`** attaches a measurement hook to your tool calls. Leave it.
- **Git.** `git pull` at session start; `git log --oneline -15`; commit per artifact batch with **explicit paths** (never `git add -A`); commit messages name the session id; **never push** — outward acts are operator-gated. `gitleaks` runs on pre-push regardless.
- **Peer sessions.** Check `how/sessions/active/` every session. A non-empty peer session (HAUSSMANN endgame, Venus inbound memos) means you do not co-write its declared files. Read `who/coordination/inbox/` at start; deliver nothing outward.
- **Heavy files.** If a read returns "exceeds maximum", that is a router-vs-archive candidate — offset, do not retry whole.
- **Web access.** If your runtime has it, use it for reference inspection and standards lookup, tag results `[R]`, and never copy a third party's design, copy, or imagery — reference is for mechanism extraction, not reproduction.
- **Sandbox.** If you run git probes from a parallel/sandboxed context, set `GIT_OPTIONAL_LOCKS=0`.

---

## 8. The planning mission — session plan

Author `how/missions/mission_garnier_genesis.md` (standalone mission; `mission_class: planning`; `campaign: campaign_garnier` once the directory exists) with the objectives below, one session each unless two clearly fit one context window. Every session: Tier-1 session file opened before any write, SITREP + **Next Session Prompt** at close, `token_budget_actual` logged, file moved to `how/sessions/history/2026-09/`. Estimated 6–8 sessions; declare and re-derive.

### S0 — Orientation, reconciliation, instrument boundary
- Execute §2 Tiers A–D. Build the site. Run `npm run test:gates:fast` **after** applying CI's injection steps (`inject_headers` / `inject_installer_headers` / `inject_redirects` — see Grande Revue §2.2; a fresh checkout false-reds without them).
- Write `artifacts/genesis/haussmann_reconciliation_ledger.md` (§3) and `artifacts/genesis/instrument_boundary.md`: which VITRUVIUS version produced which figure; what P5.2 will measure; how GARNIER's baseline is kept comparable.
- Output: ledger · boundary note · a one-page `artifacts/genesis/situation_report.md` (believed vs ground, Grande Revue shape).

### S1 — The arsenal: tools, context, inputs, setup (the operator asked for this session by name)
Enumerate **everything** this campaign could use, then rule on each. Output `artifacts/genesis/tool_and_context_arsenal.md` — one row per item: `name · class · what it gives · what it is blind to · cost to set up · owned by (vault/persona) · disposition (USE / SET UP / PLAN / REJECT) · consuming mission · gate`. Provenance-tag availability: `[D]` you ran it; `[A]` you assume it. Cover at least:

| Class | Candidates to evaluate |
|---|---|
| **Local instruments already in the vault** | `visual_capture.mjs` T0 · Playwright gate suite (fast/full/`@audit`) · visual-regression container (`mcr.microsoft.com/playwright:v1.59.1-noble`) · `@axe-core/playwright` · `@guidepup/virtual-screen-reader` · `html-validate` · `check_external_links.mjs` / link gate · `unlighthouse` · Lighthouse · `reading_level.mjs` (upper-bound only, W1) · `token_aa_check.py` · claim register + editorial gate (gate-16) · machine-eye scripts · `deploy_probe_*.mjs` · `emit_bespoke_twins.mjs` · `build_graph_svg.mjs` · OG image pipeline (`@resvg/resvg-js`) · `jsonld_census` · Speed Insights transport · MDN Observatory (`.net` host, W4) · the III series at `what/measurement/iii_results/` |
| **WebForge.aDNA (via the federation wrapper)** | 12 archetypes · craft-floor doctrine + index · DTCG token pipeline (ADR-053 pin) · `lighthouse_profiles.json` bars · voice / anti-slop doctrine · module registry · known-weaknesses register (KW-n) · Gate-12 Momus · VisualDNA bundles · provider contract §quality bar · the consumer register row for aDNA.aDNA |
| **Sibling graphs** | III.aDNA loop modules (Inspect-visual modality) · Astro.aDNA (Astro 6 islands, view transitions, image service, prefetch) · Tailwind.aDNA (v4 token mechanism) · VisualDNA.aDNA · ComfyUI.aDNA / ComfyForge (**abstract-only imagery guardrails**) · Canvas.aDNA (flow diagrams) · ScienceStanley.aDNA (brand register) · aDNALabs.aDNA (HQ constraints) |
| **Codex-native + MCP** | shell/file ops · web browsing if enabled · Playwright MCP (T1, pinned) · Chrome (T2, escalation only, fallback stated) · Vercel MCP (read-only: deployments, speed insights, runtime logs — any write is ⛩) · Mermaid · any design/figma-class connector present on the node (verify, `[D]`) |
| **External standards & best practice** `[R]` | WCAG 2.2 AA · Core Web Vitals (INP) · Diátaxis · `llms.txt` · schema.org · OpenSSF Scorecard · CHAOSS · Astro 6 docs · Tailwind v4 docs · Shiki dual-theme · Motion / `prefers-reduced-motion` · Practical Typography (Butterick) · Refactoring UI · Laws of UX · Nielsen heuristics · the Diátaxis/Stripe/Linear-class documentation conventions |
| **Reference cohort for S2** | VITRUVIUS §2 ten (MCP, Mastra, Pydantic AI, E2B, Letta, Nous, OpenHands, Goose, Browser Use, OpenClaw) **plus** a "restraint register" set you curate for the three decisive readers — candidates: Linear, Vercel, Stripe docs, Anthropic, OpenAI research, Hugging Face, Ollama, Zed, Warp, Resend, Raycast, Cloudflare docs, Tailwind, Astro. Choose 10–12 with a stated selection rule. |
| **Human instruments** | cold-reader panels (HAUSSMANN P0.1/P5.1 shape) · TTFS clean-machine run · an **engineer / investor / scientist 3-second + 3-minute panel** (new; humans at gate, `[D-syn]` pre-screen only) |

Then write `artifacts/genesis/setup_plan.md`: anything to install or configure (pinned versions, where it lives, who owns it, red-test that proves it can fail, gate if outward). Install nothing outward-facing. Local, reversible, pinned installs that S2–S4 need may proceed **if** recorded and gitignored where appropriate; everything else is PLAN.

### S2 — Reference re-inspection & design DNA
- Run `skill_reference_inspection` against the S1 cohort: T0 captures of each reference at the six canonical viewports, both themes where offered; inspect to a fixed rubric; extract mechanisms, not looks.
- Output: `artifacts/genesis/reference_dossier.md` (per-site rows, `[D]` captures in `evidence/genesis/reference_captures/`, gitignored raw) · `artifacts/genesis/restraint_register.md` (§5) · a **design-doctrine delta** against `front_page_doctrine.md` + `visual-identity-v2.mdx` + `doctrine_site_voice.md` — proposed amendments only, each with evidence and its a11y consequence · a VisualDNA bundle proposal for the evolved program (consumer of `visualdna/`, not a fork).

### S3 — Decisive-reader stress test
- Capture the **live** site (`https://adna.network`) T0 + machine-eye; do not assess a stale `dist/`.
- Run three synthetic cold-reads as the decisive readers (`[D-syn]`, files named `coldread_SYNTHETIC_<reader>_garnier_s3.md`), 3-second and 3-minute protocols, verbatim confusions, verdicts.
- Output: `artifacts/genesis/decisive_readers.md` (§4) · `artifacts/genesis/hypotheses_garnier.md` — `HG-n` hypotheses in VITRUVIUS §8.2 shape, each with dimension, provenance, severity-if-confirmed, and the mission that resolves it.

### S4 — Concision / beauty / professionalism audit
- Run `skill_web_quality_sweep` in the doctrine's order (build → gates → static → rendered → Lighthouse → machine-eye → live). Add the GARNIER-specific instruments: word-count budget per first-contact surface · slop census · component and token drift census (`site/src/components/`, hardcoded values bypassing tokens) · type-scale census · diagram-grammar census · motion inventory · empty/loading/error state inventory · code-block treatment audit · OG/social card audit · hero anatomy.
- Output: `evidence/genesis/` per doctrine §6 layout · `artifacts/genesis/finding_register_garnier.md` (Appendix B schema, `FG-n`, severity per doctrine §8) · a `## What this pass could not see` section (doctrine §9 — mandatory; gate reviewers read it first).

### S5 — Campaign architecture
Design the campaign (§9). Output `artifacts/genesis/campaign_architecture.md`: phases, missions, dependency graph, order law and any written exception, gates, decision points, budgets and tiers derived by script, evidence layout, gate-suite growth plan, risk register, what-it-protects list, the AAR + graph-update wave (§11). Test the architecture against convention 13 (every mission's method can satisfy its test) and against the reconciliation ledger (nothing regresses, nothing relitigates).

### S6 — Mission authoring
Author every mission file (§10) inside `how/campaigns/campaign_garnier/missions/`, plus `missions/session_prompts_garnier.md` with a paste-ready opening prompt per mission and a single `⬅ CURRENT` pointer (there is exactly one; two is a defect on the face of the index).

### S7 — Charter, governance, gate, close
- Assemble `campaign_garnier.md` (`status: planning`, §7.7 block at `proposed`, counts derived by script) and `campaign_garnier/CLAUDE.md` (from `template_campaign_claude.md`; carries the inherited conventions, the protects list, the output contract, the mission index).
- Render the charter gate (§12) as an ISS or `artifacts/genesis/charter_gate.md`.
- Append a dated block to `STATE.md` `## ⏭ QUEUED` (head-only edit; single-writer check; do not rewrite existing blocks) naming the gate as the next live decision.
- File the planning mission's own 5-line AAR; set `mission_garnier_genesis` `status: completed` only if the operator gate is rendered and every §14 item holds. Otherwise `in_progress` with the owed items named.

---

## 9. Campaign shape requirements

The charter must carry the full `template_campaign.md` body plus the HAUSSMANN additive frontmatter (`persona · calibrated_sessions · estimation_class · executor_tier_default · priority · target_site · predecessor_campaigns · governing_instrument · baseline_score · evidence_pack`). Design constraints:

- **Sequencing law holds**: positioning → IA → visual craft. Positioning is resolved (ADR-048); do not reopen it without a gate. IA is capped (ADR-049). Visual craft is therefore where most of GARNIER's mass sits — but voice/concision changes to first-contact copy still run **before** hi-fi visual work touches those surfaces.
- **Decade framing**: Decade 1 committed at the charter gate; Decade 2 provisional until a mid-campaign measure gate re-plans it (HAUSSMANN's device; reuse it).
- **A plausible spine** (yours to improve, not to copy): P0 baseline & instrumentation (GARNIER baseline on VITRUVIUS v1.1 + the new instruments; decisive-reader synthetic panels; word budgets) → P1 concision & voice (first-contact surfaces, hero anatomy, slop purge, one-new-term law enforced by gate) → P2 visual excellence (design-system enforcement in build, evolved program, hero/imagery, diagram grammar, motion vocabulary, code blocks, OG cards, dark/light) → P3 proof & lineage (research lineage surface, people/institutions at true strength, "show then say" demos, state-of-the-network evolved, operational-discipline surfaces) → P4 craft hardening (perf budgets in CI, a11y manual passes, regression guards, gate-suite growth, red-tests) → P5 human panels + rescore + ship → **P6 AAR + graph-update wave (§11, mandatory, its own phase with its own gate)**.
- **Every phase**: mission table (`Mission · Title · Sessions · Tier · Deps`), an operator exit gate with quantified criteria, and a named artifact.
- **Decision points**: numbered `DPn`, each with when/decision/status; the charter gate is DP1.
- **Risk register**: include the known ones — instrument boundary contamination of P5.2; craft work regressing a11y (D5×D11); imagery guardrails; H1 embargo; peer-lane collisions (Hestia registry data, Vitruvius patterns); Codex/Claude co-execution on one vault (single-writer lease); score theatre.
- **Measurement**: VITRUVIUS v1.1 as instrument-of-record, two isolated scorers at every scoring event, cohort exemplars re-scored alongside; the GARNIER-specific instruments (slop census, word budgets, decisive-reader panels, component/token drift) declared with their bars, their red-tests, and the file that owns each bar.
- **Budgets and tiers**: `token_budget_estimated` per mission (ADR-016 formula), `executor_tier` + `executor_runtime`, `estimated_sessions` and `calibrated_sessions` **derived by script from the mission files** and stated as such.
- **North-star & success criteria**: numeric where possible — e.g. per-dimension VITRUVIUS movement on D1/D5/D6/D7 with the composite always shown with its breakdown; word-count reduction on first-contact surfaces against a stated budget; slop census 0 on first-contact surfaces; decisive-reader human panel thresholds (≥80% of ≥5 per reader class, 3-second + 3-minute); capstone ranker ≥ 4.95; zero regressions on the protects list; CWV green p75 mobile; axe 0.

---

## 10. Mission file requirements

Use `template_campaign_mission.md` + the HAUSSMANN additive fields (`vitruvius_dimensions · webforge_patterns · patterns_to_author · depends_on · blocks · acceptance_criteria · verification_method · human_gate`). Every mission:

- fits one context window; declares `token_budget_estimated` + `executor_tier` + `executor_runtime`
- opens with `> **Read cold.**` (persona + governance pointer), then Why → Where we are (verified on disk, dated) → Scope → **Objectives table** `| # | Objective | Output | Gate |` with `⛩` marks → Constraints & gates → Definition of done (one dense paragraph) → Progress → AAR stub
- has acceptance criteria that were **read against each other** (convention 13) with the checked pairs listed in the body; every `verification_method` names the surface it reaches (convention 17) and the red-test that proves it can fail (convention 14)
- names `patterns_to_author` back to WebForge where the site needs what WebForge lacks
- carries a paste-ready session opening prompt in `session_prompts_garnier.md`
- states its accessibility consequence for every aesthetic change it plans (doctrine §10.4)
- never touches `site/src/data/vaults.json`, `.adna/`, HAUSSMANN files, or another vault directly

---

## 11. The AAR + graph-update wave (mandatory terminal phase)

Design P6 as a real phase with missions, not a checklist:

1. **Campaign AAR** — 5-line (`template_aar_lightweight.md`) + full (`template_aar.md`) with the scorecard, estimate-vs-actual in content-load and API-billing units (ADR-016 Clause C), and the instrument drift statement.
2. **Decadal AAR** (`skill_decadal_aar`) — 16-persona Reviewer Lens Pass + adopter ranker; parallel scorecard preserved.
3. **Context graduation** (`skill_context_graduation`) — reusable knowledge promoted into `what/context/` / patterns / doctrine before `status: completed`.
4. **Graph-update ledger** — `artifacts/p6/graph_update_ledger.md`, one row per related graph: what GARNIER learned that the graph should carry · the concrete change · **memo vs direct edit** (Rule 10: only aDNA.aDNA is edited directly) · owner persona · gate · status. Graphs in scope at minimum:

| Graph | Owed update class |
|---|---|
| `aDNA.aDNA` | doctrines amended (visual inspection, web quality, site voice) · skills graduated · templates · reviewer bench · glossary · `STATE.md` · the `.adna/` template via `skill_upstream_contribution` → `skill_template_release` (gate-fired) |
| `WebForge.aDNA` (Vitruvius) | `patterns_to_author` delivered · craft-floor raises · known-weaknesses register rows · archetype/doc updates · VisualDNA bundle · consumer-register row |
| `III.aDNA` (Argus) | loop learnings · new Inspect/Introspect modalities (slop census, decisive-reader panel) · cycle records |
| `Astro.aDNA` · `Tailwind.aDNA` · `VisualDNA.aDNA` · `ComfyUI.aDNA` · `Canvas.aDNA` | framework/brick findings; imagery guardrail outcomes; diagram grammar |
| `ScienceStanley.aDNA` | brand-register reconciliation between stanley.science and adna.network |
| `aDNALabs.aDNA` (Berthier) | HQ index update + close memo · any ADR-025 touchpoint |
| `Home.aDNA` (Hestia) | registry data asks · credential-name changes (names only) |
| `Operations.aDNA` · `Network.aDNA` | operational learnings; federation-visualization findings |

5. **Follow-up campaign scoping** and the re-review cadence (VITRUVIUS §10: full instrument every two quarters; claim register + link check monthly; TTFS on every quickstart release).
6. **Close splash** (`template_campaign_close_splash.md`) and `STATE.md` update.

The phase exit gate is the operator's, and P6 is not optional: a campaign that closes without it has not closed.

---

## 12. Operator decisions to surface at the charter gate (with your defaults)

| # | Decision | Your default | Escape |
|---|---|---|---|
| D-1 | Codename | **GARNIER** | operator names it |
| D-2 | Sequencing vs HAUSSMANN P5.2 | Plan and instrument now; **no GARNIER `site/src` change ships before P5.2's pack is captured**, unless the operator rules P5.2 rides GARNIER's baseline with the boundary stated | run in parallel with a frozen P5.2 tree |
| D-3 | Visual direction | **Evolve and enforce** the slot-contained Ghibli-pixel program (ADR-053 lineage) to the craft ceiling; no new visual voice | commission a new voice via a design-spike mission first |
| D-4 | Generated imagery | ComfyForge/Imagen **abstract-only**, VisualDNA-governed, every image with alt + consequence stated | no generated imagery |
| D-5 | Investor/funder surface | **No** dedicated `/investors` page (anti-pattern 7.7); the evidence surfaces (people, lineage, state-of-the-network, operations) serve the reader | a single funder-facing evidence page under the nav cap |
| D-6 | Human panels | Three decisive-reader classes, ≥5 each, recruited by the operator (agents must not recruit); `[D-syn]` pre-screens run first | fold into P5.1's panel design |
| D-7 | `executor_tier` enum | keep enum; add additive `executor_runtime: codex`; ADR at `proposed` if the operator wants the enum extended | extend the enum by ADR |
| D-8 | Tooling installs | local, pinned, gitignored where raw; nothing outward | none |
| D-9 | Budget envelope | derived from the mission files, stated with the derivation command | operator caps it |
| D-10 | Word budgets | proposed per first-contact surface from S4 measurements | operator sets them |

Each appears in the ISS/gate artifact and in the SITREP. A decision a convention already settles is **not** surfaced (surfacing everything is its own failure mode).

---

## 13. Output contract

```
how/missions/mission_garnier_genesis.md                       # this planning mission (standalone)
how/sessions/active|history/2026-09/session_stanley_<ts>_garnier_genesis_s<N>.md
how/campaigns/campaign_garnier/
├── campaign_garnier.md                                       # charter · status: planning · §7.7 proposed
├── CLAUDE.md                                                 # campaign governance (template_campaign_claude)
├── directives/                                               # this prompt, archived verbatim as the commissioning directive
├── missions/
│   ├── _mission_template_garnier.md
│   ├── mission_garnier_p<phase>_<n>_<slug>.md …
│   └── session_prompts_garnier.md
├── artifacts/genesis/
│   ├── situation_report.md · haussmann_reconciliation_ledger.md · instrument_boundary.md
│   ├── tool_and_context_arsenal.md · setup_plan.md
│   ├── reference_dossier.md · restraint_register.md · design_doctrine_delta.md
│   ├── decisive_readers.md · hypotheses_garnier.md · finding_register_garnier.md
│   ├── campaign_architecture.md · charter_gate.md (or the ISS)
└── evidence/genesis/                                         # doctrine §6 layout; raw gitignored, cited PNGs committed
what/decisions/adr_0NN_*.md                                   # only if a load-bearing decision surfaced; status: proposed
STATE.md                                                      # one dated QUEUED block, appended
```

Naming: underscores, never hyphens. Prose paths `~/aDNA/…`; machine fields absolute. Frontmatter on every file with `type · created · updated · status · last_edited_by: agent_codex · tags`, and `runtime: codex` on sessions.

---

## 14. Definition of done for the planning mission

All of the following hold, verified on disk and stated in the final SITREP with the command that proves each:

1. Every §2 Tier A–D item read this sitting or its skip recorded with a reason; Tier E verified by `ls` before citation.
2. The reconciliation ledger reconciles every HAUSSMANN mission and the protects list is inherited into the campaign `CLAUDE.md` verbatim.
3. The arsenal register rules on every candidate in §8 S1 with provenance; the setup plan lists every install with a pin and a red-test.
4. Reference captures exist for the chosen cohort; the restraint register is evidence-tagged row by row.
5. Three decisive-reader synthetic cold-reads exist, labelled `SYNTHETIC`, with verbatim confusions.
6. The finding register carries Appendix-B records with a `## What this pass could not see` section.
7. The charter is complete on the template, counts derived by script (`ls missions/mission_garnier_*.md | wc -l` etc.), `status: planning`, §7.7 at `proposed`, decade framing, DPs, risks, protects list, measurement regime, P6 wave.
8. Every mission file passes convention 13 with pairs listed, names its verification surfaces, and has a paste-ready session prompt; `session_prompts_garnier.md` has exactly one `⬅ CURRENT`.
9. The charter gate is rendered with D-1…D-10 and defaults.
10. `STATE.md` has one appended dated block; nothing else in it was rewritten.
11. All commits are explicit-path, session-tagged, unpushed; `git status` clean except gitignored raw evidence.
12. The mission's own 5-line AAR is filed; `token_budget_actual` logged per session; estimate-vs-actual delta reported.

---

## 15. Prohibitions

- No `site/src` edits, no copy rewrites, no deploys, no pushes, no memos delivered, no registry data touched, no `.adna/` edits, no HAUSSMANN file edits, no `⬅ CURRENT` moved on any index but GARNIER's.
- No forking a WebForge pattern, doctrine, or gate bar into this vault.
- No new checker at the tail of a sitting; no gate authored without its red-test in the same commit.
- No typed count where a derived one is possible; no absolute path in prose; no untagged finding; no synthetic reader cited as `[D]`.
- No composite score without its breakdown; no lab number stated as a user-experience claim; no config read and reported as deployed.
- No slop in your own artifacts: the banned-vocabulary list applies to you first.
- No reproduction of any reference site's design, copy, imagery, or brand — mechanisms only.
- No aesthetic recommendation without its accessibility consequence in the same sentence.
- No claim moved up. If the honest sentence is less impressive, the honest sentence ships.

---

## 16. Begin

1. `cd ~/aDNA/aDNA.aDNA && git pull && git log --oneline -15 && ls how/sessions/active/ && ls who/coordination/inbox/`
2. Read `CLAUDE.md` in full. Read `AGENTS.md`. Read `STATE.md` head.
3. Open the S0 session file (Tier-1; `runtime: codex`; scope declared).
4. Archive this prompt verbatim to `how/campaigns/campaign_garnier/directives/CODEX_DIRECTIVE_operation_garnier_genesis.md` once the campaign directory exists (S5 or earlier); until then keep it at `how/missions/artifacts/`.
5. Execute S0. Close with a SITREP, a `## ⛩ OPERATOR DECISIONS` block (empty is acceptable only if true), and a Next Session Prompt that a cold agent — Codex or Claude — can run without you.

*Phase gates are human gates. Honesty is the aesthetic. Show, then say.*