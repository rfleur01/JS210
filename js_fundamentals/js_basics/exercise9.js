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


integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"