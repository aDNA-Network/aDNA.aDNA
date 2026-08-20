---
type: artifact
artifact_class: audit
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
objective: O2
title: "Decade-2 premise audit — do the P3–P5 missions still describe the site that exists?"
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
tags: [artifact, haussmann, p2_6, replan, decade2]
---

# Decade-2 premise audit

The twelve P3–P5 missions were authored at genesis (2026-08-16) against the site as it then was. Decade 1
has since shipped nine missions. **A provisional mission whose premise has quietly changed is worse than
an unwritten one** — it carries budget, ordering, and acceptance criteria derived from a state that no
longer holds.

This audit probes each mission's *stated premise* against production, before the re-plan disposes of it.
All rows `[D]`, probed 2026-08-19 against `https://adna.network` and the built `site/dist`.

## P3.1 — Markdown twins · **premise partly DEAD → scope shrinks**

| Stated premise | Measured now | Verdict |
|---|---|---|
| `.md` twins 404 (10/10) | **10 of 10 → 404**: `/about` `/network` `/commons` `/get-started` `/learn/what-is-adna` `/reference/specification` `/vaults` `/use-cases` `/state-of-the-network` `/changelog`, each probed with a `.md` suffix | **holds** |
| *"while **29 old links** point at them"* | **Zero internal `.md` links remain.** 15 distinct `.md` hrefs in the built site: **14 are `github.com` blob URLs** (legitimate external references to the standard), and the 15th is `https://obsidian.md` — a domain, not a file | **DEAD** |
| llms-full.txt is *"a 2 KB index wearing a corpus name"* | **2,476 bytes** — still an index | **holds** |
| llms.txt *"referenced zero times in the site's own HTML"* | **0** refs across `/`, `/get-started/`, `/about/`; llms.txt itself advertises **0** `.md` files | **holds** |
| `Accept: text/markdown` negotiation | serves `text/html; charset=utf-8` | **holds** (absent) |

**Consequence**: the "repair 29 dangling links" half of P3.1 is **already done** — almost certainly by
P2.1's URL normalization or P2.2's link work, neither of which claimed it. What remains is genuinely
constructive work: build the twins, add negotiation, make llms-full.txt a real corpus **or rename it
honestly**, and link llms.txt from the chrome. Budget should come down; the *risk* does not, because the
remaining half is all build and no cleanup.

## P3.2 — Registry as data · **premise partly DEAD → scope shrinks**

| Stated premise | Measured now | Verdict |
|---|---|---|
| 4 obvious JSON paths 404 | `/vaults.json` `/api/vaults.json` `/registry.json` → **404 ×3** | **holds** |
| *"**no Organization JSON-LD anywhere sitewide**, no sameAs"* | **Present.** `@type: WebSite` with nested `publisher: {@type: Organization, sameAs: [community.adna.network, github.com/aDNA-Network]}` on `/`, `/about/`, `/vaults/` | **DEAD** |
| no Dataset | **absent** | **holds** |

**Attribution**: `git log -S'sameAs' -- site/src` → `099e557` / `9e0fd06` / `eff6670`, all **P1.2**, and
`site/src/utils/seo.ts:11` says so in its own comment (*"HAUSSMANN P1.2 added `sameAs` — the
machine-readable half of the §7.1 clone-site defense"*). It shipped as a side effect of canonical-identity
single-sourcing; no D10 mission claimed it.

**Caveat kept**: the Organization is nested as `publisher`, not a top-level entity. Whether that
satisfies P3.2's intent is a scope judgment for the gate, not a fact.

## P3.3 — MCP server · **premise holds**

`/.well-known/mcp.json` → **404**. No MCP surface exists. Unchanged; the most build-heavy P3 mission and
the one whose `opus` tier and 2-session budget survive the audit intact.

## P3.4 — Community integration · **premise holds, and is doubly contingent**

Unchanged, and its DP7 gate already **fired early by operator override at P1.1** — the `/community` link
shipped with prerequisites unmet. The mission still owes the formal GO/NO-GO. Its prerequisite register
(`artifacts/p0_4/prerequisite_register.md`) needs re-probing at execution, not here.

## P3.5 — Proposal process · **premise holds**

No numbered proposal process exists on the site. Unchanged.

## P4.2 — Craft floor · **premise STRENGTHENED → scope grows**

F13's thin hubs are **not** resolved and gained a fourth instance: `/reference/specification` ships
**h2=0, bodyLen 1,504** — thinner than `/patterns` (2,007) and `/use-cases` (2,030) — created by P2.3's
spec split. The other three moved +29 / +29 / +12, consistent with P2.3's date line rather than content.
**F20** (a font face failing on every page) also lands here.

## P4.4 — CI hardening · **premise STRENGTHENED, and convention 4 is currently unsatisfiable**

`lighthouse_profiles.json` **does not exist anywhere in this vault** `[D]`. `how/federation/webforge/`
contains exactly three files: `CLAUDE.md`, `what/context/branding.json`, `what/context/adna_voice_mapping.yaml`.

Campaign CLAUDE.md convention 4 instructs: *"Read gate bars from `lighthouse_profiles.json`, never
transcribe (KW-14)."* **That instruction cannot be followed from inside this vault today** — every bar in
gate-19 is necessarily transcribed, which is the exact defect the convention forbids. This is structural,
not anyone's lapse, and it should be either fixed (mirror the file into the wrapper) or the convention
amended to say so. P4.4 already owns the profiles adoption; it now also owns this.

Add to P4.4: the **zero-console-error gate** and the **off-site CTA-target gate** (R-122/R-123 — no gate
currently probes the repos the site's primary CTA points at).

## P5.1 — Human evidence · **premise holds, and two synthetic readers reinforced it**

The DP2-waived human panel remains owed. Two independent signals this mission: the clinician cold-reader
initially read *"aDNA"* as **ancient DNA**, the standard abbreviation in her field — a second synthetic
data point on the name collision ADR-048 ruled without a panel. And the TTFS run (O0b) is P5.1's clean-VM
predecessor; if O0b's protocol works, P5.1 inherits a proven instrument instead of an unexercised one.

## What no P3–P5 mission currently owns

Five register rows opened this mission have **no home in the Decade-2 plan as written**:

| Row | Sev | Nearest owner | Note |
|---|---|---|---|
| R-120 homepage self-contradiction | S2 | P4.5 (voice) — but P4.5 runs **last** by explicit sequencing rule | S2 in the 30-second zone waiting behind the whole of P4 is a scheduling problem the re-plan must answer |
| R-111 related-party disclosure | S2 | none | Adjudicated at P1.2, never shipped, never tracked |
| R-121 invented before/after | S3 | P4.5 | Same lateness issue, lower severity |
| R-122 / R-123 CTA repo + license | S2 | P3.5 (contribution funnel) is closest | R-123 has a legal edge — contributions invited into an unlicensed repo |
| R-124 no clinical posture | S3 | none | D7-adjacent; needs a decision about audience before it needs copy |

**This is the re-plan's central question**, and the audit's real output: the campaign's remaining
sequencing puts the voice mission last, and this mission just produced two S2 copy defects on the
highest-traffic surface. Either the sequencing rule bends, or a small early copy-fix mission is inserted,
or the S2s ride to P4.5 with that stated as a deliberate, dated choice. All three are defensible; none
should happen by default.
