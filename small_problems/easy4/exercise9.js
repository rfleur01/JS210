function countOccurrences(array) {
  let occurences = {};
  
  for (let i = 0; i < array.length; i += 1) {
    if (!occurences[array[i]]) {
      occurences[array[i]] = 1;
    } else {
      occurences[array[i]] += 1;
    }
  }

 logOccurrences(occurences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}


const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2