---
type: exemplar_site
site: distill.pub
functional_role: technical/scientific web-publishing craft benchmark (archived journal)
tonal_revolutionary: 30
created: 2026-08-16
updated: 2026-08-16
inspected: 2026-08-16
inspected_lens: craft-reference (Haussmann B.7 dossier)
added_by: campaign_haussmann
persona: rosetta
status: active
last_edited_by: agent_rosetta
hero_word_count: ~7 (journal masthead)
section_count: 2 (hiatus banner + article index)
above_fold_focus: article listing
nav_model: flat (3 — About/Prize/Submit)
density_band: moderate (reading-optimized)
demo_as_proof: the articles themselves (peer-review badges, DOI, ISSN)
needs_operator_capture: []
tags: [exemplar_site, distill, publishing_craft, provenance, interactive_diagrams, haussmann_b11]
---

# site_distill — Distill (distill.pub)

> **The craft benchmark for technical web publishing** — an ML journal (2016–2021, now on hiatus) that set the bar for prose + interactive diagram + provenance on one page. Archived, and still the reference. Judged from HTML only [I] — outside the 5-capture budget; deep page: "Why Momentum Really Works" (the flagship "Zoom In" exceeded fetch limits — Distill pages are *heavy*).

## Captured (rubric)

- **Journal home:** ~7-word masthead; a dated hiatus banner ("After five years, Distill will be taking a break"); then a plain article index — per entry: date · thumbnail · title · one-line description · **linked authors** · **class badges** (Peer-reviewed / Editorial / Commentary) with the peer review linked as a GitHub issue. **ISSN 2476-0757** in the footer. Nothing else — the journal's craft budget goes into articles, not chrome.
- **Article page (the benchmark):** header = authors + affiliations + date + **DOI** (10.23915/distill.00006); **interactive figures with parameter sliders embedded in the prose**, every one captioned; 11 numbered margin footnotes; full references with DOIs; **Acknowledgments + author-contributions** crediting design/widgets/editorial by name; "Updates and Corrections" with version history; end block = narrative citation **+ BibTeX**.
- **Review provenance in public:** named reviewers (plus "Anonymous Reviewer B") with GitHub-issue links — peer review as auditable artifact, not a claim.
- **Reading experience:** single serif-set column, generous margins, math-ready typography; diagrams *are* arguments, not decoration (the house rule the corpus calls "diagram construction": every visual element maps to a claim, interactivity only where a parameter genuinely varies). Light-only. Tonal ~30 — quiet, pedagogical ("A closer look at how…").

## Lift for aDNA

- **The one thing to steal: the provenance block — DOI/stable-ID + citation-with-BibTeX + named-review-trail on every serious artifact.** aDNA's specs/ADRs/whitepaper pages should each end citable, versioned, and review-traceable (git history *is* the trail; render it). The direct model for Haussmann's credibility remediation.
- **Interactive-figure discipline:** captioned, inline, parameter-honest — the bar for any aDNA graph/lattice visualization ([[front_page_doctrine]] motion budget compatible: interaction, not autoplay).
- **Credit design labor by name** (acknowledgments for widgets/design) — who-not-how-many extended to craft itself.

## Avoid

- **The sustainability tale:** a volunteer-run craft ceiling this high ended in hiatus — for aDNA, per-article heroics must be template-ized or they stop (the vault's template/skill system is the counter-design).
- Page weight: the heaviest articles exceed 10 MB — budget-hostile; aDNA's perf gates forbid it.

## Related

- [[_reference_set]] · [[site_quanta]] (the illustrated-editorial sibling) · [[site_ourworldindata]] (structural trust at archive scale) · [[site_python_peps]] (archive legibility sibling)
