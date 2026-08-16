---
type: coordination
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_synthetic_coldreader
tags: [coldread, synthetic, haussmann, evidence, persona_clinician_researcher]
synthetic: true
method: "SYNTHETIC agent cold-read (pre-screen) — an AI agent simulating a first-time visitor persona; NOT a real human reader. Live pages fetched via curl 2026-08-16; no local vault files consulted."
persona: "Rare-disease clinician-researcher (MD/PhD) — runs a small research program, cares about patient data governance, comfortable with computers but not a developer, has heard 'AI agents' in webinars"
date_of_visit: 2026-08-16
pages_visited:
  - "https://adna.network/ (homepage)"
  - "https://adna.network/commons/"
  - "https://adna.network/vaults/RareArchive.aDNA/"
  - "https://adna.network/about"
  - "https://adna.network/compliance/"
---

# SYNTHETIC Cold-Read — Rare-Disease Clinician-Researcher

> **⚠ SYNTHETIC PRE-SCREEN.** This is an AI-simulated cold read, not a real visitor. It is a
> cheap early-warning instrument for the Haussmann evidence base — treat findings as hypotheses
> to confirm with real human cold-readers, never as user evidence on its own.

**Click path (~5 minutes):** Homepage → noticed the public-good strip ("Wilhelm AI for the
Undiagnosed · Rare Archive") → **Commons** → **RareArchive vault page** → **About** ("Who's
behind aDNA" — trust check) → **Compliance** (patient-data-governance reflex). All quotes below
are verbatim from the live pages as fetched 2026-08-16.

---

## 1. What is this? (one sentence)

An open-source filing convention — a prescribed folder structure with governance files — for
organizing a project's notes, decisions, and documentation so AI agents (and humans) can
navigate them, plus a public "network" of projects that use it, several of which are
rare-disease and public-good efforts.

## 2. Who is it for? (one sentence)

People who already live in git, Markdown, and Claude-style AI agents — developers and
technically fluent teams who want their AI assistant to stop relearning the project every
session; I'm adjacent to that audience, not in it.

## 3. What is it NOT? (one sentence)

It is not a medical product, not a patient-data platform, and not a hosted service you sign
into — and despite the name, it has nothing to do with ancient DNA or with genomic data
itself; "DNA" is a metaphor.

## 4. Would you try it, or forward it? To whom, and why?

Forward, not try. The front door is literally a terminal command — `git clone … && claude` —
which is past what I'll attempt between clinics. I would forward it to two people: **my
research software engineer / data manager**, to evaluate whether this folder-and-governance
discipline would help our lab's chaotic project documentation now that we're experimenting
with AI assistants; and **a colleague in the undiagnosed-disease community**, because the
Wilhelm Foundation (Helene & Mikk Cederroth — real, recognizable names in that world) is
named as anchor partner and I'd genuinely want to know what "Rare Archive" is becoming.

## 5. What confused you? (exact phrases)

- **"a context democracy"** — headline concept, never landed for me.
- **"built on the Lattice Protocol — the coordination layer, opening progressively"** — what
  is a coordination layer, and what does "opening progressively" mean?
- **"Federate a wrapper"** and **"a wrapper directory with a `federation_ref` block, the same
  pattern every forge consumer uses"** — I don't know what a forge consumer is.
- **"16 Entity Types"** and **"3 Conformance Levels"** — first-screen counters that mean
  nothing to a newcomer.
- **"tended by Rosetta"** / **"tended by Mnemosyne"** — I assumed these were people until the
  About page told me "These are AI personas." Honest once found, but three pages late.
- **"Modules, datasets, and lattices compose into workflows"** — three undefined nouns.
- **"Renamed from TaskForge.aDNA (Production Tidy pt08"** — internal shorthand leaking onto a
  public registry card, truncated mid-parenthesis.
- **"a node is a Home.aDNA plus the vaults that live on it"** — circular to an outsider.
- **"org vault pending"** — status labels with no legend.
- The name itself: in my field **aDNA means ancient DNA**; between that and "World Genome
  Academy" I briefly expected paleogenomics or a genomics data commons.

## 6. Trust check

**Credible (unusually so, for someone burned by health-tech):** The About page is the most
honest project page I've read in years — "aDNA is early — and honest about it"; "stewarded
today by one person … not a council we haven't formed"; the agents disclosed plainly as "AI
personas … not a stand-in for people and not a claim of a team we don't have." No diagnostic
claims, no "revolutionizing healthcare," no stock photos of doctors. MIT license, everything
inspectable on GitHub. A stated local-by-default posture: "everything stays local by default.
Connecting is opt-in per vault." The Commons even refuses vanity metrics ("What you won't
find here: contributor counts, stars, or follower numbers") and admits "Profiles, follows,
feeds … are not built yet." That restraint reads as integrity.

**Would verify before citing to colleagues:**
- **Rare Archive is the thing that drew me in, and its page is a stub**: "Status pending",
  "Last synced 2026-05-24" (~3 months stale at my visit), a one-line description, one
  relationship. I'd check that `Wilhelm-Foundation/rare-archive` exists on GitHub and shows
  real activity before mentioning it in a talk.
- **"74 Vaults"** reads as network scale, but cards like "per-node operational governance for
  Mac/stanley; the operator's daily-driver" suggest many vaults are one person's own machine.
  How many independent operators exist?
- **"Stanley — Founding Architect"** — first name only; no surname, credentials, or
  affiliation anywhere on my path.
- **"anchor partner" (Wilhelm Foundation)** — formal agreement or aspiration? I'd confirm
  with the Foundation before repeating it.
- **Health-data governance is absent**: across all five pages the words HIPAA, PHI, patient,
  IRB, GDPR, de-identification never appear (verified by search of the fetched pages). The
  "Compliance" page is genuinely interesting — AI-session audit trails, "EU AI Act …
  record-keeping, human oversight, and traceability" — but it is not the compliance a
  clinician means, and I clicked it expecting the other thing.

**Named humans/institutions found:** Stanley (first name only); **Helene & Mikk Cederroth /
the Wilhelm Foundation** (real people, real foundation — the strongest trust anchor on the
site); a passing "UCLA Anderson" inside a vault card. No hospitals, no universities as
partners, no named clinicians.

## 7. 30-second test (first screen only)

Header "The aDNA Network," a line about language and DNA being "co-created by everyone before
us," a git command in a black terminal box, and counters ("74 Vaults · 16 Entity Types ·
3 Conformance Levels"). My honest first read: *an open-source developer tool with a manifesto
attached — some GitHub-adjacent standard for organizing files so AI assistants can use them,
wrapped in a genetics metaphor.* For a beat, because of "aDNA," I wondered if it was an
ancient-DNA or genomics data commons. It isn't — and only the sub-headline's "organizing
project knowledge so both humans and AI agents can navigate it" pulled me back.

## 8. Confidence 0-10: explaining this to a hospital IT committee

**3/10.** I could say: open-source, MIT, plain Markdown in git on your own machines, nothing
hosted, AI agents read a prescribed structure — and there's a real audit-trail story (who
wrote what, with what context, reviewed how) that would genuinely interest our compliance
officer. But the committee's first three questions — where does data live, what is the
security model, what touches PHI — I could answer only by inference ("local by default,"
"no account, no waitlist"), and the words HIPAA/PHI appear nowhere. The "network /
federation / commons" vocabulary would make them assume a data-sharing platform, and I could
not confidently rebut that with what the site gave me.

---

*Synthetic pre-screen recorded for campaign_haussmann evidence. Pages fetched live via curl;
raw HTML/text snapshots retained in session scratchpad only.*
