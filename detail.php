<?php

    try{
            $database = new PDO('mysql:host=localhost;dbname=classicmodels;charset=utf8','root','');
        }
    catch (Exception $e)
        {
            die('Erreur : '.$e->getMessage());
        }

    if(!empty($_GET))
    {
        $number=$_GET['id'];
        $req=$database->prepare("SELECT `customerName`,`contactLastName`,`addressLine1`,`addressLine2`,`postalCode`,`city`,`country`,`contactFirstName`,`phone` 
        FROM `customers`
        WHERE customerNumber LIKE ?");
        $req->execute([$number]);
        $detail=$req->fetch();
        echo JSON_encode($detail);
    }  
?>