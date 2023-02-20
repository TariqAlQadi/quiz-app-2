//toggle answer buttons homepage

const answerButton = document.querySelector('[data-js="answer-button"]');

answerButton.addEventListener("click", () => {
  const element = document.getElementById("answer");
  element.classList.toggle("card__answer--active");

  const hidden = document.getElementById("answer-button")

  if (hidden.textContent === "Hide answer") {
    hidden.textContent = "Show answer";
  }else {
    hidden.textContent = "Hide answer"
  }

});

//toggle bookmark button homepage

const bookmarkButton = document.querySelector('[data-js=bookmark]')

bookmarkButton.addEventListener("click", () => {
    const element = document.getElementById("bookmark")
    element.classList.toggle("bookmark--active")
    
});