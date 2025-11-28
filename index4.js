// =======================
// 1️⃣ Array of marks
// =======================
let marks = [72, 34, 55, 66, 75, 77, 65];

// Using for loop with index
for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);  // prints each mark by index
}

// Using for...of loop
for(let k of marks){
    console.log(k); // prints each mark directly
}

// Using for...in loop
for(let y in marks){
    console.log(y); // prints index (0,1,2...) not value
}

// Calculate sum of all marks
let sum = 0;
for(let val of marks){
    sum += val;
}
console.log(sum); // prints total sum

// Calculate average marks
let avg = sum / marks.length;
console.log(`average marks is = ${avg}`); // prints average

// =======================
// 2️⃣ Discount on price array
// =======================
let price = [240, 300, 276, 500, 650, 555, 333, 245, 753];

// Apply 10% discount
for (let i = 0; i < price.length; i++){
    let offer = price[i] / 10;   // 10% of price
    price[i] = price[i] - offer; // subtract discount
}

console.log(price); // print discounted prices

// =======================
// 3️⃣ Fruits array methods
// =======================
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// Add items at the end
fruits.push("kola","anarosh");
console.log(fruits);

// Remove last element
console.log(fruits.pop());
console.log(fruits);

// Convert array to string
console.log(fruits.toString());
console.log(fruits); // original array stays same

// =======================
// 4️⃣ Concatenate arrays
// =======================
let a = ["a","b","c"];
let b = ["d","e","f"];

// Merge arrays
let c = a.concat(b);
console.log(c); // ["a","b","c","d","e","f"]

// Add element at beginning
console.log(b.unshift("saif")); // returns new length
console.log(b);

// Remove first element
b.shift(); // removes "saif"
console.log(b);

// Slice array (creates new array from index 1 to 2)
b.slice(1,2);
console.log(b); // original array unchanged

// =======================
// 5️⃣ Company names array
// =======================
let companies = ["Google", "Apple", "Microsoft", "Amazon", "Facebook"];

console.log(companies);

// Remove first element
companies.shift();
console.log(companies);

// Replace element at index 2
companies.splice(2, 1, "bdIT");
console.log(companies);

// Add element at beginning
companies.unshift("9 AM SOLUTION");
console.log(companies);
