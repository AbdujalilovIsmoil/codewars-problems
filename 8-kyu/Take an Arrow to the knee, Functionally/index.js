const ArrowFunc = function (arr) {
  return arr.map((el) => String.fromCharCode(el)).join(""); 
};

ArrowFunc([84, 101, 115, 116]);
ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]);