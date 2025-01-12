const box = (num) => {
  let text = "";
  const newArr = [];

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i !== 0 && i !== num - 1 && j !== 0 && j !== num - 1) {
        text += " ";
      } else {
        text += "-";
      }
    }

    newArr.push(text);
    text = "";
  }

  return newArr;
};

box(2); // ["--", "--"]
box(3); // ["---", "- -", "---"]
box(4); // ["----", "-  -", "-  -", "----"]
box(5); // ["-----", "-   -", "-   -", "-   -", "-----"]
box(6); // ["------", "-    -", "-    -", "-    -", "-    -", "------"]