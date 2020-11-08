
//Longhand
let a, b, c;
a = 5;
b = 8;
c = 12;

//Shorthand
let [a, b, c] = [5, 8, 12];

//Longhand
let imagePath;
let path = getImagePath();
if(path !== null && path !== undefined && path !== '') {
    imagePath = path;
} else {
    imagePath = 'default.jpg';
}

//Shorthand
let imagePath = getImagePath() || 'default.jpg';

//Longhand
if (isLoggedin) {
    goToHomepage();
}

//Shorthand
isLoggedin && goToHomepage();

let x = 'Hello', y = 55;
//Longhand
const temp = x;
x = y;
y = temp;

//Shorthand
[x, y] = [y, x];

//Longhand
console.log('You got a missed call from ' + number + ' at ' + time);

//Shorthand
console.log(`You got a missed call from ${number} at ${time}`);

//Longhand
console.log('JavaScript, often abbreviated as JS, is a\n' +             'programming language that conforms to the \n' +
    'ECMAScript specification. JavaScript is high-level,\n' +
    'often just-in-time compiled, and multi-paradigm.' );
//Shorthand
console.log(`JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.`);

//Longhand
if (value === 1 || value === 'one' || value === 2 || value === 'two') {
    // Execute some code
}

// Shorthand 1
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) {
    // Execute some code
}
// Shorthand 2
if ([1, 'one', 2, 'two'].includes(value)) {
    // Execute some code
}

//Longhand
let total = parseInt('453');
let average = parseFloat('42.6');

//Shorthand
let total = +'453';
let average = +'42.6';

//Longhand
let str = '';
for(let i = 0; i < 5; i ++) {
    str += 'Hello ';
}
console.log(str); // Hello Hello Hello Hello Hello

// Shorthand
'Hello '.repeat(5);

'sorry\n'.repeat(100);

//Longhand
const floor = Math.floor(6.8); // 6

// Shorthand
const floor = ~~6.8; // 6

let arr = [10, 20, 30, 40];
//Longhand
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//Shorthand
//for of loop
for (const val of arr) {
    console.log(val);
}
//for in loop
for (const index in arr) {
    console.log(arr[index]);
}

let obj = {x: 20, y: 50};
for (const key in obj) {
    console.log(obj[key]);
}

let arr1 = [20, 30];
//Longhand
let arr2 = arr1.concat([60, 80]);
// [20, 30, 60, 80]

//Shorthand
let arr2 = [...arr1, 60, 80];
// [20, 30, 60, 80]

//!!
let obj = {x: 20, y: {z: 30}};

//Longhand
const makeDeepClone = (obj) => {
    let newObject = {};
    Object.keys(obj).map(key => {
        if(typeof obj[key] === 'object'){
            newObject[key] = makeDeepClone(obj[key]);
        } else {
            newObject[key] = obj[key];
        }
    });
    return newObject;
}
const cloneObj = makeDeepClone(obj);

//Shorthand
const cloneObj = JSON.parse(JSON.stringify(obj));


