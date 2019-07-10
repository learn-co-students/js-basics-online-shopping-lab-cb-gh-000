var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(generateCartItem(item));
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var result = "In your cart, you have ";
  if (!cart.length){
    return "Your shopping cart is empty.";
  }else{
    
    if (getCart().length >= 1){
       result += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
      }
    if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = '';
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    result += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
      
    }
      return result + '.';
    }
}

function total() {
  var total = 0;
  for (var i=0; i<getCart().length; i++) {
    total = total + getCart()[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
   var itemToRemove = searchCartForItemToRemove(item)
   return itemToRemove ? removeItemFromCart(itemToRemove) : 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var result = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    setCart([]);
    return result;
  }
}

// helper functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove,1)
}

function searchCartForItemToRemove(itemName){
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

