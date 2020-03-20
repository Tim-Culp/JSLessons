let student = {
    name: `Brian`,
    isAwake: true,
    degree: `Javascript`,
    week: 1
}

console.log(`Objects in student:`)
console.log(`-------------------------`)
for (item in student) {
    console.log(`Key:`, item + `, Value:`, student[item]);
}



let catArray = ["Siamese", "Tabby", "Feral", "Sphynx", "lazy"];
for (item in catArray) {
    console.log(item + ":", catArray[item]);
}

//a forin loop allows you to grab the keys in an object or the indexes in an array;



// Challenge:
//  Write a for-in loop that capitalizes the first letter of a student's name
// Lowercases any other letter in the name;

let studentName = "dOLLPH";
let newName = "";
for (char in studentName) {
    if (char > 0) {
        newName = newName + studentName[char].toLowerCase();
    } else {
        newName = newName + studentName[char].toUpperCase();
    }
}
studentName = newName;
console.log(studentName);