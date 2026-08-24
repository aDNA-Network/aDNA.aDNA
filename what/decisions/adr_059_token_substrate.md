---
type: adr
adr_number: "059"
title: "Token substrate: adopt WebForge's DTCG pipeline, pin a formal divergence, or take the validators only"
status: accepted        # ⛩ DP8 ruled (c) — operator Stanley, 2026-08-23
created: 2026-08-23
updated: 2026-08-23
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_1_token_pipeline
supersedes: ""
superseded_by: ""
probe_date: 2026-08-23
tags: [adr, haussmann, tokens, dtcg, webforge, d5, dp8]
---

# ADR-059 — The token substrate for adna.network

## Status

**Accepted** — authored at P4.1 O0 and **ratified at ⛩ DP8 on 2026-08-23**: the operator ruled **(c),
validators without emission**.

## Why this is an ADR and not an in-flight call

P4.1's AC2 reads: *"adopt the WebForge DTCG pipeline … OR a formally pinned divergence with rationale in
the wrapper"* — phrased as a mechanical election for the executing agent. Recon at O0 found it is not
mechanical: the premise the mission was scoped on is wrong (§1), the only Rule-10-legal adoption route is
unproven (§2), and the mission's own stated verification cannot test either outcome (§3). Under §7.7
(agents author, operators ratify) a decision that can regress 618 lines of hand-tuned, AA-verified CSS
belongs at a gate. **The operator elected to co-rule it at DP8 with ADR-053.**

---

## §1 · The premise is wrong: `tokyo_night` is not our seed

`webforge_pattern_register.md:39` (this campaign's own intake artifact) records:

> *"the site's ADR-032 Tokyo Night register is **already one of WebForge's ceiling seeds** — convergence
> is natural"*

**On disk, 2026-08-23 `[D]`:**

- `WebForge.aDNA/what/lib/tokens/ceiling_map.json` files `tokyo_night` **not** under `assignments` but
  under **`ss_ceilings`**, annotated `"SS app canon (dark-only)"`, with the note that these are
  *"applied for SS surfaces … not an archetype's native home."*
- `src/ceilings/tokyo_night/ceiling.json` declares **`"appearances": ["dark"]`**, labels itself
  *"SS Tokyo Night (app canon)"*, and states: *"DARK-ONLY … the compiler emits the dark values into
  `:root` and no `html.dark` block, so the surface stays Tokyo regardless of the theme toggle."*
  Its seed is named as `Astro.aDNA/…/persona_tokyo.css`.
- The directory ships **only `primitives.dark.json`** — there is no light primitive set to compile.
- WebForge's own filled example, `fixtures/art_direction.example.yaml`, uses it as the **anti-signature**:
  `anti_signature: "Not SS's tokyo-night app canon; not a generic centered marketing splash."`

**adna.network is dark-*first*, not dark-*only*.** `site/src/styles/tokens.css` puts the **light** palette
in `:root` and the Tokyo-Night values in `.dark`; `branding.css` carries a full set of AA-verified
light-mode counterparts (`--brand-primary-dark #6d4bb8` → 5.8:1 on white; `--brand-link-dark #1f6f9e` →
5.4:1). **Dark/light parity and the axe-0 record are both named in "What this campaign protects."**

⇒ **Adopting `tokyo_night` as-is would delete light mode by construction.** It is not our seed; it is a
sibling brand's dark-only app canon that happens to share a colour family. The pattern register's
"convergence is natural" is withdrawn.

## §2 · There *is* a Rule-10-legal adoption route, and it is unproven

Authoring `src/ceilings/adna_*/` inside `WebForge.aDNA` is forbidden — workspace Rule 10 / campaign
convention 10: cross-vault writes are memos, never direct edits. Copying the pipeline here is forbidden
too — wrapper standing order 1, *extend never fork*.

`derive_tenant_ceiling.py` appears to resolve exactly this `[D, docstring + committed output]`:

- It **generates** a `tenant_<slug>/` ceiling from a brand anchor plus an art-direction entry, rather than
  reading committed CSS.
- It accepts `--from-entry <art_direction.yaml> --branding <branding.json>` — **both files this vault's
  wrapper already holds**, at `how/federation/webforge/what/context/`.
- Its committed example `tenant_wonderland/ceiling.json` declares **`"appearances": ["light","dark"]`** —
  light and dark, unlike `tokyo_night`.
- It states: *"Tenant dirs are gitignored under `src/ceilings/` (F-DCRIT-4: no committed fleet pollution;
  **the production target is consumer-side**)"* — i.e. consumer-side emission is the designed use, so
  nothing is written into WebForge.

⛔ **None of this is asserted to work.** It is a reading of a docstring and one committed artifact. Per
campaign **convention 14**, an instrument is not believed until it has been demonstrated to fail — and this
campaign has shipped **five** wrong instruments in two weeks, one of them in the session that authored this
ADR. If option (a) is ruled, O1's first act is to run the engine **with a control** (a deliberately bad
anchor that must be refused; a derived output diffed against the live CSS) before any byte of `site/`
changes.

### The concrete risk if (a) is ruled

The site's tokens are not generic defaults; they are a repair history.

- `--color-success: hsl(142 72% 26%)` — the comment records the previous 40% lightness **failing WCAG AA
  at 2.46:1** on a success tint (audit P1-S3).
- `--space-5/10/20` were added at E5 c165 because ~25 live declarations referenced undefined vars and were
  **silently collapsing to 0/initial**.
- `branding.css` documents five per-pair contrast ratios by hand.

