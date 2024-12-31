const betterThanAverage = (classPoints, yourPoints) => (classPoints.reduce((a, b) => a + b) / classPoints.length) < yourPoints;

betterThanAverage([2, 3], 5);
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50);
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);