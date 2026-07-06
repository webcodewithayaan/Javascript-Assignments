'use strict';

const body = document.body;
const heading = document.getElementById('color-heading');
const hexCodeEl = document.getElementById('hex-code');
const btnFlip = document.getElementById('btn-flip');
const btnCopy = document.getElementById('btn-copy');
const modeHexBtn = document.getElementById('mode-hex');
const modeRgbBtn = document.getElementById('mode-rgb');

let mode = 'hex';
let currentR = 255, currentG = 255, currentB = 255;

function randomChannel() {
  return Math.floor(Math.random() * 256);
}

function rgbToHex(r, g, b) {
  const toHex = (c) => c.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function getContrastColor(r, g, b) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? '#111111' : '#ffffff';
}

function updateDisplay() {
  const bgColor = `rgb(${currentR}, ${currentG}, ${currentB})`;
  body.style.background = bgColor;

  const textColor = getContrastColor(currentR, currentG, currentB);
  heading.style.color = textColor;
  hexCodeEl.style.color = textColor;

  if (mode === 'hex') {
    hexCodeEl.textContent = rgbToHex(currentR, currentG, currentB);
  } else {
    hexCodeEl.textContent = bgColor;
  }
}

function flipColor() {
  currentR = randomChannel();
  currentG = randomChannel();
  currentB = randomChannel();
  updateDisplay();
}

function setMode(newMode) {
  mode = newMode;
  modeHexBtn.classList.toggle('active', mode === 'hex');
  modeRgbBtn.classList.toggle('active', mode === 'rgb');
  updateDisplay();
}

btnFlip.addEventListener('click', flipColor);

modeHexBtn.addEventListener('click', () => setMode('hex'));
modeRgbBtn.addEventListener('click', () => setMode('rgb'));

btnCopy.addEventListener('click', () => {
  const text = hexCodeEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const original = btnCopy.textContent;
    btnCopy.textContent = 'Copied!';
    setTimeout(() => (btnCopy.textContent = original), 1200);
  });
});

/* Start with a random color */
flipColor();
