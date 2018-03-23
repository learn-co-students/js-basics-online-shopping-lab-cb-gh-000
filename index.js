var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let cartItem = {};

  cartItem.itemName = item;
  cartItem.itemPrice = Math.floor(Math.random() * 100) + 1;

  cart.push(cartItem);

  return `${item} has been added to your cart.`;
}

function viewCart() {
  const cart = getCart();

  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }

  var message = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;

  if (cart.length === 1) {
    return message+'.';
  }

  for (let i = 1; i < cart.length - 1; i++) {
    message += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
  }

  message += `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`

  return message;
}

function total() {
  const cart = getCart();

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  let cart = getCart();

  let itemFound = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      itemFound = true;
    }
  }

  if (!itemFound) {
    return 'That item is not in your cart.';
  }

  return cart;
}

function placeOrder(cardNumber) {
  let cart = getCart()

  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }

  let message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;

  setCart([]);

  return message;
}
