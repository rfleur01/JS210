function concat(array, ...value) {
  let newArray = array;

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      newArray.push(value[i]);
    }
  } else {
    newArray.push(value);
  }

  console.log(newArray.flat());
  return newArray.flat();
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]