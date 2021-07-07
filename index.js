var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100 + 1)
 })
 return item + ' has been added to your cart.'
}

function viewCart() {
  let itemString = ''
  for (let i in cart){
    if (i == cart.length - 1 && i != 0) { itemString += 'and '};
    itemString += cart[i].itemName + " at $" + cart[i].itemPrice + ', ';
  }
  return cart.length == 0 ? 'Your shopping cart is empty.':'In your cart, you have ' + itemString.slice(0, itemString.length - 2) + '.';
}

function total() {
  let totalAmount = 0;
  for (let i in cart){
    totalAmount += cart[i].itemPrice;
  }
  return totalAmount;
}

function removeFromCart(item) {
  for ( let i in cart ) {
    if (item === cart[i].itemName) {
      return cart.splice(i, 1);
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {cart = []; return 'Sorry, we don\'t have a credit card on file for you.'}
  else {
    let order = 'Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber + '.';
    cart = [];
    return order;
  }
}
