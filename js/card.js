export function createCard(bookmarkSVG, question, answer, buttonText, cardTag) {
  return `
<article class="card">
          <button class="bookmark-btn" aria-label="Bookmark">
            ${bookmarkSVG}
          </button>
          <div class="card-elements">
            <div class="card-question">${question}</div>
            <div hidden class="card-answer">${answer}</div>
            <button class="card-button">${buttonText}</button>
            <div class="card-tags">
              <div class="card-tag">${cardTag}</div>
            </div>
          </div>
        </article>
`;
}
