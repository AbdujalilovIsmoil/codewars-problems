const stray = (numbers) => {
  const obj = {};

  for (const number of numbers) {
    if (obj[number]) {
      obj[number]++;
    } else {
      obj[number] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key] <= 1) {
      return Number(key);
    }
  }
};

stray([1, 1, 2]); // 2
stray([1, 2, 1]); // 2
stray([2, 1, 1]); // 2
