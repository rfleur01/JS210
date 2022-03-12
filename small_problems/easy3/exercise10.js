function wordSizes {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = removeNonLetters(wordsArray[i]).length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}

function removeNonLetters(word) {
  let newWord = ''
  for (let i = 0; i < word.length; i += 1) {
    if (isLetter(word[i].toLowerCase())) {
      newWord += word[i]; 
    }
  }

  return newWord;
}

function isLetter(letter) {
  return letter >= 'a' && letter <= 'z';
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}