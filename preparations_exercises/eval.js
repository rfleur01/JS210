let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log("Scrictly Equal!");
} else if (apples == bananas) {
  console.log('Equal but different types!')
} else {
  console.log("Not strictly equal!");
}