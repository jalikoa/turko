<?php
include "dbConfig.php";
include "inputsanitiser.php";
if (isset($_POST["orderstarted"])){
    $productid = sanitize_text_input($_POST["productid"]);
    $customerid = sanitize_text_input($_POST["customerid"]);
    $sql = "SELECT * FROM orders WHERE product_id = '$productid' AND customer_id = '$customerid'";
    $results = $conn->query($sql);
    if ($results->num_rows > 0) {
        $row = $results->fetch_assoc();
        if ($row["status"] == "paid"){
            echo tojs(["success" => false,"message" => "Your order for this was already received"]);
        } else {
            echo tojs("success" => true);
        }
    } else {
        $sql = "INSERT INTO orders (customer_id,product_id,status) VALUES ('$customerid','$productid','pending')";
        echo tojs(["success" => true]);
    }
    
}
if (isset($_POST["vieworders"])){
    
}
if (isset($_POST["editorder"])){

}


?>