var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cart = getCart();
  cart.push({[item] : (Math.floor(Math.random()*100))});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cart = getCart();
  var printValue = "In your cart, you have "
  if (cart.length === 0)
    console.log(`Your shopping cart is empty.`)
  else if (cart.length === 1)
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  else if (cart.length === 2)
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  else {
    for (let i = 0; i < cart.length ; i++)
      if (i !== cart.length-1)
        printValue += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
      else
        printValue += `and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
    console.log(printValue);
  }
}

function total() {
  var total = 0;
  var cart = getCart();
  for (let i = 0; i < cart.length ; i++)
    total += cart[i][Object.keys(cart[i])]
  return total;
}

function removeFromCart(item) {
  var tmp=[];
  var cart = getCart();

  for (let i = 0; i < cart.length ; i++)
    if (cart[i].hasOwnProperty(item))
      continue;
    else
      tmp.push(cart[i]);

  if (tmp.length === cart.length)
    console.log(`That item is not in your cart.`)
  setCart(tmp)
  return tmp;
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined)
    console.log(`Sorry, we don't have a credit card on file for you.`)
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }

  cart = setCart([]);
}
