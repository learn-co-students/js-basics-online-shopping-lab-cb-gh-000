var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var o = {
        [item]: Math.floor(Math.random() * (100)) + 1
    }
    cart.push(o);
    console.log(`${item} has been added to your cart.`);
    return getCart();
}

function viewCart() {
    if (cart.length == 0) {
        console.log('Your shopping cart is empty.');
    } else {
        var str = "In your cart, you have ";
        for (var i = 0; i < cart.length; i++) {
            if (i == cart.length - 1 && cart.length !== 1) {
                str += "and ";
            }
            str += `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`;
            if (i == cart.length - 1) {
                str += ".";
            } else if(cart.length > 2){
                str += ", ";
            } else {
                str += " ";
            }
        }

        console.log(str);

    }
}

function total() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i][Object.keys(cart[i])[0]];
    }
    return total;
}

function removeFromCart(item) {
    var found = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i,1);
            found = true;
        }
    }
    if (!found) {
        console.log("That item is not in your cart.");
    }
    return cart;
}

function placeOrder(cardNumber) {
    if (!cardNumber) {
        console.log("Sorry, we don't have a credit card on file for you.");
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    }
    cart.length = 0;
    return cart;
}
