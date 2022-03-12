let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + String(today.getDate()) + 'th');