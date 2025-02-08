const filterNumbers = (str) => {
  let text = "";
  let numbers = "0123456789";

  for (const char of str) {
    if (!numbers.includes(char)) {
      text += char;
    }
  }

  return text;
};

filterNumbers("a1b2c3"); // "abc"
filterNumbers("test123"); // "test"
filterNumbers("aa1bb2cc3dd"); // "aabbccdd"
