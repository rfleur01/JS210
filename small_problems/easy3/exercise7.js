function runningTotal(array) {
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      result.push(array[i])
    } else {
      result.push(result[i - 1] + array[i])
    }
  }

  console.log(result);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []