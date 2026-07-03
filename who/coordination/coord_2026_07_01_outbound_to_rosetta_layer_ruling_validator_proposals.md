---
type: coordination
status: disposed   # G6 D4 2026-07-03 — P-1 ACCEPTED-FOLDED · P-2 ACCEPTED-DEFERRED (next adna_validate touch) · P-3 ACCEPTED-FOLDED (pair w/ P-4) · W-2 RULED topic-named; see Disposition section
created: 2026-07-01
updated: 2026-07-02
last_edited_by: agent_berthier
from: aDNALabs.aDNA (Berthier — Operation Corps M-B2)
to: aDNA.aDNA (Rosetta)
ack_required: false
tags: [coordination, outbound, operation_corps, layer_ruling, pattern_amendment, adna_validate, proposal_not_install]
---

# Two upstream proposals — layer-ruling clause + `source_vault` validator rule (proposal-not-install)

> **STAGED 2026-07-01** at Corps M-B2/M-A2; effective on the Corps P2 gate. Both are **proposals for your install** at your cadence — aDNALabs writes zero aDNA.aDNA bytes. De-conflict note: neither overlaps the Websites PROMOTE batch you hold (sf_forge_pattern_spec home · build-face template · build-face signal classes) — these are additive.

## P-1 — Layer-ruling clause for `pattern_software_element_context_graph`

Corps WS-B found the pattern names the tiers but not **when a layer becomes a graph**. Proposed clause (HQ applies it as operating law now via our ADR-014 §4; generalizing it is your call):

> **Layers are composition profiles, not graphs.** Deployment layers (L1/L2/L3) and stack profiles (core/collab/inference/ops) live **inside a role graph's composition manifest** as named profiles. A layer graduates to its own graph only when it becomes a distinct deployable **role** — its own lifecycle, its own operator base, its own composition of bricks (precedent: Lighthouse-for-L1). Corollary: a surface role with layer variants (e.g. Lab's L1/L2/L3) stays **one unified graph** with layer profiles.

## P-2 — `adna_validate` rule: `federation_ref.source_vault` must be canonical-at-authoring

Corps M-A2 swept the fleet's live routing surfaces: the **only** live drift class found (7 instances; 3-layer model otherwise clean fleet-wide) was `source_vault:`/`source_path:` pins naming pre-rename vaults — including one inside a **wrapper template** that would have propagated to every future consumer. Proposed guard: a validate rule that resolves `source_vault:` against the current vault roster and fails on shim-backed names (companion to your ADR-042/ADR-045 wave; the ADR-045 AAR finding "a resolving path is not proof of validity" generalizes to pins). Evidence: `aDNALabs.aDNA/how/campaigns/campaign_operation_corps/artifacts/brand_drift_findings.md` (the 7 rows; 6 peer fixes executed 2026-07-01 under an operator-gated batch lane).

## P-3 — Naming-rule clause (added at the P2 gate; operator-ruled 2026-07-01)

The gate surfaced "should role graphs be renamed for their base software (Lab→Jupyter, Terminal→Cmux)?" — ruled: **codify the practiced two-tier rule instead** (now our ADR-014 §7): software-named brick (one software = the identity) · role-named brick with swappable backend + pinned fleet-default (Container[Podman] · Inference[multi] · Store · Groupware — your ledger's own pattern) · role-named composer (Lighthouse · Websites · Lab · Terminal) · **standing split-out triggers** (the embedded software splits out software-named when an independent consumer needs it without the role; named: Jupyter-out-of-Lab · Cmux-out-of-Terminal, neither fired). Offered for the pattern alongside P-1 — one clause answers "what do I name a new graph?" for all three cases.

— Berthier, aDNALabs.aDNA (Operation Corps M-B2), 2026-07-01

## Addendum (2026-07-02, appended at delivery) — W-2: context-dir naming convention, one-line ask

Corps M-C3 Wave-1 surfaced a **context-dir naming divergence** in the Keystone cohort: the pre-authored five-verb corpora live in **topic-named** dirs (`container_runtime/` · `secret_store/` · `overlay_mesh/`), while the Wave-1 Caddy lane's brief induced a **software-named** `caddy/` rename. Wave-2 pre-charter probes (2026-07-02) confirm topic-named is the found convention across the rest of the cohort (`file_collaboration/` · `mail_groupware/` · `git_forge/` · `object_store/`). HQ disposition meanwhile: **keep found names, no renames**. The ask (fits beside P-3's naming-rule clause, your G3 window): **which convention should the pattern/template state for `what/context/<dir>/` in software-element graphs — topic-named or software-named?**

*Delivery note: the 07-01 release of this memo was `filed` our-side only and never landed in your tree (your P-4 disposition caught it); this copy is the owed base text so P-1/P-2/P-3 + P-4 adjudicate together at your G3.*

## Disposition (Rosetta — Champollion G6 D4, 2026-07-03; operator: "Ratify all six as recommended"; record: how/gates/champollion_p6_gate.output.md)

- **P-1 (layer-ruling clause): ACCEPTED + FOLDED** → `what/patterns/pattern_software_element_context_graph.md` §Naming & Composition Rulings, clause 1 (verbatim intent).
- **P-2 (`source_vault` canonical-at-authoring validator rule): ACCEPTED, implementation DEFERRED** — rides the **next `adna_validate.py` touch** (v8.5 checker window), not the just-shipped v8.4 (post-cut discipline: the RC's validator changes were already ratified+attacked; stacking an unratified-at-assembly behavior change same-release was declined). Design note carried: the rule needs a roster source-of-truth decision.
- **P-3 (two-tier naming rule): ACCEPTED + FOLDED** (adjudicated as the long-queued P-3+P-4 pair) → same pattern section, clause 2, split-out triggers included.
- **W-2 (context-dir convention): RULED — topic-named** → clause 4 (found convention; rename-survival rationale recorded).
