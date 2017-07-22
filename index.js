var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = { [item] : Math.floor(Math.random() * 100) + 1 };
  getCart().push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  var cart = getCart();
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var text = "In your cart, you have";
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1 && cart.length >= 2) {
        text += " and";
      }
      var obj = cart[i];
      var key = Object.keys(obj);
      text += ` ${key} at $${obj[key[0]]}`;
      if (i === cart.length - 1) {
        text += ".";
      } else if (cart.length > 2) {
        text += ",";
      }
    }
    console.log(text);
  }
}

function total() {
  var cart = getCart();
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var price = item[Object.keys(item)[0]];
    total += price;
  }
  return total;
}

function removeFromCart(item) {
  var cart = getCart();

  var index = findIndexOfItemInCart(item);
  if (index > 0) {
    return cart.splice(index, 1);
  } else {
    console.log("That item is not in your cart.");
    return cart;
  }
  function findIndexOfItemInCart(item) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        return i;
      }
    }
    return -1;
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    return setCart([]);
  }
}
