function oddElementsOf(arr) {
  let newArray = [];
  for (let idx = 1; idx < arr.length; idx += 2) {
    newArray.push(arr[idx]);
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]