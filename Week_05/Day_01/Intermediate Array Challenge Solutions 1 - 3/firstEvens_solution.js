function firstEvens(arr) {
    // result will store our return values
    let result = [];
    // standard for loop
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }

        // since the test only asks for the first two even values, once we have them, we're done.
        if (result.length === 2) {
            return result;
        }
    }

    // if we get here there weren't two even values
    return -1;
}