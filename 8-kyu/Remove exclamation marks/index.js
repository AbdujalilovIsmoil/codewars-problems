const removeExclamationMarks = (s) => s.split("").filter(el => el !== "!").join("");

removeExclamationMarks("Hello World!");