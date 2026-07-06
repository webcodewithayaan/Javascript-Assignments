'use strict';

const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
const RESULTS_PER_PAGE = 10;

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');
const pagination = document.getElementById('pagination');
const recipePanel = document.getElementById('recipe-panel');
const btnBookmarks = document.getElementById('btn-bookmarks');
const bookmarkCountEl = document.getElementById('bookmark-count');

const state = {
  query: '',
  results: [],
  page: 1,
  currentRecipe: null,
  bookmarks: JSON.parse(localStorage.getItem('forkify-bookmarks')) || [],
};

function updateBookmarkCount() {
  bookmarkCountEl.textContent = state.bookmarks.length ? `(${state.bookmarks.length})` : '';
}

function saveBookmarks() {
  localStorage.setItem('forkify-bookmarks', JSON.stringify(state.bookmarks));
  updateBookmarkCount();
}

function isBookmarked(id) {
  return state.bookmarks.some(b => b.id === id);
}

/* ---------------- Search ---------------- */

async function searchRecipes(query) {
  resultsList.innerHTML = `<li class="message" style="padding:40px 10px;"><div class="spinner"></div></li>`;
  pagination.innerHTML = '';

  try {
    const res = await fetch(`${API_URL}?search=${encodeURIComponent(query)}`);
    const data = await res.json();

    if (data.status !== 'success' || !data.data.recipes.length) {
      resultsList.innerHTML = `
        <li class="error" style="padding:30px 10px;">
          <span class="icon">😕</span>
          <p>No recipes found for "${query}". Try another search.</p>
        </li>`;
      return;
    }

    state.results = data.data.recipes;
    state.page = 1;
    renderResults();
  } catch (err) {
    resultsList.innerHTML = `
      <li class="error" style="padding:30px 10px;">
        <span class="icon">⚠️</span>
        <p>Something went wrong fetching recipes. Please try again.</p>
      </li>`;
  }
}

function renderResults() {
  const start = (state.page - 1) * RESULTS_PER_PAGE;
  const end = start + RESULTS_PER_PAGE;
  const pageResults = state.results.slice(start, end);

  resultsList.innerHTML = pageResults
    .map(
      r => `
      <li class="result-item ${state.currentRecipe && state.currentRecipe.id === r.id ? 'active' : ''}" data-id="${r.id}">
        <img src="${r.image_url}" alt="${r.title}" loading="lazy">
        <div>
          <p class="r-title">${r.title}</p>
          <p class="r-publisher">${r.publisher}</p>
        </div>
      </li>`
    )
    .join('');

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(state.results.length / RESULTS_PER_PAGE);
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let html = '';
  if (state.page > 1) {
    html += `<button class="page-btn" id="btn-prev">⬅ Page ${state.page - 1}</button>`;
  } else {
    html += `<span></span>`;
  }

  if (state.page < totalPages) {
    html += `<button class="page-btn" id="btn-next">Page ${state.page + 1} ➡</button>`;
  }

  pagination.innerHTML = html;

  document.getElementById('btn-prev')?.addEventListener('click', () => {
    state.page--;
    renderResults();
  });
  document.getElementById('btn-next')?.addEventListener('click', () => {
    state.page++;
    renderResults();
  });
}

/* ---------------- Single Recipe ---------------- */

async function loadRecipe(id) {
  recipePanel.innerHTML = `<div class="spinner-wrap"><div class="spinner"></div></div>`;

  try {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();

    if (data.status !== 'success') throw new Error('Recipe not found');

    const r = data.data.recipe;
    state.currentRecipe = {
      id: r.id,
      title: r.title,
      publisher: r.publisher,
      sourceUrl: r.source_url,
      image: r.image_url,
      servings: r.servings,
      originalServings: r.servings,
      cookingTime: r.cooking_time,
      ingredients: r.ingredients,
    };

    renderRecipe();
    renderResults();
  } catch (err) {
    recipePanel.innerHTML = `
      <div class="error">
        <span class="icon">⚠️</span>
        <p>Could not load this recipe. Please try another one.</p>
      </div>`;
  }
}

function renderRecipe() {
  const r = state.currentRecipe;
  const bookmarked = isBookmarked(r.id);

  recipePanel.innerHTML = `
    <div class="recipe-image-wrap">
      <img src="${r.image}" alt="${r.title}">
      <div class="recipe-title-banner">${r.title}</div>
    </div>

    <div class="recipe-info-row">
      <span class="info-item">⏱️ ${r.cookingTime} MINUTES</span>

      <span class="info-item servings-controls">
        👤 <span id="servings-value">${r.servings}</span> SERVINGS
        <button id="btn-dec">−</button>
        <button id="btn-inc">+</button>
      </span>

      <button class="btn-round ${bookmarked ? 'active' : ''}" id="btn-bookmark-toggle" title="Bookmark">🔖</button>
    </div>

    <p class="recipe-section-title">Recipe Ingredients</p>
    <ul class="ingredients-list" id="ingredients-list"></ul>

    <div class="how-to-cook">
      <h4>HOW TO COOK IT</h4>
      <p>This recipe was carefully designed and tested by ${r.publisher}. Please check out directions at their website.</p>
      <a href="${r.sourceUrl}" target="_blank" rel="noopener">Directions ↗</a>
    </div>
  `;

  renderIngredients(r.servings);

  document.getElementById('btn-inc').addEventListener('click', () => changeServings(1));
  document.getElementById('btn-dec').addEventListener('click', () => changeServings(-1));
  document.getElementById('btn-bookmark-toggle').addEventListener('click', toggleBookmark);
}

function renderIngredients(servings) {
  const r = state.currentRecipe;
  const list = document.getElementById('ingredients-list');

  list.innerHTML = r.ingredients
    .map(ing => {
      const scaledQty = ing.quantity ? formatQty(ing.quantity * (servings / r.originalServings)) : '';
      return `
      <li>
        <span class="quantity">${scaledQty}</span>
        <span>${ing.unit ? ing.unit + ' ' : ''}${ing.description}</span>
      </li>`;
    })
    .join('');
}

function formatQty(num) {
  return Math.round(num * 100) / 100;
}

function changeServings(delta) {
  const r = state.currentRecipe;
  if (!r.originalServings) r.originalServings = r.servings;

  const newServings = r.servings + delta;
  if (newServings < 1) return;

  r.servings = newServings;
  document.getElementById('servings-value').textContent = r.servings;
  renderIngredients(r.servings);
}

function toggleBookmark() {
  const r = state.currentRecipe;

  if (isBookmarked(r.id)) {
    state.bookmarks = state.bookmarks.filter(b => b.id !== r.id);
  } else {
    state.bookmarks.push({ id: r.id, title: r.title, image_url: r.image, publisher: r.publisher });
  }

  saveBookmarks();
  document.getElementById('btn-bookmark-toggle').classList.toggle('active');
}

/* ---------------- Events ---------------- */

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;
  state.query = query;
  searchRecipes(query);
});

resultsList.addEventListener('click', e => {
  const item = e.target.closest('.result-item');
  if (!item) return;
  loadRecipe(item.dataset.id);
});

btnBookmarks.addEventListener('click', () => {
  if (!state.bookmarks.length) {
    resultsList.innerHTML = `
      <li class="message" style="padding:30px 10px;">
        <span class="icon">🔖</span>
        <p>No bookmarks yet. Find a nice recipe and bookmark it!</p>
      </li>`;
    pagination.innerHTML = '';
    return;
  }

  state.results = state.bookmarks;
  state.page = 1;
  renderResults();
});

updateBookmarkCount();
