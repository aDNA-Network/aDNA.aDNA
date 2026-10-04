---
type: backlog_idea
status: proposed
priority: medium
created: 2026-10-04
updated: 2026-10-04
last_edited_by: agent_rosetta
filed_from: what/patterns/pattern_channel_proof.md (accepted — operator §7.7 2026-10-03 PDT, sitting (h)); origin Network.aDNA/who/coordination/coord_2026_08_03_venus_to_rosetta_upstream_four_operational_patterns.md (Venus, pattern #4)
filing_authorization: "the pattern's own graduation clause — 'template fold filed on signature, not before'; signature taken 2026-10-03 PDT (plan-time AskUserQuestion, session_stanley_20261004_045208_garnier_h_sync_vaults_send_channel_proof_primer_sweep)"
upstream_target: aDNA-Network/aDNA
source_pattern: what/patterns/pattern_channel_proof.md (status accepted, 4 rules, n=3 instances across 2 vaults)
disposition: "v8.13 lane — pattern-to-template — ⛩ follows from the 2026-10-04 signature; status stays proposed until the release gate executes it; this vault's copy is canonical from signature, Network's copy re-points here (notice sent the same sitting)"
companion: how/backlog/idea_upstream_skill_mesh_probe_discipline.md (the PROBE half; this is the PROOF half — ship together)
tags: [backlog, upstream, pattern, channel_proof, consuming_side, credentials, coordination, v8_13]
---

# Idea: `pattern_channel_proof` ships in the base template

## Problem

Every vault that provisions something another party consumes — a credential grant, a drop-box, a mesh route, a deploy alias — has the same blind spot: the provisioning side holds every "done" signal and none of the "usable" ones. Three incidents in two vaults (Network's F-S339-01 drop-box kit; this vault's five-week wrong-allowlist pre-push hook; HAUSSMANN convention 16's deploy-is-a-timestamp) paid for the same theorem. The standard's practice layer has no page that states it, so each vault re-derives it after a close has already called the channel live.

## Proposed shape

Fold `what/patterns/pattern_channel_proof.md` into the template's pattern set **verbatim in substance**: the four rules (the consuming side proves · name the state `provisioned`/`proven` · scope is a wall · the proof is as wide as the probe), the plain-language opener, the anti-pattern list. The three `instances:` move to a *provenance* section (they are evidence, not rules). Cross-link from `doctrine_credential_handling` §2.1/§4 (the grant form) and from the coordination inbox README (a memo with `status: sent` is provisioned, not proven — [[../../what/patterns/pattern_decision_queue|pattern_decision_queue]]'s *decided, undelivered* sub-state).

**Ship with** [[idea_upstream_skill_mesh_probe_discipline]] — the skill is how to *ask* whether a channel is up; the pattern is who gets to *say* it works. One without the other is half a rule.

## Acceptance (at the v8.13 gate)

- Template carries the pattern at `what/patterns/`; its `status: active` there; frontmatter `graduation:` records n=3 / 2 vaults and the 2026-10-04 signature.
- `adna_validate --governance` zero drift (pattern count surfaces, if any, re-derived not typed).
- Network.aDNA's copy carries a one-line pointer to the template copy as canonical (their act, on notice).

## Record

- 2026-10-04 — filed on signature (Standing Rule: fold on §7.7, never before). Notice to Venus delivered the same sitting.
