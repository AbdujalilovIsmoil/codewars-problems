const checkThreeAndTwo = (array) => {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key] < 2 || obj[key] > 3) {
      return false;
    }
  }

  return true;
};

checkThreeAndTwo(["a", "a", "a", "b", "b"]);
checkThreeAndTwo(["a", "c", "a", "c", "b"]);
checkThreeAndTwo(["a", "a", "a", "a", "a"]);
