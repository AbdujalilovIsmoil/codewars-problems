const check = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return true;
    }
  }

  return false;
};

check([1, 2], 3);
check([101, 45, 75, 105, 99, 107], 107);
check(["t", "e", "s", "t"], "e");
check(["what", "a", "great", "kata"], "kat");
