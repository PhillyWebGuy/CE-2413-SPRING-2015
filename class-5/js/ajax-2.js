$(function(){
   $(".menu li").click(function(){
    $.get("page-1.html",function(data, status){
	    $(".main").text("Data: " + data + "<P>Status: " + status);
    });
}); 
});