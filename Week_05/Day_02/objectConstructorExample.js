// the constructor
function Cat(name,color,disposition){
    this.name = name;
    this.color = color;
    this.disposition = disposition;
}

// creating a new instance of Cat
let mrWhiskers = new Cat('Mr. Whiskers','tabby','purrfect');

let azrael = new cat('Azrael','orange','smurf-eating');

// lets see it
for(let key in mrWhiskers){
    console.log(key,":",mrWhiskers[key]);
}

