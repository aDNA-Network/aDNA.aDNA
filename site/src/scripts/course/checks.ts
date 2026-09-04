/**
 * Course checks — grading and wiring for the `CourseCheck` island.
 *
 * The island is server-rendered: every question, option, and control exists in the HTML before this
 * module runs, so the check is readable and the page is meaningful with JavaScript off. This module
 * adds grading, per-question feedback, and the progress write — nothing structural.
 *
 * The grader narrows on the check's discriminant with a `never` proof in `default`. Adding a sixth
 * check kind to the schema then fails to compile HERE, at the switch, instead of shipping a lesson
 * whose check silently does nothing.
 */
import { readCheckPayload, type Check } from './types';
import { markComplete } from './progress';

export interface Grade {
  correct: number;
  total: number;
  /** Every item right. Deliberately strict: a check the learner can fail upward teaches nothing. */
  passed: boolean;
  /** Indices of the items answered wrongly, for per-item feedback. */
  wrong: number[];
}

function gradeFrom(results: boolean[]): Grade {
  const wrong = results.flatMap((ok, i) => (ok ? [] : [i]));
  return {
    correct: results.length - wrong.length,
    total: results.length,
    passed: wrong.length === 0,
    wrong,
  };
}

/**
 * Grade a submitted check against its payload.
 *
 * Pure: takes the form data and the check, returns a verdict. No DOM writes, which is what makes it
 * the part worth trusting — the wiring below can be wrong in visible ways; this cannot be wrong in
 * invisible ones.
 */
export function grade(check: Check, data: FormData): Grade {
  switch (check.kind) {
    case 'quiz':
      return gradeFrom(
        check.questions.map((q, i) => data.get(`q${i}`) === String(q.answer)),
      );

    case 'sorter':
      return gradeFrom(check.items.map((item, i) => data.get(`item${i}`) === item.bin));

    case 'sequence':
      // Steps are authored in the correct order and displayed shuffled; each control keeps its
      // ORIGINAL index in its name, so the answer for `step{i}` is always position i + 1.
      return gradeFrom(check.steps.map((_, i) => data.get(`step${i}`) === String(i + 1)));

    case 'frontmatter_fill':
      // Formative, not assessed: the schema this exercise teaches lives in a build-time virtual
      // module and cannot validate the learner's text in the browser. Completing every field is
      // the honest bar here, and the lesson prose says so rather than implying a grade.
      return gradeFrom(
        check.fields.map((_, i) => String(data.get(`field${i}`) ?? '').trim().length > 0),
      );

    case 'checklist':
      return gradeFrom(check.items.map((_, i) => data.get(`item${i}`) === 'on'));

    default: {
      const exhaustive: never = check;
      return exhaustive;
    }
  }
}

function announce(root: Element, grade: Grade): void {
  const result = root.querySelector('[data-check-result]');
  if (!result) return;

  result.textContent = grade.passed
    ? `All ${grade.total} correct — lesson complete.`
    : `${grade.correct} of ${grade.total} correct. The ones to look at again are marked below.`;
  result.setAttribute('data-state', grade.passed ? 'passed' : 'retry');
}

function markItems(root: Element, grade: Grade): void {
  // Matched by the index in `data-check-item`, never by DOM position: a sequence check displays its
  // steps out of order on purpose, so position and identity are not the same thing.
  root.querySelectorAll<HTMLElement>('[data-check-item]').forEach((item) => {
    const index = Number(item.dataset.checkItem);
    const isWrong = grade.wrong.includes(index);
    item.setAttribute('data-state', isWrong ? 'incorrect' : 'correct');
    // Explanations reveal only after an attempt — showing them up front turns a check into a
    // reading exercise.
    const explanation = item.querySelector<HTMLElement>('[data-check-explanation]');
    if (explanation) explanation.hidden = !isWrong;
  });
}

function wire(root: HTMLElement): void {
  const check = readCheckPayload(root);
  const form = root.querySelector('form[data-check-form]');
  const lessonId = root.dataset.lessonId;

  // A missing or unreadable payload leaves the server-rendered check on the page, unwired. The
  // learner sees the questions; they just do not get graded. That is the right failure.
  if (!check || !(form instanceof HTMLFormElement) || !lessonId) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = grade(check, new FormData(form));
    markItems(root, result);
    announce(root, result);
    if (result.passed) markComplete(lessonId);
  });
}

document.querySelectorAll<HTMLElement>('[data-course-check]').forEach(wire);
