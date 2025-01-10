const fire = (x, y) => {
  const arrows = [
    ["top left", "top middle", "top right"],
    ["middle left", "center", "middle right"],
    ["bottom left", "bottom middle", "bottom right"],
  ];

  return arrows[y][x];
};

fire(0, 0); // 'top left'
fire(1, 2); // 'bottom middle'