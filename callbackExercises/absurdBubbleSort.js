const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  // ask the user to compare ele 1 and ele 2
    //if user answers "yes", call callback w true
    // else call callback w false
  reader.question(`Is ${el1} greater than ${el2}?`, answer => {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}





