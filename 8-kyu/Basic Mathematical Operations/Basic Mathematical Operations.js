const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "It's not operation";
  }
};

basicOp("+", 10, 5);
basicOp("-", 10, 5);
basicOp("*", 10, 5);
basicOp("/", 10, 5);
