function reviewCart() {
  var cart = sessionStorage.getItem("cart");

  var cartLength = cart.size;

  console.log(cart);

  alert("Empy Cart - Please Buy Something First");
}
