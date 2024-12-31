const countBy = (x, n) => {
  const firstCalc = x * n;

  const z = [];
  for (let i = x; i <= firstCalc; i += x) {
    z.push(i);
  }
  return z;
};

countBy(2, 5);
countBy(1, 10);