// ES features

// ⬬ String .matchAll()
// ⬬ Dynamic import()
// ⬬ Array .flat() .flatMap()
// ⬬ Object .fromEntries()
// ⬬ String .trimStart() .trimEnd()
// ⬬ well-formed JSON.stringify()
// ⬬ stable Array .sort()
// ⬬ new Function .toString()
// ⬬ Standardized globalThis object

// Match all occurrences of the letters: "e" or "l"
let iterator = "hello".matchAll(/[el]/);
for (const match of iterator)
    console.log(match);
// [ 'e', index: 1, input: 'hello' ] // Iteration 1
// [ 'l', index: 2, input: 'hello' ] // Iteration 2
// [ 'l', index: 3, input: 'hello' ] // Iteration 3

// Dynamic import
element.addEventListener('click', async () => {
    const module = await import(`./api-scripts/button-click.js`);
    module.clickEvent();
});

// Array.flat()
let multi = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];
// multi.flat();               // [1,2,3,4,5,6,Array(4)]
// multi.flat().flat();        // [1,2,3,4,5,6,7,8,9,Array(3)]
// multi.flat().flat().flat(); // [1,2,3,4,5,6,7,8,9,10,11,12]
// multi.flat(Infinity);       // [1,2,3,4,5,6,7,8,9,10,11,12]

// Array.flatMap()
let array = [1, 2, 3, 4, 5];
array.flatMap(v => [v, v * 2]); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// Object.fromEntries()
// Transform a list of key & value pairs into an object:
let obj = { apple : 10, orange : 20, banana : 30 };
let entries = Object.entries(obj);
entries;
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["apple", 10]
// 1: (2) ["orange", 20]
// 2: (2) ["banana", 30]
let fromEntries = Object.fromEntries(entries);
// { apple: 10, orange: 20, banana: 30 }


// Stable Array.prototype.sort()
var fruit = [
    { name: "Apple",      count: 13, },
    { name: "Pear",       count: 12, },
    { name: "Banana",     count: 12, },
    { name: "Strawberry", count: 11, },
    { name: "Cherry",     count: 11, },
    { name: "Blackberry", count: 10, },
    { name: "Pineapple",  count: 10, }
];
// Create our own sort criteria function:
let my_sort = (a, b) => a.count - b.count;
// Perform stable ES10 sort:
let sorted = fruit.sort(my_sort);
console.log(sorted);

// # - на подходе










