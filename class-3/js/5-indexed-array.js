$(function(){
    
    var stateList = [];

    stateList.push("Pennsylvania");
    stateList.push("New Jersey");
    stateList.push("Delaware");
    stateList.push("New York");

    
    function buildSelect(myArray) {
    
        var beginSelectStr = "<select>";
        var optionsStr = "";
    
        for(var i = 0; i < myArray.length; i++) {
            optionsStr = optionsStr + "<option>" + myArray[i] + "</option>";        
        }
    
        var endSelectStr = "</select>";
        
        return beginSelectStr + optionsStr + endSelectStr;

    }

    var mySelect = buildSelect(stateList);

    $('body').html(mySelect);

});