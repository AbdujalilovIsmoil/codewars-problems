Array.prototype.remove_ = function (integer_list, values_list) {
  const numbers = [];

  for (const el of integer_list) {
    if (!values_list.includes(el)) {
      numbers.push(el);
    }
  }

  return numbers;
};

const l = new Array();

l.remove_([], [2, 2, 4, 3]); // [];
l.remove_([4, 4, 2, 3], [2, 2, 4, 3]); // [];
l.remove_([1, 1, 2, 3, 1, 2, 3, 4], [2, 2, 4]); // [2, 2, 4];
l.remove_([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3]); // [8, 7, 6, 5, 1];
l.remove_([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2]); // [5, 6, 7, 8];
