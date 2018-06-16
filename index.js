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
 getCart().push({itemName: item, itemPrice:  Math.floor(Math.random() * 100) });
 return `${item} has been added to your cart.`;
}



function viewCart() {
  // write your code here
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function generateCartDescription(){
  var statement = "In your cart, you have ";
  if (getCart().length >= 1){
    statement += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >= 2) {
    for (var i=1; i<cart.length - 1; i++){
      statement += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    statement += `, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${statement}.`
}

function total() {
  // write your code here
  var sum = 0
  for(var i=0; i<getCart().length; i++){
    sum += getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for(var i=0; i<getCart().length; i++){
    if (getCart()[i].itemName === item){
      getCart().splice(i, 1)
      return
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}
