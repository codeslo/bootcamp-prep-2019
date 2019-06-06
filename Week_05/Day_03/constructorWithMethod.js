function Cartoon(name, species, catchphrase) {
  this.name = name;
  this.species = species;
  this.catchphrase = catchphrase;
  this.sayCatchPhrase = function() {
    return this.catchphrase;
  };
}

let bugs = new Cartoon("Bugs Bunny", "Rabbit", "What's up doc?");

let marvin = new Cartoon(
  "Marvin",
  "Martian",
  "I must get my P-36 Space Modulator operational."
);

// console.log(bugs.sayCatchPhrase());

// console.log(marvin.sayCatchPhrase());
