const multiplyAll = (arr) => (sum) => arr.map((el) => el * sum);

multiplyAll([])(10); // [];
multiplyAll([1, 2, 3])(2); // [2, 4, 6];
multiplyAll([1, 2, 3])(1); // [1, 2, 3];
multiplyAll([1, 2, 3])(0); // [0, 0, 0];