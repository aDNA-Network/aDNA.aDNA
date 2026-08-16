# OPERATION VITRUVIUS
## Category Review Instrument — Open-Source Agent / Open-Standard Network Websites

**Version** 1.0 · **Date** 16 August 2026 · **Classification** Working doctrine, MIT-releasable
**Primary target** `https://adna.network`
**Instrument type** Reusable. Any site in the category can be scored with this document and nothing else.

---

## 0. How to use this document

This is a **review instrument**, not an essay. It has four working parts:

| Part | Sections | Use |
|---|---|---|
| **Reference cohort** | §1–2 | What "good" looks like in this category, and which archetype the target belongs to |
| **Doctrine** | §3–4 | Twelve dimensions, each with principles, checks, failure modes, and 0–5 scoring anchors |
| **Protocol** | §5–7 | How to actually run the review: evidence collection, scoring, severity, anti-patterns |
| **Application** | §8–10 | First-pass findings on aDNA.network + the campaign structure to act on them |

**Evidence discipline.** Every finding recorded under this instrument carries a provenance tag:
`[D]` directly observed (page fetched/rendered and inspected) · `[I]` inferred from adjacent evidence · `[R]` reported by a third party · `[A]` assumption, unverified.
An unlabelled finding is inadmissible. A review that cannot survive this labelling is a review that was performed on vibes.

**Scope caveat for v1.0.** The exemplar observations in §2 are drawn from rendered page content and public repositories, not from browser-rendered visual inspection at multiple viewports. Visual-craft judgments in §2 are therefore `[I]` unless marked otherwise. Phase 0 of the campaign (§10) closes this gap.

---

## 1. The category and its archetypes

Sites in this category are not marketing sites and they are not documentation sites. They are **recruitment instruments for a technical commons**. Their job is to convert a skeptical engineer, in a single session, from *unaware* → *oriented* → *running code* → *contributing*. Everything else on the page is overhead.

Five archetypes exist. They have materially different success criteria, and misidentifying your own archetype is the single most common structural error in the category.

### Archetype A — Framework
*Examples: Mastra, Pydantic AI, LangGraph*
Sells a library. Success = `npm install` / `pip install` and a working agent in under ten minutes. Homepage is dominated by code. Docs are the product. Community is a support function.
**Primary metric:** time-to-first-success (TTFS).

### Archetype B — Protocol / Standard
*Examples: Model Context Protocol, agentskills.io*
Sells an agreement between parties. Success = independent implementations by people who don't work for you. Homepage must serve four audiences at once (implementers, adopters, spec contributors, the curious). Governance is not a footer link — it is a load-bearing product surface.
**Primary metric:** count of independent, non-founder implementations.

### Archetype C — Platform / Infrastructure
*Examples: E2B, Modal, Browserbase*
Sells capacity. Success = signup and first billable call. Open source is a trust and distribution vector, not the revenue path. Trust surface (status page, security, SOC2, uptime) is disproportionately important.
**Primary metric:** signup → first successful API call.

### Archetype D — Personal-agent community
*Examples: OpenClaw, Hermes Agent*
Sells belonging and capability simultaneously. Success = installs that become daily habit, plus a plugin/skill marketplace with third-party supply. Culture (lore, mascot, in-jokes, Discord) is functional infrastructure, not decoration.
**Primary metric:** third-party extension supply and 30-day retention.

### Archetype E — Public-good / mission network
*Examples: research commons, foundation-hosted scientific networks*
Sells participation in a cause. Success = credible institutions and named humans attaching their reputation to it. Proof-of-realness dominates; overclaim is fatal in a way it is not for A–D, because the audience includes funders, clinicians, and patient communities who have been burned before.
**Primary metric:** named, verifiable third-party adoption.

> **Target classification.** `aDNA.network` is a **B×E hybrid with a strong A-shaped onboarding surface** — an open standard (B) carrying a public-good mission (E), delivered to developers through a clone-and-run workflow (A). This is the hardest configuration in the category, because B and E pull toward governance and mission narrative while A pulls toward code-first minimalism. Every review finding must be adjudicated against **which of the three jobs the page is doing**. A page that fails as A may be succeeding as E, and the reviewer must say which.

---

## 2. Reference cohort — what to take from each

Ten sites, with the specific transferable mechanism each one demonstrates. This is a parts catalogue, not a leaderboard.

| # | Site | Archetype | The mechanism worth stealing |
|---|---|---|---|
| 1 | **Nous Research / Hermes Agent** — nousresearch.com | D | **Research-lab register.** Typographic restraint and a visible research output stream buy credibility that no amount of marketing copy can. The lab's model work legitimises the agent, and the site makes that lineage obvious. |
| 2 | **Mastra** — mastra.ai | A | **The complete developer surface.** `[D]` Framework + docs + templates + course + two books + weekly podcast + workshops + research page + blog + changelog + Discord + `llms.txt` + status page + trust page. Note especially: a *"Copy agent prompt"* control on the homepage, and named customer outcomes with hard numbers rather than logo walls. |
| 3 | **Model Context Protocol** — modelcontextprotocol.io | B | **Governance as a first-class product surface.** `[D]` The community section ships a contributor ladder, working-group and interest-group charters with a reusable charter template, an antitrust policy, a contributor communication strategy, design principles, and a numbered enhancement-proposal process (SEPs) with conformance-test gates. Foundation-hosted. This is the reference standard for Archetype B and the closest structural analogue to aDNA. |
| 4 | **E2B** — e2b.dev | C | **Terminal-first hero.** Monospace, near-zero chrome, the primitive demonstrated rather than described. Also: quantified scale claims used as the trust device instead of adjectives. |
| 5 | **Letta** — letta.com | A/C | **Research lineage made navigable.** Papers and the academic origin story treated as primary navigation, not an "about" afterthought. Correct move for any project whose credibility rests on ideas rather than adoption numbers. |
| 6 | **OpenHands / All Hands AI** — all-hands.dev | A | **Sober capability claims.** Benchmark-anchored positioning with the evaluation methodology linked. Resists the hype register that dominates the category. |
| 7 | **Goose (Block)** — block.github.io/goose | A/D | **Corporate-backed OSS without corporate bloat.** Docs-site discipline; the extension ecosystem is the front door; no enterprise-funnel intrusion into the developer path. |
| 8 | **Pydantic AI** — ai.pydantic.dev | A | **Documentation-as-homepage.** Zero marketing surface. The landing page *is* the getting-started page. Highest-signal option when your audience is senior engineers who resent being sold to. |
| 9 | **Browser Use** — browser-use.com | A | **One idea, one demo.** Single-concept landing page carried by a demo loop. Discipline in what is *excluded*. |
| 10 | **OpenClaw** — openclaw.ai / github.com/openclaw/openclaw | D | **Community architecture at scale.** `[R]` Foundation-governed non-profit stewardship after founder departure; a skill/plugin marketplace (ClawHub) with a plugin SDK as the designated place for new capability; explicit contribution guidelines that welcome AI-assisted PRs; Discord as the documented support channel. Study the *social* architecture, not the visual design. |

