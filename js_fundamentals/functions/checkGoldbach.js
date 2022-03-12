function isPrime(number) {
  for(let num = 2; num < number; num += 1) {
    if (number % num == 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
  }

  for (let num1 = 2; num1 < expectedSum; num1 += 1) {
    for (let num2 = expectedSum; num2 >= 2; num2 -= 1) {
      if (num1 + num2 === expectedSum && isPrime(num1) && isPrime(num2)) {
        console.log(`${num1} ${num2}`);
      }
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);