const getAverage = (marks) => {
  return parseInt(marks.reduce((prev, curr) => prev + curr) / marks.length);
};

getAverage([2, 2, 2, 2]);
getAverage([1, 2, 3, 4, 5]);
getAverage([1, 1, 1, 1, 1, 1, 1, 2]);
