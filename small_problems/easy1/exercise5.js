let rlSync = require("readline-sync");

console.log("Please enter an integer greater than 0:");
let integer = rlSync.prompt();
integer = parseInt(integer, 10)

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let operation = rlSync.prompt();

let sum = 0
for (let i = 1; i <= integer; i += 1) {
  sum += i;
}

let product = 0
for (let j = 1; j <= integer; j += 1) {
  product *= j;
}

if (operation === "s") {
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`)
} else if (operation === "p") {
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`)
}