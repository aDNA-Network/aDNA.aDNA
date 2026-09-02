/**
 * Gate 54 — THE D1/D2 DOCTRINE LAYER  (HAUSSMANN GR-4 O1, AC-1 + AC-2, verification limb V1)
 *
 * Criterion: the model-routing story (D1) and the per-mission token-budget doctrine (D2) are
 * published in AUTHORED site content, and D2 is a doctrine LAYER rather than a passing mention.
 *
 * ⛩ WHAT THIS GATE RUNS AGAINST, AND WHETHER THAT IS THE SURFACE THE CLAIM IS ABOUT (convention 18,
 * stated here rather than left to be inferred from a green tick) — it runs against TWO surfaces,
 * because AC-1 and AC-2 make two different kinds of claim:
 *
 *   G54a–G54d  AUTHORED SOURCE (`src/**` minus `src/data/tour/**`). AC-1's verb is "is published in
 *              AUTHORED site content" — a claim about what this repo authors.
 *   G54e–G54g  THE RENDERED `.md` TWINS. AC-2's substance floor is a claim about what a READER
 *              ENCOUNTERS, and it is a COMPARISON against the same pages' own sibling sections, so
 *              both halves are measured by one instrument on one surface.
 *
 * ⚠⚠ THE EXCLUSION IS THE CRITERION HERE, NOT HOUSEKEEPING — AND WITHOUT IT THIS GATE WOULD HAVE
 * BEEN GREEN AGAINST ZERO WORK. Measured 2026-09-02, before GR-4 O1 shipped a word, the only
 * model-routing occurrence anywhere in `src/` was one skills-table row inside
 * `src/data/tour/standard-governance.txt` — the byte-vendored `.adna/CLAUDE.md`, published on the
 * trust page with its sha256 and an invitation to diff it. A gate phrased the obvious way ("model
 * routing appears on the site") would have passed on the day the story was ABSENT. That file also
 * cannot be edited: Standing Rule 1 forbids modifying `.adna/`, and editing the published copy would
 * trade a copy defect for a trust defect on the one surface built to be checked.
 *
 * ⇒ G54b ASSERTS THE EXCLUSION rather than assuming it, on gate-48's ratified discipline — THE
 * EXCLUSIONS ARE PART OF THE CLAIM — and pins the arithmetic the way G48d pins its own, so the
 * excluded set cannot quietly grow to swallow an inconvenient result. G54c asserts the exclusion is
 * still LOAD-BEARING: if the vendored file ever stops carrying the term, the exclusion has become
 * decorative, and this gate says so instead of passing for a reason that no longer holds.
 *
 * RELATIONSHIP TO THE MEASUREMENT: this gate does NOT re-implement it. It runs
 * `scripts/doctrine_layer_measure.mjs --json` and asserts on the output, so fence and report can
 * never disagree — gate-40's discipline, for gate-40's reason. The measurement also carries the
 * thing worth protecting: THE SUBSTANCE FLOOR IS DERIVED FROM THE PAGES' OWN CONFORMANT SECTIONS,
 * NOT CHOSEN. Its header records that the first draft gated two axes that the data then showed to be
 * ANTI-CORRELATED, which would have failed genuinely conformant siblings.
 *
 * ⚠ G54g IS THE ONE THAT AGES, and it is gate-44's G44c by another name. The budget is only honest
 * while its derivation still supports it. If the exemplar sections thin out, the pinned floor
 * silently becomes stricter than the evidence for it and every grade it hands down is unfounded.
 *
 * ⚠ COVERAGE FLOORS, NOT `> 0` (P4.2's lesson, paid for twice; and the adoption addendum's — A
 * COVERAGE FLOOR GOES STALE THE MOMENT ITS SUBJECT GROWS). A collapsed source walk or an unbuilt
 * twin must fail loudly: `pages.every(p => meets)` is VACUOUSLY TRUE over rows that carry an
 * `error` field and no verdict at all.
 *
 * Red-proven by `scripts/doctrine_layer_redtest.sh` — ONE MUTATION PER ASSERTION, each case naming
 * the assertion it reds via, because a demonstration is only worth what it can attribute (GR-3's
 * `F-z`, spent forward at authoring time rather than discovered in this harness's fourteenth day).
 *
 * ── GR-4 O2 EXTENSION (AC-4 · D4 · verification limb V3's PRESENCE half) ────────────────────────
 *
 * G54i–G54j were added at O2 and they are a DIFFERENT criterion on a DIFFERENT surface, so they say
 * so rather than hiding inside a gate whose title names D1/D2. ⚠ THE FILENAME IS NOW NARROWER THAN
 * THE GATE — named here rather than fixed, because renaming the spec would move a path three other
 * files hardcode, for no assertion gained.
 *
 * ⭐⭐ WHY A PRESENCE ASSERTION EXISTS AT ALL, AND IT IS THE SHARPEST THING IN THIS MISSION'S PASS.
 * AC-4 has two halves — the disambiguation REACHES `/commons` (substance), and `/commons`'s reading
 * level STAYS under target (constraint). V3 is the reading census: it tests the constraint. Before
 * this gate, NOTHING tested the substance, so the mission could have shipped nothing at all, run the
 * census, and passed. Worse, and this is the part that makes it dangerous rather than merely absent:
 * FKGL FALLS AS PROSE GETS SHORTER AND SIMPLER, so a plain two-sentence disambiguation LOWERS the
 * number — the constraint limb moves in the REASSURING direction exactly when the criterion is met.
 * Measured live at O2: `/commons` went 8.61 → 8.30 against a target of 12. A limb that improves when
 * its criterion is met is a limb that will be read as confirmation.
 *
 * ⛩ SURFACE (convention 18): the `.md` TWIN, `dist/commons.md`. AC-4's verb is "a reader
 * ENCOUNTERS", which is a question about rendered, flattened text — not about source, and not about
 * the DOM. Convention 17's amendment made that choice explicit after P4.5b named a surface correctly
 * and still picked the wrong one; it fails in BOTH directions, so there is no safe default.
 *
 * ⚠ LINK TARGETS ARE STRIPPED BEFORE MATCHING, and that exclusion is part of the claim. The copy
 * links `en.wikipedia.org/wiki/Ancient_DNA`; a naive match could be satisfied by a URL nobody reads
 * aloud. It cannot be here (the URL carries an underscore), but "it happens not to match today" is
 * not an assertion — the same reasoning that made AC-1's vendored exclusion load-bearing.
 *
 * ── GR-4 O3 EXTENSION (AC-3 · D3 · verification limb V2, plus G54k) ────────────────────────────
 *
 * G54k–G54n were added at O3. D3 is the local-models story: copy about something that DOES NOT RUN,
 * so its criterion is not "is it there" but "does it stay distinguishable BY TEST from a live claim".
 *
 * ⛩ SURFACE (convention 18): the `.md` TWIN, `dist/network.md`, and the prose comes from the MEASURE
 * SCRIPT's own split rather than a second read of the file here. A gate that re-splits the twin to
 * get the words it grades would be a second instrument sharing the first one's number — the defect
 * this file's own header refuses one level up.
 *
 * ⭐⭐ G54k EXISTS BECAUSE A THIRD PAGE FALSIFIED G54f's MESSAGE. G54f described its floor as "derived
 * from that page's own sibling sections". True while two pages shared a pin of 217 taken from the
 * thinner of them; FALSE for `/network`, whose own bands floor at 547. A 250-char section there clears
 * 217 and is under half the thinnest band a reader already meets. The shared pin stays deliberately
 * conservative (never grade against a floor a page's own siblings do not support) and G54k adds back
 * the strictness the message was already claiming. Red-test case 12 isolates it — and its first draft,
 * written by feel at ~205 chars, red BOTH floors and proved nothing until it was MEASURED.
 *
 * ⭐⭐ AND D3 REPRODUCED O2'S FINDING AT ~8.6× THE MAGNITUDE. `/network` prose FKGL went 11.56 → 8.89
 * against a target of 12 — a 2.67 drop, ~6× the 0.44 headroom the constraint was supposedly
 * protecting, and ~8.6× O2's 0.31 move on `/commons`. Ship NOTHING and it reads 11.56 and the census
 * still passes. So on this criterion, as on AC-4, the census is not what makes it falsifiable:
 * G54e/G54f/G54k are. The constraint limb is real and it is not the proof.
 *   ⚠ Both figures RE-DERIVED at the close on the SAME instrument (revert → build → census → restore
 *   → build), not carried: the pair first written here read `→ 8.93 / 2.63`, measured before the
 *   genesis→planned copy correction below moved the prose. A figure in a committed instrument is
 *   re-derived at the commit that quotes it — the campaign's own rule, applied to its own comment.
 *
 * ⭐ G54n IS THE LOAD-BEARING HALF, not G54m. Planned framing does not fail by going missing — a
 * future editor does not delete "not built", they add "you can run" beside it. Case 15 adds exactly
 * that ONE sentence, leaves every hedge intact, and G54m stays green while G54n reds. That is V7's
 * lesson (the failure mode of a disclaiming posture is that it quietly becomes a promise) borrowed
 * one criterion sideways, before AC-8's own section exists to teach it at O5.
 *
 * ⚠ AVAILABILITY VOCABULARY IS MATCHED AS UNAMBIGUOUS PHRASES ONLY, and the reason is the subject:
 * this section is ABOUT running a model, so "run"/"runs"/"running" are load-bearing words inside it.
 * A loose pattern would red on the section's own heading, and a blocklist that fires on its own
 * subject is a blocklist somebody switches off.
 *
 * ⚠ G54j ASSERTS BOTH TERMS, because "ancient DNA" alone is a MENTION and AC-4 asks for a
 * DISAMBIGUATION. A page could say "this is not about ancient DNA" and leave a reader no better
 * off. The resolution — "Agentic DNA" — is what makes it an answer. This is DEFECT-3's lesson
 * (a criterion satisfiable by a passing mention) applied to a sibling criterion that did not carry it.
 */
