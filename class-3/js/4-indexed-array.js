$(function(){
    
    var stateList = [];

    stateList.push("Pennsylvania");
    stateList.push("New Jersey");
    stateList.push("Delaware");
    stateList.push("New York");

    
    var beginSelectStr = "<select>";
    var optionsStr = "";
    
    for(var i = 0; i < stateList.length; i++) {
        optionsStr = optionsStr + "<option>" + stateList[i] + "</option>";        
    }
    
    var endSelectStr = "</select>";

    document.write(beginSelectStr + optionsStr + endSelectStr);

});