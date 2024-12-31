const positiveSum = (arr) => arr.filter(el => el > 0).reduce((a, b) => a + b, 0);

positiveSum([]);
positiveSum([1, 2, 3, 4, 5]);
positiveSum([1, -2, 3, 4, 5]);
positiveSum([-1, 2, 3, 4, -5]);
positiveSum([-1, -2, -3, -4, -5]);