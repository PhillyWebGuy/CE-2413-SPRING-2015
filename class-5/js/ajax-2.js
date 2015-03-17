$(function(){
   $(".menu li").click(function(){
    $.get($(this).data("page"),function(data, status){
	    $(".main").html("Data: " + data + "<P>Status: " + status);
	    //$(".main").html(data);
    });
}); 
});