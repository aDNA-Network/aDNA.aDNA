---
type: coldread_evidence
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_synthetic_coldreader
tags: [coldread, synthetic, pre-screen, campaign_haussmann, p2_6]
synthetic: true
method: "SYNTHETIC agent cold-read — an AI agent simulating a first-time visitor. Live-site fetch only (raw HTTP, no local repo context, no prior project knowledge used). This is a PRE-SCREEN; a real human panel runs later. Do not weight as human evidence."
persona: "Clinician-researcher in rare disease — sees patients, runs a small translational group, uses ChatGPT/Claude in a browser, can open a terminal but avoids it; cares about relevance, patient-data safety, credibility, and effort."
date_visited: 2026-08-19
pages_visited: [
  "https://adna.network/",
  "https://adna.network/use-cases/research-lab/",
  "https://adna.network/vaults/rarearchive/",
  "https://adna.network/vaults/wilhelmai/",
  "https://adna.network/privacy",
  "https://adna.network/security",
  "https://adna.network/about",
  "https://adna.network/commons/",
  "https://adna.network/get-started",
  "https://adna.network/state-of-the-network",
  "https://adna.network/learn/what-is-adna"
]
time_budget: "~10 minutes simulated"
---

# Cold Read — SYNTHETIC: Clinician-Researcher (rare disease, non-engineer)

> **SYNTHETIC PRE-SCREEN.** This is an AI agent role-playing a cold visitor against the live site. It predicts likely human reactions; it is not a human reaction. A real human panel runs later — treat this as a rehearsal signal only.

## 1. What is this? (one sentence)

It is a naming-and-folder convention — three folders (`what/`, `how/`, `who/`), plain Markdown files, kept in git — that you put on top of a project so that an AI coding assistant can find its way around without you re-explaining the project every time.

I want to say the site earned that sentence: the very first paragraph on the homepage is unusually plain for this kind of site — *"an open standard for organizing a project's files so AI agents — and the people working with them — always know where things live: three folders, plain Markdown, versioned in git."* That is the clearest sentence on the entire site and I understood it on first read. Almost nothing else I read was that clear.

## 2. Who is it for? (one sentence, and: is it for ME?)

It is for people who already run AI agents inside a code editor or terminal on software-ish projects — and the site says so itself, on the first screen: *"For teams working with agentic coding tools on real projects."*

**Is it for me? No — and I decided that in about 40 seconds, from the homepage, before I found anything that argued otherwise.** Three things did it:

1. That sentence. I do not use "agentic coding tools." I use Claude in a browser tab. The homepage draws the boundary and I am on the outside of it.
2. The hero shows a **terminal command** (`git clone … && cd ~/aDNA && claude`) as the main call to action. In my world, a command line on the front page means "not for you."
3. The name. **In my field "aDNA" means *ancient DNA*.** I read the domain and the logo as a paleogenomics resource. Then the site told me it means "agentic DNA," and used "genome for your project" as a metaphor. So the one word that is doing the branding is a word my field already owns, used here to mean something with no biological content at all. I found this genuinely disorienting, and I would expect a geneticist colleague to bounce off it harder than I did.

What *did* pull me in: the homepage lists **"Wilhelm AI for the Undiagnosed"** and **"Rare Archive"** as featured missions, and the About page names the **Wilhelm Foundation** and **"rare disease, undiagnosed disease"** as the core missions it recruits stewards from. That is my exact field, named on the front page. So the site made me think for a moment that there was something *for me* here. Following it was the biggest let-down of the visit — see §4.

## 3. What is it NOT? (one sentence)

It is not a product, a service, a database, or anything that stores or analyses data — the site is emphatic and repeats it: *"Not a product or service — no server, no signup, nothing leaves your machine."*

It is also, and the site says this itself on `/state-of-the-network`, **not yet a network**: all 74 "vaults" run on one computer, operated by one person, and the sharing machinery *"has not yet been exercised between two operators."*

## 4. Would you try it? What would you actually do first — and where would you give up?

**No, I would not try it.** Here is the actual path I took and where it ended.

