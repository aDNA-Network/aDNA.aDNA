---
type: use_case
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
status: draft
domain: ""
persona: ""
deployment_form: bare
last_edited_by: agent_<% tp.user %>
tags: [use_case]
---

# use_case_{name}

## Meet {Persona Name}

{2-3 sentences introducing the persona — who they are, what they do, what matters to them.}

## The Challenge

{What problem are they facing? Why do existing tools fall short?}

## How aDNA Helps

{Walkthrough of how aDNA addresses their challenge. Specific, not abstract.}

## What Their Vault Looks Like

```
{persona}_project.aDNA/
├── what/
│   ├── context/        # {domain-specific topics}
│   ├── {extensions}/   # {domain-specific entity types}
│   └── ...
├── how/
│   └── ...
└── who/
    └── ...
```

## Outcome

{What changed? What's better now?}

## Related

- [[what/concepts/concept_related|Related Concept]]
- [[what/tutorials/tutorial_related|Related Tutorial]]
- [[who/adopters/adopter_related|Related Persona]]
