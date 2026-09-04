/**
 * Course progress — a typed store with a persisted, validated hydration boundary.
 *
 * v1 is deliberately local-only: no accounts, no backend, nothing leaves the browser. That is the
 * course's own design constraint, and it is independently forced by this site — the CSP is
 * `connect-src 'self'`, the site is `output: 'static'` so there is no collector to post to, and
 * gate-42 fails the suite on any failed request. `localStorage` is the whole transport.
 *
 * Progress is convenience, never correctness: every lesson is readable and gradeable with the store
 * empty, disabled, or full. Writes are best-effort for the same reason.
 */

// ── framework-agnostic typed store core ──
export type Store<S> = {
  getState: () => S;
  setState: (next: S) => void;
  update: (fn: (prev: S) => S) => void;
  subscribe: (listener: () => void) => () => void;
};

export function createStore<S>(initial: S): Store<S> {
  let state = initial;
  const listeners = new Set<() => void>();
  const emit = () => listeners.forEach((l) => l());
  return {
    getState: () => state,
    setState: (next) => {
      state = next;
      emit();
    },
    update: (fn) => {
      state = fn(state);
      emit();
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

// ── the course's store instance ──
export type CourseProgressState = {
  /** Lesson ids the learner has passed the check on. Order is arrival order, not ladder order. */
  completed: string[];
};

const INITIAL: CourseProgressState = { completed: [] };

/**
 * Namespaced AND versioned. The version is what lets a future shape change abandon old data
 * cleanly instead of trying to migrate a value nobody can vouch for.
 */
const STORAGE_KEY = 'adna:course:v1';

/**
 * Validate a hydrated value.
 *
 * The template's persistence variant does this with `<StateSchema>.safeParse()`. Zod is not
 * reachable from a client module on this site (it arrives only through the build-time
 * `astro:content` virtual module, and adding a dependency is out of scope), so the parse is
 * hand-rolled. The property that matters is preserved: a stale or corrupt shape seeds the store,
 * it never casts and it never crashes.
 */
function isProgressState(value: unknown): value is CourseProgressState {
  if (typeof value !== 'object' || value === null) return false;
  const completed = (value as { completed?: unknown }).completed;
  return Array.isArray(completed) && completed.every((id) => typeof id === 'string');
}

function hydrate(fallback: CourseProgressState): CourseProgressState {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    return isProgressState(parsed) ? parsed : fallback;
  } catch {
    // Storage disabled, or JSON.parse threw on text something else wrote under our key.
    return fallback;
  }
}

export const progressStore = createStore<CourseProgressState>(hydrate(INITIAL));

if (typeof window !== 'undefined') {
  progressStore.subscribe(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progressStore.getState()));
    } catch {
      // Quota exceeded / private mode / storage disabled — persistence is best-effort, never
      // load-bearing. The in-memory store stays authoritative for this page view.
    }
  });
}

// ── derived selectors: typed reads, defined once ──
export const selectCompletedCount = (s: CourseProgressState) => s.completed.length;
export const selectIsComplete = (s: CourseProgressState, lessonId: string) =>
  s.completed.includes(lessonId);

/** Idempotent — passing a check twice is one completion, and re-passing must not double-count. */
export function markComplete(lessonId: string): void {
  progressStore.update((prev) =>
    prev.completed.includes(lessonId) ? prev : { completed: [...prev.completed, lessonId] },
  );
}

export function resetProgress(): void {
  progressStore.setState(INITIAL);
}
