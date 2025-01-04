const factory = (x) => {
  return function (arr) {
    const newArr = [];

    for (const el of arr) {
      newArr.push(el * x);
    }

    return newArr;
  };
};

factory(3)([1, 2, 3]); // [3, 6, 9];
factory(5)([1, 2, 3]); // [5, 10, 15];
factory(6)([1, 2, 3]); // [6, 12, 18];