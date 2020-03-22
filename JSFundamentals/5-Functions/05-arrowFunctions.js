//these functions are the same
function hi() {
    console.log("hello");
}

//this is a nicer, shorter syntax that doesn't get hoisted
//concise body returns whatever's on the line automatically, if applicaple
//block body requires a definition in order to return anything
let hey = () => console.log("hello");

let yo = () => {
    console.log("hello");
    return true;
}