import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

type Section = { heading: string; bodyLen: number; proseLen: number; elements: number; prose?: string };
type Page =
  | { route: string; graded: Section; comparators: Section[]; excludedFromComparators: string[]; error?: undefined }
  | { route: string; error: string };
type Term = { label: string; authored: string[]; excludedMatching: string[] };
type Measure = {
  source: {
    error?: string;
    excludedDirs: string[];
    scanned: number;
    kept: number;
    excluded: number;
    terms: Record<string, Term>;
    d2Homes: { file: string; present: boolean }[];
  };
  pages: Page[];
  budget: { bodyLen: number };
  derived: { bodyLen: number } | null;
  derivationHolds: boolean;
};

/** Declared here as well as in the script: a gate that reads its own frame from the thing it grades
 *  can be moved by moving that thing. These are the numbers the criterion was ratified against. */
const EXPECTED_EXCLUDED_DIRS = ['src/data/tour'];
const SCAN_FLOOR = 200;
const COMPARATOR_FLOOR = 3;
const D2_HOME_COUNT = 2;

function run(): Measure {
  let raw: string;
  try {
    raw = execFileSync('node', ['scripts/doctrine_layer_measure.mjs', '--json'], {
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
    });
  } catch (e: any) {
    throw new Error(`doctrine_layer_measure.mjs did not run — the gate cannot grade anything: ${e?.message}`);
  }
  return JSON.parse(raw) as Measure;
}

