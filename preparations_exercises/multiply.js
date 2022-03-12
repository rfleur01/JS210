function getNumbers(prompt) {
  let readlineSync = require('readline-sync')
  let number = readlineSync.question(prompt);
  return parseFloat(number);
}

function multiply(number1, number2) {
  return number1 * number2;
}

let number1 = getNumbers('Enter the first number: ');
let number2 = getNumbers('Enter the second number: ');

console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
