function centerOf(string) {
  let midpoint = Math.floor((string.length - 1) / 2);

  if (string.length % 2 == 0) {
    return string[midpoint] + string[midpoint + 1];
  } else {
    return string[midpoint];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"