function average(array) {
  let sum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
  return Math.round(sum / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40