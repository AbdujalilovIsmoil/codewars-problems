const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a + b, 0);

arrayPlusArray([1, 2, 3], [4, 5, 6]);
arrayPlusArray([0, 0, 0], [4, 5, 6]);
arrayPlusArray([-1, -2, -3], [-4, -5, -6]);
arrayPlusArray([100, 200, 300], [400, 500, 600]);