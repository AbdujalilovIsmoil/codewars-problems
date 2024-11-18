const distinct = (nums) => nums.filter((el, index, arr) => arr.indexOf(el) === index);

distinct([1]);
distinct([1, 2]);
distinct([1, 1, 2]);