const leo = (arg) => {
  if (typeof arg === "number") {
    if (arg === 88) {
      return "Leo finally won the oscar! Leo is happy";
    }
    if (arg === 86) {
      return "Not even for Wolf of wallstreet?!";
    }
    if (arg < 88 || arg < 86) {
      return "When will you give Leo an Oscar?";
    }
    if (arg > 88) {
      return "Leo got one already!";
    }
  }
};

leo(89);
leo(88);
leo(87);
leo(86);