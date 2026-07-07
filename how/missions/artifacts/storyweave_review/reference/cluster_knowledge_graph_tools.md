---
type: reference_inspection
cluster: knowledge_graph_tools
created: 2026-07-07
mission: mission_site_story_review_charter
objective: O2
persona: agent_rosetta
sites: [obsidian, astro, jsoncanvas]
axis: "knowledge-graph tools + open-standard docs (aDNA product analog + collaborative-context-graph thesis)"
tags: [reference, storyweave, o2, knowledge_graph, onboarding]
---

# O2 Reference cluster — Knowledge-graph tools + open-standard sites

> Provenance: parallel `general-purpose` subagent, WebFetch of obsidian.md · astro.build · jsoncanvas.org (+ its GitHub spec), 2026-07-07. Inspected as aDNA's closest product analogs — how to make "graph / networked knowledge / open format" feel concrete + usable with a clear first step. Returned verbatim.

## site_obsidian

**Fetch note:** Homepage fetch was solid on hero/nav but the graph copy surfaced from a lower feature section, not the hero itself — supplemented with known site structure.

**Captured (Tier A — countable):**
- Hero headline (quoted): **"Sharpen your thinking."** — 3 words.
- Sub-headline: "The free and flexible app for your private thoughts."
- Nav model: 5 items (Download, Pricing, Sync, Publish, Enterprise).
- Primary CTA: 2 — "Get Obsidian for Windows" + "More platforms" (OS-detected download).
- Above-fold focus: the app UI itself (linked panes, editor) — product-as-hero, not marketing abstraction.
- Diagram/graph/live demo in hero: partial — the signature interactive **graph view** anchors a feature section just below the fold, not the hero.

**Captured (Tier B — qualitative):**
- Density band: balanced (generous whitespace, modular feature blocks).
- Tonal score: **2/5** (sleek-professional, intellectual; calm not revolutionary).
- Onboarding scent: strong — OS-detected download button is an unmistakable first step.
- Motion presence: restrained; the graph animates on interaction, not decoratively.

**Story mechanism (MOST IMPORTANT):** The move is **"your own thinking, made visible + owned."** Obsidian renders the abstract "networked knowledge" idea as a *personal* interactive graph of your real notes — copy: *"Visualize the relationships between your notes. Find hidden patterns in your thinking through a visually engaging and interactive graph."* Crucially, they earn trust for that abstraction with a **local-first, plain-text ethos** ("file over app" — the same Steph Ango principle JSON Canvas cites): the graph isn't a walled feature, it's a view over Markdown files you own. The thousands-strong plugin/community showcase then proves the network is alive. Abstract structure feels usable because it's *yours, local, and legible*.

**Lift for aDNA (rules):**
1. Show a *live, explorable* context graph in/near the hero — not a static illustration; let a stranger drag a node.
2. Lead with a plain-English promise ("Sharpen your thinking"), not the architecture; put "context graph" one layer down.
3. Ground the abstraction in ownership — state plainly that vaults are plain-text files agents and humans co-read.

**Avoid:** Feature-dumping the ontology up front; hiding the graph below three scrolls of prose; jargon ("triad," "lattice") before the payoff lands.

**Related:** Informs **home** + **/vaults/graph**. Dimensions: **Onboarding**, **Visual craft**, **IA/nav**.

## site_astro

**Fetch note:** Clean fetch; hero, install command, and code-snippet all confirmed.

**Captured (Tier A — countable):**
- Hero headline (quoted): **"The web framework for content-driven websites"** — 6 words.
- Sub-headline: "Astro powers the world's fastest marketing sites, blogs, e-commerce websites, and more."
- Nav model: ~6 groups (Documentation, Blog, Resources, Community, Enterprise, + Themes/Showcase children).
- Primary CTA: 2 — both **"Get Started"**, adjacent to the copy-paste command `npm create astro@latest`.
- Above-fold focus: a **real Astro component code snippet** (imports, async data fetch, markup) beside adopter logos.
- Code example / live demo in hero: **yes** — literal working code is the hero visual.

**Captured (Tier B — qualitative):**
- Density band: balanced (concise callouts, strong whitespace rhythm).
- Tonal score: **2/5** (sleek, developer-first; confident not messianic).
- Onboarding scent: excellent — `npm create astro@latest` *is* the first step, shown, not described.
- Motion presence: yes — "View Transitions… seamlessly morph, fade, and swipe across pages."

**Story mechanism (MOST IMPORTANT):** The move is **"a concrete first artifact in under 60 seconds, then proof."** Astro makes an abstract "framework" tangible three ways at once: (a) a **one-line copy-paste command** so the stranger's first action is unambiguous; (b) **real code in the hero** so they see exactly what they'd write; (c) **hard proof** — copy like *"Astro only ships the JavaScript you need"* and *"66% of real-world sites with good Core Web Vitals"*, backed by a clickable Showcase of real sites. Abstraction never floats: command → code → measured result → live examples.

