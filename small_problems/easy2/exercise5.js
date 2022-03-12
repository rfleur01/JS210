function triangle(size) {
  for (let num = size - 1; num >= 0; num -= 1) {
    console.log(repeat(' ', num) + repeat("*", size - num));
  }
}

function repeat(char, number) {
  let repeated = '';

  for (let num = 0; num < number; num += 1) {
    repeated += char;
  }

  return repeated;
}

triangle(5);
triangle(9);