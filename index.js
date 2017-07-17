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
   var price = Math.floor(Math.random() * 101)
   cart.push({[item]: price})
   console.log(`${item} has been added to your cart.`)
   return cart
}

function viewCart() {
  // write your code here
  var cartItems = ["In your cart, you have "]
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    cartItems.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)
  } else if (cart.length === 2) {
    cartItems.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} `+`and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
  } else if (cart.length > 2) {
    for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `);
    };
    cartItems.push(`and ${Object.keys(cart[cart.length-1])[0]} at ` +
    `$${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}.`);
  };
  console.log(cartItems.join(""));
  return cartItems.join("");
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0]
    total += cart[i][item]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    for(var items in cart[i]){
      if (items === item ) {
        cart.splice(i, 1);
        return cart;
      }
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
