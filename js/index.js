import { createCard } from "./card.js";

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

const question = "What does HTML stand for?";
const answer = "Hyper Text Markup Language";
const buttonText = "Show answer";
const cardTag = "#html";

const bookmarkedCard = createCard(
  checkedBookMarkSVG,
  question,
  answer,
  buttonText,
  cardTag
);

const card = createCard(
  unCheckedBookMarkSVG,
  question,
  answer,
  buttonText,
  cardTag
);

const cardSection = document.querySelector("[js-data = 'card-section']");

cardSection.insertAdjacentHTML("beforeend", bookmarkedCard);
cardSection.insertAdjacentHTML("beforeend", card);
cardSection.insertAdjacentHTML("beforeend", card);
cardSection.insertAdjacentHTML("beforeend", bookmarkedCard);

console.log(card);
