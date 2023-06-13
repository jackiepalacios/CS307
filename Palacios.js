/*Jacqueline Palacios
    00100531
    jpalacio@my.athens.edu*/

    //Javascript code
    function myFunction(elmnt,clr) {
    elmnt.style.color = clr;
    }

    //jQuery events
    $(document).ready(function() {
        $("#ena").animate({left: "+=500"}, 2000);
        $("#ena").animate({left: "-=300"}, 1000);
    });