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
        $nom=$_GET['name'].'%';
        $req1=$database->prepare("SELECT `customerNumber`, `customerName` FROM `customers` WHERE customerName LIKE ?");
        $req1->execute([$nom]);
        $noms=$req1->fetchAll();
        echo JSON_encode($noms);

    }  
?>