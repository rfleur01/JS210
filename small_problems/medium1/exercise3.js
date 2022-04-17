function rotateRightmostDigits(number, digit) {
  let numString = String(number);
  let subString = numString.slice(-digit);
  let rotatedSubstring = subString.slice(1).concat(subString[0]);
  return Number(numString.slice(0, -digit).concat(rotatedSubstring));
}

function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  console.log(number);
  return number;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
