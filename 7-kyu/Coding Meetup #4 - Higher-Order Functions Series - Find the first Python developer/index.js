const getFirstPython = (list) => {
  const language = "Python";

  for (let i = 0; i < list.length; i++) {
    if (language === list[i].language) {
      return `${list[i].firstName}, ${list[i].country}`;
    }
  }

  return "There will be no Python developers";
};

getFirstPython([
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Amar",
    lastName: "V.",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    age: 32,
    language: "Ruby",
  },
]);
getFirstPython([
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Amar",
    lastName: "V.",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    age: 32,
    language: "Ruby",
  },
]);
