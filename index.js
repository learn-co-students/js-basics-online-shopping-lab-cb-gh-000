let cart = [];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
    return cart;
}

function addToCart(item) {
    let price = Math.floor(Math.random() * 100);
    cart.push({[item]:price});
    console.log(`${item} has been added to your cart.`);
    return cart
}

function viewCart() {
    const l = cart.length;

    if (!l) {
        return console.log("Your shopping cart is empty.");
    }

    let itemsAndPrices = [];

    for (let i = 0; i < l; i++) {
        let itemAndPrice = cart[i];
        let item = Object.keys(itemAndPrice)[0];
        let price = itemAndPrice[item];

        itemsAndPrices.push(`${item} at \$${price}`);
    }

    switch(itemsAndPrices.length) {
        case 1:
            break;
        case 2:
            itemsAndPrices = itemsAndPrices.join(" and ");
            break;
        default:
            itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
            itemsAndPrices = itemsAndPrices.join(", ");
    }

    console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let items = cart[i];
        let item = Object.keys(items)[0];
        total += items[item]
    }
    return total
}

function removeFromCart(item) {
    let inCart = false;

    for (let i = 0, l = cart.length; i < l; i++) {
        if (cart[i].hasOwnProperty(item)) {
            inCart = true;
            cart = cart.slice(0, i).concat(cart.slice(i+1));
            l--
        }
    }

    if (!inCart) {
        return console.log(`That item is not in your cart.`)
    }
    else {
        return cart
    }
}

function placeOrder(cardNumber) {
    if (!cardNumber) {
         console.log("Sorry, we don't have a credit card on file for you.");
        return false
    }
    else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = []
    }
}
addToCart('Banana');
viewCart();
addToCart('Dildo');
viewCart();
addToCart('BBC');
viewCart();