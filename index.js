var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemInCart = {};
  itemInCart[item] = Math.floor((Math.random()*10))+1
  cart.push(itemInCart);
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var keysf = ()=>{
    var temp = [];
    for(var k in cart)
    {
      var t;
      t = Object.keys(cart[k])
      console.log(t)
      temp = temp.concat(t);
    }
    return temp
  }
  var keys = keysf();

  if(keys.length == 0)
  {
    console.log("Your shopping cart is empty.")
    return
  }
  var string = "In your cart, you have"
  for(var i = 0; i< keys.length; ++i)
  {
    if(keys.length == 1)
    {
      string += ` ${keys[i]} at $${cart[i][keys[i]]}.`

    }else if(i+1 == keys.length && keys.length > 2)
    {
      string += ", and" + ` ${keys[i]} at $${cart[i][keys[i]]}.`;
    }else if(i+1 == keys.length){
      string += " and" + ` ${keys[i]} at $${cart[i][keys[i]]}.`;
    }else if(i>=1){
      string += "," + ` ${keys[i]} at $${cart[i][keys[i]]}`;
    }else {
      string +=  ` ${keys[i]} at $${cart[i][keys[i]]}`;
    }
  }
  console.log(string);
}

function total() {
  var sum = 0;
  for( var k in cart)
  {
    for(var j in cart[k])
    {
      sum += cart[k][j]
    }
  }
  return sum
}

function removeFromCart(item) {
  for(var i in cart)
  {
    for(var j in cart[i])
    {
      if(j === item)
      {
        cart.splice(i,1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.")
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber == undefined){
    console.log("Sorry, we don't have a credit card on file for you.")

  }else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  return cart = [];
  }
}
placeOrder();
