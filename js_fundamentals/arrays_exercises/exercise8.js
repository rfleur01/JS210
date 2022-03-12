function slice(array, begin, end) {
  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;
  let result = []

  for (let idx = begin; idx < end; idx += 1) {
    result.push(array[idx]);
  }

  console.log(result);
  return result
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

const arr1 = [1, 2, 3];
slice(arr1, 1, 3);                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...args) {
  let deletedElements = [];
  if (deleteCount === 0) {
    return deletedElements;
  }
  star = start > array.length ? array.length : start;
  deleteCount = deleteCount > array.length - start ? array.length - start : deleteCount;

  for (let idx = start; idx <= start + deleteCount; idx += 1) {
    deletedElements.push(array[idx]);
  }

  for (let idx = 0; idx < args.length; idx +=1) {
    array[start + idx] = args[idx];
  }

  console.log(array);
  return deletedElements
}

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

const arr2 = [1, 2, 3];
splice(arr2, 1, 1, 'two');             // [2]
arr2;                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
arr3;                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
splice(arr4, 1, 0);                    // []
splice(arr4, 1, 0, 'a');               // []
arr4;                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
splice(arr5, 0, 0, 'a');               // []
arr5;                                  // ["a", 1, 2, 3]