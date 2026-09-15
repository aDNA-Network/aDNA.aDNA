---
type: artifact
created: 2026-09-15
updated: 2026-09-15
status: completed
last_edited_by: agent_codex
runtime: codex
tags: [garnier, p0, SYNTHETIC, coldread]
---
# SYNTHETIC engineer prescreen

[D-syn] Fresh CLI context outside the vault, supplied only role/task and the frozen public homepage first-fold image, then the public captured page index. General runtime instructions apply, but no private project governance, answer key, campaign rationale or peer result was supplied. This is a sequential task simulation, **not a timed three-second/three-minute human experiment**. The browsing answer follows self-directed public-link reading; it cannot estimate what a human reaches in three minutes. Prior governance-primed engineer diagnostic is excluded.

## First-fold answer — frozen before browsing

The project provides **aDNA, an open standard for organizing project files** so AI agents and people can find context. It uses three folders, plain Markdown, and git, with files staying on your machine. The website provides the standard, documentation, and a registry of workspaces called “vaults.”

Right now, I can explore the network, open the learning and standard sections, follow “Get Started,” or use the displayed command to clone the repository and launch Claude.

My immediate synthetic reaction: “I understand the promise of organizing context, but what are the three folders, and what makes a workspace a ‘vault’? Am I adopting a convention in my existing project or cloning a separate workspace?”

## Browsing task answer

## Synthetic browsing path

Followed these links in order, reading only their indexed local copies:

[Homepage](https://adna.network/) → [Get Started](https://adna.network/get-started) → [What your agent reads](https://adna.network/get-started/what-your-agent-reads/) → [Workspace router](https://adna.network/get-started/what-your-agent-reads/workspace-router/) → [Standard governance](https://adna.network/get-started/what-your-agent-reads/standard-governance/).

## Exact initial command

```sh
git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude
```

**Prerequisites:** Git and Claude Code installed; launching Claude Code also requires an Anthropic account. The page supplies `npm install -g @anthropic-ai/claude-code` as its installation command. Obsidian is optional. [Located artifact](raw/public/adna_get-started.txt:13)

The command clones the workspace and launches the agent. The documented next step is agent-guided project creation using `.adna/how/skills/skill_project_fork.md`, followed by optional onboarding. I did not execute anything from the site. [Setup flow](raw/public/adna_get-started.txt:65)

## Where context and governance live

- **Workspace:** `~/aDNA/CLAUDE.md` routes between projects.
- **Standard:** `~/aDNA/.adna/` contains the embedded standard and procedures; agents are instructed not to edit it.
- **Project:** `~/aDNA/<name>.aDNA/` has its own git history and authoritative `CLAUDE.md`. Its `STATE.md` holds current operational state.
- **Context:** `what/context/` holds the context library; `what/decisions/` holds architecture decisions. `how/` holds operations and session records; `who/governance/` holds roles and policies. `AGENTS.md` files supply directory guidance.

These locations appear in the [setup example](raw/public/adna_get-started.txt:92), [router source](raw/public/adna_get-started_what-your-agent-reads_workspace-router.txt:31), and [governance source](raw/public/adna_get-started_what-your-agent-reads_standard-governance.body).

## Remaining confusion and missing evidence

My remaining synthetic reaction: **“Get Started says the router ships at the root, but the displayed template says to copy it there and update a separate `.adna/` clone. Are those template instructions obsolete?”**

I could not find a recorded, clean-machine first run along this route. Get Started explicitly says that recording is not yet available, so I found documented behavior and source instructions, but no demonstrated successful run. [Recording notice](raw/public/adna_get-started.txt:76)

## Provenance and limits

[D-syn] All reactions above are the model’s synthetic utterances, not participant quotations. No website command was executed or external network evidence added. Raw responses/prompts and command receipts are retained under evidence/p0/raw/readers and reader_runtime_receipts.json. Citation targets were normalized from the temporary public-copy directory; response wording is retained. API token usage is reported separately from estimated content-load, without a currency claim.

Related: [[reader_protocol]] · [[prescreen_pack]].
