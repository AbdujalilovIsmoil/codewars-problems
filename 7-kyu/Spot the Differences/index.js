const spot = (s1, s2) => {
  const newArr = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      newArr.push(i);
    }
  }

  return newArr;
};

spot("abcdefg", "abcqetg");
spot("FixedGrey", "FixedGrey");
spot("Hello World!", "hello world.");
