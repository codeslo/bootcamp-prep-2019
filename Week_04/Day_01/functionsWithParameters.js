function giveMeParameters(param1,param2){
    console.log("Parameter one is: ",param1);
    console.log("Parameter two is: ",param2);
    return "Those are the parameters I received from the function call.";
}

// calling the function 
console.log(giveMeParameters('foo','bar'));

// why don't we see "Those are the parameters I received from the function call."?

