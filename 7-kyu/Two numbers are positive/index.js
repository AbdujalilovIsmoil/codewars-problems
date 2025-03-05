const twoArePositive = (...rest) => {
  let sum = 0;

  for (let i = 0; i < rest.length; i++) {
    if (rest[i] > 0) {
      sum++;
    }
  }

  return sum === 2;
};

twoArePositive(2, 4, -3); // true
twoArePositive(-4, 6, 8); // true
twoArePositive(4, -6, 9); // true
twoArePositive(-4, 6, 0); // false
twoArePositive(4, 6, 10); // false
twoArePositive(-14, -3, -4); // false