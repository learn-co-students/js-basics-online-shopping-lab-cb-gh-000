var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var element={itemName:item,itemPrice: Math.floor(Math.random()*101)}
 cart.push(element)
 return `${item} has been added to your cart.`
}

function viewCart() {

  if (cart.length<=0) {
    return "Your shopping cart is empty."
  }
  var answer="In your cart, you have"
  for (var i = 0; i < cart.length-1; i++) {
    answer = answer + ` ${getCart()[i].itemName} at $${cart[i].itemPrice},`
  }
  if(cart.length===1)
  answer = answer + ` ${getCart()[i].itemName} at $${cart[i].itemPrice}.`
  else{
  answer = answer + ` and ${getCart()[i].itemName} at $${cart[i].itemPrice}.`
  }
  return answer
}

function total() {
  var answer=0;
 for (var i = 0; i < cart.length; i++) {
   answer += cart[i].itemPrice
 }
 return answer
}

function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
  var temp= cart[i].itemName
  if(temp===item){
    cart.splice(i,1)
    return
  }
}
return "That item is not in your cart."
}

function placeOrder(cardNumber) {

if(cart.length > 0){

  return `Your total cost is $${empty()}, which will be charged to the card ${cardNumber}.`
}

return "Sorry, we don't have a credit card on file for you."
}

function empty() {
  var a = total()
  for(var i = 0; i < cart.length; i++) {
  cart.pop()
  }
  return a
}
