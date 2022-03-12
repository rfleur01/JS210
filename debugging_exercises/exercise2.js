function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];
    if (element === false) {
      return true;
    }
  }

  return false;
}

// The important distinction here is between what is known as the abstract equality operator (==) and 
// the strict equality operator (===). While both operators compare for equality and return a boolean, 
// there is an important difference in the way they behave: When comparing for strict equality using ===, 
// the values are compared as-is. Values of different types will be considered unequal.