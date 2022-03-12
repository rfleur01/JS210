
let age = prompt("What is your age?");
let retireAge = prompt("At what age would you like to retire?");

const today = new Date();

const currentYear = today.getFullYear();
let ageDiff = retireAge - age;
let retireYear = 2022 + ageDiff;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${ageDiff} years of work to go!`);


