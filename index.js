var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random() *(100-1)+1;
  var object = new Object();
  object["itemName"] = item;
  object["itemPrice"] = Math.floor(price);
  cart.push(object);
 return item+" has been added to your cart.";
}

function viewCart() {
  var str = "In your cart, you have ";
  if(cart.length==0){
    return "Your shopping cart is empty.";
  }
  else{
    for(var i=0;i!=cart.length;i++){
      let obj = cart[i];
      var counter=i+1;
      if(i==0){
        if(counter==cart.length){
          str+= obj["itemName"]+" at $"+obj["itemPrice"]+".";
        }
        else{
          str+= obj["itemName"]+" at $"+obj["itemPrice"];
        }
      }
      else if(i+1!=cart.length){
        str+=", "+obj["itemName"]+" at $"+obj["itemPrice"];
      }
      else{
         str+=", and "+obj["itemName"]+" at $"+obj["itemPrice"]+".";
      }
    }
  }
  return str;
}

function total() {
  let sum=0;
  for(let i=0;i!=cart.length;i++){
    var obj = cart[i];
    sum+=obj["itemPrice"];
  }
  return sum;
}

function removeFromCart(item) {
  for(let i=0;i!=cart.length;i++){
    var obj = cart[i];
    if(obj["itemName"]==item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber==null){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    var sum = total();
    cart = [];
    return "Your total cost is $"+sum+", which will be charged to the card "+cardNumber+".";
  }
}
