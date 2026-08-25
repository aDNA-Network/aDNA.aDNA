---
type: coldread_evidence
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_synthetic_coldreader
tags: [coldread, synthetic, pre-screen, campaign_haussmann, p2_6]
synthetic: true
method: "SYNTHETIC agent cold-read — an AI agent simulating a first-time visitor. Live-site fetch only (raw HTTP, no local repo context, no prior project knowledge used). This is a PRE-SCREEN; a real human panel runs later. Do not weight as human evidence."
persona: "Experienced open-source contributor who judges a project by whether the contribution funnel actually terminates in something I can pick up — CONTRIBUTING, good-first-issues, a named maintainer, a license, a live venue."
date_visited: 2026-08-19
pages_visited: [
  "https://adna.network/",
  "https://adna.network/community",
  "https://adna.network/community/community-contribution-standards/",
  "https://adna.network/reference/governance-model/",
  "https://adna.network/about",
  "https://adna.network/commons",
  "https://adna.network/get-started",
  "https://adna.network/state-of-the-network",
  "https://adna.network/reference/specification",
  "https://adna.network/changelog",
  "https://community.adna.network/",
  "https://github.com/aDNA-Network/aDNA",
  "https://github.com/aDNA-Network/aDNA/issues",
  "https://github.com/aDNA-Network/aDNA/issues/new/choose",
  "https://github.com/aDNA-Network/aDNA/contribute",
  "https://github.com/aDNA-Network/aDNA/discussions",
  "https://github.com/aDNA-Network/aDNA/blob/main/CONTRIBUTING.md",
  "https://github.com/aDNA-Network/aDNA/blob/main/.github/CONTRIBUTING.md",
  "https://github.com/aDNA-Network/aDNA/blob/main/CODE_OF_CONDUCT.md",
  "https://github.com/aDNA-Network/aDNA/blob/main/.github/CODE_OF_CONDUCT.md",
  "https://github.com/aDNA-Network/aDNA/blob/main/LICENSE",
  "https://raw.githubusercontent.com/aDNA-Network/aDNA/main/SECURITY.md",
  "https://github.com/aDNA-Network/aDNA.aDNA",
  "https://github.com/aDNA-Network/aDNA.aDNA/blob/main/CONTRIBUTING.md",
  "https://github.com/aDNA-Network/aDNA.aDNA/edit/main/site/src/content/docs/community-contribution-standards.mdx",
  "https://raw.githubusercontent.com/aDNA-Network/aDNA.aDNA/main/CODE_OF_CONDUCT.md",
  "https://raw.githubusercontent.com/aDNA-Network/aDNA.aDNA/main/LICENSE",
  "https://api.github.com/repos/aDNA-Network/aDNA",
  "https://api.github.com/repos/aDNA-Network/aDNA.aDNA",
  "https://api.github.com/orgs/aDNA-Network/repos",
  "https://api.github.com/search/issues?q=org:aDNA-Network+label:good+first+issue"
]
time_budget: "~10 minutes simulated"
---

# Cold Read — SYNTHETIC: Open-Source Contributor

> **SYNTHETIC PRE-SCREEN.** This is an AI agent role-playing a cold visitor against the live site. It predicts likely human reactions; it is not a human reaction. A real human panel runs later — treat this as a rehearsal signal only.

## 1. What is this? (one sentence)

A file-layout convention — three folders (`who/`, `what/`, `how/`) of plain Markdown, versioned in git — that you clone as a ready-made workspace so AI coding agents can orient themselves in your project without you re-explaining it every session.

## 2. Who is it for? (one sentence)

Its own words: "For teams working with agentic coding tools on real projects" — in practice, people already running Claude Code or similar daily who are tired of re-briefing the agent, and who are comfortable adopting a documentation convention rather than installing software.

## 3. What is it NOT? (one sentence)

The site says it plainly and I believe it: "Not a product or service — no server, no signup, nothing leaves your machine" — and I'd add it is not yet a *community* in the sense I'd normally use the word, since the whole thing has 2 contributors, 2 stars and 0 forks.

## 4. Could I contribute? Trace the actual funnel, step by step, with what you found at each step