### 2.1 Cross-cohort patterns — the category's de facto standard kit

Observed across the cohort. Absence of any item below is a finding, not a preference.

**Machine-legibility layer**
- `llms.txt` at root (Mastra `[D]`, MCP `[D]`) — a curated, link-annotated map of the site for LLM consumption
- `.md` twin for every documentation URL (MCP `[D]` — every doc path resolves with a `.md` suffix)
- A one-click "copy this page / prompt as context" affordance (Mastra `[D]`)
- Machine-readable registry or catalogue endpoint (MCP registry `[D]`)

**Trust layer**
- Separate security policy and vulnerability-disclosure path
- Status page, where anything is hosted
- License stated on the homepage, not buried
- Named humans with verifiable identities

**Contribution layer**
- CONTRIBUTING.md linked from the site, not only the repo
- Issue templates and a designated "questions go here" channel distinct from bug reports
- A published ladder from first contribution to maintainer
- An enhancement-proposal process with numbers, states, and archives

**Learning layer**
- Quickstart separated from tutorial separated from reference separated from explanation (Diátaxis discipline)
- Templates/examples gallery as a distinct navigation item
- Changelog with dates, in reverse chronological order, on its own URL

**Proof layer**
- Adoption stated as specific outcomes with numbers and named parties, or stated not at all
- Benchmarks with linked methodology
- Star/contributor counts shown live from the API, never hardcoded

---

## 3. The twelve dimensions

Each dimension carries: **intent**, **checks** (the actual work), **failure modes**, and **anchors** (0–5 scoring). Weights in §5.

Dimensions are numbered D1–D12 and map onto the target's existing decade backbone (credibility-integrity, navigation & docs, agentic + community, visual craft) as shown in §9.

---

### D1 · Positioning and thirty-second legibility

**Intent.** A qualified stranger lands cold. In thirty seconds they must be able to state, unprompted and correctly: what this is, who it is for, what it is *not*, and what it costs them to try it.

**Checks**
1. Squint test at 1440px, 768px, 390px: what is legible at 3 seconds?
2. Write the hero's implied one-sentence definition. Does it contain a category noun a stranger already knows?
3. Count the abstractions introduced above the fold. More than two proprietary terms before a concrete example is a defect.
4. Is there a stated *negative* space — "this is not X" — anywhere in the first screen and a half?
5. Is the audience named explicitly, or must it be inferred?
6. Does the primary CTA match the primary archetype job? (A → run code. B → read spec / implement. E → see the work.)
7. Test with three cold readers from adjacent fields. Record their one-sentence summary verbatim. Do not correct them.
8. Metaphor audit: does the central metaphor do explanatory work, or does it require its own explanation?

**Failure modes**
- *Nested abstraction* — a novel term defined by two other novel terms.
- *Mission-first, mechanism-never* — the reader knows why it matters and still cannot say what it is.
- *Audience sprawl* — six audience links above the fold means none of them was chosen.
- *Metaphor debt* — a beautiful analogy the reader must decode before the product makes sense.

**Anchors**
| Score | Condition |
|---|---|
| 0 | Cold readers cannot say what it is |
| 2 | Readers grasp the mission but not the mechanism, or vice versa |
| 3 | Correct summary, but only after scrolling past the fold |
| 4 | Correct summary in ~30s at all three viewports; audience explicit |
| 5 | As 4, plus the reader can state what it is *not* and correctly name a use case not shown on the page |

---

### D2 · Information architecture and navigation

**Intent.** The site must be navigable by a first-time visitor, a returning implementer, and a crawler, using different strategies, without a sitemap.

**Checks**
1. Full page inventory. Count URLs. Classify each: marketing / concept / tutorial / reference / governance / registry / meta.
2. Primary nav item count. Seven or more top-level items indicates unresolved IA.
3. Is there a "More" overflow in the primary nav? Overflow is a symptom, not a solution — it means the taxonomy lost a fight.
4. Depth test: from home, can the user reach any of the ten highest-value pages in ≤2 clicks? List failures.
5. Orphan detection: pages reachable only by search or direct link.
6. Breadcrumbs and "you are here" state on every deep page.
7. Search: present? Scoped? Keyboard-triggerable (`/` or `⌘K`)? Does it index reference content?
8. Cross-linking density between concept ↔ tutorial ↔ reference for the same subject.
9. Registry/catalogue scalability: does the browse experience survive 10× the current item count? Filters, facets, sort, pagination, and a stable per-item URL scheme.
10. URL hygiene: lowercase consistency, trailing-slash consistency, no mixed case in path segments, no dead redirect chains.

**Failure modes**
- *Two navigations disagreeing* — header taxonomy ≠ footer taxonomy ≠ sidebar taxonomy.
- *Catalogue sprawl* — a registry that was designed for 15 items and now holds 74.
- *Audience-segment pages as IA* — "for researchers / educators / enterprise / startups" used as a substitute for deciding what the product is.
- *Mixed-case URLs* — a permanent source of 404s and duplicate-content penalties.

**Anchors**
| Score | Condition |
|---|---|
| 0 | No coherent taxonomy; orphans common |
| 2 | Navigable by the initiated only; overflow menus carrying real weight |
| 3 | Coherent but deep; several high-value pages ≥3 clicks |
| 4 | ≤2 clicks to all high-value pages; search present and scoped; no orphans |
| 5 | As 4, plus catalogue surfaces are faceted and demonstrably scale; URL scheme is machine-predictable |

---

### D3 · Onboarding and time-to-first-success

**Intent.** TTFS is the category's hard currency. Measure it in minutes, on a clean machine, by a human who did not build the thing.

**Checks**
1. Run the quickstart on a clean VM. Stopwatch. Record every point of friction, every unstated prerequisite, every command that fails.
2. Define "first success" explicitly and publish it. ("You have a running agent that answers a question" beats "installation complete".)
3. Prerequisite honesty: are accounts, API keys, paid credits, or specific tooling required and stated *before* the reader begins?
4. Copy-to-clipboard on every command block. Verify the copied string is the executable string (no leading `$`, no smart quotes, no zero-width characters).
5. Failure paths: what does the doc say when the command fails? A troubleshooting section is mandatory, not optional.
6. Escape hatches at each step — where to ask, where to file, where to read more.
7. Is there a zero-install path (hosted playground, sandbox, or read-only tour) for evaluators who will not clone anything on first contact?
8. Reversibility: is uninstall/cleanup documented? Its absence measurably suppresses trial among cautious engineers.
9. Does the quickstart's first command commit the user to a large, opaque action? (A `git clone` of an unfamiliar workspace plus an agent invocation is a *large* ask on first contact.)

