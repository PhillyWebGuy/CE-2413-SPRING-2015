$(function(){
    $("h1").on('mouseover', function(){
        console.log("mouse is over the target area");    
    });
    $("h1").on('mouseout', function(){
        console.log("mouse is no lonver over target area");    
    });    
});