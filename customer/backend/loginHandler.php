<?php
session_start();
#Proper auth should be done to make sure that the user moves in to the dashboard with proper aunthenticated means and can not fake logging in

include "dbConfig.php";
include "inputsanitizer.php";
if (isset($_POST["login"])){
    $useremailOrContact = sanitize_text_input($_POST["customeremailorcontact"]);
    $customerpassword = sanitize_text_input($_POST["customerpassword"]);
    $sql = "SELECT * FROM customers WHERE email = '$useremailOrContact' OR contact = '$useremailOrContact'";
    $results = $conn->query($sql);
    if ($results){
        if ($results->num_rows > 0){
            $row = $results->fetch_assoc();
            if (password_verify($customerpassword,$row["password"])){
                echo tojs(["success" => true,"message" => "Login was succefull","customer_id" => $row["id"]]);
                //Here add some logics to the login table tomake sure that the user login time is updated and the last seen time is calculated such that when the time is greater than 10 minutes he or she gets logged out
            } else {
                echo tojs(["success" => false,"message" => "Sorry there was a problem logging you in.The password provided for this account do not match our records"]);
            }
        } else {
            echo tojs(["success" => false,"message" => "Sorry there is no user existing with the credentials that you have provide please consider signing up"]);
        }

    } else {
        echo tojs(["success" => false,"message" => "Sorry could not log you in at the moment please try again later"]);
    }
}
?>