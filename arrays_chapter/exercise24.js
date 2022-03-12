function matrixSums(arr) {
  let sums = [];
  let outerLen = arr.length;

  for (let i = 0; i < outerLen; i += 1) {
    let currentSum = 0;
    let innerLen = arr[i].length;
    for (let j = 0; j < innerLen; j += 1) {
      currentSum += arr[i][j];
    }
    sums.push(currentSum);
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]