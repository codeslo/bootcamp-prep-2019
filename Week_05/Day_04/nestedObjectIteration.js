let nested = {
    object_01:{
        prop1:'value1',
        prop2:'value2',
    },
    object_02: {
        prop1:'value1',
        prop2:'value2'
    }
};

for(let key in nested){
    // outer loop
    console.log('');
    for(let prop in nested[key]){
        // inner loop
        console.log(prop + ":" + nested[key][prop]);
    }
}