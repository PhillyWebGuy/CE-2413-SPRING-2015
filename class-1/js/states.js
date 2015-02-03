var states = ["Pennsylvania", "NJ", "New York", "Maryland", "Ohio"];

var list = listStates(states);

document.write(list);

function listStates(theList) {
    
    var str = "";
    for(var i = 0; i < theList.length; i++){
        str += theList[i] + "<br>";
    }
    return str;
    
}