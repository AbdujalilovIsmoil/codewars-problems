const wordSearch = (query, seq) => {
  const words = [];

  for (let i = 0; i < seq.length; i++) {
    if (seq[i].toLowerCase().match(query.toLowerCase())) {
      words.push(seq[i]);
    }
  }

  return words.length > 0 ? words : ["Empty"];
};

wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]); // ["Empty"];
wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]); // ["ab", "abc", "zab"];
wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]); // ["ab", "abc", "zab"];
wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]); // ["aB", "Abc", "zAB"];
