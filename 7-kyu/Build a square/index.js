const generateShape = (integer) => {
  let text = "";

  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      text += "+";
    }

    text += "\n";
  }

  return text.slice(0, text.length - 1);
};

generateShape(8);