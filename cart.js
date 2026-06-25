const cartContainer = document.querySelector('#cart-items');
const totalLabel = document.querySelector('.cart-summary strong');

function getCartItems() {
  return JSON.parse(localStorage.getItem('amazonCart') || '[]');
}

function renderCart() {
  const cartItems = getCartItems();

  if (!cartContainer) return;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    if (totalLabel) totalLabel.textContent = 'Total: $0.00';
    return;
  }

  cartContainer.innerHTML = '';
  let total = 0;

  cartItems.forEach((item) => {
    const quantity = item.quantity || 1;
    const priceNumber = Number(item.price.replace(/[^0-9.]/g, '')) * quantity;
    total += priceNumber;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div>
        <strong>${item.title}</strong>
        <p>${item.price} × ${quantity}</p>
      </div>
      <div class="cart-actions">
        <button class="qty-btn" data-title="${item.title}" data-action="decrease">−</button>
        <span class="quantity">${quantity}</span>
        <button class="qty-btn" data-title="${item.title}" data-action="increase">+</button>
        <button class="remove-btn" data-title="${item.title}">Remove</button>
      </div>
    `;
    cartContainer.appendChild(row);
  });

  if (totalLabel) totalLabel.textContent = `Total: $${total.toFixed(2)}`;
}

cartContainer?.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const title = button.getAttribute('data-title');
  const action = button.getAttribute('data-action');
  const cartItems = getCartItems();

  if (button.classList.contains('remove-btn')) {
    const updatedCart = cartItems.filter((item) => item.title !== title);
    localStorage.setItem('amazonCart', JSON.stringify(updatedCart));
    window.location.reload();
    return;
  }

  const targetItem = cartItems.find((item) => item.title === title);
  if (!targetItem) return;

  if (action === 'increase') {
    targetItem.quantity = (targetItem.quantity || 1) + 1;
  } else if (action === 'decrease') {
    targetItem.quantity = (targetItem.quantity || 1) - 1;
    if (targetItem.quantity <= 0) {
      const updatedCart = cartItems.filter((item) => item.title !== title);
      localStorage.setItem('amazonCart', JSON.stringify(updatedCart));
      window.location.reload();
      return;
    }
  }

  localStorage.setItem('amazonCart', JSON.stringify(cartItems));
  renderCart();
});

renderCart();
