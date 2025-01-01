const average = (scores) => Math.round(scores.reduce((a, b) => a + b) / scores.length);

average([49, 3, 5, 300, 7]);
average([90, 98, 89, 100, 100, 86, 94]);