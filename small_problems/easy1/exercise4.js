let rlSync =  require("readline-sync");

console.log("What is the bill?");
let bill = rlSync.prompt();
bill = parseInt(bill, 10);

console.log("What is the tip percentage?");
let tipPercent =  rlSync.prompt()
tipPercent = parseInt(tipPercent, 10);

let tip = (bill * (tipPercent/100));
let totalBill = (bill + tip);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);