**Failure modes**
- *Hello-world that isn't* — the demo succeeds but demonstrates nothing the reader wanted.
- *Prerequisite ambush* — the API key requirement appears at step 4.
- *Single-path onboarding* — one workflow, no accommodation for evaluators, integrators, or the merely curious.
- *Uncosted first move* — asking for a clone-and-run before the reader has seen anything work.

**Anchors**
| Score | Condition |
|---|---|
| 0 | Quickstart does not complete on a clean machine |
| 2 | Completes with undocumented workarounds; TTFS > 30 min |
| 3 | Completes as written; TTFS 10–30 min; troubleshooting thin |
| 4 | TTFS < 10 min; prerequisites stated up front; troubleshooting and escape hatches present |
| 5 | As 4, plus a zero-install evaluation path and a documented, explicit definition of first success |

---

### D4 · Documentation system

**Intent.** Four distinct user needs — learning, doing, referencing, understanding — require four distinct document types. Mixing them is the most common and most expensive documentation failure.

**Checks (Diátaxis discipline)**
1. Classify every documentation page as **tutorial** (learning-oriented), **how-to** (task-oriented), **reference** (information-oriented), or **explanation** (understanding-oriented). Flag every hybrid.
2. Is the classification visible in the IA, or only in the author's head?
3. Reference completeness: every public entity, field, type, and command documented, with types, defaults, and constraints.
4. Are examples runnable and tested in CI? Untested examples rot within one release.
5. Versioning: is documentation versioned alongside the spec? Can a reader reach the docs for the version they are running?
6. Migration guides for every breaking version boundary.
7. Glossary: single canonical definition per term, linked from first use across the corpus.
8. Search quality on reference content specifically.
9. Freshness signals: last-updated date per page, and a visible relationship to the changelog.
10. Contribution path from any doc page ("edit this page" → repo).

**Failure modes**
- *Tutorial/reference fusion* — a getting-started page that becomes an API listing halfway through.
- *Explanation exile* — conceptual material scattered across blog posts with no canonical home.
- *Spec drift* — the specification and the tutorials describe different systems.
- *Undated pages* — the reader cannot tell what is current.

**Anchors**
| Score | Condition |
|---|---|
| 0 | Documentation is a README |
| 2 | Substantial docs, undifferentiated types, gaps in reference |
| 3 | Clear types, complete reference, versioning weak |
| 4 | Four types cleanly separated in the IA; versioned; migrations documented; examples tested |
| 5 | As 4, plus per-page freshness, canonical glossary linkage, and an "edit this page" path on every page |

---

### D5 · Visual design system and craft

**Intent.** In this category, visual craft is read as a proxy for engineering care. It is not decoration; it is a competence signal.

**Checks**
1. Is there a published design system page? Does the live site actually conform to it? Sample 20 components and check.
2. Token audit: colour, spacing, radius, shadow, motion. Count hardcoded values that bypass tokens.
3. Type scale: how many distinct sizes and weights are in use? More than 7 sizes suggests no scale.
4. Vertical rhythm and spacing consistency across page templates.
5. Grid and max-measure: is body text held to 60–80 characters?
6. Code block treatment — the most-read component in the category. Font, size, line height, syntax theme, contrast, overflow behaviour, copy affordance, filename/label header.
7. Dark/light parity. If only one mode exists, is that a decision or an omission? Check `prefers-color-scheme` handling.
8. Illustration and hero art: does the aesthetic register match the audience's expectation for the archetype? Distinctive is good; *inconsistent* is not. A single strong visual voice applied everywhere beats a stronger voice applied once.
9. Empty, loading, and error states designed — not defaults.
10. Responsive integrity at 390 / 768 / 1024 / 1440 / 1920. Screenshot every key template at every breakpoint.
11. Motion: purposeful, respects `prefers-reduced-motion`, no layout shift.
12. Iconography consistency — one family, one weight, one metaphor system.

**Failure modes**
- *Design system as document, not as constraint* — published but unenforced.
- *Hero-art singularity* — one beautiful illustration and nothing else carries the style.
- *Diagram inconsistency* — hand-built diagrams that each invent their own visual language.
- *Aesthetic/audience mismatch* — a register that undercuts the institutional credibility the mission requires.

**Anchors**
| Score | Condition |
|---|---|
| 0 | Template default, no system |
| 2 | Coherent surface, no enforced tokens, drift visible across templates |
| 3 | Tokenised system, mostly conformant, some drift |
| 4 | Published system, enforced in build, responsive integrity verified, states designed |
| 5 | As 4, plus a distinctive and *consistently applied* visual voice, and diagram/illustration guidelines that any contributor can follow |

---

### D6 · Content and voice

**Intent.** One voice, one register, no filler. In a project with agent-authored content, voice consistency is a governance problem as much as an editorial one.

**Checks**
1. Read the entire corpus aloud in one sitting. Mark every register break.
2. Sentence-length distribution and reading-grade level on the top 20 pages.
3. Jargon density per page, with a first-use-definition check against the glossary.
4. Claim audit: extract every factual claim on the site. Classify each as **verified** (linked evidence), **verifiable** (checkable but unlinked), or **unsupported**. Publish the count.
5. Tense discipline: is anything aspirational written in the present tense? This is the cardinal sin of pre-launch sites.
6. Heading quality: do headings survive being read alone as a table of contents?
7. Microcopy: buttons, form labels, error text, empty states, 404 page.
8. Do code comments, CLI output, and error messages share the site's voice? They are content too.
9. If any content is agent-authored: is that disclosed, and is there a human ratification record?

**Failure modes**
- *Register oscillation* — poetic mission prose adjacent to terse spec prose with no transition.
- *Future perfect* — "the network federates" when one node federates.
- *Undefined coinage* — proprietary vocabulary used before it is defined.
- *Grandiosity* — claims whose scale the reader can immediately check and disbelieve.

**Anchors**
| Score | Condition |
|---|---|
| 0 | Inconsistent, unedited |
| 2 | Competent, register breaks common, unsupported claims present |
| 3 | Consistent voice, claims mostly supportable, some aspirational tense |
| 4 | Single voice throughout; every claim verified or verifiable; tense discipline enforced |
| 5 | As 4, plus a published voice guide, a claim register maintained as an artifact, and agent-authorship disclosure |

---

### D7 · Proof, credibility, and the trust surface

**Intent.** For Archetype B×E, credibility *is* the product. The reader's operative question is: "is this a real thing that other people use, or one person's beautiful system?"

