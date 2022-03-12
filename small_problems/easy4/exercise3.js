function halvsies(array) {
  let midpoint = Math.ceil((array.length / 2));
  let endpoint = (array.length);
  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint, endpoint);
  console.log([left, right]);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]