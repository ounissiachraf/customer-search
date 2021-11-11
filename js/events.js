'use strict';

///////////////////////////////
// GESTIONNAIRES D'EVENEMENT //
///////////////////////////////


function valider(event){
    
    event.preventDefault()
    let customerNumber=$(event.target).data("id");

    let OB= new Object();

    OB.input1=$("#input1").val();
    OB.adress1=$("#adress1").val();
    OB.adress2=$("#adress2").val();
    OB.codepostal=$("#codepostal").val();
    OB.city=$("#city").val();
    OB.country=$("#country").val();
    OB.firstnamecontact=$("#firstnamecontact").val();
    OB.phone=$("#phone").val();
    OB.lastnamecontact=$("#lastnamecontact").val();
    $.post("update.php?target="+customerNumber,OB);

}

function affiche(){
    let input=$("#search").val();
    $.get("search.php?name="+input,newlist);
}

function detail(event){
    let customerNumber=$(event.target).data("id");
    $("#valider").data("id",$(event.target).data("id"));
    $.get("detail.php?id="+customerNumber,chargement);
}




function openall(){

    $(".alldetail").show();

}
