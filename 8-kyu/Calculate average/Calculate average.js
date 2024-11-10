const findAverage = (array) => {
  const total = array.reduce((a, b) => {
    return a + b;
  }, 0);
  if (array.length > 0) {
    return total / array.length;
  } else {
    return 0;
  }
};

const numbers = [1, 2, 3, 4];

findAverage(numbers);
