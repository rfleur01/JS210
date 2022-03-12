function copyProperties(object1, object2) {
  for (let key in object1) {
    object2[key] = object1[key];
  }
  return Object.keys(object2).length
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }