class List {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = 0;
  }

  add(item) {
    if (typeof item !== this.type) {
      return `This item is not of type: ${this.type}`;
    }

    this.items.push(item);

    this.count = this.items.length;

    return this;
  }
}

const myList = new List("string");

myList.add(5);
myList.add("Hello").count;
myList.add(" ").add("World!").count;
