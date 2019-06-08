if (num < 49) {
    console.log("False")
} else if (num > 100) {
    console.log("Too much")
} else {
    console.log("True");
}
//тернарный оператор
(num == 50) ? console.log("True") : console.log("False");

switch (num) {
    case num < 49:
        console.log("False");
        break;
    case num > 100:
        console.log("Too much");
        break;
    case num > 80:
        console.log("Still too much");
        break;
    case 50:
        console.log("True");
        break;
    default:
        console.log("Error");
        break;
}

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

let i = 0;
while (i < 8) {
    i++;
    if (i == 6) {
        continue;
    }
    console.log(i);
}

i = 0;
do {
    i++;
    if (i == 6) {
        continue;
    }
    console.log(i);
} while (i < 8);