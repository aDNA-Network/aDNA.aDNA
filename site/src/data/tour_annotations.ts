/**
 * tour_annotations.ts — the editorial half of the zero-install tour (HAUSSMANN P2.5 O1).
 *
 * HAND-AUTHORED. `scripts/build_tour_files.mjs` writes the bytes and the provenance; it never
 * writes this file. Keeping generated and authored content in separate files means a re-vendor
 * cannot silently eat prose someone wrote — and gate-36 asserts the two sets stay in step, so a
 * file added to the vendor set without an annotation fails the build rather than shipping bare.
 *
 * WHO THIS IS WRITTEN FOR. Not a reader who already trusts us. The cold-read that produced this
 * whole mission was a senior engineer who read the pitch, believed roughly half of it, and then
 * declined to run the install because — his words — "the thing you're auditing is prompt-ware, and
 * prompt-ware is executed by the agent." `lookFor` is written for him: it says what to check and
 * what would be damning, rather than what to admire.
 */

export interface TourAnnotation {
  /** Page/card heading. Plain description of the artifact, not a slogan. */
  title: string;
  /** One line: what this file IS. */
  what: string;
  /** Why an agent reads it, and when. */
  why: string;
  /** What a sceptical reader should actually look for — including what would be a red flag. */
  lookFor: string;
}

export const TOUR_ANNOTATIONS: Record<string, TourAnnotation> = {
  'workspace-router': {
    title: 'The workspace router',
    what: 'The CLAUDE.md that sits at the root of your new workspace — the first file an agent reads.',
    why: 'An agent started anywhere in the workspace reads this to work out which project you mean before it does anything else. It is a map, and it is the reason the standard needs no index service and no daemon.',
    lookFor:
      'Read it as what it is: instructions addressed to an agent, in English. There is no code path here — nothing fetches, nothing installs, nothing phones home. The strongest check is the plainest one: if this file asked an agent to send your files somewhere, you would be able to read the sentence that said so.',
  },
  'standard-governance': {
    title: "The standard's own governance",
    what: 'The CLAUDE.md inside the hidden .adna/ folder — the standard describing itself.',
    why: 'Your agent reads this to learn the conventions it is expected to follow: the triad, the entity types, the session and mission protocol. This is the file that makes the standard self-teaching rather than a PDF you have to remember.',
    lookFor:
      'Its frontmatter carries role: template. That single field is load-bearing — it is what tells an agent this directory is the standard itself and must never be edited, which is why updates arrive by git pull instead of by merge conflict.',
  },
  'skill-project-fork': {
    title: 'The skill that actually runs first',
    what: 'The procedure an agent follows to scaffold your first project.',
    why: 'This is the one that fires on a fresh clone. The workspace has no projects yet, so the router routes here — it creates <your_project>.aDNA/, its triad of what/ how/ who/, its governance files, and its own git history.',
    lookFor:
      'Follow it as a recipe and you can predict exactly what will appear on disk before you run anything. That predictability is the point of the tour: nothing below is a surprise. If you would rather do it by hand, you can — the skill is a description of file creation, not a binary.',
  },
  'skill-onboarding': {
    title: 'The interview that comes second',
    what: 'The first-run interview that customises a project vault for your domain — after one exists.',
    why: 'It is real and you will probably meet it, but not first, and it is not what builds your project. It gates on a forked project directory, so a brand-new workspace cannot trigger it; the fork skill above creates the project and then offers this. The get-started page used to have the order the other way round.',
    lookFor:
      'Read its own first-run detection conditions and you can see the gate for yourself — it checks for an uncustomised project and explicitly refuses to run against the base template. We are showing you the file rather than asking you to take our word for the correction.',
  },
};
