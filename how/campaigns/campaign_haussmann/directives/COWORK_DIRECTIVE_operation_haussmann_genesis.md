# COWORK SESSION DIRECTIVE — OPERATION HAUSSMANN (Genesis)
## Campaign Genesis Planning Mission · aDNA.aDNA

**Session type** Cowork · long-form, multi-tool, artifact-producing
**Host vault** `aDNA.aDNA`
**Codename** Operation HAUSSMANN *(alternate: PERCIER)* — the rebuilding of the network's public face for legibility, navigation, and grandeur, ahead of launch
**Governing instrument** `OPERATION_VITRUVIUS_review_instrument.md` (category review doctrine, D1–D12)
**Target property** `https://adna.network`
**Adjacent property** `https://community.adna.network` (new community Flux instance — must be integrated, not bolted on)
**Pattern source** `Webforge.aDNA`
**Downstream executor** Claude Code, multi-session, running in the graph

---

## 1. Commander's intent

This session does not redesign the website. **This session designs the campaign that will.**

The deliverable is a complete, executable campaign genesis package — committed into `aDNA.aDNA` as conformant context — such that a Claude Code session opening cold in this vault can execute Operation HAUSSMANN phase by phase without further strategic input.

The end state Operation HAUSSMANN must reach: `adna.network` is the most credible, most legible, most beautiful property in its category at launch — a site that a senior engineer, a rare-disease clinician, a foundation program officer, and an autonomous agent each find immediately navigable, and that none of them can catch overstating itself.

Two constraints govern everything downstream:

1. **Honesty is the aesthetic.** The site's existing refusal to display vanity metrics is its strongest asset. Every design decision must preserve it. Beauty here means precision, not inflation.
2. **Self-conformance is the proof.** A standard for agent-navigable context whose own reference site is not agent-navigable has refuted itself. Machine legibility is a first-class design surface, not a technical afterthought.

---

## 2. Standing orders

1. Phase gates are human gates. Halt and report at each gate defined in §7.
2. Every finding, claim, and recommendation carries a provenance tag: `[D]` directly observed · `[I]` inferred · `[R]` third-party reported · `[A]` assumption. Untagged assertions are inadmissible and must be rejected in review.
3. No destructive action without confirmation. This session writes new context; it does not delete or restructure existing vault content.
4. Where a required source is missing (a vault, a file, a pattern), record the absence as a finding and continue. Do not invent contents.
5. Artifact-first. Deliver the thing. No narration of process in the committed artifacts.
6. All produced context must conform to the aDNA standard at the vault's current conformance level. The genesis package is itself a conformance demonstration.

---

## 3. Phase A — Orientation (read before writing anything)

### A.1 — Host vault inventory
Read, in this order:
- `aDNA.aDNA/CLAUDE.md` and `AGENTS.md` — operating protocol, persona (Rosetta), standing orders
- `aDNA.aDNA/STATE.md` — current phase, blockers, open threads
- `who/governance/` — roles, policy, ratification requirements, phase-gate definitions
- `how/campaigns/` — every prior campaign; extract the campaign file schema, phase decomposition convention, and mission frontmatter shape **by example, not by assumption**
- `how/missions/` — mission and session granularity conventions; note typical mission scope and session budget
- `what/decisions/` — every architecture decision record touching the website, the spec, publishing, or the network's public representation
- `what/context/` — typed context library; identify every entry relevant to site, brand, voice, design, community, or launch

**Produce:** `WEBFORGE_ORIENTATION.md` (working note, not final artifact) — file schema extracted, conventions recorded, gaps listed.

### A.2 — Webforge.aDNA pattern extraction  **[MANDATORY]**
Locate and read `Webforge.aDNA` in full. This is the designated pattern source for this campaign and takes precedence over external references where the two conflict.

