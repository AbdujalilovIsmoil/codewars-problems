const pipeFix = (numbers) => {
  const correctedNumbers = [];
  const sort = numbers.sort((a, b) => a - b);

  for (let i = sort[0]; i <= sort[sort.length - 1]; i++) {
    correctedNumbers.push(i);
  }

  return correctedNumbers;
};

pipeFix([6, 9]);
pipeFix([-1, 4]);
pipeFix([1, 2, 3, 12]);
pipeFix([1, 2, 3, 5, 6, 8, 9]);
