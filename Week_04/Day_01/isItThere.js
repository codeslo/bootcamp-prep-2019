function isItThere(arr,val){
    return arr.includes(val);
}

console.log(isItThere(['peaches','apples','bananas'],'peaches')); // logs true

console.log(isItThere([1,2,3,4],27)); // logs false

