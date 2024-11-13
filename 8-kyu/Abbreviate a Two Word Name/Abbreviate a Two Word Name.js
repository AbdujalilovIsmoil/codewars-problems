const abbrevName = (name) => name.split(" ").map((el, index) => index > 0 ? el[0].toUpperCase() : el[0].toUpperCase()).join(".");

abbrevName("P Favuzzi");
abbrevName("Evan Cole");
abbrevName("Sam Harris");
abbrevName("Patrick Feenan");
abbrevName("David Mendieta");
