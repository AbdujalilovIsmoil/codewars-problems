const greaterThanLessThan = (a, b, c) => a < b < c;

greaterThanLessThan(-9, -8, 7);
greaterThanLessThan(-9, -8, -7);
greaterThanLessThan(Number(null), 0, 1);
greaterThanLessThan(700000000001, 700000000002, -1);