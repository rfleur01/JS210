function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  console.log(hours + ":" + minutes);
}

let today = new Date();
formatTime(today);