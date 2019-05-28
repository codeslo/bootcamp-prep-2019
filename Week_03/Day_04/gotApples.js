// what is the index position of 'apples' in this array?

let arr = ['banana','pear','tangerine','apple','grape','peach'];

function findFruit(fruit){
    if(arr.indexOf(fruit) !== -1){
        return "I found your "+fruit+" at index position "+arr.indexOf(fruit);
    }else{
        return "I don't have any "+fruit;
    }
}

console.log(findFruit('apple'));
console.log(findFruit('guava'));

// does arr contain 'guava'? 