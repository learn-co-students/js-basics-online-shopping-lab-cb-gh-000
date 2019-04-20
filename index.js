var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObject = {itemName: item, itemPrice: Math.random()*100}
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  switch (cart.length) {
    case 0:
      return 'Your shopping cart is empty.'
      break;
    case 1:
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
      break;
    default:
    var sentence = "In your cart, you have "
      for (var i = 0; i < cart.length; i++){
        sentence += `${i === cart.length -1 ? "and ": ""}${cart[i].itemName} at $${cart[i].itemPrice}${i === cart.length -1 ? ".": ", "}`
      }
      return sentence
      break;
  }
}

function total() {
  var sum = 0
  for(var i = 0; i < cart.length; i++ ){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      return
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    var sum = total()
    cart = []
      return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
    }
    else {
      return "Sorry, we don't have a credit card on file for you."
    }
  }
