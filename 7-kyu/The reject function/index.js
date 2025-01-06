const reject = (array, predicate) => {
  const newArr = [];

  for (const el of array) {
    if (!predicate(el)) {
      newArr.push(el);
    }
  }

  return newArr;
};

const func = (num) => num % 2 == 0;

reject([1, 2, 3, 4, 5, 6], func);
