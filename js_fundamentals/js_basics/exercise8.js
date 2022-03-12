const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};
function stringToSignedInteger(string) {
  let exponent = string.length - 1;
  let result = 0

  if (string[0] === '-') {
    for (let i = 1; i < string.length; i += 1) {
      result -= DIGITS[string[i]] * (10**(exponent - 1))
      exponent -= 1;
    }
  } else if (string[0] === '+') {
    for (let i = 1; i < string.length; i += 1) {
      result += DIGITS[string[i]] * (10**(exponent - 1))
      exponent -= 1;
    }
  } else {
    for (let i = 0; i < string.length; i += 1) {
      result += DIGITS[string[i]] * (10**exponent)
      exponent -= 1;
    }
  }
  console.log(result);
}

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100