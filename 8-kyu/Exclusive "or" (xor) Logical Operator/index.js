const xor = (a, b) => a === false && b === false ? false : a === true && b === false ? true : a === false && b === true ? true : false;

xor(true, true);
xor(true, true);
xor(false, true);
xor(true, false);
xor(false, false);