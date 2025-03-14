import { createCard } from "./card.js";

let isBookmarked = true;
const question = "What does HTML stand for?";
const answer = "Hyper Text Markup Language";
const showText = "Show answer";
const hideText = "Hide answer";
const cardTag = "#html";

const cardSection = document.querySelector("[js-data = 'card-section']");

const renderCard = () => {
  cardSection.innerHTML = "";
  const cardHTML = createCard(
    isBookmarked,
    question,
    answer,
    showText,
    cardTag
  );

  cardSection.insertAdjacentHTML("beforeend", cardHTML);

  const bookmarkButton = document.querySelector("[js-data='bookmark-button']");

  const cardButton = document.querySelector("[js-data='card-button']");
  const answerElement = document.querySelector("[js-data='answer']");

  cardButton.addEventListener("click", () => {
    answerElement.hidden = !answerElement.hidden;
    cardButton.textContent = answerElement.hidden ? showText : hideText;
  });

  bookmarkButton.addEventListener("click", () => {
    isBookmarked = !isBookmarked;
    renderCard();
  });
};

renderCard();
