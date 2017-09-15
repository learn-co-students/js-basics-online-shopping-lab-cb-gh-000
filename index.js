var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart[item] = Math.floor(Math.random() * 100);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  string = "In your cart, you have "
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      string += `${cart[i].key} at $${cart[i].value},`
    }
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
