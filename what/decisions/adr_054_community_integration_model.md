---
type: adr
adr_number: "054"
title: "Community integration model: prerequisites, the honest-state link, and the human-only line"
status: accepted
created: 2026-08-16
updated: 2026-08-22
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, community, flux, d8]
---

# ADR-054 — Community integration model

## Status

**Accepted** — ratified at ⛩ **DP7**, 2026-08-22 (mission P3.4). ~~Proposed — prerequisites named at genesis (P0.4 refines with Aspasia); the link GO/NO-GO is **DP7** (mission P3.4).~~

## ⛩ DP7 — the ruling (2026-08-22)

**Verdict: GO**, at the scope stated below. Evidence: `campaign_haussmann/artifacts/p3_4/o0_prerequisite_probe.md` `[D 2026-08-22T23:57Z]`, with controls.

### The question that had to be answered first

**PR-2 asks for "minimal aDNA branding." The instance's *config* is fully aDNA; its *served document
metadata* is fully stock Fluxer.** Six surfaces `[D]`: `<title>` `Fluxer` · `meta description`
*"Fluxer is a free and open source instant messaging and VoIP chat app…"* · `meta theme-color`
**`#4641D9`**, which **contradicts** the config's `#9d7cd8` rather than ignoring it · `manifest.json`
`name`/`theme_color` · stock favicons · `og:title` absent. All three occurrences of "aDNA" in the
served HTML sit **inside the embedded bootstrap JSON**. The identity is in the bytes; it is nowhere
in the document metadata.

**Ruled: "identifies as the aDNA community" means WHAT AN AUTHENTICATED CLIENT RENDERS.**
⇒ **PR-2 is MET**, and the **method is amended** to probe `app_public.branding.*` rather than raw
HTML. The gap is an **upstream ceiling**, not remediation left undone: the metadata is baked into
upstream's app-proxy binary, does not read instance config, and the only fix is a fork — which
**Fluxer ADR-000 rules out**, deliberately. Aspasia disclosed the ceiling unprompted.

**Binding consequence on copy:** because the public face is *not* aDNA-branded, **site copy neither
describes nor claims the instance's branding.** Silence, not spin. A link preview of the venue reads
"Fluxer", and the site does not pretend otherwise by omission-plus-implication.

### The other two, disposed

- **PR-1 — MET at the amended method, with one residual named.** Its stated on-instance limb is
  **unsatisfiable by construction**: the instance returns the SPA shell with **200 for every path**,
  proven by a negative control (a route that cannot exist returns the same shell) and a nonce control
  (`/terms` differs from `/` by a per-response CSP nonce alone). By the same logic that settled PR-2,
  the method is the thing that is wrong: **"reachable from the instance" — i.e. the `legal.*` config
  URLs — is what the prerequisite means.** Terms + privacy qualify.
  ⚠ **Residual: the CoC qualifies under neither limb** — absent from `legal.*`, and `/guidelines` is
  the shell. **Closed from the site's side** (this GO has `/community` link all three documents
  directly, which ADR-054 clause 2's *"its rules"* already contemplated) and **staged as an ask to
  Aspasia** for the instance side. Whether upstream's `legal` block even accepts a third URL is
  **hers to answer, not ours**.
- **PR-3 — MET** `[R 2026-08-20]`, unchanged.

### Scope of the GO

`/community` links the venue in the honest-state pattern, **links its three published rule documents
directly**, and states the question-path routing. **No participation-ladder mapping** — AC2 required
rungs mapped to venue surfaces *"where true"*, and no `[D]` evidence for any rung→channel mapping is
obtainable from outside the auth wall. Deferred, not skipped. **First-class integration remains
federation-GA-gated** per aDNALabs ADR-025; clause 2's ladder is otherwise intact.

### Three corrections this ADR owed

1. **§Context's probe paths are wrong.** It says *"`legal.*` nulls verified two ways"*. Neither
   `legal` nor `branding` exists at top level; the live shape is **`app_public.legal.*`** and
   **`app_public.branding.*`**. True as *values* when written 2026-08-16, wrong as *paths* — and a
   probe at the paths as written returns `None`/`{}`, indistinguishable from every prerequisite
   having been torn out.
2. **Clause 2's NO-GO branch stopped describing the site.** It reads *"`/community` carries an
   honest 'being prepared, not open yet' note."* The venue **is** open and the link **already
   shipped** under the 2026-08-17 override. Had DP7 gone the other way, executing that branch as
   written would have required the site to **replace a true sentence with a false one**. The NO-GO
   branch is hereby re-worded: *the link stays in its current minimal honest-state form and is not
   promoted.*
3. **Clause 3's copy law needed a case it did not have.** A claim can be true when written and false
   later with nothing changed on the site. **R-95** was stamped `verified` on 08-17 evidence and went
   false on 08-21; `gate-26` pins `verified` quotes as *must-be-present*, so **the suite was green
   because of the false sentence and would have gone red on the truth.** ⇒ **Added to clause 3: any
   sentence describing an external surface carries its probe date on its face, and its claim row
   records that date.**

