// let password = 'password';
// let userPassword;
// let readlineSync = require('readline-sync');
// let counter = 3;

// while (counter > 0) {
//   userPassword = readlineSync.question('Please enter the password.\n');
//   if (userPassword === password) {
//     console.log('You have successfully logged in.');
//     break;
//   } else {
//     console.log('Try again.');
//   }
//   counter -= 1;
//   console.log('Access denied.')
// }


let password = 'password';

for (let counter = 1; counter <= 3; counter += 1) {
  let userInput = prompt('What is the password?');
  
  if (userInput === 'password') {
    console.log('You have successfully logged in.'); 
    break
  }
    
  if (counter === 3 && userInput != 'password') {
    console.log('You have been denied access.');
    break;
 }
}
