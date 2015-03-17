$(function(){
   
   $(".topLevel").click(function(){
       if($(this).hasClass("show")){
             $(this).find(".subLevel").animate({
                height: "0",
                overflow: "hidden" 
             }, 3000); 
             $(this).removeClass("show");
       } else {
           $(this).find(".subLevel").animate({
                height: "60px"
             }, 3000);
             $(this).addClass("show");
       }
      
   })
    
});