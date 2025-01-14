class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);

    this.legs = 0;
    this.status = status;
    this.species = "shark";

    this.introduce = function () {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);

    this.legs = 4;
    this.species = "cat";
    this.status = status;

    this.introduce = function () {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    };
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);

    this.legs = 4;
    this.species = "dog";
    this.status = status;
    this.master = master;

    this.introduce = function () {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };

    this.greetMaster = function () {
      return `Hello ${this.master}`;
    };
  }
}

const shark = new Shark("Billy", 3, "Alive and well");
const cat = new Cat("Cathy", 7, "Playing with a ball of yarn");
const dog = new Dog("Doug", 12, "Serving his master", "Eliza");