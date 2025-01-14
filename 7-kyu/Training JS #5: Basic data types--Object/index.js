const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

animal({ name: "cock", legs: 2, color: "red" }); // This red cock has 2 legs.
animal({ name: "dog", legs: 4, color: "white" }); // This white dog has 4 legs.