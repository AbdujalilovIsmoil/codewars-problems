const balancedNum = (number) => {
  const newArr = String(number).split("").map((el) => Number(el));
  const midIndex = Math.floor(newArr.length / 2);

  const temp = newArr.length % 2 === 0 ? midIndex - 1 : midIndex;
  const rightArr = newArr.slice(midIndex + 1);
  const leftArr = newArr.slice(0, temp);

  const calculateLeftArr = leftArr.reduce((a, b) => a + b, 0);
  const calculateRightArr = rightArr.reduce((a, b) => a + b, 0);

  const isBalanced = calculateLeftArr === calculateRightArr;

  return isBalanced ? "Balanced" : "Not Balanced";
};

balancedNum(7); // balanced
balancedNum(13); // balanced
balancedNum(959); // balanced
balancedNum(424); // balanced
balancedNum(432); // Not Balanced
balancedNum(1024); // Not Balanced
balancedNum(66545); // Not Balanced
balancedNum(295591); // Not Balanced
balancedNum(1230987); // Not Balanced
balancedNum(56239814); // Not Balanced