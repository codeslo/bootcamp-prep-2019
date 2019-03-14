let arrayObject = {
    array_01: [1,2,3,4],
    array_02: ['foo','bar']
}

// create a for-in loop to iterate through the object
for (let key in arrayObject) {
    // use variables for enhanced readability
    let arr = arrayObject[key];
    // create a for loop to iterate through the array
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}