const arrayLowerCase = (arr) => arr.map((el) => typeof el === "string" ? el.toLowerCase() : el);

arrayLowerCase(["Red", "Green"]);