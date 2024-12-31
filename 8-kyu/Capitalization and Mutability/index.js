const capitalizeWord = (word) => word.split("").map((el, index) => index === 0 ? el.toUpperCase() : el).join("");

capitalizeWord("i");
capitalizeWord("word");
capitalizeWord("glasswear");