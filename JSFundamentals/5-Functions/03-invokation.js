function greeting(){
    console.log("Hello, friend. :)");
}

let hal = function() {
    console.log("I'm sorry Dave, but I cannot do that.");
}

greeting();

hal();

//Challenge: given an array, create a function that lists out its values individually

let myArray = ["This", "is", "an", "array"];

function listArrayValues(input) {
    for (item of input) {
        console.log(item);
    }
}

listArrayValues(myArray);