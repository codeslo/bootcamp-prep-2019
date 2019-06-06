function Cat(nombre, color, disposition) {
  this.name = nombre;
  this.color = color;
  this.disposition = disposition;
}

let mrWhiskers = new Cat("Mr. Whiskers", "tabby", "purrfect");

let azrael = new Cat("Azrael", "orange", "smurf-eating");

delete azrael.color;

for (let key in mrWhiskers) {
  // because mrWhiskers and Azrael share the same properties, we can do some interesting stuff
  console.log("Property: " + key);
  console.log("Mr.Whiskers: " + mrWhiskers[key]);
  console.log("Azrael: " + azrael[key]);
  console.log("");
}
