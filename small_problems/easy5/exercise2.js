
const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
const stringArray = [];

for (let i = 0; i < string.length; i += 1) {
stringArray.push(string[i]);
if (CONSONANTS.includes(string[i].toLowerCase())) {
stringArray.push(string[i]);
}
}

return stringArray.join('');
}