---
type: evidence
campaign: campaign_haussmann
packet: B2_visual_capture_review
target: https://adna.network (live)
method: doctrine_visual_inspection T0 — scripts/visual_capture.mjs, headless Playwright 1.59.1, no Chrome extension
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_haussmann_b2
tags: [evidence, visual-review, adna-network, haussmann]
---

# B2 Visual Findings — adna.network

**Provenance**: every finding is tagged `[D]` = direct observation of a named capture in this
directory (or in `../captures_raw/`, gitignored bulk). Captures taken 2026-08-16 against the live
site. Severity is a reviewer guess: S1 critical / S2 major / S3 minor / S4 nit.

## Capture stats

| Pass | Routes | Viewports | Themes | Axe theme | PNGs | Report |
|---|---|---|---|---|---|---|
| 1 (bulk) | 21 (all distinct templates) | all 6 (320/375/768/900/1024/1440) | dark, light | dark | 252 | `capture_report_pass1_dark_axe.json` |
| 2 (axe-light) | 8 key | desktop | light, dark | light | 16 | `capture_report_pass2_light_axe.json` |
| 3 (extra) | /researchers, /startup-first-hour, /404 | mobile-lg, desktop | dark, light | dark | 12 | `capture_report_pass3_extra.json` |

- **HTTP**: 24/24 distinct routes return 200; `/404` correctly returns HTTP 404 with a branded page. [D `capture_report_pass1_dark_axe.json`, `capture_report_pass3_extra.json`]
- **Axe**: **0 violations on every route in both themes** — 21 routes dark + 8 routes light + 3 extra dark = 32 route-theme runs, all zero. [D all three reports]
- **Console errors**: zero everywhere; the single logged error is the expected 404 resource on `/404`. [D reports]
- **Load times** (networkidle, cold context): 682–1439 ms, median ≈ 780 ms. Slowest: `/learn/concepts/knowledge-graph` 1439 ms, `/vaults/graph` 1159 ms, `/network` 1045 ms. [D reports]
- **Page heights** (template smells): `/reference/specification` **55,409 px** desktop → **124,605 px** mobile-lg; `/vaults` 7,277 desktop → 13,921 mobile-lg; home 6,482 → 9,811. Thin tail: `/how` 1,353 (bodyLen 1,120, zero h2), `/changelog` 1,208 (bodyLen 694). [D reports + PNG dimensions]

---

## Findings (ranked)

### S1

**F1 — Docs template reserves the sidebar column on mobile; article text squeezed to ~half the viewport.**
At ≤ 375 px the docs layout keeps its left grid column even though the sidebar has collapsed into
an "In this section" pill, so all content renders in a ~185 px column at 375 (3–5 words/line) and
~130 px at 320 (2–3 words/line), with the left ~44 % of the screen dead space. Affects the entire
docs template class — verified on `/get-started` (the primary conversion page), `/learn/what-is-adna`,
`/community`; by template it also covers `/reference/*`, `/glossary`, `/researchers`,
`/startup-first-hour`, learn subpages. Both themes. Tablet 768 renders correctly.
[D `get-started__mobile-lg__dark.png`, `learn-what-is-adna__mobile-lg__dark.png`, `learn-what-is-adna__mobile__dark.png`, `community__mobile-lg__dark.png`, `get-started__mobile-lg__light.png`, `learn-what-is-adna__mobile-lg__light.png`; counter-evidence OK at 768: `get-started__tablet__dark.png`]

### S2

**F2 — /network mobile: "Run a node" content overflows the viewport and is clipped mid-word.**
At 375 px the numbered-step column renders wider than the screen with no wrap and no horizontal
scroll: body lines cut at the right edge ("…and your credenti", "Everything stays local by defa"),
and the step-1 `git clone` command block runs off-screen — the command is unreadable/uncopyable on
mobile. Theme-independent. [D `network__mobile-lg__dark.png`]

**F3 — "Context democracy" hub diagram collapses below 768 px.**
Desktop and tablet render it legibly in both themes (hypothesis "near-invisible" does NOT reproduce
at 1440/768). At 375 the SVG shrinks to a small hub with six bare spokes — satellite nodes/labels
missing (home) or ~6 px and partially missing (network page: "Home" and "RareArchive" labels absent).
At 320 dark it degrades to a faint asterisk of lines with no text at all — effectively invisible.
[D `home__mobile-lg__dark.png`, `home__mobile__dark.png`, `home__mobile-lg__light.png`, `network__mobile-lg__dark.png`; legible at `home__desktop__dark.png`, `home__desktop__light.png`, `home__tablet__dark.png`]

**F4 — /vaults/graph counts are internally inconsistent (data-generation bug).**
Intro prose: "74 vaults, 14 relationships … 59 vaults carry no cited relationship yet." Rendered
sections: "The connected network — 15 vaults" + "Not yet linked — **53** vaults". 15 + 53 = 68, so
6 vaults appear nowhere on the page; 59 ≠ 53. Legend "VAULT CLASSES IN VIEW" sums to 74 (whole
registry, not the 15 in view) and says "Genesis stub · 3" while the pill section shows
"GENESIS STUB · 4". The mobile fallback list appears fuller than the desktop pill cloud.
[D `vaults-graph__desktop__dark.png`, `vaults-graph__mobile-lg__light.png`]

