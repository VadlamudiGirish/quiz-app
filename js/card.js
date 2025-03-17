const checkedBookMarkSVG = `
<svg
  class="card-bookmark lucide lucide-bookmark"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
  <path d="m9 10 2 2 4-4" />
</svg>
`;

const unCheckedBookMarkSVG = `
<svg
  class="card-bookmark lucide lucide-bookmark"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
</svg>
`;

export function createCard(
  bookmarked = false,
  question,
  answer,
  buttonText,
  cardTag
) {
  // Choose the proper SVG based on bookmarked state
  const svg = bookmarked ? checkedBookMarkSVG : unCheckedBookMarkSVG;

  // Create the main article element with class "card"
  const article = document.createElement("article");
  article.classList.add("card");

  // Create the bookmark button and set its attributes
  const bookmarkBtn = document.createElement("button");
  bookmarkBtn.classList.add("bookmark-btn");
  bookmarkBtn.setAttribute("aria-label", "Bookmark");
  bookmarkBtn.setAttribute("js-data", "bookmark-button");
  // Insert the SVG as innerHTML because it's an SVG string
  bookmarkBtn.innerHTML = svg;
  article.appendChild(bookmarkBtn);

  // Create a container for the card elements
  const cardElements = document.createElement("div");
  cardElements.classList.add("card-elements");

  // Create the question element
  const cardQuestion = document.createElement("div");
  cardQuestion.classList.add("card-question");
  cardQuestion.textContent = question;
  cardElements.appendChild(cardQuestion);

  // Create the answer element, set it to hidden and add attributes
  const cardAnswer = document.createElement("div");
  cardAnswer.classList.add("card-answer");
  cardAnswer.setAttribute("hidden", "");
  cardAnswer.setAttribute("js-data", "answer");
  cardAnswer.textContent = answer;
  cardElements.appendChild(cardAnswer);

  // Create the button element for the card and set its text
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.setAttribute("js-data", "card-button");
  cardButton.textContent = buttonText;
  cardElements.appendChild(cardButton);

  // Append the card elements container to the article
  article.appendChild(cardElements);

  // Create a container for the card tags
  const cardTags = document.createElement("div");
  cardTags.classList.add("card-tags");

  // Create the individual tag element with the hash prefix
  const cardTagEl = document.createElement("div");
  cardTagEl.classList.add("card-tag");
  cardTagEl.textContent = `#${cardTag}`;
  cardTags.appendChild(cardTagEl);

  // Append the tag container to the article
  article.appendChild(cardTags);

  // Return the complete card element
  return article;
}
