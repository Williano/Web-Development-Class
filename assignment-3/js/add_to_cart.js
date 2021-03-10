function addToCart() {
  var cart = {};

  var productName = document.getElementsByClassName("product-name")[0]
    .innerHTML;
  var productImage = document.getElementsByTagName("img")[0].src;
  var productPrice = document.getElementById("product-price").innerHTML;
  var productQuantity = document.getElementById("quantity").value;

  if (productQuantity == "") {
    alert("Product quantity should not be empty");
  } else {
    cart["productName"] = productName;
    cart["productImage"] = productImage;
    cart["productPrice"] = productPrice;
    cart["productQuantity"] = productQuantity;

    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart successfully.");

    var userInput = confirm(`Add ${productName} to cart?`);

    if (userInput == true) {
      location.href = "../../store_index.html";
    } else {
      location.href = "#";
    }
  }
}
