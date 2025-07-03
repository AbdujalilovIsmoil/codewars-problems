const validSpacing = s => s[0] === " " || s[s.length - 1] === " " || s.includes("  ") ? false : true;

validSpacing("Hello"); // true
validSpacing("Helloworld"); // true
validSpacing("Hello world"); // true
validSpacing(" Hello world"); // false
validSpacing("Hello  world "); // false