const addLength = (str) => str.split(" ").map((el) => `${el} ${el.length}`);

addLength("apple ban");