## Ratification

- **Decision:** _GO — promote the `/community` venue link to the scope above; PR-2 MET on the
  client-renders reading with its method amended; PR-1 MET at the amended method with the CoC
  residual closed site-side and staged to Aspasia; the branding ceiling recorded, not concealed._
- **Ratified-by:** _Stanley (operator), in-chat at ⛩ DP7 · instance-side facts attested by Aspasia
  (`Fluxer.aDNA`), 2026-08-20 / 2026-08-21_
- **Date:** _2026-08-22_
- **Status:** **accepted**

~~- **Decision:** _model above; GO/NO-GO pending DP7 (P3.4)_ · **Ratified-by:** _pending_ · **Date:** _pending_ · **Status:** **proposed**.~~

> **Operator ruling — link-GO fired early (deviation record, honesty law).** At the P1.1 session
> (2026-08-17, in-chat `AskUserQuestion`), the operator directed the /community funnel to route to the
> aDNA-Network GitHub **and the Fluxer at community.adna.network**, and — presented with the fresh probe
> (`[D 2026-08-17]`: instance live, `legal.terms_url`/`privacy_url` **null**, `branding.*` **null**, no
> Aspasia ack) — elected **"Override: link it now"**, overriding clause 1's prerequisites-before-link for
> the `/community` link only. Residual risk accepted: the site links a surface with no ToS/privacy and no
> aDNA branding. Mitigations binding on the copy: the link ships in the **honest-state pattern** (what it
> is, its early state, policies still being stood up), the **human-only** line per aDNALabs ADR-025, and
> clause 3's copy law in full. Clause 2's ladder is otherwise intact — full first-class integration remains
> DP7/P3.4 + federation-GA-gated. Aspasia notified via the still-open P0.4 thread at next delivery window.

## Context

> ⚠ **Corrected at DP7, 2026-08-22 — this paragraph is the 2026-08-16 genesis state and three of its
> facts have since moved.** ① The `legal.*` / `branding.*` **paths below are wrong**: neither key
> exists at top level; the live shape is **`app_public.legal.*`** / **`app_public.branding.*`**, and a
> probe at the paths as written returns `None`/`{}` — indistinguishable from a total regression.
> ② The instance is **no longer policy-naked**: terms + privacy went live 2026-08-21 (the CoC is
> published but not wired into the instance — see the DP7 residual). ③ There **is** now a link, from
> `/community`, since the 08-17 override. Kept verbatim per SO#6.

community.adna.network is live (Fluxer on third-party metal) but: zero aDNA branding (`<title>` "Fluxer"), **policy-naked** (no ToS/privacy/CoC — `legal.*` nulls verified two ways), approval-gated registration with captcha OFF (both drift from the vault's own plan), aliveness unverifiable from outside, and **no link in either direction** today `[D flux draft]`. Binding constraints: aDNALabs **ADR-025** (human-only surface until federation GA; agent-exchange framing fires ADR-009 T1) `[R]`; Fluxer **SO#8** (no LLM syndication of conversations; agents always visibly disclosed) `[R]`. Fluxer.aDNA's STATE is stale-wrong (P0.4 reconciles).

## Decision (ratified model — DP7, 2026-08-22)

1. **Prerequisites before any link** (all three, verified live): policy floor on the instance (ToS/privacy/CoC) + minimal aDNA branding + inside-aliveness confirmation by operator/Aspasia.
2. **Integration ladder**: ~~NO-GO state = `/community` carries an honest "being prepared, not open yet" note (itself acceptable, indefinitely)~~ **NO-GO state (re-worded at DP7) = the `/community` link stays in its current minimal honest-state form and is NOT promoted** — the original wording described a venue that is not open, and the venue *is* open, so executing it would have replaced a true sentence with a false one → GO state = link **from `/community` only**, in the site's honest-state pattern (what it is, its early state, its rules), question-path routing stated → full first-class integration (shared design system, bidirectional nav, ladder-mapped surfaces) **only at federation GA** per ADR-025.
3. **Copy law**: every community sentence register-verifiable; no activity implied that isn't; agent participation, if any, disclosed per the pinned-notice doctrine. **⭐ Added at DP7 (2026-08-22): any sentence describing an EXTERNAL surface carries its probe date on its face, and its claim-register row records that date.** A claim about someone else's system can be true when written and false a week later with nothing changed on this site — and the register, which adjudicates *wording*, is structurally blind to it. R-95 is the worked case: stamped `verified` on 08-17 evidence, false from 08-21, and **`gate-26` — which asserts `verified` quotes stay PRESENT — was green *because* of the false sentence and would have gone red on the truth.**

## Consequences

The site can never be caught linking a ghost town or implying an agent-exchange surface; Aspasia's lane owns the instance work at its own pace; the fallback is honest rather than embarrassing.

