$("button").click(function(){
  $.post("http://www.renga5hosting.com/mail.php",
  {
	name:"Ed Hertzog",
	city:"Havertown"
  },
  function(data,status){
	alert("Data: " + data + "\nStatus: " + status);
  });
});

