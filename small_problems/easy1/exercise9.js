function multisum(number) {
  let sum = 0;

  for (let int = 0; int <= number; int += 1) {
    if (int % 3 === 0  || int % 5 === 0) {
      sum += int;
    }
  }

  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168