const alphaSeq = (str) => {
  const newArr = [];

  const updatedArr = [];

  let updatedStr = "";

  const alphabit = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
    f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
  };

  for (const char of str) {
    for (const key in alphabit) {
      if (char.toLowerCase() === key) {
        newArr.push({ [key]: alphabit[key] });
      }
    }
  }

  for (const obj of newArr) {
    updatedArr.push(Object.entries(obj));
  }

  const sort = updatedArr.flat(1).sort((a, b) => a[1] - b[1]);

  for (const el of sort) {
    const newEl = Array(el[1])
      .fill(el[0])
      .map((el, index) => {
        if (index === 0) {
          return el.toUpperCase();
        } else {
          return el;
        }
      });

    updatedStr += newEl.join("") + ",";
  }

  return updatedStr.slice(0, updatedStr.length - 1);
}

alphaSeq("ZpglnRxqenU");
alphaSeq("NyffsGeyylB");
alphaSeq("MjtkuBovqrU");
alphaSeq("EvidjUnokmM");
alphaSeq("HbideVbxncC");