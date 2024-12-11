const hello = (name) => {
  if (!name) {
    return "Hello, World!";
  }

  const lowerCase = name.toLowerCase().split("");

  lowerCase[0] = lowerCase[0].toUpperCase();

  return `Hello, ${lowerCase.join("")}!`;
};

hello("johN"); // 'Hello, John!'
hello("alice"); // Hello, Alice!
hello(); // Hello, World!
hello(""); // Hello, World!