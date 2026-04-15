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

export const collections = { docs, guides, reference, changelog };