test.describe('gate-54: GR-4 story coverage — D1/D2 doctrine, D4 on /commons, D3 on /network', () => {
  let m: Measure;
  test.beforeAll(() => {
    m = run();
  });

  test('G54a: the source walk covered its frame (coverage floor, not > 0)', () => {
    expect(m.source.error, 'the source scan errored — no verdict below it means anything').toBeUndefined();
    expect(
      m.source.scanned,
      `the walk found only ${m.source.scanned} source files; below ${SCAN_FLOOR} the scan has collapsed ` +
        `and every "absent" verdict it produces is an artefact of the walk, not a fact about the site`,
    ).toBeGreaterThanOrEqual(SCAN_FLOOR);
    expect(m.source.kept + m.source.excluded, 'kept + excluded must account for every file walked').toBe(m.source.scanned);
  });

  test('G54b: the exclusion set is what it claims to be, and its arithmetic is pinned', () => {
    expect(
      m.source.excludedDirs,
      'the excluded set changed. THE EXCLUSIONS ARE PART OF THE CLAIM: growing this list is the ' +
        'cheapest possible way to make this gate green without publishing anything.',
    ).toEqual(EXPECTED_EXCLUDED_DIRS);
    expect(m.source.excluded, 'the excluded tree is empty — the exclusion is not selecting the vendored files').toBeGreaterThan(0);
  });

  test('G54c: D1 is published in AUTHORED content', () => {
    expect(
      m.source.terms.d1.authored.length,
      'the model-routing story is absent from authored source. It cannot be satisfied by the ' +
        'vendored tour file, which is excluded by name — see this gate\'s header.',
    ).toBeGreaterThan(0);
  });

  /* Logically G54c's sibling; it carries its own id because ONE MUTATION PER ASSERTION is what makes
   * a red attributable, and an assertion sharing a test with another can only ever be demonstrated
   * to fail alongside it. */
  test('G54h: the vendored exclusion is still load-bearing', () => {
    expect(
      m.source.terms.d1.excludedMatching.length,
      'the vendored tree no longer carries the term, so the exclusion is no longer excluding ' +
        'anything. That is not a failure of the site — it means this gate would now pass with the ' +
        'exclusion removed, and the criterion it was written for has quietly stopped being tested.',
    ).toBeGreaterThan(0);
  });

  test('G54d: D2 is published on BOTH of its named home pages', () => {
    expect(m.source.d2Homes.length, 'the named-home set changed size').toBe(D2_HOME_COUNT);
    const missing = m.source.d2Homes.filter((h) => !h.present).map((h) => h.file);
    expect(
      missing,
      `AC-2 names these pages as D2's homes; the doctrine is absent from: ${missing.join(', ')}`,
    ).toEqual([]);
  });

  test('G54e: every graded page was actually measured (coverage floor)', () => {
    const errored = m.pages.filter((p) => 'error' in p && p.error).map((p) => `${p.route}: ${(p as any).error}`);
    expect(
      errored,
      `a page could not be measured, so "every graded section meets the floor" would be vacuously ` +
        `true over rows that carry no verdict at all: ${errored.join(' · ')}`,
    ).toEqual([]);
    for (const p of m.pages as Extract<Page, { graded: Section }>[]) {
      expect(
        p.comparators.length,
        `${p.route} has ${p.comparators.length} comparators; below ${COMPARATOR_FLOOR} the "floor of ` +
          `the conformant set" stops being a floor`,
      ).toBeGreaterThanOrEqual(COMPARATOR_FLOOR);
    }
  });

  /* Error rows are skipped here ON PURPOSE and G54e is what makes that safe: it fails loudly on any
   * error row, so this limb never grades a shrunken frame. Iterating them instead would throw on a
   * missing `graded` field and report a CRASH under this test's name — a red that names the wrong
   * cause, which is the attribution defect this suite was built to stop reproducing. */
  test('G54f: each new doctrine section meets the derived substance floor', () => {
    for (const p of (m.pages as Extract<Page, { graded: Section }>[]).filter((p) => !('error' in p && p.error))) {
      expect(
        p.graded.bodyLen,
        `${p.route} — "${p.graded.heading}" measures ${p.graded.bodyLen} against the SHARED pinned ` +
          `floor of ${m.budget.bodyLen}, which is the lowest comparator across ALL graded pages — ` +
          `not this page's own. A criterion satisfied by a passing mention is what it exists to refuse.`,
      ).toBeGreaterThanOrEqual(m.budget.bodyLen);
    }
  });

  /* ⚠⚠ G54k EXISTS BECAUSE ADDING A THIRD PAGE FALSIFIED G54f's OWN MESSAGE.
   * G54f said its floor was "derived from that page's own sibling sections". That was true while two
   * pages shared a pin of 217 taken from the thinner of them. It is FALSE for `/network`, whose own
   * siblings floor at 547 — a section of 250 chars there would clear 217 while being less than half
   * the thinnest band a reader already meets on that page. The shared pin is deliberately the LOWER
   * of the page floors (see the measure script's header: never grade a section against a floor its
   * own siblings do not support), so G54f stays as the conservative limb and this one adds back the
   * strictness its message was already claiming. ⇒ SAME-DIFF, ADR-057: the message was corrected in
   * the commit that made it false, and the assertion it described now exists. */
  test('G54k: each graded section also clears its OWN page\'s comparator floor', () => {
    for (const p of (m.pages as Extract<Page, { graded: Section }>[]).filter((p) => !('error' in p && p.error))) {
      const ownFloor = Math.min(...p.comparators.map((c) => c.bodyLen));
      expect(
        p.graded.bodyLen,
        `${p.route} — "${p.graded.heading}" measures ${p.graded.bodyLen} but this page's own thinnest ` +
          `sibling band is ${ownFloor}. It clears the shared pin and is still thinner than anything a ` +
          `reader already meets here, which is the gap the shared pin cannot see.`,
      ).toBeGreaterThanOrEqual(ownFloor);
    }
  });

  test('G54g: the derivation still supports the pinned budget', () => {
    expect(m.derived, 'nothing was derived — the comparator sets are empty').not.toBeNull();
    expect(
      m.derivationHolds,
      `the pinned budget is ${m.budget.bodyLen} but the conformant sections now floor at ` +
        `${m.derived?.bodyLen}. The budget is stricter than the evidence for it, so every grade it ` +
        `hands down is unfounded — re-derive the pin or restore the exemplars.`,
    ).toBe(true);
  });

  /* ── GR-4 O2 · D4 · AC-4's PRESENCE half (V3) ───────────────────────────────────────────────
   * Read the twin ONCE, here, rather than in each case: two cases sharing one read cannot disagree
   * about what the surface said, which is the failure mode gate-40's "assert on one output" rule
   * exists to refuse. Link TARGETS are stripped; link TEXT is kept, because link text is read. */
  const COMMONS_TWIN = join(process.cwd(), 'dist', 'commons.md');
  let commonsProse: string | null = null;
  test.beforeAll(() => {
    if (!existsSync(COMMONS_TWIN)) return;
    commonsProse = readFileSync(COMMONS_TWIN, 'utf8')
      .replace(/\]\([^)]*\)/g, ']') // drop (href); keep [text]
      .replace(/https?:\/\/\S+/g, ''); // and any bare URL
  });

  test('G54i: the /commons twin is measurable, and the probe reaches real text', () => {
    expect(
      commonsProse,
      `no twin at ${COMMONS_TWIN}. G54j below is VACUOUSLY GREEN over a file that does not exist — ` +
        `an unbuilt twin must fail loudly here, not pass quietly there. Run \`npx astro build\`.`,
    ).not.toBeNull();

    // Coverage floor, not `> 0`: a truncated or half-written twin reads exactly like a real one.
    // ⭐ DERIVED, NOT TYPED (KW-14; and B0's "a number written by feel is a formality wearing a pin's
    // clothing"). Measured 2026-09-02 at O2: the stripped twin is 6407 chars, and a POINTER-BLOCK-ONLY
    // twin — the realistic collapse, the emitter writing its preamble and no page — is ~671. The floor
    // sits between them at 3000 (~0.47x the real page, ~4.5x the stub), so ordinary copy edits, which
    // move this by tens, can never trip it, and a collapse, which moves it by thousands, always does.
    expect(
      (commonsProse ?? '').length,
      'the /commons twin is too short to be the real page — a collapsed emit would let G54j pass on ' +
        'a stub carrying nothing but its pointer block.',
    ).toBeGreaterThan(3000);

    // The control that makes G54j's verdict mean something: if the probe cannot find the site's own
    // name on its own page, a zero for "ancient DNA" is a statement about the probe, not the page.
    expect(
      (commonsProse ?? '').toLowerCase(),
      'the /commons twin does not contain "aDNA" — the probe is not reaching the text it grades, so ' +
        'any absence it reports below would be vacuous rather than real.',
    ).toContain('adna');
  });

  test('G54j: the D4 ancient-DNA disambiguation reaches the reader on /commons', () => {
    const prose = (commonsProse ?? '').toLowerCase();

    expect(
      prose,
      'the COLLISION term is absent from the /commons twin. A reader landing here from the homepage ' +
        'hand-off, the header or the footer may pass through none of the pages that answer it — ' +
        'which is D4: content that exists, three clicks below the point of confusion.',
    ).toContain('ancient dna');

    expect(
      prose,
      'the RESOLUTION term is absent. "ancient DNA" alone is a MENTION, not a disambiguation — it ' +
        'tells a reader what aDNA is not and leaves them no better off. AC-4 asks for the answer, ' +
        'and "Agentic DNA" is the half that supplies it.',
    ).toContain('agentic dna');
  });

  /* ── GR-4 O3 · D3 · AC-3's FRAMING half (V2) ────────────────────────────────────────────────
   * The D3 section is *planned*-framed copy about something that DOES NOT RUN. AC-3 asks that every
   * sentence stay distinguishable BY TEST from a live claim, which is two obligations, not one, so
   * they are two ids: the framing must be PRESENT (G54m) and the availability claim must be ABSENT
   * (G54n). ONE MUTATION PER ASSERTION — DEFECT-4's standing remedy.
   *
   * ⭐ G54n IS THE LOAD-BEARING ONE, and it is V7's lesson borrowed one criterion sideways: the
   * failure mode of planned framing is not that it goes missing, it is that it quietly becomes a
   * promise. A future editor does not delete "not built"; they add "you can run" beside it.
   *
   * The prose comes from the MEASURE SCRIPT's split, not a second read of the twin here — see the
   * note on `measureSection`. One split, one section, both the length and the words. */
  const d3Section = () => {
    const p = m.pages.find((x) => x.route === '/network');
    if (!p || 'error' in p) return null;
    return (p as Extract<Page, { graded: Section }>).graded.prose ?? null;
  };

  /** Declared, not inline: an exclusion or match list that lives inside its assertion cannot be
   *  reviewed without reading the assertion (gate-48's discipline). */
  const PLANNED_MARKERS = [
    'planned work, not shipped work',
    'nothing here runs yet',
    'is not built',
    /* ⛔ "both of them as planned", NOT "genesis". `vaults.json` carries `status: "genesis"`, but the
     * site RENDERS that state as `planned` — both linked cards read "Stage: planned" and contain the
     * literal "genesis" ZERO times [D]. A marker naming the SOURCE field would have gone green while
     * the copy told a reader to expect a word the page they were sent to does not use. */
    'both of them as planned',
    'no code behind it yet',
    'no date is set',
  ];
  const MARKER_FLOOR = 3;

  /** Present-tense AVAILABILITY vocabulary. Deliberately unambiguous phrases only: the section's own
   *  subject is running a model, so "run"/"runs"/"running" are load-bearing words IN it and a loose
   *  pattern would red on the heading. A blocklist that fires on its own subject gets suppressed. */
  const AVAILABILITY_CLAIMS = [
    'available now',
    'generally available',
    'you can run',
    'already runs',
    'runs today',
    'works today',
    'supported today',
    'out of the box',
    'ships today',
    'in production',
  ];

  test('G54l: the D3 section is measurable and the probe reaches real text', () => {
    const prose = d3Section();
    expect(
      prose,
      'no graded prose for /network. G54n below asserts an ABSENCE, so it would be VACUOUSLY GREEN ' +
        'over a section that was never read — the absence of a claim in a string that does not exist ' +
        'is not evidence about the page. This is G54i\'s role for G54j, one criterion across.',
    ).not.toBeNull();

    // The control that makes G54n's verdict mean something: if the probe cannot find the section's
    // own subject in its own body, a zero for availability vocabulary is a fact about the probe.
    expect(
      (prose ?? '').toLowerCase(),
      'the D3 graded prose does not contain "model" — the probe is not reaching the text it grades.',
    ).toContain('model');
  });

  test('G54m: the D3 section carries its planned-framing markers', () => {
    const prose = (d3Section() ?? '').toLowerCase();
    const found = PLANNED_MARKERS.filter((k) => prose.includes(k));
    expect(
      found.length,
      `the D3 section carries ${found.length} of the ${PLANNED_MARKERS.length} declared planned-framing ` +
        `markers, below the floor of ${MARKER_FLOOR}. Found: [${found.join(' · ')}]. AC-3 asks that ` +
        `every sentence stay distinguishable BY TEST from a live claim; unmarked, this copy reads as ` +
        `a description of something that works.`,
    ).toBeGreaterThanOrEqual(MARKER_FLOOR);
  });

  test('G54n: the D3 section makes no present-availability claim', () => {
    const prose = (d3Section() ?? '').toLowerCase();
    const violations = AVAILABILITY_CLAIMS.filter((k) => prose.includes(k));
    expect(
      violations,
      `the D3 section claims present availability: [${violations.join(' · ')}]. Nothing in this story ` +
        `runs — two genesis stubs are the whole of it — so an availability phrase here moves a claim ` +
        `UP, which is convention 1's single prohibition. This is the limb that matters: planned ` +
        `framing does not fail by going missing, it fails by quietly becoming a promise.`,
    ).toEqual([]);
  });
});
