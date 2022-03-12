function addReverse(arr) {
  for(let idx = arr.length - 1; idx > 0; idx -= 1) {
    arr.push(arr[idx]);
  }

  return arr;
}