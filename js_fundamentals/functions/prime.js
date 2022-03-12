function isPrime(number) {
  for(let num = 2; num < number; num += 1) {
    if (number % num == 0) {
      return false;
    }
  }

  return true;
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false