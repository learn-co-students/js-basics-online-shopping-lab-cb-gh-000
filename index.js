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
 cart.push({itemName:item,itemPrice:Math.floor(Math.random()*100+1)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var length=cart.length;
  if(length>0){
    var cart_str="";
    for(var i =0; i<length; i++){
      cart_str+=(i==0)?'In your cart, you have ':', '
      cart_str+=(i==length-1 && length>1)?'and ':''
      cart_str+=`${cart[i].itemName} at \$${cart[i].itemPrice}`
      cart_str+=(i==length-1)?'.':''
    }
    return cart_str;
  }else{
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  var sum=0;
  for(var i=0;i<cart.length;i++){
    sum+=cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var index=-1;
  for(var i = 0; i<cart.length; i++){
    if(cart[i].itemName==item){
      index=i;
    }
  }
  if(index==-1){
    return "That item is not in your cart."
  }else{
    return cart.splice(index,1)
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber==undefined){
    return "Sorry, we don\'t have a credit card on file for you.";
  }else{
    var sum=total();
    cart=[];
    return `Your total cost is \$${sum}, which will be charged to the card ${cardNumber}.`
  }
}
