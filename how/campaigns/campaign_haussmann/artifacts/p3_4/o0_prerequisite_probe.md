---
type: artifact
artifact_type: probe_evidence
campaign_id: campaign_haussmann
mission: mission_haussmann_p3_4_flux_integration
objective: O0
title: "P3.4 O0 — live re-probe of the three ADR-054 prerequisites, with controls"
created: 2026-08-22
updated: 2026-08-22
status: active
last_edited_by: agent_rosetta
probe_run_at: 2026-08-22T23:57:57Z
probe_scope: live_instance_unauthenticated
target: https://community.adna.network
tags: [haussmann, p3_4, flux, prerequisites, dp7, evidence]
---

# O0 — the three prerequisites, re-probed live

> **Why re-probed at all.** The register is `[R]`-sourced from Aspasia's PUSH signal plus a
> same-day re-probe; the register ages, and this mission's rows demand `[D]`. Convention 12
> (recon-at-execution). Everything below is `[D 2026-08-22T23:57Z]` unless marked.

## ⭐ Finding A — the register's own probe paths are wrong, and they read as a total regression

The register (and ADR-054 §Context) cite **`branding.*`** and **`legal.*`** on
`/api/.well-known/fluxer`. **Neither key exists at top level** `[D]`. The live shape is:

```
app_public.branding.product_name   app_public.legal.terms_url
app_public.branding.theme_color    app_public.legal.privacy_url
app_public.branding.icon_url
```

Top-level keys are: `api_code_version · endpoints · captcha · features · gif · sso ·
registration · community · services · limits · push · app_public`.

**A probe at the documented paths returns `None` / `{}` — indistinguishable from every
prerequisite having been torn out.** This desk hit exactly that on its first probe this session
and re-checked before recording it. Corrected in the register; the note is kept there because
the failure mode is silent and expensive.

⚠ **ADR-054 §Context carries the same wrong paths** (*"`legal.*` nulls verified two ways"*) —
true when written 2026-08-16, wrong as a path today. Corrected at DP7 alongside the ratification.

## PR-1 — policy floor · **SPLIT: config limb MET, on-instance limb FAILS, and the CoC is unreachable**

The row's verification method has two limbs joined by a semicolon:

> *"Unauthenticated GET on the three paths → **substantive documents (not SPA shell)**; config
> `legal.*` non-null"*

| Limb | Evidence | Verdict |
|---|---|---|
| **B — config `legal.*` non-null** | `app_public.legal.terms_url` → `aDNA-Network/community-policies/blob/main/terms.md` **200** · `privacy_url` → `privacy.md` **200**. Raw: `terms.md` **4,675 B** opening *"# Terms of Service — aDNA Community (community.adna.network)"*; `privacy.md` **3,384 B**, *"# Privacy Notice — aDNA Community…"*. Substantive and instance-specific, not boilerplate | ✅ **MET** |
| **A — three paths → substantive documents, not SPA shell** | `/terms` · `/privacy` · `/guidelines` each **200, 6,295 B, `<title>Fluxer`** — **the SPA shell** | ⛔ **FAILS** |

### Limb A proven with controls (convention 14 — an instrument is not believed until demonstrated to fail)

1. **Negative control.** `GET /this-route-does-not-exist-9f3a` → **200, 6,295 B**, same shell.
   ⇒ *A 200 on this instance is not evidence that a route exists.* Anyone running the
   status-code half of PR-1's method alone would read `200 200 200` and score it MET.
2. **Nonce control.** `/` fetched twice differs **from itself**; the delta is a per-response
   CSP `nonce` and nothing else. `/terms` differs from `/` by **4 chunks, all nonce**.
   ⇒ `/terms`, `/privacy`, `/guidelines` are **byte-identical to `/` modulo the nonce.**

### ⛔ And the consequence the limbs obscure: **the CoC is reachable from the instance by neither route**

The prerequisite names **three** documents — *"ToS + privacy policy + community guidelines/CoC"*.

| Document | On-instance path | Config `legal.*` | Reachable from the instance? |
|---|---|---|---|
| Terms of Service | `/terms` = SPA shell | `terms_url` ✅ | ✅ yes |
| Privacy | `/privacy` = SPA shell | `privacy_url` ✅ | ✅ yes |
| **Code of Conduct** | `/guidelines` = SPA shell | **absent** — `legal` carries exactly `['privacy_url','terms_url']` | ⛔ **NO** |

