function twice(number) {
  let strNumber = String(number)
  let length = strNumber.length
  if (length % 2 !== 0) {
    return number * 2;
  }

  leftString = '';
  rightString = '';

  for (let idx = 0; idx < (length / 2); idx += 1) {
    leftString += strNumber[idx];
  }

  for (let idx = (length / 2); idx < length; idx += 1) {
    rightString += strNumber[idx];
  }

  if (leftString === rightString) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));  
