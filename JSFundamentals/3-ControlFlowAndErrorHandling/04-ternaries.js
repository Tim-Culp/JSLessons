//ternaries are like shorthand if/else statements capable of executing one line of code
let x = 8;

//they can be written in one line like this, but...
x > 0 ? console.log("positive") : console.log("negative or 0");

//they're best formatted in this way:
x > 0
    ? console.log("positive")
    : console.log("negative or 0");


//Challenge: Repeat the age challenge from '02-ifElse.js', but turn it into a ternary.

let age = 17;

age < 18
    ? console.log("Sorry, you can't do anything")
    : age < 21
        ? console.log("Yay, you can vote!")
        : age < 25
            ? console.log("Yay, you can drink!")
            : console.log("Yay, you can rent a car!");