---
type: reference_inspection
cluster: federated_networks
created: 2026-07-07
mission: mission_site_story_review_charter
objective: O2
persona: agent_rosetta
sites: [mastodon, matrix, atproto]
axis: "federated/decentralized-network storytelling (aDNA federation thesis)"
tags: [reference, storyweave, o2, federation]
---

# O2 Reference cluster — Federated / decentralized-network storytelling

> Provenance: parallel `general-purpose` subagent, WebFetch of joinmastodon.org · matrix.org · atproto.com, 2026-07-07. Inspected as exemplars for how aDNA should open its **federated network** thesis to a stranger. Returned verbatim.

## site_mastodon

**Captured (Tier A — countable):**
- Hero headline: *"Social networking that's not for sale."* — **6 words**.
- Sub-headline: *"Your home feed should be filled with what matters to you most, not what a corporation thinks you should see. Radically different social media, back in the hands of the people."*
- Nav model: **5** top-level items (Apps · For Institutions · Donate · Resources ▾ · language selector).
- Primary CTAs: **2** — *"Join mastodon.social"* + *"Pick another server."*
- Above-the-fold focus: **one thing** — user agency vs. corporate control.
- Hero visual: full-width community illustration; **no diagram, demo, or live element**. _Fetch note: hero image resolved only as placeholder tags; composition supplemented from prior knowledge (diverse-characters mosaic)._

**Captured (Tier B — qualitative):**
- Density: **balanced** (short blocks, generous whitespace).
- Tonal score: **5/5** — overtly progressive-revolutionary (*"not for sale," "back in the hands of the people," "radically"*).
- Reading level: plain, everyday, emotionally direct (~8th grade).
- Motion: **light** — static illustration + scroll reveals.

**Story mechanism (MOST IMPORTANT):** Villain-contrast + populist manifesto. The hero names an enemy without arguing mechanics — *"not what a corporation thinks you should see… back in the hands of the people."* It sells the *feeling* of federation (ownership, no ads, no algorithm) before any plumbing. The mechanism is deferred to a clean first-scroll four-pillar block, **"Why Mastodon?"**: *"Each Mastodon server is a completely independent entity, able to interoperate with others to form one global social network."* Moderation is the proof point: *"Each server creates their own rules… not top-down like corporate social media."*

**Lift for aDNA:**
- Open with a ≤7-word thesis stating a *value*, not a mechanism — Mastodon never says "how it works" in the hero.
- Name the status-quo villain (centralized / enclosed context) in the sub-head so "federated" reads as the *fix*, not a feature.
- Defer the federation explainer to a first-scroll N-pillar block (Decentralized / Open / Interoperable), never the hero.
- Cap the hero at 2 CTAs — one default path, one self-directed.

**Avoid:**
- Don't lean so hard on grievance that a newcomer never learns what the thing *is* — Mastodon risks all-vibe, no-noun.
- Don't ship a decorative-only hero illustration; it teaches nothing about federation.

**Related:** Home (hero + first scroll) and Network surface. Most informs **Hero-thesis clarity** and **Tone calibration** (also Newcomer comprehension).

## site_matrix

**Captured (Tier A — countable):**
- Hero headline: *"An open network for secure, decentralised communication"* — **7 words**.
- Sub-headline: *"Chat with friends, family, communities and co-workers."*
- Nav model: **8** top-level items (Spec · Foundation · Blog · Docs · Ecosystem · Homeserver · Support us · Try Matrix) — heavy.
- Primary CTAs: **2** above-fold — *"Start a conversation"* + *"Support us"* (plus *"Try Matrix"* in nav).
- Above-the-fold focus: **one message** (open network) with a use-case clarifier.
- Hero visual: illustration *"An artist['s] view of a chat timeline"* + a conference announcement banner; **no live demo**.

**Captured (Tier B — qualitative):**
- Density: **balanced**, modular sections.
- Tonal score: **3/5** — technical-professional with light sovereignty accents (*"Reclaim your Space"*).
- Reading level: mildly technical (*"decentralised," "network"*) but accessible (~10th grade).
- Motion: **light-moderate** (illustration + banner).

**Story mechanism (MOST IMPORTANT):** Familiar-verb bridge + sovereignty accent. Matrix disarms the abstract protocol by pairing a technical headline with an everyday action: *"Chat with friends, family, communities and co-workers."* The noun is scary (decentralised network/protocol); the verb is one you already do. First scroll reframes ownership emotionally — *"A cozy, safe, supercharged place for your community"* with the CTA *"Reclaim your Space,"* casting incumbents as occupied territory to take back. **Weakness (a finding in itself):** below the hero the page goes thin — no plain explanation of *what federation is* or *why it matters*, and no adoption stats or named-user social proof beyond *"Element.io — Platinum member."* The story starts strong and evaporates. _Fetch note: below-fold thinness confirmed across two fetches — not a rendering artifact._