**First move — I did not go to Get Started.** I went hunting for the rare-disease content, because that is the only reason I would still be on the page at minute two. I clicked through to **Rare Archive**. What I got (`/vaults/rarearchive/`) was, in its entirety:

> RareArchive.aDNA · "Rare Archive OSS rare-disease AI project." · Class: org vault · Stage: chartered *(self-declared)* · Persona: Mnemosyne · Governance: RareArchive.aDNA/CLAUDE.md · Last synced 2026-05-24 · 0 outgoing · 1 incoming

That is the whole page. **Nothing about rare disease is on it.** No description of what the archive contains, no diseases, no data, no publication, no people, no link I could open. For a clinician who clicked because they saw "rare disease," this page is empty. `/vaults/wilhelmai/` was the same shape and added an unexplained acronym — *"Four PLWUD-impact initiatives"* — with no expansion. (I can guess "people living with undiagnosed disease." The one acronym on the whole site aimed squarely at my field is the one left unexpanded.)

**Second move — the Research Lab use case**, since that is nominally me. It is a well-written page about "Dr. Maya Chen," a computational biology PI doing protein folding, binding assays, and docking — so, a dry-lab structural biology group, not a clinical one. It is honestly labelled *"Illustrative scenario — a composite archetype, not a real named adopter,"* which I respect and which also told me plainly: **no actual research lab is using this.** There is no clinical or patient-facing example anywhere on the site.

**Third move — data safety**, because that is my job. `/privacy` and `/security` are both excellent *for what they cover* and I will say so in §6. But **neither one answers my question**, which is: *can patient data go in this thing?* The words HIPAA, GDPR, PHI, de-identification, IRB, consent, and "patient" do not appear on either page. The privacy page is entirely about the website's own visitors. The security page's only data guidance is about not committing secrets.

And meanwhile the homepage says, in the same breath as the reassurance:

> *"Your context is just the notes, docs, and decisions you already keep — now shaped into a graph your agents can navigate, **and shared in the open**."*

**Read that as a clinician.** "The notes you already keep" + "shared in the open" is, to me, a sentence about my clinical notes going public. The site elsewhere says sharing is opt-in and local-by-default and I believe it — but that homepage sentence, and the whole "commons / federate / shared context" framing around it, actively fights the "nothing leaves your machine" message sitting two lines above it. **I could not tell from the front page which one was true**, and for a clinician that ambiguity alone is disqualifying. I would not put anything patient-adjacent in a system whose front page uses "shared in the open" as a selling point.

**Where I gave up: the prerequisites on `/get-started`.** *"Git, and Claude Code installed via `npm install -g @anthropic-ai/claude-code`."* I do not have npm. I do not know what `-g` does. I have no confident model of what `npm install -g` changes on my laptop, and I am on a machine with institutional restrictions. That line is the wall. Everything after it — and the page after it is genuinely careful and thorough — I will never reach.

I want to flag one thing the Get Started page does that I have *never* seen another site do, and it moved me: it says the real trust question out loud —

> *"these files are prompt-ware, and prompt-ware is executed by the agent that reads it. So read them first."*

and then links every file the agent reads, verbatim, at a pinned commit, with hashes. I did not understand "prompt-ware" as a word, but I completely understood the concern being described, and I have never seen a project volunteer its own attack surface like that. It did not get me over the npm wall. It did make me think better of whoever wrote it.

## 5. VERBATIM CONFUSION LIST — every word or phrase I could not confidently define, in order of appearance

**Homepage (`/`)**

