const DIGITS = {
  0: '0', 1: '1', 2: '2', 3: '3', 4: '4',
  5: '5', 6: '6', 7: '7', 8: '8'
};

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result
  } while (number > 0)

  console.log(result);
}

function signedIntegerToString(number) {
  if (number < 0) {
    return ('-' + integerToString(-number));
  } else if (number > 0) {
    return ('+' + integerToString(number));
  } else {
    return integerToString(number);
  }
}


console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"