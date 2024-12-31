const greet = (name, owner) => (name == owner ? "Hello boss" : "Hello guest");

greet("Greg", "Daniel");
greet("Daniel", "Daniel");