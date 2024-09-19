<?php
include "dbConfig.php";
include "inputsanitizer.php";
if (isset($_POST['addcart'])){
    $productid = sanitize_text_input($_POST["productid"]);
    // $productquantity = sanitize_text_input($_POST["productamount"]);
    $customerid = sanitize_text_input($_POST["customerid"]);
    //First do a validation to check if the product is alreadu added to the cart by the user 
    $sql = "SELECT * FROM carts WHERE customer_id = '$customerid' and product_id = '$productid'";
    $results = $conn->query($sql);
    if ($results->num_rows > 0){
        echo tojs(['success' => false,"message" => "Could not add product to your cart please the record already exits"]);
    } else {
    $sql = "INSERT INTO carts (product_id,customer_id) VALUES ('$productid','$customerid')";
    if ($conn->query($sql)){
        echo tojs(["success" => true,"message" => "Product was successfully added to cart"]);
    } else {
        echo tojs(["success" => false,"message" => "There was an error adding the product to cart please try again later"]);
    } }
}
if (isset($_POST['deletecart'])){
    $customerid = sanitize_text_input($_POST["customerid"]);
    $productid = sanitize_text_input($_POST["productid"]);

    $sql = "DELETE FROM carts WHERE customer_id = '$customerid' AND productid = '$productid'";
    $results = $conn->query($sql);
    if ($results){
        echo tojs(["success" => true,"message" => "The product was succesfully deleted from your cart items"]);
    } else {
        echo tojs(["success" => false,"message" => "There was a problem while deleting the product from your cart please try again later"]);
    }
}
#In this funtction more validation methods for the process of joining the tables should be added here
if (isset($_POST['fetchcart'])){
    $customerid = sanitize_text_input($_POST["customerid"]);
    $sql = "SELECT * from carts where customer_id = '$customerid'";
    $results = $conn->query($sql);
    if ($results->num_row > 0){
        while ($row = $results->fetch_assoc()){
            $products[] = $row; 
        }
        echo tojs(["success" => true,"messaege" => "Products fetched successfully from the carst storage","list" => $products]);
    }
}


?>