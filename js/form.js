import { createCard } from "./card.js";

const showText = "Show answer";
const hideText = "Hide answer";

let cardsData = [];

const formElement = document.querySelector("[js-data='form-element']");
const cardSection = document.querySelector("[js-data='card-section']");

const attachCharCounters = () => {
  const fields = formElement.querySelectorAll("textarea, input[type='text']");

  fields.forEach((field) => {
    const maxLengthAttr = field.getAttribute("maxlength");
    const maxValue = Number(maxLengthAttr);

    const counter = document.createElement("span");
    counter.classList.add("char-count");

    const remaining = maxValue - field.value.length;
    counter.textContent = `${remaining} characters remaining`;
    field.parentNode.insertBefore(counter, field.nextSibling);

    field.addEventListener("input", () => {
      const remaining = maxValue - field.value.length;
      counter.textContent = `${remaining} character${
        remaining === 1 ? "" : "s"
      } remaining`;
    });
  });
};

attachCharCounters();

function renderCards() {
  cardSection.innerHTML = "";
  cardsData.forEach((data) => {
    const cardHTML = createCard(
      data.isBookmarked,
      data.question,
      data.answer,
      showText,
      data.tag
    );
    cardSection.insertAdjacentHTML("beforeend", cardHTML);
  });

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
        renderCards();
      });
    });
}

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if (data.question && data.answer) {
    data.isBookmarked = false;
    cardsData.push(data);
    renderCards();
  }

  e.target.reset();
  e.target.elements.question.focus();

  const fields = formElement.querySelectorAll("textarea, input[type='text']");
  fields.forEach((field) => {
    const maxValue = Number(field.getAttribute("maxlength"));
    const counter = field.nextElementSibling;
    if (counter && counter.classList.contains("char-count")) {
      counter.textContent = `${maxValue} characters remaining`;
    }
  });
});
