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
 var object = {};
 object[item] = Math.floor(Math.random() * 100);
 cart.push(object);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

// Same output as solution given...
// function viewCart() {
//   // write your code here
//   var print_temp = `In your cart, you have ` ;
//
//   if (cart.length === 0) {
//     return console.log("Your shopping cart is empty.")
//   } else {
//
//     for (let i = 0; i < cart.length; i++) {
//
//       if (i !== cart.length - 1) {
//         var str_temp = `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])]}`;
//         print_temp += str_temp + ", ";
//       } else {
//         var str_temp = `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])]}`;
//         print_temp += "and " + str_temp + ".";
//       }
//
//     }
//
//   }
//   console.log(print_temp);
// }

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
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])[0]];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  let itemInside = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInside = true;
      cart = cart.slice(0,i).concat(cart.slice(i+1));
    }
  }

  if (!itemInside) {
    console.log(`That item is not in your cart.`);
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === "undefined") {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  return cart = [];
}
