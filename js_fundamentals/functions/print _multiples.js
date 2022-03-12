
function logMultiples(number) {
  for (let candidate = 100; candidate >= number; candidate -= 1) {
    if (candidate % 2 === 1 && candidate % number === 0) {
      console.log(candidate);
    }
  }
}
logMultiples(17);