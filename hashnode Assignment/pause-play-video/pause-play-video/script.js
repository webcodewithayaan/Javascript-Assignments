'use strict';

const video = document.getElementById('video');
const toggle = document.getElementById('toggle');

// checked = playing, unchecked = paused
toggle.addEventListener('change', function () {
  if (toggle.checked) {
    video.play();
  } else {
    video.pause();
  }
});

// Try to autoplay on load (muted videos are allowed to autoplay in most browsers)
window.addEventListener('load', () => {
  video.play().catch(() => {
    // Autoplay was blocked; reflect paused state in the toggle
    toggle.checked = false;
  });
});
