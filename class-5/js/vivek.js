$(document).ready(function () {
    var b1 = "Location! Location! Location!";
    var b2 = "Right in the heart of downtown Newark!";
    var b3 = "A short walk from the U of D campus!";

    var billArray = [b1, b2, b3];
    
    function animateText(i, myArray) {
        $('#billboard').fadeIn(1000).text(myArray[i]);
        $('#billboard').delay(4000).fadeOut(1000);
    }
    
    var x = 0;
    
    setInterval(function() {
        if(x > 2) {
            x = 0;    
        }
        animateText(x, billArray);
        x++;
    }, 6000);
    
    
  
    
});