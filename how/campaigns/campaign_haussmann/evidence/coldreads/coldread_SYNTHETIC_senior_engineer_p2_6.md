---
type: coldread_evidence
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_synthetic_coldreader
tags: [coldread, synthetic, pre-screen, campaign_haussmann, p2_6]
synthetic: true
method: "SYNTHETIC agent cold-read — an AI agent simulating a first-time visitor. Live-site fetch only (raw HTTP, no local repo context, no prior project knowledge used). This is a PRE-SCREEN; a real human panel runs later. Do not weight as human evidence."
persona: "Senior software engineer, 15 years, distributed systems; skeptical of AI hype, casual Claude/Copilot user, ~5 minutes and low patience for marketing language."
date_visited: 2026-08-19
pages_visited: ["https://adna.network/", "https://adna.network/get-started/", "https://adna.network/state-of-the-network/", "https://adna.network/learn/what-is-adna", "https://adna.network/reference/specification", "https://adna.network/reference/specification/3-triad-architecture/", "https://adna.network/vaults/", "https://adna.network/get-started/what-your-agent-reads/", "https://adna.network/network/state/ (my own guessed URL — 404, not a site link)"]
time_budget: "~5 minutes simulated"
---

# Cold Read — SYNTHETIC: Senior Engineer (skeptical, distributed systems)

> **SYNTHETIC PRE-SCREEN.** This is an AI agent role-playing a cold visitor against the live site. It predicts likely human reactions; it is not a human reaction. A real human panel runs later — treat this as a rehearsal signal only.

## 1. What is this? (one sentence)

A filing convention for your repo — three folders (`what/`, `how/`, `who/`) plus a `CLAUDE.md` "operating protocol" file, all plain Markdown in git — so that a coding agent can orient itself in your project without you re-explaining it every session.

## 2. Who is it for? (one sentence)

The site says it plainly and I believe it: "For teams working with agentic coding tools on real projects" — realistically, people already running Claude Code daily on a codebase big enough that agent context loss is a felt, recurring cost.

## 3. What is it NOT? (one sentence)

It is not a product, a server, a SaaS, or a runtime — the site is unusually blunt about this ("Not a product or service — no server, no signup, nothing leaves your machine"), and it is also, despite the word "network" in the domain, not yet a network: 74 registered "vaults" all live on one person's laptop.

## 4. Would you try it? What would you actually type/click first?

**Try it: yes. Adopt it: not yet.**

Two things got me past my usual bounce reflex.

First, the install command is on the first screen, not behind a form:

> `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`

Second — and this is the part that actually earned the click — `/get-started/` pre-empts the exact objection I was forming. I was already thinking *"you want me to `&& claude` into a directory of instructions I haven't read?"* and the page said it back to me first:

> "That is the real trust question here, and it is a fair one: these files are prompt-ware, and prompt-ware is executed by the agent that reads it. So read them first."

So what I'd actually do, in order:

