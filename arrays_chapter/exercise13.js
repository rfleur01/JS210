function join(array, string) {
  let resultString = ''
  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx === array.length - 1) {
      resultString += array[idx];
    } else {
      resultString += array[idx];
      resultString += string;
    }
  }

  console.log(resultString);
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'