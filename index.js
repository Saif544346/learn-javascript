// -------------------------------------
// 1. Using console.log()
// -------------------------------------
console.log("hello world");

// -------------------------------------
// 2. Using var (can be re-declared)
// -------------------------------------
var a = 25;
var a = 26;
var a = 27;
console.log(a); // Output: 27

// -------------------------------------
// 3. Using let (cannot be re-declared)
// -------------------------------------
let aa = 27;
console.log(aa);

// -------------------------------------
// 4. Object creation and accessing values
// -------------------------------------
let product = {
    model: "i phone",
    price: 150000,
    rating: 5.5,
    shop: "jamuna future park"
};

// Incorrect use: product["model","price"] → returns only "price"
// Correct:
console.log(product["model"]); // prints model

// Updating object value
product["model"] = "relmi 10c";
console.log(product);

// -------------------------------------
// 5. Basic Arithmetic Operators (+, -, *)
// -------------------------------------
let c = 10;
let d = 12;

sum = c + d;
mul = c * d;
minus = c - d;

console.log("c + d =", sum);
console.log("c * d =", mul);
console.log("c - d =", minus);

// -------------------------------------
// 6. Increment / Decrement Operators
// -------------------------------------
console.log(c++); // post-increment
console.log(c);   // after increment
console.log(++c); // pre-increment
console.log(c--); // post-decrement
console.log(--c); // pre-decrement

// -------------------------------------
// 7. Assignment Operators (+=, -=, *=, %=, **=)
// -------------------------------------
let x = 3;
// x += 3;  // example use
console.log(x -= 4); // x = x - 4 → Output: -1

let f = 3;
f **= 2; // exponent assignment → f = f²
console.log("f =", f); // Output: 9

let e = 17;
e %= 5; // remainder assignment
console.log("e =", e); // Output: 2

let k = 5;
k *= 5; // multiplication assignment
console.log(k); // Output: 25

// -------------------------------------
// 8. Strict Equality (===) Comparison
// -------------------------------------
m = 5;
n = "5";
console.log(m === n); // false (different types)

// -------------------------------------
// 9. Logical AND (&&) Example
// -------------------------------------
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter");
} else {
  console.log("Access denied");
}

// -------------------------------------
// 10. Logical OR (||) Example
// -------------------------------------
let isWeekend = false;
let onLeave = false;

if (isWeekend || onLeave) {
  console.log("You can relax");
} else {
  console.log("You must work");
}

// -------------------------------------
// 11. Logical NOT (!) Example
// -------------------------------------
let isRaining = true;

if (!isRaining) {
  console.log("You can go outside");
}
