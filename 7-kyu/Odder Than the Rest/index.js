const oddOne = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
      return i;
    }
  }

  return -1;
};

oddOne([2, 4, 6, 8]);
oddOne([2, 4, 6, 7, 10]);
oddOne([2, 16, 98, 10, 13, 78]);
oddOne([4, -8, 98, -12, -7, 90, 100]);