1. **Not** run the clone. Click **"Every file the agent reads on first run, annotated →"** first. That page (`/get-started/what-your-agent-reads/`) shows all 4 files, ~70 KB, vendored at commit `0364d85`, and claims: *"The build refuses to publish this page if those bytes stop matching that commit."* That is a real engineering control, not a promise, and it's the single most credible thing on the site to me.
2. Skim `template_workspace_claude.md` (150 lines) looking for anything that fetches, uploads, or executes. They tell me exactly what to look for: *"if this file asked an agent to send your files somewhere, you would be able to read the sentence that said so."* Fine — that's falsifiable in 90 seconds.
3. Then clone it into `~/scratch/adna-test`, not `~/aDNA`. (The site explicitly says the path doesn't matter — good.)
4. Run their five verification commands. I appreciated that this section exists at all: *"'It worked' should be something you can verify, not something you feel."* That's the sentence of an engineer, not a marketer.
5. `rm -rf` it. They tell me that's the whole uninstall, and given it writes one directory and no daemon, I believe them.

What I would **not** do today is put this on a real repo, for the reason in §6.

## 5. What confused you? Exact phrases that lost me

**The "three folders" → 16 entity types cliff.** This is the biggest structural problem. The homepage sells simplicity —

> "three folders, plain Markdown, versioned in git"

— and I bought it. Two clicks later I'm holding: 16 entity types, 3 conformance levels, a 20-section specification, and a working vocabulary of *vaults, lattices, modules, campaigns, missions, sessions, objectives, AARs, the triad, the convergence model, FAIR metadata, personas, subnetworks, federation refs*. The `/vaults/` filter alone offers **14 different vault classes** (standard / framework / framework (candidate) / forge / platform / org vault / org graph / network / node (operational) / coordination / knowledge graph / tooling / workspace / genesis-planning).

Nothing there is *wrong*, but the distance between the pitch and the taxonomy is where my skepticism reset. "Three folders" is a thing I can adopt on a Tuesday. This is an ontology I'd have to teach a team. The site never bridges that gap — it never says "here is the 20% you need on day one and here is the 80% you will never touch." I had to infer that myself.

**"context democracy".** Scrolling the homepage:

> "Language and DNA were co-created by everyone before us. The context that powers AI should be too — built, shared, and governed in the open, for the good of all."
> …
> "What a context democracy is"

This is the section where a chunk of my cohort closes the tab. It isn't dishonest, it's just a register change — I came for a directory layout and got a manifesto. If the "single computer, ours" disclosure hadn't already landed above it, I'd have read this as the tell.

**"opening progressively".** The one genuinely evasive phrase on the site, and it appears twice (homepage + `/vaults/`):

> "built on the Lattice Protocol — the coordination layer, opening progressively"

"Opening progressively" means *closed*. Every other unfinished thing on this site gets named as unfinished in plain words; this one gets a euphemism. It stands out precisely *because* the surrounding copy is so direct. `/state-of-the-network/` repeats it under "What is planned" and adds *"The specification is the public part today"* — which is clearer, but the homepage phrasing is the one most visitors will see.

**The name.** "aDNA (agentic DNA)" collides head-on with *ancient DNA*, an actual field. The spec's own worked example in §3.1 is literally *"How does ancient DNA extraction work?"* as a classification exercise. I noticed the collision before I noticed the expansion.

**Minor, but it's the first row I looked at:** on `/vaults/`, the project's own flagship vault reads `aDNA · in use · standard · Rosetta · No public description yet.` The standard's own vault has no description in the standard's own registry. Also `Home`, `Operations`, and `Spacemacs` — 4 of the 7 "in use" vaults — say "No public description yet." The one list a skeptic checks hardest is the one with the most blanks.

*(I also hit a 404 at `/network/state/` — but that was a URL I guessed, not a link the site gave me. Not a site defect; noting it only so nobody mistakes it for one.)*

## 6. What convinced you or smelled off?

### Convinced — and I want to be clear how unusual this is

I have never seen a project disclose against its own interest this hard. Not once.

The homepage, unprompted, above where most people stop scrolling:

> "74 vaults — every one of them on a single computer, ours. 15 are joined by 14 declared relationships; the rest stand alone."

Then `/state-of-the-network/` opens with:

> "The honest answer to 'how big is aDNA?' is smaller than the registry looks. 74 vaults sound like 74 teams. They are not."

And keeps going, past the point where any normal project would stop:

> "That is a real single point of failure, and it is a bounded one."

> "The federation code is written and in the public repository; it has not yet been exercised between two operators, so treat it as untested until it has been."

> "No vault page carries an externally verified public URL. The check is built and running… None has passed yet."

> "As of the last check on 2026-08-18, every commit in it came from the same person who operates this network. We would rather tell you that than let you find it."

That last one is about the partner project — the *one* piece of external validation they have — and they pre-emptively deflated it. There's also a related-party disclosure about the anchor foundation, ending: *"The Foundation has published no statement about aDNA."*

And this, on `/get-started/`, which I read twice:

> "There was a sample transcript here. We wrote it by hand, and it showed output the software does not actually print, so we removed it rather than leave a plausible-looking invention on the page you use to decide whether to trust us."

They deleted a fake demo and left the hole visible with an explanation. In fifteen years I don't think I've seen that.

Other things that read as engineering rather than marketing:
- Every claim on `/state-of-the-network/` is dated, with a stated source: *"No number on this page is typed by hand"* — read at build time from named JSON files in the public repo.
- `/vaults/` volunteers the weakness of its own data: *"These stages are self-declared. Each vault reports its own, and the registry has nothing to corroborate it with — no build status, no commit feed, no external check."*
- The spec is a real spec. §3.4: *"An aDNA instance MUST use exactly one deployment form. A project MUST NOT mix bare and embedded triads."* RFC-2119 language, section numbering, decision IDs. Not a blog post wearing a spec costume.
- *"What this site collects: nothing."* Fonts self-hosted so no third party sees the visit.

### Smelled off

**1. The whole site proves honesty and never proves efficacy.** This is my sharpest criticism and it's the one that keeps me from adopting.

I now know, with unusual precision, *how small this is* and *who runs it*. I still do not know **whether it works**. There is no benchmark, no eval, no before/after token count, no "we ran 50 sessions with and without and here is the delta." For a project that refuses to publish a hand-written transcript because the output was invented, the absence of a single measurement is glaring. They've built an impressive apparatus for not-overclaiming and pointed exactly zero of it at the core claim.

Worse, the one place they do reach for evidence, they reach for fiction — `/learn/what-is-adna`:

> "Without aDNA: a lab's 200 files sprawl across Notion, Drive, and Git. Every session starts by pasting an outdated summary; last month's decisions get re-litigated; a new collaborator needs three days to orient."

That's an invented anecdote in the "before and after" slot. Same epistemic class as the transcript they deleted, and it survived. That inconsistency is the one thing on this site that actually damages the credibility the rest of it earned.

**2. The personas.** Every vault is "tended by" a named AI character: Rosetta, Argus, Hestia, Hygieia, Berthier, Mnemosyne, Cartographer, Talos, Mondrian, Franklin, Mentor, Daedalus, Pygmalion. They're on the homepage graph, in the registry, in the CLAUDE.md excerpt (*"You are Rosetta — named after the Rosetta Stone…"*).

They disclose it — *"Those are AI personas, not people"* — and I credit that. But combined with the registry's own admission that 57 of 74 vaults are *"named places with a governance skeleton and little else"*, the impression is: mostly-empty directories, each assigned a Greek deity. It reads as a project that has spent more energy on its own mythology than on demonstrating its central claim. For my persona this is the strongest "is this someone's very elaborate personal system?" signal on the site, and no amount of disclosure neutralizes it — it's a signal about *where the effort went*.

**3. The "open standard" has exactly one vendor.** The onramp is `&& claude`. The governance file is *named* `CLAUDE.md`. They flag it — *"This is a Claude Code convention"* and *"Other agents can read the same files; they will not run this command"* — which is more than most would do. But an open standard whose entire day-one experience is bound to one company's CLI is a standard with a vendor, and it's worth saying out loud that the honesty here doesn't make the coupling go away.

**4. Structural, not deceptive:** the value on offer is a naming convention. I can get 80% of the claimed benefit today with a `docs/` folder and a decent `CLAUDE.md`, and the site never argues against that. Its own comparison pages include "aDNA vs. Plain Markdown", which is the right question — but I shouldn't have to go find it. That argument belongs on the homepage.

## 7. 30-second test (first screen only, before scrolling)

What's actually there before I scroll: nav (Standard / Learn / Vaults / Network / Commons / Use Cases / Community / Get Started), the eyebrow "Open standard · MIT", the title **The aDNA Network**, one paragraph, two buttons ("Explore the network" / "Get Started"), and the clone command in a terminal block.

**Verdict at 30 seconds: I'd keep reading.** Narrowly, and for two specific reasons.

The opening paragraph does the job in one breath — *"an open standard for organizing a project's files so AI agents… always know where things live: three folders, plain Markdown, versioned in git."* No "revolutionize," no "unlock," no "AI-native platform." Concrete nouns. That alone puts it ahead of ~90% of what lands in my feed.

Then immediately: *"Not a product or service — no server, no signup, nothing leaves your machine."* That answers the three questions I ask in the first ten seconds — *what do you want from me, what are you going to run, and where does my code go* — before I have to ask them.

And the clone command being visible on the first screen is the correct decision for me. It says *the thing is the thing*; there's no funnel.

Deductions at 30s: "The aDNA Network" is a weaker headline than the paragraph under it — it names the org rather than the value, so the first thing I read is the least useful thing on screen. And the sub-branding is dense (aDNA / vaults / Lattice Protocol / network / commons / subnetworks, all in the nav) for something that turns out to be "three folders."

## 8. Confidence I could explain this to a colleague: **7/10**

Split, and the split is the finding:

- **What it is: 9/10.** "Three folders — `what/`, `how/`, `who/` — plus a `CLAUDE.md` that acts as a contract between the repo and your agent, all plain Markdown in git." I could say that at a standup and be right. The site made that easy.
- **Why anyone should use it: 4/10.** If my colleague asks *"okay, but does it actually help?"* I have no answer that isn't a restatement of the premise. I'd have to say "they haven't shown that," and I'd be quoting nothing, because there's nothing to quote.
- **Whether to trust it: 9/10** — and this is a genuinely unusual score from me. Not because they claim to be trustworthy, but because they handed me the specific facts I'd have used against them (one operator, one machine, untested federation, zero verified external links, all partner commits from the same person) before I could find them. `/state-of-the-network/` is the best page on this site by a wide margin and it should be linked harder than it is.

**Where I'd bail, honestly:** I came within one scroll of closing the tab at "What a context democracy is." What saved it was that *"every one of them on a single computer, ours"* appears **above** the manifesto, not below it. That one clause bought them four more clicks. Reverse those two sections and this cold read ends at 45 seconds.
