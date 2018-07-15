var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemConstructor = new Object();
  itemConstructor[itemName] = Math.floor(Math.random() * 100) + 1;
  cart.push(itemConstructor);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
var results = [];
var item =[];
var price =[];

if (cart.length===0){
  console.log( `Your shopping cart is empty.`) ;
}

else if (cart.length===1){
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
}


 else if (cart.length===2){
  for(var i =0; i<cart.length; i++){
   item = Object.keys(cart[i]) ;
  price = Object.values(cart[i]);
 results.push(`${item} at $${price}`);

  }


 console.log(`In your cart, you have ${results.join(' ')}.`);
 }
  else {

   for(var j =0; j<cart.length; j++){
  item = Object.keys(cart[j]) ;
  price = Object.values(cart[j]);
  var last = j===cart.length-1
  var lastPrice = j===cart.length-1
  console.log(last)
  if ((!last) && (!lastPrice)){

 results.push(`${item} at $${price}`)


  }
else {
  results.push(`${item} at $${price}`)
}
}
 console.log(`In your cart, you have ${results.join(', ')}.`)
  }
}

// The total() function accepts no arguments, iterates through the cart array,
//and returns the current total value of the items in the cart.

function total() {
var total =0;

  for (var j= 0; j<cart.length; j++) {
     var price = Object.values(cart[j]);
     for (var i=0; i<price.length; i++) {
       total= total + price[i];
     }
 }

return total ;
}

/*The removeFromCart() function accepts one argument, the name of the item that should be removed.
If the cart does not contain a matching item, the function should print out That item is not
in your cart. and return the unchanged cart. If the item is present in the cart, the function should remove
the object from the cart and then return the updated cart.
HINT: Check each object's key (the name of the item) to see if it matches the parameter,
then remove it if it matches. You might find hasOwnProperty to be useful.*/

function removeFromCart(item) {
  // write your code here
  for(var i =0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(item)===true) {
        cart.splice(i, 1)
        return cart
 }
   }

  console.log (`That item is not in your cart.`)
  return cart
}

/* The placeOrder() function accepts one argument, a credit card number.
If no argument is received, the function should print out Sorry, we don't have a credit card on file for you..
If a card number is received, the function should print out Your total cost is $71,
which will be charged to the card 83296759. (where 71 is the value returned by total() and 83296759
is the credit card number passed to placeOrder()). Then, it should empty the cart array.*/
function placeOrder(cardNumber) {
  if (!cardNumber) {
  console.log(`We don\'t have a credit card on file for you to place your order.`);
 }
  else  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

         cart =[];


  }
}
