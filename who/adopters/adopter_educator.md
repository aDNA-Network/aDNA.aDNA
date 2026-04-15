---
type: adopter
created: 2026-04-14
updated: 2026-04-14
status: active
persona_type: individual
technical_level: beginner
domain: "higher education"
deployment_form: bare
last_edited_by: agent_stanley
tags: [adopter, educator, teaching, agentic-literacy]
---

# Educator

## Background

A university professor teaching a graduate course on AI-augmented knowledge work. Students come from diverse backgrounds — computer science, biology, business, humanities. Needs a framework rigorous enough for CS students but accessible enough for humanities majors encountering structured systems for the first time.

## Goals

- Teach knowledge architecture fundamentals alongside AI interaction skills
- Provide a structural framework students can apply regardless of domain
- Develop [[what/concepts/concept_agentic_literacy|agentic literacy]] — the ability to work effectively with AI agents
- Use the course vault itself as both syllabus and subject ("the structure IS the lesson")

## Pain Points

- No standard curriculum for "how to work with AI agents" — everyone teaches prompting, no one teaches knowledge architecture
- Students learn AI interaction as a flat skill (better prompts) rather than a structural one (better context organization)
- Diverse technical backgrounds make it hard to find a single framework that works for everyone
- Cannot grade "AI collaboration skills" without structural criteria

## How They Use aDNA

The course vault is both syllabus and subject matter — students learn aDNA by navigating an aDNA vault:

- **Weeks 1-3**: Students explore this vault (`aDNA.aDNA/`) as a reference implementation, learning the [[what/glossary/glossary_triad|triad]], governance files, and the [[what/glossary/glossary_question_test|question test]]
- **Weeks 4-6**: Students fork the base template and create their own project vaults with domain-specific ontology extensions
- **Weeks 7-9**: Students run mini-campaigns with 3 missions each, practicing the full execution hierarchy
- **Assessment**: The [[what/concepts/concept_dual_audience|dual-audience]] principle becomes a grading rubric — can a non-expert navigate your vault and understand your domain?

**Self-reference**: This vault is the educator's textbook. The 9 tutorials in `what/tutorials/` provide the progressive learning path. The fact that the vault teaches aDNA *by being aDNA* is the pedagogical method itself.

## Typical Ontology Extensions

| Entity | Triad | Purpose |
|--------|-------|---------|
| `assignment` | how/ | Assignment specifications with rubrics and deadlines |
| `student_project` | what/ | Registry of student vault forks with progress tracking |
| `reading` | what/ | Course readings with discussion prompts |

## Related

- [[what/use_cases/use_case_educator|Educator Use Case]] — full narrative
- [[what/tutorials/tutorial_what_is_adna|Tutorial: What Is aDNA?]] — recommended first reading for students
- [[what/concepts/concept_agentic_literacy|Agentic Literacy (concept)]] — the competency framework
