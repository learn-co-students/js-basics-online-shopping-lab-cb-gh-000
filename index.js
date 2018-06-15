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
 var obj = { itemName: item, itemPrice: Math.floor(Math.random()*100)}
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if( cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if( cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
   var  s = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    for(var i = 1; i < cart.length-1 ; i++) {
      s += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    s += `, and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    return s 
  }
}

function total() {
  // write your code here
  var a = 0 
  for( var i = 0; i < cart.length; i++) {
    
    a += cart[i].itemPrice
    
  }
  return a 
  
}

function removeFromCart(item) {
  // write your code here
  var arr = []
  var flag = false 
  for( var i = 0 ; i < cart.length ; i++) {
    
    if( cart[i].itemName != item ) {
      arr.push(cart[i])
    }
    else {
      if( flag === false ) {
        flag = true 
      } 
    }
  }
  if( flag === true) {
    cart = arr 
    return cart 
  }
  else {
    return `That item is not in your cart.`
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
  if( cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var s = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return s 
  }
  
}
