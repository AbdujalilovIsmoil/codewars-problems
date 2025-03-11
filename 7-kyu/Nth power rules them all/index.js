const modifiedSum = (a, n) => {
  let result = 0;
  const firstCalc = a.reduce((a, b) => a + b, 0);

  for (let i = 0; i < a.length; i++) {
    const secondCalc = a[i] ** n;

    result += secondCalc;
  }

  return result - firstCalc;
};

modifiedSum([1, 2], 5); // 30
modifiedSum([1, 2, 3], 3); // 30
