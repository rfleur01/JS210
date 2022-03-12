function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`${String(num)}!`)
    } 
    else if (num % 3 === 0 || num % 5 === 0) {
      console.log(String(num))
    }
  }
}

multiplesOfThreeAndFive();