`code_of_conduct.md` **exists and is substantive** — 200, **3,013 B**, *"# Code of Conduct — aDNA
Community (community.adna.network)"* — but it lives only in the GitHub repo, findable only by
someone who already found the repo. **Nothing on the instance points at it.**

⇒ **PR-1 is 2 of the 3 documents it names.** The register scored it MET on limb B alone and
filed the CoC gap as *"minor, P3.4 should confirm."* Confirmed — and it is not minor: it is one
third of the stated policy floor. *(Whether upstream's `legal` block even accepts a third URL is
**Aspasia's** question, not ours to answer — staged as a memo ask, never adjudicated here.)*

## PR-2 — aDNA branding · **owner-green / method-red, and the method is redder than recorded**

The register recorded one red surface (`<title>`). There are **six**, and one **actively
contradicts** the config rather than merely ignoring it.

| Surface (unauthenticated `GET /`) | Served | Config says |
|---|---|---|
| `<title>` | `Fluxer` | `product_name: "aDNA Community"` |
| `meta description` | *"Fluxer is a free and open source instant messaging and VoIP chat app built for frien…"* | — |
| `meta theme-color` | **`#4641D9`** (Fluxer purple) | **`#9d7cd8`** (aDNA — this vault's ADR-032 primary) |
| `manifest.json` `name` / `short_name` | `Fluxer` / `Fluxer` | `product_name: "aDNA Community"` |
| `manifest.json` `theme_color` | **`#4641D9`** | **`#9d7cd8`** |
| favicon / PWA icons | `/web/favicon-32x32.png`, `/web/android-chrome-*.png` — **stock** | self-hosted `media/branding/0/299e223f.png` |
| `og:title` | **ABSENT** | — |

**Where "aDNA" appears in the served HTML: 3 times, all three inside the embedded
`window.__FLUXER_BOOTSTRAP__` JSON blob** — the same `app_public` payload the API serves.
"Fluxer" appears 3 times, in the title, the description and the manifest link.

⭐ **That is the DP7 question made concrete: the aDNA identity is in the bytes, as data for a
client to read. It is nowhere in the rendered document metadata.**

**The consequence that is not cosmetic:** a link preview / unfurl of `community.adna.network` —
in a chat app, a social post, a search result — reads **"Fluxer — a free and open source instant
messaging and VoIP chat app."** If this site links the venue, that is what a shared link says.
A logged-in client, by contrast, renders "aDNA Community" in aDNA purple with the self-hosted icon.

`[R]` unchanged and undisputed: baked into upstream's app-proxy binary, does not read instance
config, deeper skinning means carrying a fork, which **Fluxer ADR-000 rules out**. This is an
**upstream ceiling, not remediation left undone** — Aspasia disclosed it unprompted and correctly.

## PR-3 — inside aliveness · **MET, unchanged** `[R 2026-08-20]`

`coord_2026_08_20_aspasia_to_rosetta_reconciliation_truth_note.md` §1: **ALIVE — confirmed from
inside**, read-only recon, operator-GO'd — **4 guilds · 23 users · 49 channels (+51 private) ·
264 messages · same-day message activity · 2 invites**; artifact
`Fluxer.aDNA/what/context/fluxer/recon_live_instance_20260820`. Nothing in the 08-21 or 08-22
traffic supersedes it. Not outside-verifiable by design; no `[D]` is obtainable and none is owed.

## Also observed (context for DP7, not prerequisites)

- `registration.mode = "approval"` — the live site's current copy is **still correct** on this clause.
- `captcha.provider = "none"` — the open drift; Aspasia's remediation **rung ①**, a ruling not a fact.
- `sso.enabled = false` · `features.self_hosted = true`.

## Verdict carried to ⛩ DP7

| | Register said (08-21) | This probe says (08-22) |
|---|---|---|
| **PR-1** | ✅ MET | ◐ **SPLIT** — config limb MET; on-instance limb **fails with controls**; **CoC reachable by neither route** ⇒ 2 of 3 documents |
| **PR-2** | ◐ owner-green / method-red (1 surface) | ◐ **unchanged in kind, worse in degree** — 6 surfaces, one contradicting the config |
| **PR-3** | ✅ MET | ✅ **MET**, unchanged `[R]` |

**By the register's own stated methods: 1 of 3 fully met, 1 split, 1 met by attestation.**
Neither PR-1's nor PR-2's seam is remediable by this desk, and both are **method-vs-prerequisite
disagreements** rather than work left undone — which is the sixth and seventh instance in this
campaign of *a verification method that does not reach the thing it verifies*. **Adjudication is
⛩ DP7's, not this artifact's.**
