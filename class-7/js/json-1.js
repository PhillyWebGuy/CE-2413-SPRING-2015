$(function(){

   $.ajax("https://ce-2413-spring-2015-phillywebguy.c9.io/class-5/json/json-1.json", {
      success: function(response) {
          $('body').html(response.user.age);
      },
      error: function(xhr, textStatus, errorThrown) {
          console.dir(xhr);
          console.log(textStatus);
          console.log(errorThrown);
          $('body').html(xhr.responseText);
      }
   });


});