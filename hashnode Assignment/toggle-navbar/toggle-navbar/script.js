'use strict';

const btnToggle = document.getElementById('btn-toggle');
const btnClose = document.getElementById('btn-close');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

function openMenu() {
  navLinks.classList.add('show');
  overlay.classList.add('show');
}

function closeMenu() {
  navLinks.classList.remove('show');
  overlay.classList.remove('show');
}

btnToggle.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
