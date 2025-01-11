const findArray = (arr1, arr2) => {
  if (!arr1.length || !arr2.length) {
    return [];
  }

  let i = 0;
  const newArr = [];

  while (arr2.length > i) {
    for (let j = 0; j < arr1.length; j++) {
      if (j === arr2[i]) {
        newArr.push(arr1[j]);
      }
    }

    i++;
  }

  return newArr;
};

findArray([1, 2, 3, 4, 5], [0]); // [1]
findArray([1, 2, 3, 4, 5], [4, 2, 0]); // [5, 3, 1]
findArray([1, 2, 3, 4, 5], [2, 2, 2]); // [3, 3, 3];
findArray(["a", "a", "a", "a", "a"], [2, 4]); // ["a", "a"]
findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]); // [1, 1, 1]
findArray(["this", "is", "test"], [0, 1, 2]); // ["this", "is", "test"];
