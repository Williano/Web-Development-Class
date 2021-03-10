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

function getCartItems() {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  var content = document.getElementById("cartTable");

  productTotal = productPrice * productQuantity;

  content.innerHTML = cart
    .map((product, index) => {
      return (
        "<tr><td>" +
        index +
        "</td><td>" +
        product.productName +
        "<br/>" +
        'img src="`${productImage}`" alt="productImage" />' +
        "<br />" +
        '<button onclick="removeItem()">Remove</button>' +
        "</td><td>" +
        product.productPrice +
        "</td><td>" +
        product.productQuantity +
        "</td><td>" +
        productTotal +
        "</td></tr>"
      );
    })
    .join("");
}
