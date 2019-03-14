let dynamic = {};
dynamic.prop1 = "Hello";
dynamic.prop2 = "How are you?";
dynamic.prop3 = "I'm fine, thank you.";

for(let key in dynamic){
    console.log("key:",key);
    console.log(dynamic[key]);
}
