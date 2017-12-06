var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var tmp = new Object();
  tmp[itemName] = Math.floor(Math.random()*100);
  cart.push(tmp);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log(`Your shopping cart is empty.`);
  }else if(cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  }else if(cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
  }else{
    var tmp = "In your cart, you have ";
    for(let a = 0; a < cart.length; a++){
      tmp += a + 1 === cart.length ? "and " : "";
      tmp += `${Object.keys(cart[a])} at $${cart[a][Object.keys(cart[a])]}`;
      tmp += a + 1 === cart.length ? "." : ", ";
    }
    console.log(tmp);
    return (tmp);
  }
}

function total() {
  var tmp = 0;
  for(let a = 0; a < cart.length; a++){
    tmp += cart[a][Object.keys(cart[a])];
  }
  return tmp;
}

function removeFromCart(item) {
  for(let a = 0; a < cart.length; a++){
    if(cart[a].hasOwnProperty(item)){
      cart = [...cart.slice(0, a),...cart.slice(a+1, cart.length)];
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }else{
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
