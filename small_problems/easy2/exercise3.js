function stringy(integer) {
  let string = "";

  for (let idx = 0; idx < integer; idx += 1) {
    if (idx % 2 === 0) {
      string += "1";
    } else {
      string += "0";
    }
  }

  console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"