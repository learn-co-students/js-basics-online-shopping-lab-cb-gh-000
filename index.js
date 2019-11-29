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
    let i = {};
    i['itemName'] = item;
    i['itemPrice'] = Math.floor(Math.random()* 100);
    cart.push(i);
    return `${item} has been added to your cart.`;
}

function viewCart() {
    // write your code here
    if(cart.length){
        let str = ``;
        cart.forEach((element, index) => {
          if(index === cart.length - 1 && cart.length > 1){
            str += ` and ${element.itemName} at \$${element.itemPrice},`;
          }else{
            str += ` ${element.itemName} at \$${element.itemPrice},`;
        }
        });
        str = str.slice(0, -1) + '.';
        return `In your cart, you have` + str;
    }
    else{
        return "Your shopping cart is empty.";
    }

}

function total() {
    let t = 0;
    cart.forEach(element =>{
        t += element.itemPrice;
    });
    return t;
}

function removeFromCart(item) {
    // write your code here
    cart.forEach((element, index) => {
        if(item === element.itemName){
            cart.splice(index, 1);
            return cart;
        }
    });
    return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
    // write your code here
    if(cardNumber){
        let t = total();
        cart = [];
        return `Your total cost is \$${t}, which will be charged to the card ${cardNumber}.`
    }else{
        return "Sorry, we don't have a credit card on file for you."
    }
}
