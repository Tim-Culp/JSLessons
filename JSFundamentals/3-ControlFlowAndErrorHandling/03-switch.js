
let friend = `Tom`;

switch (friend) {
    case `Tom`:
        console.log(`Hi Tom, how's the wife?`);
        break;
    case `Kenn`:
        console.log(`Long time no see, Kenn!`)
        break;
    case `Caroline`:
        console.log(`You are a gem.`);
        break;
    default:
        console.log(`Sorry, ${friend}, but do I know you?`);
}

// if there is no break, the switch statement will fire all cases after the first met case until a break is hit, even if the conditionals are not met.



/*
Challenge:
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let selectedItem = `Squid`;

switch (selectedItem) {
    case `Pie`:
        console.log(`Pie, pie, oh me oh my!`);
        break;
    case `Cake`:
        console.log(`The cake is a lie.`);
        break;
    case `Ice Cream`:
        console.log(`AAAAAAAAAAAAAAAAAA! I screamed, now gimme some ice cream.`);
        break;
    default:
        console.log(`We're sorry, but ${selectedItem.toLowerCase()} is not on the menu.`);
}

//switches with multiple conditions;

let yep = -12;

switch(true) {
    case (yep < 0 && yep > -10):
        console.log("Worked");
        break;
    case (yep > 0):
        console.log("Worked!");
        break;
    default:
        console.log("Didn't");
}