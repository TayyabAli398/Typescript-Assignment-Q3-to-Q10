
//Name cases: store a person's name in vaiable,
//and then print that person's name in lowercase , uppercase , and tittlecase

let personName = "Tayyab Ali";
console.log(`Name is: ${personName}`);
console.log(`Name in lowercase : ${personName.toLowerCase()}`);
console.log(`Name in uppercase: ${personName.toUpperCase()}`);

let tittleCaseName = personName.split( ' ');
for(let i=0; i < tittleCaseName.length; i++){
    tittleCaseName[i] = tittleCaseName[i].charAt(0).toUpperCase() + tittleCaseName[i].slice(1).toLowerCase();
}

console.log(tittleCaseName.toString().replace(/,/g , ' '));