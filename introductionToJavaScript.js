// first part of Javascript Algorithms And Data Structures Certification (300 hours)



//////////////////////////////////////////////////////// Using Objects for Lookups:

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chocago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };

    result = lookup.alpha(val); // ore result = lookup[val];
    // the same:
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }


    return result;
}
phoneticLookup("charlie");

///////////////////////////////////////////////////////// checkout proprty exist in obj; 
// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
}
// Test your code by modifying these values
checkObj("gift");


/////////////////////////////////////////////////////////////////// golf game 
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else if (strokes >= par + 3) {
        return "Go Home!"
    }

    return "Change Me";
    // Only change code above this line
}

// Change these values to test
golfScore(4, 4);


//////////////////////////////////////////////////////////////// card counter

var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
    if (count <= 0) {
        console.log(count + " Hold\n");
    } else {
        console.log(count + " Bet\n");
    }
    return "Change Me";
    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(7);
cc('K');
cc('A');


///////////////////////////////////////////////////// add records to object in array
var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
    // Add record here
];

function addRec(array, artist, title, release_year, formats) {
    var newRec = {
        "artist": artist,
        "title": title,
        "release_year": release_year,
        "formats": formats
    };
    array.push(newRec);
};


addRec(myMusic, "Cloe", "My life", 2003, ["CD", "DVD"]);
var output = JSON.stringify(myMusic, null, '\t');
console.log(output);

////////////////////////////////////////////////////////////modify collection

var collection = {
    "2548": {
        "album": "Slyppery when Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// keep a copy of collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// проп может быть как артистом так и тракс
// функция модицицирует обьект и возвращает его
// если проп не тракс и вэлью не пустое, апдейтить или установить
//  вэлью для этой записи
//
// если проп  - тракс но альбом не имеет тракс в свойствах
// создать пустой аррей перед тем как добавлять новое велью в 
// альбом
// если проп - тракс и вэлью  - НЕ пустое  - пушим вэлью в конец альбома // существующих траков
// если вэлью пустое удаляем данное проп свойство из альбома
// использовать скобочный доступ
function updateRecords(id, prop, value) {
    if (prop == "tracks") {
        if (collection[id].hasOwnProperty(prop)) {
            collection[id][prop].push(value);
        } else {
            var newTrackArr = [];
            collection[id][prop] = newTrackArr;
            collection[id][prop].push(value);
        }
    }
    if (value == "") {
        delete collection[id][prop];
    }
    if (!collection[id].hasOwnProperty(prop)) {
        collection[id][prop] = value;
        console.log(collection[id][prop]);
        console.log(collection[id][prop][value]);
    }
    return collection;
};

updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "") // artist shud NOT be strokes
updateRecords(1245, "tracks", "Addicted to Love") // last element
updateRecords(2468, "tracks", "Free") // 1999 - first element
updateRecords(2548, "tracks", "") // not be set
updateRecords(1245, "album", "Riptide") // album Riptide

var output = JSON.stringify(collection, null, '\t');
console.log(output);

// new task/ check profile
//////////////////////////////////////////////////////////////// lookup in contact list
//Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

for (let i = 0; i < contacts.length; i += 1) {
    var output = JSON.stringify(contacts[i], null, '\t');
    console.log(output);
};

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i += 1) {
        if (contacts[i]['firstName'] == name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

// Change these values to test your function
lookUpProfile("Akira", "likes"); // array
lookUpProfile("Kristian", "lastName"); //Vos
lookUpProfile("Sherlock", "likes"); //["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes"); //"Hogwarts", "Magic", "Hagrid"
lookUpProfile("Bob", "number"); //"No such contact"
lookUpProfile("Bob", "potato"); //"No such contact"
lookUpProfile("Akira", "address"); // No such property