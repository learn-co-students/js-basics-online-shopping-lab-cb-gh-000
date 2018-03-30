var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({ itemName:`${item}`, itemPrice: Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  function generateCartDescription() {
    var desc = 'In your cart,'
    if (getCart().length >= 1) {
      desc +=  ` you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
    }
    if (getCart().length >= 2) {
      var middleDesc = ''
      for (let i = 1; i < getCart().length - 1; i++) {
        middleDesc += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
      }
      desc += middleDesc + `, and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}`
    }
    return `${desc}.`
  }
   return getCart().length === 0 ? 'Your shopping cart is empty.' : generateCartDescription()
}

function total() {
  var sum = 0
  for (let i=0; i<getCart().length; i++ ) {
     sum += getCart()[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var indexOfItem
  for (let i=0; i < getCart().length; i++) {
    if (getCart()[i].itemName == item) {
      indexOfItem = i
    }
  }
  return (indexOfItem) ? getCart().splice(indexOfItem, 1) : 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    getCart().length = 0
    var sumToCharge = total()
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
