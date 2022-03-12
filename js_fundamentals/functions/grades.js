let totalScore = 0;

let readlineSync = require("readline-sync");
totalScore += Number(readlineSync.question('Enter score 1:\n'));
totalScore += Number(readlineSync.question('Enter score 2:\n'));
totalScore += Number(readlineSync.question('Enter score 3:\n'));

let averageScore = (totalScore / 3);
let message;

if (averageScore >= 90) {
  message = 'A';
} else if (averageScore >= 70) {
  message = 'B';
} else if (averageScore >= 50) {
  message = 'C';
} else {
  message = 'F';
}

console.log(message);

