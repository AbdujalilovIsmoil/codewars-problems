class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
    this.info = `${this.name}s age is ${this.age}`;
  }
}

const john = new Person("john", 34);
const anna = new Person("anna", 18);