Extract and catalogue:
- Every published web pattern, component pattern, layout pattern, and page archetype
- Design tokens, type scale, spacing system, colour system, motion rules
- Build/publish pipeline patterns (Astro conventions, vault-to-site publishing, content pipeline)
- Any accessibility, performance, or machine-legibility patterns already codified
- Any anti-patterns Webforge has already recorded — these are prior campaign learnings and must not be relitigated
- Pattern maturity: which are proven, which are proposed, which are deprecated

**Produce:** `webforge_pattern_register.md` — one row per pattern: ID, name, maturity, applicability to HAUSSMANN, current adoption state on `adna.network`, gap.

**Rule:** Operation HAUSSMANN inherits from Webforge. Where HAUSSMANN needs a pattern Webforge does not have, the campaign must include a mission to author it *back into Webforge*, not to solve it locally. The website is a consumer of the pattern library, never a fork of it.

### A.3 — Adjacent vault sweep
Read for dependencies and shared surfaces: `Platform.aDNA` / `Canvas.aDNA` (design standard), `Operations.aDNA` (coordination), `Lighthouse.aDNA` (community infrastructure), `VisualDNA.aDNA` (visual identity), `III.aDNA` (quality framework — its Inspect/Introspect/Improve loop should structure the review missions), plus any vault owning the Lattice Protocol narrative.

**Produce:** dependency map — what HAUSSMANN needs from each, what it owes each.

### A.4 — Governing instrument
Ingest `OPERATION_VITRUVIUS_review_instrument.md`. Treat D1–D12, the scoring model, the severity taxonomy, the evidence protocol (Steps 1–10), and the anti-pattern catalogue as the campaign's assessment doctrine. The fifteen hypotheses in its §8.2 are the campaign's opening work queue.

**Gate A.** Report: vault schema extracted · Webforge patterns registered · dependencies mapped · instrument ingested. Human confirmation required before Phase B.

---

## 4. Phase B — Situation assessment

### B.1 — Current site reconnaissance
Crawl `https://adna.network` in full. Produce a page inventory: URL, title, template, word count, classification (marketing / concept / tutorial / how-to / reference / governance / registry / meta), depth from home, inbound internal links, last-modified.

Capture every distinct template at 390 / 768 / 1024 / 1440 px in both colour modes. Archive to a dated directory. **Visual findings without captures are inadmissible.**

### B.2 — Machine-eye pass  **[PRIORITY]**
Fetch as an agent would — text extraction, JS disabled. Then verify directly and record the result for each:

- [ ] `/llms.txt` — present? curated with per-link descriptions, or a raw dump?
- [ ] `/llms-full.txt` or full-corpus equivalent
- [ ] `.md` twin resolution on every documentation URL
- [ ] Content negotiation on `Accept: text/markdown`
- [ ] `sitemap.xml` complete and current
- [ ] `robots.txt` — deliberate posture toward AI crawlers
- [ ] `rss.xml` — changelog and blog
- [ ] Vault registry available as JSON/API, not HTML only
- [ ] JSON-LD: `Organization`, `SoftwareSourceCode`, `TechArticle`, `Dataset`
- [ ] Stable resolvable URIs for every entity, with a documented scheme
- [ ] MCP server exposed over the docs/registry corpus
- [ ] Copy-as-context affordance on high-value pages
- [ ] **Self-conformance:** does the site's own published content satisfy the aDNA standard it documents?

Any absence here is a candidate S1 finding under VITRUVIUS anti-pattern 7.8.

### B.3 — Automated sweep
Lighthouse (all categories) · axe · pa11y · link check · HTML validation · security headers · structured-data validation · Core Web Vitals at p75 mobile and desktop. Retain raw output.

### B.4 — Hypothesis resolution
Work the fifteen hypotheses from VITRUVIUS §8.2. Each resolves to **confirmed / refuted / reframed**, with provenance and evidence location. Priority order:

- **H5** network composition disclosure (S1 — credibility)
- **H8** machine legibility / self-conformance (S1 if absent)
- **H1** hero abstraction load
- **H3** first-move commitment cost; zero-install evaluation path
- **H4** registry sprawl — 74 vaults, 15 graphed, mixed lifecycle states
- **H6** URL casing inconsistency
- **H13** internal operational language leaking into public copy — **sweep all 74 registry entries**
- Remainder in instrument order

