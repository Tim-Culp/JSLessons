// Boolean
let on = true;
console.log(on);

let off = false;
console.log(off);

// Null
let empty = null;
console.log(empty);


// Undefined
let walmart = undefined;
if (empty != undefined) {
    console.log("this was planned. intentional. the nothing you're experiencing is of deliberate design.")
}

// Numbers

let degrees = 90;
let precise = 999999999999999;
console.log(precise);

let toomuch = 9999999999999999n;
console.log(toomuch);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

// Strings

let string1 = 'single quotes';
let string2 = "double quotes";
let string3 = `backticks`;
let string4 = 'I have the ability to can\'t use slashes to escape';

// Addition
let first = 1050 + 100;
// Concatenation
let second = '1050' + '100';
console.log(first, second);

// Numbers + Strings = Concatenation into strings
let third = 1050 + '100';
console.log(third);
console.log(typeof third);


/*
    Challenge: 
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
Set each variable to its respective type.
console.log your whole address (with the space between variable).
*/

const firstName = 'John';
let lastName = 'Smith';
let houseNumber = 437;
let aptNumber = 4435;
let street = "Jersey St.";
let city = "Gobloots";
let state = "Massechusettes";
let zipcode = 12345;

console.log(firstName, lastName, aptNumber, houseNumber, street, city + ",", state, zipcode);

console.log(`${firstName} ${lastName}, ${houseNumber} ${street} ${city}, ${state} ${zipcode}`)


// Object
let firstObject = {
    Name: "Bobby",
    Age: 999,
    Value: "Unknown",
};

console.log(firstObject);
console.log(typeof firstObject);

console.log("asdf");

//Array
let firstArray = ["Spanish", "English", "Pig Latin"];

console.log(firstArray[0]);