'use strict';

////////////////////////////////
// FONCTIONS DE CALLBACK AJAX //
////////////////////////////////


function chargement(detail){

    $(".alldetail").hide();

    detail=JSON.parse(detail);

    $(".head h1").empty();
    $(".head h1").append(detail[0]);

    $(".contact").empty();
    $(".contact").append(detail[1]);


    $(".phone").empty();
    $(".phone").append(detail[8]);


    $(".adress").empty();
    $(".adress").append(detail[2]);



    $(".country").empty();
    $(".country").append(detail[6]);



    $("#input1").empty();
    $("#input1").val(detail[0]);

    $("#adress1").empty();
    $("#adress1").val(detail[2]);


    $("#adress2").empty();
    $("#adress2").val(detail[3]);


    $("#codepostal").empty();
    $("#codepostal").val(detail[4]);

    $("#city").empty();
    $("#city").val(detail[5]);

    $("#country").empty();
    $("#country").val(detail[6]);


    $("#firstnamecontact").empty();
    $("#firstnamecontact").val(detail[7]);
    

    $("#phone").empty();
    $("#phone").val(detail[8]);

    $("#lastnamecontact").empty();
    $("#lastnamecontact").val(detail[1]);
}


function newlist(noms){
    noms= JSON.parse(noms);
    $("ul").empty();
    for (let i=0; i<noms.length; i++)
    $("ul").append("<li data-id='"+noms[i].customerNumber+"'>"+noms[i].customerName+"</li>")
}

