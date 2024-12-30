const whatday = (num) => {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
};

whatday(1);
whatday(2);
whatday(3);
whatday(8);
whatday(20);