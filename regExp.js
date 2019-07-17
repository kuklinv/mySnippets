///////////////////////////////////////////////////Introduction to the Regular Expression Challenges

/// us .test() !! use for testing you regexp sentense!!!!!!!!!

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
/////////////////////////////// using "alternation" | "or" | "|"
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
/////////////////////////////////////////
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
//////////////////////////////////////////
//w - letters
//\ W - NO letters
//\ s - whitespace
//\ S - NO whitespace
//\ d - digital
// ^ [] - NO getMatchs
// /^ ../ begin string
// /..$/ end string
// /..?../ -i dont now
/////////////////////////////////////////////////////////
//password
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // two positive lookheads + min 5 letters + 2 digits
let result = pwRegex.test(sampleWord);


///////////////////////////////////////////////////////Reuse Patterns Using Capture Groups
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true - -!!!! for testing youre regExp!!!!!!!!!!! USE!!!!!!!
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]


/////////////////////////////////////////////////////// replace!!
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

////////////////////////////////////////////////////// replace  using capture group access with "$"
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"

//////////////////////////////////////////////remove string whitespaces
let hello = "  Hello, World!  ";
let myWsRegExp = /^\s+|\s+$/g;
let result = hello.replace(myWsRegExp, ''); ///// ore use .trim();
/////////////////////////////////////////////////