$(function() {
   
   $(".menu-item").on('mouseover', function(){
    $(this).css("color", "white");
    $(this).css("background-color", "grey");
   });
   
   $(".menu-item").on('mouseout', function(){
    $(this).css("color", "blue");
    $(this).css("background-color", "white");
   });
   
   $(".menu-image").on('click', function(){
    var img = $(this).data()['image'];
    $(".my-image-holder").attr("src", img);
   });
   
   
    
});