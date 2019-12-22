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
 cart.push(Object.assign({},{["itemName"]: item, ["itemPrice"]: Math.floor(Math.random()*100)}))
 return `${item} has been added to your cart.`
}

function printItems(){
  var str= "In your cart, you have ";
  var i=0;
  for(i=0;i<cart.length;i++){
    if(cart[i+1] && cart[i+2])
    str+=cart[i].itemName+" at $"+cart[i].itemPrice+", "
    else if(cart[i+1] && !cart[i+2])
    str+=cart[i].itemName+" at $"+cart[i].itemPrice+", and "
    else
    str+=cart[i].itemName+" at $"+cart[i].itemPrice+"."
  }
  return str
}

function viewCart() {
  // write your code here
  if(cart.length){
    return printItems()
  }
  return "Your shopping cart is empty."
}

function total() {
  // write your code here
  var total = 0;
  cart.forEach(function(item){
    total+=item["itemPrice"]
  });
  return total
}

function removeFromCart(item) {
  // write your code here
  var i=0;
  for(i=0;i<cart.length;i++){
    if(cart[i]["itemName"]==item)
      break;
  }
  if(i!=cart.length)
  cart.splice(i,1)
  else
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    const cartTotal = total();
    cart.splice(0)
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
  return "Sorry, we don't have a credit card on file for you."
}
