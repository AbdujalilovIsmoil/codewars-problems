const first = (arr, n) => n === 0 ? [] : !n ? arr.slice(0, 1) : arr.slice(0, n); 

first(arr) // ['a'];
first(arr, 0) // [];
first(arr, 2) // ['a', 'b']
first(arr, 3) // ['a', 'b', 'c'];