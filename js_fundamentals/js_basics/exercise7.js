const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};
function stringToInteger(string) {
  string = string.split('');
  let exponent = string.length - 1;
  let result = 0

  for (let i = 0; i < string.length; i += 1) {
    result += DIGITS[string[i]] * (10**exponent)
    exponent -= 1;
  }

  console.log(result);
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570