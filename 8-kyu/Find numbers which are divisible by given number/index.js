const divisibleBy = (numbers = [], divisor) => numbers.filter((el) => el % divisor === 0);

divisibleBy([0], 4);
divisibleBy([1, 3, 5], 2);
divisibleBy([1, 2, 3, 4, 5, 6], 2);
divisibleBy([1, 2, 3, 4, 5, 6], 3);
divisibleBy([0, 1, 2, 3, 4, 5, 6], 4);
