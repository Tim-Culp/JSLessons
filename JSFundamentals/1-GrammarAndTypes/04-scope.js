var x = 12;

function scope() {
    let x = 13;
    console.log(x);
};

scope();
console.log(x);