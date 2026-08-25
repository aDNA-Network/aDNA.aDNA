/**
 * html-validate configuration — HAUSSMANN P4.2 O1 (AC2).
 *
 * WHY THIS FILE IS `.cjs` AND NOT `.json`
 *   AC2 requires that every exception "lives in the committed config WITH ITS REASON, so it is
 *   enforced and legible rather than remembered." JSON cannot carry a reason — html-validate
 *   schema-validates the config and rejects a `"//"` comment key outright (tested). A `.js` config
 *   can. `.cjs` specifically because `site/package.json` declares `"type": "module"`, which would
 *   otherwise make a bare `.js` file ESM and break `module.exports`.
 *
 * WHY EVERY EXCEPTION IS `off` AND NOT SILENCE
 *   An exception here is a RULING, not a convenience. Each one below states what it exempts, why,
 *   and what would reverse it. A rule turned off without a reason is indistinguishable from a rule
 *   nobody understood — and this campaign's whole aesthetic is that claims move down to
 *   verifiability.
 *
 * BASELINE (P4.2 O1, measured — command + config on the artifact's face at
 * how/campaigns/campaign_haussmann/artifacts/p4_2/htmlvalidate_baseline.md):
 *   before: 4,444 errors / 11 classes / 226 of 226 pages dirty
 *   after:  the classes below are exempted with cause; every other class is at ZERO and gating.
 */
module.exports = {
  extends: ['html-validate:recommended'],

  rules: {
    /* ─── GENERATED OUTPUT — not authored markup ─────────────────────────────────────────────
     * The site does not write these bytes; its toolchain does. Linting a generator's output as
     * though a contributor typed it produces a number nobody can act on.
     */

    // 3,251 errors / 61 pages. Shiki emits one inline `style` per syntax token — that is simply
    // how Astro's default (and now dual-theme) highlighting works, and there is no setting that
    // makes it emit classes instead.
    // ⚠ NOTE FOR ANYONE RE-OPENING THIS: dual-theme Shiki (added at O1) does NOT reduce this
    // count. It changes WHICH colours ship, not whether they ship inline. The parity fix and this
    // exception are independent, and assuming otherwise is the easy mistake.
    // REVERSES IF: the site stops using Shiki, or Shiki gains class-based emission.
    'no-inline-style': 'off',

    // 125 errors / 32 pages. MDX renders a markdown `---` as `<hr/>` in XHTML void style. There
    // is no authored `<hr` anywhere in `src/content/` — verified by grep. Nothing to fix at a
    // component locus, because there is no component.
    // REVERSES IF: MDX changes its void-element serialization, or `<hr` becomes authored.
    'void-style': 'off',

    // 24 errors / 24 pages. Astro's compiler emits trailing whitespace in the breadcrumb region.
    // Cosmetic, invisible in render, and not addressable from source.
    // REVERSES IF: the compiler's output formatting changes.
    'no-trailing-whitespace': 'off',

    /* ─── DELIBERATE MARKUP — fixing the lint would REGRESS the site ──────────────────────────
     * These are the ones worth reading twice. The naive fix makes the page worse.
     */

    // 23 + 3 errors. `role="list"` on a `<ul>`/`<ol>` is redundant to a validator and load-bearing
    // in a browser: Safari REMOVES list semantics from a list styled `list-style: none`, and
    // `role="list"` is the documented workaround that restores them for VoiceOver. All six lists
    // that trigger this were checked and ALL SIX carry `list-style: none`.
    // ⇒ Removing the role to satisfy the linter would be a real accessibility regression on
    //   Safari, traded for a number. That is the wrong trade and it is not being made.
    // REVERSES IF: Safari fixes the list-semantics behaviour, or the lists gain visible markers.
    'no-redundant-role': 'off',
    'prefer-native-element': 'off',

    // 7 errors, on lists in /glossary and /network whose `aria-label`/`aria-labelledby` is the
    // ONLY accessible name they have. The rule's own message concedes the usage is "strictly
    // allowed but not recommended" — a style preference, not a defect.
    // ⚠ Note the deliberate ASYMMETRY with what O1 actually changed: SidebarNav's
    //   `<ul aria-label="All sections">` WAS removed, because its parent <nav> already named the
    //   region and the label was redundant. These seven are not redundant — stripping them would
    //   delete the only name a screen reader has for the list. Same rule, opposite answers,
    //   because the question is whether information is lost, not whether the linter is quiet.
    // REVERSES IF: these lists gain a heading that can carry the name instead.
    'aria-label-misuse': 'off',

    /* ─── ROUTE-COUPLED — the fix is a breaking change, not a markup change ───────────────────
     */

    // 226 errors. Numbered-heading anchors (`id="1-create-in-your-vault"`) start with a digit,
    // which `valid-id` rejects in strict mode. These ids ARE URLs: they are the anchor targets of
    // the split specification, and `content.config.ts` pins them as `slug_id`. Renaming them
    // silently breaks every deep link under ADR-057's same-diff law.
    // `relaxed` keeps the rule ENFORCING — empty ids and ids containing whitespace still fail —
    // and only permits the leading digit. This is a narrowed rule, not a disabled one, which is
    // why it is here rather than at `off`.
    'valid-id': ['error', { relaxed: true }],
  },
};
