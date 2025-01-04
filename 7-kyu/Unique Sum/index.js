const uniqueSum = (lst) => {
  let sum = 0;
  let newList = [];
  const newObj = {};

  if (Array.isArray(lst) && lst.length) {
    for (let i = 0; i < lst.length; i++) {
      if (newObj[lst[i]]) {
        newObj[lst[i]]++;
      } else {
        newObj[lst[i]] = 1;
      }
    }

    for (key in newObj) {
      newList.push(Number(key));
    }

    for (let i = 0; i < newList.length; i++) {
      sum += newList[i];
    }

    return sum;
  }

  return null;
};

uniqueSum([]);
uniqueSum([1, 2, 3]);
uniqueSum([1, 3, 8, 1, 8]);
uniqueSum([-1, -1, 5, 2, -7]);