### B.5 — Claim register
Extract every factual and quantitative claim on the site into a register. Verify each. Classify: verified / verifiable / unsupported / **false**. Any entry in the last column is S1 and blocks launch.

### B.6 — Community Flux assessment
Assess `https://community.adna.network` as a property and as a system:
- Platform, capabilities, moderation model, identity model, data posture
- Current state: live / staging / empty / seeded
- Visual and voice relationship to `adna.network` — currently coherent, or two properties?
- Navigation relationship: how does a reader currently move between them, in both directions?
- Governance relationship: how does the four-level participation ladder map onto Flux surfaces? Which rungs does Flux actually serve?
- Machine legibility: is community content agent-navigable? Should it be? Should any of it federate back into the graph as context?
- Launch readiness: is it ready to receive traffic from the main site, and is it alive enough that linking to it helps rather than harms?

**This is not a footer-link task.** Determine whether Flux becomes the synchronous venue the contribution funnel currently lacks (VITRUVIUS H14), and design the integration accordingly.

### B.7 — Cohort and design research
Score two exemplars on the VITRUVIUS instrument for calibration: **Model Context Protocol** (same archetype — open standard, foundation-governed, contributor ladder, numbered proposal process) and **Mastra** (adjacent — complete developer surface, machine-legibility kit).

Then research beyond the cohort, for craft rather than category:
- Type systems and editorial layout in technical publishing
- Specification and standards-body sites with genuine visual quality
- Scientific and public-good properties that achieve institutional credibility without sterility
- Registry and catalogue interfaces that scale past 100 entries with facets, tiers, and lifecycle states
- Diagram and data-visualisation systems with published construction rules
- Dark-mode-native technical aesthetics that survive accessibility audit
- Pixel-art and illustrated aesthetics deployed at institutional register — the specific question: can the existing hero style be systematised across the whole property, or does it need to be reduced to an accent? Answer with evidence.

**Produce:** `haussmann_reference_dossier.md` — annotated, with a *what to steal / what to avoid* line per reference. Not a mood board. A parts catalogue.

**Gate B.** Report: composite VITRUVIUS score with per-dimension breakdown · finding register with severities · claim register · fifteen hypotheses resolved · Flux assessment · reference dossier. Human confirmation required before Phase C.

---

## 5. Phase C — Campaign design (the deliverable)

Design **Operation HAUSSMANN** as a complete, multi-session campaign executable in Claude Code within `aDNA.aDNA`, conforming to the vault's Campaign → Phase → Mission → Session hierarchy as extracted in A.1.

### C.1 — Campaign architecture

Structure the campaign on the decade backbone already in the vault, with positioning resolved first as a precondition:

| Order | Decade | VITRUVIUS dimensions | Weight |
|---|---|---|---|
| **0** | *Positioning (precondition, not a decade)* | D1 | 12 |
| 1 | Credibility-integrity | D7, D6, claim register, anti-patterns 7.1/7.3/7.5 | 22 |
| 2 | Navigation & docs | D2, D3, D4 | 32 |
| 3 | Agentic + community | D10, D8, D9 | 22 |
| 4 | Visual craft | D5, D11, D12 | 12 |

**Sequencing law:** positioning resolves before information architecture; information architecture resolves before visual craft. Redesigning navigation before the proposition is settled means redesigning it twice. Any proposed phase ordering that violates this must be justified in writing.

### C.2 — Mandatory phase content

The campaign must contain phases and missions covering, at minimum:

**Phase 0 · Positioning resolution**
Rewrite the core proposition. Resolve the abstraction load in the hero. Resolve the Lattice Protocol explanatory debt (H9). Decide the fate of the six audience-segment pages (H7) and of the public-facing persona names (H11). Test with a fresh cold-reader panel — minimum five, across senior-engineer / domain-expert / prospective-contributor profiles.
**Gate:** ≥4 of 5 readers correctly state what it is, who it is for, and one thing it is not, in ≤30 seconds, unaided.

