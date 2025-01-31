const minimumSteps = (numbers, value) => {
  let sum = 0;
  let score = 0;

  const sort = numbers.sort((a, b) => a - b);

  for (let i = 0; i < sort.length; i++) {
    sum += sort[i];
    if (sum >= value) {
      return score;
    }
    score++;
  }

  return 0;
};

minimumSteps([4, 6, 3], 7); // 1
minimumSteps([4, 6, 3], 2); // 0
minimumSteps([10, 9, 9, 8], 17); // 1
minimumSteps([8, 9, 10, 4, 2], 23); // 3
minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464); // 8