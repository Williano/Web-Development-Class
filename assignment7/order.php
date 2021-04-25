<?php

   include ('connect_database.php');

   $error_message = '';

   // check for required fields
   if(!$_POST['name_last']) {
        $error_message = 'Last name is required and should not be left blank';
   } else if(!$_POST['email']) {
        $error_message = 'Email is required and should not be left blank';
   } else if(!$_POST['address1']) {
        $error_message = 'Address is required and should not be left blank';
   } else if(!$_POST['city']) {
        $error_message = 'City is required and should not be left blank';
   } else if(!$_POST['state']) {
        $error_message = 'State is required and should not be left blank';
   } else if(!$_POST['zip']) {
        $error_message = 'Zip is required and should not be left blank';
   } else if(!$_POST['phone']) {
        $error_message = 'Phone is required and should not be left blank';
   } // validate fields based on rules
   else if (isset($_POST['name_first']) && $_POST['name_first'] &&
   !preg_match('/^([A-Z]{1})([A-Za-z\s]+$)/', $_POST['name_first'])) {
        $error_message = 'First name can contain only alphas or a space, and should begin with a capital letter';
   } else if (isset($_POST['name_last']) &&  !preg_match('/^([A-Z]{1})([A-Za-z\s]+$)/', $_POST['name_last'])) {
         $error_message = 'Last name can contain only alphas or a space, and should begin with a capital letter';
   } else if(isset($_POST['email']) &&
   !preg_match('/^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,4})$/',
   $_POST['email'])) {
         $error_message = 'Invalid email. Must be in a format like: john@example.com';
   } else  if (isset($_POST['address1']) && !preg_match('/^([0-9]{1})([0-9A-Za-z\s]+$)/', $_POST['address1'])) {
         $error_message = 'Address1 must begin with a digit street number. The rest can be any alpha, digit or space';
   } else if (isset($_POST['city']) && !preg_match('/^([A-Z]{1})([A-Za-z\s]+$)/', $_POST['city'])) {
         $error_message = 'City can contain only alphas or a space, and should begin with a capital letter';
   } else if (isset($_POST['state']) && !preg_match('/^[A-Z]{2}+$/', $_POST['state'])) {
        $error_message = 'State must consist of 2 capital alpha letters';
   } else if (isset($_POST['zip']) && !preg_match('/^[0-9]{5}+$/', $_POST['zip'])) {
        $error_message = 'Zip code must consist of exactly 5 digits';
   } else if (isset($_POST['phone']) && preg_match('/^[0-9]{10}+$/', $_POST['phone'])) {}
     else if(isset($_POST['phone']) && strlen($_POST['phone']) == 12 && preg_match('/\-/', $_POST['phone']) && preg_match('/^[0-9\-\(\)]{10,13}+$/', $_POST['phone'])) {}
     else if(isset($_POST['phone']) && strlen($_POST['phone']) == 13 && preg_match('/\(|\)/', $_POST['phone']) && preg_match('/^[0-9\-\(\)]{10,13}+$/', $_POST['phone'])) {}
     else {
        $error_message = 'Invalid phone number. Ex of valid phone numbers: 5555555555, (555)555-5555, 555-555-5555';
   }

   // store error message in browser session if there was a validation error
   if($error_message != '') {
        echo $error_message;
        echo "
            <script>
                sessionStorage.setItem('status', '$error_message');
            </script>
        ";
   } else {

     $customer_id = date("mdhis");
     $first_name = $_POST['name_first'];
     $last_name = $_POST['name_last'];
     // $email = $_POST['email'];
     $address1 = $_POST['address1'];
     $address2 = $_POST['address2'];
     $city = $_POST['city'];
     $state = $_POST['state'];
     $zip = $_POST['zip'];
     $country = $_POST['country'];
     $phone = $_POST['phone'];
     $fax = $_POST['fax'];
     $mail_list = $_POST['mailing_list'] == 'on' ? true : false;
     $expiration_month = $_POST['expiration_month'];
     $expiration_year = $_POST['expiration_year'];
     $order_id = date("mdhis");
     $order_date = date("Y-m-d H:i:s"); 

     $product_id = $_POST['product_id'];
     $current_quantity = $_POST['current_quantity'];
     $purchase_quantity = $_POST['purchase_quantity'];
     $quantity_left = $current_quantity - $purchase_quantity;

    // TODO: save order details
    $customer_query = "INSERT INTO student_space.customer (customer_id, exp_mo, exp_year, name_first, name_last, address1, address2, city,
    state, zip, country, phone, fax, mail_list) VALUES('$customer_id', '$expiration_month', '$expiration_year', '$first_name', '$last_name', 
    '$address1', '$address2', '$city', '$state', '$zip', '$country', '$phone', '$fax', '$mail_list')";

    $order_query = "INSERT INTO student_space.order (order_id, order_date, customer_id) 
    VALUES('$order_id', '$order_date', '$customer_id')";

    $order_product_query = "INSERT INTO student_space.order_product (item_no, order_id, quantity) VALUES($product_id,
    $order_id, $purchase_quantity)";

    $product_query = "UPDATE product SET inventory = $quantity_left WHERE item_no = $product_id";

    if ($database_connection->query($customer_query) && 
    $database_connection->query($order_query) && 
    $database_connection->query($order_product_query) && 
    $database_connection->query($product_query)) {
          echo "
            <script>
                sessionStorage.setItem('status', 'success');
            </script>
          ";
    } else {
          echo "Error: " . $database_connection->error;
    }
   }

 // go back to checkout page
   echo "
            <script>
                window.history.go(-1);
            </script>
    ";
?>