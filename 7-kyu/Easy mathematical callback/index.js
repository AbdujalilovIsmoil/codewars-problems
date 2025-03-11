const processArray = (arr, callback) => {
  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    numbers.push(callback(arr[i]));
  }

  return numbers;
};

processArray([], (n) => n + 1); // [];
processArray([4, 8, 2, 7, 5], (n) => n * 2); // [8, 16, 4, 14, 10];
processArray([7, 8, 9, 1, 2], (n) => n + 5); // [12, 13, 14, 6, 7];
processArray([-1, 1, 2, 3, 4, 5], (n) => n * n * n); // [-1, 1, 8, 27, 64, 125];
