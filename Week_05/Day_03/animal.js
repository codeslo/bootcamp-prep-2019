function Animal(species,sound){
    this.species = species;
    this.sound = sound;
    this.speak = function(){
        return `${this.species} says ${this.sound}`;
    }
}

let cow = new Animal('cow','moo');

let dog = new Animal('dog','woof');

console.log(cow.speak());
console.log(dog.speak());