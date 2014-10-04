"use strict";

var loser = false;

window.onload = function() 
{

    $("boundary1").onmouseover = overBoundary;

    var boundaries = $$("div#maze div.boundary");
    for (var counter = 0; counter < boundaries.length; counter++) 
    {
        boundaries[counter].onmouseover = overBoundary;
    }


    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;

};

function overBoundary() 
{

    $("boundary1").addClassName("youlose");

    loser = true;

    var boundaries = $$("div#maze div.boundary");
    for (var counter = 0; counter < boundaries.length; counter++) 
    {
        boundaries[counter].addClassName("youlose");
    }

    $("status").textContent = "You lose!";

}


function startClick() 
{
    loser = false;

    var boundaries = $$("div#maze div.boundary");
    for (var counter = 0; counter < boundaries.length; counter++) 
    {
        boundaries[counter].removeClassName("youlose");
    }

        $("status").textContent = "Find the end!";
}

function overEnd() 
{
    if(!loser) 
    {
       $("status").textContent = "You win!";
    } 
   
}

/*function overEdge()
{
    if(var edgeCheck > boundaries.length)
    {
        $("status").textContent = "You lose!";
    }

}*/
