'use strict';

var alphabet = ('a b c d e f g h i j k l m n o p q r s t u v w x y z').split(" "),
    newAlphabet = [];
    
for (var i = 0; i < alphabet.length; i++) {
    /*(if (i%2 == 0) {
        newAlphabet.push(alphabet[i].toUpperCase());
    } else {
        newAlphabet.push(alphabet[i]);
    }*/
    //OR, we could use ternary operator:
    (i%2 == 0) ? newAlphabet.push(alphabet[i].toUpperCase()) : newAlphabet.push(alphabet[i]);
}

document.write(newAlphabet.join(" "));