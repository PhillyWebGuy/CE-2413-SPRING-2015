$(function(){
    
    $(".menu li").click(function() {
           
           $(".main").load($(this).data("page"),{},function(){
                console.log('click');
           });         
    });

});