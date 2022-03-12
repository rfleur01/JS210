function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }

  return total;
}

let temperatures = [30, 66, 52, 46, 39];
console.log(average(temperatures));