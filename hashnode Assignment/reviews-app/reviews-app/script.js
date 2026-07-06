'use strict';

const avatarEl = document.getElementById('avatar');
const nameEl = document.getElementById('name');
const jobEl = document.getElementById('job');
const quoteEl = document.getElementById('quote');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSurprise = document.getElementById('btn-surprise');

const reviews = [
  {
    name: 'Susan Smith',
    job: 'Web Developer',
    quote: 'This product completely changed the way our team works. Setup was fast and support has been fantastic every step of the way.',
    color: '#3b7ddd',
  },
  {
    name: 'Michael Lee',
    job: 'Product Manager',
    quote: 'Clean design, smooth performance, and exactly the features we needed. I recommend it to every team I talk to.',
    color: '#e67e22',
  },
  {
    name: 'Amina Khan',
    job: 'UX Designer',
    quote: 'Intuitive from day one. Our onboarding time dropped dramatically and the whole team loves using it daily.',
    color: '#27ae60',
  },
  {
    name: 'Carlos Rivera',
    job: 'Software Engineer',
    quote: 'Rock solid and well documented. Integrating it into our stack took less than an afternoon.',
    color: '#8e44ad',
  },
  {
    name: 'Emma Wilson',
    job: 'Marketing Lead',
    quote: 'Our clients constantly compliment the experience. It just works, and it looks great doing it.',
    color: '#c0143c',
  },
];

let current = 0;

function initials(name) {
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

function avatarSvg(name, color) {
  const text = initials(name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140">
      <circle cx="70" cy="70" r="70" fill="${color}" />
      <text x="50%" y="50%" dy=".35em" text-anchor="middle"
            font-family="Segoe UI, Arial, sans-serif" font-size="52"
            font-weight="700" fill="#fff">${text}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function renderReview(index) {
  const review = reviews[index];
  avatarEl.src = avatarSvg(review.name, review.color);
  avatarEl.alt = review.name;
  nameEl.textContent = review.name;
  jobEl.textContent = review.job;
  quoteEl.textContent = review.quote;
}

btnPrev.addEventListener('click', () => {
  current = (current - 1 + reviews.length) % reviews.length;
  renderReview(current);
});

btnNext.addEventListener('click', () => {
  current = (current + 1) % reviews.length;
  renderReview(current);
});

btnSurprise.addEventListener('click', () => {
  let random = Math.floor(Math.random() * reviews.length);
  while (random === current && reviews.length > 1) {
    random = Math.floor(Math.random() * reviews.length);
  }
  current = random;
  renderReview(current);
});

renderReview(current);
