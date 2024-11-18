const mergeArrays = (arr1, arr2) => {
  const numbers = [];

  const set = new Set([...arr1.concat(arr2).sort((a, b) => a - b)]).forEach(
    (el) => numbers.push(el)
  );

  return numbers;
};

mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]);
mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]);
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
