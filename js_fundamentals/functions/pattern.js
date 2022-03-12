function generatePattern(nStars) {
  let numbers = '';
  let stars = '*'
  for (let i = 1; i <= nStars; i += 1) {
    numbers += `${i}`;
    console.log(numbers + stars.repeat(nStars - i))
  }
}

generatePattern(7);