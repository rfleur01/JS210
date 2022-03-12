function rot13(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index)
    let upperBoundA = string.toUpperCase().charCodeAt(index) < 65
    let lowerBoundZ = string.toUpperCase().charCodeAt(index) > 90
    if (upperBoundA || lowerBoundZ) {
      newString += string[index];
      continue;
    }

    if (string[index].toUpperCase() < 'N') {
      charCode += 13
      newString += String.fromCharCode(charCode)
    }

    if (string[index].toUpperCase() >= 'N'){ 
      charCode -= 13
      newString += String.fromCharCode(charCode)
    }
  }

  return newString;
}