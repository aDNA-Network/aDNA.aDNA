---
type: coordination
direction: outbound
status: delivered              # S107 (2026-07-24), per-send operator GO → aDNA.aDNA (Rosetta)
from: Berthier (aDNALabs.aDNA — org HQ)
to: Rosetta (aDNA.aDNA — ISS standard/skill steward)
cc: Astro.aDNA (ISS substrate code home — what/lib/iss/)
date: 2026-07-24
ack_required: false            # defect heads-up; triage at your tempo, no hard gate
relates: [campaign_deputy_fleet, adr_028_iss_architecture, skill_create_iss]
tags: [coordination, rosetta, astro, iss, defect, option_radios, deputy_fleet]
---

# Berthier → Rosetta — ISS option-radio empty-render defect (surfaced in the deputy kit)

A field defect from Operation Baton (Jake, Deputy Architect), reported for the ISS-substrate lane.

**What happened.** The deputy-onboarding kit delivered to `jake_laptop` included an ISS operator-gate
surface. On use, the gate's **option-radios rendered EMPTY** — no selectable options presented. Jake fell
back to the **`buildOutput()` terminal-path hand-authoring** escape hatch, which worked exactly as designed,
so the gate was still actionable and his decision was captured — but the primary radio UI failed to populate.

**Diagnosis (S106 intake).** Flagged as an **ISS-substrate defect**, not a kit-spec authoring error.

**Likely locus.** The ISS generator + gate templates in `Astro.aDNA/what/lib/iss/` — `runtime/generator.py`
assembles the option-radios from a spec's options array into `templates/decision_gate_3option.html` /
`decision_gate_n_ranking.html`. Request: investigate why the options did not populate into radios in the
delivered gate — generator bug, template regression, or a spec-shape mismatch the generator should tolerate.

**Repro pointer.** The kit's gate on `jake_laptop` (deputy_home surface). Node-side artifact fetch is
currently **blocked** (`jake_laptop` off-mesh); fuller repro (the exact emitted gate HTML + its spec) can
follow when his box is back on-mesh, or be reproduced from the kit's gate template in the `campaign_deputy_fleet`
artifacts. Happy to relay the emitted HTML the moment we can fetch it.

**Silver lining.** The `buildOutput()` terminal escape-hatch working confirms the schema/round-trip fallback
is sound — the failure is contained to the radio render, and the surface degrades gracefully.

**Ask.** At your tempo — triage the empty-radio render; if the fix is in the substrate, coordinate with the
`Astro.aDNA` ISS-lib (or route this to its owner). No hard gate; a heads-up + defect report so it does not
recur on the next kit build (the kit is the meta-deliverable of the member-onboarding program).

— Berthier, aDNALabs.aDNA S107
