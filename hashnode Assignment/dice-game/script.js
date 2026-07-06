'use strict';

/* ---------- Elements ---------- */
const players = document.querySelectorAll('.player');
const scoreEls = document.querySelectorAll('.score');
const currentScoreEls = document.querySelectorAll('.current-score');
const diceEl = document.querySelector('.dice');

const btnNew = document.getElementById('btn-new');
const btnRoll = document.getElementById('btn-roll');
const btnHold = document.getElementById('btn-hold');

/* ---------- Dice face generator (no external image needed) ---------- */
function pipLayout(n) {
  // 3x3 grid positions, 1 = pip visible
  const layouts = {
    1: [0,0,0, 0,1,0, 0,0,0],
    2: [1,0,0, 0,0,0, 0,0,1],
    3: [1,0,0, 0,1,0, 0,0,1],
    4: [1,0,1, 0,0,0, 1,0,1],
    5: [1,0,1, 0,1,0, 1,0,1],
    6: [1,0,1, 1,0,1, 1,0,1],
  };
  return layouts[n];
}

function diceSVG(n) {
  const cells = pipLayout(n);
  let pips = '';
  const coords = [
    [20,20], [50,20], [80,20],
    [20,50], [50,50], [80,50],
    [20,80], [50,80], [80,80],
  ];
  cells.forEach((show, i) => {
    if (show) {
      pips += `<circle cx="${coords[i][0]}" cy="${coords[i][1]}" r="9" fill="#c8115e"/>`;
    }
  });
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <rect x="2" y="2" width="96" height="96" rx="16" fill="#ffffff" stroke="#e5b8c8" stroke-width="3"/>
      ${pips}
    </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

function showDice(n) {
  diceEl.src = diceSVG(n);
  diceEl.classList.remove('hidden');
}

/* ---------- Game state ---------- */
let scores, currentScore, activePlayer, gameOver;

function initGame() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameOver = false;

  scoreEls.forEach(el => (el.textContent = 0));
  currentScoreEls.forEach(el => (el.textContent = 0));

  diceEl.classList.add('hidden');

  players.forEach(p => p.classList.remove('player--winner'));
  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');
}

function switchPlayer() {
  currentScoreEls[activePlayer].textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  players.forEach(p => p.classList.toggle('player--active'));
}

/* ---------- Roll dice ---------- */
btnRoll.addEventListener('click', function () {
  if (gameOver) return;

  const dice = Math.trunc(Math.random() * 6) + 1;
  showDice(dice);

  if (dice !== 1) {
    currentScore += dice;
    currentScoreEls[activePlayer].textContent = currentScore;
  } else {
    switchPlayer();
  }
});

/* ---------- Hold ---------- */
btnHold.addEventListener('click', function () {
  if (gameOver) return;

  scores[activePlayer] += currentScore;
  scoreEls[activePlayer].textContent = scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    gameOver = true;
    diceEl.classList.add('hidden');
    players[activePlayer].classList.add('player--winner');
    players[activePlayer].classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

/* ---------- New game ---------- */
btnNew.addEventListener('click', initGame);

/* ---------- Start ---------- */
initGame();