**Checks**
1. Named humans: who is behind this? Real names, real affiliations, linked profiles. Anonymity is a severe penalty in E.
2. Third-party adoption: at least one named party who is not the founder or a founder-controlled entity, with a linked artifact (repo, publication, deployment).
3. Distinguish *founder-operated* projects from *independent adopters* on the page. Conflating them is the fastest way to lose a technical reader who checks.
4. Institutional relationships: stated at their true strength. "In conversation with" is not "partnered with". Every named institution must have consented and be verifiable.
5. Live metrics pulled from source (GitHub API), never hardcoded.
6. Activity signals: recent commits, recent releases, dated changelog, issue response time.
7. Security: SECURITY.md, disclosure path, and a security page.
8. Licensing: stated, consistent across site and repo, correct.
9. Bus-factor honesty: is the maintainer set visible?
10. Testimonial provenance: every quote attributable to a real, findable person. **Fabricated or unattributable testimonials are a category-killing defect** — see §7.1.
11. Does the site distinguish what exists from what is planned, in a way a hostile reader would accept?

**Failure modes**
- *Logo-wall inflation* — institutional marks implying endorsement that does not exist.
- *Self-federation* — a network whose nodes are all controlled by one operator, presented as a network.
- *Vanity counts* — large numbers that describe the founder's own output.
- *Silent staleness* — no dated activity anywhere on the site.

**Anchors**
| Score | Condition |
|---|---|
| 0 | Anonymous, unverifiable, or overclaimed |
| 2 | Named humans, no independent adoption, claims at strength ceiling |
| 3 | Named humans, some verifiable third-party use, activity visible |
| 4 | Multiple independent adopters with linked artifacts; live metrics; security path; claims at or below true strength |
| 5 | As 4, plus an explicit "what exists vs. what is planned" surface and named external governance participants |

---

### D8 · Community architecture and governance legibility

**Intent.** A reader deciding whether to invest their effort needs to know how decisions are made, how they can gain influence, and what happens if the founder leaves. MCP is the reference implementation here.

**Checks**
1. Contributor ladder: published, with explicit criteria for advancement at each rung and named holders of each role.
2. Decision process: how does a change to the standard actually get made? Is there a numbered proposal process with states (draft/review/accepted/final/rejected) and a public archive?
3. Where do proposals get discussed? Named venue, public archive, meeting cadence.
4. Working-group / interest-group structure, with charters and a charter template.
5. Conflict and conduct: Code of Conduct, enforcement path, named enforcers.
6. Legal/structural posture: who owns the trademark, the domain, the repo? Is there a foundation path, and is it stated?
7. Succession: what happens if the founder stops? OpenClaw's foundation transition is the reference precedent `[R]`.
8. Synchronous surface: is there a real-time channel (Discord/Slack/Matrix/forum), is it linked prominently, and is it *alive*? Check last-message recency before citing it.
9. Meeting cadence and public notes.
10. Recognition: how is contribution acknowledged? Contributor list, attribution convention, changelog credit.
11. **Honesty about emptiness.** A young community stating plainly that surfaces are not built yet is *stronger* than a young community implying activity. Score the honesty, not the headcount.
12. Agent participation: if agents contribute, is their status, authority, and ratification requirement documented? This is novel territory and a genuine differentiator when handled explicitly.

**Failure modes**
- *Community theatre* — a page describing a community that has no members and does not say so.
- *Ladder without rungs* — levels defined, no one occupying them, no criteria for entry.
- *Governance as prose* — described in paragraphs rather than instantiated as process artifacts.
- *Dead channel prominently linked* — worse than no channel.
- *Bus factor of one, undisclosed.*

**Anchors**
| Score | Condition |
|---|---|
| 0 | No governance surface |
| 2 | Governance described in prose; no process artifacts; no venue |
| 3 | Ladder + contribution standards + CoC published; venue exists; process informal |
| 4 | Numbered proposal process with public archive; chartered groups; named role-holders; live venue |
| 5 | As 4, plus succession/foundation posture stated, meeting cadence with public notes, and external (non-founder) participants holding real roles |

---

### D9 · The contribution funnel

**Intent.** D8 describes the ladder. D9 measures whether anyone can actually climb the first rung. These are different failures.

**Checks**
1. Time from "I want to help" to "my PR is open": run it end to end.
2. `good-first-issue` labelled and populated? Count open, unassigned, genuinely approachable issues.
3. CONTRIBUTING.md: linked from the *site*, not only the repo. Does it cover dev environment setup, test running, PR conventions, and review expectations?
4. Development environment: one command to a working local build? Is it tested on macOS, Linux, Windows/WSL?
5. Issue templates for bug / feature / question, with the question path routed away from the issue tracker.
6. Review responsiveness: median time-to-first-response on issues and PRs over the last 90 days. Publish the number.
7. Non-code contribution paths: docs, translation, design, examples, testing, triage — each with a named entry point.
8. The first-contribution experience: is a newcomer's first PR likely to be merged, or to be met with silence?
9. Recognition loop: does a merged contribution produce visible acknowledgement?
10. AI-assisted contribution policy: stated? OpenClaw explicitly welcomes AI-assisted PRs `[R]`; in this category, silence on the question is itself a signal.

**Anchors**
| Score | Condition |
|---|---|
| 0 | No path; PRs unwelcome or unanswered |
| 2 | Repo accepts PRs; no guidance; no labelled entry points |
| 3 | CONTRIBUTING + templates + some labelled issues; response time unmeasured |
| 4 | One-command dev setup; populated good-first-issues; median first response < 72h; non-code paths named |
| 5 | As 4, plus published responsiveness metrics, a recognition loop, and a stated AI-assisted-contribution policy |

---

### D10 · Machine legibility and agent-readiness

**Intent.** In 2026 a substantial and rising share of first contact with a technical site is made by an agent acting for a human. The site has two audiences and one of them does not have eyes. For a project whose *thesis* is agent-navigable context, this dimension is not merely important — **failure here is a refutation of the product claim.**

**Checks**
1. `/llms.txt` present, curated, and current. Not a dump — an annotated map with descriptions per link.
2. `/llms-full.txt` or equivalent full-corpus artifact for deep ingestion.
3. Markdown twins: does every doc URL resolve as `.md`? (MCP does this `[D]`.) If not, is there content negotiation on `Accept: text/markdown`?
4. Clean semantic HTML: does the page survive text extraction with structure intact? Test with a fetcher and read the output as an agent would.
5. Structured data: JSON-LD for `SoftwareSourceCode`, `TechArticle`, `Organization`, `Dataset` where applicable.
6. `robots.txt` posture toward AI crawlers — stated deliberately, either way.
7. `sitemap.xml`, complete and current.
8. RSS/Atom for changelog and blog.
9. Machine-readable registry: is the catalogue available as JSON/API, not only as HTML?
10. Canonical machine entry point: is there a single documented URL an agent should read first, and is it advertised on the homepage?
11. A "copy as context" / "copy agent prompt" affordance on high-value pages (Mastra `[D]`).
12. MCP server: does the project expose one for its own docs/registry? For a context-standard project this is close to mandatory.
13. Stable identifiers: do entities have permanent, resolvable URIs with a documented scheme?
14. Does the site's own content pass its own conformance standard? A standard whose reference site does not conform is an argument against the standard.

