let multi = [
    [1, 2, 3],
    ['apple', 'peach', 'pear'],
    [true, true, false],
];

for(let i = 0; i < multi.length; i++){
    let innerArray = multi[i];
    for(let j = 0; j < innerArray.length; j++){
        let innerElement = innerArray[j];
        console.log(innerElement);
    }
}

