function findFibonacciIndexByLength(number) {
  let fibonacciCurrent;
  let first = 1n;
  let second = 1n;
  let idx = 2n;

  do {
    fibonacciCurrent = first + second;
    idx += 1n;
    first = second;
    second = fibonacciCurrent;
  } while (String(fibonacciCurrent).length < number)

  console.log(idx);
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;