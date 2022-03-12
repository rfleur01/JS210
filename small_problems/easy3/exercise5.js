function isRealPalindrome(string) {
  let stringToCompare = [];
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    if (string[i]>='a' && string[i] <= 'z') {
      stringToCompare.push(string[i]);
    }
  }
  return stringToCompare.join('') === stringToCompare.reverse().join('');
}
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false