const totalPages = 364;
let energy = 100;

function read() {
  let currentPage = 1;

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();

// Notice that on line 5 of the original code, within our function body, 
// we declare the variable currentPage and assign it to 1. We increment currentPage on line 8 within our while 
// loop and then invoke read recursively on line 19 if currentPage is still less than totalPages. 
// The problem arises because each time read is executed, currentPage is assigned to 1. Therefore, 
// the comparison provided as a condition to our if statement on line 18 of the original code will always 
// return true and read will continue to be invoked repeatedly until the stack overflows.

// To solve this problem, we move the declaration and initial assignment of currentPage outside of our function body, to line 2.