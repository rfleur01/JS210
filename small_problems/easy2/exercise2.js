function logInBox(string) {
  let width = string.length + 2;
  let topAndBottom = "+" + repeatChars("--", width) + "+";
  let sides = "|" + repeatChars("  ", width) + "|"

  console.log(topAndBottom);
  console.log(sides);
  console.log(`| ${string} |`);
  console.log(sides);
  console.log(topAndBottom);
}

function repeatChars(char, times) {
  let repeat = '';
  while (repeat.length < times) {
    repeat += char;
  }

  return repeat;
}

logInBox('To boldly go where no one has gone before.');
logInBox('');