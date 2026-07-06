'use strict';

const menuItems = [
  {
    title: 'Pancake Stack',
    price: '$8',
    category: 'breakfast',
    desc: 'Fluffy pancakes with maple syrup and fresh berries.',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Classic Omelette',
    price: '$7',
    category: 'breakfast',
    desc: 'Three-egg omelette with cheese, peppers and onions.',
    img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Club Sandwich',
    price: '$9',
    category: 'lunch',
    desc: 'Triple-decker sandwich with turkey, bacon, lettuce and tomato.',
    img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Garden Salad',
    price: '$6',
    category: 'lunch',
    desc: 'Fresh greens, cherry tomatoes, cucumber and house dressing.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Spaghetti Bolognese',
    price: '$12',
    category: 'dinner',
    desc: 'Slow-cooked beef ragu tossed with spaghetti and parmesan.',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Grilled Chicken',
    price: '$14',
    category: 'dinner',
    desc: 'Herb-marinated chicken breast with roasted vegetables.',
    img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Cappuccino',
    price: '$4',
    category: 'drinks',
    desc: 'Espresso topped with steamed milk foam.',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Fresh Orange Juice',
    price: '$3',
    category: 'drinks',
    desc: 'Freshly squeezed oranges, no added sugar.',
    img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=60',
  },
];

const menuGrid = document.getElementById('menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const yearEl = document.getElementById('year');

function renderMenu(category) {
  const filtered =
    category === 'all' ? menuItems : menuItems.filter(item => item.category === category);

  menuGrid.innerHTML = filtered
    .map(
      item => `
      <div class="menu-item">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="details">
          <div class="item-title-row">
            <h3>${item.title}</h3>
            <span class="price">${item.price}</span>
          </div>
          <p>${item.desc}</p>
        </div>
      </div>`
    )
    .join('');
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.category);
  });
});

yearEl.textContent = new Date().getFullYear();
renderMenu('all');
