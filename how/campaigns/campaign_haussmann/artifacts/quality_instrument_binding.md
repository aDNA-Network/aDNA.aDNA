---
type: artifact
artifact_type: binding_note
campaign_id: campaign_haussmann
title: "Quality-instrument binding — wiring the web-quality doctrine into HAUSSMANN"
created: 2026-08-17
updated: 2026-08-17
status: active
last_edited_by: agent_rosetta
agent_authored: true
tags: [haussmann, quality, doctrine, binding, iii]
---

# Quality-instrument binding

> Three artifacts were authored post-Gate-C to close the campaign's one remaining structural gap: the
> assessment method was **distributed** across `doctrine_visual_inspection`, `skill_iii_cycle`,
> `adr_057`, the gate suite, and Phase-B evidence — with no single cold-start-readable instrument for an
> agent opening a mission. A doctrine nobody can read in one file is a doctrine nobody inherits.

## What was added

| File | Path | Role |
|---|---|---|
| `doctrine_web_quality_assessment.md` | `what/doctrine/` | **Judgment** — the I/I/I loop for web surfaces, instrument register with blind spots, adjudication law for tool disagreement, coverage-honesty law, evidence contract, red-test law, severity mapping, binding thresholds, anti-patterns, known instrument weaknesses W1–W8 |
| `skill_web_quality_sweep.md` | `how/skills/` | **Procedure** — the runnable 10-step battery with exact commands, port/co-run hazards, scale-down variants, failure handling, definition of done |
| `context_web_quality_toolkit.md` | `what/context/` | **Reference** — per-instrument: what it measures, its blind spot, its trap, its carry-line; WCAG 2.2 manual/automatable split; CWV numbers; the D10 kit; cohort calibration; the eleven carry-lines |

Relationship: **doctrine decides · skill executes · context explains.** A mission cites the doctrine, runs
the skill, and consults the context when an instrument surprises it.

## Why this was the gap

The Phase-B sweep produced the campaign's sharpest methodological lesson and it was **recorded only as a
footnote in `sweep_summary.md` finding 5/6**: Lighthouse a11y 100/100 on all ten runs, gates 371/371
green — on a build carrying 964 html-validate errors across 203 of 203 pages, 238 of which harm
screen-reader users. Both readings were correct. Nothing in the vault told the *next* agent what to do
with that.

Two more from the same run, equally load-bearing and equally unrecorded as method:

- **Config is not deployment.** `vercel.json` configured four security headers; production sent none of
  them. An agent reading the config file would have reported a secure site.
- **The instruments are silent where the failures are fatal.** Technical substrate scored 3/5 across the
  board; the trust stratum (D6/D7/D8/D9 — 42 of 100 weight points) scored 2/5. No automated tool in the
  battery measures any of it.

These are now doctrine §4.1, §4.3, and §5 respectively, with the Phase-B run cited as the motivating case.

## Binding actions

**1 — Campaign convention (additive, one line).** Append to `how/campaigns/campaign_haussmann/CLAUDE.md`
§Standing conventions:

```markdown
13. **Quality assessment = [[doctrine_web_quality_assessment]] + [[skill_web_quality_sweep]]**. Any
    mission that measures, scores, verifies, or re-scores a web surface runs the skill and adjudicates
    by the doctrine. Every number carries its origin label (lab/field, preview/production) and its
    known-weakness caveat (W1–W8) into every downstream citation. The Introspect section
    (`## What this pass could not see`) is mandatory in every assessment artifact — gate reviewers read
    it first. Automated a11y passes never stand alone: ~57% ceiling, manual complement named and
    scheduled. A green that cannot go red is not evidence.
```

**2 — Mission wiring.** Missions whose `verification_method` names gates, captures, Lighthouse, axe, or a
machine-eye pass add `skill_web_quality_sweep` to their orientation reads. Highest value at:
**P0.5** (editorial gate — doctrine §7 red-test law + §8 severity mapping) ·
**P1.4** (mobile integrity — §6 evidence contract, W2 two-theme axe) ·
**P2.3** (link gate — §4.1 harm-class digest, W5 reachability-only) ·
**P2.6** and **P5.2** (re-scores — §13 two-scorer protocol, §11 thresholds) ·
**P4.2/P4.3/P4.4** (craft floor, manual a11y, CI hardening — §5 coverage-honesty, §11 WCAG 2.2 manual set).

**3 — ADR-057 amendment (at its ratification).** Add to the regime: *"the assessment method is
`doctrine_web_quality_assessment`; instrument disagreement is adjudicated by its §4 and recorded, never
resolved by discarding an instrument."*

**4 — Owed upstream.** `patterns_to_author:` → `WebForge.aDNA`. The harm-class digest (§4.1), the
carry-line discipline (§12.2/§8 of the toolkit), and the red-test law (§7) are generic to every WebForge
consumer, not specific to this site. File as a pattern-authoring ask at P0.3 intake; do not fork locally.

**5 — Owed to III.** `III.aDNA`'s Inspect modality is framework-agnostic by design and should stay so.
What it can take: the **Introspect seven questions** (doctrine §9) as a modality-independent checklist —
the beat agents skip is the beat the framework should force.

**6 — One defect found while authoring `[D] 2026-08-17`.** `doctrine_visual_inspection.md` §3 names the
canonical viewports as *"mobile 320 / mobile-lg 375 / tablet 768 / laptop 900(h) / desktop 1024 /
wide 1440"*. `scripts/viewports.json` — the harness's actual source of truth — defines
`mobile` 320 · `mobile-lg` 375 · `tablet` 768 · **`laptop-sm` 900** · **`laptop` 1024** ·
**`desktop` 1440**, and has **no `wide`**. Three of six rows disagree and one name is invented. Any agent
following the prose passes `--viewports …,wide` and gets a silently short capture set.

This is the KW-14 transcription failure inside the doctrine that warns about it — recorded as **W9** in
`doctrine_web_quality_assessment` §14, and an **owed one-line correction to
`doctrine_visual_inspection.md` §3** (a cross-doctrine edit; operator-visible, not folded in silently
here). Cheap fix, real blast radius: the Phase-B capture set used `laptop-sm`/`laptop`/`desktop`
correctly, so the evidence is sound — only the prose is wrong, and only future readers are at risk.

## Verification of this binding

- [ ] The three files exist at their stated paths and are readable cold, with no unresolvable wikilinks
- [ ] Campaign `CLAUDE.md` carries convention 13
- [ ] At least one mission file cites `skill_web_quality_sweep` in its orientation reads
- [ ] The next assessment artifact produced under this campaign contains a
      `## What this pass could not see` section
- [ ] The next automated a11y number reported anywhere in the campaign carries its ~57%-ceiling carry-line

## Related

[[doctrine_web_quality_assessment]] · [[skill_web_quality_sweep]] · [[context_web_quality_toolkit]] ·
[[doctrine_visual_inspection]] · [[adr_057_measurement_regime]] · [[campaign_haussmann]] ·
[[webforge_pattern_register]] · [[gate_b_dossier]]
