const createArray = (number) => {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
};

createArray(1);
createArray(2);
createArray(3);
createArray(4);
createArray(5);