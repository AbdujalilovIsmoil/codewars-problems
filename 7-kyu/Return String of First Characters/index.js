const makeString = (s) => s.split(" ").map((el) => el[0]).join("");

makeString("brown eyes are nice"); // "bean"
makeString("cars are very nice"); // "cavn",
makeString("kaks de gan has a big head"); // "kdghabh";