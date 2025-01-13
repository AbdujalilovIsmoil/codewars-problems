const largest = (n, array) => {
  const sort = array.sort((a, b) => a - b);

  const slice = sort.slice(array.length - n);

  return slice;
};

largest(2, [7, 6, 5, 4, 3, 2, 1]); // [6,7]