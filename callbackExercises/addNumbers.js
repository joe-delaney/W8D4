const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum = 0, numsLeft, completionCallback) {
  // sum should start off as 0
  // if nums left = 0, we are done, call completeion callback
  if (numsLeft === 0) {
    reader.close();
    completionCallback(sum);
  }else {
    //Prompt user for a number 
    //Pass a callback that:
      // Uses parse int to parse the input
      // Incrememnt the sum and print
      // recursively call add numbers again
        //with the increased sum, the decreased sums left, and the same copletion callback
    reader.question("Pick a number:", answer => {
      let num = parseInt(answer);
      sum += num;
      console.log(`Current Sum: ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

addNumbers(0, 3, function(sum) {
  console.log(`Total Sum: ${sum}`);
});

