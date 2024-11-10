const sumMix = (x) => x.reduce((prev, curr) => Number(prev) + Number(curr), 0);

sumMix([9, 3, "7", "3"]);
sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);
sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]);
