function slice(array, begin, end) {
  let newArray = [];
  for (let index = begin; index < end; index += 1) {
    push(newArray, array[index]);
  }

  return newArray;
}