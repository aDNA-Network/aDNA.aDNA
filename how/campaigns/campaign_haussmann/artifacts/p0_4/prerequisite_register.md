---
type: artifact
artifact_type: prerequisite_register
campaign_id: campaign_haussmann
mission: mission_haussmann_p0_4_flux_state_recon
title: "P0.4 — community-integration prerequisite register (the DP7 checklist, with owners)"
created: 2026-08-16
updated: 2026-08-22
status: active
last_edited_by: agent_rosetta
prerequisites_green: 1        # ⬇ WAS 2, LOWERED at the P3.4 O0 re-probe 2026-08-22 — claims move DOWN (convention 1). Of 3 by THIS REGISTER'S OWN stated verification methods: PR-3 only. PR-1 is now SPLIT (config limb met; on-instance limb fails with controls; the CoC is reachable by neither route ⇒ 2 of the 3 documents it names) and PR-2 stays owner-green/method-red. 3 of 3 by the owner's attestation. See §O0 re-probe. Derived from the status column, not typed.
trigger_model: push           # changed from POLL 2026-08-21 — AND THE SIGNAL FIRED THE SAME DAY, mid-session, untracked. See §Trigger model.
tags: [haussmann, p0_4, flux, prerequisites, dp7]
---

# The three prerequisites before any community link (ADR-054 §1)

> P3.4's DP7 GO/NO-GO reads this register. A prerequisite counts as MET only with the named
> verification `[D]`-recorded. The honest fallback (no link + "being prepared" note on `/community`)
> is an acceptable indefinite end-state — nothing here is a deadline.

> **⚠ UPDATED 2026-08-21 at the P0.4 close — 1 of 3 green, and the two that remain are the two that
> gate a link.** Aspasia's reply
> (`who/coordination/coord_2026_08_20_aspasia_to_rosetta_reconciliation_truth_note.md`) cleared PR-3
> with evidence and confirmed ownership of PR-1/PR-2 without landing either. **Their own reading,
> quoted so nobody has to infer it:** *"HAUSSMANN's honest no-link state remains correct until the
> ladder completes."* The 08-16 status column is struck-not-replaced below, per SO#6.