1. **"aDNA"** — collides head-on with *ancient DNA*, the standard abbreviation in my field. I read the domain as paleogenomics.
2. **"agentic DNA"** — "agentic" is doing enormous work here and is never defined on this page.
3. **"shared context"** (tagline) — "context" is used as a technical noun ~30 times across the site before anything defines it; the homepage's later attempt (*"the notes, docs, and decisions you already keep"*) is good, but it arrives after the term has already been used as if known.
4. **"vaults"** — in scare quotes, glossed as "workspaces," which I also do not have a picture of. Then used as the primary noun for the rest of the site.
5. **"For teams working with agentic coding tools on real projects."** — I do not know what an agentic coding tool is; I inferred "AI that edits code."
6. **"built on the Lattice Protocol — the coordination layer, opening progressively"** — three unknowns in nine words. What is Lattice Protocol? Coordinating what? **"opening progressively"** — opening to whom, and does that mean it is closed now?
7. **"74 vaults — every one of them on a single computer, ours."** — I could not tell if this was a boast or a confession until I read the state-of-the-network page. (It is a confession. Good.)
8. **"15 are joined by 14 declared relationships; the rest stand alone."** — I did not know what a relationship between two folders means.
9. **"16 Entity Types"** — headline statistic; meaningless to me at this point.
10. **"3 Conformance Levels"** — conforming to what, and what happens at each level?
11. **"v2.5 Current Version"** — of what? The standard, the site, or the software?
12. **"aDNA.aDNA Rosetta" / "III.aDNA Argus" / "Molecules.aDNA Franklin"** — every item in the diagram carries a mythological name. I did not learn until the About page that these are **AI personas**, not people. Until then I assumed they were team members and was mildly impressed by the size of the team. That is a misreading the front page invites.
13. **"the most-federated hubs (III and Astro)"** — "federated" used as a measure; "III" is a name I cannot pronounce or search for.
14. **"umbrella, federation, partner, companion"** (relationship types) — four undefined categories.
15. **"context democracy"** — a coined phrase, given its own heading. I could not tell if it was a governance claim, a philosophy, or a feature.
16. **"each project its own graph, all of them federating into a shared commons"** — "graph," "federating," and "commons" in one clause.
17. **"forges, frameworks, platforms, and public-good archives"** — "forge" as a noun for a kind of project is unfamiliar.
18. **"tended by a named agent"** — I did not know an agent could tend anything, or what tending consists of.
19. **"the standard in use / framework in use / platform planned / coordination in use / knowledge graph in use / node in use / org vault chartered"** — the status labels on the vault cards. Two axes (kind and stage) with no key on the page.
20. **"Modules, datasets, and lattices compose into workflows."** — **"lattices"** is the one I never resolved anywhere on the site.
21. **"campaigns / missions / sessions / objectives"** — military framing used as the core work vocabulary. I can guess the hierarchy; I do not know why it is called this.
22. **"CLAUDE.md" / "STATE.md" / "AGENTS.md" / "MANIFEST.md"** — filenames used as concepts. `CLAUDE.md` also silently locks the whole thing to one vendor's product in a way the "open standard" framing does not prepare you for.
23. **"typed context"** / **"typed entities"** / **"typed I/O"** — "typed" recurs and is never explained in lay terms.
24. **"no prompt re-engineering every session"** — I do not know what prompt re-engineering is.
25. **"the triad"** — capitalised concept, three folders. Fine once explained, but presented as if already known.
26. **"Decade backbone / D1 Credibility-integrity — active / D2 Navigation & docs — queued"** (inside the sample mission file on the homepage) — **"Decade backbone"** is the single most opaque phrase on the site. I have no idea whether it means ten of something, a ten-year plan, or a codename.
27. **"The standard embeds in `.adna/`"** — a hidden folder; "embeds" as an intransitive verb.
28. **"Convergence Model"** — capitalised, linked, unexplained in place.

**`/use-cases/research-lab/`**

29. **"a bare-triad vault"**
30. **"extends the ontology with domain-specific types"** — I know "ontology" from biomedical ontologies (HPO, ORDO, SNOMED); it is being used here in a *completely different* sense (roughly: file categories). That collision is worse than an unknown word, because I confidently mis-read it first.
31. **"Each file is 150-300 lines, table-driven, quality-scored"** — scored by whom, against what?
32. **"lattices/ # Analysis pipelines (lattice YAML)"** and **".lattice.yaml"** — the file format is named after the concept I still cannot define.
33. **"Federation lets Maya share validated analysis lattices with collaborating labs"** — this is the sentence closest to something I would want, and it is built entirely from words I do not have.
34. **"Federation Readiness — the six-point checklist that gates cross-lab sharing"** — "gates" as a verb.
35. **"FAIR Metadata"** — *this one landed.* FAIR is real currency in my world and its appearance was the single strongest "these people know research" signal on the site.

