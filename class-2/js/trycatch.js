function concatNames(firstName, lastName) {
    if(firstName.trim() == "" || lastName.trim() == "") {
        throw new Error("Both arguments required");	
    }  else {
        return firstName.trim() + " " + lastName.trim();
    }
}

var f = "Ed";
var l = "Hertzog";

try{
   console.log(concatNames('', "Hertzog"));
} catch (error) {
    console.log("ERROR: " + error);
}
