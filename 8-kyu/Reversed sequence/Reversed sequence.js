const reverseSeq = (n) => {
  const reverse = [];

  for (let i = n; i >= 1; i--) {
    reverse.push(i);
  }

  return reverse;
};

reverseSeq(5);