**Failure modes**
- *JS-dependent content* — the human sees it; the agent gets an empty shell.
- *llms.txt as afterthought* — stale, uncurated, or a raw sitemap dump.
- *HTML-only registry* — a catalogue agents cannot query.
- *Self-exemption* — the flagship instance of the standard does not follow the standard.

**Anchors**
| Score | Condition |
|---|---|
| 0 | JS-only rendering; no machine artifacts |
| 2 | Server-rendered HTML; sitemap only |
| 3 | llms.txt + sitemap + RSS + clean extraction |
| 4 | As 3, plus markdown twins, JSON-LD, machine-readable registry, documented agent entry point |
| 5 | As 4, plus an MCP server over the corpus, copy-as-context affordances, stable resolvable URIs, and demonstrated self-conformance |

---

### D11 · Accessibility

**Intent.** WCAG 2.2 AA as the floor. In a public-good project serving patient and clinician communities, this is a mission obligation, not a compliance checkbox — and it will be judged as such by exactly the institutions whose endorsement matters most.

**Checks**
1. Automated pass (axe / Lighthouse / pa11y) on every template. Zero criticals is the bar; automation catches roughly a third of real issues.
2. Keyboard-only traversal of every primary flow. Focus visible at all times, no traps, logical order.
3. Skip-to-content link present and functional.
4. Contrast: 4.5:1 body, 3:1 large text and UI components — **including code blocks, syntax highlighting, diagram strokes, and muted metadata text**, which are the usual failure sites.
5. Screen-reader pass on home, quickstart, one reference page, and the registry (VoiceOver + NVDA).
6. Heading hierarchy: one `h1`, no skipped levels, headings used for structure not styling.
7. **Complex graphics**: every diagram, graph, and data visualisation needs an accessible equivalent — a text alternative *and*, for interactive graphs, a keyboard-navigable twin. Providing a linked navigable twin for a graph visualisation is the correct pattern; verify it is genuinely equivalent, not a partial listing.
8. Images: meaningful alt text; decorative images marked `alt=""`.
9. Forms: labels, error identification, error suggestion, no reliance on colour alone.
10. Motion: `prefers-reduced-motion` respected; no auto-playing motion above threshold.
11. Zoom to 200% and 400%: no horizontal scroll, no content loss.
12. Language attributes set; direction handled.
13. Target sizes ≥24×24 CSS px (WCAG 2.2), ≥44px on touch.
14. Published accessibility statement with known limitations and a contact path.

**Anchors**
| Score | Condition |
|---|---|
| 0 | Automated criticals; keyboard traversal broken |
| 2 | Automated clean; manual failures in key flows |
| 3 | AA on primary templates; complex graphics partially covered |
| 4 | Verified AA across all templates including graphics and registry; screen-reader tested |
| 5 | As 4, plus published statement, tested with assistive-tech users, and a11y checks in CI |

---

### D12 · Performance, resilience, and operations

**Intent.** Speed is a credibility signal in a developer audience. Operational visibility is a trust signal in a network.

**Checks**
1. Core Web Vitals at p75, mobile and desktop, on the five highest-traffic templates: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1.
2. Payload budgets: total transfer, JS transfer, font count and weight, image formats (AVIF/WebP), lazy-loading discipline.
3. Third-party script inventory. Every one justified or removed.
4. Registry/catalogue page weight at scale — the page that will break first as the network grows.
5. Build determinism and deploy pipeline; preview deployments per PR.
6. Uptime monitoring and a public status page.
7. 404 handling: useful, navigable, search-enabled.
8. Redirect map for every URL ever published. Broken external links to your docs are permanent reputation damage.
9. Link rot: crawl all internal and external links. Zero internal 404s is the bar.
10. Analytics: privacy-respecting, and actually consulted.
11. Security headers: CSP, HSTS, referrer policy, permissions policy.
12. Offline/degraded behaviour: does the site work with JS disabled? For a documentation-heavy site the core content should.

**Anchors**
| Score | Condition |
|---|---|
| 0 | Fails CWV; broken links common |
| 2 | Passes desktop, fails mobile; no monitoring |
| 3 | CWV green at p75; no internal 404s |
| 4 | As 3, plus budgets enforced in CI, redirect map maintained, security headers set |
| 5 | As 4, plus public status page, per-PR previews, and link-checking in CI |

---

## 4. Dimension interaction effects

Findings must be adjudicated across dimensions, not scored in isolation. The important interactions:

| Interaction | Effect |
|---|---|
| **D1 × D6** | Weak positioning is usually a content problem masquerading as a design problem. Fix the sentence before the layout. |
| **D3 × D7** | A high-friction first move (large clone, agent invocation) requires *more* credibility to justify. If D7 is weak, D3 friction is fatal. |
| **D7 × D8** | Community claims are credibility claims. An overstated community damages the same account as an overstated partnership. |
| **D10 × D1** | For a context/agent standard, machine legibility *is* positioning. Demonstrated self-conformance is the strongest possible proof-of-thesis. |
| **D5 × D11** | Distinctive aesthetics frequently create contrast failures. Audit them together or you will ship a beautiful, non-compliant site. |
| **D2 × D12** | Catalogue growth breaks IA and performance simultaneously. Test both at 10× projected scale. |
| **D8 × D9** | A ladder no one can climb is worse than no ladder — it converts an honest "early project" into a broken promise. |

---

## 5. Scoring model

**Weights** — set for the B×E hybrid archetype. Re-weight explicitly when applying this instrument to a different archetype, and record the re-weighting.

| Dimension | Weight (B×E) | Weight (A) | Weight (D) |
|---|---|---|---|
| D1 Positioning | 12 | 12 | 12 |
| D2 IA & navigation | 8 | 8 | 8 |
| D3 Onboarding / TTFS | 12 | 18 | 15 |
| D4 Documentation | 12 | 15 | 8 |
| D5 Visual craft | 8 | 6 | 8 |
| D6 Content & voice | 8 | 5 | 8 |
| **D7 Proof & credibility** | **14** | 8 | 8 |
| **D8 Community & governance** | **10** | 5 | 14 |
| D9 Contribution funnel | 6 | 6 | 10 |
| **D10 Machine legibility** | **6** | 10 | 5 |
| D11 Accessibility | 2 | 4 | 2 |
| D12 Performance & ops | 2 | 3 | 2 |
| | **100** | **100** | **100** |

