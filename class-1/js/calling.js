var firstName = "Ed";
var lastName = "Hertzog";
var state = "Pennsylvania";

var fullText = createFullStr(firstName, lastName, state);

document.write(fullText);


function createNameStr(first, last) {
    return first + " " + last + " is a student at UArts.";
}

function createStateStr(first, last) {
    return first + " " + last + " lives in the state of Pennsylvania.";
}

function createFullStr(first, last, state) {
    return createNameStr(first, last) + " " + createStateStr(first, last, state) + "<p>";
}