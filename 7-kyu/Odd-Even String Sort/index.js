const sortMyString = (S) => {
  const words = S.split("");
  let text = "";

  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      text += words[i];
    }
  }

  text += " ";

  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      text += words[i];
    }
  }

  return text;
}

sortMyString("CodeWars");
sortMyString("YCOLUE'VREER");