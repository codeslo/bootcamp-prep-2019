// Your code here
function hideAndSeek(arr,val){
    if(arr.indexOf(val) === -1){
        // -1 means arr does not contain val.
        return false;
    }

    // if arr.index is anything but -1, arr contains val.
    return true;

    // it's possible to solve this in one line using an if/else shorthand called a ternary.
    
    // return(arr.indexOf(val)===-1 ? false:true);
}