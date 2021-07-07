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
 const itemPrice  = Math.floor(Math.random()*100) + 1;
 var items = {[item]: itemPrice }
 cart.push(items);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var string = "In your cart, you have ";
   if (cart.length == 0) {
      console.log("Your shopping cart is empty.");
      return "Your shopping cart is empty.";
    }else if (cart.length == 1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
      return `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
    } else if (cart.length == 2) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
      return `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
    }else{
        for (var i = 0; i < cart.length; i++) {
          var text;
            if (i === cart.length - 2){
              text = ", and ";
            } else if (i === cart.length - 1) {
              text = "";
            } else {
              text = ", ";
            };
          string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` +text+`${i === cart.length - 1 ? '.' : ''}`;

        };
    };
    return console.log(string);
};

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
   total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
       cart.splice(i, 1);
       return cart;
    }
  }
    return console.log(`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    return console.log(`Sorry, we don't have a credit card on file for you.`);
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
  return;
}
