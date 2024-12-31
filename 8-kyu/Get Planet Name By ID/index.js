const getPlanetName = (id) => {
  const planets = {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
  };

  let left = 0;
  let right = Object.keys(planets).length;

  while (right >= left) {
    const midIndex = Math.floor((left + right) / 2);

    if (id === midIndex) {
      return planets[midIndex];
    } else if (midIndex > id) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
};

getPlanetName(1);
getPlanetName(5);
getPlanetName(3);
