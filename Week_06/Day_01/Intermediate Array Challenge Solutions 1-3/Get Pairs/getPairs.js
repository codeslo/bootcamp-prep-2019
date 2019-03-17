function getPairs(myObj){
    let result = [];
    for(let key in myObj){
        result.push(key + ':' + myObj[key]);
    }

    return result;
}