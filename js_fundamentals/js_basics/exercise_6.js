const readlineSync = require("readline-sync");

console.log("Please enter a phrase:");
let phrase = String(readlineSync.prompt());

console.log(`There are ${phrase.length} characters in ${phrase}`);

