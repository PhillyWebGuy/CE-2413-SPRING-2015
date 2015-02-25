$(function(){
    
    function submitForm() {
        buildPost();
        console.log("submit form");
    }
    
    function buildPost() {
        console.log("cobble data");   
    }
    
    
    $("#myForm").on('submit', function() {
        event.preventDefault();
        
        if($("#firstName").val() == ""){
            $(".error-text").html("Please provide a first name.");
        } else if($("#lastName").val() == ""){
            $(".error-text").html("Please provide a last name.");
        } else if($.trim($("#comments").val()) == ""){
            $(".error-text").html("Please provide comments.");
        } else {
            $(".error-text").html("");
            submitForm();
        }
        
    });
    
});