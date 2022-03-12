function startsWith(string, searchString) {
  let resultString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (resultString !== searchString) {
      resultString += string[index];
    } else {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString); 