const findAverage = (nums) => nums.reduce((a, b) => a + b, 0) / nums.length;

findAverage([1]);
findAverage([1, 3, 5, 7]);