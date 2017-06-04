var cart

function setCart(array) {
  cart = array
  console.log(cart)
}

function total() {
  var itemSum = 0
  for(let i = 0; i < cart.length; i++) {
    itemSum += cart[i]
  }
  return itemSum
}
