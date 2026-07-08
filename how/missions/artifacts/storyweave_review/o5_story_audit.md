---
type: review_findings
artifact_class: storytelling_audit
created: 2026-07-07
mission: mission_site_story_review_charter
objective: O5
persona: agent_rosetta
status: draft
tags: [review, storytelling, narrative, storyweave, o5]
---

# O5 — Storytelling deep-dive (narrative / message-architecture audit)

> **North-star.** Make a stranger *get it and want it*: **the network · context democracy · federated + collaborative context-graph building** — the context that powers AI, built/shared/governed in the open, for humans + AI agents, as a public good. This audit grades the *narrative* (not the pixels — that's O3/O4) against that thesis, grounded in the O2 storytelling doctrine (S1–S7) + the 9 exemplars.

## 1. The current arc (live home, top→bottom)

`hero manifesto` → **"What a context democracy is"** → **"The living registry"** (68 vaults) → **"How it Works"** (agent-native/human-readable/composable + Structure/Orient/Execute) → **"New to aDNA? Start here"** → **"The Standard"** → **"Join the network"** (4 subnetworks).

**What's strong (preserve):** values-first manifesto ("Language and DNA were co-created by everyone before us…"); an *honest* register throughout (the graph page's "53 vaults carry no cited relationship yet — honest topology, not missing data"; commons' "no activity feed yet… the horizon"); a real proof number (68) and real subnetworks. This is a genuinely good arc — the fixes below are **sharpening, not rebuilding.**

## 2. The three weak joints (ranked by leverage)

### J1 — No "you already do X" reframe (S2) — *the single biggest lever*
The manifesto is beautiful but **abstract**: it asks a stranger to care about "the context that powers AI" before they've mapped it to anything they know. Every federated exemplar wins by collapsing the abstraction to the familiar — atproto *"usernames are just domains,"* Matrix *"chat with friends,"* Obsidian *"a view over the files you already own."* aDNA has no such line. **Draft candidates** (for build-phase testing; keep the calm register):
- *"Your context is just the notes, docs, and decisions you already keep — now shaped into a graph your agents can navigate, and shared in the open."*
- *"Every project already has a memory. aDNA gives it a shape — open, federated, and yours."*
- *"You already write the knowledge your work runs on. aDNA makes it a graph — for your agents, and everyone's."*
- *(punchier)* *"Context you already have. Shared the way language and DNA always were."*
→ One crisp reframe line, placed as the manifesto's **second beat** (after the co-creation line, before the CTAs).

### J2 — Show the artifact, not a diagram of it (S3) — *the hero-artifact tension*
The exemplars make the abstraction **physically present** above the fold (Obsidian's live graph, Astro's real code, JSON Canvas's rendered-file-plus-JSON). aDNA's home hero is an image-led SS-Ghibli **manifesto scene** (ADR-032), and the concept section's diagram is a *faint asterisk* (O3 finding); the **real** graph (`/vaults/graph`) is a click away and, today, illegible (A-06). So the site's most concrete asset — a live, traversable, plain-text context graph — is never *shown* where it would land the thesis.
**This is the one genuine design tension** (illustrative register vs. show-the-artifact) and a **build-campaign decision for O8**, not something to unilaterally flip. Options to prototype:
- **(a)** Keep the hero scene; add a *live-graph tease* (a small real, draggable graph or an animated compose) as section 1 — replacing the faint asterisk.
- **(b)** Composite a **real vault-file snippet** (a true `CLAUDE.md`/YAML with a copy button) beside/under the hero as a *co-focal unit* (doctrine §1: composed, not competing) — the "show the file" move (JSON Canvas/Astro).
- **(c)** Both, sequenced: scene (emotion) → reframe line → the file + the graph (proof).
→ Preserve ADR-032's warmth; add *one* concrete, grabbable artifact early.

### J3 — Proof-of-life is placed too low (S5)
The hero stat strip shows **insider metrics** (`16 Entity Types · 3 Conformance Levels · v2.5 · MIT`); the compelling number — **68 vaults** — and the **named public-good subnetworks** live mid/late page. OWID and atproto put the proof *high* (self-quantification + named adopters). → Promote a hero-adjacent proof beat: *"68 openly-licensed vaults across N domains — and counting"* + the four subnetwork names as borrowed trust (WGA · Context Commons · Wilhelm AI · Rare Archive).

## 3. Two devices to add (sharpeners, not rebuilds)

- **Principled negation (S6):** a Signal-style line — *"No lock-in. No walled gardens. No extraction."* — converts the abstract "open/federated" into checkable integrity. Anchor it near "The Standard."
- **The N-pillar payoff (S7):** ensure "What a context democracy is" reads as a crisp **3–4 pillar** block (Open · Federated · Co-owned · For agents *and* humans), each with a one-line concrete payoff — the Mastodon "Why Mastodon?" model (hero sells the feeling, first scroll pays it off).

## 4. Missing narrative surfaces (candidates for O6)
- **A "show-the-file" moment/surface** — the grabbable vault/graph artifact (J2); today absent.
- **An adopters/proof page** — "who's building on aDNA" as evidence (Astro Showcase / JSON Canvas Apps / CC's named institutions), deepening the 4 subnetworks.
- **A "why now / the stakes" beat** — the manifesto states the value; a light stakes line (why context-as-commons matters *now*, as AI scales) would give the reframe its urgency (Mastodon's villain-contrast, kept gentle).

## 4b. The outsider-credibility gap (O4-skeptic-surfaced) — a *narrative* problem

The two O4 skeptics (Frontier Engineer · Funder/Program Officer), independently, land the review's highest-stakes finding — and it's a **storytelling** problem, not a design one: **the site tells a "network / democracy / public good" story a diligence-minded outsider cannot yet verify.**
- **"Network of one / no real humans"** — every vault is "tended by" an AI-persona code-name; an outsider finds no accountable person, team, or external adopter. The personas are an internal device that has become the *public face*.
- **"Democracy" vs "Founding Architect"** — the manifesto's "self-governed context democracy" contradicts the `reference` Governance card's single-BDFL model. The claim was *declared, not earned*. **→ RESOLVED 2026-07-07 (operator/FA):** a **progressive-decentralization** roadmap (FA today → increasing trusted stewards, at FA discretion → discretion turned over to stewardship → steward-led/democratic/public destination; stewards sourced from **rare-disease · undiagnosed-disease · biodiversity-protection**) turns the contradiction into an honest roadmap — the skeptics' own convergent ask. Draft copy + propagation: [[governance_and_mission_resolution]].
- **"Lattice Protocol / public good" asserted, not shown** — a load-bearing protocol that only ever appears as a tagline; a public-good mission with no impact case/outcome.

The fix is **not** to abandon the personas or the manifesto — it's to **earn** the thesis with a real-humans + real-proof + honest-governance beat (the convergent skeptic "one move"): a **"who's behind this + what it changed"** surface — Stanley + the Wilhelm Foundation tie (Helene & Mikk Cederroth) + one concrete Rare-Archive impact case + a Founding-Architect→multi-stakeholder **governance roadmap** + one plain sentence on **what the Lattice Protocol actually is**. Note: *persona-as-public-face vs. real-humans-forward* is a deliberate **identity choice for the operator at O8** — flag, don't unilaterally flip. The register guardrail (§5) still holds: the remedy is **more honesty** (name the people, show the proof, state the governance truth), never more manifesto.

## 5. The register guardrail (do not break)
Every change above must stay **warm, calm, honest** — the Signal/OWID lesson: restraint reads as confidence; the site's existing honesty ("honest topology," "the horizon") is its strongest trust asset. **Do not let sharper storytelling tip into hype** — no "revolutionary/blazingly-fast," no unearned grandiosity. The reframe + proof-of-life must feel *earned* (show the graph, name the number, cite the subnetworks) — in that order.

## 6. Handoff to O6/O7
J1 (reframe) + J3 (proof-of-life) are **low-effort, high-impact copy/placement** moves → early charter phase. J2 (hero-artifact) is the **load-bearing design decision** → its own charter phase + an O8 operator call (reconcile with ADR-032). The devices (§3) + missing surfaces (§4) feed the prioritized backlog. *(O4 persona pain points corroborate + rank these — folded at synthesis.)*
