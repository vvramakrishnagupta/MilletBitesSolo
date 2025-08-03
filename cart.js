const cart = [];

export function addToCart(product, quantity) {
  const idx = cart.findIndex(item => item.name === product.name);
  if (idx > -1) {
    cart[idx].quantity = quantity;
  } else {
    cart.push({ ...product, quantity });
  }
}

export function removeFromCart(productName) {
  const idx = cart.findIndex(item => item.name === productName);
  if (idx > -1) cart.splice(idx, 1);
}

export function getCart() {
  return cart;
}