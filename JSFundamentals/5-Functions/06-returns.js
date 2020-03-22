// let hi = () => {
//     return "hi";
// }

//returns string "hi"
let hi = () => "hi";


let hello = hi();

console.log(hello);

let capitalize = name => {
    let newName = "";

    for (i in name) {
        (i > 0)
            ? newName += name[i].toLowerCase()
            : newName += name[i].toUpperCase();
    }
    return newName;
}

console.log(capitalize("fRaNkLiN"));

/*
    Challenge: Make a tip calculator function
    have it return the value it calculates
    then, capture that function's returned value in a variable
    print that variable

*/

let getTip = (amount) => {
    amount *= 100;
    amount = Math.round(amount/5) / 100;
    return amount;
}

let getTip = (amount) => Math.round(amount*20) / 100;

let tipOnMyCoffee = getTip(4.59);

console.log("Tip:", tipOnMyCoffee);