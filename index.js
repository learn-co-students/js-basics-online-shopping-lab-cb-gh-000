var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})
  return item + ' has been added to your cart.'
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0]['itemName']} at ${cart[0]['itemPrice']}.`
  }
  else {
    var new_array = cart
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        new_array(`and ${cart[i]['itemName']} at ${cart[i]['itemPrice']}`)
      }
      else {
        new_array.push(`${cart[i]['itemName']} at ${cart[i]['itemPrice']}`)
      }
    }
    return `In your cart, you have ${new_array.join(", ")}.`
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
