var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random() * 100)
  cart.push({ [item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var line = "In your cart, you have"
  if(cart.length > 0) {
    for (var i = 0; i < cart.length-1; i++) {
      let itemandprice = cart[i]
      let item = Object.keys(itemandprice)[0]
      let price = itemandprice[item]
      line += ` ${item} at $${price},`
    }
    var i = cart.length
    let itemandprice = cart[i-1]
    let item = Object.keys(itemandprice)[0]
    let price = itemandprice[item]
    if (i == 1) {
      line += ` ${item} at $${price}.`
    } else {
      line += ` and ${item} at $${price}.`
    }

  } else {
    console.log("Your shopping cart is empty.")
  }

  console.log(line)
}

function total() {
  var total = 0

  for (var i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]
    total += price
  }
  return total
}

function removeFromCart(item) {
  var isInCart = false

  for (var i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i]
    if (itemAndPrice.hasOwnProperty(item)) {
      isInCart = true
      cart.splice(i,1)
    }
  }

  if(!isInCart) {
    console.log('That item is not in your cart.')
  }

  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    let t = total()
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
