function objectHasProperty(object, string) {
  for (let key in object) {
    if (key === string) {
      return true;
    }
  }

  return false;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true