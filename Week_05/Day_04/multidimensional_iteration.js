let multi = [
    [1, 2, 3],
    ['apple', 'peach', 'pear'],
    [true, true, false],
];

// iterate through each nested array
for (let i = 0; i < multi.length; i++) {
    // each element is another array, so iterate through that
    for(let j=0; j<multi[i].length; j++){
        console.log(multi[i][j]);
    }
}