const splitInParts = (s, partLength) => {
  let index = 0;
  const strs = [];
  let length = Math.ceil(s.length / partLength);

  for (let i = 0; i < length; i++) {
    const slice = s.slice(index, partLength + index);
    index += partLength;

    strs.push(slice);
  }

  return strs.join(" ");
};

splitInParts("HelloKata", 9); // "HelloKata";
splitInParts("HelloKata", 1); // "H e l l o K a t a";
splitInParts("supercalifragilisticexpialidocious", 3); // "sup erc ali fra gil ist ice xpi ali doc iou s";