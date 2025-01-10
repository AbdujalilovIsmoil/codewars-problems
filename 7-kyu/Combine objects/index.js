const combine = (...rest) => {
  const newObj = {};

  for (const obj of rest) {
    for (key in obj) {
      if (newObj[key]) {
        newObj[key] = newObj[key] + obj[key];
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
};

const objD = { c: 3 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objA = { a: 10, b: 20, c: 30 };

combine({}, {}, {}); // {}
combine(objA, objB); // { a: 13, b: 20, c: 36, d: 3 }
combine(objA, objC); // { a: 15, b: 20, c: 30, d: 11, e: 8 }
combine(objA, objC, {}); // { a: 15, b: 20, c: 30, d: 11, e: 8 };
combine(objA, objB, objC); // { a: 18, b: 20, c: 36, d: 14, e: 8 }
combine(objA, objC, objD); // { a: 15, b: 20, c: 33, d: 11, e: 8 };
