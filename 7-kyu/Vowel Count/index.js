const getCount = (str) => {
  let score = 0;

  for (const el of str) {
    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
      score++;
    }
  }

  return score;
};

getCount("abracadabra"); // 5
