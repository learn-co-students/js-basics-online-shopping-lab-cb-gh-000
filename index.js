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
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({itemName: item, itemPrice: price});

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length == 0){
    return "Your shopping cart is empty."
  }
  else{
    var str = "In your cart,";
    for(let i = 0; i < cart.length; i++){
      if(cart.length == 1){
        str += ` you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else if(i < 1 && cart.length > 1 && i != cart.length - 1){
        str += ` you have ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
      else if(i >= 1 && i != cart.length - 1){
        str += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
      else{
        str += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
    }
    return str;
  }


}

function total() {
  // write your code
  var price = 0;
  for(let i = 0; i < cart.length; i++){
    price += cart[i].itemPrice;
  }
  return price;
}

function removeFromCart(item) {
  // write your code here
  if(cart.length == 0){
    return "That item is not in your cart."
  }
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName == item){
      cart.splice(i, 1)
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == "" || cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    var price = total();
    var size = cart.length
    for(let i = 0; i < size; i++){
      removeFromCart(cart[i].itemName);
    }
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`

  }
  return "Sorry, we don't have a credit card on file for you."
}
