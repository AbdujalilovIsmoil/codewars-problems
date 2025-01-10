const add = (...param) => {
  let sum = 0;
  const newArr = [];

  for (let i = 0; i < param.length; i++) {
    newArr.push(param[i] * (i + 1));
  }

  for (const num of newArr) {
    sum += num;
  }

  return sum;
};

add(100, 200, 300); // 1400