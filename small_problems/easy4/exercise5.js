function interleave(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i += 1) {
  
      resultArray.push(array1[i]);
  
      resultArray.push(array2[i]);
  }

  return resultArray;
}



console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]