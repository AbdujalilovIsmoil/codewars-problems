const pickIt = (arr) => {
  const odd = [];
  const even = [];

  for (const num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return [odd, even];
};

pickIt([1, 2]);
pickIt([1, 2, 3]);
pickIt([3, 2, 1]);
pickIt([10, 20, 30]);
pickIt([11, 21, 31]);
pickIt([8, 1, 5, 4, 6, 1, 1]);