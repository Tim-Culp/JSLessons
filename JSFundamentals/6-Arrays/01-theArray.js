let myList = ['thing1', 'thing2', 'thing3', [1, 2, 3, 5, 4]];

let colors = [];

console.log(colors);
colors.push("blue");
colors.push("green");
console.log(colors);

//pop() removes last item in array and returns the item
let remove = colors.pop();

//can now undo
colors.push(remove);
console.log(colors);


let orders = ['Mary', 'Tim', 'Greg', 'Dolph', 'Sheila'];

orders.splice(1, 1, "Donovan");
orders.splice(3, 0, "Adam");

console.log(orders);
//shift() is opposite of pop()
let shifted = orders.shift();

console.log(orders);


orders.unshift(shifted);
console.log(orders);

orders.unshift("shifted");
console.log(orders);

let foods = ['Pecan Pie', 'shrimp', 'quesadilla', 'hot dog', 'chana masala'];

// for (i = 0; i < foods.length; i++) {
//     console.log(foods[i]);
// }

// for (i in foods) {
//     console.log(foods[i]);
// }

// for (food of foods) {
//     console.log(food);
// }

foods.forEach(food => console.log(food));
foods.forEach((x, y, z) => console.log(x, y, z));

console.log(typeof foods);
console.log(foods instanceof Array)

myNumber = 3;
console.log(typeof 3);
console.log(myNumber instanceof Number)
console.log(Number.toString());

//typeof is good for primitive literal types
//instanceof is good for object-based types

let myFunction = input => {
    if (input instanceof Array) {
        input.reverse();
    } else {
        console.log("Error: Function argument not of type Array");
    }
}

foods.forEach(food => console.log("Before flip: ", food));
myFunction(foods);
foods.forEach(food => console.log("After flip: ", food));