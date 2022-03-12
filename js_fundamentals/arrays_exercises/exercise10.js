function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i += 1) {
    let index = array2.inexOf(array1[i]);
    if (index >= 0) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}