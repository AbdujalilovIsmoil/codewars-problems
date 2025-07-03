String.prototype.vowel = function () {
  if (this.toString().length === 1 && this.toString() !== "") {
    const vowels = "aeiouAEIOU";

    return vowels.includes(this.toString());
  }

  return false;
};

"".vowel(); // false
"a".vowel(); // true
"E".vowel(); // true
"z".vowel(); // false
"ou".vowel(); // false
"lol".vowel(); // false