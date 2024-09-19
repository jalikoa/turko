<?php
#This is the php file that has the logics to handle the process of a person commenting on the products either by a video or a picture or a text or a voice note 
include "dbConfig.php";
include "inputsanitizer.php";
if (isset($_POST["comment"])){
    $commentsender = sanitize_text_input($_POST["commentsender"]);
    $productid = sanitize_text_input($_POST["productId"]);
    // $commentfile ####  Here should add a way on hanling file comments and maybe can some logics that will govern the commenting language


}
if (isset($_POST["deletecomment"])){
    #This logics will monly work for the business admin and the person who has written the comment
}
if (isset($_POST["editcomment"])){

}
if (isset($_POST["reacttocomment"])){
    //People liking a comment can be viwed by every one then it can also just show some peoples prof pic the ones that are quitte near this should be doen by a machine learning algorithm
}
#logics on liking a product and also reacting to a comment is key 
#room should also be left for people to directly addrees the admin on a specific product
?>