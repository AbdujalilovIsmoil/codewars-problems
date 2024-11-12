const monkeyCount = (n) => {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
};

monkeyCount(10);