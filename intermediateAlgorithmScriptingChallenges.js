//////
//                         Intermediate Algorithm Scripting Challenges
//
//                                                  summAll
// const arrSort = (arr) => {
//   return arr.sort(function (a, b) {
//     return a - b;
//   });
// }

// const factor = (one, two) => {
//   if (one === two) return two;
//   return one + factor(one + 1, two);
// }
// const summAll = (arr) => {
//   let sortInput = arrSort(arr);
//   let start = sortInput[0];
//   let finish = sortInput[1];
//   return factor(start, finish);
// }

// let testArr = [4, 1];
// console.log(summAll(testArr));

// //                                                Diff Two Arrays
// /*
// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.

// */
// function diffArray(arr1, arr2) {
//   var newArr = [];
//   for (let i = 0; i <= arr1.length - 1; i += 1) {
//     if (arr2.indexOf(arr1[i]) == -1) {
//       newArr.push(arr1[i]);
//     }
//   }
//   for (let j = 0; j <= arr2.length - 1; j += 1) {
//     if (arr1.indexOf(arr2[j]) == -1) {
//       newArr.push(arr2[j]);
//     }
//   }
//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// //                                             Seek and Destroy
// /*
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.
// */

// function destroyer(arr) {
//   let dataArr = arguments[0];
//   let argArr = [];
//   for (let i = 1; i <= arguments.length - 1; i += 1) {
//     argArr.push(arguments[i]);
//   }

// const filtered = (arr, arg) => arr.filter(item => item !== arg);

// for (let j = 0; j <= argArr.length - 1; j += 1) {
//   dataArr = filtered(dataArr, argArr[j]);  
//   console.log(dataArr);
//   }
//   return dataArr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer([2, 3, 2, 3], 2, 3); //should return []
// destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"]
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"); // should return [12,92,65]

////////////////////////////////////Wherefore art thou

function whatIsInAName(collection, source) {
  var arr = [];
  for (let i = 0; i < collection.lenght; i += 1) {
    for (let collKey in collection[i]) {
       console.log(collection[i][collKey]);
      }
    }
  return arr;
}

whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}],

{
  last: "Capulet"
});

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []

///////////////////