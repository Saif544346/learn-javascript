// 🔹 একটি function যেটা age নিয়ে print করে
// function myfunction(age){
//     console.log(`golam ibadullah saif and her age is ${age}`);
// }
// myfunction(25);


// 🔹 দুটি সংখ্যার যোগফল বের করার function
// function sum(n1, n2){
//     s = n1 + n2;   // যোগফল
//     return s;      // যোগফল ফেরত দিচ্ছে
// }
// let val = sum(220, 20);
// console.log(`the sum is = ${val}`);


// 🔹 vowel গণনার function
function vowel(str){
    let count = 0;        // vowel count করার ভেরিয়েবল
    console.log(str);     // string print করা

    // string এর প্রতিটি অক্ষর চেক করা
    for (const v of str) {
        // যদি vowel হয় তাহলে count++
        if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
            count++;
        }
    }
    console.log(count);   // মোট কতগুলো vowel আছে
}


// 🔹 খালি arrow function (এখন কিছু করছে না)
const hello = () => console.log();


// 🔹 forEach ব্যবহার করে নাম প্রিন্ট করা
let names = ["Saif", "Rafi", "Arman"];

names.forEach(function(nam){
    console.log(nam);   // প্রতিটি নাম print
});


// 🔹 forEach index সহ ব্যবহার
let numbers = [10, 20, 30];

numbers.forEach(function(num, i){
    console.log(i + " → " + num);   // index → value
});


// 🔹 arrow function সহ forEach
let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach(fruit => console.log(fruit));


// 🔹 map() ব্যবহার করে নামগুলো uppercase করা
let name = ["saif", "rafi", "arman"];

let upperNames = name.map(function(nam){
    return nam.toUpperCase();   // uppercase রিটার্ন
});

console.log(upperNames);


// 🔹 filter ব্যবহার করে জোড় সংখ্যা বের করা
let arr = [1,2,3,4,5,6,7];

let evenarry = arr.filter((val) => {
    return val % 2 === 0;   // জোড় সংখ্যা হলে true
});
console.log(evenarry);


// 🔹 prompt দিয়ে number নেওয়া
let n = prompt("enter a number");

// array তৈরি করার চেষ্টা—এখানে ভুল আছে (array[-1] হওয়া উচিত নয়)
let array = [];
for(let i = 1; i <= n; i++){
    array.push(i);   // সঠিকভাবে array তে মান যোগ করা push দিয়ে
}
console.log(array);


// 🔹 factorial বের করার function
function factorial(n){
    let result = 1;

    // 1 থেকে n পর্যন্ত গুণ
    for(let i = 1; i <= n; i++){
        result *= i;
    }

    return result;   // factorial রিটার্ন
}
