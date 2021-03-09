function addToCart() {
  var productName = document.getElementsByClassName("product-name")[0]
    .innerHTML;

  var userInput = confirm(`Add ${productName} to cart?`);

  if (userInput == true) {
    location.href = "../../store_index.html";
  } else {
    window.location("#");
  }
}
