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
 var obj = new Object();
 obj['itemName'] = item;
 obj['itemPrice'] = Math.floor(Math.random()*101);
 cart.push(obj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let value = `In your cart, you have `;
  if(cart.length>0){
    for(var i=0; i < cart.length-1; i++){
      value+=`${cart[i].itemName} at $${cart[i].itemPrice}, `;
      if(i===cart.length-2){
        value+=`and `;
      }
    }

    value+=`${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return value;
  }
  else{
    return `Your shopping cart is empty.`;
  }
}

function total() {
  // write your code here
  var total=0;
  if(cart.length>0){
    for(let i=0; i<cart.length; i++){
      total += cart[i].itemPrice;
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i=0;i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }

  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  // write your code here
  var tot = total();
  if(cardNumber){
    cart.length=0;
    cart=[];
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
  }
  else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
