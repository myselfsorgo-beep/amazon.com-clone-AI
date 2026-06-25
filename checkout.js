document.querySelector('.checkout-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = 'order-confirmed.html';
});
