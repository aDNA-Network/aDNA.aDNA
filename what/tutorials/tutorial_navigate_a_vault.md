---
type: tutorial
created: 2026-04-14
updated: 2026-07-02
status: active
level: beginner
prerequisites: []
estimated_time: "15 minutes"
dual_audience: true
last_edited_by: agent_rosetta
tags: [tutorial, beginner, navigation, vault, triad]
---

# <img src="../../site/src/assets/icons/icon_learn.svg" alt="learn" width="22" /> Navigate an aDNA Vault

## What You'll Build

Nothing — this is a guided tour. By the end, you'll understand how an aDNA vault is organized and be able to find any piece of knowledge in it. You'll navigate the vault you're reading right now.

**Prerequisites**: none. This is the starting point.

## Steps

### Step 1: Look at the Root

Open the root of this vault (`aDNA.aDNA/`):

```
aDNA.aDNA/
├── CLAUDE.md       ← Agent instructions (the "brain" of the project)
├── AGENTS.md       ← Root navigation guide
├── MANIFEST.md     ← What this project IS
├── STATE.md        ← Where this project IS NOW
├── README.md       ← Human entry point
├── what/           ← Knowledge
├── how/            ← Operations
└── who/            ← People
```

Those three directories — `what/`, `how/`, `who/` — are the [[what/concepts/concept_triad|triad]]. Every piece of knowledge lives in exactly one. aDNA organizes by answering three questions.

### Step 2: Explore What the Project Knows

Enter `what/` — the knowledge leg:

```
what/
├── context/       ← Curated knowledge for AI agents (~75K tokens)
├── concepts/      ← Core aDNA concepts (13 files)
├── tutorials/     ← You are here
├── patterns/      ← Reusable architectural patterns (8 files)
├── comparisons/   ← aDNA vs. other systems (5 files)
├── decisions/     ← Architecture Decision Records
├── docs/          ← Specification documents
└── lattices/      ← Workflow definitions (YAML + tools)
```

Each directory has an `AGENTS.md` telling AI agents whether to load it. Open `what/concepts/AGENTS.md` — "Load when creating or reviewing concept documentation. Skip when working on operational infrastructure." That's [[what/patterns/pattern_agents_md|AGENTS.md routing]].

### Step 3: Explore How the Project Works

Enter `how/` — the operations leg:

```
how/
├── campaigns/     ← Strategic initiatives (Operation Rosetta lives here)
├── missions/      ← Standalone task decompositions
├── sessions/      ← Session audit trail (active/ + history/)
├── templates/     ← Reusable file templates (41 templates)
├── skills/        ← Agent recipes and procedures
├── pipelines/     ← Content-as-code workflows
├── backlog/       ← Ideas and improvements
└── quests/        ← Community validation experiments
```

Notice the pattern: every directory is named for what it contains, each has its own `AGENTS.md`. The vault is self-describing.

### Step 4: Explore Who's Involved

Enter `who/` — the people leg:

```
who/
├── governance/    ← Roles, policies, vision
└── coordination/  ← Cross-agent notes
```

Smaller than `what/` and `how/`, but critical for governance and team coordination.

### Step 5: Read the Governance Files

Back at the root, open `STATE.md`. It tells you the project's current operational status — what phase it's in, what's working, what's blocked, what to do next. An AI agent reads this on every startup.

Now open `MANIFEST.md`. It tells you what the project IS — identity, purpose, scope. `STATE.md` changes every session; `MANIFEST.md` changes rarely. Together with `CLAUDE.md` (agent instructions), `AGENTS.md` (navigation), and `README.md` (human entry point), these five files are the [[what/concepts/concept_governance_files|governance files]] — the orientation layer.

### Step 6: Follow a Thread

Pick any concept file — say `what/concepts/concept_triad.md`. Open it. At the bottom, the "Related" section has wikilinks to other concepts. Follow one. Then follow another. You're navigating the [[what/concepts/concept_knowledge_graph|knowledge graph]] — the connected web of ideas that makes the vault more than a collection of files.

## What You Learned

- The [[what/concepts/concept_triad|triad]] (`what/`/`how/`/`who/`) organizes all knowledge.
- [[what/concepts/concept_governance_files|Governance files]] orient agents and humans at the root.
- [[what/patterns/pattern_agents_md|AGENTS.md]] at every directory guides navigation; the vault is self-describing.

## Next Steps

- [[what/tutorials/tutorial_first_claude_md|Create Your First CLAUDE.md]] — build the agent-orientation file
- [[what/concepts/concept_triad|The Triad]] — deeper understanding of the organizing principle
