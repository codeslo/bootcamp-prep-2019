// object literal with method

let greeter = {
    name:"Arnold Schwartzenberger",
    sayGreeting:function(){
        console.log("Hello, my name is "+this.name);
    }
};

// reference sayGreeting like an object property, but call it like a function
greeter.sayGreeting();