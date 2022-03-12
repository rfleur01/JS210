const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  var newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// In our original code, we wrongly assume that newSpecies would be re-declared and initialized with undefined 
// during each iteration of our for loop. We declare newSpecies inside of a block using var. 
// However, var variables have function scope, so the declaration of newSpecies is hoisted to the top of the 
// function, which, in this case, is the global scope.