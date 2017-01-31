var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var itemAndPrice = {[item]: price};
  cart.push(itemAndPrice);
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  const l = cart.length;
  if (l < 1) {
    console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false
  for (let i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i];
    if (itemAndPrice.hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      itemInCart = true
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let itemAndPrice = cart[i];
      let item = Object.keys(itemAndPrice)[0];
      let price = itemAndPrice[item];
      total += price;
      cart.shift();
    }
    console.log(`Your total cost is \$${total}, which will be charged to the card ${cardNumber}.`)
  }

}
