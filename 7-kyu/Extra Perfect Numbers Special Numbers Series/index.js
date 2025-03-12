const extraPerfect = (n) => {
  const numbers = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      numbers.push(i);
    }
  }

  return numbers;
};

extraPerfect(3); // [1, 3];
extraPerfect(5); // [1, 3, 5];
extraPerfect(7); // [1, 3, 5, 7];
extraPerfect(28); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];
extraPerfect(39); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39];
