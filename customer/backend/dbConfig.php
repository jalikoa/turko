<?php
 $hostname = 'localhost';
 $username = 'root';
 $password = '';
 $databasename = 'jalsofteccormerce';

 $conn = new mysqli($hostname,$username,$password,$databasename);
 if ($conn->connect_error){
        die('connection failed please try again later: '.$conn->connect_error);
        exit();
 }


?>