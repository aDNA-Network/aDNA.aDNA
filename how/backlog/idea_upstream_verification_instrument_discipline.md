---
type: backlog_idea
status: proposed
priority: high
created: 2026-08-21
updated: 2026-08-21
last_edited_by: agent_rosetta
filed_from: aDNA.aDNA/how/campaigns/campaign_haussmann/missions/mission_haussmann_p3_1_md_twins.md (AAR)
filing_authorization: skill_upstream_contribution
filing_approved_by: operator (in-session, 2026-08-21)
upstream_target: aDNA-Network/aDNA
relates: [coord_2026_08_20_hopper_to_rosetta_standard_bearer_gate_is_a_noop, adr_011_secret_scanning]
tags: [backlog, upstream, verification, gates, instrument_discipline, red_test, vacuous_pass, doctrine]
---

# A verification instrument is not believed until it has failed, and must assert it reached its target

## The gap

The standard has a great deal to say about *having* gates and checks. It has nothing to say about
**whether a given instrument's green means anything**. Two failure modes recur, and neither is visible
from a passing run — which is the whole problem.

1. **The instrument has never been demonstrated to fail.** A check nobody has watched go red may be
   asserting nothing at all.
2. **The instrument never reached what it claims to check.** It measured something else and reported
   success about it.

## Evidence

**(a) An instrument that reported OK about the wrong host.** `check_live_headers.mjs` verified security
headers after every deploy of `adna.network`, and printed `live-headers OK — no drift` for months. It
fetches with `redirect: 'follow'` and asserts header **names** are present. The URL it was pointed at —
the per-deployment `*.vercel.app` address — is gated by Vercel Deployment Protection on **production as
well as preview**, so every request 302'd to `vercel.com/sso-api`, whose login page sets those same four
header names. **It was reading Vercel's CSP and reporting it as ours.** It would have passed for a
deployment with no headers at all, and had never once verified the live site since the mission that
built it. Found only because a hardened version refused the redirect and a deploy step failed on a
deploy that had in fact succeeded.

**(b) A gate that passed against a site without the feature.** In the same campaign, a live probe
returned PASS on two assertions run against a surface that did not have the thing being asserted. The
mission AAR's formulation: *a red run is the only moment an assertion's vacuous branch is exercised.*

**(c) A hook that reports clean having scanned nothing.** A pre-push secret-scanning hook invoked
`gitleaks` against the **staged** diff, which is empty at push time, and printed `clean ✓`. A peer vault
(`Git.aDNA`) censused the fleet and found **14 vaults** in this state — an instrument that appears
installed, is trusted, and gates nothing.

(a) and (c) are the same defect wearing different clothes: **the instrument did not reach the artifact.**
(b) is the other half: **the instrument was never shown to be capable of failing.**

## Proposal

Two clauses, both cheap, both stated as doctrine rather than tooling:

1. **Demonstrated-to-fail.** An instrument whose green anyone acts on is not trusted until it has been
   made to go red on purpose. Mutate the thing it asserts, watch it fail, restore, watch it pass. Record
   that this was done.
2. **Reached-its-target.** An instrument must assert it measured the thing it names — a successful
   status, the expected origin/host, a non-empty scan scope — and must say **CANNOT VERIFY** rather than
   pass when it did not. An honest gap beats a false green.

A useful corollary from (a): **presence is not conformance.** Checking that a field/header/file *exists*
is weaker than checking its *value*, and the weak form is what silently passed against the wrong host.

## Relationship to `Git.aDNA` ADR-011 A4 §6 — this is the same clause

Grace Hopper's memo of 2026-08-20 flags two ADR-011 A4 clauses as *"standard-shaped rather than
Git.aDNA-shaped"* and explicitly leaves the call to this vault. One of them is:

> **§6 — no conformance instrument is trusted until demonstrated to fail.** The census ships sabotage
> fixtures and must fail each before its output counts. It earned its keep immediately: the fixtures
> found an **unreachable branch in the census itself**.

That is clause 1 above, arrived at independently from a different failure. Their §3 (hook **resolution
order** — `core.hooksPath` → `rev-parse --git-path` → `realpath` → adjudicate, because a vault reading
`.git/hooks/pre-push` directly can be wrong about which hook git actually runs) is the same shape as
clause 2: *establish that you are looking at the real target before reporting on it.*

**Filing this is the answer to Hopper's §4** — the clauses are standard-shaped, and this is the vehicle.
Their §2 (the missing `.adna/` pre-push gate) is a separate, larger question and is not folded in here.

## Adopted locally already

`campaign_haussmann/CLAUDE.md` convention 14, and applied in the mission that found it: 13 assertions
red-proven by mutation, of which **three of the author's own new assertions turned out to be wrong**.
