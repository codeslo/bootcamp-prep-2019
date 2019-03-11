// Your code here
function firstJenny(arr,num = 0){
    console.log(arr);
    // if num > arr.length we just set it to zero so the whole array is searched.
    if(num > arr.length){
        num = 0;
    }
    for(let i = num; i<arr.length;i++){
        if(arr[i]==="Jenny"){
            return i;
        }
    }

    // if we get to here, there were no Jennys
    return -1;
}



// do not change code below this comment
module.exports = firstJenny;