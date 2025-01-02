const fizzbuzz = (n) => {
  const results = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
      continue;
    }

    if (i % 3 === 0) {
      results.push("Fizz");
      continue;
    }

    if (i % 5 === 0) {
      results.push("Buzz");
      continue;
    }
    results.push(i);
  }

  return results;
};

fizzbuzz(5);
fizzbuzz(9);
fizzbuzz(15);
