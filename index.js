var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let product = new Object({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) % 100
  });
  cart.push(product);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let msg = '';
  if (cart.length == 0)
    msg = 'Your shopping cart is empty.';
  else {
    msg = 'In your cart, you have ';
    for (let i = 0; i < cart.length; i++) {
      if (cart.length > 1 && i == cart.length - 1)
        msg += 'and ';
      msg += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      msg += (i == cart.length - 1) ? '.' : ', '
    }
  }
  return msg;
}

function total() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++)
    sum += cart[i].itemPrice;

  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
    return `Sorry, we don't have a credit card on file for you.`;
  else {
    let msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return msg;
  }
}
