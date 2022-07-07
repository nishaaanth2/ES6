export class Animal {
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    distrub (sound="Load"){
        console.log(sound);
    }

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`
    }
    static return10(){
        return 10;
    }
}
export class Cat extends Animal {
    
    distrub (sound="Meow"){
        console.log(sound);
    }
}
