$(function() {
   
   $(".menu-item").on('mouseover', function(){
        $(this).css("color", "white");
        $(this).css("background-color", "grey");
   });
      $(".menu-item").on('mouseout', function(){
        $(this).css("color", "blue");
        $(this).css("background-color", "white");
   });
   
   
    
});