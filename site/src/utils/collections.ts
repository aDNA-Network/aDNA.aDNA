/**
 * Content collection query helpers.
 * Wraps getCollection() with filtering and sorting.
 */

import { getCollection } from 'astro:content';

export async function getDocsBySection(section: string) {
  const allDocs = await getCollection('docs', ({ data }) => !data.draft);
  return allDocs
    .filter((doc) => doc.data.section === section)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getAllDocs() {
  const allDocs = await getCollection('docs', ({ data }) => !data.draft);
  return allDocs.sort((a, b) => a.data.order - b.data.order);
}

export async function getSortedGuides() {
  const allGuides = await getCollection('guides', ({ data }) => !data.draft);
  const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };
  return allGuides.sort(
    (a, b) => difficultyOrder[a.data.difficulty] - difficultyOrder[b.data.difficulty]
  );
}

export async function getGuidesByDifficulty() {
  const sorted = await getSortedGuides();
  return {
    beginner: sorted.filter((g) => g.data.difficulty === 'beginner'),
    intermediate: sorted.filter((g) => g.data.difficulty === 'intermediate'),
    advanced: sorted.filter((g) => g.data.difficulty === 'advanced'),
  };
}

export async function getSortedReference() {
  const allRef = await getCollection('reference', ({ data }) => !data.draft);
  return allRef;
}

export async function getSortedChangelog() {
  const allChanges = await getCollection('changelog');
  return allChanges.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}
