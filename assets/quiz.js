/**
 * SDD Learning — Quiz Widget
 *
 * Usage in any lesson:
 *   <div class="quiz" data-answer="2">
 *     <p class="quiz-question">What is the primary artifact in SDD?</p>
 *     <ul class="quiz-options">
 *       <li>The source code</li>
 *       <li>The chat prompt</li>
 *       <li>The specification</li>        <!-- index 2 (0-based) — correct -->
 *       <li>The pull request</li>
 *     </ul>
 *     <div class="quiz-feedback correct">Correct! The spec is the single source of truth.</div>
 *     <div class="quiz-feedback wrong">Not quite. In SDD, the <em>specification</em> — not the code — is the primary artifact.</div>
 *   </div>
 *
 * data-answer: 0-based index of the correct option.
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach(quiz => {
    const correctIdx = parseInt(quiz.dataset.answer, 10);
    const options    = quiz.querySelectorAll('.quiz-options li');
    const fbCorrect  = quiz.querySelector('.quiz-feedback.correct');
    const fbWrong    = quiz.querySelector('.quiz-feedback.wrong');
    let answered     = false;

    options.forEach((li, idx) => {
      li.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        options.forEach(o => o.classList.add('disabled'));

        if (idx === correctIdx) {
          li.classList.add('correct');
          if (fbCorrect) { fbCorrect.classList.add('show'); }
        } else {
          li.classList.add('wrong');
          options[correctIdx].classList.add('correct');
          if (fbWrong) { fbWrong.classList.add('show'); }
        }
      });
    });
  });
});
