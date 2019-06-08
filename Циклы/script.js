let num = 50;

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