**Phase 1 · Credibility remediation**
All S1 findings. Network-composition disclosure shipped — a dated "state of the network" surface distinguishing what runs, what is operator-operated, what is external, what is planned. Claim register reconciled to reality. Registry admission standard, lifecycle tiers, and visual distinction between mature and genesis entries. Editorial gate installed on any public content generated from internal artifacts. Named humans surfaced (H12). Canonical-properties page published against the clone-site risk (VITRUVIUS §7.1) — this matters more, not less, as the network gains visibility.
**Gate:** zero unsupported claims; a hostile external reader cannot find an unacknowledged overstatement.

**Phase 2 · Structure**
IA rationalisation — resolve the three concurrent navigation systems (H2). URL normalisation with a complete redirect map covering every URL ever published (H6). Onboarding rebuild: define and publish what "first success" means, add a zero-install evaluation path, reduce first-move commitment cost (H3), measure TTFS on a clean machine before and after. Documentation restructured into four clean types — tutorial / how-to / reference / explanation — with the classification visible in the IA. Registry redesign for 10× current scale with facets, sort, tiers, and stable per-item URLs.
**Gate:** TTFS < 10 minutes measured · zero internal 404s · ≤2 clicks to every high-value page.

**Phase 3 · Agentic surface and community integration**
Ship the full machine-legibility layer from §4.B.2. Expose an MCP server over the corpus. Publish the documented canonical agent entry point on the homepage. Demonstrate self-conformance and *say so on the page* — this is the single strongest available proof of the product thesis and it currently goes unclaimed.
Integrate `community.adna.network` as a first-class property: shared design system, shared voice, bidirectional navigation, participation ladder mapped onto Flux surfaces, contribution funnel routed through it, question path separated from the issue tracker, seeding and moderation plan, and a launch-readiness gate so the link points at something alive.
Instantiate a numbered proposal process with states and a public archive (H15) — the largest governance gap against the MCP reference model.
**Gate:** machine-legibility conformance report clean · first numbered proposal filed · Flux integration live and demonstrably active.

**Phase 4 · Craft and hardening**
Design-system enforcement against Webforge patterns, verified across 20 sampled components. Visual voice decision executed consistently across every template — not one beautiful hero and nothing else carrying the style. Diagram and illustration construction rules published so contributors can extend the language. Responsive integrity at all breakpoints. WCAG 2.2 AA verified including code blocks, syntax highlighting, diagram strokes, muted metadata text, and the registry. Complex graphics: text alternative plus keyboard-navigable twin, verified equivalent. CWV, a11y, and link-checking gates in CI.
**Gate:** zero a11y criticals · CWV green at p75 mobile · design-system conformance verified · every new pattern authored back into `Webforge.aDNA`.

**Phase 5 · Launch readiness**
Full VITRUVIUS re-score. Comparative position against the Phase 0 baselines. Cold-reader re-test. Launch checklist, rollback plan, monitoring, and post-launch review cadence.
**Gate:** composite score improvement demonstrated per dimension; every S1 and S2 closed and verified.

### C.3 — Mission and session specification

For every mission in every phase, produce a mission file carrying:

```yaml
mission_id:
campaign: operation_haussmann
phase:
decade:                    # credibility | navigation | agentic | craft
vitruvius_dimensions: []   # D1–D12
status: queued
depends_on: []
blocks: []
objective:                 # one sentence, testable
inputs:                    # vault paths, patterns, prior artifacts
webforge_patterns: []      # pattern IDs consumed
patterns_to_author: []     # patterns owed back to Webforge
session_budget:            # estimated Claude Code sessions
deliverables: []           # named artifacts with target paths
acceptance_criteria: []    # verifiable, not aspirational
verification_method:
human_gate: true | false
```

Each mission must be **context-window-sized** — completable in one Claude Code session, with what one session learns inherited by the next through the vault. Missions that cannot be closed in a session must be decomposed before they are written.

