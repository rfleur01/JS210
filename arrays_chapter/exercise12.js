function splice(array, start, end) {
  let removedValues = [];

  for (let idx = start; idx < array.length; index += 1) {
    if (idx < start + end) {
      push(removedValues,array[idx]);
    }

    array[idx] = array[idx + end];
  }
  
  array.length = array.length - removedValues.length;
  return removedValues;
}

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;    