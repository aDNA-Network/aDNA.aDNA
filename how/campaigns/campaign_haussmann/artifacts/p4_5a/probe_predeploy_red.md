# P4.5a live probe — PRE-DEPLOY run against production (red-proof)

Run: 2026-08-20T19:57:53Z against https://adna.network, BEFORE the P4.5a deploy.
Purpose: prove the probe discriminates. Every FAIL below is a P4.5a deliverable; the 12 PASSes
are assertions that already held, which is what makes this a red-PROOF rather than a probe that
merely fails at everything. Post-deploy the same script returns 26 PASS / 0 FAIL.

```

HAUSSMANN P4.5a live probe → https://adna.network
================================================================

Derived 4 HomeHero routes: /, /network/, /commons/, /vaults/

R-125 / ⊳ D-C — the embargoed term is cut from every hero, replacement present
  PASS  / responds 200
  FAIL  / — "Lattice Protocol" absent — found ×1
  FAIL  / — term-free replacement present — found ×0
  PASS  /network/ responds 200
  FAIL  /network/ — "Lattice Protocol" absent — found ×1
  FAIL  /network/ — term-free replacement present — found ×0
  PASS  /commons/ responds 200
  FAIL  /commons/ — "Lattice Protocol" absent — found ×1
  FAIL  /commons/ — term-free replacement present — found ×0
  PASS  /vaults/ responds 200
  FAIL  /vaults/ — "Lattice Protocol" absent — found ×1
  FAIL  /vaults/ — term-free replacement present — found ×0

R-120 — the homepage 30-second zone says ONE thing about where files live
  FAIL  / — "and shared in the open" absent — found ×1
  FAIL  / — openness attached to the standard — found ×0
  PASS  / — the local promise still stands
  PASS  / — retired FALSE gloss R-14 still gone

R-111 — related-party disclosure, on all THREE surfaces that need it
  PASS  /canonical-properties/ responds 200
  FAIL  /canonical-properties/ — discloses the operator's Foundation role — absent
  PASS  /about/ responds 200
  PASS  /about/ — discloses the operator's Foundation role
  PASS  /state-of-the-network/ responds 200
  PASS  /state-of-the-network/ — discloses the operator's Foundation role

R-121 — no invented specifics presented as observation
  PASS  /learn/what-is-adna/ responds 200
  FAIL    "200 files" absent — found ×1
  FAIL    "three days" absent — found ×1
  FAIL    the hypothetical is labelled as such — label absent

KNOWN-OPEN — stated, not silently passed
  OPEN  R-124 (S3) — DEFERRED out of P4.5a (register §9.3): routing it requires authoring a clinical posture, which is a positioning decision nobody has taken. Not probed here on purpose.
  OPEN  R-122 / R-123 (S2) — belong to P3.5, the next mission in the ruled order. Not probed here.
  OPEN  "Lattice Protocol" survives on 2 deep pages by design (register §9.1 boundary): /learn/tutorials/exchange-adoption-path/ (TAUGHT-AS-DESIGN, self-explaining) and /get-started/what-your-agent-reads/skill-onboarding/ (byte-exact vendored .adna file — editing it would falsify the page and red gate-36).

================================================================
12 PASS / 14 FAIL   (3 known-open, printed above)

FAILURES:
  - / — "Lattice Protocol" absent — found ×1
  - / — term-free replacement present — found ×0
  - /network/ — "Lattice Protocol" absent — found ×1
  - /network/ — term-free replacement present — found ×0
  - /commons/ — "Lattice Protocol" absent — found ×1
  - /commons/ — term-free replacement present — found ×0
  - /vaults/ — "Lattice Protocol" absent — found ×1
  - /vaults/ — term-free replacement present — found ×0
  - / — "and shared in the open" absent — found ×1
  - / — openness attached to the standard — found ×0
  - /canonical-properties/ — discloses the operator's Foundation role — absent
  -   "200 files" absent — found ×1
  -   "three days" absent — found ×1
  -   the hypothetical is labelled as such — label absent

(exit code: 1)
```
