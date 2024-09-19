 <?php
    include "dbConfig.php";
    include "inputsanitizer.php";
    if (isset($_POST["searchproduct"])){
        $productname = sanitize_text_input($_POST["productname"]);
        $sql = "SELECT * FROM products WHERE name LIKE '$productname' OR description LIKE '$productname'";
        $results = $conn->query($sql);
        if ($results->num_rows > 0){
            while($row = $results->fetch_assoc()){
                $products[] = $row;
            }
            echo tojs(["success" => true,"message" => "Product search was successfull","productlist" => $products]);
        } else {
            echo tojs(["success" => false,"message" => "Sorry there is no product found with the information that you have provided please check the name of the product that you want and try again"]);
        }
    }

 ?>