let x = true;
let i = 0;
while(x) {
    i ++

    if (i >= 5) {
        x = false;
    }

    console.log(i);
}

// if a nested loop is broken, it only breaks the loop which contains the break line.

while (i < 10) {
    let v = 8;

    while (true) {
        if (v <= 0) {
            break;
        }
        console.log("v:", v);
        v--;
    }

    console.log("     i:", i);
    i++;
}

//DO WHILE (do is executed before while check, usefule if you want something to happen at least once)
do {
    i ++;
    console.log(i);
} while (i < 60);