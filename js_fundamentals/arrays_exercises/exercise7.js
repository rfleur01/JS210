function shift(array) {
  let firstElement = array[0];

  if (array.length === 0) {
    return undefined; 
  }
  for (let index = 1; index < array.length; index +=1 ) {
    array[index - 1] = array[index];
  }
  array.length -= 1;

  return firstElement;
}

function unshift(array, ...args) {
  array.length += args.length;

  for (let index = array.length - 1; index > 0; index -= 1) {
    array[index + 1] = args[index - 1 - args.length];
  }

  return array.length;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]