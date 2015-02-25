$(function(){

    $.fn.greenify = function() {
        this.css( { "color": "green", "font-weight": "bold"} );
    };
    $( "a" ).greenify();  
    // Makes all the links green.
    
});

