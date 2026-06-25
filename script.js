const products = [
  {
    title: 'Ergonomic Wireless Mouse',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80',
    reviews: '4.8 • 1.2k reviews'
  },
  {
    title: 'Noise-Cancelling Headphones',
    price: '$129.00',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    reviews: '4.7 • 980 reviews'
  },
  {
    title: 'Smart LED Lamp',
    price: '$44.50',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80',
    reviews: '4.6 • 640 reviews'
  },
  {
    title: 'Portable Laptop Stand',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
    reviews: '4.5 • 420 reviews'
  },
  {
    title: 'Ultra-Slim Water Bottle',
    price: '$18.50',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
    reviews: '4.4 • 310 reviews'
  },
  {
    title: 'Cozy Throw Blanket',
    price: '$24.95',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    reviews: '4.9 • 760 reviews'
  },
  {
    title: 'Smart Fitness Tracker',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    reviews: '4.7 • 530 reviews'
  },
  {
    title: 'Portable Bluetooth Speaker',
    price: '$34.95',
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    reviews: '4.6 • 410 reviews'
  },
  {
    title: 'Minimalist Desk Organizer',
    price: '$22.00',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    reviews: '4.3 • 280 reviews'
  },
  {
    title: 'Baggy Cargo Pants',
    price: '$39.50',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    reviews: '4.8 • 690 reviews'
  },
  {
    title: 'Relaxed Fit Baggy Pants',
    price: '$44.00',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    reviews: '4.7 • 510 reviews'
  },
  {
    title: 'Classic Denim Jacket',
    price: '$54.99',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    reviews: '4.6 • 470 reviews'
  },
  {
    title: 'Lightweight Bomber Jacket',
    price: '$62.50',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    reviews: '4.8 • 620 reviews'
  },
  {
    title: 'Urban Windbreaker',
    price: '$48.00',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
    reviews: '4.5 • 360 reviews'
  },
  {
    title: 'Oversized Hoodie',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    reviews: '4.7 • 540 reviews'
  },
  {
    title: 'Graphic T-Shirt',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    reviews: '4.4 • 410 reviews'
  },
  {
    title: 'Leather Crossbody Bag',
    price: '$49.00',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    reviews: '4.6 • 390 reviews'
  },
  {
    title: 'Gaming Keyboard',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    reviews: '4.9 • 820 reviews'
  },
  {
    title: 'Mechanical Keyboard Switch Set',
    price: '$24.50',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    reviews: '4.8 • 610 reviews'
  },
  {
    title: 'RGB PC Fan Kit',
    price: '$34.50',
    image: 'https://images.unsplash.com/photo-1591799265444-d66432b91588?auto=format&fit=crop&w=900&q=80',
    reviews: '4.7 • 470 reviews'
  },
  {
    title: 'SSD 1TB NVMe',
    price: '$99.99',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    reviews: '4.9 • 900 reviews'
  },
  {
    title: 'USB-C Hub',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80',
    reviews: '4.6 • 520 reviews'
  },
  {
    title: 'Wireless Earbuds',
    price: '$59.50',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80',
    reviews: '4.8 • 720 reviews'
  },
  {
    title: 'Travel Backpack',
    price: '$42.00',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    reviews: '4.5 • 380 reviews'
  },
  {
    title: 'Desk Lamp',
    price: '$29.00',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    reviews: '4.4 • 330 reviews'
  },
  {
    title: 'Coffee Maker',
    price: '$64.99',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    reviews: '4.7 • 560 reviews'
  },
  {
    title: 'Yoga Mat',
    price: '$27.50',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    reviews: '4.6 • 440 reviews'
  },
  {
    title: 'Ceramic Mug Set',
    price: '$22.99',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
    reviews: '4.5 • 320 reviews'
  },
  {
    title: 'Smart Thermostat',
    price: '$119.00',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
    reviews: '4.8 • 670 reviews'
  },
  {
    title: 'Portable Charger',
    price: '$31.99',
    image: 'https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?auto=format&fit=crop&w=900&q=80',
    reviews: '4.6 • 460 reviews'
  },
  {
    title: 'Running Shoes',
    price: '$74.95',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    reviews: '4.7 • 590 reviews'
  },
  {
    title: 'Winter Beanie',
    price: '$15.00',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    reviews: '4.4 • 250 reviews'
  },
  {
    title: 'Sunglasses',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    reviews: '4.5 • 310 reviews'
  },
  {
    title: 'Slim Fit Jeans',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    reviews: '4.6 • 470 reviews'
  },
  {
    title: 'Fleece Jacket',
    price: '$54.00',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    reviews: '4.7 • 510 reviews'
  },
  {
    title: 'Canvas Sneakers',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    reviews: '4.8 • 590 reviews'
  },
  {
    title: 'Portable Mini Fan',
    price: '$19.50',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    reviews: '4.4 • 240 reviews'
  },
  {
    title: 'Air Purifier',
    price: '$89.00',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    reviews: '4.8 • 680 reviews'
  }
];

const productsGrid = document.querySelector('#products-grid');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('.search-bar button');

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('amazonCart') || '[]');
  const existingItem = cart.find((item) => item.title === product.title);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('amazonCart', JSON.stringify(cart));
}

function renderProducts(term = '') {
  if (!productsGrid) return;

  const query = term.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  productsGrid.innerHTML = '';

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<p class="no-results">No products found.</p>';
    return;
  }

  filteredProducts.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <div class="reviews">⭐ ${product.reviews}</div>
      <div class="price">${product.price}</div>
      <button class="add-to-cart">Add to Cart</button>
    `;

    const button = card.querySelector('.add-to-cart');
    button.addEventListener('click', () => {
      addToCart(product);
      button.textContent = 'Added';
    });

    productsGrid.appendChild(card);
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    renderProducts(event.target.value);
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      renderProducts(searchInput.value);
    }
  });
}

if (searchButton) {
  searchButton.addEventListener('click', () => {
    renderProducts(searchInput.value);
  });
}

renderProducts();