**`/vaults/rarearchive/` and `/vaults/wilhelmai/`**

36. **"Class: org vault"**
37. **"Stage: chartered · self-declared"** — "chartered" by whom, and "self-declared" reads like a disclaimer I should be worried about.
38. **"Persona: Mnemosyne"**
39. **"Last synced 2026-05-24 — registry sync, not vault activity"** — the clarification told me the date does *not* mean what I would assume, but not what it does mean.
40. **"0 outgoing · 1 incoming"** — outgoing/incoming *what*.
41. **"a node is a Home.aDNA plus the vaults that live on it"** — a definition made entirely of undefined terms.
42. **"Four PLWUD-impact initiatives."** — unexpanded acronym, on the one page aimed at my field.
43. **"AI4U"** (commons page) — same.

**`/get-started`**

44. **"npm install -g @anthropic-ai/claude-code"** — **this is where I stop.**
45. **"prompt-ware"** — coined; the *concept* around it was clear, the word was not.
46. **"shown verbatim, at a pinned commit, with hashes you can check against your own clone"** — I understood the intent (you can verify nothing changed) but could not perform any of it.
47. **"the router comes pre-instantiated"**
48. **"the standard's project-fork skill"** / **"skill_workspace_upgrade"** — "skill" as a noun for a procedure file.
49. **"the workspace image"** — "image" in the software sense.
50. **"each prints nothing and exits 0 on success"** — "exits 0" assumes shell literacy.
51. **"kept out of the workspace image's history by design"**

**`/commons/`**

52. **"Federate a wrapper … a wrapper directory with a `federation_ref` block, the same pattern every forge consumer uses"** — one of the three ways to participate, and I understood none of it.
53. **"the network's membership and federation substrate"**
54. **"Apache-2.0 + CC-BY-4.0"** — I know these are licences; I do not know what the pairing implies for data.
55. **"Stewarded by Hygieia"** — another persona presented in a "who runs this" slot.
56. **"the governance record is the social surface"**

**`/state-of-the-network`**

57. **"By stage: 57 genesis, 10 pending, 7 active"** — a third stage vocabulary, different from the two above.
58. **"canonical properties"** / **"machine-readable surfaces"**
59. **"the federation code … has not yet been exercised between two operators"** — I understood this one, and it was the most informative sentence on the site.

**`/learn/what-is-adna`**

60. **"Think of it as a genome for your project"** — the metaphor is the branding; to someone who works with actual genomes it is noise, and slightly grating.
61. **"an agent burns tokens on the wrong content"** / **"weeks of work vanish when the context window closes"** — "tokens" and "context window" assume LLM-internals fluency.
62. **"frontmatter"**
63. **"ADRs (Architecture Decision Records)"** — expanded, still unfamiliar as a practice.
64. **"modules — Atomic capability units with typed I/O"**
65. **"pipelines — Content-as-code automated workflows"**
66. **"aDNA vs. PARA / Zettelkasten / Johnny.Decimal"** (sidebar) — three comparison targets I have never heard of, which told me who the intended reader is more efficiently than any other element on the site.

## 6. What convinced you or smelled off? (credibility, data safety, who is behind it)

**What convinced me — and this part is genuinely unusual.**

The `/state-of-the-network` page is the most honest thing I have read on a project website. It opens with *"The honest answer to 'how big is aDNA?' is smaller than the registry looks. 74 vaults sound like 74 teams. They are not."* It then states: all 74 run on one computer, operated by one named person; the graph on the homepage *"is not evidence of adoption, and this site will not present it as any"*; **"no vault page carries an externally verified public URL … None has passed yet"**; and — the line that actually moved me — of the one public rare-disease repository, *"every commit in it came from the same person who operates this network. We would rather tell you that than let you find it."*

The `/about` page does the same on the relationship I would have gone looking for: the Founding Architect **also holds a role at the Wilhelm Foundation**, and the page says outright to *"read this as a close relationship rather than an independent organisation vouching for us,"* and that **the Foundation has published no statement about aDNA.** In my world, undisclosed dual affiliation is the standard failure mode. Volunteering it, unprompted, in the first screen of the about page, is a real credibility signal — the strongest one on the site.

