let dynamicObject = {};

dynamicObject.prop1 = 'This';
dynamicObject.prop2 = 'is';
dynamicObject.prop3 = 'dynamic';

for(let key in dynamicObject){
    console.log(dynamicObject[key]);
}


