---
type: use_case
created: 2026-04-14
updated: 2026-04-14
status: active
domain: education
persona: "Prof. Sarah Kim"
deployment_form: bare
last_edited_by: agent_stanley
tags: [use_case, education, teaching, curriculum, ai_literacy]
---

# An Educator Teaches AI Literacy with aDNA

## Meet Prof. Sarah Kim

Sarah teaches a graduate course on AI-augmented knowledge work at a research university. Her students come from diverse backgrounds — computer science, biology, business, humanities. She needs a framework that's rigorous enough for the CS students and accessible enough for the humanities students.

## The Challenge

Teaching "how to work with AI agents" is hard because there's no standard curriculum. Every tool has its own approach. Students learn prompting techniques but not knowledge architecture — they can ask an AI a good question but can't organize their project so the AI gives consistently good answers. Sarah wants to teach the structural layer, not just the interaction layer.

## How aDNA Helps

Sarah uses aDNA itself as the teaching tool. Students don't just read about knowledge architecture — they build one. The course vault is both the syllabus and the subject.

**Week 1-3**: Students navigate this vault (aDNA.aDNA/), reading concept files and following the beginner tutorials. They learn the triad, governance files, and the question test by seeing them in action.

**Week 4-6**: Students fork the base template and create their own project vault. They extend the ontology for their thesis domain, write context files, and experience how structure improves agent output.

**Week 7-9**: Students run a mini-campaign — 3 missions, each with deliverables. They practice mission decomposition, session tracking, and AARs.

**Week 10**: Students present their vaults. The dual-audience principle is the grading rubric — a non-expert should be able to navigate the vault and understand the domain.

## What Their Vault Looks Like

```
# Course vault (shared reference):
ai_literacy_course.aDNA/
├── what/
│   ├── context/         # Readings, research summaries
│   ├── concepts/        # Student-authored concept files
│   └── assignments/     # [EXT] Assignment specifications
├── how/
│   ├── campaigns/       # Course syllabus as a campaign
│   ├── missions/        # Weekly assignments as missions
│   ├── sessions/        # Student work logs
│   └── templates/       # Assignment templates
└── who/
    ├── governance/      # Course policies, grading rubric
    └── team/            # Student roster, office hours

# Each student also has:
student_thesis.aDNA/     # Individual project vault
```

## Outcome

Students leave the course able to structure knowledge for AI agents — not just prompt them. The dual-audience principle improves their writing across all contexts. Several students adopt aDNA for their thesis work. The course vault itself becomes a growing knowledge resource maintained across cohorts.

## Related

- [[what/concepts/concept_agentic_literacy|Agentic Literacy]] — the skill set the course develops
- [[what/concepts/concept_dual_audience|Dual-Audience Writing]] — the writing discipline used as a grading rubric
- [[what/tutorials/tutorial_navigate_a_vault|Navigate a Vault]] — the first tutorial students complete
