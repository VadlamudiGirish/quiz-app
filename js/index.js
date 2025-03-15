import { createCard } from "./card.js";

const showText = "Show answer";
const hideText = "Hide answer";

const cardsData = [
  {
    isBookmarked: false,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    cardTag: "html",
  },
  {
    isBookmarked: false,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    cardTag: "css",
  },
  {
    isBookmarked: false,
    question: "What does JS stand for?",
    answer: "JavaScript",
    cardTag: "js",
  },
];

const cardSection = document.querySelector("[js-data='card-section']");

const renderCards = () => {
  cardSection.innerHTML = ""; // Clear previous cards

  cardsData.forEach((card, index) => {
    const cardHTML = createCard(
      card.isBookmarked,
      card.question,
      card.answer,
      showText,
      card.cardTag
    );

    cardSection.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Add event listeners for all rendered cards
  document
    .querySelectorAll("[js-data='card-button']")
    .forEach((button, index) => {
      button.addEventListener("click", () => {
        const answerElement =
          document.querySelectorAll("[js-data='answer']")[index];
        answerElement.hidden = !answerElement.hidden;
        button.textContent = answerElement.hidden ? showText : hideText;
      });
    });

  document
    .querySelectorAll("[js-data='bookmark-button']")
    .forEach((button, index) => {
      button.addEventListener("click", () => {
        cardsData[index].isBookmarked = !cardsData[index].isBookmarked;
        renderCards(); // Re-render to reflect bookmark changes
      });
    });
};

renderCards();
