function showMultiplicativeAverage(array) {
  let product = 1;
  
  for (let i = 0; i < array.length; i += 1) {
    product *= array[i];
  }
  let result = (product / array.length);
  
  return result.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"