// global
let global1 = 'global1';
let global2 = 'global2';

function myLocalScope() {
    // local scope
    let local1 = 'local1';
    let local2 = 'local2';
    let local3 = 'local3';

    console.log("From the global scope " + global1);
    console.log("From the global scope " + global2);
    console.log("From the global scope " + local1);
    console.log("From the global scope " + local2);
    console.log("From the global scope " + local3);
}

myLocalScope();