function toLowerCase(string) {
  let resultString = '';
  for (let index = 0; index < string.length; index += 1) {
    let asciiNumeric = string.charCodeAt(index);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32
      resultString += String.fromCharCode(asciiNumeric);
    } else {
      resultString += string[index];
    }
  }

  console.log(resultString);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF'); 