function reverseWords(string) {
  let newString = [];
  string = string.split(' ');

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].length >= 5) {
      newString.push(string[i].split('').reverse().join(''));
    } else {
      newString.push(string[i]);
    }
  }

  return newString.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"