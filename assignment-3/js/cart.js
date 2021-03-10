function addToCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  let item = {};

  var productName = document.getElementsByClassName("product-name")[0]
    .innerHTML;
  var productImage = document.getElementsByTagName("img")[0].src;
  var productPrice = document.getElementsByClassName("product-price")[0]
    .innerHTML;
  var productQuantity = document.getElementById("quantity").value;

  if (productQuantity == "") {
    alert("Product quantity should not be empty");
  } else {
    item["productName"] = productName;
    item["productImage"] = productImage;
    item["productPrice"] = productPrice;
    item["productQuantity"] = productQuantity;

    const itemExist = cart.some(
      (product) => product.productName === productName
    );

    if (itemExist) {
      alert(`${productName} alread exist!`);
    } else {
      cart.push(item);

      sessionStorage.setItem("cart", JSON.stringify(cart));

      console.log(cart);
      alert("Item added to cart successfully.");
    }

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
  var content = document.getElementById("tableBody");

  if (cart.length > 0 || cart != null) {
    content.innerHTML = cart
      .map((item, index) => {
        var productPrice = parseFloat(item.productPrice);
        var productQuantity = parseInt(item.productQuantity, 10);

        var productTotal = productPrice * productQuantity;

        var itemName = item.productName;

        return (
          "<tr><td>" +
          index +
          '</td><td id="product-name">' +
          item.productName +
          "<br>" +
          '<img class="product-image" src= ' +
          item.productImage +
          "  >" +
          "<br>" +
          '<input type="button" value="Remove" onClick="removeItem(\'' +
          item.productName +
          "')\" />" +
          "</td><td>" +
          item.productPrice +
          "</td><td>" +
          item.productQuantity +
          "</td><td>" +
          "<span>" +
          "$" +
          "</span>" +
          '<span id="productTotal">' +
          parseFloat(productTotal).toFixed(2) +
          "</span>" +
          "</td></tr>"
        );
      })
      .join("");
  } else {
    alert("Empty Cart - Please Buy Something First");
  }
}

function removeItem(productName) {
  var productName = productName;

  var cart = JSON.parse(sessionStorage.getItem("cart"));

  var userInput = confirm(`Delete ${productName} From Shopping cart?`);

  if (userInput == true) {
    cart = cart.filter((item) => item.productName != productName);
    sessionStorage.setItem("cart", JSON.stringify(cart));

    location.href = "cart.html";
  } else {
    location.href = "#";
  }
}

function cartTotal() {
  var totalCell = document.getElementById("cart-total");

  var cart = JSON.parse(sessionStorage.getItem("cart"));

  var total = 0;
  cart.map((item, index) => {
    var productPrice = parseFloat(item.productPrice);
    var productQuantity = parseInt(item.productQuantity, 10);

    var productTotal = productPrice * productQuantity;

    total = total + productTotal;
  });
  totalCell.innerHTML =
    "<span>" + "$" + "</span>" + parseFloat(total).toFixed(2);
}

function callFunctions() {
  getCartItems();
  cartTotal();
}