**Lift for aDNA (rules):**
1. Put a **copy-paste first step** on the home hero (`git clone … && claude`) — make "build a context graph" a runnable command, not a concept.
2. Show a **real artifact** in the hero (a vault tree or a graph node) the way Astro shows code — concrete before abstract.
3. Back claims with **proof**: link a live Showcase of real vaults (the 68 already deployed) so "network" is visitable, not asserted.

**Avoid:** Abstract benefit-copy with no runnable next action; a hero with zero concrete artifact; performance/scale claims with nothing clickable behind them.

**Related:** Informs **home** + **get-started**. Dimensions: **Onboarding**, **IA/nav**, **Visual craft**.

## site_jsoncanvas

**Fetch note:** Homepage fetch was thin on rationale copy; supplemented with the **GitHub spec README** for goals/format framing. Directly relevant — aDNA's Canvas standard forks this format.

**Captured (Tier A — countable):**
- Hero headline (quoted): **"JSON Canvas — An open file format for infinite canvas data."** — sub-headline repeats the tagline.
- Nav model: **3 items** (Apps, Spec, GitHub) — deliberately minimal.
- Primary CTA: 2 — **"Copy code"** + **"Download file"** (act on the actual format, not a signup).
- Above-fold focus: the logo + an **inline example canvas** with its underlying JSON.
- Diagram / live demo: **yes** — an interactive canvas viewer ("Toggle output · Zoom out · Zoom in · Reset").

**Captured (Tier B — qualitative):**
- Density band: sparse-to-balanced (a spec landing page; restraint is the point).
- Tonal score: **2/5** (quietly principled; "openness," not revolution).
- Onboarding scent: moderate — "Copy code"/"Spec" are clear, but no explicit "start here" narrative.
- Motion presence: minimal (interaction is zoom/pan on the demo canvas).

**Story mechanism (MOST IMPORTANT):** The move is **"the standard is legible because you can see and grab the artifact it defines."** Rather than explain a schema in prose, JSON Canvas shows a *rendered canvas and its raw JSON together*, with **Copy code / Download file** — you hold the format in ten seconds. The rationale is stated plainly and memorably: the format exists to give *"longevity, readability, interoperability, and extensibility"* and user *"ownership over their data"* (the "file over app" principle). Adoption is proven by a dedicated **Apps** page of real implementations. An open standard feels real because it's *seeable, grabbable, MIT-licensed, and already supported.*

**Lift for aDNA (rules):**
1. **Show the file, not just the concept** — render a vault/graph beside a snippet of its actual YAML/Markdown, with a copy button. Make aDNA's structure *grabbable*.
2. State the *why* in four plain nouns (JSON Canvas: longevity/readability/interoperability/extensibility) — give aDNA an equally quotable principle line.
3. Add an **"Apps/Adopters"-style page** proving real support — who's building on the standard — so "open" is evidenced, not claimed.

**Avoid:** Spec-jargon before a visible example; burying the "why it's open" behind the schema; a nav so bare there's no guided first step.

**Related:** Informs **learn** + **/vaults/graph** + **get-started**. Dimensions: **Onboarding**, **Visual craft** (file-as-artifact), **IA/nav**.

## Cluster synthesis

- **Show the artifact, don't describe it.** All three win by making the abstraction *physically present* above the fold — Obsidian's live graph, Astro's real code snippet, JSON Canvas's rendered-canvas-plus-raw-JSON. aDNA's biggest lever: put a **live, explorable context graph and a real vault file on the home + /vaults/graph surfaces**, not diagrams-of-a-diagram.
- **One unambiguous first step, made of the product itself.** Astro's `npm create astro@latest` and JSON Canvas's "Copy code" turn "get started" into a single concrete action. aDNA's get-started should surface **one copy-paste command** (`git clone … && claude`) as the hero's first action, not a paragraph.
- **Plain promise first, architecture second.** Obsidian ("Sharpen your thinking") and Astro ("content-driven websites") lead with a human outcome; the graph/ontology is one layer down. aDNA should lead with the *democracy/collaboration* payoff and defer "triad/lattice/vault" vocabulary until after the hook lands.
- **Prove the network is alive and visitable.** Astro's Showcase and JSON Canvas's Apps page make "ecosystem" clickable. aDNA already has **68 deployed vaults** — expose them as a browsable showcase so "federated + collaborative" is evidence, not assertion.
- **Ownership + openness is the trust anchor for abstract structure.** Both Obsidian and JSON Canvas cite the same "file over app" ethos. aDNA should state plainly that context graphs are **plain-text, owned, and co-editable by humans and agents** — its native strength and most credible differentiator.
- **Restraint reads as confidence.** All three sit at tonal ~2/5 — balanced density, minimal nav (JSON Canvas: 3 items), calm proof over hype. Let the *working graph* carry the revolutionary idea while copy stays plain and quotable.
