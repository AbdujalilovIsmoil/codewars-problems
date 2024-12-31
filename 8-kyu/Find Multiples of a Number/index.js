const findMultiples = (integer, limit) => {
  const numbers = [];

  for (let i = integer; i <= limit; i += integer) {
    numbers.push(i);
  }

  return numbers;
};

findMultiples(1, 2);
findMultiples(5, 7);
findMultiples(4, 27);
findMultiples(5, 25);
findMultiples(11, 54);