'use strict';

const form = document.getElementById('grocery-form');
const input = document.getElementById('item-input');
const list = document.getElementById('list');
const btnClear = document.getElementById('btn-clear');
const alertEl = document.getElementById('alert');

let editElement = null;
let editID = '';
let isEditing = false;

function showAlert(text, type) {
  alertEl.textContent = text;
  alertEl.className = `alert show ${type}`;
  setTimeout(() => {
    alertEl.className = 'alert';
  }, 1500);
}

function createListItem(id, value) {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.dataset.id = id;

  li.innerHTML = `
    <span>${value}</span>
    <div class="icons">
      <button class="icon-edit" aria-label="edit">✏️</button>
      <button class="icon-delete" aria-label="delete">🗑️</button>
    </div>
  `;

  list.appendChild(li);
}

function addItem(e) {
  e.preventDefault();
  const value = input.value.trim();
  const id = Date.now().toString();

  if (!value) {
    showAlert('Please enter a value', 'danger');
    return;
  }

  if (isEditing) {
    editElement.querySelector('span').textContent = value;
    showAlert('Item updated', 'success');
    isEditing = false;
    editElement = null;
    saveItems();
  } else {
    createListItem(id, value);
    showAlert('Item added', 'success');
    saveItems();
  }

  input.value = '';
}

list.addEventListener('click', function (e) {
  const li = e.target.closest('.list-item');
  if (!li) return;

  if (e.target.classList.contains('icon-delete')) {
    li.remove();
    showAlert('Item removed', 'danger');
    saveItems();
  }

  if (e.target.classList.contains('icon-edit')) {
    isEditing = true;
    editElement = li;
    input.value = li.querySelector('span').textContent;
    input.focus();
  }
});

btnClear.addEventListener('click', function () {
  list.innerHTML = '';
  showAlert('All items cleared', 'danger');
  saveItems();
});

function saveItems() {
  const items = [...list.querySelectorAll('.list-item span')].map(s => s.textContent);
  localStorage.setItem('groceryItems', JSON.stringify(items));
}

function loadItems() {
  const items = JSON.parse(localStorage.getItem('groceryItems')) || [];
  items.forEach(value => createListItem(Date.now() + Math.random(), value));
}

form.addEventListener('submit', addItem);

loadItems();
