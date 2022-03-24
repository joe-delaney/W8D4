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
    } else if (answer === 'no') {
      callback(false);
    } else {
      console.log("Please type 'yes' or 'no'");
      askIfGreaterThan(el1, el2, callback);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  //if i < arr.length - 1, call askIfGreaterThan, asking user to compare arr[i] and arr[i+1]
  //For callback to askIfGreaterThan, pass in a helper function that:
    //Takes in a single argument: isGreaterThan (comes from askIfGreaterThan)
    //Perform swap if necessary (if isGreaterThan is true)
    //Call innerBubbleSort again for i+1. Update madeAnySwaps if we made any
  if(i < arr.length - 1) {
    madeAnySwaps = false;
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if(isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }

  //Call outerBubbleSort if i === (arr.length - 1). 
  if(i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    //If made any swaps === true, call innerBubbleSortLoop.
    //Pass in arr, i = 0, madeAnySwaps = false, and outerBubbleSortLoop
    //If made any swaps === false, sorting is done. Call sortCompletionCallback
    //Pass in the sorted arr
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else { 
      sortCompletionCallback(arr);
    }
  }
  //Kick off the first outer loop, starting madeAnySwaps as true
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});


