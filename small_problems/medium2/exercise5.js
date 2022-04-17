function featured(number) {
  let result = number;
  do {
    result += 1;
  } while ((result % 7 !== 0 || result % 2 === 0) || !uniqueDigits(number))
  
  if (result === 9876543201) {
    console.log('There is no possible number that fulfills those requirements.');
    return false;
  }
  return result;
}

function uniqueDigits(number) {
  let numString = String(number);
  let counts = {};
  for (let i = 0; i < numString.length; i += 1) {
    if (counts[numString[i]]) {
      counts[numString[i]] += 1;
    } else {
      counts[numString[i]] = 1;
    }

    if (counts[numString[i]] > 1) {
      return false;
    }
  }
  return true;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."