Short answer: **yes, technically — but the funnel routes me to the wrong repository, and I only found the actual contributor documentation by accident.** Every dead end I found is off-site, on GitHub. Not one adna.network route 404'd.

**Step 1 — Homepage → "Community" nav.** `https://adna.network/` → **200**. Nav has a "Community" item. Good, it's in the primary nav, not buried.

**Step 2 — `/community`.** → **200**. This is a strong page. It gives a four-level "participation ladder" (User → Contributor → Quest Runner → Steward) and, unusually, tells me what it *doesn't* have: "What you won't find here: member counts, follower numbers, or activity feeds." There's an explicit "The horizon" box admitting member profiles, follows and voting surfaces "are not built yet." I trusted this page more than I trust most community pages.

At the bottom, two CTAs: **"Contribute on GitHub"** and **"Read the contribution standards."**

**Step 3 — "Contribute on GitHub"** → `https://github.com/aDNA-Network/aDNA` → **200**. And here the funnel breaks. This repo contains exactly: `.adna`, `.github/ISSUE_TEMPLATE`, `.gitignore`, `.gitleaks.toml`, `CLAUDE.md`, `LICENSE`, `README.md`, `SECURITY.md`.

There is **no CONTRIBUTING.md and no CODE_OF_CONDUCT.md in the repository the site sends contributors to.** I checked both conventional locations:

