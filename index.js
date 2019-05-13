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
 let random = () => Math.floor(Math.random() * 100 + 1);
 let temp = {itemName: item, itemPrice: random()};
 cart.push(temp);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length > 0){
    return cart.reduce((initial, current, index)=>{
      if(index !== cart.length - 1 ){
        return `${initial} ${current['itemName']} at $${current['itemPrice']},`;
      }else if(cart.length === 1){
        return `${initial} ${current['itemName']} at $${current['itemPrice']}.`
      }else{
        return `${initial} and ${current['itemName']} at $${current['itemPrice']}.`
      }
    }, "In your cart, you have")
  }else{
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
  return cart.reduce( (sum,current) => sum + current.itemPrice , 0);
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i ++){
    if(item === cart[i].itemName){
      
      return cart.splice(i, 1);
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber !== undefined){
    let temp =`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return temp;
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
