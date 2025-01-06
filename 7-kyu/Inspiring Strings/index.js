const longestWord = (stringOfWords) => {
  const split = stringOfWords.split(" ");

  const newWords = split.map((el) => [el, el.length]);

  const sort = newWords.sort((a, b) => a[1] - b[1]);

  return sort[sort.length - 1][0];
};

longestWord("lonely");
longestWord("a pair");
longestWord("a b c d e fgh");
longestWord("one two three");
longestWord("red blue grey");