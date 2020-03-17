let weather = 54;

if (weather > 50) {
    console.log("No Jacket Necessary")
} else {
    console.log("Bundle Up!")
}

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
let name = "Tim";

if(name === "Tim") {
    console.log(`Hello, my name is ${name}`);
} else {
    console.log(`Hello, is your name ${name}?`);
};

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

name = 'zAchARy';

console.log(name[0])
if (name[0] === name[0].toUpperCase()) {
    console.log(`Correct, it's ` + name[0] + name.substring(1,name.length).toLowerCase());
} else {
    console.log(`Wrong, it's ` + name[0].toUpperCase() + name.substring(1,name.length).toLowerCase());
}