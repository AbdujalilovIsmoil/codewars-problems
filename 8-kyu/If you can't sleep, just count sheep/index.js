const countSheep = (num) => {
  let text = "";

  for (let i = 1; i <= num; i++) {
    text += `${i} sheep...`;
  }

  return text;
};

countSheep(0);
countSheep(1);
countSheep(2);
countSheep(3);
