const findMissingNumbers = (arr) => {
  const newArr = [];
  const results = [];

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }

  for (let i = 0; i < newArr.length; i++) {
    if (!arr.includes(newArr[i])) {
      results.push(newArr[i]);
    }
  }

  return results;
};

findMissingNumbers([]);
findMissingNumbers([-3, -2, 1, 4]);
findMissingNumbers([-1, 0, 1, 2, 3, 4]);
