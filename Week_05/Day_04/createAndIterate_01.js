let multi = [[1,2,3],['foo','bar'],[3,4]];

for(let i = 0; i < multi.length; i++){
    // inner loop
    let innerArray = multi[i];
    for(let j = 0;j < innerArray.length; j++){
        console.log(innerArray[j]);
    }
}

