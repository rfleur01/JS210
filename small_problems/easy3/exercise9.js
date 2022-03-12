function wordSizes(string) {
  if (string.length) {
    return 
  }
  let result = {};
  let array = string.split(" ");

  for (let i = 0; i < array.length; i += 1) {
    if (array.length === 0) {
      return result;
    } else if (result[array[i].length] === undefined) {
      result[array[i].length] = 1;
    } else {
      result[array[i].length] += 1;
    }
  }

  return result;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}