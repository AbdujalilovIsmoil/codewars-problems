const lostSheep = (friday, saturday, total) => {
  const calc1 = friday.reduce((a, b) => a + b, 0);
  const calc2 = saturday.reduce((a, b) => a + b, 0);

  return total - (calc1 + calc2);
};

lostSheep([], [], 15); // 15
lostSheep([1, 2], [3, 4], 15); // 5
lostSheep([3, 1, 2], [4, 5], 21); // 6
lostSheep([5, 1, 4], [5, 4], 29); // 10
lostSheep([5, 10, 15], [11, 23, 3, 4, 15], 89); // 3
lostSheep([3, 6, 9, 12], [3, 2, 1, 2, 3, 1], 44); // 2
lostSheep([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30); // 13
lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300); // 178
lostSheep([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1], 255); // 77
lostSheep([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355); // 156
