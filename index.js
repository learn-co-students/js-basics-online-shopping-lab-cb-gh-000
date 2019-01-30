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
   cart.push({itemName: item, itemPrice: Math.random()*Math.floor(100)})
   return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length == 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
  }
  else {
    var string =  "In your cart, you have ";
    for (var counter = 0 ; counter < cart.length - 1; counter ++) {
      string = string + cart[counter].itemName + " at $" + cart[counter].itemPrice + ", ";
    }
    string = string + "and " + cart[cart.length - 1].itemName + " at $" + cart[cart.length - 1].itemPrice + ".";
    return string
  }

}

function total() {
  // write your code here
  var total = 0;
  for (var counter = 0 ; counter < cart.length ; counter ++) {
    total += cart[counter].itemPrice;
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var counter = 0 ; counter < cart.length ; counter ++) {
    if (cart[counter].itemName == item) {
      return cart.splice(counter,1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber == 'undefined') {
    return "Sorry, we don't have a credit card on file for you."
  }
  var string = "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + "."
  cart = []
  return string
}
