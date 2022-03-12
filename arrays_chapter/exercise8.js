function shift(array) {
  let firstElement = array[0];
  
  if (array.length === 0) {
    return undefined;
  }

  for (let idx = 0; idx < array.length; idx += 1) {
    array[idx] = array[idx + 1];
  }

  array.length -= 1;
  return firstElement;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]