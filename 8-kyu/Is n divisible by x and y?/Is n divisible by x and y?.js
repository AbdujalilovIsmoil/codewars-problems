const isDivisible = (n, x, y) => (n % x === 0 && n % y === 0 ? true : false);

isDivisible(3, 3, 4);
isDivisible(12, 3, 4);
isDivisible(8, 3, 4);
isDivisible(48, 3, 4);
