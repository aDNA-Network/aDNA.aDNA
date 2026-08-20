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
    /** The in-vault decision this renders publicly, where one exists (§6). */
    implements_adr: z.string().nullable().default(null),
    discussion_url: z.string().url().nullable().default(null),
  }),
});

export const collections = { docs, guides, reference, spec, changelog, proposals };
