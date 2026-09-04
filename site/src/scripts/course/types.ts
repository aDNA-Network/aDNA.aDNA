/**
 * The course check payload, as it crosses from build time to the browser.
 *
 * The shape is NOT restated here. `Check` is derived from the collection schema in
 * `src/content.config.ts`, so the schema stays the single source of type truth — a hand-written
 * interface beside a Zod schema drifts from what actually validates, and the drift is silent.
 * The import is type-only and erases at build; no runtime `astro:content` code reaches the client.
 *
 * What DOES have to be restated is the *validation*. The island serializes the check into the page
 * as JSON and the browser reads it back, which is an untrusted boundary in the ordinary sense: the
 * value arrives as `unknown` and nothing but a check makes it a `Check`. Zod is not available here
 * — it reaches this site only through the build-time `astro:content` virtual module, and adding a
 * client-side copy would mean adding a dependency, which is outside what this build may touch. So
 * the guards below are hand-rolled: narrow, total over the five kinds, and returning `null` rather
 * than throwing, because a malformed payload should degrade one check, not blank the lesson.
 */
import type { CollectionEntry } from 'astro:content';

export type Check = CollectionEntry<'course'>['data']['check'];
export type CheckKind = Check['kind'];

/** Extract one arm of the union by its discriminant — no re-declaration of the arm's fields. */
export type CheckOf<K extends CheckKind> = Extract<Check, { kind: K }>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((v) => typeof v === 'string');
}

/**
 * Validate a parsed JSON payload as a `Check`.
 *
 * Structural, not exhaustive-by-field: it asserts the discriminant and the fields the grader
 * actually reads. A payload that passes here cannot make the grader throw, which is the property
 * worth having — the schema already guaranteed correctness at build time, and this guard exists for
 * the case where the two ends disagree (a stale cached page against new markup, say).
 */
export function parseCheck(value: unknown): Check | null {
  if (!isRecord(value) || typeof value.kind !== 'string') return null;

  switch (value.kind) {
    case 'quiz': {
      if (!Array.isArray(value.questions)) return null;
      const ok = value.questions.every(
        (q) =>
          isRecord(q) &&
          typeof q.prompt === 'string' &&
          isStringArray(q.options) &&
          typeof q.answer === 'number' &&
          q.answer >= 0 &&
          q.answer < q.options.length &&
          typeof q.explanation === 'string',
      );
      return ok ? (value as Check) : null;
    }
    case 'sorter': {
      if (!isStringArray(value.bins) || !Array.isArray(value.items)) return null;
      const bins = new Set(value.bins);
      const ok = value.items.every(
        (i) => isRecord(i) && typeof i.text === 'string' && typeof i.bin === 'string' && bins.has(i.bin),
      );
      return ok ? (value as Check) : null;
    }
    case 'sequence':
      return isStringArray(value.steps) && value.steps.length > 1 ? (value as Check) : null;
    case 'frontmatter_fill': {
      if (typeof value.schema_ref !== 'string' || !Array.isArray(value.fields)) return null;
      const ok = value.fields.every(
        (f) => isRecord(f) && typeof f.name === 'string' && typeof f.hint === 'string',
      );
      return ok ? (value as Check) : null;
    }
    case 'checklist':
      return isStringArray(value.items) && value.items.length > 0 ? (value as Check) : null;
    default:
      // An unknown discriminant is a payload from a newer build than this script. Degrade, don't
      // guess: the server-rendered markup is still on the page and still readable.
      return null;
  }
}

/**
 * Read and validate the JSON payload an island embedded.
 *
 * `JSON.parse` throws on malformed text, so the parse is guarded too — `getItem`-style trust is
 * exactly the habit this boundary exists to break.
 */
export function readCheckPayload(root: Element): Check | null {
  const node = root.querySelector('[data-check-payload]');
  if (!node?.textContent) return null;
  try {
    return parseCheck(JSON.parse(node.textContent));
  } catch {
    return null;
  }
}
