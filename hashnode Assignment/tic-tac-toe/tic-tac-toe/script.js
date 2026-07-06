'use strict';

const boardEl = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const statusEl = document.getElementById('status');
const turnIndicator = document.getElementById('turn-indicator');
const btnReset = document.getElementById('btn-reset');

const scoreXEl = document.getElementById('score-x');
const scoreOEl = document.getElementById('score-o');
const scoreDrawEl = document.getElementById('score-draw');

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],           // diagonals
];

let board, currentPlayer, gameActive;
let scores = { X: 0, O: 0, draw: 0 };

function init() {
  board = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;

  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'o', 'win');
  });

  turnIndicator.textContent = currentPlayer;
  statusEl.innerHTML = `Player <span id="turn-indicator">${currentPlayer}</span>'s turn`;
}

function checkWinner() {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return combo;
    }
  }
  return null;
}

function handleCellClick(e) {
  const index = +e.target.dataset.index;

  if (!gameActive || board[index] !== '') return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer.toLowerCase());

  const winCombo = checkWinner();

  if (winCombo) {
    gameActive = false;
    winCombo.forEach(i => cells[i].classList.add('win'));
    scores[currentPlayer]++;
    updateScoreboard();
    statusEl.textContent = `Player ${currentPlayer} wins! 🎉`;
    return;
  }

  if (board.every(cell => cell !== '')) {
    gameActive = false;
    scores.draw++;
    updateScoreboard();
    statusEl.textContent = `It's a draw! 🤝`;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusEl.innerHTML = `Player <span id="turn-indicator">${currentPlayer}</span>'s turn`;
}

function updateScoreboard() {
  scoreXEl.textContent = scores.X;
  scoreOEl.textContent = scores.O;
  scoreDrawEl.textContent = scores.draw;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
btnReset.addEventListener('click', init);

init();
