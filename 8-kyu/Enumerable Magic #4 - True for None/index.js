const none = (arr, fun) => {
  for (const key in arr) {
    if (fun(arr[key])) {
      return false;
    }
  }

  return true;
};

none([1, 2, 3, 4, 5], function (item) {
  return item > 5;
});
none([1, 2, 3, 4, 5], function (item) {
  return item > 4;
});
