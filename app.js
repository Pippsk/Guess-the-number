"use strict";
const tryAgainBtn = document.querySelector(".again");
const hiddenNumber = document.querySelector(".hidden_number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

let secretNumber = Math.floor(Math.random() * 20) + 1;

// hiddenNumber.textContent = secretNumber;

let scoring = 20;
let highscore = 0;

checkBtn.addEventListener("click", function () {
  const userGuess = Number(guess.value);
  //if is no number
  if (!userGuess) {
    message.textContent = "🚨No number!";
  }

  // if secret number === userGuess
  else if (userGuess === secretNumber) {
    hiddenNumber.textContent = secretNumber;
    message.textContent = "You Win! 🌞";
    document.body.style.backgroundColor = "green";
    message.style.fontSize = "3rem";
    if (scoring > highscore) {
      highscore = scoring;
      highScore.textContent = scoring;
    }
  }

  //if secret number !== userGuess
  else if (userGuess !== secretNumber) {
    if (scoring > 1) {
      scoring--;
      score.textContent = scoring;
    } else {
      score.textContent = 0;
      message.textContent = "😪 You lose!";
      document.body.style.backgroundColor = "red";
    }

    //if number is to big or to small
    message.textContent =
      userGuess > secretNumber ? "📈Number too big!" : "📉Number too small!";
  }
});

tryAgainBtn.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  scoring = 20;
  score.textContent = scoring;
  document.body.style.backgroundColor = "white";
  message.style.fontSize = "2rem";
  message.textContent = "Start Guessing!!!";
  hiddenNumber.textContent = "?";
  guess.value = "";
});
