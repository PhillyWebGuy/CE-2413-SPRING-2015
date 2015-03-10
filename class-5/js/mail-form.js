$(function(){
    
    function submitForm(to, message, subject) {
        var msg = buildPost();

        $.post("https://www.renga5hosting.com/mail.php",
            msg,
            function(data,status){
	        });
    }

    function buildPost() {
        var to = "edhertzog@gmail.com";
        var subject = "Test Email";
        var message = $.trim($("#comments"));
        var msg = [];
        return msg[to, subject, message];
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