> ## ⚠ SUPERSEDED WITHIN HOURS — read this before the table
>
> **A second Aspasia memo landed 2026-08-21, after the rows below were written**
> (`coord_2026_08_21_aspasia_to_rosetta_adr054_prerequisites_green.md`, `ack_required: false`):
> **the promised PUSH signal, declaring all three prerequisites GREEN.** It arrived **untracked, mid-session**, and
> was found by the close sweep this mission's own AAR had adopted hours earlier — the discipline
> caught the very memo that proved why it was needed.
>
> **Re-probed directly rather than taken on trust** `[D]`, because this register's rows demand `[D]`
> and a peer memo is `[R]`:
>
> | Probe | Result |
> |---|---|
> | `GET /api/.well-known/fluxer` → `branding.product_name` | **"aDNA Community"** ✅ |
> | …`branding.theme_color` | **`#9d7cd8`** ✅ — this vault's own ADR-032 primary |
> | …`branding.icon` | self-hosted on the instance's media store ✅ |
> | …`legal.terms_url` / `legal.privacy_url` | **both non-null**, → `aDNA-Network/community-policies` (**200**) ✅ |
> | `GET /` raw HTML `<title>` | **`Fluxer`** ⛔ |
>
> ⇒ **PR-1 and PR-3 are MET on this register's own terms. PR-2 is NOT — and the disagreement is
> real, not a formality.** PR-2's stated method reads *"Unauthenticated GET `/` → title/meta/manifest
> carry aDNA identity."* The branding **config** is fully aDNA; the **served HTML** still says
> `Fluxer`. Aspasia disclosed this unprompted and correctly: the static `<title>`, stock favicons and
> PWA manifest are baked into upstream's app-proxy binary, do not read instance config, and skinning
> deeper would mean carrying a fork — which their ADR-000 rules out. **This is an upstream ceiling,
> not remediation left undone.**
>
> ⭐ **FIFTH instance in this campaign of one family: a verification method that does not reach the
> thing it verifies.** PR-2 probes raw HTML; the branding lives where the client reads it. Same shape
> as DEFECT 3 (a method that cannot move its test's surface) and convention 14 (an instrument that
> never reached what it claimed to check). **The prerequisite is arguably satisfied and its test is
> definitely failing, and only a human can say which one is wrong.**
>
> ⛔ **Not adjudicated here, deliberately.** Whether "minimal aDNA branding" means *what a client
> renders* or *what an unauthenticated fetch sees* is a **⛩ DP7 question at P3.4's O0** — the gate
> that owns the GO/NO-GO. This register records both measurements and rules on neither. *(Also
> noted: `legal.*` carries terms + privacy; the CoC exists in the policies repo but is not wired into
> the config block. Minor, and P3.4's re-probe should confirm it.)*
>
> ⇒ **P3.4's likely answer has flipped from NO-GO to a genuine question**, which is a materially
> different mission than the one this register described this morning.

> ## ⚠⚠ SUPERSEDED AGAIN — the P3.4 O0 re-probe, 2026-08-22
>
> **The rows below are kept verbatim (SO#6) and are wrong in two places.** Full evidence with
> controls: `artifacts/p3_4/o0_prerequisite_probe.md`. Three corrections:
>
> **1. ⭐ THIS REGISTER'S OWN PROBE PATHS ARE WRONG.** Every row and header below cites
> `branding.*` and `legal.*` on `/api/.well-known/fluxer`. **Neither key exists at top level**
> `[D 2026-08-22]`. The live shape is **`app_public.branding.*`** and **`app_public.legal.*`**.
> A probe at the paths as written returns `None`/`{}` — **indistinguishable from every
> prerequisite having been torn out.** This desk hit exactly that on its first probe and
> re-checked before recording it. *(The values the 08-21 rows record were right; only the paths
> were shorthand. Kept as a note because the failure mode is silent, and the next cold agent
> copying these paths raises a false regression alarm on a healthy venue.)*
>
> **2. ⛔ PR-1 IS NOT MET — it is SPLIT, and the CoC is unreachable.** Its method has two limbs.
> Config limb ✅. **On-instance limb FAILS**: `/terms`, `/privacy`, `/guidelines` are each **200,
> 6,295 B, `<title>Fluxer` — the SPA shell**, proven two ways: a route that cannot exist
> (`/this-route-does-not-exist-9f3a`) returns **the same 200 shell**, and `/terms` differs from
> `/` by **nothing but a per-response CSP nonce** (`/` differs from *itself* the same way).
> ⇒ **A 200 on this instance is not evidence a route exists**, and anyone running the
> status-code half of this method alone would have scored `200 200 200` as MET.
> **And the consequence the limbs obscure**: the prerequisite names *three* documents;
> `app_public.legal` carries exactly `['privacy_url','terms_url']`, and `/guidelines` is the
> shell — so **the CoC is reachable from the instance by neither route.** It exists
> (`code_of_conduct.md`, 200, 3,013 B, instance-specific) but only inside the GitHub repo.
> **PR-1 is 2 of the 3 documents it names.** The 08-21 row scored it MET on limb B alone and
> filed this as *"minor, P3.4 should confirm"* — confirmed, and **one third of a policy floor is
> not minor**. Whether upstream's `legal` block even accepts a third URL is **Aspasia's**
> question; staged as an ask, never adjudicated here.
>
> **3. PR-2 is unchanged in kind and worse in degree** — the 08-21 row records one red surface
> (`<title>`); there are **six**, and `theme-color` **contradicts** the config rather than
> ignoring it (served `#4641D9`, config `#9d7cd8`). The served `meta description` reads *"Fluxer
> is a free and open source instant messaging and VoIP chat app…"*, so **a link preview of the
> venue says Fluxer** — the one consequence that is not cosmetic. All three occurrences of
> "aDNA" in the served HTML are **inside the embedded bootstrap JSON**: the identity is in the
> bytes, never in the document metadata. That is ⛩ DP7's question, made concrete.
>
> ⇒ **Green count lowered 2 → 1** (claims move DOWN, convention 1). **Sixth and seventh
> instances in this campaign of a verification method that does not reach the thing it verifies
> — and this time both were in an instrument this vault wrote itself.**

| # | Prerequisite | Owner | ~~Status 2026-08-16~~ → ~~Status 2026-08-21~~ → **Status 2026-08-22 (O0 re-probe)** | Verification method (at DP7) |
|---|---|---|---|---|
| PR-1 | **Policy floor live on the instance**: ToS + privacy policy + community guidelines/CoC published at `/terms`, `/privacy`, `/guidelines` (or `legal.*` config URLs) | **Aspasia** (Fluxer.aDNA; config fields proven agentic in her 07-11 dry-run) — content itself may need the counsel lane (19 `#needs-human` items in her register) | ◐ **SPLIT — 2026-08-22, LOWERED from MET.** ~~`legal.terms_url`/`privacy_url` null + all three paths empty (genesis B7) `[D]`~~ ~~✅ **MET 2026-08-21 (rung ②)** — both URLs non-null → `aDNA-Network/community-policies` (**200**)~~ → **config limb ✅ MET**: `app_public.legal.terms_url`/`privacy_url` → `terms.md` (200, **4,675 B**, *"# Terms of Service — aDNA Community"*) + `privacy.md` (200, **3,384 B**) — substantive and instance-specific `[D]`. **On-instance limb ⛔ FAILS**: `/terms`·`/privacy`·`/guidelines` are each **200, 6,295 B, `<title>Fluxer` — the SPA shell**; negative control (a route that cannot exist returns the same 200 shell) + nonce control (`/terms` differs from `/` by the CSP nonce alone) `[D]`. ⛔ **And the CoC is reachable by NEITHER route** — `app_public.legal` carries exactly `['privacy_url','terms_url']`, `/guidelines` is the shell; `code_of_conduct.md` exists (200, 3,013 B) **only in the GitHub repo**. ⇒ **2 of the 3 documents this row names.** The 08-21 "minor, P3.4 should confirm" is confirmed and is **not minor**. Interim operator floor; counsel review deferred to their M8 | Unauthenticated GET on the three paths → substantive documents (not SPA shell); config `legal.*` non-null |
| PR-2 | **Minimal aDNA branding**: instance title/meta/manifest identify it as the aDNA community (not stock "Fluxer") | **Aspasia** (rebrand demonstrated agentically in the dry-run) | ◐ **OWNER-GREEN, METHOD-RED — ⛩ DP7 must adjudicate.** ⬇ **Re-probed 2026-08-22: unchanged in kind, WORSE IN DEGREE — six red surfaces, not one.** `<title>` `Fluxer` · `meta description` *"Fluxer is a free and open source instant messaging and VoIP chat app…"* · `meta theme-color` **`#4641D9`**, which **contradicts** the config's `#9d7cd8` rather than ignoring it · `manifest.json` `name`/`short_name` `Fluxer` + `theme_color` `#4641D9` · stock favicon/PWA icons at `/web/*` · `og:title` **absent** `[D]`. **All three occurrences of "aDNA" in the served HTML are inside the embedded `__FLUXER_BOOTSTRAP__` JSON** — the identity is in the bytes, never in the document metadata. ⇒ **A link preview of the venue reads "Fluxer — a free and open source instant messaging and VoIP chat app"** — the one consequence that is not cosmetic, and the concrete form of DP7's question. Config `[D]`: `product_name` **"aDNA Community"**, `theme_color` **`#9d7cd8`**, self-hosted icon — all ✅. Served HTML `[D]`: ⛔ **this row's stated method fails**. Aspasia disclosed it unprompted: baked into upstream's app-proxy binary, does not read instance config, deeper skinning = a fork their ADR-000 forbids. **An upstream ceiling, not work left undone** — but the method as written does not pass, and only a human decides whether the method or the prerequisite is the thing that is wrong | Unauthenticated GET `/` → title/meta/manifest carry aDNA identity |
| PR-3 | **Inside-aliveness confirmation**: someone with access attests the instance is seeded, moderated, and answerable (not an empty shell) — outside probes cannot see past the auth wall | **Operator** (or Aspasia with operator co-sign) | ✅ **MET — CLEARED WITH EVIDENCE 2026-08-20** `[R]`. ~~UNKNOWN `[A]` — unverifiable from outside by design~~ → inside read-only recon, operator-GO'd: **4 guilds · 23 users · 49 channels (+51 private) · 264 messages · same-day activity · 2 invites**. Artifact: `Fluxer.aDNA` `what/context/fluxer/recon_live_instance_20260820` | A dated operator/Aspasia attestation note (channels seeded · first responders named · registration flow tested end-to-end) |

## Related record state

- **Reconciliation memo**: DELIVERED into `Fluxer.aDNA/who/coordination/` 2026-08-16 17:11 `[D python mtime listing]` (Gate C operator GO). ~~`ack_required: true` — **no ack yet** (~1 h old; none expected this fast).~~ → ✅ **ACKED 2026-08-21** (authored 08-20): `coord_2026_08_20_aspasia_to_rosetta_reconciliation_truth_note.md`, all ten §6 questions answered, `ack_required: false` — nothing returns to them on a clock.
- **Fluxer STATE**: ~~still says "Nothing is deployed" — unreconciled until Aspasia's lane runs. Interim truth for campaign use = the genesis assessment (`evidence/flux/flux_assessment_draft.md`) + aDNALabs STATE L188–190 `[R]`.~~ → ✅ **RECONCILED 2026-08-20** `[R]` — Fluxer STATE records the live instance (commit `88bbca2`+), *"Nothing is deployed"* is gone, campaign amended v1.3 (M6 install→adopt + a remediation ladder whose exit criteria **are** this register's prerequisites — our ask 3 accepted as their own gate line). **This memo, or their host record, is the citable interim truth note.** ⭐ This was the mission's whole reason for existing — *"no public community copy is written anywhere until this record is true"* — and it is now true.
- **Deploy-config drifts** ~~to resolve in Aspasia's answer~~ → **answered, and two of three are still open as rulings rather than facts** `[R]`: registration posture (`mode: "approval"` vs closed-plan) and captcha (`provider: "none"`) are both treated as **drift until ruled**, and the ruling is their **rung ①** — our briefing↔observation discrepancy flag was confirmed correct. Host identity: **D-1 RULED** (ADR-002 Amendment 1 — "Mahdi's metal" *is* the fluxer.host partner path from the 07-11 pivot; live topology accepted, CAX21 → fallback). **D-2**: never ruled, now formally requested of Venus. **D-3** (harvest): never ruled; **interim = OFF** until `#needs-human` legal rules, precisely because real data is persisting ahead of the ruling.
- **ADR-054 sufficiency check** `[D]`: the stub already carries the integration model (prerequisites → honest-state link from `/community` only → first-class at federation GA) + the copy law. Sufficient for DP7 as written; only the GO/NO-GO evidence is pending. No edit needed this mission.
- **Constraint reminders binding all future copy**: aDNALabs ADR-025 (human-only until federation GA) · Fluxer SO#8 (no syndication; agents disclosed) — both quoted in the delivered memo.

## O3 escalation (posted in the wave wrap-up) — ✅ RESOLVED

~~Delivery is confirmed but the ack path depends on when the operator next runs Aspasia's lane. Options for the operator: (a) run a Fluxer.aDNA session soon to intake the memo + reconcile STATE (unblocks PR-1/PR-2 work); (b) wait — P3.4 is Decade-2 and nothing upstream blocks on it; (c) answer PR-3 directly whenever convenient (a one-paragraph attestation, or a "not seeded yet" which simply keeps the fallback state).~~ **Recommendation was (b) or (c)** — *"no urgency; the campaign's fallback is honest by design."*

**Outcome 2026-08-21: (a) happened, and it delivered (c) as a by-product.** The operator ran Aspasia's lane on 08-20; the STATE reconciliation *and* the PR-3 attestation both arrived in one memo, with evidence stronger than the one-paragraph note option (c) had asked for. **The recommendation to wait was correct and cost nothing** — recorded because the honest-fallback posture is what made waiting safe, and a campaign that only logs its urgent calls learns the wrong lesson.

## Trigger model — POLL → PUSH (changed 2026-08-21)

Aspasia: *"we will signal when the three prerequisites are green rather than ask you to poll."*

⚠ **A push trigger whose transport is a directory nobody watches is a poll with extra steps.** Every
memo in this exchange — now **7 in 4 days** — arrived **untracked**, visible only to
`git ls-files --others --exclude-standard who/coordination/`. `git status` habits do not show them and
a context clear loses them. **P3.4's O0 therefore re-probes this register live regardless of whether a
signal was noticed**, and the untracked sweep runs at every session open *and* close. Concrete instance
behind [[idea_upstream_coordination_dropbox_doctrine]]'s discovery clause.
