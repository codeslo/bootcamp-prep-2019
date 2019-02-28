let myString = "JavaScript is Awesome";
let myOtherString = "Hello*JavaScript*Arrays";

let myArray = myString.split(' ');
let myOtherArray = myOtherString.split("*");

console.log(myArray); // logs [ 'JavaScript', 'is', 'Awesome' ]

console.log(myOtherArray); // [ 'Hello', 'JavaScript', 'Arrays' ]

