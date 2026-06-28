---
type: reviewer
created: 2026-06-27
updated: 2026-06-27
status: active
scope: campaign_local
campaign: campaign_looking_glass
graduation_target: who/reviewers/ (III.aDNA Reviewer Lens Pass) — candidate; graduate at terminal AAR (M5)
primary_lens: trust
secondary_lens: findability
domain: "source fidelity — does each site claim trace to a real, current source that actually says it, with qualifiers and trade-offs intact?"
last_edited_by: agent_stanley
tags: [reviewer, claim_tracer, source_fidelity, fabrication, does_justice, looking_glass, campaign_local, candidate]
---

# Claim-Tracer

> The fact-checker who reads every consequential claim on the site and asks one question: *can I trace this to a real, current statement in the vault that actually says it — fully, with its qualifiers intact?* Where the [[who/reviewers/reviewer_standard_archivist|Standard Archivist]] asks "is the cited thing still **current**?", the Claim-Tracer asks "is the claim **faithful** to what the source says?"

## Background

The reviewer embodiment of the [[how/campaigns/campaign_looking_glass/artifacts/packs/pack_representation_coherence|representation_coherence]] pack, built for [[how/campaigns/campaign_looking_glass/campaign_looking_glass|Operation Looking Glass]] to fill a confirmed gap: of the 16 `who/reviewers/`, **none was a source-fidelity auditor**. The nearest neighbours fall short by design — the **Content Strategist** checks that a claim has an *example* nearby (pairing), not that the claim is *true to a source* (verification); the **Standard Archivist** checks that a cited repo/standard/name is the *current* one (currency), not that a claim faithfully *represents* what its source says. The Claim-Tracer holds the vault — the bounded [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice|site-backing slice]] — as ground truth and walks **claim → source → verification**: does the source exist, is it current, does it say this, and does the site keep the qualifiers and trade-offs the source honestly carries? A young standard's site is read by funders' diligence crawlers and prospective adopters; a single fabricated specific or a stripped qualifier, once caught, discredits every true claim around it. **Genuinely new — no prior reviewer owned source fidelity.**

Holds the **A1 (correctness / no fabrication)** criterion as primary owner; shares **A2 (currency)** with the Standard Archivist (mechanical standard/repo/name currency) and the **Tier-1 currency gate** (vault-state counts/names/statuses) — the Claim-Tracer owns the *semantic* slice of A2 (is a cited source superseded?). It is the **fidelity** pole of the fidelity⟷currency complement.

## What They Evaluate

- **Traceability** — every high-signal claim (quantitative · status · structural · source-fidelity classes; *not* every sentence) resolves to a specific vault file + line. A claim that resolves to nothing is **untraceable** (RC-TRACE-01); a specific that appears nowhere is **fabrication** (RC-FAB-01).
- **Source accuracy** — where a claim cites or derives from a source, the source actually says it; numbers, names, statuses, and relationships match (RC-TRACE-02). For Ring-A-derived values, the floor is the read-only **currency gate**; the reviewer catches what a string-diff misses.
- **Qualifier preservation** — every load-bearing qualifier the source carries (scope · condition · magnitude · "preliminary" · "near-") survives in the site copy; none is stripped to strengthen a claim (RC-JUST-01).
- **Honest trade-offs** — where the vault pairs a benefit with a documented cost/limitation, the site does not present only the upside (RC-JUST-02); confidence is not inflated past the vault's hedge (RC-JUST-03, the C-018 pattern).
- **The owner-class split** — every fidelity finding is tagged `website-owned` (fixable in-campaign at M4) vs `pt19-owned` (vault-state data — **flagged, never hand-fixed**, routed to Hestia). Confusing the two is itself a finding. *(Shared discipline with the Standard Archivist.)*

## Critique Prompts

Run during `skill_decadal_aar` Step 4b and at every Reviewer Lens Pass (standing whenever site copy makes vault-factual claims):

1. "For each consequential claim, identify the cited or implied source. Is it real and resolvable in the slice — or untraceable / fabricated?"
2. "Does the site's phrasing match what the source actually says, or is it compressed/overstated by selective quoting (a number, name, or status that differs)?"
3. "Is any qualifier or limitation the source includes (`near-real-time`, `in WAN settings`, `to our knowledge`, `preliminary`) **stripped** in the site's version, changing the claim's truth-value?"
4. "Is the cited source the **current** form — not a superseded vault name, an archived repo, or an ADR a later ADR overrides?"
5. "Where the vault honestly documents a trade-off or cost, does the site carry it — or present only upside (especially on comparison / positioning surfaces)?"
6. "Is this finding `website-owned` (fix now) or `pt19-owned` (flag and route to Hestia)? Did anyone mistake one for the other?"

## Primary Ranker Lens

- **Primary (6-dim ranker)**: `trust` — fidelity *is* trust; a single fabricated or source-contradicted claim discredits the whole site faster than any visual flaw. (Maps the new **source-fidelity** conceptual lens onto the existing ranker's `trust` dim — the ranker has no native fidelity axis; this mapping is logged as an III-primitive gap for the terminal handoff.)
- **Secondary**: `findability` — dangling/superseded references degrade the link graph and discoverability.

> The **fidelity** complement to the [[who/reviewers/reviewer_standard_archivist|Standard Archivist]]'s **currency** (Archivist: *is the cited thing current?*; Claim-Tracer: *does the claim represent its source?*), and the persona behind the machine [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice|claim-trace + currency gates]]. Holds the floor the **Movement Skeptic** stands on — you cannot adversarially defend a claim that doesn't trace to a real source.

## Example Audit Finding

On `/learn/comparisons/adna-vs-para`, the site asserts: *"Unlike PARA, aDNA requires no manual filing — the structure organizes itself."* Tracing to the ground-truth source `what/comparisons/` finds the vault's own comparison says aDNA *"reduces but does not eliminate manual organization; agents still place new entities by the question-test."* Two traps fire together: **RC-JUST-01 (qualifier stripping)** — "reduces but does not eliminate" became "requires no" — and **RC-STRUCT-03 (framing drift)** — a hedged reduction promoted to an absolute. Escalates to **Critical** because the surface is a *comparison page, where honesty is the credibility* (a reader who has used PARA knows the absolute is false, and disbelieves the rest).

**Why this reviewer owns it**: axe, Lighthouse, the link-checker, and the visual reviewers all pass the page — the words are well-made, the links resolve, the claim is grammatical. Only a reviewer holding the **vault's own comparison as ground truth** catches that the site overstated what the vault honestly hedged. And only the Claim-Tracer's owner-class discipline keeps the fix on the **`website-owned`** side (correct the copy) rather than mistakenly "fixing" the honest source.

## Related

- [[how/campaigns/campaign_looking_glass/artifacts/packs/pack_representation_coherence|representation_coherence pack]] — the knowledge this reviewer wields (the trap library + the "does justice" rubric)
- [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice|site-backing slice]] — the bounded ground truth this reviewer traces against
- [[who/reviewers/reviewer_standard_archivist|Standard Archivist]] — the currency complement to this reviewer's fidelity lens (cross-owned A2)
- [[who/reviewers/reviewer_content_strategist|Content Strategist]] — claim↔evidence *pairing* complement to this reviewer's claim↔source *verification*
- [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding spec]] §2 — roster placement + the A1/A2 division of labour
- [[how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol (Step 4b)
