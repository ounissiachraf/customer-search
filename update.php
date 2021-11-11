<?php

    try{
            $database = new PDO('mysql:host=localhost;dbname=classicmodels;charset=utf8','root','');
        }
    catch (Exception $e)
        {
            die('Erreur : '.$e->getMessage());
        }

    if(!empty($_POST))
    {

        $number=$_GET['target'];
        $input1=$_POST['input1'];
        $adress1=$_POST['adress1'];
        $adress2=$_POST['adress2'];
        $codepostal=$_POST['codepostal'];
        $city=$_POST['city'];
        $country=$_POST['country'];
        $first=$_POST['firstnamecontact'];
        $phone=$_POST['phone'];
        $last=$_POST['lastnamecontact'];
        $x="UPDATE `customers` SET `customerName`=?,`contactLastName`=?,`contactFirstName`=?,`phone`=?,`addressLine1`=?,`addressLine2`=?,`city`=?,`postalCode`=?,`country`=? WHERE `customerNumber`= ?";

        $req=$database->prepare($x);
        $req->execute(
            [
                $input1,
                $last,
                $first,
                $phone,
                $city,
                $adress1,
                $adress2,
                $codepostal,
                $country,
                $number
            ]
        );

    }  
?>