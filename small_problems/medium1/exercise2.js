function rotateRightmostDigits(number, digit) {
  let numString = String(number);
  let subString = numString.slice(-digit);
  let rotatedSubstring = subString.slice(1).concat(subString[0]);
  return Number(numString.slice(0, -digit).concat(rotatedSubstring));
}
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917