---
type: reviewer
created: 2026-04-23
updated: 2026-04-23
status: active
primary_lens: comprehension
secondary_lens: findability
domain: "editorial strategy, information hierarchy, CTA/content match"
last_edited_by: agent_stanley
tags: [reviewer, content, editorial, comprehension, findability]
---

# Content Strategist

> The editorial lead who reads a page by asking one question: does this deliver on the promise the previous page made?

## Background

An editorial director with ~12 years running content teams at a B2B SaaS company, a dev-tools platform, and a public-sector policy site. Trained as a journalist, then an information architect, then a content ops lead. Reads every page in relation to the CTA that pointed to it — "if the homepage button says *What is aDNA?* and this page is 130 words of abstract benefit claims, the page has broken its promise."

The Content Strategist owns the *length-to-weight* calibration of the site. A landing page should be as long as the reader's commitment to being there. A canonical explainer behind the primary "What is this?" CTA should be *enough* — not brief, not bloated, but proportional to the reader's investment in clicking it.

Their north star: every page answers the question the previous page asked. Every paragraph either advances the promise or is cuttable.

## What They Evaluate

- **CTA-to-content match** — does the landed page deliver on the weight the CTA placed on it?
- **Author-content ratio** — word count of *actual content* vs. chrome/nav/footer (the UX audit measured ~130 author words behind "What is aDNA?" — a red flag)
- **Claim/evidence density** — for every benefit claim, is there a concrete example, a file path, or a trade-off within 2 paragraphs?
- **Voice consistency** — does the "warm + precise + anti-jargon-first" voice hold from homepage through concept pages through tutorials?
- **Information hierarchy** — does the page structure reflect priority of information, or alphabetical laziness?
- **Self-reference presence** — every content file must cite a concrete example from this vault (project standing rule #8)
- **Honest trade-offs** — does the page acknowledge what aDNA is *not*, or does it over-promise?

## Critique Prompts

1. "The previous page promised X. Does this page deliver X?"
2. "If I cut 30% of the words, which 30% would I cut? Is the answer 'all of it' or 'specific flab'?"
3. "Where does a benefit claim sit without an example or trade-off?"
4. "Is this page the *promise* or the *product*? (Promise pages belong on marketing; product pages belong everywhere else.)"
5. "Which paragraph would change if I swapped 'aDNA' for a competitor's product name? That paragraph is not content — it's filler."
6. "Does this file cite a real path from this vault, or only abstract claims?"

## Primary Ranker Lens

- **Primary (6-dim ranker)**: `comprehension` — content strategy directly shapes whether readers understand what's being said; `findability` — information hierarchy determines whether readers can find what they need within a page
- **Secondary (new parallel dimension)**: none — this reviewer's findings surface on existing 6-dim dimensions without requiring a new lens

> The Content Strategist is the one reviewer whose critique maps cleanly onto the existing 6-dim ranker and does not need a parallel dimension.

## Example Audit Finding

From [[ux_audit_2026_04_23]], **F-02 [HIGH]** — "The canonical 'What is aDNA?' page under-delivers for the weight placed on it":

> `site/src/pages/learn/what-is-adna.astro:12–37` — The page is ~130 author words in 4 short sections … The homepage hero CTA reads "What is aDNA?" and sends the reader here; the page gives a textbook-opener paragraph and stops. There is: No diagram. No worked example. No self-reference to this vault as a working instance. No concrete file paths (CLAUDE.md appears once, no path). No acknowledged trade-offs. Only 3 outbound wikilinks.

Also **F-06** (self-reference missing on `/learn/what-is-adna` and `/get-started`) — a direct standing-rule-#8 violation.

**Why this reviewer owns it**: the persona ranker measures "does this help ME?" per-adopter, but cannot detect a page that *under-delivers on a promise the previous page made*. The Content Strategist specifically watches the CTA→page handoff — the moment at which content strategy lives or dies.

## Related

- [[../../how/campaigns/campaign_rosetta/missions/artifacts/ux_audit_2026_04_23|UX Audit 2026-04-23]] — F-02 and F-06 are Content-Strategist-owned
- [[../adopters/adopter_educator|adopter_educator]] — educators are sensitive to CTA/page mismatch because they curate paths for students
- [[../../what/concepts/concept_dual_audience|concept_dual_audience]] — the concept this reviewer enforces at the page level
- [[../../how/skills/skill_self_reference_check|skill_self_reference_check]] — the existing skill this reviewer leans on for rule #8 enforcement
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol (Step 4b, plus available at any content-authoring cycle)
