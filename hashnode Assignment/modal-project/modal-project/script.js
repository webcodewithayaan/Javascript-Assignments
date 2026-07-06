'use strict';

const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

function openModal() {
  modal.classList.add('show');
  overlay.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
}

btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});
