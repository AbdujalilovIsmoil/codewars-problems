const checkForFactor = (base, factor) => (base % factor === 0 ? true : false);

checkForFactor(9, 2);
checkForFactor(10, 2);
checkForFactor(63, 7);
checkForFactor(653, 7);
checkForFactor(2453, 5);
checkForFactor(2450, 5);
checkForFactor(24612, 3);
checkForFactor(24617, 3);