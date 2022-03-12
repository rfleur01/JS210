let today = new Date();
let tomorrow = today.getTime();
tomorrow.setDate(today.getDate() + 1);

console.log(formattedDate(tomorrow));