---
type: workshop
created: 2026-04-16
updated: 2026-04-16
status: active
duration: ""
audience: "Workshop facilitators and community organizers"
difficulty: mixed
prerequisites: []
last_edited_by: agent_stanley
tags: [workshop, facilitation, meta-guide, community]
---

# workshop_facilitation_guide

A meta-guide for anyone running an aDNA workshop. This document covers logistics, audience assessment, pacing strategies, and common pitfalls — everything a facilitator needs beyond the workshop-specific agenda. It works alongside the three workshop kits but is also useful for designing custom workshops.

## Before the Workshop

### Audience Assessment

aDNA workshops typically draw mixed audiences. Before the session, survey participants on:

1. **Technical level** — Can they read YAML? Have they used a CLI? Do they write code daily?
2. **AI experience** — Have they used AI coding assistants? Do they know what "context window" means?
3. **Knowledge management background** — Do they currently use Notion, Obsidian, PARA, or similar systems?

Use the answers to choose the right workshop:

| Profile | Recommended Workshop |
|---------|---------------------|
| Non-technical, curious about aDNA | [[workshop_vault_exploration|Vault Exploration]] (beginner, 60 min) |
| Developer, new to aDNA | [[workshop_build_your_first_vault|Build Your First Vault]] (intermediate, 90 min) |
| Developer, building with lattices | [[workshop_lattice_design|Lattice Design]] (advanced, 120 min) |
| Mixed audience | Vault Exploration (everyone) → split into tracks |

### Room Setup

- **Projector**: Required for facilitator screen share. Show Obsidian graph view at the start — it's the best visual hook.
- **Internet**: Required for cloning repos (exercise setup). Not required during exercises.
- **Seating**: Small tables of 3-4 work best. Exercise 4 in Lattice Design requires pair work.
- **Whiteboard**: Required for Lattice Design (exercise 1: sketch). Useful for all workshops.

### Pre-Installation

The biggest time sink is software installation. Send setup instructions 48 hours before:

1. **Obsidian** — obsidian.md (free, all platforms)
2. **Git** — for cloning the vault
3. **Python 3.9+** — only for Lattice Design workshop (validation tools)
4. **Claude Code or similar** — optional for Build Your First Vault (live testing)

Provide a troubleshooting contact for installation issues. Budget 5-10 minutes at workshop start for stragglers.

## During the Workshop

### Pacing

| Workshop | Tight Spots | Where to Flex |
|----------|------------|---------------|
| Vault Exploration | Exercise 3 (Question Test) — participants debate edge cases | Debrief — can expand or contract based on energy |
| Build Your First Vault | Exercise 2 (CLAUDE.md) — can absorb unlimited time | Show & Tell — cut to 1 volunteer if behind |
| Lattice Design | Exercise 2 (Build YAML) — debugging syntax | Exercise 4 (Compose) — make optional if behind |

**General pacing rules:**
- Start exercises on time even if the preceding lecture ran long
- Give a 2-minute warning before each exercise ends
- If an exercise runs long, cut the next lecture, not the next exercise
- End on time. Facilitator credibility depends on respecting the schedule.

### Mixed-Audience Management

The [[concept_dual_audience|Dual Audience]] principle applies to workshops, not just documentation:

- **When a developer asks a technical question**: Answer briefly, then translate for the room. "The AGENTS.md file is like a README for AI — it tells the agent what's in this folder and whether to load it."
- **When a non-developer is lost**: Point them to the conceptual layer. "Don't worry about the YAML syntax. Focus on the boxes and arrows — that's the workflow."
- **Pair developers with non-developers** in exercises. The developer handles syntax; the non-developer asks "but what does this step actually do?" Both learn more.

### Common Questions

| Question | Answer |
|----------|--------|
| "Do I need Obsidian?" | No — any Markdown editor works. Obsidian is recommended because its graph view and wikilinks make the vault's structure visible. |
| "How is this different from just using folders?" | Folders organize files. aDNA adds governance (CLAUDE.md tells agents the rules), routing (AGENTS.md helps agents navigate), and interoperability (lattice YAML makes workflows composable). See [[comparison_adna_vs_plain_markdown|aDNA vs. Plain Markdown]]. |
| "Can I use this without AI?" | Yes. The triad, Question Test, and mission decomposition are useful organizational patterns for humans. AI agents benefit from the governance layer, but the architecture stands on its own. |
| "What's the learning curve?" | Start with the triad (5 minutes to understand). Write a CLAUDE.md (20 minutes). Add domain-specific content over time. Most teams are productive within a day. |

## After the Workshop

### Follow-Up

Send within 24 hours:

1. **Resource links** — aDNA specification, tutorial index, this vault's live site
2. **Feedback survey** — 3 questions: What worked? What didn't? What would you add?
3. **Community invitation** — link to aDNA community channels for ongoing support

### Measuring Success

| Signal | How to Measure |
|--------|---------------|
| Participants use their vault next week | Follow-up survey at day 7 |
| Participants can explain the triad | Exit question (show of hands) |
| Workshop generates community contribution | Count new community members or GitHub issues within 30 days |

## Self-Reference

This facilitation guide follows the same [[pattern_dual_audience|Dual-Audience Writing]] pattern it teaches facilitators to apply. The audience assessment table uses the same progressive disclosure structure as the vault's own entry points in MANIFEST.md. The common questions section addresses the same objections that the [[comparison_adna_vs_plain_markdown|comparison files]] address in long form.

## Related

- [[workshop_vault_exploration|Vault Exploration]] — beginner workshop (60 min)
- [[workshop_build_your_first_vault|Build Your First Vault]] — intermediate workshop (90 min)
- [[workshop_lattice_design|Lattice Design]] — advanced workshop (120 min)
- [[concept_dual_audience|Dual Audience]] — the principle that guides mixed-audience facilitation
- [[concept_agentic_literacy|Agentic Literacy]] — the broader goal these workshops serve