| URL | Status |
|---|---|
| `github.com/aDNA-Network/aDNA/blob/main/CONTRIBUTING.md` | **404** |
| `github.com/aDNA-Network/aDNA/blob/main/.github/CONTRIBUTING.md` | **404** |
| `github.com/aDNA-Network/aDNA/blob/main/CODE_OF_CONDUCT.md` | **404** |
| `github.com/aDNA-Network/aDNA/blob/main/.github/CODE_OF_CONDUCT.md` | **404** |
| `github.com/aDNA-Network/aDNA/discussions` | **404** (Discussions disabled) |
| `github.com/aDNA-Network/aDNA/blob/main/LICENSE` | 200 (MIT — this one's fine) |
| `github.com/aDNA-Network/aDNA/issues` | 200 |
| `github.com/aDNA-Network/aDNA/issues/new/choose` | 200 (2 templates: `bug_report.md`, `change_proposal.md`) |

**Step 4 — Is there anything to pick up?** No. **1 open issue**, org-wide. It's `#1 adna_validate.py: exclude non-content trees…`, filed by `jakejjoyner` — who is also the only non-founder contributor (1 commit). It carries **no labels**.

Label search across the whole org: **`good first issue` → 0 open. `help wanted` → 0 open.** The repo does have those labels defined, but they're the stock nine GitHub ships by default (`bug, documentation, duplicate, enhancement, good first issue, help wanted, invalid, question, wontfix`) — never curated, never applied. Contributors: `ScienceStanley` (15 commits), `jakejjoyner` (1). 16 commits total, 2 stars, **0 forks**. Last push was yesterday, so it is genuinely being worked on — by one person.

**Step 5 — "Read the contribution standards"** → `https://adna.network/community/community-contribution-standards/` → **200**. Genuinely useful content: naming conventions, five quality gates, three submission workflows, a level-to-permission mapping. But note what it *is*: an on-site doc page, not a `CONTRIBUTING.md` in the repo. GitHub's own contributor affordances — the "please read the contributing guidelines" banner that appears when you open an issue or PR — never fire, because the file isn't there.

**Step 6 — the accidental discovery.** In the footer of that docs page there's a small **"Edit this page"** link. It points to a *different repository*:
`https://github.com/aDNA-Network/aDNA.aDNA/edit/main/site/src/content/docs/community-contribution-standards.mdx` → **200**.

And `aDNA-Network/aDNA.aDNA` **does** have `CONTRIBUTING.md` (**200**) and `CODE_OF_CONDUCT.md` (**200**, a proper Contributor Covenant v2.1). Both are good documents. **The contribution funnel is split across two repos and the advertised CTA points at the one without the contributor files.** I only found them because I habitually check "Edit this page."

**Step 7 — the licensing problem.** `aDNA-Network/aDNA.aDNA` — the repo the "Edit this page" PR flow drops me into, and where the entire site source lives — has **no license**:

| URL | Status |
|---|---|
| `raw.githubusercontent.com/aDNA-Network/aDNA.aDNA/main/LICENSE` | **404** |
| `raw.githubusercontent.com/aDNA-Network/aDNA.aDNA/main/LICENSE.md` | **404** |
| GitHub API `license` field for `aDNA.aDNA` | **`null`** |

The homepage says "Open MIT-licensed — the spec, the workspace image, and the registry data are public." That's true of `aDNA`. It is not true of `aDNA.aDNA`. **I will not send a PR to an unlicensed repo** — that's a hard stop for me, not a nitpick. Zooming out, the org has 19 public repos and only 3 carry any license (`adna-legacy` MIT, `aDNA` MIT, `spacemacs` GPL-3.0); the other 16, including every `*.aDNA` vault, are unlicensed.

**Step 8 — self-contradiction inside the good repo.** `aDNA.aDNA/CONTRIBUTING.md` says: "This project will adopt the Contributor Covenant v2.1 as its Code of Conduct. The `CODE_OF_CONDUCT.md` file will be added in a future update." The `CODE_OF_CONDUCT.md` is sitting **in the same directory, right next to it.** Someone shipped the CoC and never updated the sentence promising it. Minor, but it's the kind of thing that makes me wonder what else is stale.

**Step 9 — the community venue.** `https://community.adna.network` → **200**, redirects to `/`. It is a self-hosted Fluxer instance and renders nothing without JavaScript — the entire body I received was `Fluxer JavaScript is required to use this application.` The site had already warned me, dated and specific: "Honest state, as of 2026-08-17: registration is approval-gated, and its terms of service, privacy policy, and branding are still being stood up." So: it resolves, it isn't a dead link, but as a drive-by contributor I cannot get in today. I appreciated being told that *before* I clicked rather than after.

**Step 10 — governance and maintainer.** `/reference/governance-model/` → **200**. Founding Architect model, explicit RFC path ("Open a GitHub Issue using the 'Change proposal' issue template"), a normative backwards-compatibility promise, and a clear statement that decentralization "is a roadmap, not a claim about today." `/about` → **200** names a real human: **Stanley Bishop**, Founding Architect, with affiliations and a personal domain, plus the sentence "aDNA is stewarded today by one person, who holds decision authority over the standard while the network is young." I know exactly who would review my PR. That is more than most projects this size give me.

**Verdict.** Could I contribute? Yes — the mechanical path exists (fork, branch, PR; issue templates work; a named maintainer would see it). Would I want to? Not this week. There is literally nothing labelled for a newcomer to pick up, the CTA sends me to a repo missing its contributor files, and the repo I'd actually be PR-ing into has no license. Those are three cheap fixes, though, not architectural problems.

## 5. What confused you? Exact phrases that lost me

- **"74 vaults — every one of them on a single computer, ours."** I re-read this three times. It's admirably honest, but it detonates the "74" I'd just read one line earlier in the same sentence. Then the next clause narrows it again: "15 are joined by 14 declared relationships; the rest stand alone." So the real number of things participating in a *network* is 15, on one machine. Leading with 74 and retracting it within the same sentence made me distrust the stat block ("74 Vaults") that follows.
- **"built on the Lattice Protocol — the coordination layer, opening progressively."** I have no idea what this is, it's not in the nav, and "opening progressively" reads like "not open yet." Introducing an unexplained second proper noun in the hero cost me confidence.
- **"vaults"** — used ~30 times before it's defined. I inferred "a vault = one project's folder tree" only from the `/vaults/` listing. The homepage does gloss it once ("workspaces — 'vaults'") but in a parenthetical I skimmed past.
- **"tended by Rosetta" / "tended by Argus" / "tended by Hestia."** On first read I thought these were people and got briefly excited that the project had maintainers. They're AI personas. The `/about` page explains this well and honestly — but the homepage registry cards use "tended by" with no cue, so the correction arrived two pages later than the impression.
- **"Level 2 Quest Runner — Run structured community experiments."** I could not find an actual quest to run from the community page. It's a rung on a ladder with, as far as I can tell, nothing currently on it.
- **"Recognized by maintainers, never self-appointed"** (Level 3 Steward) — "maintainers" plural, when `/about` says stewardship is one person. Small tension between two pages.

## 6. What convinced you or smelled off?

**Convinced me — and this is the project's genuine differentiator:**

- The anti-hype discipline is the most credible thing here. "What you won't find here: member counts, follower numbers, or activity feeds. The record doesn't track them, so this page doesn't show them." I have never seen a project *decline* to show a vanity metric and explain why. That bought more trust than any number would have.
- Dated, specific admissions of incompleteness: "Honest state, as of 2026-08-17: registration is approval-gated…" and "The horizon: Member profiles, follows, activity feeds… are not built yet." Most projects would have shipped a Discord badge and let me discover the emptiness myself.
- `/about` names one real person and says "not a council we haven't formed," and flags its own conflict of interest — the Founding Architect also holds a role at the anchor partner, "so read this as a close relationship rather than an independent organisation vouching for us." That is a disclosure most orgs bury.
- `SECURITY.md` is real and correct: private GitHub Security Advisories first, an explicit fallback ("open a minimal public issue saying only 'security report — please open a private channel'"), and a stated preference for no public disclosure. Someone who has actually handled a report wrote that.
- The governance page has a *normative* backwards-compatibility promise with a spec section reference. That's a standards-body instinct, not a side-project instinct.

**Smelled off:**

- **The two-repo split is the real problem.** "Contribute on GitHub" → the repo without CONTRIBUTING or a CoC; the repo *with* them is reachable only via a footer "Edit this page" link. A project that is this careful about honesty elsewhere shipping its contribution CTA to the wrong repo reads as an oversight rather than a deception — but it's the single highest-leverage fix on this list.
- **An unlicensed docs repo behind an "MIT" headline.** Not a lie (the workspace image *is* MIT), but the repo I'd contribute to isn't, and no page says so. This is the one item I'd call a blocker.
- **`good first issue` and `help wanted` labels that exist but have never been used, on a project whose community page is built around a "participation ladder."** The ladder's Level 1 is "Contributor," and there are zero contributor-sized things to do. The scaffolding for community is more built-out than the community.
- **CONTRIBUTING.md promising a CoC that already exists beside it.** Stale docs in the document that teaches documentation standards. Given that this project's whole pitch is "your context, kept current," that's an unfortunate place for drift.
- 0 forks with 2 stars, against a site that presents "The aDNA Network." The site is dramatically more built-out than the thing it describes. To be fair, the site keeps telling me that.

## 7. 30-second test (first screen only, before scrolling)

What I got above the fold: **"Open standard · MIT"**, the title **"The aDNA Network"**, and one paragraph that actually lands — "an open standard for organizing a project's files so AI agents — and the people working with them — always know where things live: three folders, plain Markdown, versioned in git." Then a disclaimer I liked ("Not a product or service — no server, no signup, nothing leaves your machine"), a copy-paste clone command, and two buttons: *Explore the network* / *Get Started*.

**Verdict at 30 seconds: pass.** I knew what it was, what it cost me (a folder convention, not an install), and that it was MIT. "Three folders, plain Markdown, versioned in git" is the single best sentence on the site — concrete, falsifiable, no jargon. The clone command in the hero is the right call for this audience.

Two things I'd have flagged at 30 seconds: "built on the Lattice Protocol" is an undefined dependency in the hero, and there's no "Contribute" affordance in the first screen — "Community" is in the nav but I'd have to know to look there. For a project whose whole thesis is open commons, the first screen sells *use*, not *participation*.

## 8. Confidence I could explain this to a colleague: **8/10**

I could say this cleanly right now: "It's a convention for laying out a repo in three folders — who/what/how — plus a couple of Markdown governance files, so your coding agent knows where things are without you re-explaining the project each session. MIT, clone-and-run, nothing to install." That's a solid 9 on the *what*.

The two points I'd lose are on the *network*: I still can't tell a colleague what the Lattice Protocol is, what a subnetwork does for me, or why 74 vaults on one person's machine should matter to my project. If she asked "so who else uses it?" I'd have to say "two people, and they're honest about that."
