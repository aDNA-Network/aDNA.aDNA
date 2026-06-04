---
type: exemplar_site
site: docs.stripe.com
functional_role: docs density
tonal_revolutionary: 30
created: 2026-06-03
updated: 2026-06-03
inspected: 2026-06-03
mission: mission_adna_str_p5_m58_reference_design_dna
persona: rosetta
status: active
last_edited_by: agent_stanley
hero_word_count: n/a (docs index)
section_count: 3-tier taxonomy
above_fold_focus: use-case entry points
nav_model: semantic-bucket (3-tier)
density_band: high (via omission)
demo_as_proof: n/a
needs_operator_capture: [code-alongside-prose_layout]
tags: [exemplar_site, stripe_docs, density, lift_and_avoid, docs]
---

# site_stripe_docs — Stripe Docs

> **The documentation-density reference** — high information density achieved with craft. Also an **AVOID** (`writing-guidelines` §2) for page-bloat / every-page-is-both-reference-and-tutorial: lift the *density technique*, refuse the *bloat*.

## Captured (rubric)

- **Density via omission (the lesson):** the index page has **no prose** — pure linked navigation. Density comes from *omission* (no redundant copy) + *semantic organization*, not cramming.
- **Task-first hierarchy:** leads with use-cases ("Accept payments online"), not product names — reduces cognitive load for goal-oriented readers.
- **Product clustering:** ~25 products grouped into **3 semantic buckets** (Payments / Revenue / Money management), not alphabetical — builds a mental model.
- **Parallel URL structure** (`/get-started/`, `/billing/`, `/payments/`) → pattern recognition.
- **Scannability:** consistent anchor-text length (8–12 words), 2-level max nesting, whitespace + semantic grouping.
- **Separation of concerns:** guide ("Accept payments online") vs product hub ("Payments") are *distinct* — does NOT mix tutorial + reference + concept on one page.

## Lift for aDNA

- **Use-case-first / task-first** docs entry (mirror for Track A docs re-scope D16+): lead the docs hub with "what do you want to do," then the taxonomy.
- **Semantic clustering over alphabetical** — group aDNA's docs/concepts/patterns by reader intent (the README_STYLE_GUIDE's 5 buckets already do this; extend to the docs hub).
- **Density through omission** — an index is *navigation*, not prose. (NN/g agrees: cut the fluff.)

## Avoid (explicit — AVOID-list site)

- **Every-page-is-both-reference-and-tutorial / page-bloat** — Stripe's marketing-product pages (vs docs) sprawl. aDNA's `writing-guidelines` already names this; keep guide ≠ reference ≠ concept separated (matches the existing content-class taxonomy).

## Related

- [[_reference_set]] · [[front_page_doctrine]] · `site/src/content/reference/writing-guidelines.mdx` (Stripe = density LIFT, bloat AVOID) · `.github/README_STYLE_GUIDE.md` (5 reader-intent buckets)
- [[../../who/reviewers/reviewer_information_architect|Information Architect]] — owns the use-case-first taxonomy call
