const removeEveryOther = (arr) => arr.filter((_, index) => index % 2 === 0);

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
removeEveryOther(["Hello", "Goodbye", "Hello Again"]);