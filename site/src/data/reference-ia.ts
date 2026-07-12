/**
 * Single source of truth for the /reference information architecture — the genre
 * grouping + order shared by the /reference index (site/src/pages/reference/index.astro)
 * and the sidebar's Reference group (site/src/utils/navigation.ts).
 *
 * Storyweave P4 M4.2 (2026-07-11): before this, the index rendered getSortedReference()
 * (unsorted glob order, all 10 docs) while the sidebar hand-listed 8 in a different order —
 * the 2 "Craft" docs (writing-guidelines, visual-identity-v2) were live routes but orphaned
 * from the sidebar. One list here removes the 8-vs-10 drift and groups the docs by genre so a
 * reader leads with the spec instead of an alphabetical wall.
 *
 * `label` is the short sidebar label; the /reference index uses each doc's fuller
 * `ref_title` + `description` from the content collection, joined by `id`.
 */

export interface RefEntry {
  /** content-collection id (filename without .mdx) */
  id: string;
  /** short label for the sidebar nav */
  label: string;
}

export interface RefGenre {
  genre: string;
  /** one-line orientation shown under the genre heading on the index */
  blurb: string;
  /** stable id="" anchor for the index heading + its TOC entry */
  slug: string;
  items: RefEntry[];
}

export const referenceIA: RefGenre[] = [
  {
    genre: 'Specification',
    slug: 'specification',
    blurb: 'The normative standard — when in doubt, this is authoritative.',
    items: [{ id: 'specification', label: 'Specification' }],
  },
  {
    genre: 'Rationale & guides',
    slug: 'rationale-guides',
    blurb: 'Why aDNA is shaped the way it is, and how to read, adopt, and set it up.',
    items: [
      { id: 'design-rationale', label: 'Design Rationale' },
      { id: 'reading-guide', label: 'Reading Guide' },
      { id: 'agent-first-guide', label: 'Agent-First Guide' },
      { id: 'migration-guide', label: 'Migration Guide' },
      { id: 'tool-setup', label: 'Tool Setup' },
    ],
  },
  {
    genre: 'Governance & quality',
    slug: 'governance-quality',
    blurb: 'How decisions get made and how conformance is measured.',
    items: [
      { id: 'governance-model', label: 'Governance Model' },
      { id: 'quality-rubric', label: 'Quality Rubric' },
    ],
  },
  {
    genre: 'Craft',
    slug: 'craft',
    blurb: 'The house style for writing and visual identity across aDNA surfaces.',
    items: [
      { id: 'writing-guidelines', label: 'Writing Guidelines' },
      { id: 'visual-identity-v2', label: 'Visual Identity v3' },
    ],
  },
];

/** Flat id list in genre order — the index sort and the sidebar order share this. */
export const referenceOrder: string[] = referenceIA.flatMap((g) => g.items.map((i) => i.id));
