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
 let itObj = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 101)
 };
 cart.push(itObj);
 return `${itObj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return `Your shopping cart is empty.`;
  } else {
    let shpCrt = [];
    for(let i = 0; i < cart.length; i++){
      shpCrt.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    } if (shpCrt.length === 1){
      return `In your cart, you have${shpCrt}.`
    } else{
      let slicedArr = shpCrt.slice(0, -1);
      return `In your cart, you have${slicedArr}, and${shpCrt[shpCrt.length - 1]}.`
    }
  }
}

function total() {
  // write your code here
  let totalSum = [];
  for(let i = 0; i < cart.length; i++){
    totalSum.push(cart[i].itemPrice);
  }
  let result = totalSum.reduce((a,b)=> a + b, 0);
  return result;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
}
return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  let totalValue = total()
  if(typeof cardNumber === 'undefined'){
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else if (cardNumber){
    cart = [];
    return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`
  }

}
