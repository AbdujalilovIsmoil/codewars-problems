const sumEvenNumbers = (input) => {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      sum += input[i];
    }
  }

  return sum;
};

sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 30
