var myValues = [1, 4, 7, 3, 18];

var x = addItAllUp(myValues);

document.write(x);

function addItAllUp(arr) {
    var output = 0;
    for(var i = 0; i < arr.length; i++) {
        output = output + (arr[i] * 10);    
    }
    return output;
}