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

  content.innerHTML = cart
    .map((item, index) => {
      var productPrice = parseFloat(item.productPrice).toFixed(2);
      var productQuantity = parseFloat(item.productQuantity).toFixed(2);

      var productTotal = productPrice * productQuantity;

      return (
        "<tr><td>" +
        index +
        "</td><td>" +
        item.productName +
        "<br>" +
        "<img src= " +
        item.productImage +
        '  height="80px" width="80px">' +
        "<br>" +
        "<button  onclick=" +
        '"removeItem(' +
        item.productName +
        ')"' +
        ">Remove</button>" +
        "</td><td>" +
        item.productPrice +
        "</td><td>" +
        item.productQuantity +
        "</td><td>" +
        +"</td></tr>"
      );
    })
    .join("");
}

function removeItem(itemName) {
  console.log(itemName);
}
