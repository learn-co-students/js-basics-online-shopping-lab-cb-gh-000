var cart = {};

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
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(item) {
  var result;
  if (cart.length == 0) {
    result = "Your shopping cart is empty.";
  } else {
    let items = [];
    result = "In your cart, you have ";
    for (var i = 0, l = cart.length; i < l; i++) {
      item = cart[i];
      items.push(`${Object.keys(item)[0]} at \$${item[Object.keys(item)[0]]}`)
    }
    result += items.join(', ');
    result += '.';
  }
  console.log(result);
}

function removeFromCart(name) {
  let itemInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