> D11 and D12 carry low *weights* but binary *gates*: any WCAG AA critical or any CWV red at p75 blocks phase sign-off regardless of weighted score. Low weight ≠ optional.

**Composite** = Σ (dimension score ÷ 5 × weight). Report as a percentage with the per-dimension breakdown always shown alongside. A composite reported without its breakdown is a lie by compression.

**Severity taxonomy for individual findings**

| Level | Definition | Response |
|---|---|---|
| 🔴 **S1 Critical** | Falsifiable inaccuracy, credibility risk, legal/consent exposure, a11y critical, or a broken primary flow | Fix before any promotion of the site |
| 🟠 **S2 Major** | Materially suppresses conversion, comprehension, or contribution | Fix within the current phase |
| 🟡 **S3 Moderate** | Degrades quality; visible to attentive users | Schedule within the campaign |
| 🟢 **S4 Minor** | Polish, consistency, nice-to-have | Backlog |

Every finding record carries: `ID · Dimension · Severity · Provenance tag · Location (URL + selector) · Observation · Why it matters · Recommendation · Effort (S/M/L) · Owner · Verification method`.

---

## 6. Evidence collection protocol

Run in this order. Do not begin scoring until Steps 1–4 are complete.

**Step 1 — Inventory.** Crawl the site. Produce a CSV: URL, title, template, word count, last-modified, inbound internal links, outbound links, depth from home, classification. This is the base artifact for the entire review.

**Step 2 — Capture.** Screenshot every distinct template at 390 / 768 / 1024 / 1440 px, in light and dark mode. Archive to a dated directory. Visual findings without captures are inadmissible.

**Step 3 — Automated sweep.** Lighthouse (all categories), axe, pa11y, link checker, HTML validator, security-header scan, structured-data validator. Retain raw output.

**Step 4 — Machine-eye pass.** Fetch every key page as an agent would (text extraction, no JS). Read the extracted output. Note every place where meaning is lost. Fetch `llms.txt`, `sitemap.xml`, `robots.txt`, `rss.xml`, any `.md` twins, and any registry API.

**Step 5 — Cold-reader panel.** Minimum five participants across three profiles: (a) senior engineer unfamiliar with the domain, (b) domain expert unfamiliar with agents, (c) prospective contributor. Task each: *"You have five minutes. Tell me what this is, who it is for, and whether you would try it."* Record verbatim. Do not intervene, do not clarify, do not defend.

**Step 6 — TTFS run.** Clean VM. Stopwatch. Screen recording. One operator who did not build the system. Log every friction event with a timestamp.

**Step 7 — Contribution run.** Attempt a real first contribution as an outsider. Time every stage. Do not use privileged knowledge or access.

**Step 8 — Claim audit.** Extract every factual and quantitative claim on the site into a register. Verify each. Classify: verified / verifiable / unsupported / **false**. Any entry in the last column is S1.

**Step 9 — Comparative teardown.** Score two cohort exemplars from §2 on the same instrument — one same-archetype, one adjacent. Relative position matters more than absolute score.

**Step 10 — Scoring session.** Two reviewers score independently, then reconcile. Record disagreements; unresolved disagreement is itself a finding about ambiguity in the site.

---

## 7. Category anti-patterns

### 7.1 The ecosystem-hijack problem
`[D]` Both Hermes Agent and OpenClaw have spawned large numbers of SEO clone sites — parallel domains reproducing project descriptions with fabricated testimonials, invented attribution, and inflated metrics. Several outrank or sit adjacent to official properties in search results.

**Implications for any project in this category:**
- Establish the canonical domain early and assert it: `canonical` tags, consistent `og:site_name`, JSON-LD `Organization` with `sameAs`, and the domain stated in the repository README.
- Register defensive domains and the obvious social handles before traction, not after.
- Publish an "official properties" page listing every legitimate domain, handle, and repo. Link it from the footer.
- Trademark posture: decide early who owns the name.
- Monitor for clones. Their existence is a growth signal; their unchecked existence is a security and credibility liability.
- **Never** run the pattern yourself. Fabricated testimonials are the clone-site tell. Any real project that uses unattributable quotes has voluntarily adopted the visual signature of fraud.

### 7.2 Community theatre
Describing participation structures that have no participants, without saying so. The correction is not to delete the structure — it is to date it and state its occupancy honestly. "The ladder exists; rungs 2 and 3 are currently unoccupied" is credible. Silence is not.

### 7.3 Self-federation presented as network
A network diagram whose every node is operated by the same person. Legitimate as a demonstration of the architecture; illegitimate as evidence of adoption. The distinction must be made *on the page*, in the reader's line of sight, not in a footnote. A hostile reader will check, and finding it themselves costs you the account.

### 7.4 Catalogue sprawl
Registries designed for a dozen items and populated with dozens more. Symptoms: no facets, no sort, inconsistent per-item quality, entries in "genesis" or "pending" state shown alongside mature ones with no visual distinction, and a growing tail of near-empty entries. **Quantity of entries is not evidence of network health; it is evidence of a low bar for entry.** A registry needs an admission standard, a lifecycle model, and a visible quality tier.

### 7.5 Aspirational present tense
The most common credibility leak in pre-launch infrastructure projects. Enforce mechanically: every present-tense claim about network behaviour must correspond to something a reader can verify today. Everything else moves to a clearly-labelled roadmap surface.

### 7.6 The abstraction ladder
Defining a novel term with two other novel terms. Rule: no more than one new term per paragraph, and every new term earns a concrete example within two sentences.

### 7.7 Audience-segment IA
Shipping `/researchers`, `/educators`, `/enterprise`, `/startups`, `/adopters` as a substitute for deciding what the thing is. These pages are useful *after* positioning is resolved, as targeted landing pages for campaigns. As primary navigation they are an admission that the core proposition was never narrowed.

### 7.8 Self-exemption
The reference implementation of a standard failing to follow the standard. For a context-graph standard: if the site's own content is not published as conformant, navigable context, the strongest available proof is being left on the table and the strongest available criticism is being handed to opponents.

---

## 8. First-pass findings — aDNA.network

**Evidence base for this pass:** homepage and `/community`, fetched 16 Aug 2026, as server-rendered text. `[D]` where directly observed. **No visual, responsive, accessibility, or performance inspection has been performed.** This section is a starting hypothesis set for Phase 1, not a review.

### 8.1 What is working

