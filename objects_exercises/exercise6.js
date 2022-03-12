const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

/*
An array property with a key of anything other than a non-negative integer is 
not counted as part of the array's length. Therefore in the code above, 
the length of the array is 2, instead of 4 like the user expected. 
So the expression in the return statement evaluates to 20 / 2 and the function returns 10.
*/
