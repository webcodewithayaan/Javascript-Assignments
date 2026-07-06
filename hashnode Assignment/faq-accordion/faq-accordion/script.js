'use strict';

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const icon = item.querySelector('.icon');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all other items (accordion behaviour)
    faqItems.forEach(other => {
      other.classList.remove('active');
      other.querySelector('.icon').textContent = '+';
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
      icon.textContent = '−';
    }
  });
});
