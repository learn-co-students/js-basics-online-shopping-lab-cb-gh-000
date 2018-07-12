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
 var namePrice = {itemName:item, itemPrice: Math.floor(Math.random()*100)};
 cart.push(namePrice);
 return `${item} has been added to your cart.`;

}

function viewCart() {
  // write your code here
  var len = cart.length;
  var x = `In your cart, you have `;
  if (len == 0) {
    return 'Your shopping cart is empty.';
  } else if (len == 1) {
      return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`;
  }
    else {
    for (var i = 0; i<len; i++) {
      if (i == 0) {
        x = x + cart[i]['itemName'] + ` at $` + cart[i]['itemPrice'] + `, `;
      } else if (i < len-1) {
        x = x + cart[i]['itemName'] + ` at $` + cart[i]['itemPrice'] + `, `;
      } else {
        x = x + `and ` + cart[i]['itemName'] + ` at $` + cart[i]['itemPrice'] + `.`;
        return x;
      }
    }
  }
}

function total() {
  // write your code here
  var len = cart.length;
  var cost = Number('0');
  for (var i =0; i < len; i++) {
    var ca = cart[i]['itemPrice'];
    ca = Number(ca);
    cost = cost + ca;
  }
  return cost;
}

function removeFromCart(item) {
  // write your code here
  var len = cart.length;
  if (len == 0) {
    return `That item is not in your cart.`;
  } else {
      for (var i=0; i<len; i++) {
        if (cart[i]['itemName'] == item) {
          cart.splice(i,1);
          return cart;
        }
      }
  var len2 = cart.length;
  if (len == len2) {
    return `That item is not in your cart.`;
   }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var cost = total();
  if (cardNumber == null) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
      cart = [];
      return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  }
}
