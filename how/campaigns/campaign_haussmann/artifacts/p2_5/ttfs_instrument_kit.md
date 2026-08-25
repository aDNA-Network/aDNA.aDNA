---
type: artifact
artifact_id: ttfs_instrument_kit
title: "TTFS instrument kit — measuring time-to-first-success for any quickstart"
campaign: campaign_haussmann
mission: mission_haussmann_p2_5_onboarding_paths
phase: P2
objective: O1
created: 2026-08-19
updated: 2026-08-19
status: authored_unexercised
last_edited_by: agent_rosetta
owed_to: WebForge.aDNA (A6 — verification module seed)
grounded_in: ["design_zero_install_path §6", "coldread_SYNTHETIC_senior_engineer", "P1.2 ranker-provenance lesson"]
tags: [artifact, haussmann, p2_5, ttfs, instrument, webforge]
---

> **⚠ AUTHORED, NOT YET EXERCISED.** This kit has never been run. It is proven the first time it
> produces a number — P2.6 **O0b**. Until then it is a protocol with no evidence behind it, and any
> vault adopting it should know that. Recording that plainly is the same discipline the kit itself
> demands of its users.

# TTFS instrument kit

**Plain version**: a stopwatch protocol for finding out how long it actually takes a new person to get
your quickstart working — and, just as importantly, where they got stuck. It is deliberately written
so that it can measure *any* product's quickstart, not just this one: you tell it what "success" means
and it measures the time to that.

**Technical version**: a reusable verification module. Success is an **input parameter**, not a
constant. The kit specifies the clock boundaries, the isolation requirements, the friction-log schema,
and — the part most measurement protocols leave out — the reporting rules that stop a single
observation from being quoted forward as a distribution.

## 1 · Why this exists (the failure it is built against)

A quickstart page said "about five minutes." Nobody had ever timed it. The number had been on the page
for months, was quoted in a second place, and could not be traced to a run.

That is not a copywriting problem. It is a **claim with no instrument**, and the honest fix is not
better wording — it is a measurement. The kit exists so the measurement is cheap enough that there is
no excuse.

## 2 · Success is an input

Before the clock starts, the adopting project must supply a **success definition the runner can check
themselves**. Two halves, both required:

- **Structural** — a short list of commands or observations that a runner can execute and see pass.
  These are what stop the clock.
- **Behavioural** — the thing the product actually exists to do, observed. Recorded as a *second,
  later* timestamp; it does not stop the clock.

A success definition the runner cannot verify is an adjective, and a kit that accepted one would be
measuring the time to a feeling.

## 3 · Protocol

1. **Clean machine.** A fresh VM or a fresh user account. Record OS, architecture, and **exactly what
   was already installed**. A run on a machine that already had the prerequisites is a different
   measurement and must be labelled as one — not silently averaged with the others.
2. **Start the clock at the entry URL**, not at the first command. Reading the page is part of the
   time to success, and — in the case that produced this kit — reading the page is where the
   evaluator *refused*. A clock that starts at the first command cannot see the failure that matters
   most, because that failure is someone deciding not to type it.
3. **Stop the clock** at the structural half of the success definition. Timestamp the behavioural
   half separately.
4. **Do not help.** The runner uses only what the product's own surfaces provide. Every question they
   had to answer another way is a **friction entry, not a hint to give them**. The urge to help is the
   single biggest threat to the validity of the run.
5. **Record prerequisite time separately.** Installing a runtime to get the tool is real time an
   evaluator spends. Folding it in — or silently out — is how a "five minute" claim gets manufactured
   in either direction.
6. **Screen-record if the runner consents.** The friction log is reconstructed more honestly from a
   recording than from memory. If they do not consent, say so in the report; do not reconstruct from
   memory and present it as observed.

## 4 · Friction log

One row per stumble. The point of the log is not the total — it is that each row is a specific,
fixable thing.

| # | Timestamp | Where (URL / step) | What they expected | What happened | Recovery | Cost (s) | Severity |
|---|---|---|---|---|---|---|---|

`Severity` uses the adopting project's own scale (here: S1–S4).

**An empty friction log is reported as suspect, not as excellent.** It almost always means the runner
was not naive — they had seen the product before, or they were helped, or they silently solved
something and did not think it counted. A genuinely frictionless first run is possible; it is just
much rarer than an empty log.

## 5 · Reporting rules

**Never report TTFS bare.** Always with its conditions attached:

```
TTFS = N min  (macOS 15.x · prerequisites pre-installed · 1 runner · 2026-08-xx)
```

- **One run is an observation, not a distribution**, and the report must say so in those words. Two
  runs are two observations.
- **Record the instrument with the score, always.** This is the load-bearing rule and it comes from a
  scar: a ranker score of 3.61 was quoted forward three times as fact and was never reproducible,
  because the conditions that produced it were not written down beside it.
- **A failed run is a result.** If the runner never reaches success, the report says so, with the
  friction log, and the number is "did not complete" — not a blank, and not a retry until it works.
- **Publishing the number is a separate decision from measuring it.** The measurement discharges the
  internal claim; whether the marketing surface then says "about N minutes" is an editorial call that
  should look at the friction log too.

## 6 · Adoption notes (WebForge, A6)

Nothing above is aDNA-specific. To adopt: supply a success definition (§2), pick a severity scale, and
run §3. The kit's opinions are only three — clock starts at the entry URL, prerequisites are timed
separately, and an empty friction log is suspect — and each one exists because its absence produced a
specific wrong number.

**Seam**: this is offered as a *verification module seed*, not a finished WebForge pattern. It has no
proving run behind it yet (see the banner). The offer memo is
`who/coordination/coord_2026_08_19_rosetta_to_vitruvius_ttfs_kit.md`.
