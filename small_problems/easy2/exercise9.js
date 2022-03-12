function cleanUp(string) {
  let newString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLowerCase(string[idx]) || isUpperCase(string[idx])) {
      newString += string[idx];
    } else if (newString[newString.length - 1] !== ' ') {
      newString += ' ';
    }
  }

  console.log(newString);
}

const isLowerCase =  (char) => char >= 'a' && char <= 'z';
const isUpperCase =  (char) => char >= 'A' && char <= 'Z';
cleanUp("---what's my +*& line?");