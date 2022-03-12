function copyNonDupes(resultArray, array) {
  array.forEach(item => {
    if (!resultArray.include(item)) {
      resultArray.push(item);
    }
  });
}

function union(array1, array2) {
  let resultArray = [];
  copyNonDupes(resultArray, array1);
  copyNonDupes(resultArray, array2);
  return resultArray;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]