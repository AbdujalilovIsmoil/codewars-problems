const any = (arr, fun) => {
  for (const key in arr) {
    if (fun(arr[key], key)) {
      return true;
    }
  }

  return false;
};

any([1, 2, 3, 4], function (v, i) {
  return v > 3;
});
any([1, 2, 3, 4], function (v, i) {
  return v > 4;
});