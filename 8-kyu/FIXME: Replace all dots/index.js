const replaceDots = (str) => str.split("").map(el => el === "." ? "-" : el).join("");

replaceDots("one.two.three");