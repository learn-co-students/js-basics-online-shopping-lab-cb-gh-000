var cart = [];

function getCart() {
 return cart;
}

function randomNum(num)
{
  return Math.floor(Math.random() * num)
}
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

var priceValue = randomNum(100)
 cart.push(
   {itemName: item,
   itemPrice: priceValue}
 )

return `${item} has been added to your cart.`
}



function viewCart() {

  var cartStr = (cart.length > 0) ? "In your cart, you have" : "Your shopping cart is empty."

  for(let i = 0; i < cart.length; i++)
  {
    console.log("i am here");
    cartStr += ` ${(cart.length > 1 && i === cart.length - 1) ? 'and ' : ''}` +
              `${cart[i].itemName} at $${cart[i].itemPrice}` +
              `${(i === cart.length - 1) ? '.' : ','}`
  }

  //cartStr[cartStr.length - 1] = '.'
  return cartStr;

}


console.log(viewCart())



function total() {
  var total = 0;
  for(let i  = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  var found = false;
  var newCart = []
  for(let i = 0; i < cart.length; i++)
  {
    if(cart[i].itemName == item)
    {
      found = true;
      newCart = cart.splice(i, 1)
      break;
    }
  }

  return (found) ? newCart : "That item is not in your cart."
}

function placeOrder(cardNumber = null) {

  if(cardNumber !== null)
  {
    var price = total();

    cart.length = 0;
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
addToCart("xd")
console.log(placeOrder(12))
