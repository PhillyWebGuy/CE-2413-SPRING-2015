function concatNames(firstName, lastName) {
    if(firstName.trim() == "" || lastName.trim() == "") {
        throw new Error("Both arguments required");	
    }  else {
        return firstName.trim() + " " + lastName.trim();
    }
}

var f = "Ed";
var l = "Hertzog";
document.write(concatNames(f, l));
document.write(concatNames('', l));