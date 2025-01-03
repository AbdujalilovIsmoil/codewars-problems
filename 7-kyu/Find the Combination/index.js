const countCombinations = (string, key) => {
  const regex = new RegExp(key, "gi");

  const match = string.match(regex);

  return match ? match.length : 0;
};

countCombinations("", "n");
countCombinations("", "no");
countCombinations("hi", "bye");
countCombinations("     ", " ");
countCombinations("03948", "\\d");
countCombinations("!@$#*$@@#$!", "!");
countCombinations("jfdkeyoeld", "key");
countCombinations("wowowowowow", "wow");
countCombinations("hellohellohello", "hello");
countCombinations("Count t h e spaces ", "\\s");
countCombinations("How many characters?", ".");
countCombinations("Does this work krow?", "work");
countCombinations("my name is hEctOrhector HECToR hectoRRRR", "hector");