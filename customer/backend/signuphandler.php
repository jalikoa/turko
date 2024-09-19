<?php
#This is the logics that is written to handle the user signing up 
include "dbConfig.php";
include "inputsanitizer.php";
if (isset($_POST["signup"])){
    $customername = sanitize_text_input($_POST["customername"]);
    $customeremail = sanitize_text_input($_POST["customeremail"]);
    $customercontact = sanitize_text_input($_POST["customercontact"]);
    $customerlocation = sanitize_text_input($_POST["customerlocation"]);
    $customerpassword = password_hash(sanitize_text_input($_POST["customerpassword"]),PASSWORD_BCRYPT);
    // Here more validations will be added to check on the inputts if they meet the requirements before they are inserted into the database 
    #validation to check if there is a customer who is already existing with the credentials that ar eprovided
    #email and conatct should be unique
    $sql = "SELECT * FROM customers WHERE email = '$customeremail' OR contact = '$customeremail'";
    if($conn->query($sql)->num_rows > 0){
        echo tojs(["success" => false ,"message" => "Sorry there is a user existing with one of the credentials that you have provided please try using another email or contact please"]);
    } else {
    $sql = "INSERT INTO customers (name,email,contact,location,password) VALUES ('$customername','$customeremail','$customercontact','$customerlocation','$customerpassword')";
    if ($conn->query($sql)){
        echo tojs(["success" => true,"message" => "You have been successfully registered please you can now go in the login page and login please"]);
    } else {
        echo tojs(["success" => false,"message" => "Sorry there was a problem while registering you please try again later"]);
    }
    }
}

?>