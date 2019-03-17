let original = [1,2,3,4];
let copy = original;

console.log("The value of oringal is: ",original); // [1,2,3,4]
console.log("The value of copy is: ",copy); // [1,2,3,4]

copy.push('this was pushed to copy.');

console.log("The value of copy is: ",copy) // as expected, [1,2,3,4,"this was pushed to copy"]
console.log("The value of original is: ",original) // ALSO [1,2,3,4,"this was pushed to copy"] !?!?