For every mission, also write the **session opening prompt** the Claude Code operator will actually paste: orientation reads, objective, constraints, deliverable paths, acceptance criteria, and the halt condition.

### C.4 — Instrumentation

Define the measurement regime the campaign carries throughout: VITRUVIUS composite and per-dimension scores at each phase gate · TTFS on every quickstart-touching change · claim register reconciled monthly · link check and CWV in CI · cold-reader panels at Phase 0 and Phase 5 · community activity on Flux tracked as a health signal, never displayed as a vanity metric.

**Gate C.** Full campaign genesis package delivered and committed. Human ratification required before any execution session opens.

---

## 6. Required artifacts

Committed into `aDNA.aDNA`, conformant, at paths matching the vault's existing conventions:

| Artifact | Location | Purpose |
|---|---|---|
| `campaign_haussmann.md` | `how/campaigns/` | Campaign brief: intent, end state, decade structure, phase sequence, dependencies, risks, instrumentation |
| `mission_haussmann_p{n}_*.md` | `how/missions/` | One file per mission, schema per C.3 |
| `session_prompts_haussmann.md` | `how/missions/` | Paste-ready Claude Code opening prompt per mission |
| `context_website_assessment.md` | `what/context/` | Full VITRUVIUS assessment: scores, breakdown, finding register, resolved hypotheses |
| `context_claim_register.md` | `what/context/` | Every site claim, verified/verifiable/unsupported/false, with evidence |
| `context_webforge_patterns.md` | `what/context/` | Pattern register per A.2, with adoption gaps and patterns owed back |
| `context_reference_dossier.md` | `what/context/` | Annotated design and category references, steal/avoid per entry |
| `context_community_flux.md` | `what/context/` | `community.adna.network` assessment and integration design |
| `decision_*.md` | `what/decisions/` | One ADR per irreversible choice: positioning, visual voice, IA model, URL scheme, registry tiering, Flux integration model, proposal process |
| `evidence/haussmann/` | as vault convention | Page inventory CSV, screenshot archive, automated raw output, TTFS recording, cold-reader transcripts |

---

## 7. Gates and halt conditions

| Gate | Condition | Authority |
|---|---|---|
| **A** | Orientation complete; Webforge registered; schema extracted | Human |
| **B** | Assessment complete; hypotheses resolved; claims registered | Human |
| **C** | Campaign genesis package complete and conformant | Human — ratification |

**Halt immediately and report** if any of the following are found: a false claim on the live site · a named institution or individual appearing without verifiable consent · an accessibility critical on a primary flow · `Webforge.aDNA` unreachable or empty · `community.adna.network` unreachable, empty, or misaligned in a way that makes linking to it a net negative · any conflict between this directive and the vault's standing orders.

---

## 8. Prohibited

- Designing the website in this session. This session designs the campaign.
- Inventing vault, pattern, or file contents that could not be read.
- Forking Webforge patterns locally instead of authoring back into `Webforge.aDNA`.
- Any recommendation that increases apparent scale without increasing verifiable scale.
- Vanity metrics, follower counts, activity feeds, or logo walls implying endorsement not held.
- Testimonials that are not attributable to a real, findable person — the signature of the clone sites surrounding this category.
- Aspirational present tense in any produced copy or recommended copy.
- Linking prominently to a community venue that is not alive.
- Aesthetic recommendations without a stated accessibility consequence.
- Phase orderings that place visual craft before positioning.

---

## 9. Opening instruction

> Berthier — open Operation HAUSSMANN genesis in `aDNA.aDNA`.
>
> Execute Phase A. Read the host vault, extract the campaign and mission schema by example, and register every pattern in `Webforge.aDNA`. Ingest the VITRUVIUS instrument as assessment doctrine.
>
> Halt at Gate A and report: schema extracted, patterns registered, dependencies mapped, gaps listed.
>
> Do not begin assessment until I confirm.

---

*Directive v1.0. Issued 16 August 2026. Revise after Gate A.*
