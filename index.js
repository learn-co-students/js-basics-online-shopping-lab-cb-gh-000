var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var min = 1;
    var max = 100;
    var price =  Math.round(Math.random() * (max - min) + min);
    let products = {"itemName" : item, "itemPrice" : price};
    cart.push(products)
    return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  console.log("cart is ", cart);
  if (!cart.length) {
    return "Your shopping cart is empty.";
  } else {

    let items = "";
    let lastString = `In your cart, you have`;
    for (let i = 0; i < cart.length; i++) {
      let currentItem = cart[i].itemName;
      let currentPrice = cart[i].itemPrice;
      if (i === cart.length -1) {
        lastString = `${lastString} ${currentItem} at $${currentPrice}.`;
      } else if (i === cart.length -2) {
        lastString = `${lastString} ${currentItem} at $${currentPrice}, and`;
      } else {
        lastString = `${lastString} ${currentItem} at $${currentPrice},`;
      }
}
items = lastString;
return items;
}
}

function total() {
  var total = 0
  for(let i = 0; i < cart.length;i++){
    total = total+cart[i].itemPrice
  }
  return total;
}

function removeFromCart(item) {
// write your code here
let cartItem = false
for(let i = 0; i < cart.length; i++){
  if(cart[i].itemName === item){
    cartItem = true
    cart.splice(i, 1)
    }
  }
  if (!cartItem){
    return 'That item is not in your cart.'
  }
return cart
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;

  } else {
    let totalString = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`;
     cart.pop();
     return totalString;
  }
  return cart;
  }
