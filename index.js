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
 var obj = {};
 obj["itemName"] = item;
 obj["itemPrice"] = Math.random() * 100;
 cart.push(obj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.` ;
  }
  else{
  var j;
  var i = "In your cart, you have";
  for(j=0; j < cart.length-1; j++){
    i = i + " " + cart[j]["itemName"] + " at " + "$" + cart[j]["itemPrice"] + ",";
  }
  i = i + " and " + cart[j]["itemName"] + " at " + "$" + cart[j]["itemPrice"] + ".";
  return i;
  }
}

function total() {
  // write your code here
  var cost = cart[0]["itemPrice"];
  for(let i =1; i < cart.length; i++){
    cost = cost + cart[i]["itemPrice"];
  }
  return cost;
}

function removeFromCart(item) {
  // write your code here
  var i = 0;
  while(i < cart.length){
    if(cart[i].itemName === item)
    {
      break;
    }
    else{
    i++;
  }
  }
  if(i === cart.length){
    return "That item is not in your cart.";
  }
  else{
    delete cart[i];
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
