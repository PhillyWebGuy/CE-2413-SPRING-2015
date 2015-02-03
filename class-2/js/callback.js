var name = "edward paul hertzog";
var nameAry = name.split(" ");

function iterateNames(value, index) {
    document.write("value: " + value + ", index: " + index + "<BR>");
}

nameAry.forEach(iterateNames);


//document.write(nameAry.join(" "));
