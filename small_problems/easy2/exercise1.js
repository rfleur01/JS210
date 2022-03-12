function crunch(string) {
  let newString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === string[idx - 1]) {
      continue;
    } else {
      newString += string[idx];
    }
  }

  console.log(newString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""