//Create Question Card
const form = document.querySelector('[data-js="form"]');
const addedCard = document.querySelector('[data-js="added-card"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //create a new unordered list

  const newListItem = document.createElement("li");
  newListItem.classList.add("card-list__item")
  addedCard.append(newListItem);

  //create new Card
  const newQuestionCard = document.createElement("article");
  newQuestionCard.classList.add("card")
  newListItem.append(newQuestionCard);

  //create new question text
  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("card__question");
  newQuestion.textContent = data.inputQuestion;
  newQuestionCard.append(newQuestion);

  //create new answer text
  const newAnswer = document.createElement("p");
  newAnswer.textContent = data.inputAnswer;
  newQuestionCard.append(newAnswer);

  //create new tag container
  const newTagContainer = document.createElement("ul");
  newQuestionCard.append(newTagContainer);

  //create new tags
  const newTag = document.createElement("li");
  newTag.classList.add("card__tag-list-item");
  newTag.textContent = `#${data.inputTag}`;
  newTagContainer.append(newTag);

  //reset formular
  event.target.reset();
  event.target.elements.inputQuestion.focus();

});

////////////////////////////////////////////////////////////////////////////////

//formfield textcounter

//question counter
const questionElement = document.querySelector('[data-js="input-question"]');
questionElement.textContent = ""                                              //<--empty for text content bug

questionElement.addEventListener("input", () => {
  const amountLeft = document.querySelector('[data-js="amountLeft1"]');
  const maxLength = questionElement.getAttribute("maxlength");
  const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);
updateAmountLeft(maxLength - questionElement.value.length);
});


//answer counter
const answerElement = document.querySelector('[data-js="input-answer"]');
answerElement.textContent = "";                                               //<--empty for text content bug
answerElement.addEventListener("input", () => {

const amountLeft = document.querySelector('[data-js="amountLeft2"]');
const maxLength = questionElement.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);
updateAmountLeft(maxLength - answerElement.value.length);
});