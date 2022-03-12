function missing(array) {
  let newArray = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx + 1] !== array[idx] + 1) {
      for (let subIdx = array[idx] + 1; subIdx < array[idx + 1]; subIdx += 1){
        newArray.push(subIdx);
      }
    }
  }

  console.log(newArray);
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []