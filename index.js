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
 let product = {};
 product.itemName = item;
 product.itemPrice = Math.floor(Math.random() * (101 - 0)) + 0;
 cart.push(product)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  if (cart.length > 0) {
    let out = 'In your cart, ';
    for (let x = 0; x < cart.length; x++) {
      out += `${x > 0 ? '' : 'you have'}${x === cart.length - 1 && cart.length > 1 ? ' and' : ''} ${cart[x].itemName} at $${cart[x].itemPrice}${x === cart.length - 1 ? '.' : ','}`;
    }
    return out
  } else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
  let totalPrice = 0
  for (let x = 0; x < cart.length; x++) {
    totalPrice += cart[x].itemPrice;
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for (let x = 0; x < cart.length; x++) {
    if (cart[x].itemName === item) {
      cart.splice(x, 1);
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    let order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return order
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}
