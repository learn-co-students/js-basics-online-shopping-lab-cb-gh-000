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

var obj={itemName:item,itemPrice:Math.floor(Math.random()*100)} 
 cart.push(obj);
 return obj.itemName + " has been added to your cart."; 
}

function viewCart() {

var counter=0;
if(cart.length===0)
return "Your shopping cart is empty.";
var str="In your cart, you have ";
  for(var i=0;i<cart.length;i++)
  {
    counter++;
    if(counter<cart.length){
    str=str+cart[i].itemName+" at $"+ cart[i].itemPrice+", ";
    }
    else
    {
      if(cart.length>1)
      str=str+"and "
      str=str+cart[i].itemName+" at $"+ cart[i].itemPrice+".";
        
    }
   }
  return str;
  
}

function total() {
  var tot=0;
  for(var i=0;i<cart.length;i++)
  {
    tot+=cart[i].itemPrice;
    
  }
  return tot;
  // write your code here
  
}

function removeFromCart(item) {
  
 for(var i=0;i<cart.length;i++)
 {
   if(cart[i].itemName===item)
   {
    cart.splice(i,1);
     return cart;
   }
   
 }
  
return "That item is not in your cart.";
  // write your code here
}

function placeOrder(cardNumber) {
  
  
  if(cardNumber===undefined)
  {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else
  {
    var bill=total();
   
cart.length=0;
return `Your total cost is $${bill}, which will be charged to the card ${cardNumber}.`
  }
  
  
  // write your code here
  
}
