//Name cases: store a person's name in vaiable,
//and then print that person's name in lowercase , uppercase , and tittlecase
var personName = "Tayyab Ali";
console.log("Name is: ".concat(personName));
console.log("Name in lowercase : ".concat(personName.toLowerCase()));
console.log("Name in uppercase: ".concat(personName.toUpperCase()));
var tittleCaseName = personName.split(' ');
for (var i = 0; i < tittleCaseName.length; i++) {
    tittleCaseName[i] = tittleCaseName[i].charAt(0).toUpperCase() + tittleCaseName[i].slice(1).toLowerCase();
}
console.log(tittleCaseName.toString().replace(/,/g, ' '));
