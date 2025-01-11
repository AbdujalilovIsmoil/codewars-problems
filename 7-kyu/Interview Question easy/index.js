const getStrings = (city) => {
  let text = "";
  const obj = {};

  const filter = city
    .split(" ")
    .filter((el) => el !== " ")
    .join("");

  for (let i = 0; i < filter.length; i++) {
    if (obj[filter[i].toLowerCase()]) {
      obj[filter[i].toLowerCase()]++;
    } else {
      obj[filter[i].toLowerCase()] = 1;
    }
  }

  for (const key in obj) {
    text += `${key}:${Array(obj[key]).fill("*", 0, obj[key]).join("")},`;
  }

  return text.slice(0, text.length - 1);
};

getStrings("Chicago"); // "c:**,h:*,i:*,a:*,g:*,o:*"
getStrings("Bangkok"); // "b:*,a:*,n:*,g:*,k:**,o:*"
getStrings("Las Vegas"); // "l:*,a:**,s:**,v:*,e:*,g:*"
