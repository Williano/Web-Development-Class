function reviewCart() {
  var cart = JSON.parse(sessionStorage.getItem("cart"));

  var cartLength = cart.length;

  if (cartLength > 0) {
    location.href = "/cart.html";
  } else {
    alert("Empy Cart - Please Buy Something First");
  }
}
