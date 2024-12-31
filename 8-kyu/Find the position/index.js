const position = (letter) => {
  let score = 0;

  for (let i = 97; i <= 122; i++) {
    score++;
    if (letter === String.fromCharCode(i)) {
      return `Position of alphabet: ${score}`;
    }
  }
};

position("a");
position("z");
position("e");
