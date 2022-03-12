function uniqueElements(arr) {
  let uniques = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (!uniques.includes(arr[idx])) {
      uniques.push(arr[idx]);
    }
  }

  return uniques;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
