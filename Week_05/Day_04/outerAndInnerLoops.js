
// a nested for loop with variable names that will help you see what's going on

// the outer loop will run three times, the inner loop will run twice each time our code gets to it.
for(let outerLoopCounter = 1; outerLoopCounter < 4; outerLoopCounter++){
    console.log('This is outer loop iteration '+outerLoopCounter);
    // start an inner loop
    for(let innerLoopCounter = 1; innerLoopCounter < 3; innerLoopCounter++){
        console.log('   This is inner loop iteration '+innerLoopCounter);
        // the inner loop will keep running until its escape condition is met
    }

    console.log('Notice how the inner loop counter is unaware of the outer loop counter.')
    console.log('');
}