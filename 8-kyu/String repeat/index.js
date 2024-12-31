const repeatStr = (n, s) => {
  const strings = [];
  for (let i = 0; i < n; i++) {
    strings.push(s);
  }

  return strings.join("");
}

repeatStr(3, "I");
repeatStr(5, "#");
repeatStr(6, "*");
