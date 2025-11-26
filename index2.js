// if-else statement example
let a = 2;
let p;
if (a >= 18) {
    p = "valid"; // if a is 18 or more, assign "valid"
} else {
    p = "not valid"; // otherwise assign "not valid"
}
console.log(p); // print the result


// ternary operator example
let b = 23;
let k;
// ternary operator: condition ? value if true : value if false
(b >= 18) ? k = "valid" : k = "not valid";
console.log(k); // print the result


// switch statement example
let num = 100;
switch (num) {
    case 9:
        console.log("nine"); // if num is 9
        break;
    case 10:
        console.log("ten"); // if num is 10
        break;
    default:
        console.log("welcome"); // if num doesn't match any case
        break;
}


// checking if input number is multiple of 5
let number = prompt("enter a number:");
console.log(number);
if (number % 5 === 0) {
    console.log("5 multiple by=", number); // divisible by 5
} else {
    console.log("not multiply by 5"); // not divisible by 5
}

// ternary operator version
let j = prompt("enter number");
j % 5 === 0 ? console.log("divided by 5", j) : console.log("not divided"); 


// grading system using if-else
let mark = prompt("enter your marks:");
if (mark >= 80 && mark <= 100) {
    console.log("A+"); // marks between 80-100
} else if (mark >= 70 && mark <= 79) {
    console.log("A"); // marks between 70-79
} else if (mark >= 60 && mark <= 69) {
    console.log("A-"); // marks between 60-69
} else if (mark >= 50 && mark <= 59) {
    console.log("B"); // marks between 50-59
} else if (mark >= 40 && mark <= 49) {
    console.log("pass"); // marks between 40-49
} else {
    console.log("fail"); // marks below 40
}
