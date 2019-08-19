/// delete all dubled element of array
const uniq = (arr) => arr.filter((arrItem) => arr.indexOf(arrItem));
console.log(uniq([2, 1, 2, 3]));

// live only dubled element in array
const uniq = (arr) => arr.filter((arrItem) => !arr.indexOf(arrItem));
console.log(uniq([2, 1, 2, 3]));