**Lift for aDNA:**
- Pair the abstract noun with a familiar verb in one breath — headline says the hard thing ("federated context network"), sub-head says the human thing ("build the knowledge you already keep — together").
- Use a one-word reframe verb (Matrix's *"Reclaim"* → aDNA's *"Own" / "Share"*) to make abstraction feel like an action.
- Give every "open / decentralised" claim a concrete payoff sentence beneath it on the first scroll.

**Avoid:**
- 8 top-level nav items dilute the story — keep top-level nav **≤5** so the one front door is obvious.
- Don't put an insider event banner above the fold; it's noise to a first-time visitor and steals hero attention.

**Related:** Home hero + Network surface; also Nav/IA. Most informs **Nav / Information-Architecture** and **First-scroll payoff**.

## site_atproto

**Captured (Tier A — countable):**
- Hero headline: *"Building the Social Internet."* — **4 words**.
- Sub-headline: **none single** — three co-equal cards (*Create an App / Build an Agent / Write an Algorithm*); first reads *"Tap into the shared Atmosphere network to create your next app."*
- Nav model: **4** items (Docs · SDKs · Blog · Podcast).
- Primary CTAs: *"Get Started"* (→ /docs) + *"Learn More"* (repeats ~4×) — one strong, one repeated.
- Above-the-fold focus: **many** — the hero splinters into three developer value-props, each with its own CTA.
- Hero visual: a **rotating/cycling JSON snippet** of real post data (labeled *"Strongly typed / Hyperlinked / It's just JSON"*) + stats *"40M+ Users / 2.4B+ … posts."*

**Captured (Tier B — qualitative):**
- Density: **balanced but fractured** (competing cards).
- Tonal score: **3/5** — sleek-builder-optimist with open-data idealism (*"100% Open data"*), not activist.
- Reading level: developer-facing, jargony (*"Atmosphere network," "strongly typed"*).
- Motion: **notable** — the hero JSON element cycles through concepts; the liveliest hero of the three.

**Story mechanism (MOST IMPORTANT):** "You already own this" reframe + proof-by-numbers. The signature move collapses a hard concept (portable decentralized identity) into a familiar one: *"Usernames are just domains. We're @atproto.com!"* — federation reframed as a plain web address you already understand. It backs the claim with quantified social proof — *"40M+ Users / 2.4B+ Totally normal posts"* — and *shows* rather than tells via the live JSON (*"It's just JSON"*). The cost: fanning into Create-App / Build-Agent / Write-Algorithm optimizes for developers and diffuses the single-punch a stranger needs.

**Lift for aDNA:**
- Reframe federation as something the reader already owns — aDNA's analog to "usernames are just domains" is *"your context is just the notes and knowledge you already keep."* Find the one-line "you already do X."
- Put real proof-of-life in the hero (a live artifact + one headline number) instead of claims — show a real context graph and a live "N vaults / N nodes" count.
- Pick ONE hero audience and one primary CTA; branch roles (build / operate / browse) on the first scroll, not as three co-equal heroes.

**Avoid:**
- Don't fracture the hero into 3 equal value-props with 3 CTAs — it reads as a dev-tools landing page, not a movement.
- Don't let jargon (*"Atmosphere," "strongly typed"*) gate the door; a stranger bounces before the clever domain metaphor lands.

**Related:** Home hero + Commons/Community (builder audience) + Network. Most informs **Newcomer comprehension**, **Hero focus / CTA**, and **Social proof / credibility**.

## Cluster synthesis

- **Short, value-first headlines win.** All three heroes are ≤7 words and none defines federation in the headline — they lead with a value or aspiration (*"not for sale," "open network," "the Social Internet"*). aDNA's hero should state the *stakes* of context democracy in ≤7 words, not define "federated context graph."
- **The federation "click" is a reframe, not a diagram.** The strongest moves shrink the abstract to the familiar — atproto *"usernames are just domains,"* Matrix pairing *"decentralised"* with *"chat with friends,"* Mastodon *"back in the hands of the people."* None uses an architecture diagram in the hero. aDNA needs one crisp "you already do X" line (e.g. *"your context is just the knowledge you already keep — now shared and co-owned"*).
- **Anchor the abstraction with a villain OR a familiar action — pick one.** Mastodon uses a villain (corporation/algorithm); atproto and Matrix use a familiar action (domains, chatting). Abstraction with neither anchor strands the reader.
- **Defer the mechanics to a first-scroll N-pillar block.** Mastodon's four-pillar *"Why Mastodon?"* (Decentralized / Open / Not for sale / Interoperable) is the model: the hero sells the feeling, the first scroll pays it off with the how. aDNA should mirror this exactly.
- **Show proof-of-life, not just claims.** atproto's live JSON + *"40M+ users"* is the credibility move the others lack; Matrix's thin, stat-less below-fold is the cautionary case. aDNA has a real asset — a live, growing count of vaults/nodes and an actual context graph to render — so surface it in or beside the hero.
- **Biggest single lesson:** Open the federation story with a *value the stranger already cares about* + a *one-line "you already do X" reframe*, then pay it off on the first scroll with a named-pillar block and one piece of real proof-of-life. Do NOT open with the architecture, the jargon, or three co-equal doors.
