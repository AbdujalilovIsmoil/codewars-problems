const getMinMax = (arr) => [Math.max(...arr), Math.min(...arr)].sort((a, b) => a - b);

getMinMax([1]); // [1, 1]
getMinMax([1, 2]); // [1, 2]
getMinMax([2, 1]); // [1, 2]

