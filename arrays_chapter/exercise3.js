function reverse(arr) {
  let result = [];
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    result.push(arr[idx]);
  }

  return result;
}