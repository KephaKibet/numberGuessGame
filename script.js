'use strict';

// console.log(document.querySelector(`.message`).textContent)

// document.querySelector(`.message`).textContent = `✨ correct number`

// document.querySelector(`.number`).textContent = 13
// document.querySelector(`.score`).textContent = 10

// document.querySelector(`.guess`).value = 23

// console.log(document.querySelector(`.guess`).value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  //no input
  if (!guess) {
    document.querySelector(`.message`).textContent = ` ⛔ enter number`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = ` ✨Correct Number`;
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    } //guess high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `🤦‍♂️ Too High`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `🤦‍♂️ LOSER!`;
      document.querySelector(`.score`).textContent = 0;
    }
    //guess low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `🤦‍♂️ Too Low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `🤦‍♂️ LOSER!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  const guess = Number(document.querySelector(`.guess`).value);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guesssing ...`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
