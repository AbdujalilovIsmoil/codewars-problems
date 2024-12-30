const reverse = (string) => {
  const strings = [];

  for (let i = string.split(" ").length; i >= 0; i--) {
    strings.push(string.split(" ")[i]);
  }

  return strings.join(" ").trim();
};

reverse("");
reverse("CodeWars");
reverse("no one cares");
reverse("This is so easy");
reverse("I am an expert at this");