$(function(){
  
   var firstName = "Ed";
   var lastName = "Hertzog"
   var name = firstName + " " + lastName;
   var state = "Pennsylvania";
   
    function namePhrase(name) {
        return name + " is a student at UArts. ";    
    }

    function statePhrase(name, state) {
        return name + " lives in the state of " + state + ". ";
    }

    function fullStatement(firstName, lastName, state) {
        var fullNameStr = namePhrase(firstName + " " + lastName);
        return fullNameStr + statePhrase(firstName + " " + lastName, state);
    }
    
    var str = fullStatement(firstName, lastName, state);
    
    $("#myOutputStrID").html(str);
    $(".myOutputStrClass").html(str);
    $("h3").html(str);

});
