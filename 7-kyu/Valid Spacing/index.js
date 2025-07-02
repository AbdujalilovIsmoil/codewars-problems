const validSpacing = s => s[0] === " " || s[s.length - 1] === " " || s.includes("  ") ? false : true;

validSpacing("Hello");
validSpacing("Helloworld");
validSpacing("Hello world");
validSpacing(" Hello world");
validSpacing("Hello  world ");