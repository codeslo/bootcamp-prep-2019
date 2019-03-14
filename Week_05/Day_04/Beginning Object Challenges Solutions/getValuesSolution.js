function getValues(myObj){
    let result = [];
    for(let key in myObj){
        result.push(myObj[key]);
    }

    return result;
}