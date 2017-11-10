var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var newItem = {};
    var price = Math.floor(Math.random() * 101);

    newItem[item] = price;
    cart.push(newItem);
    console.log(item + ' has been added to your cart.');
    return cart;
}

function viewCart() {
    var numItems = cart.length;
    var s = "In your cart, you have "

    switch (numItems) {
        case 0:
            console.log('Your shopping cart is empty.');
            break;
        case 1:
            for (var key in cart[0]) {
                if (cart[0].hasOwnProperty(key)) {
                    s = s + key + ' at ' + '$' + cart[0][key];
                }
            }
            break;
        case 2:
            for (var i = 0; i < numItems; i++) {
                for (var key in cart[i]) {
                    if (cart[i].hasOwnProperty(key)) s = s + key + ' at ' + '$' + cart[i][key];
                    if (i === 0) s = s + ' and ';
                }
            }
            break;
        default:
            for (var i = 0; i < numItems; i++) {
                for (var key in cart[i]) {
                    if (cart[i].hasOwnProperty(key)) s = s + key + ' at ' + '$' + cart[i][key];

                    if (i < numItems - 2) s = s + ', ';
                    else if (i === numItems - 2) s = s + ', and ';
                }
            }
            break;
    }

    s = s + '.';
    console.log(s);
}

function total() {
    var sum = 0;

    for (var i = 0; i < cart.length; i++) {
        for (var key in cart[i]) {
            if (cart[i].hasOwnProperty(key)) {
                sum += cart[i][key];
            }
        }
    }

    return sum;
}

function removeFromCart(item) {
    var isInCart = false;

    for (var i = 0; i < cart.length; i++) {
        for (var key in cart[i]) {
            if (cart[i].hasOwnProperty(key) && key == item) {
                isInCart = true;
                cart = [...cart.slice(0, i), ...cart.slice(i+1, cart.length)];
            }
        }
    }

    if (isInCart) return cart;
    else console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
    var s;

    if (cardNumber == undefined) {
        s = "Sorry, we don\'t have a credit card on file for you.";
    } else {
        s = 'Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber + '.';
    }

    console.log(s);

    while (cart.length !== 0) {
        cart.pop();
    }
}