**F5 — /changelog is stale and contradicts the live site.**
Single entry: "v0.1.0 — Site Scaffold, April 13, 2026 … empty content collections ready for content
integration" — four months old, describing a scaffold, while the surrounding site ships spec v2.5
and a 74-vault registry. On a project whose pitch is "governed as a public record," an abandoned
changelog is a trust hit; the page is also ~70 % empty space. [D `changelog__desktop__dark.png`]

**F6 — /reference/specification is one extreme page.**
Entire spec on a single route: 55,409 px desktop, **124,605 px at mobile-lg (~150 phone screens)**,
compounded by F1's half-width column on mobile. Desktop presentation itself is polished (version
badge, ON THIS PAGE toc). [D `reference-specification__desktop__dark.png`, report fullH + PNG dims]

**F7 — Registry descriptions leak internal ops/identity prose to the public face.**
- "Operations" card: "Renamed from TaskForge.aDNA (Production Tidy pt08" — internal housekeeping,
  truncated mid-parenthesis, on home AND /vaults. [D `home__desktop__dark.png`, `vaults__desktop__dark.png`]
- "Home" card: "per-node operational governance for Mac/stanley; the operator's daily-driver…" —
  node/operator identity published. [D `home__desktop__dark.png`]
- Same family: internal shorthand as public copy — Terminal "soft-fork-with-upstream of
  manaflow-ai/cmux … code-as-WHAT at what/cmux/". [D `vaults-terminal__desktop__dark.png`]
- Policy-flag (not a rendering bug): confidential-adjacent vaults are listed in the public registry
  (aiLP Dataroom, CakeHealth, Cake Protocol, Percy Sleep) — names + one-liners only, but worth a
  deliberate names-only-policy pass. [D `vaults__desktop__dark.png`]

### S3

**F8 — Registry blank/missing fields.**
"zeta" card is name + "pending" badge only — no persona, no description (the one truly blank card
of 74). "wga" home-slice card lacks its "tended by" line while siblings have one. Vault detail
pages have inconsistent fact-box schemas: aDNA page shows CLASS/STATUS/PERSONA/GOVERNANCE/LAST
SYNCED; Terminal page omits GOVERNANCE and LAST SYNCED entirely.
[D `vaults__desktop__dark.png`, `home__desktop__dark.png`, `vaults-aDNA.aDNA__desktop__dark.png`, `vaults-terminal__desktop__dark.png`]

**F9 — Persona/name normalization drift across surfaces.**
"tended by Rosetta/Argus/Berthier" (capitalized) vs "mondrian/berthier/pygmalion/hestia"
(lowercase), including in a page `<title>` ("Terminal — berthier — aDNA"). Same vault appears as
"Harness.aDNA / Panacea" (graph), "RareHarness" (mobile graph list, registry), and
"ScienceStanley.aDNA" vs "Science Stanley". [D `home__desktop__dark.png`, `vaults__desktop__dark.png`, `vaults-graph__desktop__dark.png`, `vaults-graph__mobile-lg__light.png`, pass-1 report titles]

**F10 — Vault fact-box polish: mid-word wrap + stale sync.**
GOVERNANCE value wraps as "aDNA.aDNA/CLAUD‑E.md" (monospace path broken mid-word); LAST SYNCED
2026-05-24 is ~3 months old on the standard's own flagship vault page.
[D `vaults-aDNA.aDNA__desktop__dark.png`]

**F11 — Glossary degenerate previews.**
"AGENTS.md — AGENTS." and "README.md — README." — summary extraction collapses to the bare filename,
reading as broken placeholders on an otherwise polished page. [D `glossary__desktop__dark.png`]

**F12 — Docs code blocks: orphaned copy button + right-edge clipping.**
The copy-icon renders as a lone element on its own line *below* each code block (looks detached/
broken, repeated across every block). In the `/get-started` file-tree block the comment column clips
at the right edge ("# the standard (embedded; read-only — releases upda") with no visible wrap or
scroll affordance. Both themes. [D `get-started__desktop__dark.png`, `get-started__desktop__light.png`, `learn-what-is-adna__desktop__dark.png`]

**F13 — Thin hub pages + banner letterboxing on /how.**
`/how` is H1 + one paragraph + a 2+1 card grid (bodyLen 1,120, zero h2) and its banner renders with
heavy black letterbox bars (~40 % of the image block empty). `/patterns`, `/use-cases` are similarly
thin per report metrics (1,978 / 2,018 chars). Contrast: `/learn` hub does the same job with a
numbered path and a well-fitted banner. [D `how__desktop__dark.png`; metrics `capture_report_pass1_dark_axe.json`; counter-example `../captures_raw/learn__desktop__dark.png`]

### S4

