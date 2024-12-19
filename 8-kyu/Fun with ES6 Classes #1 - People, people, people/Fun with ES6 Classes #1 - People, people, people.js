class Person {
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }

  constructor(firstName, lastName, age, gender) {
    this.age = age ?? 0;
    this.gender = gender ?? "Male";
    this.lastName = lastName ?? "Doe";
    this.firstName = firstName ?? "John";
    this.sayFullName = function () {
      return `${this.firstName} ${this.lastName}`;
    };
  }
}