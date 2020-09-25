/*
http://pop.frontendweekly.co/vwBVtV?utm_campaign=Frontend%2BWeekly&utm_medium=email&utm_source=Frontend_Weekly_193
*/

let intersection = arr1.filter(x => arr2.includes(x)); //Intersection (A ∩ B)

let difference = arr1.filter(x => !arr2.includes(x)); //Difference (A - A ∩ B)
//or
function difference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  return result;
}

//Symmetric Difference (A + B - A ∩ B)
let difference = arr1
  .filter(x => !arr2.includes(x))
  .concat(arr2.filter(x => !arr1.includes(x))); //

//union
let arr1 = [];
let arr2 = [];
let union = [...new Set([...arr1, ...arr2])];
