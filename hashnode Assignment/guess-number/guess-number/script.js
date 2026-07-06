'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const numberEl = document.getElementById('number');
const messageEl = document.getElementById('message');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');
const guessInput = document.getElementById('guess');
const btnCheck = document.getElementById('btn-check');
const btnAgain = document.getElementById('btn-again');

function setMessage(text) {
  messageEl.textContent = text;
}

btnCheck.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // No input
  if (!guess) {
    setMessage('⛔ No number!');
    return;
  }

  // Player wins
  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    numberEl.textContent = secretNumber;
    document.body.classList.remove('lose-bg');
    document.body.classList.add('win-bg');

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      setMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
      document.body.classList.add('lose-bg');
    }
  }
});

btnAgain.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.body.classList.remove('win-bg', 'lose-bg');
  setMessage('Start guessing...');
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessInput.value = '';
});
