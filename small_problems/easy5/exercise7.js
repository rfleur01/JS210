function swapName(name) {
  let firstName = name.split(' ')[0];
  let lastName = name.split(' ')[1];

  return `${lastName}, ${firstName}`;
}

swapName('Joe Roberts');    // "Roberts, Joe"