var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var temp = {
    itemName: item,
    itemPrice: Math.floor(Math.random()*100) + 1
  }
  cart.push(temp);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var status = '';
  if (cart.length > 0) {
    status = 'In your cart, you have';
    for (var i = 0; i < cart.length; ++i) {
      if (i == cart.length-1 && cart.length > 1) {
        status += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else if (i == cart.length-1){
        status += ` ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else {
        status += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
    }
  }
  else {
    status = 'Your shopping cart is empty.';
  }
  return status;
}

function total() {
  var price = 0;
  for (var i = 0; i < cart.length; ++i) {
    price += cart[i].itemPrice;
  }
  return price;
}

function removeFromCart(item) {
  var index = -1;
  for (var i = 0; i < cart.length; ++i) {
    if (cart[i].itemName == item) {
      index = i;
      break;
    }
  }

  if (index != -1) {
    cart = [...cart.slice(0, index), ...cart.slice(index+1)];
  }
  else {
    return 'That item is not in your cart.';
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  else {
    var status = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return status;
  }
}
