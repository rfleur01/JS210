// You have a bank of switches before you, numbered from 1 to n. 
// Every switch is connected to exactly one light that is initially off. 
// You walk down the row of switches and toggle every one of them. 
// You walk back to the beginning of the row and start another pass. 
// On this second pass, you toggle switches 2, 4, 6, and so on. 
// On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, 
// and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of 
// the lights that are on after n repetitions.

/*
// Problem: after n passes return an array of numbers representing switches
  - Input: number of switches (integer)
  - Output: an Array of switches that are 'on'
  Rules:
    - a switch get turned on if it is divisble by the current n
    - a switch gets turned off if it is not divible by the current n
    - we will loop n times
  Examples: see below

  Data Structure:
  Hash that keeps track of each switch status

  Algorirthm:
  - initialize a hash, switchStatus with keys from 1 to n and values "on" or "off" with default being off
  - iterate from 1 to n, with current round = n
    - iterate from 1 to n =, each n = switch#
      - if switchStatus[n] is divisble by the current round then update to "on"
        - if not update to 'off"
  - Gather all switches and filter out the off switches
*/

function lightsOn(switches) {
  let switchStatus = {};
  for (let i = 1; i <= switches; i += 1) {
    switchStatus[i] = 'off';
  }

  for (let round = 1; round <= switches; round += 1) {
    Object.keys(switchStatus).forEach(light => {
      if (Number(light) % round === 0) {
        switchStatus[light] = switchStatus[light] === 'off' ? 'on' : 'off';
      }
    });
  }

  return Object.keys(switchStatus).filter(light => switchStatus[light] === 'on');
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []
console.log(lightsOn(1)); // [1]
console.log(lightsOn(2)); // [1]