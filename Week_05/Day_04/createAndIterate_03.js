let objectArray = [{
        prop1: 'val1',
        prop2: 'val2'
    },
    {
        prop1: 'foo',
        prop2: 'bar'
    }
];

for (let i = 0; i < objectArray.length; i++){
    for(let key in objectArray[i]){
        console.log(objectArray[i][key]);
    }
}