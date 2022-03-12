function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log()
  }
  let lastString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(lastString);
      lastString = '';
    } else if (delimiter === '') {
      console.log(string[index])
    } else {
      lastString += string[index];
    }
  }

  if (lastString) {
    console.log(lastString)
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');