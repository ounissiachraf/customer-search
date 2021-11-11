'use strict';

////////////////////
// CODE PRINCIPAL //
////////////////////

$(function()
{
    $("[name='nom']").on('keyup',affiche);
    $("#listecustomer").on('click',"li",detail);
    $("#openall").on('click',openall);
    $("#valider").on('click',valider)
    
});