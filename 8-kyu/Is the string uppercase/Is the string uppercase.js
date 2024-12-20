String.prototype.isUpperCase = function () {
  const str = this.toString();
  return str === str.toUpperCase();
};

"c".isUpperCase() // False
"C".isUpperCase() // True
"hello I AM DONALD".isUpperCase() // False
"HELLO I AM DONALD".isUpperCase() // True
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() // False
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() // True