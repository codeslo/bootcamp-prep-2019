let objectArray = [
    {
        prop1:'apple',
        prop2:'peach'
    },
    {
        prop1:'foo',
        prop2:'bar'
    }
];

// create a for loop to iterate through the array
for(let i = 0; i < objectArray.length; i++){
    // create a for-in loop for each object literal
    for(let key in objectArray[i]){
        console.log(objectArray[i][key]);
    }
}

// use variables to make your code more readable
for(let i = 0; i< objectArray.length; i++){
    let innerObject = objectArray[i];
    for(let key in innerObject){
        let prop = innerObject[key];
        console.log(prop);
    }
}