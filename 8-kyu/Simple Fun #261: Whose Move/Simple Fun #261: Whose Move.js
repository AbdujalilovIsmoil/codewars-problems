const whoseMove = (lastPlayer, win) => {
  if (lastPlayer === "black" && win) {
    return "black";
  } else if (lastPlayer === "black" && !win) {
    return "white";
  } else if (lastPlayer === "white" && win) {
    return "white";
  } else {
    return "black";
  }
};

whoseMove("white", true); // white
whoseMove("black", false); // white
whoseMove("white", false); // black
