const correct = (string) => string.split("").map(el => el === "1" ? "I" : el === "0" ? "O" : el === "5" ? "S" : el).join("");

correct("PAR15");
correct("L0ND0N");
correct("DUBL1N");
correct("BUDAPE5T");
correct("51NGAP0RE");