A regenerated ramp is *perceptually* principled (OKLab, AA-repair to a fixpoint) but it does not know this
history. **Adoption is a re-derivation of every colour on the property**, and the axe-0 record rides on it.

## §3 · The stated verification cannot test any of this (convention 13)

P4.1's `verification_method` reads *"gate-25/4d-class token checks."* `[D]`:

- **Gate 25** (`site/tests/gates/gate-25-token-discipline.spec.ts`) is a **non-regression hex fence**. Its
  own header defines `TOKEN_FILES = new Set(['styles/tokens.css', 'styles/branding.css'])` and **excludes
  them from the scan**. It is *by construction* blind to a change in the token definitions themselves.
- **Gate 4d** is WebForge's `conformance.py` byte-identity check of *its* emitted CSS against *its* DTCG
  source. This site is not compiled from that source, so 4d has nothing to compare.

⇒ **Neither named instrument can move on AC2, under any option.** Whichever option is ruled, O1 must
either name a verification that can (contrast assertions in both themes over the *rendered* surface, plus
axe-0 parity, plus a visual diff of the T0 capture set) or record honestly that AC2 ships unverified. This
is convention 13's pass, run before the budget is ratified rather than after.

---

## Decision space

- **(a) Adopt, via a consumer-side derived `tenant_adna` ceiling.** Run `derive_tenant_ceiling.py
  --from-entry` against the wrapper's `art_direction.yaml` + `branding.json`, emit consumer-side, compile,
  and replace the hand-rolled token layer. *Gains*: one source of truth, fleet-shared semantic layer,
  AA-repair to a fixpoint, WebForge's leak/conformance gates become usable. *Costs*: re-derives every
  colour, discards a documented repair history, unproven engine, largest diff, axe-0 at risk.
- **(b) Formally pinned divergence.** Keep the hand-rolled CSS; record the divergence and its rationale in
  `how/federation/webforge/CLAUDE.md` with a review condition. *Gains*: zero regression risk, honest, and
  already legal under AC2. *Costs*: the drift the DTCG pipeline exists to kill stays; a future
  re-platform pays the bill instead.
- **(c) Hybrid — validators without emission.** Adopt WebForge's **checks** (`check_aa.py`,
  `conformance.py --strict-leak`) as gates over the *existing* CSS; pin the *emission* divergence per (b).
  *Gains*: most of the discipline, none of the re-derivation; converts §3's gap into a real instrument.
  *Costs*: the validators expect DTCG-shaped input, so an adapter is owed — small, but real and unscoped.
- **⛔ (d) Adopt `tokyo_night` as-is — REFUSED ON THE RECORD**, per §1. Recorded rather than omitted so a
  future reader sees it was considered and why it was declined; it is the option the pattern register's
  wording would have led an executing agent straight into.

## Recommendation

**(c), then re-open (a) on evidence.**

(c) is the only option that buys something this session's findings say is actually missing — **a
verification that can see the token layer at all** (§3) — without betting the axe-0 record on an unproven
engine (§2) and without discarding a documented repair history. It leaves (a) fully available: once the
derived ceiling can be diffed against the live CSS *under a working AA check*, adoption becomes an
evidenced step instead of a leap.

(b) is the honest fallback if the adapter in (c) proves larger than it looks. (a) is not wrong — it is
premature by exactly one instrument.

---

## Consequences

- **(c)** — an adapter + two gates land in P4.2's craft floor; the wrapper records a scoped, reviewable
  divergence; `art_direction.yaml` is still authored (it is ADR-053's dependent, not only a derivation input).
- **Whatever is ruled**, the pattern register's "convergence is natural" line is corrected in the same
  change, and the correction is **staged to Vitruvius as a memo** (Rule 10) since the error is in
  WebForge-derived intake this vault wrote about WebForge's own artifact.
- **Upstream pressure owed either way**: WebForge's P5 ceiling engine is `PROPOSED — not built`, and
  aDNA's entry is its first real consumer test case. That is `patterns_to_author:` on the mission and does
  not depend on which option wins.

## Ratification

- **Decision:** **(c) — adopt WebForge's validators over the existing CSS; formally pin the emission
  divergence** · **Ratified-by:** Stanley (operator) · **Gate:** ⛩ DP8 · **Date:** 2026-08-23 ·
  **Status:** **accepted**.

**Co-ruled at the same gate:** [[adr_053_visual_voice_systematization]] — ruled **(a)**.

### What (c) obliges at O1 — and what it forbids

**Obliges.** ① An adapter presenting the site's token layer in the shape `check_aa.py` /
`conformance.py --strict-leak` expect, plus both gates wired into the suite. ② A **formally pinned
divergence** recorded in `how/federation/webforge/CLAUDE.md` — the emission divergence, its rationale
(§1 + §2), and a **review condition** naming what evidence would re-open (a). ③ A memo to **Vitruvius**
correcting the pattern register's *"convergence is natural"* line (Rule 10 — the error is in this vault's
intake artifact about WebForge's own ceiling, so the correction is staged, not written into WebForge).
④ A verification that can actually see AC2 (§3), since neither gate-25 nor 4d can.

⛔ **Forbids.** No `tenant_adna` ceiling is derived. No token value is regenerated. **`derive_tenant_ceiling.py`
is not run against `site/` in this phase** — its first legitimate use is producing evidence for a future
re-opening of (a), under a control, in a sitting of its own (convention 14). ⭐ **A validator adopted as a
gate is itself an instrument, and this campaign has shipped five wrong ones in two weeks — so both new
gates are red-tested by deliberate mutation before either is believed.**
