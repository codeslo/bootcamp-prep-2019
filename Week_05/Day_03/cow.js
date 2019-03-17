let cow = {
    species:"cow",
    sound:"moo",
    speak:function(){
        return `${this.species} says ${this.sound}`;
    }
};

console.log(cow.speak());