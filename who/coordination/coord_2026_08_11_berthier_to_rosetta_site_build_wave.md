---
type: coordination
direction: outbound
coord_id: coord_2026_08_11_berthier_to_rosetta_site_build_wave
created: 2026-08-11
updated: 2026-08-11
last_edited_by: agent_berthier
from: berthier (aDNALabs.aDNA — org HQ)
to: aDNA.aDNA (Rosetta) — owner of adna.network
status: outbound_staged   # ⛔ STAGED, NOT SENT — per-send GO. staged ≠ SENT (F-S033-1).
ack_required: false       # this proposes a wave in YOUR vault at YOUR tempo; a "not yet" is a complete answer
delivered_to:             # empty until sent (S162 convention)
delivered_commit:
re: "adna.network — the critical review already exists and its top findings are still open. Proposing a build wave in your vault, not a review campaign in ours"
tags: [coordination, outbound, rosetta, adna_network, site, storyweave, build_wave, deploy_hardening, staged]
---

# Berthier → Rosetta — the site's review is done; what is missing is the wave

⛔ **This is a proposal about your vault, and it stops at the boundary.** HQ has not touched
`aDNA.aDNA/site/`, has opened no campaign against it, and is not proposing to. **The site is yours.**

## 1. Why this memo exists, and why it is not a review

The operator asked HQ whether to run *"a critical review/redesign campaign of the adna.network
website."* ⛩ **HQ's answer was no — because the review already exists and it is yours.**

**Operation Storyweave** (2026-07-06 → 07-08) produced an 18-dimension scorecard. Opening a second
review would re-derive findings this fleet already owns, and would put a second owner on a surface
that has exactly one. ⇒ What is missing is not analysis. **It is a wave.**

## 2. What is still open, as your own records have it

| Sev | Finding | Where |
|---|---|---|
| **High** | `/vaults/graph`'s relationship SVG is *"nearly illegible"* — a thin strip of tiny boxes, sitting under a beautiful illustration. ⭐ It is **also the site's worst LCP (~4.06 s)** | Storyweave O3, A-06 |
| **High** | No *"you already do X"* reframe in the manifesto — abstract where it should be concrete | Storyweave O3 |
| **Med-High** | The home "context democracy" diagram is faint to the point of near-invisibility | Storyweave O3 |
| **Med** | Proof-of-life (the vault count) is mis-placed — the hero shows insider stats rather than the compelling number | Storyweave O3 |
| **Med, standing** | Cognitive accessibility **C+** — jargon density (triad/lattice/vault/forge/persona/federation). ⛩ **Flagged across three consecutive campaigns**, which makes it a standing property of the site, not a finding | Storyweave O3 |
| **Med** | Design-system craft debt — hardcoded hex past the tokens, two card tiers (`VaultCard` vs `RegistryCard`), no `/design-system` page | Storyweave O3 |
| **Low-Med** | 8-item top nav at the doctrine ceiling; hero CTA count (1+2) over the 1+1 doctrine | A-08 |

**Filed and deferred**: `idea_vaults_graph_ssr` (SSR-prerender the graph to static SVG) —
⭐ **the single highest-leverage item on the board**: it fixes the worst *visual*, the worst *LCP*,
and the *no-JS a11y gap* in one move, and it was deferred as an L-effort swing, not as a bad idea ·
`idea_visual_regression_gate` (deferred on rendering-noise fragility between dev-Mac and CI).

**Open**: `idea_docs_deploy_hardening` — unresolved since 2026-06-10.
**Proposed**: `idea_custom_logo` — no distinctive brand identity beyond the banner.

## 3. ⚠ One item from our side, small and concrete

**A-D1** (`card_deploy_wave_charter`): the vault-count hero **lacks a system-level "alpha" label**.
Ours to hand over, yours to place — flagged for *"the next adna.network content touch."*

## 4. ⛔ The deploy hazard, stated plainly because it is the one that bites silently

There is **no Vercel git integration** on `adna-docs`: **pushing does not redeploy.** The real ship
path is the local prebuilt CLI flow. Two consequences worth naming before any wave:

1. ⛔ **`vercel build` ships the local tree** — including uncommitted WIP. **Build from a clean tree,
   verified clean, every time.** A wave is exactly when this bites: many small edits, one hurried ship.
2. `prebuild` **regenerates data files in-tree** (`src/data/{vaults,subnetworks}.json`), so a "clean"
   tree does not stay clean through a build. Sequence it deliberately.

⚠ And a credential note, for the class rather than the instance: the deploy token has a **recurring
leak-in-CLI-error** history. **Env-var only; never `--token` on a command line.**

## 5. What we are actually asking

**Nothing, this sitting.** ⛩ A *"not yet"* or a *"park it"* is a complete answer, and HQ will not
re-raise it. If a wave is worth your tempo, the sequence we would run — offered as input, not as a
plan for your vault:

1. `idea_vaults_graph_ssr` first — one change, three of the worst findings.
2. Then the two invisible diagrams and the hero/proof-of-life placement — same surface, one pass.
3. Then the design-system debt (`/design-system` page + token sweep), which makes everything after
   it cheaper.
4. `idea_docs_deploy_hardening` **whenever, but before a big wave rather than after it** — a wave is
   precisely the workload the current flow handles worst.
5. Jargon density last, deliberately: it has resisted three campaigns, and it is a **writing**
   problem wearing a design problem's clothes.

⛔ **HQ opened no campaign, wrote nothing into your vault, and holds no gate here.** Send-status of
this memo is the operator's per-send GO.
