$(function(){

   $.ajax("https://ce-2413-spring-2015-phillywebguy.c9.io/class-7/json/json-menu.json", {
      success: function(response) {
          console.dir(response.menu);
          var list = "";
          $.each(response.menu, function(index){
             list += "<li><a href='" + response.menu[index].link + "'>" + response.menu[index].text + "</a>"  
          });
          $(".menu").html(list);
      },
      error: function(xhr, textStatus, errorThrown) {
          console.dir(xhr);
          console.log(textStatus);
          console.log(errorThrown);
          $('body').html(xhr.responseText);
      }
   });


});