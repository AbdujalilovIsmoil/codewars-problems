const orderWord = (s) => {
  if (!Boolean(s)) {
    return "Invalid String!";
  }

  const newArr = s.split("").map((el) => el.charCodeAt());
  const sort = newArr.sort((a, b) => a - b);
  const resultArr = sort.map((el) => String.fromCharCode(el));
  const join = resultArr.join("");

  return join;
};

orderWord("b"); // "b"
orderWord("cba"); // "abc"
orderWord("abc"); // "abc"
orderWord("bobby"); // "bbboy"
orderWord(""); // "Invalid String!"
orderWord(null); // "Invalid String!"
orderWord('"][@!$*(^&%'); // '!"$%&(*@[]^'
orderWord("Hello, World!"); // " !,HWdellloor"
orderWord("completesolution"); // "ceeillmnooopsttu"
orderWord('i"d][@z!$r(^a&world%'); // '!"$%&(@[]^addilorrwz'