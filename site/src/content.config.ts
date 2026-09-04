import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Shared SEO Schema ───────────────────────────────────────────
const seoSchema = z.object({
  title: z.string().max(70),
  description: z.string().max(160).optional(),
  canonical: z.string().url().optional(),
  og_image: z.string().optional(),
});

// ── Shared Date Schema ──────────────────────────────────────────
const dateSchema = z.coerce.date();

// ── Collections ─────────────────────────────────────────────────

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: seoSchema.extend({
    page_type: z.literal('doc').default('doc'),
    doc_title: z.string(),
    section: z.string(),
    order: z.number().int(),
    badge: z.enum(['new', 'updated', 'deprecated', 'experimental']).optional(),
    next: z.string().optional(),
    prev: z.string().optional(),
    draft: z.boolean().default(false),
    updated: dateSchema.optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guides' }),
  schema: seoSchema.extend({
    page_type: z.literal('guide').default('guide'),
    guide_title: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    estimated_time: z.string(),
    prerequisites: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: dateSchema.optional(),
    updated: dateSchema.optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const reference = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/reference' }),
  schema: seoSchema.extend({
    page_type: z.literal('reference').default('reference'),
    ref_title: z.string(),
    api_module: z.string().optional(),
    version: z.string().optional(),
    stability: z.enum(['stable', 'beta', 'experimental', 'deprecated']).default('stable'),
    updated: dateSchema.optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Spec sections (HAUSSMANN P2.3 O1). GENERATED — `scripts/split_specification.mjs` projects
 * `reference/specification.mdx` into one entry per numbered section so the spec is readable a
 * section at a time on a phone. Never hand-edit `src/content/spec/`; gate-32 asserts the parts
 * still reconstitute the source.
 */
const spec = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/spec' }),
  schema: seoSchema.extend({
    page_type: z.literal('spec_section').default('spec_section'),
    section_title: z.string(),
    number: z.number().int(),
    /** Matches the id rehype gives the original h2, so full-page anchors and section URLs agree. */
    slug_id: z.string(),
    version: z.string(),
    prev: z.string().nullable(),
    next: z.string().nullable(),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
  schema: seoSchema.extend({
    page_type: z.literal('changelog').default('changelog'),
    version: z.string(),
    date: dateSchema,
    breaking: z.boolean().default(false),
    highlights: z.array(z.string()).optional(),
  }),
});

/**
 * aDNA Enhancement Proposals (HAUSSMANN P3.5; ADR-055 §§2–5, ratified 2026-08-20).
 *
 * The public proposal process. Three schema rules carry ratified law rather than convention, so
 * they are enforced here where a malformed proposal fails the build:
 *
 *  - `number` is an int ≥ 1 and IMMUTABLE once assigned (§2). Nothing here can enforce immutability
 *    across time — only the archive can, by never reassigning — but `.int().positive()` stops the
 *    class of typo that would collide two proposals onto one number.
 *  - `status` is the closed 8-state enum of §3. A state outside it is a build error, not a page that
 *    renders an invented state.
 *  - `authored_by_agent` is REQUIRED, not optional (§5). Disclosure that can be omitted is disclosure
 *    that will be omitted; making it required means every proposal answers the question.
 */
const proposals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proposals' }),
  schema: seoSchema.extend({
    page_type: z.literal('proposal').default('proposal'),
    number: z.number().int().positive(),
    proposal_title: z.string(),
    status: z.enum([
      'draft',
      'review',
      'accepted',
      'final',
      'rejected',
      'withdrawn',
      'superseded',
      'dormant',
    ]),
    created: dateSchema,
    updated: dateSchema.optional(),
    /** Human author(s). Agent-authored proposals still name the human who filed them. */
    authors: z.array(z.string()).nonempty(),
    /** Shepherd through review. Null is honest — §3's `dormant` exists for exactly this. */
    sponsor: z.string().nullable().default(null),
    /** ADR-055 §5 — disclosed, in a required field, never a footnote. */
    authored_by_agent: z.string().nullable(),
    /** Set only when status is `accepted` or `final`; §5 — a human, named, with the date. */
    ratified_by: z.string().nullable().default(null),
    ratified_date: dateSchema.optional(),
    /** §4 — the check that fails when the rule is violated. Required before `final` is honest. */
    conformance_check: z.string().nullable().default(null),
    /** §3 — `superseded` names its successor; a revived idea is a NEW number that names its ancestor. */
    superseded_by: z.number().int().positive().nullable().default(null),
    supersedes: z.number().int().positive().nullable().default(null),
    /**
     * The state history — every transition, dated, with the reason.
     *
     * This is what makes the status machine evidence rather than a badge. A proposal that shows
     * only its current state is asking to be trusted about how it got there; ADR-055 §2's whole
     * argument is that the archive should not have to be trusted. gate-37 asserts the LAST entry
     * matches `status`, so the two cannot drift.
     */
    history: z
      .array(
        z.object({
          date: dateSchema,
          state: z.string(),
          note: z.string(),
        }),
      )
      .nonempty(),
    /** The in-vault decision this renders publicly, where one exists (§6). */
    implements_adr: z.string().nullable().default(null),
    discussion_url: z.string().url().nullable().default(null),
  }),
});

/**
 * Course lessons — "Intro to your new aDNA graph" (TypeScript.aDNA course C3b, under the
 * operator-carried consent of 2026-09-03).
 *
 * `.md`, not `.mdx`, deliberately: the course's own promise is that an agent can be pointed at
 * `src/content/course/` and read the curriculum raw. MDX would buy components we do not need and
 * cost that promise its literalness.
 *
 * `check` is the one schema-shaped idea here. Every lesson ends in something the learner DOES, and
 * the five kinds differ structurally — a quiz has questions, a sorter has items and bins. A
 * discriminated union says that once, at the boundary, and the renderer narrows on `kind` with a
 * `never` proof: adding a sixth kind becomes a compile error at the switch rather than a lesson
 * that silently renders nothing.
 */
const quizQuestion = z.object({
  prompt: z.string(),
  options: z.array(z.string()).min(2),
  /** Index into `options`. Refined below — an out-of-range answer is an unanswerable question. */
  answer: z.number().int().min(0),
  explanation: z.string(),
});

const course = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/course' }),
  schema: seoSchema.extend({
    page_type: z.literal('lesson').default('lesson'),
    lesson_title: z.string(),
    /** Position in the ladder. Drives sort, prev/next, and the progress denominator. */
    order: z.number().int().min(1),
    level: z.enum(['orientation', 'operating', 'capstone']),
    estimated_minutes: z.number().int().positive(),
    /** Lesson ids (filenames without extension), not titles. */
    prerequisites: z.array(z.string()).default([]),
    /**
     * The `template_tutorial.md` contract: every lesson states what the HUMAN learns and what their
     * AGENT will do with it. A literal rather than a boolean — there is no legal `false`, and a
     * field that can be switched off is a contract that will be switched off.
     */
    dual_audience: z.literal(true),
    /** Testable outcomes, in the learner's voice. At least one, or the lesson has no point. */
    learner_can: z.array(z.string()).min(1),
    check: z.discriminatedUnion('kind', [
      z.object({
        kind: z.literal('quiz'),
        questions: z.array(quizQuestion).min(1),
      }),
      z.object({
        kind: z.literal('sorter'),
        bins: z.array(z.string()).min(2),
        /** `bin` must name one of `bins`; refined below. */
        items: z.array(z.object({ text: z.string(), bin: z.string() })).min(1),
      }),
      z.object({
        kind: z.literal('sequence'),
        /** Authored in the CORRECT order; the island shuffles deterministically at render. */
        steps: z.array(z.string()).min(2),
      }),
      z.object({
        kind: z.literal('frontmatter_fill'),
        schema_ref: z.string(),
        fields: z.array(z.object({ name: z.string(), hint: z.string() })).min(1),
      }),
      z.object({
        kind: z.literal('checklist'),
        items: z.array(z.string()).min(1),
      }),
    ]),
    draft: z.boolean().default(false),
    updated: dateSchema.optional(),
  })
    // A quiz answer pointing past the end of its options list parses fine and then renders an
    // ungradeable question. Catching it at build time is the whole reason the schema is the
    // boundary — the alternative is a learner who can never be right.
    .superRefine((data, ctx) => {
      if (data.check.kind === 'quiz') {
        data.check.questions.forEach((q, i) => {
          if (q.answer >= q.options.length) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['check', 'questions', i, 'answer'],
              message: `answer ${q.answer} is out of range for ${q.options.length} options`,
            });
          }
        });
      }
      if (data.check.kind === 'sorter') {
        // Bound to a const: narrowing on `data.check` does not survive into a closure, because the
        // property could in principle be reassigned between the test and the call.
        const sorter = data.check;
        const bins = new Set(sorter.bins);
        sorter.items.forEach((item, i) => {
          if (!bins.has(item.bin)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['check', 'items', i, 'bin'],
              message: `bin "${item.bin}" is not one of: ${sorter.bins.join(', ')}`,
            });
          }
        });
      }
    }),
});

export const collections = { docs, guides, reference, spec, changelog, proposals, course };
