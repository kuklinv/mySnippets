// Longhand
if (anyVariable !== null || anyVariable !== undefined || anyVariable !== "") {
  var doSomeCalculation = anyVariable;
}
// Shorthand
var doSomeCalculation = anyVariable || "";
//output: '' (an empty string)
