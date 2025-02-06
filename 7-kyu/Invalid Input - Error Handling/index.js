const getCount = (words) => {
  const vowels = "aeiouAEIOU";
  const trimWord = typeof words !== "string" ? "" : words.trim();
  const newObj = { consonants: 0, vowels: 0 };
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

  for (const word of trimWord) {
    if (vowels.includes(word)) {
      newObj.vowels += 1;
    }

    if (consonants.includes(word)) {
      newObj.consonants += 1;
    }
  }

  return newObj;
};

getCount("Test"); // { vowels: 1, consonants: 3 };
getCount("aeiou"); // { vowels: 5, consonants: 0 };
getCount("Here is some text"); // { vowels: 6, consonants: 8 };
getCount("To Kata or not to Kata"); // { vowels: 8, consonants: 9 };
getCount("To be a Codewarrior or not to be"); // { vowels: 12, consonants: 13 };
