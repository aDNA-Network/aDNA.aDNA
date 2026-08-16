---
type: coldread_evidence
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_synthetic_coldreader
tags: [coldread, synthetic, pre-screen, campaign_haussmann]
synthetic: true
method: "SYNTHETIC agent cold-read — an AI agent simulating a first-time visitor. Live-site fetch only (raw HTTP, no local repo context, no prior project knowledge used). This is a PRE-SCREEN; a real human panel runs later. Do not weight as human evidence."
persona: "Senior software engineer — 15y, distributed systems, skeptical of AI hype, casual Claude/Copilot user, never heard of the site"
date_visited: 2026-08-16
pages_visited:
  - "https://adna.network/ (homepage)"
  - "https://adna.network/learn/what-is-adna"
  - "https://adna.network/get-started"
  - "https://adna.network/reference/specification"
  - "https://adna.network/vaults"
time_budget: "~5 minutes simulated (homepage + 4 clicks)"
---

# Cold Read — SYNTHETIC: Senior Engineer (skeptical, distributed systems)

> **SYNTHETIC PRE-SCREEN.** This is an AI agent role-playing a cold visitor against the live site. It predicts likely human reactions; it is not a human reaction. A real human panel runs later — treat this as a rehearsal signal only.

## 1. What is this? (one sentence)

An opinionated directory-and-markdown convention — three folders (`what/`, `how/`, `who/`) plus governance files like `CLAUDE.md` and `STATE.md` — for keeping a project's context in a shape AI coding agents can navigate across sessions, bundled with a "network"/registry of repos ("vaults") that already use it.

## 2. Who is it for? (one sentence)

People running Claude Code heavily on real projects — agent power users and small teams tired of re-explaining their repo every session — not general engineering orgs, and in practice not users of any other agent tool, whatever the vendor-neutral framing says.

## 3. What is it NOT? (one sentence)

It is not a product, service, or runtime — no server, no SaaS, no API, nothing to install beyond a git clone — and despite the word "Network" in the title, it is not (yet) a network of independent adopters: the 74 registered vaults all appear to belong to the same in-house ecosystem.

## 4. Would you try it? What would you actually type/click first?

Guarded yes — it's markdown and MIT, so the downside is a wasted evening, not a dependency. But I would NOT run their one-liner first. The homepage wants me to run `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude` — that hardcodes `~/aDNA` and immediately launches an agent inside a stranger's instruction files. What I'd actually do, in order: (1) click "Open source on GitHub" and read `CLAUDE.md` and `.adna/` raw in the browser; (2) if it looks sane, clone into a scratch directory — not `~/aDNA` — and read `skill_onboarding.md` before ever running `claude`; (3) maybe try the triad layout by hand on one small existing repo to see if my agent sessions actually improve. To their credit, the get-started page says "auditable inline, nothing executed from the network" — right instinct, and it's true, but the thing you're auditing is prompt-ware, and prompt-ware is executed by the agent.

## 5. What confused you? Exact phrases that lost me

- **"built on the Lattice Protocol — the coordination layer, opening progressively"** — this is in the hero trust-strip and I still don't know what the Lattice Protocol is. A wire protocol? A library? A governance process? "Opening progressively" reads like "not actually open yet."
- **"What a context democracy is"** — a section header introducing a term I've never seen, defined circularly ("A self-governed network where people and their agents build, share, and govern context graphs in the open").
- **"74 Vaults"** in the hero stats vs. **"15 connected vaults · 14 relationships"** on the graph right below it — which number is the network? And 14 relationships across 74 nodes is not a network, it's a star chart of one org.
- The vault registry is full of unexplained internal jargon and literally truncated sentences: **"Web-stack cohort (."**, **"Data-bearing (."**, **"Keystone cohort — node-side mesh-overlay daemon install/config/operate (Tailscale folds in."**, **"Renamed from TaskForge.aDNA (Production Tidy pt08."**, **"persona TBD-at."** — descriptions cut off mid-parenthesis, codenames ("Operation Aegis", "Keystone cohort", "code-as-WHAT") with no glossary link at point of use.
- **"tended by Rosetta"**, "tended by Hestia", "tended by Berthier" — every vault has a mythological "persona." I eventually inferred these are agent role-prompts, but nothing on the registry page says so.
- **"3 Conformance Levels"** — a hero stat that nothing above the fold (or on the page, that I found in five minutes) defines.
- **"a fresh clone even offers to bootstrap a complete, polished Home for an agent"** — no idea what "a polished Home" is; capitalized like a product.

