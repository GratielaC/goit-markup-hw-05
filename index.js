// Elements
const btn = document.getElementById('orderServiceBtn');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.querySelector('.btn-close-modal');

// Show modal
btn.onclick = function() {
  backdrop.classList.add('is-open');
}

// Hide modal
closeBtn.onclick = function() {
  backdrop.classList.remove('is-open');
}

// Hide modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == backdrop) {
    backdrop.classList.remove('is-open');
  }
}