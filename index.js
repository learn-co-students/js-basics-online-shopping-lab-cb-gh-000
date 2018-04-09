var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)+1});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartInfo = 'In your cart, you have';
  if (cart.length) {
    cart.forEach((el, i, arr) => {
      cartInfo += ` ${el.itemName} at $${el.itemPrice}${arr.indexOf(el) === arr.length-2 ? ', and' : ','}`;
    });
    return cartInfo.replace(/,$/, '.');
  }
  return "Your shopping cart is empty.";
}

function total() {
  return cart.reduce((acc, curr) => { return acc+=curr.itemPrice },0);
}

function removeFromCart(item) {
  let sliceValue;
  for (let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  let finalCost = total();
  cart = [];
  return `Your total cost is $${finalCost}, which will be charged to the card ${cardNumber}.`;
}
