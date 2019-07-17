//////////////////////////////////////////////////////////////////////ES6

/////////////////////////////////////////////////////////Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    // change code below this line
    const integersArray = arr.filter((member) => member % 1 == 0 && member > 0);
    //console.log(integersArray);
    const squared = integersArray.map((memberInt) => memberInt ** 2);
    //console.log(squaredIntegers);
    // change code above this line
    //return squaredIntegers;
    return squared;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
////////////////////////////////////////////
// new task
////////////////////////////////////////////////////////// default function  parametr
const defParam = (function() {
    return function defParam(num, value = 1) {
        return num + value;
    }
})();
defParam(5, 1);
/////////////////////////////////////////////////////////////  rest args function
const sum = (function() {
    "use strict";
    return function sum(...args) {
        const arg = [...args];
        return arg.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6
///////////////////////////////////////////////////////////// spread operator/
/////////////////////////////////////////////////////////////array copy
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    "use strict";
    arr2 = [...arr1]; // change this line
})();
console.log(arr2);
/////////////////////////////////////////////////////////////distructing assignment
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
//////////////////////////////////////////////////////////// distructing assignment for nasted object
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const { tomorrow: { max: maxOfTomorrow } } = forecast; // change this line
    // change code above this line
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
///////////////////////////////////////////////////////its COOL!!!! destruction ES6 !!! change varisabes
let a = 8,
    b = 6;
(() => {
    [a, b] = [b, a];
})();
console.log(a); // should be 6
console.log(b); // should be 8

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
//////////////////////////////////////////////////////Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [a, b, ...arr] = list; //                           !!!!  like arr.slice !!!!  
    // change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
//////////////////////////////////////////////////////////////  Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    "use strict"; // do not change this line

    // change code below this line
    return function half({ max, min }) {
        // use function argument destructuring
        return (stats.max + stats.min) / 2.0;
    };
    // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
////////////////////////////////////////////////////////////Create Strings using Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`,
        `<li class="text-warning">${arr[1]}</li>`,
        `<li class="text-warning">${arr[2]}</li>
    `
    ];
    // change code above this line

    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
///////////////////////////////////////////////////////////////////////or!!!!!!!!!!!!!!!!! use MAP
const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);


//////////////////////////////////////////////////////////////Write Concise Object Literal Declarations Using Simple Fields

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return ({ name, age, gender });
    // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//////////////////////////////////////////////////////////////////////////ES6: Write Concise Declarative Functions with ES6
// change code below this line
// change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
////////////////////////////////////////////////////////Use class Syntax to Define a Constructor Function
class Vegetable {

    constructor(name) {
        "use strict";
        /* Alter code below this line */
        this.name = name;
        /* Alter code above this line */
    }
}
//const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

////////////////////////////////////////////////////////Use getters and setters to Control Access to an Object
class Book {
    constructor(author) {
            this._author = author;
        }
        // getter
    get writer() {
            return this._author;
        }
        // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const lol = new Book('anonymous');
console.log(lol.writer); // anonymous
lol.writer = 'wut';
console.log(lol.writer); // wut

/////////////////////////////////////////////
class Thermostat {
    "use strict";
    /* Alter code below this line */
    constructor(tempStatus) {
        this.temperature = 5 / 9 * (tempStatus - 32);
    }

    get tempThermostat() {
        return this.temperature;
    }

    set tempThermostat(upTemperature) {
            this.temperature = upTemperature;
        }
        /* Alter code above this line */

}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C; // setting in Fahrenheit scale