function repeatedCharacters(string) {
  string = string.toLowerCase().split('');
  result = {}
  finalResult = {}

  for (let index in string) {
    if (result[string[index]] === undefined) {
      result[string[index]] = 1;
    } else {
      result[string[index]] += 1;
    }
  }

  for (let key in result) {
    if (result[key] > 1) {
      finalResult[key] = result[key]
    }
  }

  console.log(finalResult);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }