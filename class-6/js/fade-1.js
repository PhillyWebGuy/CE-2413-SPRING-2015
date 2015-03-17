$(function(){
   $(".button").click(function(){
       $( ".box" ).fadeIn( "slow", function() {
        // Animation complete.
        });
   }); 
});

$(function(){
   $(".closeLink").click(function(){
       $( ".box" ).fadeOut( "slow", function() {
        // Animation complete.
        });
   }); 
});