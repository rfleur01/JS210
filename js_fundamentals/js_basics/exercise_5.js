const readlineSync = require("readline-sync");

console.log("==> Enter the first number:\n");
let firstNumber = Number(readlineSync.prompt());
console.log("==> Enter the second number:\n");
let secondNumber = Number(readlineSync.prompt());

console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`==> ${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);