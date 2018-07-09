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
 var items = {};
 //random number 1 - 100
 var Price = Math.floor(Math.random() * 99) + 1;

 Object.assign(items, {itemName: item}, {itemPrice: Price});
 cart.push(items);
 return item + ' has been added to your cart.';
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    return 'Your shopping cart is empty.';
  }
  else {
    var text = "In your cart, you have ";
    if (cart.length > 1){
      for (var i = 0; i < cart.length; i++) {
        if ( i > 0) {
          text += ", ";
          if ( i == cart.length -1){
            text += "and ";
          }
        }
        text += cart[i]["itemName"];
        text += " at ";
        text += "$";
        text += cart[i]["itemPrice"];
      }
      text += ".";
      return text;
    }
    else {
      text += cart[0]["itemName"];
      text += " at ";
      text += "$";
      text += cart[0]["itemPrice"];
      text += ".";
      return text;
    }
  }
}

function addText(i, text) {
  text += cart[i]['itemName'];
  text += " at ";
  text += "$";
  text += cart[i]['itemPrice'];
}

function total() {
  // write your code here
  var price = 0;
  for (var i = 0; i < cart.length; i++) {
    price += cart[i]["itemPrice"];
  }
  return price;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if( cart[i]["itemName"] == item ){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  var result = 'Your total cost is $'+ String(total()) +', which will be charged to the card '+cardNumber+'.';
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you.";
  }
  for (var i = 0; i < cart.length; i++) {
    cart.pop();
  }
  return result;
}