| # | Observation | Dimension |
|---|---|---|
| 1 | Skip-to-content link present `[D]` — a11y basics are not being ignored | D11 |
| 2 | Long, descriptive alt text on the hero and the network graph `[D]`, including a described data structure | D11 |
| 3 | A keyboard-navigable twin for the network graph is explicitly provided at `/vaults/graph` `[D]` — this is the correct pattern for complex graphics and most sites in the cohort do not do it | D11 |
| 4 | Astro / server-rendered: content extracts cleanly for agents `[D]` | D10 |
| 5 | Complete OG and Twitter card metadata with per-page images and image alt `[D]` | D10 |
| 6 | License stated on the homepage, not buried `[D]` | D7 |
| 7 | RSS, changelog, glossary, security, privacy, and a **published design-system page** all linked from the footer `[D]` — the meta-surface is more complete than most of the cohort | D5, D12 |
| 8 | A four-level participation ladder with distinct, self-contained value at Level 0 `[D]` — structurally correct, and the "no level requires the next" framing is genuinely good | D8 |
| 9 | **The community page states plainly what does not exist yet** `[D]`: "member counts, follower numbers, or activity feeds... The record doesn't track them, so this page doesn't show them," and a "horizon" callout naming unbuilt surfaces. This is the single strongest credibility move on the site and directly inverts anti-pattern 7.2. Protect it under pressure to look bigger. | D7, D8 |
| 10 | The concrete file-tree and CLAUDE.md examples in the "How it works" section `[D]` — the moment the abstraction becomes legible | D1, D3 |

### 8.2 Hypotheses to test in Phase 1

| # | Hypothesis | Dim | Prov | Sev if confirmed |
|---|---|---|---|---|
| H1 | The hero defines the product with two novel abstractions ("open standard for organizing project knowledge" + "the open network where that shared context lives" + "built on the Lattice Protocol") before any concrete example. Cold readers will grasp the *mission* and not the *mechanism*. | D1 | `[D]` copy, `[A]` effect | 🟠 S2 |
| H2 | Primary nav carries seven items plus a "More" overflow plus a separate "In this section" rail `[D]`. Three concurrent navigation systems. Overflow indicates an unresolved taxonomy. | D2 | `[D]` | 🟡 S3 |
| H3 | The primary technical CTA is a compound `git clone … && cd … && claude` `[D]` — a high-commitment first move for a cold reader, requiring an existing Claude Code install and trust in an unfamiliar workspace. No zero-install evaluation path is visible from the homepage. | D3 | `[D]` | 🟠 S2 |
| H4 | **74 vaults advertised; 15 shown in the relationship graph `[D]`.** Entries appear in mixed lifecycle states ("active", "genesis", "pending") in the same list with no evident tiering. The registry is the site's central proof artifact and its central sprawl risk. Anti-pattern 7.4. | D2, D7 | `[D]` | 🟠 S2 |
| H5 | The network appears to be substantially operator-federated. The homepage says "Real public-good work already lives here" and names four initiatives `[D]`, all of which appear to be within the operator's own orbit `[I]`. If a hostile reader determines that unaided, the credibility cost is high. Anti-pattern 7.3. **Recommend explicit, unprompted disclosure on the page.** | D7 | `[D]`+`[I]` | 🔴 S1 |
| H6 | Vault URL casing is inconsistent — `/vaults/aDNA.aDNA/`, `/vaults/III.aDNA/` alongside `/vaults/sciencestanley/`, `/vaults/terminal/` `[D]`. Mixed-case paths are a durable source of 404s, duplicate content, and broken external links. | D2, D12 | `[D]` | 🟠 S2 |
| H7 | Six audience-segment pages linked from the homepage (researchers, educators, enterprise, compliance, startups, adopters) `[D]`. Anti-pattern 7.7 — likely a symptom of unresolved positioning rather than a positioning solution. | D1, D2 | `[D]` | 🟡 S3 |
| H8 | No `llms.txt` observed in the fetched surface `[A — unverified, check directly]`. For a project whose entire thesis is agent-navigable context, absence would be an S1 self-exemption finding (anti-pattern 7.8). Adjacent: are `.md` twins served? Is the vault registry available as JSON? Is there an MCP server over the corpus? | D10 | `[A]` | 🔴 S1 if absent |
| H9 | "Built on the Lattice Protocol" appears three times on the homepage `[D]` with the parenthetical "the coordination layer, opening progressively". A dependency on a second, less-defined system introduces explanatory debt and an implicit "not fully open yet" admission at the moment of maximum reader skepticism. | D1, D6 | `[D]` | 🟠 S2 |
| H10 | Register oscillation: the opening paragraph is high-lyric ("Language and DNA were co-created by everyone before us") and the adjacent sections are terse technical prose `[D]`. Both are good; the transition between them is the risk. | D6 | `[D]` | 🟡 S3 |
| H11 | Vault personas (Rosetta, Argus, Berthier, Hestia, Mnemosyne, pygmalion…) are exposed in the public registry `[D]`. Internally coherent and distinctive; to an outside reader with no key, they read as unexplained proper nouns attached to every catalogue entry. Needs either a one-line public explanation at the point of first exposure, or suppression in public listings. | D1, D6 | `[D]` | 🟡 S3 |
| H12 | No named humans surfaced on the homepage; an `/about` link exists behind "Who's behind aDNA →" `[D]`. For Archetype E, founder identity and institutional affiliation should be reachable in one click and probably visible on the homepage. | D7 | `[D]` | 🟠 S2 |
| H13 | Internal operational language is leaking into public copy: a registry entry reads "Renamed from TaskForge.aDNA (Production Tidy pt08" `[D]` — truncated, internal, and unclosed. This class of leak signals that public surfaces are being generated from internal artifacts without an editorial gate. **Sweep the full registry for this pattern.** | D6 | `[D]` | 🟠 S2 |
| H14 | No synchronous community venue (Discord/Slack/forum) linked from `/community` `[D]`; GitHub Discussions is named as the venue. Defensible for a young standard, and consistent with the site's honesty posture — but it means the contribution funnel has no low-friction question path. | D8, D9 | `[D]` | 🟡 S3 |
| H15 | No proposal process with numbered states is evident `[D]`. Contribution runs through "issue templates" and "upstream contributions". Compare MCP's SEP process with conformance-test gates `[D]`. For a standard expecting external implementers, this is the largest governance gap. | D8 | `[D]` | 🟠 S2 |

### 8.3 The single highest-leverage move

Across all fifteen hypotheses, one theme dominates: **the site's greatest asset is its honesty, and its greatest risk is the gap between the scale it depicts and the scale a skeptical reader can verify.**

The community page already solves this problem, explicitly and well. The homepage does not yet apply the same discipline to the network, the vault registry, or the commons.

**Recommendation:** propagate the `/community` honesty pattern to every surface. A visible, dated "state of the network" — what is running, what is operator-operated, what is external, what is planned — converts the site's principal vulnerability into its principal differentiator. In a category saturated with clone sites and inflated metrics (§7.1), verifiable modesty is the scarcest available signal.

