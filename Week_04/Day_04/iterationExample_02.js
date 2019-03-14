

let nums = [2, 4, 6, 7, 8, 10, 13, 21];

// iterate through nums and return all the odd numbers
function getOdds(){
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 !== 0){
            result.push(nums[i]);
        }
    }

    return result;
}

console.log(getOdds());


