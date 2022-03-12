function wordCount(string) {
  let wordCounts = {};
  let array = string.split(' ');

  for (let item in array) {
    if (wordCounts[array[item]]) {
      wordCounts[array[item]] += 1;
    } else {
      wordCounts[array[item]] = 1;
    }
  }

  return wordCounts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }