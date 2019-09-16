var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  let itemPrice = Math.floor((Math.random() * 100) +1);
  let item = {[itemName]: itemPrice};
  console.log (`${itemName} has been added to your cart.`);
  cart.push(item);
  console.log(cart);
  return cart;
  }

function viewCart() {
  let currentCart = 'In your cart, you have ';
  if(cart.length === 0){
    console.log ("Your shopping cart is empty.");
  }
  for(let i = 0; i < cart.length; i++){
    if(i === cart.length-1){
      currentCart += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}.`
    }else if(cart.length >= 3 && i === cart.length-2){
        currentCart += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}, and `
    }else if(i === cart.length-2){
      currentCart += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]} and `
    }else{
      currentCart += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}, `
    }
  }
  console.log(currentCart);
}

// Reduce takes in the accumulating value, the current value and the starting number.
// Object.values will return each item object's value as an individual array.
// We then find the number that is in that array by looking at its index ([i])
// We then add this number value to the accumulating total of values and we have
// our cart total.
function sumArray(acc, cur) {
  return acc + Object.values(cur)[0]
}

function total() {
  return cart.reduce(sumArray, 0);
}

function removeFromCart(itemName) {
  for(let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(itemName)){
      cart = [...cart.slice(0, i), ...cart.slice(i+1)];
      return cart;
    }
  }
  console.log ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  console.log(cart);
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }else{
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
