/////////////////  continue FCCamp course about JS
///////////////// functional programming chelenges


////Refactor Global Variables Out of Functions
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr, bookName) {
  let newList = [...arr];
  newList.push(bookName);
  return newList;
}

function remove (arr, bookName) {
  let newList = [...arr];
    if (newList.indexOf(bookName) >= 0) {
    newList.splice(newList.indexOf(bookName), 1);
    }
  return newList;
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

///////////////////////////////////////// use MAP and don't use FOR
////
// the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];

/*
var rating = [];
for(var i=0; i < watchList.length; i++){
rating.push({"title": watchList[i]["Title"],  "rating": watchList[i]["imdbRating"]});
}
*/
let rating = watchList.map(function(item) {
    return {"title": item["Title"], "rating": item["imdbRating"]}
});

console.log(rating); 
//////////////////////////////////////////////////
//// my MAP
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i <= this.length - 1; i += 1) {
      newArray.push(callback(this[i]));
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
//////////////////////////////////////////////////Use the filter Method to Extract Data from an Array
// the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];

// Add your code below this line

let preFilteredList = watchList.filter(function(item){
    return Number(item['imdbRating']) >= 8.0;   
});
let filteredList = preFilteredList.map(function (item) {
  return  {"title": item['Title'], "rating": item['imdbRating']}; 
});

// Add your code above this line

console.log(filteredList); 
/////////////////////////////////////////////// my FILTER
// the global Array

var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i <= this.length; i += 1) {
      if (this[i] % 2 === 1) {
        newArray.push(this[i]);
      }
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
//////////////////////////////////////////////// slice and splice
function nonMutatingSplice(cities) {
    // Add your code below this line
    let localCopyArr = [...cities];
    return localCopyArr.slice(); 
    
    // Add your code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  let result = nonMutatingSplice(inputCities);
  console.log(result);
  //////////////////////////////////////////Use the reduce Method to Analyze Data
// the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];

// Add your code below this line
let watchListCOpy = [...watchList];
const filteredList = watchListCOpy.filter((item) => item['Director'] = "Christopher Nolan");
const mapFilteredList = filteredList.map((newItem) => ({"rating": newItem['imdbRating']}));
const redusedList = mapFilteredList.reduce(function(acc, value){
  return acc + parseFloat(value['rating']);
}, 0);
let averageRating = (redusedList.toFixed(3) / (mapFilteredList.length));

console.log(mapFilteredList);
console.log(redusedList);
console.log(averageRating.toFixed(3));

// and variant!!!!!!!!
var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;

/////////////////////////////////////////////////end this task
//

////////////////////////////////////////////////////// metod SORT
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a > b;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//                                          sort with concat (for not mutation index array)
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let localArr = [];
  return arr.concat(localArr).sort((a, b) => a - b);
  
  // Add your code above this line
}
nonMutatingSort(globalArray);
///////////////////////////////////////////////////


//                                              urlSlug
// the global variable
var globalTitle = " Winter   Is    Coming";

// Add your code below this line
function urlSlug(title) {
  let localVal = title;
  let arr =  localVal.split(/[ +]/gm);                     // wtf with first "  ";
  let copyArr = [];
  arr.forEach(function(item) {
    copyArr.push(item.toLowerCase());
  });
  return copyArr.filter(x => x !== '').join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);
/*
The globalTitle variable should not change.
Your code should not use the replace method for this challenge.
urlSlug("Winter Is Coming") should return "winter-is-coming".
urlSlug(" Winter Is  Coming") should return "winter-is-coming".
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".
urlSlug("Hold The Door") should return "hold-the-door".
*/
<<<<<<< HEAD
=======

///                                                  arr.every
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
/////////////////////////////////////////////
function checkPositive(arr) {
  // Add your code below this line
 return arr.every(item => item > 0);
  
  // Add your code above this line
}
let val = checkPositive([1, 2, 3, -4, 5]);
console.log(val);
////////////////////////////////////////////////
//                                                    curryng
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
add(10)(20)(30);  
///
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
/////////////////////////////////////////////////////////////////////////////

