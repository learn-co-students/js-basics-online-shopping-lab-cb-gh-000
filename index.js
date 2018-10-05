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
 var newObj = { [item]: giveRandomNumber(100) }
 cart.push(newObj)
 console.log(`${item} has been added to your cart.`)
 return cart
}
function giveRandomNumber(n){
  return Math.floor(Math.random() * n) +1
}


function viewCart() {
  // write your code here
  var message = "";
  if(cart.length > 0){
    message += 'In your cart, you have '
    for(let i = 0 ; i < cart.length ; i++){
      let itemName = Object.keys(cart[i])
      let itemPrice = "$" + cart[i][itemName]
      message += `${itemName} at ${itemPrice}`
      if(i !== cart.length - 1)
        message += (i + 2 == cart.length ? (cart.length > 2 ? ",":"") + " and " : ", ")
    }
  }else{
    message += "Your shopping cart is empty"
  }
  message += "."
  console.log(message)
  return message
}

function total() {
  // write your code here
  var result = 0;
  for(let i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i])
    var itemPrice = cart[i][itemName]
    result += itemPrice
  }
  return result
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length ; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  var message = "";
  if(cardNumber !== undefined){
    message += `Your total cost is $${total()}, which will be charged to the card ${cardNumber}`
    cart = []
  }else{
    message += `Sorry, we don't have a credit card on file for you`
  }
  message += "."
  console.log(message)
  return message
}
