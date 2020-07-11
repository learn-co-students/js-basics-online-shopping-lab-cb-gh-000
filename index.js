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
 var cartObject = {
   'itemName': item,
   'itemPrice': parseInt(Math.floor(Math.random() * 100) + 1)
 }
 cart.push(cartObject);
 return `${item}`+" has been added to your cart.";
}

function viewCart() {
  // write your code here
  var string = ""
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1){
        string = string + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else if (i === cart.length - 1) {
        string = string + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else {
        string = string + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return "In your cart, you have " + string;
  }
}

function total() {
  // write your code here
  var totalprice = 0;
  for (let i = 0; i < getCart().length; i++) {
    totalprice +=  getCart()[i].itemPrice;
  }
  return totalprice
}

function removeFromCart(item) {
  // write your code here
  var index = -1;
  for(let i = 0;i < cart.length; i++) {
    if (item === cart[i].itemName) {
      var index = i;
  }
  else {
    continue;
  }
}
  if (index != -1) {
    var removed = getCart().splice(index, 1);
    return getCart()
  }
  else {
    return "That item is not in your cart."
  }
}


function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var totalcost = total();
    cart = [];
    return `Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
