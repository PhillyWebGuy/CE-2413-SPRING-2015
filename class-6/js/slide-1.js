$(function(){
   $(".button").click(function(){
       $( ".box" ).slideDown( "slow", function() {
        // Animation complete.
        });
   }); 
});

$(function(){
   $(".closeLink").click(function(){
       $( ".box" ).slideUp( "slow", function() {
        // Animation complete.
        });
   }); 
});