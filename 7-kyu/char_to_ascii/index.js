const charToAscii = (string) => {
  let newStr = "";
  const newObj = {};
  const updatedObj = {};
  const alphebetic = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (!string) {
    return null;
  }

  for (const char of string) {
    if (alphebetic.includes(char)) {
      newStr += char;
    }
  }

  for (const char of newStr) {
    if (newObj[char]) {
      newObj[char]++;
    } else {
      newObj[char] = 1;
    }
  }

  for (key in newObj) {
    updatedObj[key] = key.charCodeAt();
  }

  return updatedObj;
};

charToAscii(""); // null
charToAscii("a"); // { a: 97 }
charToAscii("aaa"); // { a: 97 }
charToAscii("ABaa ^"); // { A: 65, B: 66, a: 97 }
charToAscii("hello world"); // { h: 104, e: 101, l: 108, o: 111, w: 119, r: 114, d: 100 }