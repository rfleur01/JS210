function sumSquareDifference(number) {
  let numArray = [];
  for (let i = 1; i <= number; i += 1) {
    numArray.push(i);
  }

  return (squareOfSums(numArray) - sumOfSquares(numArray));
}

function sumOfSquares(numberArray) {
  return numberArray.reduce((accumulator, number) => accumulator + number**2);
}

function squareOfSums(numberArray) {
  return numberArray.reduce((accumulator, number) => accumulator + number)**2;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150