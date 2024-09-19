<?php
function sanitize_text_input($data){
 return htmlspecialchars(stripslashes(trim($data)));
}
function tojs($value){
    return json_encode($value);
}

?>