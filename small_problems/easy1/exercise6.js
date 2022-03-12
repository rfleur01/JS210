function shortLongShort(str1, str2) {
  let shortString;
  let longString;

  if (str1.length > str2.length) {
    shortString = str2;
    longString = str1;
  }
  else if (str1.length < str2.length) {
    shortString = str1;
    longString = str2;
  }
  
  console.log(`${shortString}${longString}${shortString}`)
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"