And `/get-started` contains this, where a fabricated demo used to be:

> *"There was a sample transcript here. We wrote it by hand, and it showed output the software does not actually print, so we removed it rather than leave a plausible-looking invention on the page you use to decide whether to trust us."*

Retracting your own marketing copy, in place, with the reason, is not something I have seen before. **On the narrow question "is the person behind this honest?" my answer is yes, more than most.**

**What smelled off, or simply is not there.**

- **The honesty is about the network, not about me.** Everything above answers "how big are you." Nothing answers "is my patient data safe in this." Those are different questions and only one is addressed.
- **No clinical, patient, or regulatory posture anywhere.** No HIPAA, no GDPR, no PHI, no de-identification, no IRB, no data-use agreement, no "do not put patient data in a vault," no "here is what local-first means for a covered entity." For a site that puts rare and undiagnosed disease at the centre of its mission and recruits stewards from those communities, that gap is conspicuous. The one place it comes close — *"Treat your vault's inventory, credentials index, and node identity as sensitive"* — is about API keys, not people.
- **"Shared in the open" next to "nothing leaves your machine."** Covered in §4. This is the single thing that would stop me even if I had npm.
- **The two front-page rare-disease hooks lead to empty pages.** Featuring "Rare Archive" and "AI for the Undiagnosed" prominently and then serving a card with `Class: org vault / Stage: chartered / Persona: Mnemosyne` is a bait-and-switch in effect even if not in intent. The site's own commons page concedes two of four subnetworks have *"No public site yet."* If the honesty doctrine is real, the honest version of the homepage would not feature four missions of which half do not exist yet.
- **One person, one machine, no independent user.** The site tells me this itself, so it is not a smell so much as a fact — but combined with "no vault has a verified external URL" and "no real named adopter," the correct read is: **this is one person's method, documented extremely well, with zero external validation.** For adopting anything into a clinical research workflow, that is a no.
- **A minor one that nags:** "open standard, MIT, no lock-in, plain Markdown, any tool can read it" is asserted repeatedly, but the entry point is a file literally named `CLAUDE.md`, the install requires one vendor's CLI, and Get Started admits *"this one-command flow assumes Claude Code specifically."* The site is honest about it in the fine print and unhonest about it in the headline.

## 7. 30-second test (first screen only, before scrolling)

What I actually took from the first screen, in order:

1. **"aDNA"** → my brain says *ancient DNA*. I expect a genomics resource. Wrong footing from character one.
2. "Open standard · MIT" → free and public. Fine.
3. The definition sentence → **this is the win.** "Organizing a project's files so AI agents always know where things live: three folders, plain Markdown, versioned in git." I got it. That is rare.
4. **"For teams working with agentic coding tools on real projects."** → *not me.* Decision essentially made here.
5. **"Not a product or service — no server, no signup, nothing leaves your machine."** → good, and I believed it.
6. **A terminal command as the primary call to action** → confirms *not me*.
7. **"and shared in the open"** → wait, which is it.

**Verdict at 30 seconds:** I understood what it is (unusual and to the site's credit), and I concluded it was not for me (also from the site's own words). Nothing on that first screen was aimed at a researcher or a clinician. The rare-disease material — the only thing that would have kept me — is far below the fold, and when I found it, it was empty.

## 8. Confidence I could explain this to a colleague: **6/10**

Split, because the two halves are not close:

- **The core idea: 8/10.** "It is a folder convention — three folders, plain Markdown files, in git — so an AI assistant can find its way around your project without you re-explaining it each time." I could say that at a lab meeting and defend it. The homepage's opening sentence and the `/learn/what-is-adna` "three-question test" both do real work.
- **Everything called "network": 2/10.** I cannot explain what a lattice is, what federating a wrapper does, what a `federation_ref` block is, what makes a vault a "forge" versus a "platform," or in what sense 74 folders on one laptop constitute a network. If my colleague asked "so is it a network or a folder layout?" I would have to say "the site says both, and also says the network part has never actually been used between two people."

And I would open with a caveat that has nothing to do with the software: **"ignore the name — it has nothing to do with ancient DNA."**
