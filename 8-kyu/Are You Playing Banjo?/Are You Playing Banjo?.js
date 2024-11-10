const areYouPlayingBanjo = (name) => {
  const split = name.split("")[0];
  if (split.toLowerCase() === "r" || split === "R") {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
};

areYouPlayingBanjo("Adam");
areYouPlayingBanjo("Paul");
areYouPlayingBanjo("Ringo");
areYouPlayingBanjo("bravo");
areYouPlayingBanjo("rolf");
