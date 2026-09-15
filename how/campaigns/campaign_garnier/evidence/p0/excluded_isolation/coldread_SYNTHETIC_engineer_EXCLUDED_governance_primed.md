---
type: artifact
created: 2026-09-15
updated: 2026-09-15
status: completed
last_edited_by: agent_codex
runtime: codex
tags: [SYNTHETIC]
---

# SYNTHETIC engineer cold-reader prescreen

[D-syn] This is an agent simulation, not a human participant, statistical evidence, or a timed human three-second/three-minute experiment. Lens: senior engineer deciding whether to clone an unfamiliar open technical project and attach their name to it. Supplied context: the task instructions, machine/workspace routing, and root CLAUDE.md safety read. No prior task context, campaign rationale, findings, scorer, answer key, or other reader output was supplied/read. The mandatory root governance read exposes project vocabulary; this limits the freshness of this synthetic exercise. Public comprehension claims below are restricted to the captured stimuli.

## Immediate response — frozen before manifest or page browsing

First public stimulus: `captures_curated/home_first_fold_1440_light.png`. Image-view timestamp: 2026-09-15 08:40:12 UTC (tool clock; not human exposure timing).

[D-syn] **What does this project provide, and what can you do with it now?** “It provides an MIT open standard for arranging project files so people and coding agents can find notes, docs, and decisions. The material is plain Markdown in three folders, tracked in git; this site provides the standard, documentation, and a registry of participating workspaces. I can clone the template into ~/aDNA and start Claude there, or use Get Started to learn the workflow. The visible command is `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`. I would expect git and the Claude CLI to be prerequisites, but the visible fold has not yet explained setup.”

[D-syn] **Exact synthetic confusion / first impression:** “The explanation makes this sound like a small, local file convention, but the title and brightest button ask me to explore a network. Am I evaluating a template I can use today, or joining somebody's ecosystem? I can see a concrete clone command, which helps, but I do not yet know what the initial agent run will change or whether Claude is required.”

The quoted response above is preserved unrevised after subsequent navigation.

## Self-directed public navigation

[D-syn] Page sequence was `/` (first-fold image only) → homepage stored HTML anchor inspection → `/get-started` (captured text) → Get Started stored HTML anchor inspection → `/get-started/what-your-agent-reads/` (captured text). I chose Get Started because I wanted an initial local action before investigating the network. The homepage HTML contains `/get-started` anchors for the header CTA and secondary hero button. The Get Started HTML contains three links to `/get-started/what-your-agent-reads/`; the page text labels the first “Every file the agent reads on first run, annotated”. I followed that link to understand the instructions executed by the agent. I used the manifest only as the captured-page inventory, not as a substitute navigation path.

[D-syn] Evidence sources: [first fold](captures_curated/home_first_fold_1440_light.png), [homepage HTML](raw/public/adna_.body), [Get Started text](raw/public/adna_get-started.txt), [Get Started HTML](raw/public/adna_get-started.body), [What your agent reads text](raw/public/adna_get-started_what-your-agent-reads.txt). Related captured artifacts: [[reader_stimulus_manifest.json]] and [[adna_get-started.txt]]. No external website or website command was run. No source-detail page was opened.

## Task response after browsing

[D-syn] **Exact initial runnable command found:** `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`. Get Started also offers the clone alone as step 1: `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA`. The prerequisite named on that page is Git plus installed Claude Code for the combined flow; the page supplies `npm install -g @anthropic-ai/claude-code` as its installation instruction. It separately says Claude Code requires an Anthropic account and sends files it reads to Anthropic. Obsidian is optional. This is identification of the captured instructions, not verification that they run or a current software recommendation.

[D-syn] **Where context and governance live:** the clone creates `~/aDNA/`; `~/aDNA/CLAUDE.md` is the workspace router. The hidden `~/aDNA/.adna/` holds the standard, including its own `CLAUDE.md`, described as read-only. The project-fork skill creates `<name>.aDNA/` with its own `CLAUDE.md` governance and git history. Inside that project, `what/` holds knowledge, context, decisions, and artifacts; `how/` holds operations such as sessions, missions, and skills; `who/` holds people and coordination. The public “What your agent reads” listing makes the more specific paths `what/context/` and `who/governance/` visible. The two procedure examples named there are `how/skills/skill_project_fork.md` and `how/skills/skill_onboarding.md` in the standard; these were identified from the index, not inspected in full.

[D-syn] **What can be done now:** clone and inspect local Markdown; optionally launch Claude Code to follow the fork recipe, create a project, and then take an onboarding interview. Starting a subsequent agent session inside the project is the described way to test whether it picks up project governance. I did not create a workspace, launch an agent, or test these claims.

## Synthetic engineer impressions

[D-syn] Exact synthetic reaction after Get Started: “The trust boundary is clearer now: the workspace is files, while the final command starts a hosted agent. I like being invited to read the instructions first. I would clone for inspection, but I would stop before running Claude until I had read the fork recipe.”

[D-syn] Exact remaining synthetic confusion: “The page says the first two files are read every session and the last two only when I ask for a new project, but also calls the fork skill the one that fires on a fresh clone. Do I need to explicitly request project creation, or will the first agent session initiate it? I can infer the intention, but I would want the real first-run recording before treating this as a reproducible onboarding flow.”

[D-syn] Exact synthetic endorsement decision: “This is concrete enough for a local inspection clone. It is not enough for me to attach my name as an adopter yet: the guide explicitly says a real clean-machine first-run recording is not available. I would need to inspect the four files and try a small project myself.” This is a simulated reader judgment, not an observed human response or a project readiness score. The first-fold network/template tension became less important after the installation explanation; it remains recorded above without revision.

## Method and effort limits

[D-syn] The first-fold clock read was 08:40:12 UTC and the final public-page clock read was 08:41:09 UTC on 2026-09-15: 57 seconds of agent/tool wall-clock elapsed between those two observations. This includes artifact writing, manifest loading, HTML extraction, and coordination overhead. It excludes report completion and is not a human reading duration, a controlled exposure, or a measured three-minute success. This is a synthetic simulation of the requested task, with no statistical inference or self-grading against an answer key.

[D-syn] Rough content-load effort: approximately 15–25 kT including the root safety/governance read, partially displayed manifest inventory, the two captured pages, tool context, and drafting; image-token cost is unknown. The full manifest and root file outputs were truncated, and only displayed portions were available to the reader. API billing/token-meter evidence is unavailable. The root governance read and general model knowledge prevent a strict naive cold-reader claim, even though no earlier campaign/task findings were supplied.

[D-syn] **Protocol disposition:** the root `CLAUDE.md` read exposed project definitions and operating context before the first public image. Reading it “for safety” does not undo that priming. This artifact is therefore a **primed synthetic diagnostic only**, not the required clean prescreen. The immediate public-image answer remains frozen as recorded; no attempt was made to erase or compensate for the prior exposure.
