let rlSync = require("readline-sync");

const SQUARE_FEET = 10.7639;

console.log("Enter the length of the room in meters:\n");
let length = rlSync.prompt();
lenth = parseInt(length, 10);

console.log("Enter the width of the room in meters:\n");
let width = rlSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQUARE_FEET);

console.log(`the area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)}).`);