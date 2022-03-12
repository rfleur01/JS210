function gcd(num1, num2) {
  let minNumber = num1 < num2 ? num1 : num2;
  for (let i = minNumber; i > 0; i -= 1) {
    if (num1 % i == 0 && num2 % 1 == 0) {
      console.log(i);
      break;
    }
  }
}

gcd(15, 10);  // 5
gcd(9, 2);    // 1