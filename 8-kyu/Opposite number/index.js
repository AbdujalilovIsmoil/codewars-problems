const opposite = (number) => {
  if (number === 0) {
    return 0;
  } else if (number > 0) {
    return -Math.abs(number);
  } else {
    return Math.abs(number);
  }
};

opposite(1);
opposite(0);
opposite(-5);
opposite(4.25);
opposite(3.3333333);
opposite(-12525220.3325);
