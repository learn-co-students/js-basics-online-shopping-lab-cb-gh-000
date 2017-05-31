var cart = []

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function getCart() {
  return cart
}

function addToCart(itemName) {
  let item = { [itemName]: Math.floor(Math.random() * 101) }
  cart.push(item)     // NOTE: We use push since that is what we are specting, modify outer state.
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0)
    console.log('Your shopping cart is empty.')

  let resultString = []
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i]
    let itemKey = Object.keys(item)[0]
    resultString.push(`${itemKey} at $${item[itemKey]}`)
  }
  console.log(`In your cart, you have ${resultString.join(', ')}.`)
}

function removeFromCart(itemName) {
  let removedAny = false
  for (var i = 0; i < cart.length; i++) {
    let item = cart[i]
    if (item.hasOwnProperty(itemName)) {
      cart.splice(i, 1)   // Splice modifies original cart, since that is what we are specting, modify outer state.
      i--;                // Update index.
      removedAny = true
      // We could break; but lets remove all matches.
    }
  }

  if (!removedAny)
    console.log('That item is not in your cart.')

  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
    return console.log("We don't have a credit card on file for you to place your order.")

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
