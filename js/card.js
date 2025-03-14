const checkedBookMarkSVG = `
<svg
    class="card-bookmark"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-bookmark"
>
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
    <path d="m9 10 2 2 4-4" />
</svg>
`;

const unCheckedBookMarkSVG = `
<svg
    class="card-bookmark"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-bookmark"
>
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
</svg>
`;

export function createCard(bookmarked, question, answer, buttonText, cardTag) {
  const svg = bookmarked ? checkedBookMarkSVG : unCheckedBookMarkSVG;
  return `
<article class="card">
          <button class="bookmark-btn" aria-label="Bookmark" js-data="bookmark-button">
            ${svg}
          </button>
          <div class="card-elements">
            <div class="card-question">${question}</div>
            <div hidden class="card-answer" js-data="answer">${answer}</div>
            <button class="card-button" js-data="card-button">${buttonText}</button>
            <div class="card-tags">
              <div class="card-tag">${cardTag}</div>
            </div>
          </div>
        </article>
`;
}
