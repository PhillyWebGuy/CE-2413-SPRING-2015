$(function() {
   
   $(".menu-item").on('mouseover', function(){
        $(this).css("background-color", "grey");
   });
      $(".menu-item").on('mouseout', function(){
        $(this).css("background-color", "white");       
   });
    
});