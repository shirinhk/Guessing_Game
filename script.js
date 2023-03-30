'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;
const header = document.querySelector('.header');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();

  // no input
  if (!guess) {
    displayMessage('👀 No Number?!');

    // correct input
  } else if (guess === secretNumber) {
    displayMessage('Great Job!');
    document.querySelector('.number').textContent = secretNumber;
    header.classList.add('play');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? `${guess} is greater than my chosen number!`
          : `${guess} is less than my chosen number!`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost this game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const number = document.querySelector('.number');
const originalText = number.innerHTML;

const message = document.querySelector('.message');
const originalText2 = message.innerHTML;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  number.innerHTML = originalText;
  message.innerHTML = originalText2;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
