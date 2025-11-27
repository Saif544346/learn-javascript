// ---------- for loop ----------
let i;
// Loop from 0 to 10
for (i = 0; i <= 10; i++) {
  console.log("saif"); // Print "saif" each time
}

let sum = 0;
// Calculate sum of numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum); // Print the total sum

// ---------- while loop ----------
let ii = 0;
// Print numbers from 0 to 20
while (ii <= 20) {
  console.log(ii);
  ii++; // Increase ii by 1
}

let jj = 0;
let summ = 0;
// Running sum from 0 to 20
while (jj <= 20) {
  summ = summ + jj;
  console.log(summ); // Print updated sum
  jj++;
}

// ---------- do while loop ----------
let k = 1;
// Runs at least once, then checks the condition
do {
  console.log(k);
  k++;
} while (k <= 100);

// ---------- for...of loop (string iteration) ----------
let name = "ibadullah";
// Print each character of the string
for (const nl of name) {
  console.log(nl);
}

// ---------- for...in loop (object iteration) ----------
size = 0;
let student = {
  name: "saif",
  age: 24,
  gender: "male"
};
// Print each key and value of the object
for (const ly in student) {
  console.log(ly, student[ly]);
  size++; // Count number of properties
}
console.log(size);

// ---------- Print odd numbers ----------
let e;
// Print odd numbers from 0 to 100
for (e = 0; e <= 100; e++) {
  if (e % 2 !== 0)
    console.log(e);
}

// ---------- Guessing game ----------
let gamenum = 99;
let gus = prompt("enter your guess number:");

// Keep asking until the guess is correct
while (gamenum != gus) {
  gus = prompt("wrong input please try again");
}

console.log("congratulation you won");

// ---------- Template literal ----------
let ob = {
  name: "golam ibadullah saif",
  id: 221002108,
  gender: "male"
};

// Using template string (backticks)
let inj = `name is ${ob.name} and gender is ${ob.gender}`;
console.log(inj);

// ---------- Another template literal example ----------
let phone = {
  model: "i phone 7",
  price: "32k"
};

let oo = `phone model is ${phone.model} and price is ${phone.price}`;
console.log(oo);

// ---------- String methods ----------
let namee = "ibadullah/tsaif";
console.log(namee.length);        // Find string length
console.log(namee.toUpperCase()); // Convert to uppercase
console.log(namee.toLowerCase()); // Convert to lowercase

let uu = "  ibadullah";
console.log(uu.trim()); // Remove extra spaces
console.log(uu.slice(0, 2)); // Take part of the string

// ---------- Username generator ----------
let fullname = prompt("enter your fullname:");
let username = "@" + fullname + fullname.length;
console.log(username);

// ---------- Replace method ----------
let t = "ibadullah";
console.log(t.replace("i", "m")); // Replace first 'i' with 'm'