**F14 — Trust-badge footnote row wraps ragged at 375** ("Open source on GitHub / MIT-licensed /
built on the Lattice Protocol — …" stacking 2–3 lines per badge in a cramped 3-column row) on
home, /network, /vaults heroes. [D `network__mobile-lg__dark.png`, `home__mobile-lg__dark.png`]

**F15 — Home hero caption "15 CONNECTED VAULTS · 14 RELATIONSHIPS" sits near the "74 VAULTS" stat**
— it is the sampled constellation's count (consistent with /vaults/graph) but can read as a
contradiction at a glance. [D `home__desktop__dark.png`]

**F16 — Title-tag pattern drift**: "Get Started — aDNA" vs "Learn aDNA", "aDNA Glossary",
"aDNA — Rosetta", "The network of aDNA computers". Cosmetic SEO/consistency.
[D pass-1 report `title` column]

**F17 — Registry card layout: the Exchange card's triad persona line wraps to two lines, breaking
row rhythm; several descriptions truncate mid-word ("Obsidi…", "craf…").** [D `vaults__desktop__dark.png`]

**F18 — Repeated blocks across surfaces**: the relationship-kind legend appears on both /network and
/vaults/graph; the hub diagram on home + /network. Coherent, mildly repetitive. [D `network__desktop__dark.png`, `vaults-graph__desktop__dark.png`]

---

## Per-surface notes (curated set)

| Surface | Verdict | Notes |
|---|---|---|
| `/` home | **Strong hero; best page.** | Clear eyebrow → claim → dual CTA → clone command → proof stats → live constellation. Dark/light parity clean (hero stays a dark band in light — deliberate, works). Mobile hero stacks well; F3 diagram + F7 registry leaks + F14 are its dents. [D `home__*`] |
| `/get-started` | Good desktop; **broken-feeling at 375 (F1)**. | Steps, terminal transcript and callouts read well; pixel-art banner crops to a thin strip on mobile; F12 copy-button orphaning. [D `get-started__*`] |
| `/vaults` | Good index; long. | Search + class filter chips + grouped cards; 13,921 px mobile scroll; single-card class groups make a stubby tail; F7/F8/F9/F17 live here. [D `vaults__*`] |
| `/vaults/graph` | **Hypothesis "nearly illegible" NOT reproduced (desktop)** — page has been reworked: legend + hierarchical SVG, node labels crisp both themes; mobile swaps the SVG for a tap-list fallback (good pattern). Remaining: F4 count clashes; edge kinds are same-hue and differ only by dash pattern (minor vs the 5-kind legend promise). [D `vaults-graph__*`] |
| `/community` | Clean docs page; honest "The horizon" callout is a highlight. F1 on mobile. [D `community__*`] |
| `/learn/what-is-adna` | Excellent 3-column docs page (sidebar + content + ON THIS PAGE). F1 on mobile; F12. [D `learn-what-is-adna__*`] |
| `/reference/specification` | Polished head (v2.5 Stable badge, toc); F6 extreme height. [D `reference-specification__desktop__dark.png`] |
| `/glossary` | Tidy expandable term list; F11 degenerate entries. [D `glossary__desktop__dark.png`] |
| `/network` | Strong narrative page, good pixel-art hero; F2 mobile overflow is its major defect; F3 second diagram instance. [D `network__*`] |
| `/vaults/aDNA.aDNA`, `/vaults/terminal` | Sparse-but-honest detail stubs; F8 schema asymmetry, F9 lowercase persona, F10 wrap + stale sync. [D `vaults-aDNA.aDNA__desktop__dark.png`, `vaults-terminal__desktop__dark.png`] |
| `/about` | Strong, unusually honest (named founder, agent-stewards explained, 4-stage decentralization roadmap). No defects noted. [D `about__desktop__dark.png`] |
| `/changelog` | F5 — stale single entry, mostly empty page. [D `changelog__desktop__dark.png`] |
| `/404` | Branded, helpful (Go home / Browse docs). [D `404__desktop__dark.png`] |
| `/commons` | Good subnetwork cards (SERVES / STEWARDED BY / OPEN GOVERNANCE all populated); long but sound on mobile. [D `commons__mobile-lg__dark.png`] |
| `/researchers`, `/startup-first-hour` | High-quality audience pages (tutorial cards with time/level metadata; staged hour plan). Inherit F1 on mobile. [D `researchers__desktop__dark.png`, `startup-first-hour__desktop__dark.png`] |
| `/how` | F13 thin + letterboxed banner. [D `how__desktop__dark.png`] |

**Dark/light parity**: no parity breaks found on any reviewed surface — palettes, callouts, cards,
SVGs and badges all adapt; heroes deliberately stay dark art-bands in light mode. All layout
defects (F1, F2, F3) are theme-independent. [D paired `*__dark` / `*__light` captures throughout]

**Visual voice consistency**: coherent overall — one design system (type, chips, cards, footer) +
recurring pixel-art accents across home / vaults / network / get-started / learn / how. The gap is
content weight, not styling: one excellent hero (home) and several strong narrative pages vs thin
hubs (/how, /patterns, /use-cases) and the stale /changelog.
