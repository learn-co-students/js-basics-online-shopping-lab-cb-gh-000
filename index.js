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
 var itemObj = {'itemName':item, 'itemPrice':Math.floor(100) * Math.random()};
 cart.push(itemObj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0)
    return 'Your shopping cart is empty.';
  else{
    var itemDesc = 'In your cart, you have';
    for(var i = 0; i < cart.length; i++){
      if(i != 0){
        itemDesc += ',';
        if(i === cart.length - 1)
          itemDesc += ' and'
      }
      itemDesc += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    itemDesc += '.';
    return itemDesc;
  }
}

function total() {
  // write your code here
  var totalCost = 0
  for(var i = 0; i<cart.length; i++){
    totalCost += parseFloat(cart[i].itemPrice, 10);
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i< cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    var text = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return text;
  }

}
addToCart('lemon');
addToCart('banana');
removeFromCart('banana');

console.log(cart)
