//////// INTRODACTION BASIC ALGORINM SCRIPTING

function findLongestWordLength(str) {
  let counter = 0;
  let maxSubStr = 0;
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] == ' ' || i == str.length) {
      if (counter >= maxSubStr) {
        maxSubStr = counter;
        counter = 0;
      } else {
        counter = 0;
      }
    } else counter += 1;
  }
  return maxSubStr;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//////////////////////////
//Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  let maxNumArr = [];
  for (let index = 0; index < arr.length; index++) {
    let innerMax = arr[index][0];
    for (let indexInn = 0; indexInn < arr[index].length; indexInn++) {
      if (arr[index][indexInn] >= innerMax) {
        innerMax = arr[index][indexInn];
      }
    }
    maxNumArr.push(innerMax);
  }
  return maxNumArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// another variant with ES6:
function largestOfFour(arr) {
  let maxNumArr = [];
  for (let index = 0; index < arr.length; index++) {
    maxNumArr.push(Math.max(...arr[index]));
  }
  return maxNumArr;
}

///////////////////////
//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) == target;
}

confirmEnding("Bastian", "n");

///////////Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);

//// and variant else not use .repeat() method and if num < 0 return ' '

function repeatStringNumTimes(str, num) {
  let newStr = '';
  if (num < 0) return newStr;
  for (let i = 0; i <= num - 1; i += 1) {
    newStr += str;
  }
  return newStr;
}


repeatStringNumTimes("abc", 3);

////////////////////////////
//Truncate a String

function truncateString(str, num) {
  return num >= str.length ? str : str.slice(0, num) + "...";
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
/*
truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) 
should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) 
should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".
*/

///////////////////////////////////
//Finders Keepers

function findElement(arr, func) {
  let filteredArr = arr.filter(func);
  let num = filteredArr.reduce(function (a, b) {
    return a * b;
  }, 1);
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// and if do this with loop, then:

function findElement(arr, func) {
  let num = 1;
  for (let i = 0; i <= arr.length; i += 1)
    if (func(arr[i])) {
      num = num * arr[i];
    }
  if (num > 1) {
    return num;
  } else return underfined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);
//////////////////////////////////////
/// chek boolean
function booWho(bool) {
  return typeof (bool) === "boolean" ? true : false;
}

booWho(null);
///////////////////////////////////
// Title Case a Sentence
function titleCase(str) {
  let copyStr = str.toLowerCase();
  let resultStr = '';
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (i == 0 || copyStr[i - 1] == " ") {
      resultStr += copyStr[i].toUpperCase();
    } else {
      resultStr += copyStr[i];
    }
  }
  return resultStr;
}

titleCase("I'm a little tea pot");
//titleCase("sHoRt AnD sToUt")
///////////////////////////////////////
//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // should return [4, 1, 2, 3, 5].

///////////////////////////////Falsy Bouncer
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  let truArr = [];
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i]) {
      truArr.push(arr[i]);
    }
  }
  return truArr;
}

bouncer([7, "ate", "", false, 9]);

/*
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/
///////////////////////

// Where do I Belong//   // Find my place in this sorted array.
function getIndexToIns(arrIn, num) {
   let position;
   if (arrIn.length == 0) {return 0;}
   let arr = arrIn.sort(function(a,b) {
    return a- b;
   });
   for (let i = 0; i <= arr.length - 1; i += 1) {
     if (num > arr[i] && num < arr[i + 1]) {
       return position =  i + 1;
     } else if (num == arr[i] &&  num < arr[i + 1]){
       return  position = i;
     } else if (num > arr[i]) {
       position = i + 1;
     } else {
       position = i;
       } 
   }
  return position;
}

getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
//getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.

////////////////////////////////////////////////////////////// sort array with functional sentens
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

// Mutations         
function mutation(arr) {
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();
  let counter = 0;
  for (let i = 0; i <= secondStr.length - 1; i += 1) {
    if (firstStr.indexOf(secondStr[i]) < 0) {
      counter += 1;
      console.log(counter);
    }
  }
  return counter > 0 ? false : true;
}

mutation(["hello", "Hello"]) // true

///////////////////////////////////////////////////
// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/

