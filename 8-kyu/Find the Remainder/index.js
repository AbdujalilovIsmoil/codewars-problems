const remainder = (n, m) => {
  if (n > m) {
    return n % m;
  }

  return m % n;
};

remainder(1, 0);
remainder(0, 0);
remainder(17, 5);
remainder(13, 72);
