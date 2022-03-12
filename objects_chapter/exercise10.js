function random(min, max) {
  if (min === max) {
    return min;
  }
  min = min < max ? min : max;
  max = max > min ? max : min;

  return Math.floor(Math.random() * (max - min + 1) + min);
}