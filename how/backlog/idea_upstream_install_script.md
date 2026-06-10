---
type: backlog_idea
created: 2026-06-10
updated: 2026-06-10
status: idea
priority: medium
last_edited_by: agent_stanley
author: rosetta (aDNA.aDNA)
trigger: audit P2 / E6 seeding (2026-06-10) — operator directive "users can easily install/setup their own local adna system directly from the GitHub"
informational: false
upstream_target: LatticeProtocol/aDNA
tags: [backlog, upstream, install, onboarding, one_liner, trust_posture, e6]
---

# Upstream Idea — a one-command install path (documented one-liner, not `install.sh`)

## Headline

Give the template repo a **one-command bootstrap** a new user can copy from the README or adna.network. **Decision baked in (E6/M5.13 O3): a documented inline one-liner, NOT a hosted `install.sh`** — `curl|bash` contradicts the network's local-first, explicit-reviewable-acts trust posture (sold on `/network`), and an install script is a maintained security surface + checksum ceremony for what is genuinely four commands.

## The candidate one-liner (auditable inline; zero remote execution)

```bash
mkdir -p ~/aDNA && cd ~/aDNA && git clone --depth 1 https://github.com/LatticeProtocol/aDNA.git .adna && cp .adna/how/templates/template_workspace_claude.md CLAUDE.md && claude
```

## Context / sequencing

- Single-sourced site-side in `site/src/data/install_truth.json` (gate-12 verifies surfaces against it) — the upstream README should carry the identical commands so GitHub and adna.network never disagree.
- Companion precedent: `how/skills/migrate_workspace_root.sh` (aDNALabs Session D, 2026-06-10, commit `9653713`) — the *migration* shell companion for legacy operators; this idea is the *fresh-install* analog. If upstream ever does want a script, it should follow that one's KEEP-PROSE/auditable discipline.
- Carried by **E6 / M5.13 O4** (upstream follow-through, c174); files per `skill_upstream_contribution` (operator approval per filing).
- Related: [[idea_upstream_onboarding_workspace_default_adna]] (the README flip PR this rides behind) · [[idea_upstream_skill_workspace_path_migration]].
