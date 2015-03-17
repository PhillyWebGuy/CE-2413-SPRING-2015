$(function(){
   $(".menu li").click(function(){
    $.get($(this).data("page"),function(data, status){
	    $(".main").text("Data: " + data + "<P>Status: " + status);
    });
}); 
});