---

## 9. Mapping to the existing decade backbone

The target's own mission artifact `[D]` defines a four-decade structure. This instrument maps onto it directly, so the review does not require a new taxonomy:

| Decade | Dimensions | Weight | Status |
|---|---|---|---|
| **D1 Credibility-integrity** | D7 Proof · D6 Content · claim audit · anti-patterns 7.3/7.5/7.1 | 22 | active |
| **D2 Navigation & docs** | D2 IA · D3 Onboarding · D4 Documentation | 32 | queued |
| **D3 Agentic + community** | D10 Machine legibility · D8 Governance · D9 Contribution | 22 | queued |
| **D4 Visual craft** | D5 Design system · D11 Accessibility · D12 Performance | 12 | queued |
| *(unallocated to a decade)* | D1 Positioning | 12 | **cross-cutting — resolve first** |

**Note.** Positioning (D1) is not a decade; it is a precondition. IA, onboarding, and content decisions all inherit from it. Resolving positioning after the navigation work means redoing the navigation work.

---

## 10. Campaign structure

Six phases. Each closes with a named artifact and a human gate.

### Phase 0 — Instrument calibration
Score two cohort exemplars (recommend: MCP as same-archetype, Mastra as adjacent) against this instrument. Reconcile reviewer disagreement. Adjust anchors where they proved ambiguous.
**Artifact:** two completed scorecards + instrument v1.1.
**Gate:** inter-reviewer variance ≤1 point on ≥10 of 12 dimensions.

### Phase 1 — Evidence
Execute §6 Steps 1–8 in full against the target.
**Artifacts:** page inventory CSV · screenshot archive · automated-sweep raw output · machine-eye report · cold-reader transcripts · TTFS recording and friction log · contribution-run log · **claim register**.
**Gate:** every §8.2 hypothesis resolved to confirmed / refuted / reframed, with provenance.

### Phase 2 — Adjudication
Two-reviewer independent scoring, reconciliation, finding register construction, severity assignment, comparative positioning against the Phase 0 baselines.
**Artifacts:** scored assessment with per-dimension breakdown · finding register · one-page executive summary.
**Gate:** every S1 finding has a named owner and a fix approach.

### Phase 3 — Positioning resolution
D1 only. Rewrite the core proposition. Test the rewrite with a fresh cold-reader panel. Do not proceed until it passes.
**Artifacts:** positioning statement · hero copy · voice guide · glossary reconciliation.
**Gate:** ≥4 of 5 cold readers correctly state what it is, who it is for, and one thing it is not, in ≤30 seconds.

### Phase 4 — Credibility remediation
All S1 findings. Claim register reconciled to reality. Network-composition disclosure shipped. Registry admission standard and lifecycle tiers defined. Editorial gate installed on generated public content. Canonical-properties page published (§7.1).
**Artifacts:** state-of-the-network page · registry standard · editorial gate spec · official-properties page.
**Gate:** zero unsupported claims in the register; a hostile external reader cannot find an unacknowledged overstatement.

### Phase 5 — Structural build
Decades D2 and D3: IA rationalisation, URL normalisation with a full redirect map, onboarding rebuild including a zero-install path, documentation restructured to four types, machine-legibility layer (`llms.txt`, `.md` twins, registry JSON, MCP server, copy-as-context), proposal process instantiated.
**Artifacts:** IA map · redirect map · TTFS measurement pre/post · machine-legibility conformance report · proposal-process definition with its first numbered proposal filed.
**Gate:** TTFS < 10 min measured · zero internal 404s · self-conformance demonstrated.

### Phase 6 — Craft and hardening
Decade D4: design-system enforcement, responsive integrity, WCAG 2.2 AA verification including assistive-tech testing, CWV budgets in CI, a11y and link-checking in CI.
**Artifacts:** conformance report · CI gate configuration · updated design system.
**Gate:** zero a11y criticals · CWV green at p75 mobile · design-system conformance verified on 20 sampled components.

**Re-review cadence.** Full instrument every two quarters. Claim register and link check monthly. TTFS on every release that touches the quickstart.

---

## Appendix A — Per-page checklist

Applied to every page in the inventory.

- [ ] Purpose statable in one sentence
- [ ] Correct Diátaxis type; no hybrid
- [ ] Single `h1`; heading hierarchy unbroken
- [ ] Body measure 60–80 characters
- [ ] Last-updated date visible
- [ ] "Edit this page" path present
- [ ] Every claim verified or verifiable
- [ ] No aspirational present tense
- [ ] Every new term defined at first use or glossary-linked
- [ ] Code blocks: labelled, copyable, tested, contrast-compliant
- [ ] All images have correct alt (or `alt=""` if decorative)
- [ ] Complex graphics have a text alternative and a keyboard-navigable twin
- [ ] Keyboard traversal clean; focus visible
- [ ] Contrast verified including muted and syntax-highlighted text
- [ ] Renders correctly at 390 / 768 / 1024 / 1440
- [ ] Extracts cleanly as text with structure intact
- [ ] `.md` twin resolves
- [ ] Canonical tag correct; OG/Twitter metadata complete
- [ ] Internal links resolve; external links live
- [ ] Next action offered at the end of the page
- [ ] Escape hatch to help present

## Appendix B — Finding record schema

```yaml
id: F-###
dimension: D#
severity: S1 | S2 | S3 | S4
provenance: D | I | R | A
location:
  url:
  selector:
  viewport:
  capture:            # path to screenshot / recording
observation:          # what is, stated neutrally
why_it_matters:       # mechanism of harm, tied to a dimension intent
recommendation:       # specific, implementable
effort: S | M | L
owner:
verification:         # how we will know it is fixed
status: open | in_progress | fixed | verified | wontfix
```

## Appendix C — External standards referenced

| Standard | Use in this instrument |
|---|---|
| **WCAG 2.2 AA** | D11 baseline, including target-size and focus-appearance criteria |
| **Core Web Vitals** (LCP / INP / CLS) | D12 performance gates at p75 |
| **Diátaxis** | D4 documentation type taxonomy |
| **CHAOSS** (Linux Foundation) | D8/D9 community-health metric selection — responsiveness, contributor absence factor / bus factor, new vs. repeat contributor ratio |
| **Contributor Covenant** | D8 code-of-conduct baseline |
| **`llms.txt` convention** | D10 machine-legibility baseline |
| **Schema.org** (`SoftwareSourceCode`, `TechArticle`, `Organization`, `Dataset`) | D10 structured data |
| **MCP community model** | D8 reference implementation: contributor ladder, chartered groups, numbered enhancement proposals with conformance gates |
| **OpenSSF Scorecard** | D7 supply-chain and repository-hygiene signals |

---

*Instrument v1.0. Revise after Phase 0 calibration.*
