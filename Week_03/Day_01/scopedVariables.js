let var1 = 1;
let var2 = 2;

function func(){
    let var3 = 3;
    let var4 = 4;
    let var5 = 5;
    
    console.log("From the local scope:" + var1);
    console.log("From the local scope:" + var2);
    console.log("From the local scope:" + var3);
    console.log("From the local scope:" + var4);
    console.log("From the local scope:" + var5);
}

func();

console.log("From the global scope:" + var1);
console.log("From the global scope:" + var2);
console.log("From the global scope:" + var3);
console.log("From the global scope:" + var4);
console.log("From the global scope:" + var5);