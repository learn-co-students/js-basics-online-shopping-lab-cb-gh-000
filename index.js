var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {itemName:item, itemPrice:Math.floor(Math.random()*100) + 1 }
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  var cartItems = "In your cart, you have "
  if (cart.length == 1) {
    return cartItems += `${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  for (let i = 0; i < cart.length - 1; i++) {
    cartItems += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  return cartItems += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
}

function total() {
  var totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  var counter = 0;
  while (counter < cart.length){
    if (cart[counter].itemName == item) {
      cart.splice(counter, 1)
      return cart
    }
    counter += 1
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don\'t have a credit card on file for you."
  } else {
    var totalCost = total()
    cart.splice(0)
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
