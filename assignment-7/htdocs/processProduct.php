<?php

// include script to connect to database
include ('connect_database.php');

// retrieve product id, image, and description from GET request
$product_id = $_GET['id_no'];
$product_image = $_GET['image'];
$product_description = $_GET['desc'];

// retrieve appropriate product title, price, and quantity from product table
$query = 'SELECT * FROM product WHERE item_no = '.$product_id;
$result = $database_connection->query($query);
if($result->num_rows > 0) {
    while($product = $result->fetch_assoc()) {
       $product_title = $product['item_name'];
       $product_price = $product['price'];
       $product_quantity = $product['inventory'];
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product</title>
    <link rel="stylesheet" href="../../css/pages.css">
</head>
<body>
<div style="margin: auto; width: 50%">
    <h2  id='product_title'><?php echo $product_title; ?></h2><br/><br/>
    <img id='product_image' width='200'/> <br/>
    <h2 class="product-name"  id='product_description'></h2>
    <div>

        <?php
            if($product_quantity > 0) {

                echo "<h3>Price:  <span   class='product-price' id='product_price'>$product_price</span></h3>";

                echo "<h3>Quantity: <input id='input_quantity' min='1' type='number' onchange='checkIfUserInputForProductQuantityIsMoreThanInventoryLeft()' /><br/><br/>";

                echo "<a href='checkout.html?id_no=$product_id&title=$product_title&image=$product_image&desc=$product_description&quantity=$product_quantity&price=$product_price
                '><button id='button_buy_now' style='margin-top: 20px;'><img class='button-image'
                src='images/BuyNow.png'></button></a>";
            } else {
                echo "<h3>Price:  <span   class='product-price' id='product_price'>$product_price</span></h3>";

                echo "<h2 style='font-size:40px;'>Sold Out</h2>";
            }
        ?>

    </div>

    <a href="store_index.html">Continue Shopping</a>
</div>
</body>
<script>
// retrieve product details from php script
const product_id = "<?php echo $product_id; ?>";
const product_image = "<?php echo $product_image; ?>";
const product_description = "<?php echo $product_description; ?>";
const product_title = "<?php echo $product_title; ?>";
const product_quantity = "<?php echo $product_quantity; ?>";

// update product info
document.getElementById('product_image').src = product_image;
document.getElementById('product_description').innerHTML = product_description;

function checkIfUserInputForProductQuantityIsMoreThanInventoryLeft() {
    const user_entered_product_quantity = document.getElementById('input_quantity').value;
    sessionStorage.setItem('user_entered_product_quantity', user_entered_product_quantity);

    if(parseInt(user_entered_product_quantity) > product_quantity) {
        alert(`Only ${product_quantity} ${product_title} left in stock`);
    }
}

</script>
</html>
