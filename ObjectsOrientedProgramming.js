//// part of Free Code Camp JS algoritm & basic structures
// adds all of the own properties  to the array ownProps:
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
/////////////////////////////////////////////////////////////////////
/// object own oroperty and object.prototip property
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;                // ad prototip property to Dog's object

let beagle = new Dog("Snoopy");           // new Dog's object. Its be have dog's prototip property, but itisn own property!!

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
///////////////////////////////////////
/// check constructor property
function Dog ()  {
  this.name;
  this.color;
}

let Burt = new Dog();
console.log(Burt instanceof Dog);
////////////////////////
// and another metod with property "constructor"
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  return candidate.constructor == Dog ? true : false;
}
//////////////////////////////////////////
///                                       Remember to Set the Constructor Property when Changing the Prototype!!!!
/////////////////////////////////////////          Dog.prototipe = { constructor: Dog,.........}
//check prototipe ->  born object consrtuctor ""?
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle); // return true
///
///Understand the Prototype Chain 
////////////////////////////////////////////////////////////////INHERITED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //////////////////////////////////////////// Create superType for prototype
function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 

};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 

};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let myau = Object.create(Animal.prototype);
let uHr = Object.create(Animal.prototype);
let ups = Object.create(Animal.prototype);

myau.eat();
uHr.eat();
ups.eat();
////////////////////Set the Child's Prototype to inherited of the Parent
//


///                                       ChildObject.prototype = Object.create (ParentObject.prototype);
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype); // create instance from Animal supertype for Dog.proto!!

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
////////////////////////////////////////
//
// add the function to child prototyp
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {               // here is. add the unicum function to Dog 
  console.log("Woof!");
}



// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

////////////                                    Override Inherited Methods
function Bird() { };
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
}
let penguin = new Penguin();
console.log(penguin.fly);
///////
/////////////////////////////////////// use MIXIN !!!
let flyMixin = function(object) {
    object.fly = function () {
        return "I can fly!";
    }
} 

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
  flyMixin(bird);
  flyMixin(plane);

////////////Use Closure to Protect Properties Within an Object from Being Modified Externally
//
function Bird() {
    let weight = 15;                     // only LOCAL!!!
    this.getWeight = function() {        // for access from anothet to get weight!
      return weight;
    }
  }
  let ducky = new Bird();
ducky.getWeight(); // returns 15
//////////////////     Understand the Immediately Invoked Function Expression (IIFE)
////////////////////
(function () {
  console.log ("Чирп, щебет!");
}) ();
////////////////////       Use an IIFE to Create a Module
//
let motionModule = (function () {
    return {
      glideMixin: function (obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  }) (); // The two parentheses cause the function to be immediately invoked

  motionModule.glideMixin(duck);
  duck.glide();
  ///////////////////
  let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        }
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        }
      }
    }
  })();
  /////////////////
  /////////////////////
  //its very cute for consentration one type metods to one place
  

