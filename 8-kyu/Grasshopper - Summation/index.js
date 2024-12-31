const summation = (num) => {
  let index = 0;

  for (let i = 0; i <= num; i++) {
    index += i;
  }

  return index;
};

summation(1);
summation(2);
summation(8);
