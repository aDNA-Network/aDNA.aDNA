# P4.5a live probe — POST-DEPLOY run against production

Run: 2026-08-20T20:06:22Z, after deploy_record 2026-08-20T20:05:44Z mode=prod tree=bb00464.
Pre-deploy the same script returned 12 PASS / 14 FAIL (probe_predeploy_red.md). The delta is the mission.

```

HAUSSMANN P4.5a live probe → https://adna.network
================================================================

Derived 4 HomeHero routes: /, /network/, /commons/, /vaults/

R-125 / ⊳ D-C — the embargoed term is cut from every hero, replacement present
  PASS  / responds 200
  PASS  / — "Lattice Protocol" absent
  PASS  / — term-free replacement present
  PASS  /network/ responds 200
  PASS  /network/ — "Lattice Protocol" absent
  PASS  /network/ — term-free replacement present
  PASS  /commons/ responds 200
  PASS  /commons/ — "Lattice Protocol" absent
  PASS  /commons/ — term-free replacement present
  PASS  /vaults/ responds 200
  PASS  /vaults/ — "Lattice Protocol" absent
  PASS  /vaults/ — term-free replacement present

R-120 — the homepage 30-second zone says ONE thing about where files live
  PASS  / — "and shared in the open" absent
  PASS  / — openness attached to the standard
  PASS  / — the local promise still stands
  PASS  / — retired FALSE gloss R-14 still gone

R-111 — related-party disclosure, on all THREE surfaces that need it
  PASS  /canonical-properties/ responds 200
  PASS  /canonical-properties/ — discloses the operator's Foundation role
  PASS  /about/ responds 200
  PASS  /about/ — discloses the operator's Foundation role
  PASS  /state-of-the-network/ responds 200
  PASS  /state-of-the-network/ — discloses the operator's Foundation role

R-121 — no invented specifics presented as observation
  PASS  /learn/what-is-adna/ responds 200
  PASS    "200 files" absent
  PASS    "three days" absent
  PASS    the hypothetical is labelled as such

KNOWN-OPEN — stated, not silently passed
  OPEN  R-124 (S3) — DEFERRED out of P4.5a (register §9.3): routing it requires authoring a clinical posture, which is a positioning decision nobody has taken. Not probed here on purpose.
  OPEN  R-122 / R-123 (S2) — belong to P3.5, the next mission in the ruled order. Not probed here.
  OPEN  "Lattice Protocol" survives on 2 deep pages by design (register §9.1 boundary): /learn/tutorials/exchange-adoption-path/ (TAUGHT-AS-DESIGN, self-explaining) and /get-started/what-your-agent-reads/skill-onboarding/ (byte-exact vendored .adna file — editing it would falsify the page and red gate-36).

================================================================
26 PASS / 0 FAIL   (3 known-open, printed above)

```
