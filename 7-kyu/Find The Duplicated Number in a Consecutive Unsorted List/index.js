const findDup = (arr) => {
  const obj = {};

  for (const el of arr) {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }

  for (key in obj) {
    if (obj[key] > 1) {
      return Number(key);
    }
  }
};

findDup([1, 2, 2, 3]);
findDup([1, 3, 2, 5, 4, 5, 7, 6]);
