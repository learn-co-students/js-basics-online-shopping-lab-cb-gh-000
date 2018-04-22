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
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  }
  else {
    var new_array = []
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        new_array.push(`and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
      }
      else {
        new_array.push(`${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
      }
    }
    return `In your cart, you have ${new_array.join(", ")}.`
  }
}

function total() {
  total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i]['itemPrice']
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] === item) {
      var index = i
    }
  }
  if (typeof(index) === 'number') {
    cart.splice(index, 1)
    return cart
  }
  else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === "number") {
    cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