## 6. What convinced you or smelled off?

**Convinced (credibility earned):**
- The spec is real. `/reference/specification` is a versioned (**"v2.5 stable"**), numbered standard with RFC 2119 keywords and an actual scope fence: **"Out of scope: Application source code structure, CI/CD pipeline configuration, deployment infrastructure, and agent model internals."** Landing pages don't write out-of-scope sections; standards do.
- **"This documentation site is itself an aDNA vault — the structure you are reading about is the structure that produced it."** Dogfooding I can verify by clicking into the repo. Strongest claim on the site.
- **"Everything lives on your machine; nothing is sent anywhere."** No signup, no email capture, no telemetry pitch, MIT license everywhere. The whole funnel is a git clone. That's the opposite of the usual AI-tool funnel and I noticed.
- The comparisons nav lists **"aDNA vs. PARA"**, **"aDNA vs. Zettelkasten"**, and — notably — **"aDNA vs. Plain Markdown"**. A hype operation would not invite the "why not just markdown?" fight.
- The problem statement is correctly diagnosed and jargon-free: **"You re-explain the project every session. Agents contradict decisions they made last week. Weeks of work vanish when the context window closes."** That's my lived experience with Copilot/Claude, stated plainly. And **"It is a knowledge-architecture problem, not an agent-capability one"** is a genuinely good framing.

**Smelled off:**
- The hero opens with **"Language and DNA were co-created by everyone before us. The context that powers AI should be too — built, shared, and governed in the open, for the good of all."** Civilizational framing for a directory convention. My hype alarm fired before I reached the definition sentence.
- The "network" looks like one person's monorepo cosplaying as an ecosystem: 74 vaults, 36 of them class "platform," many marked **"genesis"** with stub descriptions, and the four **"Mission-aligned subnetworks"** (World Genome Academy, Context Commons, Wilhelm AI, Rare Archive) all appear in-house. Zero visible third-party adopters, testimonials, or GitHub star counts.
- **"one open answer any team can adopt, any tool can support, and any agent can read without custom setup"** — directly contradicted by the prerequisites: **"Git, and Claude Code installed via `npm install -g @anthropic-ai/claude-code`."** This is a Claude Code convention. Say so.
- The registry's truncated, jargon-dense entries (quoted in Q5) read like an internal ops dashboard accidentally published. For a project whose entire pitch is "legible context," that's an own goal — the shop window contradicts the product.

## 7. 30-second test (first screen only, before scrolling)

Barely, yes — but the hero fights itself. The H1 is **"The aDNA Network"**, which tells me nothing (a biotech? a CDN?). Sentence one is the DNA/language manifesto. The actual answer is buried mid-paragraph as sentence two: **"aDNA is an open standard for organizing project knowledge so both humans and AI agents can navigate it — and the open network where that shared context lives."** Honestly, the single most informative element on the first screen was the code block: `git clone ... && cd ~/aDNA && claude` — the trailing `&& claude` told me "Claude Code workspace convention" faster than any prose. So: Q1 answerable in 30 seconds if you skim past the poetry; the poetry costs you the first 10 of the 30.

## 8. Confidence I could explain this to a colleague: **7/10**

Split score, really: **7 for the standard** — I could say "it's PARA for AI agents: a fixed three-folder layout plus CLAUDE.md/STATE.md governance files so a coding agent doesn't start cold every session, with a real versioned spec behind it" and be roughly right. **3 for the network half** — I could not explain what the Lattice Protocol is, what federation concretely does, what "context democracy" means operationally, or why 74 vaults with 14 relationships constitutes a network. Overall 7, because the half I can explain is the half a colleague would ask about.

---

*Synthetic cold-read generated 2026-08-16 by an AI agent against the live https://adna.network. Pre-screen only — supersede with real human panel results when available.*
