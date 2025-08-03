const cart = [];

export function addToCart(product, quantity) {
  const idx = cart.findIndex(item => item.name === product.name);
  if (idx > -1) {
    cart[idx].quantity = quantity;
  } else {
    cart.push({ ...product, quantity });
  }
}

export function getCart() {
  return cart;
}
