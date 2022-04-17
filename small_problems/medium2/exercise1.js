function letterPercentages(string) {
  let count = string.length;

  return {
    lowercase: (((string.split('').match(/[a-z]/g) || 0).length / count) * 100).toFixed(2),
    uppercase: (((string.split('').match(/[A-Z]/g) || 0).length / count) * 100).toFixed(2),
    neither: (((string.split('').match(/[^a-z]/gi) || 0).length / count) * 100).toFixed(2)
  }

  console.log(percents);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }